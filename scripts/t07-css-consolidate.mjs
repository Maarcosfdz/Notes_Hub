// T07 one-off mechanical consolidation. Exact matches protect contextual rules.
import fs from 'node:fs';const file='src/styles/global.css';let css=fs.readFileSync(file,'utf8');
const replace=(from,to)=>{if(!css.includes(from))throw Error('CSS changed; inspect cascade before applying.');css=css.replace(from,to);};
replace('button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible',':where(button,a,input,select,textarea,summary,[tabindex]):focus-visible');
replace('.study-nav a,.filter-button,.action-button,.select{','.study-nav a,.filter-button,.select{');
replace('.action-button{display:inline-flex;align-items:center;justify-content:center;min-height:40px;border-radius:9px;padding:9px 14px;margin:0}', '.action-button{display:inline-flex;align-items:center;justify-content:center;min-height:44px;border-radius:9px;padding:9px 14px;margin:0;font-size:13px;border:1px solid var(--line);background:var(--surface);color:var(--muted);cursor:pointer;transition:background var(--motion-fast),border-color var(--motion-fast),color var(--motion-fast),transform var(--motion-fast)}');
replace('.filter-button.active,.action-button.primary{background:var(--accent);color:#fffefa;border-color:var(--accent)}','.filter-button.active,.action-button.primary{background:var(--button-bg);color:var(--button-text);border-color:var(--button-bg)}\n.action-button.primary:hover,.filter-button.active:hover{background:var(--button-bg);color:var(--button-text);border-color:var(--accent-strong)}');
replace('.options{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}', '.options{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}');
replace('.table-wrap{overflow-x:auto;', '.table-wrap{max-width:100%;min-width:0;overflow-x:auto;');
replace('.term-row{cursor:pointer}', '.term-row{cursor:default}');
replace('.site-header nav{display:none}', '.site-header .desktop-nav{display:none}');
replace('grid-template-columns:1fr auto}.site-header .desktop-nav', 'grid-template-columns:minmax(0,1fr) auto auto;gap:8px}.site-header .desktop-nav');
replace('.study-hub-card[data-kind="notes"]{--hub-accent:#7967a4}.study-hub-card[data-kind="concepts"]{--hub-accent:#47745c}.study-hub-card[data-kind="questions"]{--hub-accent:#397287}', '.study-hub-card[data-kind="notes"]{--hub-accent:var(--notes)}.study-hub-card[data-kind="concepts"]{--hub-accent:var(--concepts)}.study-hub-card[data-kind="questions"]{--hub-accent:var(--questions)}');
fs.writeFileSync(file,css);
