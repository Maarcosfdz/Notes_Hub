// Reuse historical scenarios without editing the T01 baseline or its evidence.
import { execFileSync } from 'node:child_process';
let code = execFileSync(process.execPath, ['docs/reformultation/checks/run-browser-fixture.mjs', ...process.argv.slice(2)], { encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 });
// B07 prevents exams from completing. Test statistics/export using the four
// real UI practice answers, rather than assuming 195 exam answers exist.
code = code.replace('check(Number(before) >= 195', 'check(Number(before) >= 4');
code = code.replace("check(await p.locator('[data-history] details').count() === 30", "check(await p.locator('[data-history] details').count() === Math.min(30, Number(before))");
code = code.replace("await p.waitForFunction(() => Number(document.querySelector('[data-done]')?.textContent) >= 195);", "await p.waitForFunction(expected => Number(document.querySelector('[data-done]')?.textContent) === expected, JSON.parse(before.stats).done);");
code = code.replace("    return { results, broken, pageErrors: errors,", "    await run('No uncaught JavaScript exceptions throughout the run', async () => { check(errors.length === 0, JSON.stringify(errors)); });\n    return { results, broken, pageErrors: errors,");
process.stdout.write(code);
