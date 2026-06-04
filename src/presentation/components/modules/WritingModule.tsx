import React, { useState, useRef } from 'react';
import { useLesson } from '../../../application/state/LessonContext';
import { WRITING_PROMPTS, evaluateWriting, type EvaluationResult } from '../../../core/harmony/writingValidation';

export const WritingModule: React.FC = () => {
  const { writingPreference, setWritingPreference, currentChapter } = useLesson();
  
  const chapterId = currentChapter?.id || 1;
  const activePrompt = WRITING_PROMPTS[chapterId] || WRITING_PROMPTS[1];

  // States
  const [showPreferenceModal, setShowPreferenceModal] = useState<boolean>(true);
  const [writingInput, setWritingInput] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [evaluationResult, setEvaluationResult] = useState<EvaluationResult | null>(null);
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Evaluation Modes Selection
  const selectPreference = (pref: 'self_check' | 'strict') => {
    setWritingPreference(pref);
    setShowPreferenceModal(false);
    setIsSubmitted(false);
    setEvaluationResult(null);
  };

  // Helper row keypad overlay
  const insertSpecialCharacter = (char: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const currentValue = textarea.value;

    const newValue = 
      currentValue.substring(0, startPos) + 
      char + 
      currentValue.substring(endPos, currentValue.length);

    setWritingInput(newValue);

    // Reposition cursor after the inserted character
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(startPos + 1, startPos + 1);
    }, 10);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWritingInput(e.target.value);
    setIsSubmitted(false);
    setEvaluationResult(null);
  };

  const submitWriting = () => {
    if (writingInput.trim().length < 10) {
      alert('Ju lutemi shkruani një tekst pak më të plotë (të paktën 10 karaktere).');
      return;
    }

    setIsSubmitted(true);

    if (writingPreference === 'strict') {
      const result = evaluateWriting(chapterId, writingInput);
      setEvaluationResult(result);
    }
  };

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 shadow-sm transition duration-300">
      
      <div className="mb-6 pb-4 border-b border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
        <div>
          <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block mb-0.5">Detyrë Shkrimi Shqip-Turqisht</span>
          <h2 className="text-xl font-black text-neutral-800 dark:text-neutral-100 uppercase font-sans tracking-tight">Konsola e Shkrimit (Yazma Konsolu)</h2>
        </div>
        <button
          onClick={() => setShowPreferenceModal(true)}
          className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 underline bg-transparent border-0 cursor-pointer font-bold transition"
        >
          Ndrysho mënyrën e vlerësimit
        </button>
      </div>

      {/* 1. Modal overlay selector preference choice */}
      {showPreferenceModal ? (
        <div className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 text-center z-10 space-y-6 animate-fade-in">
          <span className="text-4xl block">⚙️</span>
          <div>
            <h3 className="text-base font-bold text-neutral-800 dark:text-neutral-100 uppercase tracking-tight">Zgjidhni mënyrën e vlerësimit të shkrimit</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light mt-1 max-w-lg mx-auto leading-relaxed">
              Zgjidhni se si dëshironi që sistemi të kontrollojë paragrafët tuaj të shkruar në gjuhën turke.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {/* Preference Option A */}
            <button
              onClick={() => selectPreference('self_check')}
              className="glass-card rounded-2xl p-5 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-850 text-left hover:border-teal-500 dark:hover:border-teal-400 group cursor-pointer shadow-sm hover:shadow-md transition active:scale-98"
            >
              <h4 className="text-sm font-bold text-neutral-800 dark:text-neutral-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition uppercase tracking-tight">
                1. Vetë-Auditimi me Modelin
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light mt-1.5 leading-relaxed">
                Shkruani tekstin dhe krahasoni atë me shembuj të sakta të përgatitur nga profesorët tanë, së bashku me shënimet e hollësishme të përkthimit.
              </p>
            </button>

            {/* Preference Option B */}
            <button
              onClick={() => selectPreference('strict')}
              className="glass-card rounded-2xl p-5 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-850 text-left hover:border-teal-500 dark:hover:border-teal-400 group cursor-pointer shadow-sm hover:shadow-md transition active:scale-98"
            >
              <h4 className="text-sm font-bold text-neutral-800 dark:text-neutral-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition uppercase tracking-tight">
                2. Vlerësim Rigoroz i Motorit
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light mt-1.5 leading-relaxed">
                Motori kryen kontrollime të rrepta shkronjë-për-shkronjë (krahasim fuzzy Levenshtein) ose analiza strukturore dhe të harmonisë vokalike të prapashtesave.
              </p>
            </button>
          </div>
        </div>
      ) : (
        /* 2. Main console panel view */
        <div className="space-y-6 animate-fade-in">
          {/* Prompt */}
          <div className="bg-neutral-50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 shadow-inner">
            <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block mb-1">
              Detyra e Shkrimit ({activePrompt.grammarLabel || 'Kapitulli ' + chapterId}):
            </span>
            <p className="text-sm text-neutral-850 dark:text-neutral-200 font-medium leading-relaxed">
              {activePrompt.promptAlbanian}
            </p>
          </div>

          <div className="space-y-3">
            {/* Custom Special Input helper key-row overlay */}
            <div className="flex flex-wrap items-center gap-1.5 bg-neutral-50 dark:bg-neutral-900/50 p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 justify-start shadow-inner">
              <span className="text-[9px] text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-wider mr-2">Zanoret/Bashkëtingëlloret Turke:</span>
              {['ç', 'ğ', 'ı', 'ö', 'ş', 'ü', 'Ç', 'Ğ', 'İ', 'Ö', 'Ş', 'Ü'].map(char => (
                <button
                  key={char}
                  onClick={() => insertSpecialCharacter(char)}
                  className="w-9 h-9 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-850 text-neutral-800 dark:text-neutral-200 hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500 text-xs font-bold font-technical flex items-center justify-center transition active:scale-95 shadow-xs cursor-pointer"
                >
                  {char
                }</button>
              ))}
            </div>

            {/* Input console */}
            <textarea
              ref={textareaRef}
              value={writingInput}
              onChange={handleTextareaChange}
              rows={4}
              placeholder="Shkruani tekstin tuaj në turqisht këtu..."
              className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-4 text-sm font-technical text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/25 focus:outline-none tracking-wide shadow-sm transition duration-150"
            ></textarea>
          </div>

          {/* Verification triggers */}
          <div className="flex justify-between items-center">
            <div className="text-xs text-neutral-500 dark:text-neutral-400 italic">
              Metoda aktive: <span className="font-bold text-teal-600 dark:text-teal-400">{writingPreference === 'strict' ? 'Vlerësim Rigoroz' : 'Vetë-Auditim'}</span>
            </div>
            
            <button
              onClick={submitWriting}
              className="px-6 py-3 text-center text-xs font-bold uppercase tracking-widest rounded-xl select-none active-cta shadow-sm"
            >
              Dërgo Shkrimin
            </button>
          </div>

          {/* 3. Validation results overlay panel */}
          {isSubmitted && (
            <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800 animate-fade-in">
              {writingPreference === 'strict' && evaluationResult ? (
                /* STRICT VALIDATION VIEWS */
                <div className={`p-5 rounded-2xl border shadow-xs transition duration-200 ${
                  evaluationResult.status === 'success'
                    ? 'bg-emerald-100/30 dark:bg-emerald-950/20 border-emerald-500 text-slate-800 dark:text-neutral-200' 
                    : evaluationResult.status === 'typo'
                    ? 'bg-amber-100/30 dark:bg-amber-950/20 border-amber-500 text-slate-800 dark:text-neutral-200'
                    : 'bg-rose-100/30 dark:bg-rose-950/20 border-rose-500 text-slate-800 dark:text-neutral-200'
                }`}>
                  <div className="flex items-center gap-4 mb-4">
                    {evaluationResult.status === 'success' ? (
                      <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 shadow-inner relative select-none">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <div className="absolute inset-0 rounded-full border border-emerald-500/10 animate-ping opacity-75"></div>
                      </div>
                    ) : evaluationResult.status === 'typo' ? (
                      <div className="w-10 h-10 shrink-0 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/30 text-amber-600 dark:text-amber-400 shadow-inner relative select-none">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-10 h-10 shrink-0 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/30 text-rose-600 dark:text-rose-450 shadow-inner relative select-none">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8" />
                          <path d="m21 21-4.3-4.3" />
                          <line x1="8" y1="11" x2="14" y2="11" strokeWidth="3" />
                        </svg>
                      </div>
                    )}
                    <div>
                      <h4 className={`text-sm font-bold uppercase tracking-wide font-display ${
                        evaluationResult.status === 'success' 
                          ? 'text-emerald-800 dark:text-emerald-400' 
                          : evaluationResult.status === 'typo'
                          ? 'text-amber-800 dark:text-amber-400'
                          : 'text-rose-800 dark:text-rose-400'
                      }`}>
                        {evaluationResult.status === 'success' 
                          ? 'Verifikimi u krye me sukses!' 
                          : evaluationResult.status === 'typo'
                          ? 'Korrigjim Gërmëzimi (Typo)'
                          : 'Vlerësimi nuk kaloi plotësisht'}
                      </h4>
                      <span className="text-[9px] font-bold text-neutral-450 uppercase tracking-widest block mt-0.5">Motori Offline Ura</span>
                    </div>
                  </div>
                  <p className="text-xs font-light leading-relaxed whitespace-pre-line">
                    {evaluationResult.feedback}
                  </p>

                  {/* Suggestion for Typos */}
                  {evaluationResult.status === 'typo' && evaluationResult.suggestions && (
                    <div className="mt-4 pt-3 border-t border-amber-500/20">
                      <span className="text-[10px] font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wide block mb-1">Fjalia e saktë e sugjeruar:</span>
                      <p className="text-xs font-mono font-bold bg-white dark:bg-neutral-900 p-2.5 rounded-lg border border-amber-300 dark:border-amber-800 text-neutral-800 dark:text-neutral-200 shadow-inner">
                        {evaluationResult.suggestions[0]}
                      </p>
                    </div>
                  )}

                  {/* Suggestions/Examples for Errors */}
                  {evaluationResult.status === 'error' && evaluationResult.suggestions && (
                    <div className="mt-4 pt-3 border-t border-rose-500/20">
                      <span className="text-[10px] font-bold text-rose-800 dark:text-rose-300 uppercase tracking-wide block mb-2">Shembuj Model të Përdorimit:</span>
                      <ul className="list-disc pl-4 space-y-1.5 text-xs font-technical italic text-neutral-600 dark:text-neutral-400">
                        {evaluationResult.suggestions.map((sug, idx) => (
                          <li key={idx}>{sug}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                /* MODEL ANSWER / SELF CHECK VIEW */
                <div className="bg-neutral-50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-5 space-y-4 shadow-inner">
                  {activePrompt.sampleAnswers && activePrompt.sampleAnswers.length > 0 && (
                    <div>
                      <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2 block">✓ Shembuj të Paragrafëve Model:</span>
                      <ul className="list-disc pl-4 space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400 font-technical italic">
                        {activePrompt.sampleAnswers.map((ans, aIdx) => (
                          <li key={aIdx}>{ans}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800">
                    <span className="text-[10px] font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 uppercase tracking-wide block">Shënime Gramatikore & Ndihmë për Përkthimin:</span>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                      {activePrompt.grammarTipAlbanian}
                    </p>
                  </div>

                  <div className="bg-white dark:bg-neutral-900/50 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-between shadow-xs">
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 font-light italic">Krahasuat shkrimin tuaj me modelin dhe gjithçka është në rregull?</span>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-3 py-1.5 bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/30 rounded-lg text-xs font-bold hover:bg-teal-500/20 dark:hover:bg-teal-400/20 transition cursor-pointer shadow-xs active:scale-95"
                    >
                      Auditimi u Krye
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
