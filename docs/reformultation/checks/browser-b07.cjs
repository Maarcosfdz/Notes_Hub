// Called by the Playwright connector with an injected reference fixture.
async (page) => {
  const fixture = /*FIXTURE*/ null;
  const ctx = await page.context().browser().newContext({ viewport: { width: 1365, height: 900 }, reducedMotion: 'reduce', acceptDownloads: true });
  const p = await ctx.newPage(); p.setDefaultTimeout(10000);
  const errors = [], networkFailures = [], runs = [], checks = [];
  p.on('pageerror', error => errors.push({ message: error.message, stack: error.stack }));
  p.on('requestfailed', request => networkFailures.push({ url: request.url(), error: request.failure()?.errorText }));
  const check = (value, message) => { if (!value) throw Error(message); };
  const same = (a,b) => JSON.stringify(a) === JSON.stringify(b);
  const stats = () => p.evaluate(() => JSON.parse(localStorage.getItem('study:aws:stats')));
  const show = async (q) => {
    check(await p.locator('#quiz h2').textContent() === q.q, 'Question heading differs: ' + q.id);
    const options = await p.locator('#quiz .option > span').allTextContents();
    check(same(options, q.options), 'Options differ: ' + q.id);
    check(await p.locator('#quiz .feedback').count() === 0, 'Explanation shown before check');
    check(await p.locator('#quiz input:checked').count() === 0, 'Selection leaked from previous question');
  };
  const answer = async (q, shouldBeCorrect) => {
    const indices = shouldBeCorrect ? [...q.correct].sort((a,b)=>a-b) : [q.options.findIndex((_,i) => !q.correct.includes(i))];
    check(indices.every(i => i >= 0), 'No valid synthetic choice');
    for (const index of indices) await p.locator(`#quiz input[value="${index}"]`).check();
    await p.getByRole('button', { name: 'Comprobar respuesta', exact: true }).click();
    const feedback = await p.locator('#quiz .feedback').textContent();
    check(feedback.startsWith(shouldBeCorrect ? 'Correcto.' : 'Incorrecto.'), 'Incorrect grading: ' + q.id);
    check(feedback.includes(q.why), 'Explanation differs: ' + q.id);
    check(await p.locator('#quiz input:not(:disabled)').count() === 0, 'Options not locked');
    // A second native activation must not append another attempt.
    await p.getByRole('button', { name: 'Comprobar respuesta', exact: true }).evaluate(button => button.click());
    return { indices, feedback };
  };
  let expectedDone = 0, expectedOk = 0;
  const expectedByLevel = {}, expectedAnswered = {}, expectedFailed = new Set();
  try {
    await p.goto('http://127.0.0.1:4329/materias/aws/preguntas/');
    await p.evaluate(() => {
      localStorage.setItem('study:aws:bank-2026-480', 'true');
      localStorage.setItem('study:aws:stats', JSON.stringify({ done: 0, ok: 0, failed: [], byLevel: {}, answered: {}, history: [] }));
    });
    for (const mode of ['1','2','3']) {
      const series = fixture.exams[Number(mode) - 1];
      const trace = [], start = await stats();
      await p.locator('[data-mode]').selectOption(mode);
      check(await p.locator('[data-level]').isDisabled(), 'Exam difficulty filter is active');
      check(await p.locator('[data-topic]').isDisabled(), 'Exam topic filter is active');
      check(await p.locator('[data-failed]').isDisabled(), 'Exam failed filter is active');
      let correct = 0, multiples = 0;
      for (let i = 0; i < 65; i++) {
        const q = fixture.bank.find(q => q.id === series[i].id);
        check(q, 'Missing referenced question'); await show(q);
        if (i === 0) {
          await p.getByRole('button', { name: 'Comprobar respuesta', exact: true }).click();
          check(await p.locator('[data-answer-hint]').count() === 1, 'Empty answer lacks guidance');
          check((await stats()).done === expectedDone, 'Empty answer recorded');
        }
        const shouldBeCorrect = Number(mode) === 1 ? i % 5 !== 0 : Number(mode) === 2 ? i % 4 !== 0 : i % 7 !== 0;
        const selected = await answer(q, shouldBeCorrect);
        expectedDone++; if (shouldBeCorrect) { expectedOk++; correct++; expectedFailed.delete(q.id); } else expectedFailed.add(q.id);
        if (q.correct.length > 1) multiples++;
        expectedByLevel[q.level] ||= { done: 0, ok: 0 }; expectedByLevel[q.level].done++; if (shouldBeCorrect) expectedByLevel[q.level].ok++;
        expectedAnswered[q.id] = (expectedAnswered[q.id] || 0) + 1;
        const actual = await stats(), last = actual.history.at(-1);
        check(actual.done === expectedDone && actual.ok === expectedOk, 'Aggregate score differs at ' + mode + '/' + (i+1));
        check(actual.history.length === expectedDone, 'Missing or duplicate attempt');
        check(last.questionId === q.id && last.ok === shouldBeCorrect, 'History ID/result differs');
        check(same(last.selected, selected.indices.map(i => q.options[i])), 'History selection differs');
        check(last.why === q.why && same(last.correct, [...q.correct].sort((a,b)=>a-b).map(i=>q.options[i])), 'History explanation/key differs');
        trace.push({ position: i+1, expectedId: series[i].id, actualId: last.questionId, selected: selected.indices, correct: last.ok });
        const following = await p.getByRole('button', { name: 'Siguiente pregunta', exact: false }).elementHandle();
        await following.click();
        // Retained old control cannot advance a second time after being consumed.
        await following.evaluate(button => button.click()); await following.dispose();
      }
      const finalText = await p.locator('#quiz p').textContent();
      const accuracy = Math.round(correct / 65 * 100);
      check(finalText.includes('Serie completada: 65 preguntas.'), 'Completion absent');
      check(finalText.includes(`Resultado: ${correct}/65 correctas (${accuracy}%)`), 'Per-exam result differs');
      check(finalText.includes('no una puntuación oficial AWS'), 'Official score disclaimer absent');
      check(await p.locator('#quiz h2').count() === 0 && await p.locator('#quiz input').count() === 0, 'Question 66 rendered');
      const end = await stats(); check(end.done - start.done === 65, 'Wrong attempt delta for exam');
      check(new Set(trace.map(t => t.actualId)).size === 65, 'Repeated question in exam');
      runs.push({ mode, expectedIds: series.map(q=>q.id), trace, answered: 65, correct, wrong: 65-correct, accuracy, multipleQuestions: multiples, finalText, startDone: start.done, endDone: end.done });
      // Restart has no persistence side effects; changing away/back discards unchecked choices.
      const beforeRestart = JSON.stringify(end);
      await p.getByRole('button', { name: 'Reiniciar simulacro', exact: true }).click();
      await show(fixture.bank.find(q => q.id === series[0].id));
      check(JSON.stringify(await stats()) === beforeRestart, 'Restart rewrote persisted attempts');
      await p.locator('#quiz input').first().check();
      const other = mode === '3' ? '1' : String(Number(mode)+1);
      await p.locator('[data-mode]').selectOption(other);
      await show(fixture.bank.find(q => q.id === fixture.exams[Number(other)-1][0].id));
      await p.locator('[data-mode]').selectOption(mode);
      await show(fixture.bank.find(q => q.id === series[0].id));
      check(JSON.stringify(await stats()) === beforeRestart, 'Mode change recorded an unchecked attempt');
    }
    const afterExams = await stats();
    check(afterExams.done === 195 && afterExams.ok === expectedOk, 'Final 195 score differs');
    check(same(afterExams.byLevel, expectedByLevel), 'Per-level aggregates differ');
    check(same(afterExams.answered, expectedAnswered), 'Per-question counters differ');
    check(same([...afterExams.failed].sort((a,b)=>a-b), [...expectedFailed].sort((a,b)=>a-b)), 'Failed set differs');
    checks.push('All 195 IDs, selections, explanations, history entries and aggregate counters match');
    await p.goto('http://127.0.0.1:4329/materias/aws/estadisticas/');
    check(await p.locator('[data-done]').textContent() === '195', 'Statistics done differs');
    check(await p.locator('[data-correct]').textContent() === String(expectedOk), 'Statistics correct differs');
    check(await p.locator('[data-accuracy]').textContent() === `${Math.round(expectedOk/195*100)}%`, 'Statistics accuracy differs');
    check(await p.locator('[data-history] details').count() === 30, 'Recent 30 history entries missing');
    await p.reload(); check(same(await stats(), afterExams), 'Reload lost attempts');
    checks.push('Statistics and persisted 195-entry history survive reload');
    const downloadEvent = p.waitForEvent('download'); await p.locator('[data-export]').click(); const download = await downloadEvent;
    const stream = await download.createReadStream(); let exported = ''; for await (const chunk of stream) exported += chunk.toString();
    const payload = JSON.parse(exported); check(same(payload.subjects.aws.stats, afterExams), 'Export changed exam history');
    check(payload.bankRevision === '2026-480', 'Current-bank mark absent in export');
    await p.evaluate(() => localStorage.removeItem('study:aws:stats'));
    p.once('dialog', dialog => dialog.accept());
    const reloaded = p.waitForEvent('load'); await p.locator('[data-import]').setInputFiles(await download.path()); await reloaded;
    check(same(await stats(), afterExams), 'Import roundtrip changed history');
    check(await p.locator('[data-done]').textContent() === '195', 'Imported statistics not rendered');
    checks.push('Actual download and file-input import restore all 195 attempts');
    // Normal practice and failed-only mode use their existing random selection.
    await p.goto('http://127.0.0.1:4329/materias/aws/preguntas/');
    check(await p.locator('[data-mode]').inputValue() === 'practice', 'Reload retained nonpersistent exam session');
    check(!await p.locator('[data-level]').isDisabled(), 'Practice filters remained disabled');
    const target = fixture.bank.find(q => q.correct.length === 1);
    await p.locator('[data-level]').selectOption(target.level); await p.locator('[data-topic]').selectOption(target.topic);
    let heading = await p.locator('#quiz h2').textContent(); let q = fixture.bank.find(q=>q.q===heading);
    check(q.level === target.level && q.topic === target.topic, 'Practice topic/difficulty mismatch'); await answer(q, false);
    check((await stats()).failed.includes(q.id), 'Practice failure not recorded');
    await p.locator('[data-level]').selectOption('Todos'); await p.locator('[data-topic]').selectOption('Todos'); await p.locator('[data-failed]').check();
    heading = await p.locator('#quiz h2').textContent(); q = fixture.bank.find(q=>q.q===heading);
    check((await stats()).failed.includes(q.id), 'Failed-only mode selected a nonfailed ID'); await answer(q, true);
    const finalStats = await stats(); check(!finalStats.failed.includes(q.id), 'Successful retry did not clear failed ID');
    check(finalStats.done === 197 && finalStats.ok === expectedOk+1, 'Practice aggregate delta differs');
    checks.push('Practice, topic/difficulty and failed-only retry still work (2 extra practice attempts)');
    check(errors.length === 0, 'JavaScript exceptions: ' + JSON.stringify(errors));
    check(networkFailures.length === 0, 'Failed network requests: ' + JSON.stringify(networkFailures));
    return { status: 'PASS', browser: ctx.browser().version(), runs, simulatedAnswers: 195, totalCorrect: expectedOk, afterExams: { done: afterExams.done, ok: afterExams.ok, accuracy: Math.round(afterExams.ok/195*100), failed: afterExams.failed.length, history: afterExams.history.length }, afterPractice: { done: finalStats.done, ok: finalStats.ok }, checks, errors, networkFailures, isolation: 'new context, synthetic choices only, closed in finally' };
  } catch (error) { return { status: 'FAIL', error: error.message, runs, expectedDone, expectedOk, errors, networkFailures, checks }; }
  finally { await ctx.close(); }
}
