import React, { useState, useRef } from 'react';
import { useLesson } from '../../../application/state/LessonContext';

export const WritingModule: React.FC = () => {
  const { writingPreference, setWritingPreference } = useLesson();
  
  // States
  const [showPreferenceModal, setShowPreferenceModal] = useState<boolean>(true);
  const [writingInput, setWritingInput] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isStrictPassed, setIsStrictPassed] = useState<boolean | null>(null);
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const promptText = "Shkruani një përshëndetje dhe prezantim të thjeshtë në turqisht (p.sh. përshëndetni, tregoni emrin dhe nga cili qytet jeni, ashtu si Ahmeti dhe Valbona në dialog).";
  
  const sampleCorrectAnswers = [
    "Merhaba! Benim adım Valbona. Tiranlıyım.",
    "Merhaba! Benim adım Ahmet. İstanbulluyum.",
    "Merhaba, benim adım Leyla. Kosovalıyım."
  ];

  const translationExplanations = "Rrjeti i fjalive duhet të përmbajë: 'Merhaba' (Tungjatjeta), 'Benim adım...' (Emri im është...), dhe prapashtesën e prejardhjes '-lı/-li/-lu/-lü' të bashkangjitur me emrin e qytetit tuaj (p.sh., Tiran + lı = Tiranlı).";

  // Evaluation Modes Selection
  const selectPreference = (pref: 'self_check' | 'strict') => {
    setWritingPreference(pref);
    setShowPreferenceModal(false);
    setIsSubmitted(false);
    setIsStrictPassed(null);
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
    setIsStrictPassed(null);
  };

  const submitWriting = () => {
    if (writingInput.trim().length < 10) {
      alert('Ju lutemi shkruani një tekst pak më të plotë (të paktën 10 karaktere).');
      return;
    }

    setIsSubmitted(true);

    if (writingPreference === 'strict') {
      // Clean string alignment validation checking
      const text = writingInput.trim().toLowerCase();
      
      // Strict regex matching checklist:
      // Must contain 'merhaba' OR 'selam'
      // Must contain 'adım' OR 'ismim'
      // Must contain some city derivative suffix (-lı, -li, -lu, -lü)
      const hasGreeting = /merhaba|selam|iyi günler/.test(text);
      const hasNameStructure = /adım|ismim|ben\s+/.test(text);
      const hasOriginSuffix = /[a-z]+l[ıilu]y[ıiu]m/.test(text); // e.g. tiranlıyım, kosovalıyım

      const passed = hasGreeting && hasNameStructure && hasOriginSuffix;
      setIsStrictPassed(passed);
    }
  };

  return (
    <div className="glass-panel rounded-none p-6 md:p-8 bg-white border border-[#E9ECEF]">
      
      <div className="mb-6 pb-4 border-b border-[#E9ECEF] flex justify-between items-center">
        <div>
          <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-widest">Sekuenca 4</span>
          <h2 className="text-xl font-black text-[#1A1D20] uppercase font-sans">Ekran i Shkrimit (Yazma Konsolu)</h2>
        </div>
        <button
          onClick={() => setShowPreferenceModal(true)}
          className="text-xs text-[#565E64] hover:text-[#3A5A40] underline bg-transparent border-0 cursor-pointer font-bold"
        >
          Ndrysho mënyrën e vlerësimit
        </button>
      </div>

      {/* 1. Modal overlay selector preference choice */}
      {showPreferenceModal ? (
        <div className="bg-neutral-50 border border-[#E9ECEF] rounded-none p-6 text-center z-10 space-y-6">
          <span className="text-4xl block">⚙️</span>
          <div>
            <h3 className="text-base font-bold text-[#1A1D20] uppercase tracking-tight">Zgjidhni mënyrën e vlerësimit të shkrimit</h3>
            <p className="text-xs text-[#565E64] font-light mt-1 max-w-lg mx-auto leading-relaxed">
              Zgjidhni se si dëshironi që sistemi të kontrollojë paragrafët tuaj të shkruar në gjuhën turke.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {/* Preference Option A */}
            <button
              onClick={() => selectPreference('self_check')}
              className="glass-card rounded-none p-5 border border-[#E9ECEF] bg-white text-left hover:border-[#3A5A40] group cursor-pointer"
            >
              <h4 className="text-sm font-bold text-[#1A1D20] group-hover:text-[#3A5A40] transition uppercase tracking-tight">
                1. Vetë-Auditimi me Modelin
              </h4>
              <p className="text-xs text-[#565E64] font-light mt-1.5 leading-relaxed">
                Shkruani tekstin dhe krahasoni atë me një model të saktë të përgatitur nga profesorët tanë, së bashku me shënimet e hollësishme të përkthimit.
              </p>
            </button>

            {/* Preference Option B */}
            <button
              onClick={() => selectPreference('strict')}
              className="glass-card rounded-none p-5 border border-[#E9ECEF] bg-white text-left hover:border-[#3A5A40] group cursor-pointer"
            >
              <h4 className="text-sm font-bold text-[#1A1D20] group-hover:text-[#3A5A40] transition uppercase tracking-tight">
                2. Vlerësim Rigoroz i Motorit
              </h4>
              <p className="text-xs text-[#565E64] font-light mt-1.5 leading-relaxed">
                Motori kryen analiza të rrepta shkronjë-për-shkronjë dhe strukturore përmes skemave regex për të verifikuar nëse keni vendosur saktë përshëndetjen, emrin dhe prapashtesat.
              </p>
            </button>
          </div>
        </div>
      ) : (
        /* 2. Main console panel view */
        <div className="space-y-6 animate-fade-in">
          {/* Prompt */}
          <div className="bg-neutral-50 border border-[#E9ECEF] rounded-none p-4">
            <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-widest block mb-1">Detyra e Shkrimit:</span>
            <p className="text-sm text-[#565E64] font-light leading-relaxed">{promptText}</p>
          </div>

          <div className="space-y-3">
            {/* Custom Special Input helper key-row overlay */}
            <div className="flex flex-wrap items-center gap-1.5 bg-neutral-50 p-2 rounded-none border border-[#E9ECEF] justify-start">
              <span className="text-[9px] text-[#565E64] font-bold uppercase tracking-wider mr-2">Zanoret/Bashkëtingëlloret Turke:</span>
              {['ç', 'ğ', 'ı', 'ö', 'ş', 'ü', 'Ç', 'Ğ', 'İ', 'Ö', 'Ş', 'Ü'].map(char => (
                <button
                  key={char}
                  onClick={() => insertSpecialCharacter(char)}
                  className="w-8 h-8 rounded-none border border-[#E9ECEF] bg-white hover:bg-[#3A5A40]/10 hover:text-[#3A5A40] hover:border-[#3A5A40] text-xs font-bold font-technical flex items-center justify-center transition cursor-pointer"
                >
                  {char}
                </button>
              ))}
            </div>

            {/* Input console */}
            <textarea
              ref={textareaRef}
              value={writingInput}
              onChange={handleTextareaChange}
              rows={4}
              placeholder="Shkruani tekstin tuaj në turqisht këtu..."
              className="w-full rounded-none border border-[#E9ECEF] bg-white p-4 text-sm font-technical text-[#1A1D20] placeholder-neutral-400 focus:border-[#565E64] focus:outline-none tracking-wide"
            ></textarea>
          </div>

          {/* Verification triggers */}
          <div className="flex justify-between items-center">
            <div className="text-xs text-[#565E64] italic">
              Metoda aktive: <span className="font-bold text-[#3A5A40]">{writingPreference === 'strict' ? 'Vlerësim Rigoroz' : 'Vetë-Auditim'}</span>
            </div>
            
            <button
              onClick={submitWriting}
              className="px-6 py-3 text-center text-xs font-bold uppercase tracking-widest rounded-none cursor-pointer select-none active-cta animate-pulse"
            >
              Dërgo Shkrimin
            </button>
          </div>

          {/* 3. Validation results overlay panel */}
          {isSubmitted && (
            <div className="mt-6 pt-6 border-t border-[#E9ECEF] animate-fade-in">
              {writingPreference === 'strict' ? (
                /* STRICT VALIDATION VIEWS */
                <div className={`p-5 rounded-none border ${
                  isStrictPassed 
                    ? 'bg-emerald-100/50 border-emerald-500 text-slate-800' 
                    : 'bg-rose-100/50 border-rose-500 text-slate-800'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{isStrictPassed ? '✅' : '❌'}</span>
                    <h4 className={`text-sm font-bold ${isStrictPassed ? 'text-emerald-800' : 'text-rose-800'}`}>
                      {isStrictPassed ? 'Verifikimi Strict kaloi me sukses!' : 'Verifikimi Strict nuk u plotësua plotësisht.'}
                    </h4>
                  </div>
                  <p className="text-xs font-light leading-relaxed">
                    {isStrictPassed 
                      ? 'Paragrafi juaj përmban një përshëndetje të saktë, strukturën e emrit dhe prapashtesën e saktë të origjinës (-lı/-li/-lu/-lü). Punë e shkëlqyer!'
                      : 'Sigurohuni që keni shkruar një përshëndetje (p.sh., Merhaba), keni deklaruar emrin (p.sh., adım) dhe keni përdorur prapashtesën e kombësisë/prejardhjes me zanorën e duhur (p.sh., Tiranlıyım, İstanbulluyum). Provoni përsëri!'}
                  </p>
                </div>
              ) : (
                /* MODEL ANSWER / SELF CHECK VIEW */
                <div className="bg-neutral-50 border border-[#E9ECEF] rounded-none p-5 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-wider mb-2 block">✓ Shembuj të Paragrafëve Model:</span>
                    <ul className="list-disc pl-4 space-y-1.5 text-xs text-[#565E64] font-technical italic">
                      {sampleCorrectAnswers.map((ans, aIdx) => (
                        <li key={aIdx}>{ans}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-[#E9ECEF]">
                    <span className="text-[10px] font-bold text-[#1A1D20] mb-1 uppercase tracking-wide block">Shënime Gramatikore & Ndihmë për Përkthimin:</span>
                    <p className="text-xs text-[#565E64] font-light leading-relaxed">
                      {translationExplanations}
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded-none border border-[#E9ECEF] flex items-center justify-between">
                    <span className="text-xs text-[#565E64] font-light italic">Krahasuat shkrimin tuaj me modelin dhe gjithçka është në rregull?</span>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-3 py-1.5 bg-[#3A5A40]/10 text-[#3A5A40] border border-[#3A5A40]/30 rounded-none text-xs font-bold hover:bg-[#3A5A40]/20 transition cursor-pointer"
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
