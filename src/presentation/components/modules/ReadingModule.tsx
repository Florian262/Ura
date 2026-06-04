import React, { useState } from 'react';
import { useLesson } from '../../../application/state/LessonContext';
import { useAudioPlayer } from '../../../application/hooks/useAudioPlayer';

const Avatar: React.FC<{ speakerName: string }> = ({ speakerName }) => {
  const initial = speakerName ? speakerName.charAt(0).toUpperCase() : '?';
  
  const getAvatarColors = (name: string) => {
    const cleanName = (name || '').toLowerCase().trim();
    if (cleanName.length === 0) return 'bg-teal-600 text-white';
    
    let hash = 0;
    for (let i = 0; i < cleanName.length; i++) {
      hash = cleanName.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const colors = [
      'bg-amber-500 text-white',
      'bg-rose-500 text-white',
      'bg-emerald-600 text-white',
      'bg-blue-600 text-white',
      'bg-teal-600 text-white',
      'bg-purple-600 text-white',
      'bg-indigo-600 text-white',
      'bg-orange-500 text-white'
    ];
    
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  };

  const colorClass = getAvatarColors(speakerName);

  return (
    <div 
      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs uppercase shadow-xs shrink-0 border border-white/20 select-none ${colorClass}`}
      title={speakerName}
    >
      {initial}
    </div>
  );
};

export const ReadingModule: React.FC = () => {
  const { readingBlock, readingQuestions, setReadingCompleted, readingCompleted } = useLesson();
  const { playDialogue, playText, stop, isPlaying, currentSrc } = useAudioPlayer();
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  if (!readingBlock) return null;

  // Dialogue lines parsed from seeded JSON
  const dialogueTurkish = JSON.parse(readingBlock.content_turkish);
  const dialogueAlbanian = JSON.parse(readingBlock.content_albanian);

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
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
    <div className="glass-panel rounded-2xl p-6 md:p-8 bg-white border border-[#E9ECEF] shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-[#E9ECEF]">
        <div>
          <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-widest">Sekuenca 1</span>
          <h2 className="text-xl font-black text-[#1A1D20] uppercase font-sans">Lexim & Dëgjim (Okuma ve Dinleme)</h2>
        </div>
        <div className="flex gap-2">
          {/* Audio Hook - Dialogue TTS loop */}
          {dialogueTurkish.length > 0 && (
            <button
              onClick={() => {
                if (isPlaying && currentSrc === 'dialogue') {
                  stop();
                } else {
                  playDialogue(dialogueTurkish);
                }
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition duration-200 cursor-pointer shadow-xs ${
                isPlaying && currentSrc === 'dialogue'
                  ? 'bg-[#3A5A40]/15 text-[#3A5A40] border-[#3A5A40]/35 animate-pulse'
                  : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50 hover:text-[#1A1D20]'
              }`}
            >
              <span>{isPlaying && currentSrc === 'dialogue' ? '⏸ Ndalo' : '🔈 Dëgjo Dialogun'}</span>
            </button>
          )}

          {/* Translation Toggle */}
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition duration-200 cursor-pointer shadow-xs ${
              showTranslation
                ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50'
            }`}
          >
            {showTranslation ? 'Fshih Përkthimin' : 'Shfaq Përkthimin'}
          </button>
        </div>
      </div>

      {/* Reading Content Pane - Switching dynamically between Dialogue bubble layout and Prose paragraph layout */}
      <div className="bg-neutral-50 rounded-2xl p-4 md:p-6 mb-8 max-h-[450px] overflow-y-auto border border-[#E9ECEF] no-scrollbar shadow-inner">
        {readingBlock.layout_style === 'dialogue' ? (
          /* dialogue bubble conversation layout */
          <div className="space-y-4">
            {dialogueTurkish.map((line: any, idx: number) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className={`flex items-end gap-3 w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
                  {isLeft && <Avatar speakerName={line.speaker} />}
                  
                  {/* Turkish text bubble */}
                  <div className={`max-w-[75%] md:max-w-[70%] px-4 py-2.5 shadow-xs ${
                    isLeft 
                      ? 'bg-white text-[#1A1D20] border border-[#E9ECEF] rounded-2xl rounded-bl-xs' 
                      : 'bg-[#3A5A40]/10 text-[#1A1D20] border border-[#3A5A40]/25 rounded-2xl rounded-br-xs'
                  }`}>
                    <div className="flex justify-between items-center gap-4 mb-1">
                      <span className="text-[9px] font-bold text-[#3A5A40] uppercase tracking-wider font-technical">
                        {line.speaker}
                      </span>
                      <button
                        onClick={() => {
                          if (isPlaying && currentSrc === line.text) {
                            stop();
                          } else {
                            playText(line.text, 'tr');
                          }
                        }}
                        className={`text-[9px] font-bold hover:text-[#3A5A40] border-b border-transparent hover:border-[#3A5A40] transition cursor-pointer select-none ${
                          isPlaying && currentSrc === line.text ? 'text-teal-600 dark:text-teal-400 font-extrabold animate-pulse' : 'text-neutral-400'
                        }`}
                      >
                        {isPlaying && currentSrc === line.text ? '⏸ Po lexohet' : '🔈 Dëgjo'}
                      </button>
                    </div>
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

                  {!isLeft && <Avatar speakerName={line.speaker} />}
                </div>
              );
            })}
          </div>
        ) : (
          /* standard paragraph narrative prose layout */
          <div className="space-y-6 text-left">
            {dialogueTurkish.map((line: any, idx: number) => (
              <div key={idx} className="bg-white dark:bg-neutral-900/30 border border-[#E9ECEF] rounded-2xl p-5 shadow-xs relative group hover:border-[#3A5A40]/30 transition duration-200">
                <div className="flex justify-between items-center gap-4 mb-2">
                  {line.speaker && (
                    <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-wider font-technical">
                      {line.speaker}
                    </span>
                  )}
                  <button
                    onClick={() => {
                      if (isPlaying && currentSrc === line.text) {
                        stop();
                      } else {
                        playText(line.text, 'tr');
                      }
                    }}
                    className={`text-[9px] font-bold hover:text-[#3A5A40] border-b border-transparent hover:border-[#3A5A40] transition cursor-pointer select-none ml-auto ${
                      isPlaying && currentSrc === line.text ? 'text-teal-600 dark:text-teal-400 font-extrabold animate-pulse' : 'text-neutral-400'
                    }`}
                  >
                    {isPlaying && currentSrc === line.text ? '⏸ Po lexohet' : '🔈 Dëgjo'}
                  </button>
                </div>
                <p className="text-sm font-technical font-medium tracking-wide leading-relaxed">
                  {line.text}
                </p>
                {showTranslation && (
                  <p className="translation-subtitle border-t border-[#E9ECEF]/80 pt-2 mt-2 leading-relaxed">
                    {dialogueAlbanian[idx].text}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Comprehension Questions */}
      <div className="mt-8 border-t border-[#E9ECEF] pt-6">
        {readingQuestions && readingQuestions.length > 0 ? (
          <>
            <h3 className="text-xs font-bold text-[#1A1D20] uppercase tracking-widest mb-4 flex items-center gap-1.5">
              <span>🧠</span> Pyetje Kuptueshmërie (Anlama Soruları)
            </h3>

            <div className="space-y-6">
              {readingQuestions.map((q, qIdx) => {
                const selected = selectedAnswers[q.id];
                return (
                  <div key={q.id} className="bg-white border border-[#E9ECEF] rounded-xl p-4 shadow-xs">
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
                        
                        let btnStyle = 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50 rounded-xl hover:shadow-xs';
                        if (isSelected) {
                          btnStyle = 'bg-[#3A5A40]/10 border-[#3A5A40] text-[#3A5A40] font-bold rounded-xl shadow-xs';
                        }
                        if (showResults) {
                          if (isCorrectOpt) {
                            btnStyle = 'bg-emerald-100/50 border-emerald-500 text-emerald-800 font-bold rounded-xl shadow-xs';
                          } else if (isSelected) {
                            btnStyle = 'bg-rose-100/50 border-rose-500 text-rose-800 rounded-xl shadow-xs';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleOptionSelect(q.id, optIdx)}
                            className={`text-left text-xs p-3 border transition duration-200 font-technical cursor-pointer ${btnStyle}`}
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
              
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto justify-end">
                {readingCompleted && (
                  <div className="flex items-center gap-2 text-[#3A5A40] bg-[#3A5A40]/10 border border-[#3A5A40]/30 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider select-none">
                    <span>✓</span> Të gjitha pyetjet u përgjigjën saktë! Moduli u zhbllokua.
                  </div>
                )}
                
                <button
                  onClick={verifyComprehension}
                  className="px-6 py-3 text-center text-xs font-bold uppercase tracking-widest rounded-xl cursor-pointer select-none active-cta shadow-sm"
                >
                  {readingCompleted ? 'Rivedos & Verifiko Përsëri' : 'Verifiko Përgjigjet'}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="mt-2 flex flex-col md:flex-row justify-between items-center gap-4 bg-neutral-50/50 border border-[#E9ECEF] rounded-xl p-5 shadow-xs">
            <div className="text-left">
              <h4 className="text-xs font-bold text-[#1A1D20] uppercase tracking-wide mb-1">Lexim i thjeshtë</h4>
              <p className="text-xs text-[#565E64] font-light">
                Ky lexim nuk përmban pyetje kuptueshmërie. Ju mund ta shënoni direkt si të lexuar për të vazhduar.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 justify-end w-full md:w-auto">
              {readingCompleted && (
                <div className="flex items-center gap-2 text-[#3A5A40] bg-[#3A5A40]/10 border border-[#3A5A40]/30 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 select-none">
                  <span>✓</span> Leximi u krye! Moduli u zhbllokua.
                </div>
              )}
              
              <button
                onClick={() => setReadingCompleted(true)}
                className="px-6 py-3 text-center text-xs font-bold uppercase tracking-widest rounded-xl cursor-pointer select-none active-cta shadow-sm shrink-0"
              >
                {readingCompleted ? 'Shëno përsëri si të Lexuar' : 'Shëno si të Lexuar'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
