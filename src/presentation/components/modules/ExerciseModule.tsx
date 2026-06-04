import React, { useState } from 'react';
import { useLesson } from '../../../application/state/LessonContext';

interface ExerciseModuleProps {
  onComplete?: () => void;
}

export const ExerciseModule: React.FC<ExerciseModuleProps> = ({ onComplete }) => {
  const { exercises, markChapterCompleted, readingCompleted } = useLesson();
  
  // States for exercises
  const [multipleChoiceAnswer, setMultipleChoiceAnswer] = useState<string>('');
  const [sortedWords, setSortedWords] = useState<string[]>([]);
  const [builderSuffix, setBuilderSuffix] = useState<string>('');
  
  const [checkedExercises, setCheckedExercises] = useState<Record<number, boolean>>({});
  const [exerciseResults, setExerciseResults] = useState<Record<number, { correct: boolean; msg: string }>>({});

  if (exercises.length === 0) return null;

  // Render Exercise Type A: Multiple Choice
  const renderMultipleChoice = (ex: any) => {
    const payload = JSON.parse(ex.source_payload_json);
    const target = JSON.parse(ex.validation_target_json);
    const isChecked = checkedExercises[ex.id];
    const result = exerciseResults[ex.id];

    const checkAnswer = () => {
      if (!multipleChoiceAnswer) {
        alert('Ju lutemi zgjidhni një opsion!');
        return;
      }
      const correct = multipleChoiceAnswer === target.correct_answer;
      setCheckedExercises(prev => ({ ...prev, [ex.id]: true }));
      setExerciseResults(prev => ({
        ...prev,
        [ex.id]: {
          correct,
          msg: correct 
            ? (target.msg_success || 'E saktë!') 
            : (target.msg_failure || 'E pasaktë.')
        }
      }));
    };

    return (
      <div className="bg-neutral-50 border border-[#E9ECEF] rounded-2xl p-5 space-y-4 shadow-inner animate-fade-in">
        <div>
          <span className="text-[9px] font-bold text-[#3A5A40] bg-white border border-[#E9ECEF] px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
            Lloji A: Skuadra e Shumësit (Zgjedhje e Shumëfishtë)
          </span>
          <p className="text-sm font-light text-[#565E64] mt-2">{ex.prompt_albanian}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 max-w-md">
          {payload.options.map((opt: string) => {
            const isSelected = multipleChoiceAnswer === opt;
            let optStyle = 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50 rounded-xl hover:shadow-xs';
            
            if (isSelected) optStyle = 'bg-[#3A5A40]/10 border-[#3A5A40] text-[#3A5A40] font-bold rounded-xl shadow-xs';
            if (isChecked) {
              if (opt === target.correct_answer) optStyle = 'bg-emerald-100/50 border-emerald-500 text-emerald-800 font-bold rounded-xl shadow-xs';
              else if (isSelected) optStyle = 'bg-rose-100/50 border-rose-500 text-rose-800 rounded-xl shadow-xs';
            }

            return (
              <button
                key={opt}
                disabled={isChecked}
                onClick={() => setMultipleChoiceAnswer(opt)}
                className={`p-3 border text-xs text-left font-technical transition duration-200 cursor-pointer ${optStyle}`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {!isChecked ? (
          <button
            onClick={checkAnswer}
            className="px-4 py-2.5 bg-white border border-[#E9ECEF] text-[#1A1D20] hover:border-[#3A5A40] hover:text-[#3A5A40] rounded-xl text-xs font-bold transition cursor-pointer shadow-xs hover:shadow-xs"
          >
            Kontrollo Shumësin
          </button>
        ) : (
          <p className={`text-xs font-semibold mt-2 leading-relaxed ${result.correct ? 'text-[#3A5A40]' : 'text-[#c0392b]'}`}>
            {result.correct ? '✓ ' : '✗ '} {result.msg}
          </p>
        )}
      </div>
    );
  };

  // Render Exercise Type B: Word Sorting
  const renderWordSorting = (ex: any) => {
    const payload = JSON.parse(ex.source_payload_json);
    const target = JSON.parse(ex.validation_target_json);
    const isChecked = checkedExercises[ex.id];
    const result = exerciseResults[ex.id];

    // Source words not yet placed in the sorted pool
    const unusedWords = payload.words.filter((w: string) => !sortedWords.includes(w));

    const handleWordTap = (word: string, isSortingPool: boolean) => {
      if (isChecked) return;
      if (isSortingPool) {
        // Remove from sorting pool
        setSortedWords(prev => prev.filter(w => w !== word));
      } else {
        // Append to sorting pool
        setSortedWords(prev => [...prev, word]);
      }
    };

    const checkAnswer = () => {
      if (sortedWords.length < target.correct_sequence.length) {
        alert('Ju lutemi radhitni të gjitha fjalët përpara kontrollit!');
        return;
      }

      const correct = JSON.stringify(sortedWords) === JSON.stringify(target.correct_sequence);
      setCheckedExercises(prev => ({ ...prev, [ex.id]: true }));
      setExerciseResults(prev => ({
        ...prev,
        [ex.id]: {
          correct,
          msg: correct
            ? (target.msg_success || "E saktë!")
            : (target.msg_failure || "E pasaktë.")
        }
      }));
    };

    const resetSorting = () => {
      setSortedWords([]);
    };

    return (
      <div className="bg-neutral-50 border border-[#E9ECEF] rounded-2xl p-5 space-y-4 shadow-inner animate-fade-in">
        <div>
          <span className="text-[9px] font-bold text-[#3A5A40] bg-white border border-[#E9ECEF] px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
            Lloji B: Ndërtuesi i Sintaksës (Radhitja e Fjalëve)
          </span>
          <p className="text-sm font-light text-[#565E64] mt-2">{ex.prompt_albanian}</p>
        </div>

        {/* Placing slots display */}
        <div className="bg-white border border-[#E9ECEF] rounded-xl p-4 min-h-[50px] flex items-center justify-start gap-2 flex-wrap shadow-xs">
          {sortedWords.length === 0 ? (
            <span className="text-xs text-neutral-400 italic">Shtypni fjalët e mëposhtme për t'i vendosur këtu sipas radhës...</span>
          ) : (
            sortedWords.map(w => (
              <button
                key={w}
                disabled={isChecked}
                onClick={() => handleWordTap(w, true)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-bold font-technical cursor-pointer transition duration-200 shadow-xs ${
                  isChecked 
                    ? result.correct
                      ? 'bg-emerald-100/50 border-emerald-500 text-emerald-800'
                      : 'bg-rose-100/50 border-rose-500 text-rose-800'
                    : 'bg-[#3A5A40]/10 border-[#3A5A40]/30 text-[#3A5A40] hover:bg-[#3A5A40]/25'
                }`}
              >
                {w}
              </button>
            ))
          )}
        </div>

        {/* Source tags pool */}
        {!isChecked && unusedWords.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {unusedWords.map((w: string) => (
              <button
                key={w}
                onClick={() => handleWordTap(w, false)}
                className="px-3 py-1.5 rounded-lg border border-[#E9ECEF] bg-white hover:bg-neutral-50 text-xs font-bold font-technical text-[#565E64] cursor-pointer transition duration-200 shadow-xs hover:-translate-y-0.5"
              >
                {w}
              </button>
            ))}
          </div>
        )}

        {/* Sorting controls */}
        {!isChecked ? (
          <div className="flex gap-2">
            <button
              onClick={checkAnswer}
              className="px-4 py-2.5 bg-white border border-[#E9ECEF] text-[#1A1D20] hover:border-[#3A5A40] hover:text-[#3A5A40] rounded-xl text-xs font-bold transition cursor-pointer shadow-xs hover:shadow"
            >
              Kontrollo Sintaksën
            </button>
            {sortedWords.length > 0 && (
              <button
                onClick={resetSorting}
                className="px-3 py-2 text-xs text-[#565E64] hover:text-[#1A1D20] bg-transparent border-0 cursor-pointer"
              >
                Rivendos
              </button>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            <p className={`text-xs font-semibold leading-relaxed ${result.correct ? 'text-[#3A5A40]' : 'text-[#c0392b]'}`}>
              {result.correct ? '✓ ' : '✗ '} {result.msg}
            </p>
            {!result.correct && (
              <button
                onClick={() => {
                  setCheckedExercises(prev => ({ ...prev, [ex.id]: false }));
                  resetSorting();
                }}
                className="px-3 py-1.5 bg-white border border-[#E9ECEF] text-[#565E64] hover:border-[#3A5A40] hover:text-[#3A5A40] rounded-lg text-xs font-bold cursor-pointer shadow-xs"
              >
                Provo Përsëri
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  // Render Exercise Type C: Agglutination Builder
  const renderAgglutinationBuilder = (ex: any) => {
    const payload = JSON.parse(ex.source_payload_json);
    const target = JSON.parse(ex.validation_target_json);
    const isChecked = checkedExercises[ex.id];
    const result = exerciseResults[ex.id];

    const checkAnswer = () => {
      if (!builderSuffix) {
        alert('Ju lutemi zgjidhni një prapashtesë për ta bashkuar!');
        return;
      }

      const correct = builderSuffix === target.correct_suffix;
      setCheckedExercises(prev => ({ ...prev, [ex.id]: true }));
      setExerciseResults(prev => ({
        ...prev,
        [ex.id]: {
          correct,
          msg: correct
            ? (target.msg_success || "E saktë!")
            : (target.msg_failure || "E pasaktë.")
        }
      }));
    };

    return (
      <div className="bg-neutral-50 border border-[#E9ECEF] rounded-2xl p-5 space-y-4 shadow-inner animate-fade-in">
        <div>
          <span className="text-[9px] font-bold text-[#3A5A40] bg-white border border-[#E9ECEF] px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
            Lloji C: Ndërtuesi i Prapashtesave (Agglutination Builder)
          </span>
          <p className="text-sm font-light text-[#565E64] mt-2">{ex.prompt_albanian}</p>
        </div>

        {/* Dynamic visual merging canvas */}
        <div className="bg-white border border-[#E9ECEF] rounded-2xl p-6 flex justify-center items-center shadow-xs">
          <div className="flex flex-wrap justify-center items-center gap-2 text-xl font-technical">
            <span className="px-4 py-2 border border-[#E9ECEF] bg-neutral-50 text-[#1A1D20] rounded-xl font-semibold uppercase shadow-xs">
              {payload.root}
            </span>
            <span className="text-[#3A5A40] font-black">+</span>
            
            {/* Suffix slot */}
            <div className={`px-4 py-2 border border-dashed rounded-xl min-w-[70px] text-center font-bold transition duration-200 shadow-xs ${
              builderSuffix 
                ? isChecked
                  ? result.correct
                    ? 'bg-emerald-100/50 border-emerald-500 text-emerald-800'
                    : 'bg-rose-100/50 border-rose-500 text-rose-800'
                  : 'bg-[#3A5A40]/10 border-[#3A5A40] text-[#3A5A40]' 
                : 'border-neutral-300 bg-neutral-100 text-neutral-450'
            }`}>
              {builderSuffix ? `-${builderSuffix}` : '?'}
            </div>

            {builderSuffix && (
              <>
                <span className="text-neutral-400 font-bold">=</span>
                <span className={`px-4 py-2 border rounded-xl font-extrabold tracking-wide uppercase shadow-md ${
                  isChecked
                    ? result.correct
                      ? 'bg-emerald-100/55 border-emerald-500 text-emerald-800'
                      : 'bg-rose-100/55 border-rose-500 text-rose-800'
                    : 'bg-neutral-50 border-[#E9ECEF] text-[#1A1D20]'
                }`}>
                  {payload.root + builderSuffix}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Suffix selectors */}
        {!isChecked && (
          <div className="flex flex-wrap gap-2 justify-center">
            {payload.suffixes.map((suff: string) => (
              <button
                key={suff}
                onClick={() => setBuilderSuffix(suff)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-bold font-technical cursor-pointer transition duration-200 shadow-xs ${
                  builderSuffix === suff
                    ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                    : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50'
                }`}
              >
                -{suff}
              </button>
            ))}
          </div>
        )}

        {/* Control Button */}
        {!isChecked ? (
          <div className="flex justify-center">
            <button
              onClick={checkAnswer}
              className="px-4 py-2.5 bg-white border border-[#E9ECEF] text-[#1A1D20] hover:border-[#3A5A40] hover:text-[#3A5A40] rounded-xl text-xs font-bold transition cursor-pointer shadow-xs hover:shadow"
            >
              Bashko & Kontrollo
            </button>
          </div>
        ) : (
          <div className="text-center space-y-3">
            <p className={`text-xs font-semibold leading-relaxed ${result.correct ? 'text-[#3A5A40]' : 'text-[#c0392b]'}`}>
              {result.correct ? '✓ ' : '✗ '} {result.msg}
            </p>
            {!result.correct && (
              <button
                onClick={() => {
                  setCheckedExercises(prev => ({ ...prev, [ex.id]: false }));
                  setBuilderSuffix('');
                }}
                className="px-3 py-1.5 bg-white border border-[#E9ECEF] text-[#565E64] hover:border-[#3A5A40] hover:text-[#3A5A40] rounded-lg text-xs font-bold cursor-pointer shadow-xs"
              >
                Provo Përsëri
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  const handleFinishLesson = () => {
    // Check if at least one exercise checked
    if (Object.keys(checkedExercises).length === 0) {
      alert('Ju lutemi provoni së paku njërën nga ushtrimet përpara se të kryeni kapitullin!');
      return;
    }
    
    markChapterCompleted();
    onComplete?.();
    
    // Smooth scroll to the completion card at the bottom of the container
    setTimeout(() => {
      const completionCard = document.getElementById('chapter-completion-card');
      if (completionCard) {
        completionCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 bg-white border border-[#E9ECEF] space-y-8 shadow-sm">
      
      <div className="mb-6 pb-4 border-b border-[#E9ECEF]">
        <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-widest">Sekuenca 5</span>
        <h2 className="text-xl font-black text-[#1A1D20] uppercase font-sans">Ushtrime Interaktive (Pratik Egzersizler)</h2>
        <p className="text-xs text-[#565E64] font-light mt-1">
          Testoni njohuritë tuaja praktike mbi shumësin dhe sintaksën përmes ushtrimeve tona interaktive.
        </p>
      </div>

      <div className="space-y-8">
        {exercises.map(ex => {
          if (ex.exercise_type === 'MULTIPLE_CHOICE') return <div key={ex.id}>{renderMultipleChoice(ex)}</div>;
          if (ex.exercise_type === 'WORD_SORT') return <div key={ex.id}>{renderWordSorting(ex)}</div>;
          if (ex.exercise_type === 'SUFFIX_BUILDER') return <div key={ex.id}>{renderAgglutinationBuilder(ex)}</div>;
          return null;
        })}
      </div>

      <div className="pt-6 border-t border-[#E9ECEF] flex flex-wrap items-center justify-between gap-4">
        <div>
          {readingCompleted && (
            <div className="text-xs text-[#3A5A40] bg-[#3A5A40]/10 border border-[#3A5A40]/30 px-4 py-2.5 rounded-xl font-bold uppercase tracking-wider flex items-center gap-1.5 select-none">
              <span>✓</span> Ky kapitull u përfundua!
            </div>
          )}
        </div>
        <button
          onClick={handleFinishLesson}
          className="px-6 py-3.5 bg-[#3A5A40] hover:bg-[#2A3F2E] text-white font-bold rounded-xl text-xs uppercase tracking-widest transition cursor-pointer select-none active-cta shadow-md"
        >
          {readingCompleted ? 'Kryej Kapitullin Përsëri 🏆' : 'Kryej Kapitullin 🏆'}
        </button>
      </div>
    </div>
  );
};
