import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import test from 'node:test';
import assert from 'node:assert/strict';
const requireAstro = createRequire(fs.realpathSync('node_modules/astro/package.json'));
const { transform } = requireAstro('@astrojs/compiler-rs');

test('Installed Astro compiler extracts plain scripts and leaves lang=ts imports unprocessed', () => {
  const body = 'import { getStats } from "./progress"; console.log(getStats);';
  const original = transform(`<script lang="ts">${body}</script>`, { filename: 'probe.astro' });
  const fixed = transform(`<script>${body}</script>`, { filename: 'probe.astro' });
  assert.equal(original.scripts.length, 0);
  assert.equal(fixed.scripts.length, 1);
  assert.match(fixed.scripts[0].code, /import \{ getStats \}/);
});

for (const page of ['preguntas', 'estadisticas']) {
  test(`Built ${page} uses bundled module assets instead of raw source imports`, () => {
    const ssr=fs.existsSync('dist/server/entry.mjs');
    if(ssr){
      const source=fs.readFileSync(`src/pages/materias/aws/${page}.astro`,'utf8');
      const compiled=transform(source,{filename:`${page}.astro`});
      assert.ok(compiled.scripts.length>0,'Actual page scripts must be extracted by Astro');
      const assets=fs.readdirSync('dist/client/_astro').filter(n=>n.startsWith(`${page}.astro_astro_type_script_`)&&n.endsWith('.js'));
      assert.ok(assets.length,'No bundled module in SSR client build');
      for(const asset of assets){const js=fs.readFileSync(path.join('dist/client/_astro',asset),'utf8');assert.doesNotMatch(js,/\.\.\/\.\.\/\.\.\/(?:scripts\/progress|content\/modules)/);for(const m of js.matchAll(/from\s*["'`]([^"'`]+)["'`]/g)){assert.ok(m[1].startsWith('./'),'Browser bundle has an unresolved bare import');assert.ok(fs.existsSync(path.resolve('dist/client/_astro',m[1])),'Missing browser dependency');}}
      return;
    }
    const html = fs.readFileSync(`dist/materias/aws/${page}/index.html`, 'utf8');
    assert.doesNotMatch(html, /<script[^>]*lang=["']ts["']/);
    assert.doesNotMatch(html, /\.\.\/\.\.\/\.\.\/(?:scripts\/progress|content\/modules)/);
    const tags = [...html.matchAll(/<script\b([^>]*)>/g)].map(m => m[1]);
    const modules = tags.filter(tag => /type="module"/.test(tag) && /src="/.test(tag));
    assert.ok(modules.length > 0, 'No bundled module');
    for (const tag of modules) {
      const src = tag.match(/src="([^"]+)"/)[1];
      assert.ok(src.startsWith('/_astro/'), 'Module must refer to built asset');
      assert.ok(fs.existsSync(path.join('dist', src)), 'Missing module asset');
    }
  });
}
