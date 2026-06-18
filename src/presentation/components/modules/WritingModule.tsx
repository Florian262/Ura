import React, { useState, useRef } from 'react';
import { useLesson } from '../../../application/state/LessonContext';
import { WRITING_PROMPTS, evaluateWriting, type EvaluationResult } from '../../../core/harmony/writingValidation';

interface WritingModuleProps {
  onComplete?: () => void;
}

export const WritingModule: React.FC<WritingModuleProps> = ({ onComplete }) => {
  const { writingPreference, setWritingPreference, currentChapter } = useLesson();
  
  const chapterId = currentChapter?.id || 1;
  const activePrompt = WRITING_PROMPTS[chapterId] || WRITING_PROMPTS[1];
  
  const minLength = currentChapter?.level === 'B2'
    ? 120
    : currentChapter?.level === 'B1'
      ? 60
      : 10;

  // States
  const [showPreferenceModal, setShowPreferenceModal] = useState<boolean>(true);
  const [writingInput, setWritingInput] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [evaluationResult, setEvaluationResult] = useState<EvaluationResult | null>(null);

  // B2 Checklist States
  const [checklistGrammar, setChecklistGrammar] = useState<boolean>(false);
  const [checklistConnector, setChecklistConnector] = useState<boolean>(false);
  const [checklistStructure, setChecklistStructure] = useState<boolean>(false);
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Real-time word and character counts
  const wordCount = writingInput.trim() === '' ? 0 : writingInput.trim().split(/\s+/).length;
  const charCount = writingInput.length;

  // Evaluation Modes Selection
  const selectPreference = (pref: 'self_check' | 'strict') => {
    setWritingPreference(pref);
    setShowPreferenceModal(false);
    setIsSubmitted(false);
    setEvaluationResult(null);
    
    // Reset B2 states
    setChecklistGrammar(false);
    setChecklistConnector(false);
    setChecklistStructure(false);
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
    if (writingInput.trim().length < minLength) {
      alert(`Ju lutemi shkruani një tekst pak më të plotë (të paktën ${minLength} karaktere).`);
      return;
    }

    setIsSubmitted(true);

    if (writingPreference === 'strict') {
      const result = evaluateWriting(chapterId, writingInput);
      setEvaluationResult(result);
      if (result.status === 'success' || result.status === 'typo') {
        onComplete?.();
      }
    }
  };

  return (
    <div className="glass-panel md:rounded-2xl p-0 md:p-8 bg-transparent md:bg-white dark:md:bg-neutral-900/40 border-none md:border md:border-neutral-200 dark:md:border-neutral-800 shadow-none md:shadow-sm transition duration-300">
      
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
        <div className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 md:p-6 text-center z-10 space-y-6 animate-fade-in">
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
          <div className="bg-neutral-50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 md:shadow-inner">
            <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block mb-1">
              Detyra e Shkrimit ({activePrompt.grammarLabel || 'Kapitulli ' + chapterId}):
            </span>
            <p className="text-sm text-neutral-850 dark:text-neutral-200 font-medium leading-relaxed">
              {activePrompt.promptAlbanian}
            </p>
          </div>

          <div className="space-y-4">
            {/* Keyboard Switch Tip for B2 Level */}
            {currentChapter?.level === 'B2' && (
              <div className="bg-blue-50/50 dark:bg-blue-950/10 border-l-4 border-blue-500 rounded-r-xl p-4 my-2 space-y-2 shadow-xs transition duration-200">
                <div className="flex items-center gap-2 text-blue-800 dark:text-blue-400 font-bold text-xs uppercase tracking-wide">
                  <span>⌨️ Këshillë për Tastierën Turke</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                  <strong>Mobile:</strong> Për të shkruar më shpejt, shtoni tastierën Turke (TR) në cilësimet e telefonit tuaj.<br />
                  <strong>Desktop:</strong> Mund të shtypni shkronjat turke (ç, ş, ğ, ı, ö, ü) më lehtë duke kaluar në tastierën Turke (TR) në sistemin tuaj operativ.
                </p>
              </div>
            )}

            {/* Structured Paragraph Guidelines for B2 level essay writing */}
            {currentChapter?.level === 'B2' && (
              <div className="bg-[#3A5A40]/5 border border-[#3A5A40]/20 rounded-xl p-4 my-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h5 className="text-xs font-bold text-[#3A5A40] uppercase">1. Giriş (Hyrja)</h5>
                  <p className="text-[11px] text-[#565E64] font-light mt-1">Prezantoni vendin ose qëllimin e udhëtimit tuaj (20-30 fjalë).</p>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#3A5A40] uppercase">2. Gelişme (Zhvillimi)</h5>
                  <p className="text-[11px] text-[#565E64] font-light mt-1">Përshkruani detajet, vendet që keni parë dhe foljet vetvetore/reciproke (40-60 fjalë).</p>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#3A5A40] uppercase">3. Sonuç (Përfundimi)</h5>
                  <p className="text-[11px] text-[#565E64] font-light mt-1">Jepni mendimin ose ndjenjat tuaja rreth këtij udhëtimi (20-30 fjalë).</p>
                </div>
              </div>
            )}

            {/* Conditional past-tense vowel harmony tip banner */}
            {chapterId === 3 && (
              <div className="bg-teal-50/50 dark:bg-teal-950/10 border-l-4 border-teal-500 rounded-r-xl p-4 space-y-2 shadow-xs transition duration-200">
                <div className="flex items-center gap-2 text-teal-800 dark:text-teal-400 font-bold text-xs uppercase tracking-wide">
                  <span>💡 Këshillë për Harmoninë Vokalore të së Shkuarës (-dı / -di)</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                  Koha e shkuar e drejtpërdrejtë ndjek harmoninë vokalore 4-she dhe rregullën e bashkëtingëlloreve të shurdhëta (Fıstıkçı Şahap):
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[11px] font-technical bg-white/40 dark:bg-neutral-900/40 p-2.5 rounded-lg border border-neutral-200/50 dark:border-neutral-800/50">
                  <div>
                    <span className="font-bold text-teal-700 dark:text-teal-400">a, ı</span> → <span className="font-mono text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 px-1 rounded">-dı / -tı</span>
                    <div className="text-[10px] text-neutral-400 mt-0.5">yaptı, aldı</div>
                  </div>
                  <div>
                    <span className="font-bold text-teal-700 dark:text-teal-400">e, i</span> → <span className="font-mono text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 px-1 rounded">-di / -ti</span>
                    <div className="text-[10px] text-neutral-400 mt-0.5">gitti, geldi</div>
                  </div>
                  <div>
                    <span className="font-bold text-teal-700 dark:text-teal-400">o, u</span> → <span className="font-mono text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 px-1 rounded">-du / -tu</span>
                    <div className="text-[10px] text-neutral-400 mt-0.5">okudu, buluştu</div>
                  </div>
                  <div>
                    <span className="font-bold text-teal-700 dark:text-teal-400">ö, ü</span> → <span className="font-mono text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 px-1 rounded">-dü / -tü</span>
                    <div className="text-[10px] text-neutral-400 mt-0.5">gördü, düştü</div>
                  </div>
                </div>
              </div>
            )}

            {/* Restyled Premium Virtual Keyboard Helper Dock */}
            <div className="border-l-4 border-teal-500 bg-gradient-to-r from-neutral-50/80 to-neutral-100/80 dark:from-neutral-900/40 dark:to-neutral-850/40 backdrop-blur-md p-3 rounded-r-xl md:border-y md:border-r border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center gap-2 justify-start md:shadow-sm transition duration-200">
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-wider mr-2">Zanoret/Bashkëtingëlloret Turke:</span>
              <div className="flex flex-wrap gap-2">
                {['ç', 'ğ', 'ı', 'ö', 'ş', 'ü', 'Ç', 'Ğ', 'İ', 'Ö', 'Ş', 'Ü'].map(char => (
                  <button
                    key={char}
                    onClick={() => insertSpecialCharacter(char)}
                    className="w-11 h-11 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-teal-500/10 hover:text-teal-600 dark:hover:text-teal-400 hover:border-teal-500 text-xs font-bold font-technical flex items-center justify-center transition-all duration-150 active:scale-90 shadow-sm cursor-pointer"
                  >
                    {char}
                  </button>
                ))}
              </div>
            </div>

            {/* Input console */}
            <textarea
              ref={textareaRef}
              value={writingInput}
              onChange={handleTextareaChange}
              rows={5}
              placeholder="Shkruani tekstin tuaj në turqisht këtu..."
              className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-4 text-sm font-technical text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500/25 focus:outline-none tracking-wide shadow-sm transition duration-150"
            ></textarea>

            {/* Live Count Status Row */}
            <div className="flex justify-between items-center px-1 text-xs">
              <div className="flex gap-4 text-neutral-500 dark:text-neutral-400 font-light">
                <span>
                  Fjalë: <span className="font-bold text-neutral-700 dark:text-neutral-300">{wordCount}</span>
                </span>
                <span>
                  Karaktere: <span className="font-bold text-neutral-700 dark:text-neutral-300">{charCount}</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                {charCount >= minLength ? (
                  <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold transition duration-150">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Gjatësia e mjaftueshme
                  </span>
                ) : (
                  <span className="text-rose-500 dark:text-rose-455 font-medium transition duration-150">
                    Duhen edhe {minLength - charCount} karaktere
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Verification triggers */}
          <div className="flex justify-between items-center pt-2">
            <div className="text-xs text-neutral-500 dark:text-neutral-400 italic">
              Metoda aktive: <span className="font-bold text-teal-600 dark:text-teal-400">{writingPreference === 'strict' ? 'Vlerësim Rigoroz' : 'Vetë-Auditim'}</span>
            </div>
            
            <button
              onClick={submitWriting}
              disabled={charCount < minLength}
              className={`px-6 py-3 text-center text-xs font-bold uppercase tracking-widest rounded-xl select-none shadow-sm transition-all duration-250 ${
                charCount < minLength
                  ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500 cursor-not-allowed opacity-60'
                  : 'active-cta'
              }`}
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
              ) : currentChapter?.level === 'B2' ? (
                /* INTERACTIVE B2 CHECKLIST SELF-EVALUATION VIEW */
                <div className="bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 md:p-5 space-y-4 md:shadow-inner">
                  <div>
                    <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2 block">📋 Vetë-Vlerësimi i Shkrimit (B2 Checklist)</span>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                      Ju lutemi kontrolloni pikat e mëposhtme bazuar në tekstin që keni shkruar për të zhbllokuar modelin:
                    </p>
                  </div>
                  
                  <div className="space-y-2 bg-white dark:bg-neutral-950 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-inner">
                    {/* Word count check */}
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition">
                      <span className="text-xs text-neutral-700 dark:text-neutral-300">Kam shkruar të paktën 80 fjalë:</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                        wordCount >= 80 
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400' 
                          : 'bg-rose-100 text-rose-800 dark:bg-rose-950/40 dark:text-rose-400'
                      }`}>
                        {wordCount >= 80 ? '✓ Po' : `Jo (${wordCount}/80 fjalë)`}
                      </span>
                    </div>

                    {/* Grammar usage check */}
                    <label className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition cursor-pointer select-none">
                      <span className="text-xs text-neutral-700 dark:text-neutral-300">Kam përdorur foljet vetvetore ose reciproke (p.sh. hazırlanmak, kucaklaşmak):</span>
                      <input
                        type="checkbox"
                        checked={checklistGrammar}
                        onChange={(e) => setChecklistGrammar(e.target.checked)}
                        className="rounded border-neutral-300 text-teal-600 focus:ring-teal-500 h-4 w-4"
                      />
                    </label>

                    {/* Connector check */}
                    <label className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition cursor-pointer select-none">
                      <span className="text-xs text-neutral-700 dark:text-neutral-300">Kam përdorur të paktën një lidhëz shtuese (üstelik, bunun yanı sıra, dahası):</span>
                      <input
                        type="checkbox"
                        checked={checklistConnector}
                        onChange={(e) => setChecklistConnector(e.target.checked)}
                        className="rounded border-neutral-300 text-teal-600 focus:ring-teal-500 h-4 w-4"
                      />
                    </label>

                    {/* Structure check */}
                    <label className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition cursor-pointer select-none">
                      <span className="text-xs text-neutral-700 dark:text-neutral-300">Kam ndjekur strukturën me tre paragrafe (Hyrje, Zhvillim, Përfundim):</span>
                      <input
                        type="checkbox"
                        checked={checklistStructure}
                        onChange={(e) => setChecklistStructure(e.target.checked)}
                        className="rounded border-neutral-300 text-teal-600 focus:ring-teal-500 h-4 w-4"
                      />
                    </label>
                  </div>

                  {wordCount >= 80 && checklistGrammar && checklistConnector && checklistStructure ? (
                    <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-4 animate-fade-in">
                      <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-400 p-3 rounded-xl text-xs font-bold text-center">
                        🔓 Modeli i Përgjigjes u Zhbllokua!
                      </div>
                      
                      {activePrompt.sampleAnswers && activePrompt.sampleAnswers.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl">
                            <span className="text-[10px] font-bold text-neutral-450 uppercase tracking-widest block mb-2">Eseja Juaj:</span>
                            <p className="text-xs font-technical text-neutral-800 dark:text-neutral-200 whitespace-pre-line leading-relaxed">
                              {writingInput}
                            </p>
                          </div>
                          <div className="p-4 bg-teal-50 dark:bg-teal-950/10 border border-teal-200 dark:border-teal-900 rounded-xl">
                            <span className="text-[10px] font-bold text-teal-700 dark:text-teal-400 uppercase tracking-widest block mb-2">Shembull Model (Nga Profesorët):</span>
                            <p className="text-xs font-technical text-teal-850 dark:text-neutral-200 italic leading-relaxed">
                              {activePrompt.sampleAnswers[0]}
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="bg-white dark:bg-neutral-900/50 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 flex items-center justify-between shadow-xs">
                        <span className="text-xs text-neutral-500 dark:text-neutral-400 font-light italic">Krahasuat shkrimin tuaj me modelin dhe gjithçka është në rregull?</span>
                        <button
                          onClick={() => {
                            setIsSubmitted(false);
                            onComplete?.();
                          }}
                          className="px-3 py-1.5 bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/30 rounded-lg text-xs font-bold hover:bg-teal-500/20 dark:hover:bg-teal-400/20 transition cursor-pointer shadow-xs active:scale-95"
                        >
                          Auditimi u Krye
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-amber-500/5 border border-amber-500/20 text-amber-800 dark:text-amber-400 p-3 rounded-xl text-xs text-center font-light italic">
                      Plotësoni të gjitha pikat e checklist-ës për të parë modelin e përgjigjes.
                    </div>
                  )}
                </div>
              ) : (
                /* STANDARD B1 OR LOWER SELF CHECK VIEW */
                <div className="bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 md:p-5 space-y-4 md:shadow-inner">
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
                      onClick={() => {
                        setIsSubmitted(false);
                        onComplete?.();
                      }}
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
