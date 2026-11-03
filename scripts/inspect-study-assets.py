"""Read-only image-file verification and PDF annotation inventory; never edits assets."""
from pathlib import Path
from urllib.parse import urlparse, unquote
import argparse
import json
import sys

parser = argparse.ArgumentParser()
parser.add_argument('--report', required=True)
args = parser.parse_args()
root = Path('.').resolve()
manifest = json.loads((root / 'scripts/content-manifest.json').read_text(encoding='utf8'))
public = root / manifest.get('assetRoot', 'public/')
result = {'images_checked': 0, 'pdfs': [], 'errors': [], 'external_not_fetched': []}

try:
    from PIL import Image
except ImportError:
    result['errors'].append({'kind': 'missing-image-inspector', 'dependency': 'Pillow'})
else:
    for file in sorted(public.rglob('*')):
        if file.suffix.lower() not in {'.jpg', '.jpeg', '.png', '.webp'}:
            continue
        try:
            with Image.open(file) as image:
                image.verify()
            result['images_checked'] += 1
        except Exception as exc:
            result['errors'].append({'path': file.relative_to(root).as_posix(), 'error': str(exc)})

# Prefer a normal installation; this repository also has an existing ignored tool bundle.
try:
    import fitz
except ImportError:
    bundle = root / '.pdf-tools'
    if bundle.is_dir():
        sys.path.insert(0, str(bundle))
    try:
        import fitz
    except ImportError:
        fitz = None

def inspect_target(file, uri, page):
    parsed = urlparse(uri)
    if parsed.scheme in {'http', 'https', 'mailto'}:
        result['external_not_fetched'].append(uri)
        return
    if not parsed.path:
        return
    if parsed.scheme:
        result['errors'].append({'path': file.relative_to(root).as_posix(), 'page': page, 'kind': 'non-web-target', 'target': uri})
        return
    target = (public / unquote(parsed.path).lstrip('/')) if parsed.path.startswith('/') else file.parent / unquote(parsed.path)
    if not target.resolve().is_relative_to(public):
        result['errors'].append({'path': file.relative_to(root).as_posix(), 'page': page, 'kind': 'outside-public', 'target': uri})
    elif not target.exists():
        result['errors'].append({'path': file.relative_to(root).as_posix(), 'page': page, 'kind': 'missing-file', 'target': uri})

if fitz is None:
    result['errors'].append({'kind': 'missing-pdf-inspector', 'dependency': 'PyMuPDF (existing bundle unavailable)'})
else:
    result['pdf_tool'] = {'name': 'PyMuPDF', 'version': fitz.VersionBind}
    for file in sorted(public.rglob('*.pdf')):
        try:
            with fitz.open(file) as doc:
                links = []
                for number, page in enumerate(doc, 1):
                    for link in page.get_links():
                        record = {'page': number, 'kind': link.get('kind')}
                        if link.get('uri'):
                            record['uri'] = link['uri']
                            inspect_target(file, link['uri'], number)
                        elif link.get('file'):
                            record['file'] = link['file']
                            inspect_target(file, link['file'], number)
                        elif link.get('page', -1) >= 0:
                            record['destination_page'] = link['page'] + 1
                            if link['page'] >= len(doc):
                                result['errors'].append({'path': str(file.relative_to(root)), 'kind': 'invalid-page-destination', 'page': number})
                        links.append(record)
                result['pdfs'].append({'path': file.relative_to(root).as_posix(), 'pages': len(doc), 'links': links})
        except Exception as exc:
            result['errors'].append({'path': file.relative_to(root).as_posix(), 'error': str(exc)})

result['external_not_fetched'] = sorted(set(result['external_not_fetched']))
Path(args.report).write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n', encoding='utf8')
print(json.dumps({'images': result['images_checked'], 'pdfs': len(result['pdfs']), 'errors': len(result['errors'])}))
sys.exit(bool(result['errors']))
