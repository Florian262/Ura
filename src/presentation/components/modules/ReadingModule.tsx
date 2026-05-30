import React, { useState } from 'react';
import { useLesson } from '../../../application/state/LessonContext';
import { useAudioPlayer } from '../../../application/hooks/useAudioPlayer';

export const ReadingModule: React.FC = () => {
  const { readingBlock, readingQuestions, setReadingCompleted, readingCompleted } = useLesson();
  const { play, isPlaying } = useAudioPlayer();
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  if (!readingBlock) return null;

  // Dialogue lines parsed from seeded JSON
  const dialogueTurkish = JSON.parse(readingBlock.content_turkish);
  const dialogueAlbanian = JSON.parse(readingBlock.content_albanian);

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    if (readingCompleted) return; // Prevent editing after completion
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
    setShowResults(false);
  };

  const verifyComprehension = () => {
    // Check if all questions are answered
    if (Object.keys(selectedAnswers).length < readingQuestions.length) {
      alert('Ju lutemi përgjigjuni të gjitha pyetjeve përpara se të verifikoni!');
      return;
    }

    // Verify answers
    let allCorrect = true;
    readingQuestions.forEach(q => {
      if (selectedAnswers[q.id] !== q.correct_index) {
        allCorrect = false;
      }
    });

    setShowResults(true);

    if (allCorrect) {
      setReadingCompleted(true);
    } else {
      alert('Disa përgjigje nuk janë të sakta. Rishikoni dialogun dhe provoni përsëri!');
    }
  };

  return (
    <div className="glass-panel rounded-none p-6 md:p-8 bg-white border border-[#E9ECEF]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-[#E9ECEF]">
        <div>
          <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-widest">Sekuenca 1</span>
          <h2 className="text-xl font-black text-[#1A1D20] uppercase font-sans">Lexim & Dëgjim (Okuma ve Dinleme)</h2>
        </div>
        <div className="flex gap-2">
          {/* Audio Hook */}
          {readingBlock.audio_asset_stub && (
            <button
              onClick={() => play(readingBlock.audio_asset_stub!)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-none border text-xs font-bold transition duration-200 cursor-pointer ${
                isPlaying 
                  ? 'bg-[#3A5A40]/15 text-[#3A5A40] border-[#3A5A40]/35 animate-pulse'
                  : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50 hover:text-[#1A1D20]'
              }`}
            >
              <span>{isPlaying ? '🔊 Po luhet...' : '🔈 Dëgjo'}</span>
            </button>
          )}

          {/* Translation Toggle */}
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className={`px-3 py-1.5 rounded-none border text-xs font-bold transition duration-200 cursor-pointer ${
              showTranslation
                ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50'
            }`}
          >
            {showTranslation ? 'Fshih Përkthimin' : 'Shfaq Përkthimin'}
          </button>
        </div>
      </div>

      {/* Dialogue Block */}
      <div className="bg-neutral-50 rounded-none p-4 md:p-6 mb-8 max-h-[450px] overflow-y-auto border border-[#E9ECEF] no-scrollbar">
        <div className="space-y-4">
          {dialogueTurkish.map((line: any, idx: number) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col ${isLeft ? 'items-start' : 'items-end'}`}>
                {/* Turkish text bubble */}
                <div className={`max-w-[85%] rounded-none px-4 py-2.5 ${
                  isLeft 
                    ? 'bg-white text-[#1A1D20] border border-[#E9ECEF]' 
                    : 'bg-[#3A5A40]/10 text-[#1A1D20] border border-[#3A5A40]/25'
                }`}>
                  <span className="text-[9px] font-bold text-[#3A5A40] uppercase block mb-0.5 tracking-wider font-technical">
                    {line.speaker}
                  </span>
                  <p className="text-sm font-technical font-medium tracking-wide">
                    {line.text}
                  </p>

                  {/* Albanian translation bubble if toggle enabled - Translation Rule */}
                  {showTranslation && (
                    <span className="translation-subtitle border-t border-[#E9ECEF]/80 pt-1.5 mt-1.5">
                      {dialogueAlbanian[idx].text}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Comprehension Questions */}
      <div className="mt-8 border-t border-[#E9ECEF] pt-6">
        <h3 className="text-xs font-bold text-[#1A1D20] uppercase tracking-widest mb-4 flex items-center gap-1.5">
          <span>🧠</span> Pyetje Kuptueshmërie (Anlama Soruları)
        </h3>

        <div className="space-y-6">
          {readingQuestions.map((q, qIdx) => {
            const selected = selectedAnswers[q.id];
            return (
              <div key={q.id} className="bg-white border border-[#E9ECEF] rounded-none p-4">
                <div className="mb-3">
                  <h4 className="text-sm font-bold text-[#1A1D20] font-technical uppercase tracking-tight">
                    {qIdx + 1}. {q.question_turkish}
                  </h4>
                  {/* Translation subtitle rule */}
                  <span className="translation-subtitle mt-0.5">
                    ({q.question_albanian})
                  </span>
                </div>

                {/* Options list */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = selected === optIdx;
                    const isCorrectOpt = q.correct_index === optIdx;
                    
                    let btnStyle = 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50';
                    if (isSelected) {
                      btnStyle = 'bg-[#3A5A40]/10 border-[#3A5A40] text-[#3A5A40] font-bold';
                    }
                    if (showResults) {
                      if (isCorrectOpt) {
                        btnStyle = 'bg-emerald-100/50 border-emerald-500 text-emerald-800 font-bold';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-100/50 border-rose-500 text-rose-800';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleOptionSelect(q.id, optIdx)}
                        className={`text-left text-xs p-3 rounded-none border transition duration-200 font-technical cursor-pointer ${btnStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Trigger */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#565E64] font-light italic">
            * Përgjigjuni saktë për të zhbllokuar seksionet e tjera të këtij kapitulli.
          </p>
          
          {!readingCompleted ? (
            <button
              onClick={verifyComprehension}
              className="px-6 py-3 text-center text-xs font-bold uppercase tracking-widest rounded-none cursor-pointer select-none active-cta"
            >
              Verifiko Përgjigjet
            </button>
          ) : (
            <div className="flex items-center gap-2 text-[#3A5A40] bg-[#3A5A40]/10 border border-[#3A5A40]/30 px-4 py-2.5 rounded-none text-xs font-bold uppercase tracking-wider">
              <span>✓</span> Të gjitha pyetjet u përgjigjën saktë! Moduli u zhbllokua.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
