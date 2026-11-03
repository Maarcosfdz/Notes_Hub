// Playwright tool function. Replace /*FIXTURE*/ null in memory with build-fixture.mjs output.
async (page) => {
  const fixture = /*FIXTURE*/ null;
  if (!fixture) throw Error('Inject synthetic fixture first; see run-browser-fixture.mjs');
  const base = 'http://127.0.0.1:4329';
  const ctx = await page.context().browser().newContext({ viewport: { width: 1365, height: 900 }, acceptDownloads: true });
  const p = await ctx.newPage();
  p.setDefaultTimeout(7000);
  const results = [], errors = [], broken = [], resources = new Set();
  let quizReady = false;
  p.on('pageerror', e => errors.push(e.message));
  const check = (value, message) => { if (!value) throw Error(message); };
  const run = async (name, fn) => {
    if (fixture.onlyRun && !fixture.onlyRun.some(prefix => name.startsWith(prefix))) return;
    if (/^(Question difficulty|Simple and|All three|Statistics and|Browser export)/.test(name) && !quizReady) { results.push({ name, status: 'BLOCKED', reason: 'Published quiz/statistics scripts do not execute; see runtime check. No synthetic repair injected.' }); return; }
    try { const evidence = await fn(); results.push({ name, status: 'PASS', evidence }); } catch (e) { results.push({ name, status: 'FAIL', error: e.message }); }
  };
  const goto = async url => { const r = await p.goto(base + url); check(r.status() === 200, `${url}: HTTP ${r.status()}`); };
  const currentQuestion = async () => { const text = await p.locator('#quiz h2').textContent(); const q = fixture.bank.find(q => q.q === text); check(q, 'Question missing from current bank'); return q; };
  const answer = async (q, correct = true) => {
    const selected = correct ? q.correct : [q.options.findIndex((_, i) => !q.correct.includes(i))];
    for (const i of selected) await p.locator(`#quiz input[value="${i}"]`).check();
    await p.getByRole('button', { name: 'Comprobar respuesta', exact: true }).click();
    const feedback = await p.locator('.feedback').textContent();
    check(feedback.startsWith(correct ? 'Correcto.' : 'Incorrecto.'), 'Wrong correction');
    check(feedback.includes(q.why), 'Explanation missing');
    check(await p.locator('#quiz input:not(:disabled)').count() === 0, 'Options still active');
  };
  try {
    await goto('/');
    await p.evaluate(() => { localStorage.setItem('study:aws:bank-2026-480', 'true'); });
    await run('Navigation: area → subject → chapter', async () => {
      await p.locator('a[href="/areas/devops/"]').first().click();
      await p.locator('a[href="/materias/aws/"]').first().click();
      await p.locator('a[href="/materias/aws/apuntes/"]').first().click();
      const note = p.locator(`a[href="/materias/aws/${fixture.noteId}/"]`).first();
      await note.click(); check((await p.locator('article h1').first().textContent()).length > 0, 'Missing chapter');
      return p.url();
    });
    await run('All 35 generated routes respond and render; chapter assets collected', async () => {
      for (const route of fixture.routes) {
        await goto(route);
        check(await p.locator('main').count() === 1, 'Missing main: ' + route);
        if (fixture.notes.includes(route)) {
          const links = await p.locator('article [href], article img[src]').evaluateAll(nodes => nodes.map(n => n.href || n.src));
          for (const u of links) { const url = new URL(u); if (url.origin === base) { url.hash = ''; resources.add(url.href); } }
        }
      }
      return { routes: fixture.routes.length, uniqueChapterTargets: resources.size };
    });
    await run('Chapter local resources and linked documents return success', async () => {
      const queue = [...resources];
      await Promise.all(Array.from({ length: 8 }, async () => { while (queue.length) { const url = queue.pop(); const r = await ctx.request.get(url); if (!r.ok()) broken.push({ url: new URL(url).pathname, status: r.status() }); await r.dispose(); } }));
      check(broken.length === 0, `${broken.length} failed linked resources`);
      return { checked: resources.size };
    });
    await run('Concept search, alias and group filter', async () => {
      await goto('/materias/aws/terminos/');
      check(await p.locator('[data-term]').count() === 247, 'Wrong concepts count');
      await p.locator('[data-search]').fill(fixture.term[0]);
      check(await p.locator('[data-term]:visible').count() > 0, 'No term match');
      if (fixture.term[5]?.length) { await p.locator('[data-search]').fill(fixture.term[5][0]); check(await p.locator('[data-term]:visible').count() > 0, 'No alias match'); }
      await p.locator('[data-search]').fill('');
      const group = p.locator('[data-groups] button').nth(1); const label = await group.getAttribute('data-group'); await group.click();
      const groups = await p.locator('[data-term]:visible').evaluateAll(rows => rows.map(r => r.dataset.group)); check(groups.length > 0 && groups.every(g => g === label), 'Wrong group results');
      await goto('/buscar/?q=IAM'); check(await p.locator('[data-results] a').count() > 0, 'Global search has no results');
    });
    await run('Reading and bookmark buttons persist after reload', async () => {
      await goto(`/materias/aws/${fixture.noteId}/`);
      await p.locator('[data-save]').click(); await p.locator('[data-read]').click(); await p.reload();
      check(await p.locator('[data-save]').getAttribute('aria-pressed') === 'true', 'Bookmark lost');
      check(await p.locator('[data-read]').getAttribute('aria-pressed') === 'true', 'Reading lost');
    });
    await run('Published quiz and statistics client scripts execute', async () => {
      await goto('/materias/aws/preguntas/');
      const inlineImports = await p.locator('script[lang="ts"]').evaluateAll(nodes => nodes.filter(n => /\bimport\s/.test(n.textContent)).length);
      await goto('/materias/aws/estadisticas/');
      const statsImports = await p.locator('script[lang="ts"]').evaluateAll(nodes => nodes.filter(n => /\bimport\s/.test(n.textContent)).length);
      await goto('/materias/aws/preguntas/');
      quizReady = await p.locator('#quiz h2').count() > 0;
      check(quizReady && inlineImports === 0 && statsImports === 0, `Quiz ready=${quizReady}; unprocessed import scripts: questions=${inlineImports}, statistics=${statsImports}; page errors=${JSON.stringify([...new Set(errors)])}`);
    });
    await run('Question difficulty/topic filters; empty failed pool and required selection', async () => {
      await goto('/materias/aws/preguntas/');
      const target = fixture.bank.find(q => q.correct.length === 1);
      await p.locator('[data-level]').selectOption(target.level); await p.locator('[data-topic]').selectOption(target.topic);
      const q = await currentQuestion(); check(q.level === target.level && q.topic === target.topic, 'Filter mismatch');
      await p.getByRole('button', { name: 'Comprobar respuesta', exact: true }).click();
      check(await p.locator('[data-answer-hint]').count() === 1, 'Missing required selection');
      check(await p.locator('.feedback').count() === 0, 'Premature explanation');
      await p.locator('[data-failed]').check(); check((await p.locator('#quiz').textContent()).includes('No hay preguntas falladas'), 'Missing empty result');
    });
    await run('Simple and multiple correction with explanation; failed-only retry', async () => {
      await goto('/materias/aws/preguntas/');
      // Randomness fixed only inside the isolated test page, never production code.
      await p.evaluate(() => { Math.random = () => 0; });
      let q;
      for (const wanted of [1, 2]) {
        const target = fixture.bank.find(q => wanted === 1 ? q.correct.length === 1 : q.correct.length > 1);
        await p.locator('[data-topic]').selectOption('Todos'); await p.locator('[data-level]').selectOption(target.level);
        const previous = await currentQuestion();
        let pool = fixture.bank.filter(q => q.level === target.level && q.topic === target.topic);
        if (pool.length > 1) pool = pool.filter(q => q.id !== previous.id);
        const index = pool.findIndex(q => wanted === 1 ? q.correct.length === 1 : q.correct.length > 1);
        check(index >= 0, 'No candidate of required type in filter pool');
        await p.evaluate(value => { Math.random = () => value; }, (index + 0.25) / pool.length);
        await p.locator('[data-topic]').selectOption(target.topic); q = await currentQuestion();
        check(wanted === 1 ? q.correct.length === 1 : q.correct.length > 1, 'Unable to select question type');
        await answer(q, true);
        const snapshot = await p.evaluate(() => JSON.parse(localStorage.getItem('study:aws:stats')));
        check(snapshot.history.at(-1).ok === true, 'Attempt not saved');
      }
      await p.getByRole('button', { name: 'Siguiente pregunta', exact: false }).click(); q = await currentQuestion(); await answer(q, false);
      await p.locator('[data-failed]').check(); const failedQuestion = await currentQuestion(); check(failedQuestion.id === q.id, 'Wrong failed question');
      await answer(failedQuestion, true);
      const stats = await p.evaluate(() => JSON.parse(localStorage.getItem('study:aws:stats')));
      check(!stats.failed.includes(q.id), 'Failed ID not removed after success'); return { done: stats.done, ok: stats.ok };
    });
    await run('All three mock exams complete 65 actual answers each', async () => {
      await goto('/materias/aws/preguntas/');
      const initial = await p.evaluate(() => JSON.parse(localStorage.getItem('study:aws:stats') || '{}').done || 0);
      for (const mode of ['1', '2', '3']) {
        await p.locator('[data-mode]').selectOption(mode);
        check(await p.locator('[data-level]').isDisabled(), 'Exam filters not disabled');
        for (let i = 0; i < 65; i++) { const q = await currentQuestion(); check(q.id === fixture.exams[Number(mode)-1][i].id, `Wrong exam order: ${mode}/${i}`); await answer(q); await p.getByRole('button', { name: 'Siguiente pregunta', exact: false }).click(); }
        check((await p.locator('#quiz').textContent()).includes('Serie completada: 65 preguntas'), 'Missing completion');
      }
      const final = await p.evaluate(() => JSON.parse(localStorage.getItem('study:aws:stats')).done);
      check(final - initial === 195, 'Wrong exam attempts count'); return { answered: 195 };
    });
    await run('Statistics and attempts persist after reload', async () => {
      await goto('/materias/aws/estadisticas/');
      const before = await p.locator('[data-done]').textContent(); check(Number(before) >= 195, 'Statistics missing');
      check(await p.locator('[data-history] details').count() === 30, 'Recent history count');
      await p.reload(); check(await p.locator('[data-done]').textContent() === before, 'Stats lost on reload');
    });
    await run('Browser export download and import with actual file input', async () => {
      await goto('/materias/aws/estadisticas/');
      const before = await p.evaluate(() => Object.fromEntries(['stats','progress','bookmarks'].map(k => [k, localStorage.getItem('study:aws:'+k)])));
      const downloaded = p.waitForEvent('download'); await p.locator('[data-export]').click(); const download = await downloaded;
      const stream = await download.createReadStream(); let text = ''; for await (const chunk of stream) text += chunk.toString(); const payload = JSON.parse(text);
      check(payload.version === 1 && payload.bankRevision === '2026-480', 'Export envelope invalid');
      await p.evaluate(() => { for (const k of ['stats','progress','bookmarks']) localStorage.removeItem('study:aws:'+k); });
      p.once('dialog', dialog => dialog.accept());
      await p.locator('[data-import]').setInputFiles(await download.path());
      await p.waitForFunction(() => Number(document.querySelector('[data-done]')?.textContent) >= 195);
      const after = await p.evaluate(() => Object.fromEntries(['stats','progress','bookmarks'].map(k => [k, localStorage.getItem('study:aws:'+k)])));
      check(JSON.stringify(before) === JSON.stringify(after), 'Import roundtrip changed study values'); return { fileName: download.suggestedFilename() };
    });
    await run('Light/dark theme persists after reload', async () => {
      await goto('/materias/aws/preguntas/');
      check(await p.locator('html').getAttribute('data-theme') === 'light', 'Unexpected initial theme');
      await p.locator('[data-theme-toggle]').click(); await p.reload(); check(await p.locator('html').getAttribute('data-theme') === 'dark', 'Dark theme lost');
      await p.waitForFunction(() => getComputedStyle(document.body).backgroundColor === 'rgb(25, 29, 26)');
      const dark = await p.locator('body').evaluate(el => getComputedStyle(el).backgroundColor);
      await p.locator('[data-theme-toggle]').click();
      await p.waitForFunction(() => getComputedStyle(document.body).backgroundColor === 'rgb(245, 242, 235)');
      const light = await p.locator('body').evaluate(el => getComputedStyle(el).backgroundColor); check(light !== dark, 'Theme colors unchanged');
      return { dark, light };
    });
    await run('Mobile has no page-level overflow', async () => {
      await p.setViewportSize({ width: 390, height: 844 });
      const widths = [];
      for (const route of ['/materias/aws/preguntas/', `/materias/aws/${fixture.noteId}/`, '/materias/aws/terminos/']) { await goto(route); widths.push({ route, ...await p.evaluate(() => ({ viewport: innerWidth, scrollWidth: document.documentElement.scrollWidth, overflowing: [...document.querySelectorAll('main *')].filter(el => el.getBoundingClientRect().right > innerWidth + 1).slice(0, 5).map(el => ({ tag: el.tagName, className: el.className, right: el.getBoundingClientRect().right })) })) }); }
      check(widths.every(w => w.scrollWidth <= w.viewport + 1), JSON.stringify(widths)); return widths;
    });
    await run('Keyboard skip link focuses main content', async () => {
      await goto('/'); await p.keyboard.press('Tab');
      check(await p.locator('.skip-link').evaluate(el => el === document.activeElement), 'Skip link not first keyboard stop');
      await p.keyboard.press('Enter'); check(p.url().endsWith('#contenido'), 'Skip target not reached');
    });
    return { results, broken, pageErrors: errors, isolation: 'new browser context; closed in finally', passed: results.filter(r => r.status === 'PASS').length, failed: results.filter(r => r.status === 'FAIL').length, blocked: results.filter(r => r.status === 'BLOCKED').length };
  } finally { await ctx.close(); }
}
