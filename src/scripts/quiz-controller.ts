    import { initialize, getStats, recordAttempt, getSessions, startSession, advanceSession, showError, type StudyStats } from "./progress";
    import { gradeQuestion, createAttempt } from "./study";
    import {questionAt,filterQuestions,validSelectionCount}from './quiz-selection';
    import {renderOptions}from './quiz-view';
    import type { Question } from "./study";
export async function initializeQuiz(){

    const response = await fetch("/api/study/bank");
    if(!response.ok)throw Error("No se pudieron cargar las preguntas. Recarga para reintentar.");
    const { bank, exams }: { bank:Question[]; exams:Record<string,{id:number}[]> } = await response.json();
    const subject = "aws";
    await initialize(subject);
    let session: Awaited<ReturnType<typeof startSession>> | undefined;
    let pendingAttempt: Awaited<ReturnType<typeof createAttempt>> | undefined;
    const mode = document.querySelector<HTMLSelectElement>("[data-mode]")!;
    let examIndex = 0;
    let examDone = 0;
    let examCorrect = 0;
    function resetExam() { examIndex = 0; examDone = 0; examCorrect = 0; }
    const quiz = document.querySelector<HTMLElement>("#quiz")!;
    const levelSelect = document.querySelector<HTMLSelectElement>("[data-level]")!;
    const topicSelect = document.querySelector<HTMLSelectElement>("[data-topic]")!;
    const failedSelect = document.querySelector<HTMLInputElement>("[data-failed]")!;
    const topics = [...new Set(bank.map((question) => question.topic))].sort((a, b) => a.localeCompare(b, "es"));
    for (const topic of topics) { const option = document.createElement("option"); option.value = topic; option.textContent = topic; topicSelect.append(option); }
    let current: (typeof bank)[number];
    const percent = (stats: StudyStats) => stats.done ? Math.round(stats.ok / stats.done * 100) : 0;
    function next() {
      const stats = getStats(subject);
      const failed = Array.isArray(stats.failed) ? stats.failed : [];
      let pool = filterQuestions(bank,levelSelect.value,topicSelect.value,failedSelect.checked,failed);
      if (pool.length > 1 && current) pool = pool.filter((question) => question.id !== current?.id);
      quiz.replaceChildren();
      if (!pool.length) {
        const message = document.createElement("p"); message.className = "empty-results";
        message.textContent = failedSelect.checked ? "No hay preguntas falladas para estos filtros. Desactiva el filtro para continuar." : "No hay preguntas para estos filtros.";
        quiz.append(message); return;
      }
      if (mode.value !== "practice") {
        const series = exams[mode.value];
        if (examIndex >= series.length) {
          const message = document.createElement("p");
          const accuracy = examDone ? Math.round(examCorrect / examDone * 100) : 0;
          message.textContent = `Serie completada: ${series.length} preguntas. Resultado: ${examCorrect}/${examDone} correctas (${accuracy}%). Consulta tus resultados en Estadísticas. Es práctica, no una puntuación oficial AWS.`;
          const restart = document.createElement("button"); restart.className = "action-button"; restart.type = "button"; restart.textContent = "Reiniciar simulacro";
          restart.addEventListener("click", () => { resetExam(); next(); });
          quiz.append(message, restart); return;
        }
        current = questionAt(bank,series,examIndex);
      } else current = pool[Math.floor(Math.random() * pool.length)];
      const tags = document.createElement("div"); tags.className = "question-tags";
      tags.textContent = `${current.level} · ${current.topic}${current.correct.length > 1 ? ` · Elige ${current.correct.length}` : ""}`;
      const heading = document.createElement("h2"); heading.textContent = current.q;
      const options = renderOptions(current);
      const submit = document.createElement("button"); submit.className = "action-button primary"; submit.textContent = "Comprobar respuesta"; submit.type = "button";
      quiz.append(tags, heading, options, submit);
      submit.addEventListener("click", async () => {
        if (!current || submit.disabled) return;
        const selected = [...options.querySelectorAll<HTMLInputElement>("input:checked")].map((input) => Number(input.value)).sort((a, b) => a - b);
        if (!validSelectionCount(current,selected)) {
          let hint = quiz.querySelector<HTMLElement>("[data-answer-hint]");
          if (!hint) { hint = document.createElement("p"); hint.className = "muted"; hint.dataset.answerHint = ""; quiz.append(hint); }
          hint.textContent = `Selecciona ${current.correct.length} respuesta${current.correct.length===1?'':'s'} para comprobarla.`; return;
        }
        const { correct, ok: isCorrect } = gradeQuestion(current,selected);
        submit.disabled = true;
        const answerInputs=[...options.querySelectorAll<HTMLInputElement>('input')];answerInputs.forEach(input=>input.disabled=true);
        const controls = [mode, levelSelect, topicSelect, failedSelect].map(control => ({control, disabled:control.disabled}));
        controls.forEach(({control}) => { control.disabled = true; });
        try {
        pendingAttempt ??= await createAttempt(current,selected);
        if (JSON.stringify(pendingAttempt.selectedIndices)!==JSON.stringify(selected)) throw Error("Reintenta la selección original o cambia de pregunta.");
        await recordAttempt(subject,pendingAttempt,session);
        pendingAttempt = undefined;
        const updated = getStats(subject);
        if (session) { session=getSessions(subject).find(s=>s.id===session!.id)!; examDone=session.done; examCorrect=session.ok; }
        for (const [index, label] of [...options.children].entries()) {
          (label as HTMLElement).dataset.result=correct.includes(index)?'correct':selected.includes(index)?'incorrect':'neutral';
          const result = document.createElement("span"); result.className = "muted";
          result.textContent = correct.includes(index) ? " · Correcta" : selected.includes(index) ? " · Tu elección" : "";
          label.append(result); label.querySelector<HTMLInputElement>("input")!.disabled = true;
        }
        submit.disabled = true;
        const feedback = document.createElement("div"); feedback.className = `feedback${isCorrect ? "" : " bad"}`;
        feedback.textContent = `${isCorrect ? "Correcto." : "Incorrecto."} ${current.why} Precisión acumulada: ${percent(updated)}%.`;
        const following = document.createElement("button"); following.className = "action-button"; following.type = "button"; following.textContent = "Siguiente pregunta →";
        following.addEventListener("click", async () => {
          if (following.disabled) return;
          following.disabled = true;
          try {
          if (session) session=await advanceSession(subject,session);
          if (mode.value !== "practice") examIndex += 1;
          next();
          const target=quiz.querySelector<HTMLElement>('h2,p');target?.setAttribute('tabindex','-1');target?.focus();
          } catch(e) { following.disabled=false; showError(e); }
        });
        quiz.append(feedback, following);
        following.focus();
        } catch (error) {
          submit.disabled = false;
          answerInputs.forEach(input=>input.disabled=false);
          const message = document.createElement("p"); message.setAttribute("role","alert");
          message.textContent = error instanceof TypeError ? "No se pudo guardar. Comprueba la conexión y vuelve a comprobar la respuesta." : error instanceof Error ? error.message : "No se pudo guardar la respuesta. Reinténtalo.";
          quiz.append(message);
        } finally { controls.forEach(({control,disabled}) => { control.disabled = disabled; }); }
      });
    }
    const filteredNext=()=>{pendingAttempt=undefined;try{next();}catch(e){showError(e);}};
    levelSelect.addEventListener("change", filteredNext); topicSelect.addEventListener("change", filteredNext); failedSelect.addEventListener("change", filteredNext); next();
    async function changeMode(forceNew=false) {
      mode.disabled=true;
      try { resetExam(); pendingAttempt=undefined; session=undefined;
        if(mode.value!=="practice"){
          session=!forceNew?getSessions(subject).find(s=>s.exam===mode.value&&s.status==='active'):undefined;
          session??=await startSession(subject,mode.value,crypto.randomUUID());
          examIndex=session.cursor;examDone=session.done;examCorrect=session.ok;
          // A response acknowledged before a reload remains immutable; resume at the next unanswered position.
          if(session.answers.some(a=>a.position===session!.cursor)){session=await advanceSession(subject,session);examIndex=session.cursor;}
        }
        for(const filter of [levelSelect,topicSelect,failedSelect])filter.disabled=mode.value!=="practice";
        levelSelect.value="Todos";topicSelect.value="Todos";failedSelect.checked=false;next();
      }catch(e){showError(e);}finally{mode.disabled=false;}
    }
    mode.addEventListener("change",()=>void changeMode());
    // Delegate restart so a new persistent session is created, preserving completed results.
    quiz.addEventListener('click',e=>{if((e.target as HTMLElement).textContent==='Reiniciar simulacro'){e.stopImmediatePropagation();void changeMode(true);}},true);

}
