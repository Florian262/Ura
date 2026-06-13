import React, { useState, useEffect } from 'react';
import { PluralStrategy } from '../../../core/harmony/strategies/pluralStrategy';
import { HabitoreStrategy } from '../../../core/harmony/strategies/habitoreStrategy';
import { applyConsonantMutation, endsWithKetcap } from '../../../core/harmony/consonantMutation';
import { getLastVowel, getVowelHarmony2, getVowelHarmony4 } from '../../../core/harmony/vowelHarmony';

const TURKISH_CHARS_REGEX = /[^a-zA-ZçğıöşüÇĞİÖŞÜ]/g;

export const PlaygroundPage: React.FC = () => {
  const [customWord, setCustomWord] = useState<string>('kitap');
  const [activeStrategy, setActiveStrategy] = useState<'plural' | 'habitore'>('plural');
  const [result, setResult] = useState<any>(null);
  
  const sampleWords = [
    { word: 'kitap', desc: 'libër (mutacion)' },
    { word: 'çorap', desc: 'çorape (Balkanizëm)' },
    { word: 'ev', desc: 'shtëpi (harmonizim e)' },
    { word: 'saat', desc: 'orë (përjashtim)' },
    { word: 'git', desc: 'shko (folje, habitor)' },
    { word: 'göz', desc: 'sy (zanore e përparme)' }
  ];

  const handleRunStrategy = (word: string, strategyKey: 'plural' | 'habitore') => {
    const cleanWord = word.trim();
    if (!cleanWord) return;

    let strategyOutput;
    if (strategyKey === 'plural') {
      const strategy = new PluralStrategy();
      strategyOutput = strategy.apply(cleanWord);
    } else {
      const strategy = new HabitoreStrategy();
      strategyOutput = strategy.apply(cleanWord);
    }

    // Additional consonant voicing mutation audit log check
    const endsKetcap = endsWithKetcap(cleanWord);
    const mutatedWord = applyConsonantMutation(cleanWord);
    const hasConsonantShift = endsKetcap && mutatedWord !== cleanWord;

    setResult({
      ...strategyOutput,
      wordAnalyzed: cleanWord,
      endsKetcap,
      mutatedWord,
      hasConsonantShift
    });
  };

  useEffect(() => {
    handleRunStrategy(customWord, activeStrategy);
  }, [customWord, activeStrategy]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 animate-fade-in space-y-8 relative">
      
      {/* Giant Background Watermark */}
      <div className="curriculum-watermark opacity-20">
        PROVORE
      </div>

      {/* Header */}
      <div className="text-center md:text-left border-b border-[#E9ECEF] pb-6 z-10 relative">
        <h2 className="text-2xl font-black text-[#1A1D20] tracking-tight uppercase font-sans">
          Motorri Aglutinues (Playground)
        </h2>
        <p className="text-[#565E64] font-light mt-1.5 max-w-2xl leading-relaxed text-sm">
          Seksion i veçantë interaktiv. Shkruani çfarëdo rrënje fjalë në turqisht dhe provoni prapashtesat në kohë reale. Algoritmet tona ekzekutojnë rregullat e harmonisë vokalore dhe mutacioneve bashkëtingëllore step-by-step.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 z-10 relative">
        
        {/* left column: Controls panel */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-panel rounded-2xl p-6 space-y-6 bg-white border border-[#E9ECEF] shadow-sm">
            <h3 className="text-sm font-bold text-[#1A1D20] uppercase tracking-wide">Konfiguro Analizën</h3>

            {/* Input custom word */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-[#565E64] block">Rrënja e Fjalës Turke:</label>
              <input
                type="text"
                value={customWord}
                onChange={(e) => setCustomWord(e.target.value.replace(TURKISH_CHARS_REGEX, ''))}
                placeholder="Shkruaj fjalën..."
                maxLength={20}
                className="w-full rounded-xl border border-[#E9ECEF] bg-white px-4 py-2.5 text-sm text-[#1A1D20] placeholder-neutral-400 focus:border-[#565E64] focus:outline-none font-technical tracking-wide shadow-sm"
              />
            </div>

            {/* Strategy Selectors */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-[#565E64] block">Zgjidhni Prapashtesën (Bllokun):</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setActiveStrategy('plural')}
                  className={`px-3 py-2.5 rounded-xl border-2 text-xs font-black transition duration-200 cursor-pointer shadow-xs active:scale-95 flex items-center justify-center gap-1.5 ${
                    activeStrategy === 'plural'
                      ? 'bg-[#3A5A40] text-white border-[#3A5A40] shadow-md -translate-y-0.5'
                      : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50 hover:border-neutral-350'
                  }`}
                >
                  🧩 Shumësi (-lar/-ler)
                </button>
                <button
                  onClick={() => setActiveStrategy('habitore')}
                  className={`px-3 py-2.5 rounded-xl border-2 text-xs font-black transition duration-200 cursor-pointer shadow-xs active:scale-95 flex items-center justify-center gap-1.5 ${
                    activeStrategy === 'habitore'
                      ? 'bg-[#3A5A40] text-white border-[#3A5A40] shadow-md -translate-y-0.5'
                      : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50 hover:border-neutral-350'
                  }`}
                >
                  🧩 Habitori (-miş)
                </button>
              </div>
            </div>

            {/* Preloaded Sample Words */}
            <div className="space-y-2.5 pt-4 border-t border-[#E9ECEF]">
              <label className="text-[10px] uppercase font-bold tracking-widest text-[#565E64] block">Rrënjë Shembull të Shpejtë:</label>
              <div className="grid grid-cols-2 gap-2">
                {sampleWords.map(sw => (
                  <button
                    key={sw.word}
                    onClick={() => {
                      setCustomWord(sw.word);
                      if (sw.word === 'git') setActiveStrategy('habitore');
                    }}
                    className="px-3 py-2 rounded-xl border border-[#E9ECEF] bg-white text-left hover:border-[#3A5A40] text-xs font-medium font-technical transition cursor-pointer shadow-xs hover:-translate-y-0.5"
                  >
                    <span className="text-[#1A1D20] font-bold block">{sw.word}</span>
                    <span className="text-[10px] text-neutral-400 font-light italic">{sw.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Interactive logs visualizer */}
        <div className="lg:col-span-2 space-y-6">
          {result && (
            <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-6 bg-white border border-[#E9ECEF] shadow-sm animate-fade-in">

              {/* Agglutination Canvas */}
              <div className="bg-neutral-50 border border-[#E9ECEF] rounded-2xl p-8 flex flex-col items-center justify-center space-y-4">
                <div className="flex flex-wrap items-center justify-center gap-3 text-xl md:text-2xl font-technical">
                  {/* Root word card */}
                  <span lang="tr" className="px-5 py-2.5 border border-[#E9ECEF] bg-white text-[#1A1D20] rounded-xl font-semibold shadow-sm">
                    {result.wordAnalyzed}
                  </span>
                  
                  {/* Operator */}
                  <span className="text-[#3A5A40] font-black">+</span>

                  {/* Suffix card */}
                  <span lang="tr" className="px-5 py-2.5 border border-[#3A5A40]/40 bg-[#3A5A40]/10 text-[#3A5A40] rounded-xl font-bold">
                    -{result.suffixApplied}
                  </span>

                  {/* Operator */}
                  <span className="text-neutral-400 font-bold">=</span>

                  {/* Merged result card */}
                  <span lang="tr" className="px-6 py-2.5 border border-[#3A5A40] bg-[#3A5A40] text-white rounded-xl font-black tracking-wide shadow-md">
                    {result.result}
                  </span>
                </div>

                <div className="text-center pt-2">
                  <span className="text-xs text-[#565E64] font-light">Zanorja e fundit e rrënjës: </span>
                  <span lang="tr" className="text-xs font-bold text-[#3A5A40] font-technical">{getLastVowel(result.wordAnalyzed)}</span>
                  <span className="text-neutral-300 mx-2">|</span>
                  <span className="text-xs text-[#565E64] font-light">Harmonia 2-she: </span>
                  <span lang="tr" className="text-xs font-bold text-[#1A1D20] font-technical">-{getVowelHarmony2(result.wordAnalyzed)}</span>
                  <span className="text-neutral-300 mx-2">|</span>
                  <span className="text-xs text-[#565E64] font-light">Harmonia 4-she: </span>
                  <span lang="tr" className="text-xs font-bold text-[#1A1D20] font-technical">-{getVowelHarmony4(result.wordAnalyzed)}</span>
                </div>
              </div>

              {/* Detailed Albanian Trace Logs */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-[#1A1D20] uppercase tracking-widest border-b border-[#E9ECEF] pb-2">
                  Logu i Detajuar i Ndryshimit Gramatikor:
                </h4>

                <div className="space-y-3">
                  {/* Dynamic Consonant Voicing Logs */}
                  <div className="p-4 rounded-none border border-[#E9ECEF] bg-white">
                    <h5 className="text-[10px] font-bold text-[#3A5A40] uppercase mb-1.5 tracking-wider">
                      Bashkëtingëlloret: Rregulla e Voicing (Ketçap)
                    </h5>
                    {result.endsKetcap ? (
                      result.hasConsonantShift ? (
                        <p className="text-xs text-[#565E64] font-light leading-relaxed">
                          ⚠️ Fjala ends with a Ketçap consonant (<span className="font-bold text-[#3A5A40] font-technical">{result.wordAnalyzed[result.wordAnalyzed.length-1]}</span>). 
                          Nëse do t'i shtonim një prapashtesë që fillon me zanore, ajo do të ndryshonte (p.sh. <span className="font-technical italic">{result.wordAnalyzed}</span> → <span className="font-technical font-bold text-[#3A5A40]">{result.mutatedWord}</span>).
                          Megjithatë, prapashtesa e përzgjedhur fillon me bashkëtingëllore, kështu që rrënja mbetet e pandryshuar!
                        </p>
                      ) : (
                        <p className="text-xs text-neutral-450 font-light leading-relaxed">
                          ⚠️ Fjala përfundon me bashkëtingëllore të fortë por është përjashtim popullor që nuk ndryshon (p.sh. saç → saçı). Rrënja ruhet siç është.
                        </p>
                      )
                    ) : (
                      <p className="text-xs text-neutral-450 font-light leading-relaxed">
                        ✓ Rrënja nuk përfundon me p, ç, t, ose k (Ketçap). Rrënja mbetet e pastër pa mutacion bashkëtingëllor.
                      </p>
                    )}
                  </div>

                  {/* Generated explanations from strategies */}
                  <div className="p-4 rounded-xl border border-[#E9ECEF] bg-white space-y-3">
                    <h5 className="text-[10px] font-bold text-[#1A1D20] uppercase tracking-wider">
                      Zanoret: Harmonia Vokalore & Krahasimi Shqip
                    </h5>
                    <div className="space-y-2">
                      {result.changes.map((ch: string, idx: number) => (
                        <div key={idx} className="flex gap-2 items-start text-xs font-light text-[#565E64] leading-relaxed">
                          <span className="text-[#3A5A40] font-bold">⚡</span>
                          <p>{ch}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
