import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';
import test from 'node:test';
import { planContent, applyPlan, frontmatter, rewriteLinks, digest } from '../../../scripts/content-pipeline.mjs';
const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync('scripts/content-manifest.json', 'utf8'));
const plan = planContent(root, manifest);

test('All 18 chapters preserve teaching text; changes limited to URLs and metadata', () => {
  assert.equal(manifest.chapters.length, 18);
  for (const c of manifest.chapters) {
    let old = frontmatter(fs.readFileSync(c.destination, 'utf8')).body.trim();
    if (old.startsWith('---\n')) old = frontmatter(old).body.trim();
    const output = frontmatter(plan.outputs.get(c.destination).bytes.toString('utf8'));
    assert.equal(rewriteLinks(old, () => '<LINK>'), rewriteLinks(output.body.trim(), () => '<LINK>'), c.id);
    assert.equal(output.metadata.id, c.id);
    assert.notEqual(output.metadata.title, '---');
    assert.equal(output.body.trimStart().startsWith('---\n'), false, 'Nested metadata: ' + c.id);
  }
});

test('Editorial edit and new figure propagate in isolated copy; second sync is a no-op', () => {
  const fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'notes-hub-T02A-editorial-'));
  const originals = new Map();
  for (const input of new Set([...plan.report.files.map(f => f.input), ...Object.values(manifest.preservedInputs)])) {
    const from = path.join(root, input), to = path.join(fixture, input);
    fs.mkdirSync(path.dirname(to), { recursive: true }); fs.copyFileSync(from, to);
    originals.set(input, digest(fs.readFileSync(from)));
  }
  const c = manifest.chapters[0];
  const sentinel = '\n\nSynthetic editorial fixture for T02A.\n\n![Synthetic figure](figuras/t02a-fixture.svg)\n';
  fs.appendFileSync(path.join(fixture, c.source), sentinel);
  const figure = path.join(fixture, path.dirname(c.source), 'figuras/t02a-fixture.svg');
  fs.writeFileSync(figure, '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>');
  const first = planContent(fixture, manifest); applyPlan(fixture, first);
  const generated = fs.readFileSync(path.join(fixture, c.destination), 'utf8');
  assert.ok(generated.includes('Synthetic editorial fixture for T02A.'));
  assert.ok(generated.includes('/study-figures/bloque-1/t02a-fixture.svg'));
  assert.ok(fs.existsSync(path.join(fixture, manifest.assetRoot || 'public/', 'study-figures/bloque-1/t02a-fixture.svg')));
  const second = planContent(fixture, manifest); assert.equal(second.report.changes.length, 0);
  for (const [input, hash] of originals) assert.equal(digest(fs.readFileSync(path.join(root, input))), hash, 'Original mutated: ' + input);
  console.log('Isolated copy retained for inspection: ' + fixture);
});

test('Missing input or duplicate identity fails before applying any changes', () => {
  const missing = structuredClone(manifest); missing.chapters[0].source = 'aws-clf-c02/missing-fixture.md';
  assert.throws(() => planContent(root, missing), /Missing editorial input/);
  const duplicate = structuredClone(manifest); duplicate.chapters[1].id = duplicate.chapters[0].id;
  assert.throws(() => planContent(root, duplicate), /Duplicate chapter id/);
});
