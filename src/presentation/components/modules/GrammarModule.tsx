import React, { useState, useEffect } from 'react';
import { useLesson } from '../../../application/state/LessonContext';
import { SuffixRegistry } from '../../../core/harmony/strategies/suffixRegistry';

const renderMarkdown = (text: string) => {
  if (!text) return '';
  
  const boldParts = text.split('**');
  
  return boldParts.map((boldPart, boldIdx) => {
    const isBold = boldIdx % 2 === 1;
    const italicParts = boldPart.split('*');
    
    const content = italicParts.map((italicPart, italicIdx) => {
      const isItalic = italicIdx % 2 === 1;
      if (isItalic) {
        return <em key={italicIdx} className="italic">{italicPart}</em>;
      }
      return italicPart;
    });

    if (isBold) {
      return (
        <strong key={boldIdx} className="font-bold text-[#3A5A40] dark:text-[#14B8A6]">
          {content}
        </strong>
      );
    }
    
    return <span key={boldIdx}>{content}</span>;
  });
};


interface GrammarModuleProps {
  onComplete?: () => void;
}

export const GrammarModule: React.FC<GrammarModuleProps> = ({ onComplete }) => {
  const { grammarCards, carouselStep, setCarouselStep } = useLesson();
  
  // Local states for interactive tool
  const [selectedWord, setSelectedWord] = useState<string>('kitap');
  const [interactiveResult, setInteractiveResult] = useState<any>(null);
  const [customWordInput, setCustomWordInput] = useState<string>('');

  const currentCard = grammarCards[carouselStep] || grammarCards[0];

  const config = currentCard?.interactive_example_json 
    ? JSON.parse(currentCard.interactive_example_json)
    : null;
  const cardSampleWords = config?.sampleWords || [];

  // Trigger onComplete when reaching the final step in the carousel
  useEffect(() => {
    if (grammarCards.length > 0 && carouselStep === grammarCards.length - 1) {
      onComplete?.();
    }
  }, [carouselStep, grammarCards.length, onComplete]);

  const handleNext = () => {
    if (carouselStep < grammarCards.length - 1) {
      setCarouselStep(carouselStep + 1);
    }
  };

  const handlePrev = () => {
    if (carouselStep > 0) {
      setCarouselStep(carouselStep - 1);
    }
  };

  // Run dynamic strategy on the selected word
  const runAgglutination = (word: string) => {
    setSelectedWord(word);
    
    const currentConfig = currentCard?.interactive_example_json 
      ? JSON.parse(currentCard.interactive_example_json)
      : null;
    const strategyKey = currentConfig?.strategy || 'plural';
    const StrategyClass = SuffixRegistry[strategyKey];

    if (StrategyClass) {
      const strategy = new StrategyClass();
      const output = strategy.apply(word);
      setInteractiveResult(output);
      onComplete?.();
    }
  };

  const handleCustomWordSubmit = () => {
    const cleanWord = customWordInput
      .toLowerCase()
      .trim()
      .replace(/[^a-zçğışöüÇĞİŞÖÜ]/gi, '');
      
    if (cleanWord.length > 0) {
      runAgglutination(cleanWord);
      setCustomWordInput('');
    } else {
      alert('Ju lutemi shkruani një fjalë të vlefshme me shkronja!');
    }
  };

  // Initialize interactive result on card change
  useEffect(() => {
    if (currentCard?.interactive_example_json) {
      const currentConfig = JSON.parse(currentCard.interactive_example_json);
      const initialWord = currentConfig.root || 'kitap';
      runAgglutination(initialWord);
    } else {
      setInteractiveResult(null);
    }
  }, [currentCard?.id]);

  if (grammarCards.length === 0) return null;

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 bg-white border border-[#E9ECEF] shadow-sm">
      <div className="mb-6 pb-4 border-b border-[#E9ECEF] flex justify-between items-center">
        <div>
          <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-widest">Sekuenca 3</span>
          <h2 className="text-xl font-black text-[#1A1D20] uppercase font-sans">Këndi i Gramatikës (Dil Bilgisi)</h2>
        </div>
        <div className="text-xs text-[#565E64] font-medium font-technical">
          Hapi {carouselStep + 1} nga {grammarCards.length}
        </div>
      </div>

      {/* Segmented Card Carousel Display */}
      <div className="grammar-card-bg rounded-2xl p-6 md:p-8 min-h-[300px] flex flex-col justify-between relative overflow-hidden transition-all duration-300 shadow-inner">
        
        <div>
          {/* Card Title */}
          <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-wider block mb-1">
            {currentCard.title_albanian}
          </span>
          <h3 className="text-xl font-black text-[#1A1D20] font-technical mb-4 uppercase tracking-tight">
            {currentCard.rule_concept_turkish}
          </h3>

          {/* Explanation in Albanian */}
          <div className="text-sm md:text-base text-[#1A1D20] dark:text-[#F1F5F9] font-normal leading-relaxed whitespace-pre-line space-y-2">
            {renderMarkdown(currentCard.explanation_albanian)}
          </div>
        </div>

        {/* Custom Dynamic Interactive Tool on Step 3 or if embedded */}
        {currentCard.interactive_example_json && (
          <div className="mt-8 pt-6 border-t border-[#E9ECEF]">
            <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-widest block mb-3">
              ⚡ Provo Harmoninë Vokalore në Kohë Reale:
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Word Selectors & Custom Input */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-[#1A1D20] font-medium mb-2 italic">Zgjidhni një rrënjë fjalë:</p>
                  <div className="grid grid-cols-3 gap-2">
                    {cardSampleWords.map((sw: any) => (
                      <button
                        key={sw.turkish}
                        onClick={() => runAgglutination(sw.turkish)}
                        className={`px-3 py-2 rounded-xl border text-xs font-bold transition duration-200 cursor-pointer shadow-xs ${
                          selectedWord === sw.turkish
                            ? 'bg-[#3A5A40]/10 text-[#3A5A40] border-[#3A5A40]'
                            : 'bg-white border-[#E9ECEF] text-[#1A1D20] hover:bg-neutral-50'
                        }`}
                      >
                        <span className="font-technical font-medium">{sw.turkish}</span>
                        <span className="text-[9px] text-[#565E64] block font-light italic">({sw.albanian})</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#E9ECEF]/60 pt-3">
                  <p className="text-xs text-[#1A1D20] font-medium mb-1.5 italic">Ose shkruani fjalën tuaj:</p>
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleCustomWordSubmit();
                    }}
                    className="flex gap-2"
                  >
                    <input
                      type="text"
                      value={customWordInput}
                      onChange={(e) => setCustomWordInput(e.target.value)}
                      placeholder="p.sh., defter, masa, araba..."
                      className="px-3 py-2 text-xs border border-[#E9ECEF] rounded-xl focus:outline-hidden focus:border-[#3A5A40] focus:ring-1 focus:ring-[#3A5A40] flex-1 bg-white font-technical"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#3A5A40] hover:bg-[#2A3F2E] text-white font-bold rounded-xl text-xs transition cursor-pointer select-none whitespace-nowrap active:scale-95"
                    >
                      Provo ⚡
                    </button>
                  </form>
                </div>
              </div>

              {/* Strategy aggregation output */}
              <div className="grammar-output-bg rounded-2xl p-4 min-h-[140px] flex flex-col justify-center shadow-xs">
                {interactiveResult && (
                  <div className="space-y-3">
                    {/* Visual agglutination representation */}
                    <div className="text-center pb-2 border-b border-[#E9ECEF]">
                      <span className="text-base font-technical font-medium text-[#1A1D20]">
                        {selectedWord}
                      </span>
                      <span className="text-base font-bold text-[#3A5A40] mx-1.5">+</span>
                      <span className="text-base font-bold text-[#3A5A40] font-technical">
                        -{interactiveResult.suffixApplied}
                      </span>
                      <span className="text-base font-bold text-[#1A1D20] mx-2">=</span>
                      <span className="text-lg font-black text-[#3A5A40] font-technical tracking-wide uppercase">
                        {interactiveResult.result}
                      </span>
                    </div>

                    {/* Explanations array generated dynamically by plural strategy */}
                    <div className="space-y-1">
                      {interactiveResult.changes.map((change: string, cIdx: number) => (
                        <p key={cIdx} className="text-xs text-[#1A1D20] font-normal leading-relaxed">
                          📌 {change}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Carousel buttons and progress tracker */}
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={carouselStep === 0}
            className={`px-4 py-2 rounded-xl text-xs font-bold border transition duration-200 cursor-pointer shadow-xs ${
              carouselStep === 0
                ? 'border-[#E9ECEF] text-neutral-300 bg-white cursor-not-allowed'
                : 'border-[#E9ECEF] bg-white text-[#565E64] hover:bg-neutral-50 hover:shadow-xs'
            }`}
          >
            ← Prapa
          </button>

          {/* Dot progress indicator */}
          <div className="flex gap-2 items-center">
            {grammarCards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCarouselStep(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer border-0 ${
                  carouselStep === idx ? 'bg-[#3A5A40] w-5 h-1.5' : 'bg-neutral-300 w-1.5 h-1.5'
                }`}
              ></button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={carouselStep === grammarCards.length - 1}
            className={`px-4 py-2 rounded-xl text-xs font-bold border transition duration-200 cursor-pointer shadow-xs ${
              carouselStep === grammarCards.length - 1
                ? 'border-[#E9ECEF] text-neutral-300 bg-white cursor-not-allowed'
                : 'border-[#E9ECEF] bg-white text-[#565E64] hover:bg-neutral-50 hover:shadow-xs'
            }`}
          >
            Para →
          </button>
        </div>
      </div>
    </div>
  );
};
