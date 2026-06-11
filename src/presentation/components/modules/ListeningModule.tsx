import React, { useState, useEffect } from 'react';
import { useLesson } from '../../../application/state/LessonContext';
import { useAudioPlayer } from '../../../application/hooks/useAudioPlayer';

interface ListeningModuleProps {
  onComplete: () => void;
}

export const ListeningModule: React.FC<ListeningModuleProps> = ({ onComplete }) => {
  const { listeningBlock, listeningQuestions } = useLesson();
  const { playText, stop, isPlaying } = useAudioPlayer();
  
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [showText, setShowText] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Stop audio on unmount
  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  if (!listeningBlock) return null;

  const handlePlayPause = () => {
    if (isPlaying) {
      stop();
    } else {
      playText(listeningBlock.text, 'tr', undefined, playbackRate);
    }
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackRate(speed);
    if (isPlaying) {
      // Re-play with new speed
      playText(listeningBlock.text, 'tr', undefined, speed);
    }
  };

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
    setShowResults(false);
  };

  const verifyAnswers = () => {
    if (Object.keys(selectedAnswers).length < listeningQuestions.length) {
      alert('Ju lutemi përgjigjuni të gjitha pyetjeve përpara se të verifikoni!');
      return;
    }

    let allCorrect = true;
    listeningQuestions.forEach(q => {
      if (selectedAnswers[q.id] !== q.correct_index) {
        allCorrect = false;
      }
    });

    setShowResults(true);

    if (allCorrect) {
      setIsCompleted(true);
      onComplete();
    } else {
      alert('Disa përgjigje nuk janë të sakta. Rishikoni tekstin dhe provoni përsëri!');
    }
  };

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 bg-white border border-[#E9ECEF] shadow-sm">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-[#E9ECEF]">
        <div>
          <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-widest">Sekuenca 1.5</span>
          <h2 className="text-xl font-black text-[#1A1D20] uppercase font-sans">Kuptimi nga Dëgjimi (Dinleme Anlama)</h2>
        </div>
      </div>

      {/* Custom Audio Player Card */}
      <div className="bg-neutral-50 border border-[#E9ECEF] rounded-2xl p-5 md:p-6 mb-6 shadow-inner flex flex-col md:flex-row items-center gap-6 justify-between">
        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Play/Pause Button */}
          <button
            onClick={handlePlayPause}
            className={`w-14 h-14 rounded-full flex items-center justify-center text-lg transition duration-250 shadow-md cursor-pointer select-none ${
              isPlaying
                ? 'bg-[#3A5A40] text-white hover:bg-[#2C4430] animate-pulse border-none'
                : 'bg-white border border-[#E9ECEF] text-[#3A5A40] hover:bg-neutral-100'
            }`}
            title={isPlaying ? 'Ndalo' : 'Dëgjo'}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>

          <div>
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block">Statusi</span>
            <span className="text-sm font-bold text-neutral-800">
              {isPlaying ? 'Po lexohet me audio... 🔊' : 'Audio e ndaluar'}
            </span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
          {/* Speed Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E9ECEF] rounded-xl shadow-xs">
            <span className="text-[9px] font-bold text-neutral-400 px-2 uppercase select-none">Shpejtësia</span>
            {[0.8, 1.0, 1.2].map(speed => (
              <button
                key={speed}
                onClick={() => handleSpeedChange(speed)}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer transition select-none ${
                  playbackRate === speed
                    ? 'bg-[#3A5A40] text-white shadow-xs border-none'
                    : 'text-neutral-500 border-none bg-transparent hover:bg-neutral-100'
                }`}
              >
                {speed.toFixed(1)}x
              </button>
            ))}
          </div>

          {/* Toggle Text Button */}
          <button
            onClick={() => setShowText(!showText)}
            className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition duration-200 cursor-pointer shadow-xs select-none ${
              showText
                ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50'
            }`}
          >
            {showText ? 'Fshih Tekstin' : 'Shfaq Tekstin'}
          </button>
        </div>
      </div>

      {/* Transcript Text panel */}
      {showText && (
        <div className="bg-neutral-50 rounded-2xl p-5 md:p-6 mb-8 border border-[#E9ECEF] animate-fade-in shadow-inner max-h-[350px] overflow-y-auto no-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Turkish Text */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-wider block">Turqisht</span>
              <p className="text-sm font-technical font-medium leading-relaxed text-[#1A1D20] bg-white border border-[#E9ECEF] p-4 rounded-xl shadow-xs whitespace-pre-line">
                {listeningBlock.text}
              </p>
            </div>

            {/* Albanian Translation */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-wider block">Shqip (Përkthimi)</span>
              <p className="text-sm font-technical italic leading-relaxed text-neutral-600 bg-white border border-[#E9ECEF] p-4 rounded-xl shadow-xs whitespace-pre-line">
                {listeningBlock.translation}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Comprehension Questions */}
      <div className="border-t border-[#E9ECEF] pt-6">
        <h3 className="text-xs font-bold text-[#1A1D20] uppercase tracking-widest mb-4 flex items-center gap-1.5 select-none">
          <span>🧠</span> Pyetje Kuptueshmërie (Anlama Soruları)
        </h3>

        <div className="space-y-6">
          {listeningQuestions.map((q, qIdx) => {
            const selected = selectedAnswers[q.id];
            return (
              <div key={q.id} className="bg-white border border-[#E9ECEF] rounded-xl p-4 shadow-xs">
                <div className="mb-3">
                  <h4 lang="tr" className="text-sm font-bold text-[#1A1D20] font-technical tracking-tight">
                    {qIdx + 1}. {q.question_turkish}
                  </h4>
                  <span className="translation-subtitle mt-0.5">
                    ({q.question_albanian})
                  </span>
                </div>

                {/* Options List */}
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
          <p className="text-xs text-[#565E64] font-light italic select-none">
            * Përgjigjuni saktë për të kryer këtë seksion.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto justify-end">
            {isCompleted && (
              <div className="flex items-center gap-2 text-[#3A5A40] bg-[#3A5A40]/10 border border-[#3A5A40]/30 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider select-none">
                <span>✓</span> Pyetjet e dëgjimit u përgjigjën saktë!
              </div>
            )}
            
            <button
              onClick={verifyAnswers}
              className="px-6 py-3 text-center text-xs font-bold uppercase tracking-widest rounded-xl cursor-pointer select-none active-cta shadow-sm"
            >
              {isCompleted ? 'Verifiko Përsëri' : 'Verifiko Përgjigjet'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
