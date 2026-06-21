import React, { useState } from 'react';
import { useLesson } from '../../../application/state/LessonContext';

interface ExerciseModuleProps {
  onComplete?: () => void;
}

export const ExerciseModule: React.FC<ExerciseModuleProps> = ({ onComplete }) => {
  const { exercises, markChapterCompleted, readingCompleted, currentChapter } = useLesson();
  
  // States for exercises (keyed by exercise ID to prevent cross-card state contamination)
  const [multipleChoiceAnswers, setMultipleChoiceAnswers] = useState<Record<number, string>>({});
  const [sortedWordsList, setSortedWordsList] = useState<Record<number, string[]>>({});
  const [builderSuffixes, setBuilderSuffixes] = useState<Record<number, string>>({});
  
  // B2 Specific States
  const [clozeAnswers, setClozeAnswers] = useState<Record<number, string>>({});
  const [selectedErrorWord, setSelectedErrorWord] = useState<Record<number, string>>({});
  const [errorCorrectionAnswers, setErrorCorrectionAnswers] = useState<Record<number, string>>({});
  const [connectorAnswers, setConnectorAnswers] = useState<Record<number, string>>({});

  const [checkedExercises, setCheckedExercises] = useState<Record<number, boolean>>({});
  const [exerciseResults, setExerciseResults] = useState<Record<number, { correct: boolean; msg: string }>>({});
  const [showTranslation, setShowTranslation] = useState<boolean>(false);

  const isB2 = currentChapter?.level === 'B2';

  if (exercises.length === 0) return null;

  // Render Exercise Type A: Multiple Choice
  const renderMultipleChoice = (ex: any) => {
    const payload = JSON.parse(ex.source_payload_json);
    const target = JSON.parse(ex.validation_target_json);
    const isChecked = checkedExercises[ex.id];
    const result = exerciseResults[ex.id];
    const currentAnswer = multipleChoiceAnswers[ex.id] || '';

    const checkAnswer = () => {
      if (!currentAnswer) {
        alert(isB2 ? 'Lütfen bir şık seçiniz!' : 'Ju lutemi zgjidhni një opsion!');
        return;
      }
      const correct = currentAnswer === target.correct_answer;
      setCheckedExercises(prev => ({ ...prev, [ex.id]: true }));
      setExerciseResults(prev => ({
        ...prev,
        [ex.id]: {
          correct,
          msg: correct 
            ? (target.msg_success || (isB2 ? 'Doğru!' : 'E saktë!')) 
            : (target.msg_failure || (isB2 ? 'Yanlış.' : 'E pasaktë.'))
        }
      }));
    };

    return (
      <div className="bg-neutral-50/50 md:bg-neutral-50 border border-[#E9ECEF] rounded-2xl p-4 md:p-5 space-y-4 md:shadow-inner animate-fade-in">
        <div>
          <span className="text-[9px] font-bold text-[#3A5A40] bg-white border border-[#E9ECEF] px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
            {isB2 ? 'Çoktan Seçmeli' : 'Zgjedhje e Shumëfishtë (Çoktan Seçmeli)'}
          </span>
          <p className="text-sm font-light text-[#565E64] mt-2">
            {isB2 ? (ex.prompt_turkish || ex.prompt_albanian) : ex.prompt_albanian}
          </p>
          {isB2 && showTranslation && ex.prompt_turkish && (
            <p className="text-xs text-neutral-450 italic mt-1">Shqip: {ex.prompt_albanian}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 max-w-md">
          {payload.options.map((opt: string) => {
            const isSelected = currentAnswer === opt;
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
                onClick={() => setMultipleChoiceAnswers(prev => ({ ...prev, [ex.id]: opt }))}
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
            {isB2 ? 'Kontrol Et' : 'Kontrollo Përgjigjen'}
          </button>
        ) : (
          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <p className={`text-xs font-semibold leading-relaxed ${result.correct ? 'text-[#3A5A40]' : 'text-[#c0392b]'}`}>
              {result.correct ? '✓ ' : '✗ '} {result.msg}
            </p>
            {isB2 && showTranslation && (
              <p className="text-xs text-neutral-450 font-light italic w-full">
                Shqip: {result.correct ? (target.msg_success_albanian || 'E saktë!') : (target.msg_failure_albanian || 'E pasaktë.')}
              </p>
            )}
            {!result.correct && (
              <button
                onClick={() => resetSingleExercise(ex.id, 'MULTIPLE_CHOICE')}
                className="px-2.5 py-1 text-[10px] font-bold border border-rose-200 text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg cursor-pointer transition flex items-center gap-1"
              >
                {isB2 ? 'Tekrar Dene 🔄' : 'Provo Përsëri 🔄'}
              </button>
            )}
          </div>
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
    const currentSorted = sortedWordsList[ex.id] || [];

    const unusedWords = payload.words.filter((w: string) => !currentSorted.includes(w));

    const handleWordTap = (word: string, isSortingPool: boolean) => {
      if (isChecked) return;
      if (isSortingPool) {
        setSortedWordsList(prev => ({
          ...prev,
          [ex.id]: currentSorted.filter(w => w !== word)
        }));
      } else {
        setSortedWordsList(prev => ({
          ...prev,
          [ex.id]: [...currentSorted, word]
        }));
      }
    };

    const checkAnswer = () => {
      if (currentSorted.length < target.correct_sequence.length) {
        alert(isB2 ? 'Lütfen kontrol etmeden önce tüm kelimeleri sıralayınız!' : 'Ju lutemi radhitni të gjitha fjalët përpara kontrollit!');
        return;
      }

      const correct = JSON.stringify(currentSorted) === JSON.stringify(target.correct_sequence);
      setCheckedExercises(prev => ({ ...prev, [ex.id]: true }));
      setExerciseResults(prev => ({
        ...prev,
        [ex.id]: {
          correct,
          msg: correct
            ? (target.msg_success || (isB2 ? 'Doğru!' : 'E saktë!'))
            : (target.msg_failure || (isB2 ? 'Yanlış.' : 'E pasaktë.'))
        }
      }));
    };

    const resetSorting = () => {
      setSortedWordsList(prev => ({ ...prev, [ex.id]: [] }));
    };

    return (
      <div className="bg-neutral-50/50 md:bg-neutral-50 border border-[#E9ECEF] rounded-2xl p-4 md:p-5 space-y-4 md:shadow-inner animate-fade-in">
        <div>
          <span className="text-[9px] font-bold text-[#3A5A40] bg-white border border-[#E9ECEF] px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
            {isB2 ? 'Cümle Kurma' : 'Radhitja e Fjalëve (Cümle Kurma)'}
          </span>
          <p className="text-sm font-light text-[#565E64] mt-2">
            {isB2 ? (ex.prompt_turkish || ex.prompt_albanian) : ex.prompt_albanian}
          </p>
          {isB2 && showTranslation && ex.prompt_turkish && (
            <p className="text-xs text-neutral-455 italic mt-1">Shqip: {ex.prompt_albanian}</p>
          )}
        </div>

        <div className="bg-white border border-[#E9ECEF] rounded-xl p-4 min-h-[50px] flex items-center justify-start gap-2 flex-wrap shadow-xs">
          {currentSorted.length === 0 ? (
            <span className="text-xs text-neutral-400 italic">
              {isB2 ? 'Aşağıdaki kelimelere tıklayarak sırasıyla buraya yerleştirin...' : 'Shtypni fjalët e mëposhtme për t\'i vendosur këtu sipas radhës...'}
            </span>
          ) : (
            currentSorted.map(w => (
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

        {!isChecked ? (
          <div className="flex gap-2">
            <button
              onClick={checkAnswer}
              className="px-4 py-2.5 bg-white border border-[#E9ECEF] text-[#1A1D20] hover:border-[#3A5A40] hover:text-[#3A5A40] rounded-xl text-xs font-bold transition cursor-pointer shadow-xs hover:shadow"
            >
              {isB2 ? 'Sözdizimini Kontrol Et' : 'Kontrollo Sintaksën'}
            </button>
            {currentSorted.length > 0 && (
              <button
                onClick={resetSorting}
                className="px-3 py-2 text-xs text-[#565E64] hover:text-[#1A1D20] bg-transparent border-0 cursor-pointer"
              >
                {isB2 ? 'Sıfırla' : 'Rivendos'}
              </button>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-3 flex-wrap">
            <p className={`text-xs font-semibold leading-relaxed ${result.correct ? 'text-[#3A5A40]' : 'text-[#c0392b]'}`}>
              {result.correct ? '✓ ' : '✗ '} {result.msg}
            </p>
            {isB2 && showTranslation && (
              <p className="text-xs text-neutral-450 font-light italic w-full">
                Shqip: {result.correct ? (target.msg_success_albanian || 'E saktë!') : (target.msg_failure_albanian || 'E pasaktë.')}
              </p>
            )}
            {!result.correct && (
              <button
                onClick={() => resetSingleExercise(ex.id, 'WORD_SORT')}
                className="px-2.5 py-1 text-[10px] font-bold border border-rose-200 text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg cursor-pointer transition flex items-center gap-1"
              >
                {isB2 ? 'Tekrar Dene 🔄' : 'Provo Përsëri 🔄'}
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
    const currentSuffix = builderSuffixes[ex.id] || '';

    const checkAnswer = () => {
      if (!currentSuffix) {
        alert(isB2 ? 'Lütfen birleştirmek için bir ek seçiniz!' : 'Ju lutemi zgjidhni një prapashtesë për ta bashkuar!');
        return;
      }

      const correct = currentSuffix === target.correct_suffix;
      setCheckedExercises(prev => ({ ...prev, [ex.id]: true }));
      setExerciseResults(prev => ({
        ...prev,
        [ex.id]: {
          correct,
          msg: correct
            ? (target.msg_success || (isB2 ? 'Doğru!' : 'E saktë!'))
            : (target.msg_failure || (isB2 ? 'Yanlış.' : 'E pasaktë.'))
        }
      }));
    };

    return (
      <div className="bg-neutral-50/50 md:bg-neutral-50 border border-[#E9ECEF] rounded-2xl p-4 md:p-5 space-y-4 md:shadow-inner animate-fade-in">
        <div>
          <span className="text-[9px] font-bold text-[#3A5A40] bg-white border border-[#E9ECEF] px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
            {isB2 ? 'Ek Ekleme' : 'Ndërtuesi i Prapashtesave (Ek Ekleme)'}
          </span>
          <p className="text-sm font-light text-[#565E64] mt-2">
            {isB2 ? (ex.prompt_turkish || ex.prompt_albanian) : ex.prompt_albanian}
          </p>
          {isB2 && showTranslation && ex.prompt_turkish && (
            <p className="text-xs text-neutral-455 italic mt-1">Shqip: {ex.prompt_albanian}</p>
          )}
        </div>

        <div className="bg-white border border-[#E9ECEF] rounded-2xl p-6 flex justify-center items-center shadow-xs">
          <div className="flex flex-wrap justify-center items-center gap-2 text-xl font-technical">
            <span className="px-4 py-2 border border-[#E9ECEF] bg-neutral-50 text-[#1A1D20] rounded-xl font-semibold uppercase shadow-xs">
              {payload.root}
            </span>
            <span className="text-[#3A5A40] font-black">+</span>
            
            <div className={`px-4 py-2 border border-dashed rounded-xl min-w-[70px] text-center font-bold transition duration-200 shadow-xs ${
              currentSuffix 
                ? isChecked
                  ? result.correct
                    ? 'bg-emerald-100/50 border-emerald-500 text-emerald-800'
                    : 'bg-rose-100/50 border-rose-500 text-rose-800'
                  : 'bg-[#3A5A40]/10 border-[#3A5A40] text-[#3A5A40]' 
                : 'border-neutral-300 bg-neutral-100 text-neutral-455'
            }`}>
              {currentSuffix ? `-${currentSuffix}` : '?'}
            </div>

            {currentSuffix && (
              <>
                <span className="text-neutral-400 font-bold">=</span>
                <span className={`px-4 py-2 border rounded-xl font-extrabold tracking-wide uppercase shadow-md ${
                  isChecked
                    ? result.correct
                      ? 'bg-emerald-100/55 border-emerald-500 text-emerald-800'
                      : 'bg-rose-100/55 border-rose-500 text-rose-800'
                    : 'bg-neutral-50 border-[#E9ECEF] text-[#1A1D20]'
                }`}>
                  {payload.root + currentSuffix}
                </span>
              </>
            )}
          </div>
        </div>

        {!isChecked && (
          <div className="flex flex-wrap gap-2 justify-center">
            {payload.suffixes.map((suff: string) => (
              <button
                key={suff}
                onClick={() => setBuilderSuffixes(prev => ({ ...prev, [ex.id]: suff }))}
                className={`px-3 py-1.5 rounded-lg border text-xs font-bold font-technical cursor-pointer transition duration-200 shadow-xs ${
                  currentSuffix === suff
                    ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                    : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50'
                }`}
              >
                -{suff}
              </button>
            ))}
          </div>
        )}

        {!isChecked ? (
          <div className="flex justify-center">
            <button
              onClick={checkAnswer}
              className="px-4 py-2.5 bg-white border border-[#E9ECEF] text-[#1A1D20] hover:border-[#3A5A40] hover:text-[#3A5A40] rounded-xl text-xs font-bold transition cursor-pointer shadow-xs hover:shadow"
            >
              {isB2 ? 'Birleştir ve Kontrol Et' : 'Bashko & Kontrollo'}
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <p className={`text-center text-xs font-semibold leading-relaxed ${result.correct ? 'text-[#3A5A40]' : 'text-[#c0392b]'}`}>
              {result.correct ? '✓ ' : '✗ '} {result.msg}
            </p>
            {isB2 && showTranslation && (
              <p className="text-xs text-neutral-450 font-light italic w-full text-center">
                Shqip: {result.correct ? (target.msg_success_albanian || 'E saktë!') : (target.msg_failure_albanian || 'E pasaktë.')}
              </p>
            )}
            {!result.correct && (
              <button
                onClick={() => resetSingleExercise(ex.id, 'SUFFIX_BUILDER')}
                className="px-2.5 py-1 text-[10px] font-bold border border-rose-200 text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg cursor-pointer transition flex items-center gap-1"
              >
                {isB2 ? 'Tekrar Dene 🔄' : 'Provo Përsëri 🔄'}
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  // Render Exercise Type D: Cloze (B2 Suffix Fill-in-the-blank)
  const renderCloze = (ex: any) => {
    const payload = JSON.parse(ex.source_payload_json);
    const target = JSON.parse(ex.validation_target_json);
    const isChecked = checkedExercises[ex.id];
    const result = exerciseResults[ex.id];
    const currentAnswer = clozeAnswers[ex.id] || '';

    const parts = payload.sentence.split('___');
    const left = parts[0] || '';
    const right = parts.slice(1).join('___');

    const checkAnswer = () => {
      if (!currentAnswer) {
        alert(isB2 ? 'Lütfen boşluğu doldurmak için bir ek seçiniz!' : 'Ju lutemi zgjidhni një prapashtesë për të mbushur zbrazëtirën!');
        return;
      }
      const correct = currentAnswer === target.correct_answer;
      setCheckedExercises(prev => ({ ...prev, [ex.id]: true }));
      setExerciseResults(prev => ({
        ...prev,
        [ex.id]: {
          correct,
          msg: correct 
            ? (target.msg_success || (isB2 ? 'Doğru!' : 'E saktë!')) 
            : (target.msg_failure || (isB2 ? 'Yanlış.' : 'E pasaktë.'))
        }
      }));
    };

    return (
      <div className="bg-neutral-50/50 md:bg-neutral-50 border border-[#E9ECEF] rounded-2xl p-4 md:p-5 space-y-4 md:shadow-inner animate-fade-in">
        <div>
          <span className="text-[9px] font-bold text-[#3A5A40] bg-white border border-[#E9ECEF] px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
            {isB2 ? 'Boşluk Doldurma' : 'Mbushja e Zbrazëtirave (Boşluk Doldurma)'}
          </span>
          <p className="text-sm font-light text-[#565E64] mt-2">
            {isB2 ? (ex.prompt_turkish || ex.prompt_albanian) : ex.prompt_albanian}
          </p>
          {isB2 && showTranslation && ex.prompt_turkish && (
            <p className="text-xs text-neutral-455 italic mt-1">Shqip: {ex.prompt_albanian}</p>
          )}
        </div>

        <div className="bg-white border border-[#E9ECEF] rounded-2xl p-4 text-center shadow-xs">
          <div className="text-base font-technical inline-block">
            <span>{left}</span>
            <span className={`px-2 py-1 mx-1.5 border border-dashed rounded-lg font-bold transition ${
              currentAnswer
                ? isChecked
                  ? result.correct
                    ? 'bg-emerald-100/50 border-emerald-500 text-emerald-800'
                    : 'bg-rose-100/50 border-rose-500 text-rose-800'
                  : 'bg-[#3A5A40]/10 border-[#3A5A40] text-[#3A5A40]'
                : 'border-neutral-300 bg-neutral-50 text-neutral-400'
            }`}>
              {currentAnswer ? `-${currentAnswer}` : ' ___ '}
            </span>
            <span>{right}</span>
          </div>
        </div>

        {!isChecked && (
          <div className="flex flex-wrap gap-2 justify-center">
            {payload.options.map((opt: string) => (
              <button
                key={opt}
                onClick={() => setClozeAnswers(prev => ({ ...prev, [ex.id]: opt }))}
                className={`px-3 py-1.5 rounded-lg border text-xs font-bold font-technical cursor-pointer transition ${
                  currentAnswer === opt
                    ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                    : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50'
                }`}
              >
                -{opt}
              </button>
            ))}
          </div>
        )}

        {!isChecked ? (
          <div className="flex justify-center">
            <button
              onClick={checkAnswer}
              className="px-4 py-2.5 bg-white border border-[#E9ECEF] text-[#1A1D20] hover:border-[#3A5A40] hover:text-[#3A5A40] rounded-xl text-xs font-bold transition cursor-pointer shadow-xs hover:shadow"
            >
              {isB2 ? 'Cümleyi Kontrol Et' : 'Kontrollo Fjalinë'}
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <p className={`text-center text-xs font-semibold leading-relaxed ${result.correct ? 'text-[#3A5A40]' : 'text-[#c0392b]'}`}>
              {result.correct ? '✓ ' : '✗ '} {result.msg}
            </p>
            {isB2 && showTranslation && (
              <p className="text-xs text-neutral-450 font-light italic w-full text-center">
                Shqip: {result.correct ? (target.msg_success_albanian || 'E saktë!') : (target.msg_failure_albanian || 'E pasaktë.')}
              </p>
            )}
            {!result.correct && (
              <button
                onClick={() => resetSingleExercise(ex.id, 'CLOZE')}
                className="px-2.5 py-1 text-[10px] font-bold border border-rose-200 text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg cursor-pointer transition flex items-center gap-1"
              >
                {isB2 ? 'Tekrar Dene 🔄' : 'Provo Përsëri 🔄'}
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderErrorCorrection = (ex: any) => {
    const payload = JSON.parse(ex.source_payload_json);
    const target = JSON.parse(ex.validation_target_json);
    const isChecked = checkedExercises[ex.id];
    const result = exerciseResults[ex.id];
    
    const selectedWord = selectedErrorWord[ex.id] || '';
    const currentCorrection = errorCorrectionAnswers[ex.id] || '';

    const words = payload.sentence.split(' ');

    const checkAnswer = () => {
      if (!selectedWord) {
        alert(isB2 ? 'Lütfen cümledeki yanlış kelimeye tıklayınız!' : 'Ju lutemi shtypni mbi fjalën e pasaktë në fjali!');
        return;
      }
      if (!currentCorrection) {
        alert(isB2 ? 'Lütfen aşağıdaki doğru düzeltmeyi seçiniz!' : 'Ju lutemi zgjidhni korrigjimin e saktë më poshtë!');
        return;
      }

      const correct = selectedWord.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, '').toLowerCase() === target.correct_word.toLowerCase() && 
                      currentCorrection === target.correction;

      setCheckedExercises(prev => ({ ...prev, [ex.id]: true }));
      setExerciseResults(prev => ({
        ...prev,
        [ex.id]: {
          correct,
          msg: correct 
            ? (target.msg_success || (isB2 ? 'Doğru!' : 'E saktë!')) 
            : (target.msg_failure || (isB2 ? 'Yanlış.' : 'E pasaktë.'))
        }
      }));
    };

    return (
      <div className="bg-neutral-50/50 md:bg-neutral-50 border border-[#E9ECEF] rounded-2xl p-4 md:p-5 space-y-4 md:shadow-inner animate-fade-in">
        <div>
          <span className="text-[9px] font-bold text-[#3A5A40] bg-white border border-[#E9ECEF] px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
            {isB2 ? 'Hata Düzeltme' : 'Gjetja dhe Korrigjimi i Gabimeve (Hata Düzeltme)'}
          </span>
          <p className="text-sm font-light text-[#565E64] mt-2">
            {isB2 ? (ex.prompt_turkish || ex.prompt_albanian) : ex.prompt_albanian}
          </p>
          {isB2 && showTranslation && ex.prompt_turkish && (
            <p className="text-xs text-neutral-455 italic mt-1">Shqip: {ex.prompt_albanian}</p>
          )}
        </div>

        {/* Word clicking container */}
        <div className="bg-white border border-[#E9ECEF] rounded-2xl p-4 flex flex-wrap gap-2 justify-center shadow-xs">
          {words.map((w: string, idx: number) => {
            const cleanW = w.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, '');
            const isWordSelected = selectedWord === cleanW;

            let buttonStyle = 'bg-neutral-50 border-[#E9ECEF] text-neutral-800 hover:bg-neutral-100';
            if (isWordSelected) {
              buttonStyle = isChecked
                ? result.correct
                  ? 'bg-emerald-100/50 border-emerald-500 text-emerald-800 font-bold'
                  : 'bg-rose-100/50 border-rose-500 text-rose-800 font-bold'
                : 'bg-amber-100/60 border-amber-500 text-amber-800 font-bold shadow-xs';
            }

            return (
              <button
                key={idx}
                disabled={isChecked}
                onClick={() => {
                  setSelectedErrorWord(prev => ({ ...prev, [ex.id]: cleanW }));
                  setErrorCorrectionAnswers(prev => ({ ...prev, [ex.id]: '' })); // Reset correction
                }}
                className={`px-3 py-1.5 rounded-lg border text-sm font-technical transition duration-150 cursor-pointer ${buttonStyle}`}
              >
                {w}
              </button>
            );
          })}
        </div>

        {/* Correction options */}
        {selectedWord && (
          <div className="p-4 bg-white border border-[#E9ECEF] rounded-xl text-center space-y-3 animate-fade-in">
            <p className="text-xs text-neutral-505">
              {isB2 
                ? (<span><span className="font-bold text-amber-700">"{selectedWord}"</span> kelimesini seçtiniz. Bu kelime nasıl düzeltilmelidir?</span>)
                : (<span>Keni përzgjedhur fjalën <span className="font-bold text-amber-700">"{selectedWord}"</span>. Si duhet të korrigjohet ajo?</span>)}
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {payload.options.map((opt: string) => {
                const isOptionSelected = currentCorrection === opt;
                let optStyle = 'bg-white border-[#E9ECEF] text-neutral-700 hover:bg-neutral-50';
                
                if (isOptionSelected) optStyle = 'bg-[#3A5A40] text-white border-[#3A5A40]';
                if (isChecked && opt === target.correction) {
                  optStyle = 'bg-emerald-500 text-white border-emerald-500 font-bold';
                }

                return (
                  <button
                    key={opt}
                    disabled={isChecked}
                    onClick={() => setErrorCorrectionAnswers(prev => ({ ...prev, [ex.id]: opt }))}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-technical transition cursor-pointer ${optStyle}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {!isChecked ? (
          <div className="flex justify-center">
            <button
              onClick={checkAnswer}
              className="px-4 py-2.5 bg-white border border-[#E9ECEF] text-[#1A1D20] hover:border-[#3A5A40] hover:text-[#3A5A40] rounded-xl text-xs font-bold transition cursor-pointer shadow-xs hover:shadow"
            >
              {isB2 ? 'Hatayı Düzelt' : 'Korrigjo Gabimin'}
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <p className={`text-center text-xs font-semibold leading-relaxed ${result.correct ? 'text-[#3A5A40]' : 'text-[#c0392b]'}`}>
              {result.correct ? '✓ ' : '✗ '} {result.msg}
            </p>
            {isB2 && showTranslation && (
              <p className="text-xs text-neutral-450 font-light italic w-full text-center">
                Shqip: {result.correct ? (target.msg_success_albanian || 'E saktë!') : (target.msg_failure_albanian || 'E pasaktë.')}
              </p>
            )}
            {!result.correct && (
              <button
                onClick={() => resetSingleExercise(ex.id, 'ERROR_CORRECTION')}
                className="px-2.5 py-1 text-[10px] font-bold border border-rose-200 text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg cursor-pointer transition flex items-center gap-1"
              >
                {isB2 ? 'Tekrar Dene 🔄' : 'Provo Përsëri 🔄'}
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  // Render Exercise Type F: Connector Matching
  const renderConnectorMatching = (ex: any) => {
    const payload = JSON.parse(ex.source_payload_json);
    const target = JSON.parse(ex.validation_target_json);
    const isChecked = checkedExercises[ex.id];
    const result = exerciseResults[ex.id];
    const currentAnswer = connectorAnswers[ex.id] || '';

    const checkAnswer = () => {
      if (!currentAnswer) {
        alert(isB2 ? 'Lütfen eşleştirmek için bir kelime/bağlaç seçiniz!' : 'Ju lutemi zgjidhni një lidhëz turke për të kryer çiftimin!');
        return;
      }
      const correct = currentAnswer === target.correct_answer;
      setCheckedExercises(prev => ({ ...prev, [ex.id]: true }));
      setExerciseResults(prev => ({
        ...prev,
        [ex.id]: {
          correct,
          msg: correct 
            ? (target.msg_success || (isB2 ? 'Doğru!' : 'E saktë!')) 
            : (target.msg_failure || (isB2 ? 'Yanlış.' : 'E pasaktë.'))
        }
      }));
    };

    return (
      <div className="bg-neutral-50/50 md:bg-neutral-50 border border-[#E9ECEF] rounded-2xl p-4 md:p-5 space-y-4 md:shadow-inner animate-fade-in">
        <div>
          <span className="text-[9px] font-bold text-[#3A5A40] bg-white border border-[#E9ECEF] px-2 py-0.5 rounded-md uppercase tracking-wider shadow-xs">
            {isB2 ? 'Bağlaç Eşleştirme' : 'Përputhja e Lidhëzave (Bağlaç Eşleştirme)'}
          </span>
          <p className="text-sm font-light text-[#565E64] mt-2">
            {isB2 ? (ex.prompt_turkish || ex.prompt_albanian) : ex.prompt_albanian}
          </p>
          {isB2 && showTranslation && ex.prompt_turkish && (
            <p className="text-xs text-neutral-455 italic mt-1">Shqip: {ex.prompt_albanian}</p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
          {payload.options.map((opt: string) => {
            const isSelected = currentAnswer === opt;
            let optStyle = 'bg-white border-[#E9ECEF] text-neutral-700 hover:bg-neutral-50';
            
            if (isSelected) optStyle = 'bg-[#3A5A40]/10 border-[#3A5A40] text-[#3A5A40] font-bold';
            if (isChecked) {
              if (opt === target.correct_answer) optStyle = 'bg-emerald-100/50 border-emerald-500 text-emerald-800 font-bold';
              else if (isSelected) optStyle = 'bg-rose-100/50 border-rose-500 text-rose-800';
            }

            return (
              <button
                key={opt}
                disabled={isChecked}
                onClick={() => setConnectorAnswers(prev => ({ ...prev, [ex.id]: opt }))}
                className={`p-3 border rounded-xl text-center font-technical cursor-pointer text-xs ${optStyle}`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {!isChecked ? (
          <div className="flex justify-center">
            <button
              onClick={checkAnswer}
              className="px-4 py-2.5 bg-white border border-[#E9ECEF] text-[#1A1D20] hover:border-[#3A5A40] hover:text-[#3A5A40] rounded-xl text-xs font-bold transition cursor-pointer shadow-xs hover:shadow"
            >
              {isB2 ? 'Bağlacı Eşleştir' : 'Çifto Lidhëzën'}
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <p className={`text-center text-xs font-semibold leading-relaxed ${result.correct ? 'text-[#3A5A40]' : 'text-[#c0392b]'}`}>
              {result.correct ? '✓ ' : '✗ '} {result.msg}
            </p>
            {isB2 && showTranslation && (
              <p className="text-xs text-neutral-450 font-light italic w-full text-center">
                Shqip: {result.correct ? (target.msg_success_albanian || 'E saktë!') : (target.msg_failure_albanian || 'E pasaktë.')}
              </p>
            )}
            {!result.correct && (
              <button
                onClick={() => resetSingleExercise(ex.id, 'CONNECTOR_MATCHING')}
                className="px-2.5 py-1 text-[10px] font-bold border border-rose-200 text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg cursor-pointer transition flex items-center gap-1"
              >
                {isB2 ? 'Tekrar Dene 🔄' : 'Provo Përsëri 🔄'}
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
      alert(isB2 
        ? 'Bölümü bitirmeden önce lütfen en az bir egzersizi yapmayı deneyin!' 
        : 'Ju lutemi provoni së paku njërën nga ushtrimet përpara se të kryeni kapitullin!');
      return;
    }
    
    markChapterCompleted();
    onComplete?.();
    
    setTimeout(() => {
      const completionCard = document.getElementById('chapter-completion-card');
      if (completionCard) {
        completionCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  };

  const allChecked = exercises.every(ex => checkedExercises[ex.id]);
  const correctCount = Object.values(exerciseResults).filter(res => res.correct).length;

  const resetAllExercises = () => {
    setCheckedExercises({});
    setExerciseResults({});
    setMultipleChoiceAnswers({});
    setSortedWordsList({});
    setBuilderSuffixes({});
    setClozeAnswers({});
    setSelectedErrorWord({});
    setErrorCorrectionAnswers({});
    setConnectorAnswers({});
  };

  const resetSingleExercise = (exId: number, type: string) => {
    setCheckedExercises(prev => {
      const copy = { ...prev };
      delete copy[exId];
      return copy;
    });
    setExerciseResults(prev => {
      const copy = { ...prev };
      delete copy[exId];
      return copy;
    });
    
    if (type === 'MULTIPLE_CHOICE') {
      setMultipleChoiceAnswers(prev => {
        const copy = { ...prev };
        delete copy[exId];
        return copy;
      });
    } else if (type === 'WORD_SORT') {
      setSortedWordsList(prev => {
        const copy = { ...prev };
        delete copy[exId];
        return copy;
      });
    } else if (type === 'SUFFIX_BUILDER') {
      setBuilderSuffixes(prev => {
        const copy = { ...prev };
        delete copy[exId];
        return copy;
      });
    } else if (type === 'CLOZE') {
      setClozeAnswers(prev => {
        const copy = { ...prev };
        delete copy[exId];
        return copy;
      });
    } else if (type === 'ERROR_CORRECTION') {
      setSelectedErrorWord(prev => {
        const copy = { ...prev };
        delete copy[exId];
        return copy;
      });
      setErrorCorrectionAnswers(prev => {
        const copy = { ...prev };
        delete copy[exId];
        return copy;
      });
    } else if (type === 'CONNECTOR_MATCHING') {
      setConnectorAnswers(prev => {
        const copy = { ...prev };
        delete copy[exId];
        return copy;
      });
    }
  };

  return (
    <div className="glass-panel md:rounded-2xl p-0 md:p-8 bg-transparent md:bg-white border-none md:border md:border-[#E9ECEF] space-y-8 shadow-none md:shadow-sm">
      
      <div className="mb-6 pb-4 border-b border-[#E9ECEF] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-widest">
            {isB2 ? '5. Bölüm' : 'Sekuenca 5'}
          </span>
          <h2 className="text-xl font-black text-[#1A1D20] uppercase font-sans">
            {isB2 ? 'Uygulamalı Egzersizler' : 'Ushtrime Interaktive (Pratik Egzersizler)'}
          </h2>
          <p className="text-xs text-[#565E64] font-light mt-1">
            {isB2 
              ? 'Dönüşlülük, edilgenlik, işteşlik ve ek kelimelerle ilgili bilgilerinizi pratik egzersizlerle test edin.'
              : (exercises[0]?.exercise_type === 'CLOZE' || exercises[0]?.exercise_type === 'ERROR_CORRECTION'
                ? 'Testoni njohuritë tuaja praktike mbi foljet vetvetore, reciproke dhe lidhëzat shtuese.'
                : 'Testoni njohuritë tuaja praktike përmes ushtrimeve tona interaktive.')}
          </p>
        </div>
        {isB2 && (
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition duration-200 cursor-pointer shadow-xs whitespace-nowrap ${
              showTranslation
                ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50'
            }`}
          >
            {showTranslation ? 'Çeviriyi Gizle' : 'Arnavutça Çeviri'}
          </button>
        )}
      </div>

      {isB2 ? (
        <div className="space-y-12">
          {/* Egzersiz 1: Boşluk Doldurma */}
          <div className="space-y-6">
            <div className="border-b border-[#E9ECEF] pb-2">
              <h3 className="text-lg font-bold text-[#3A5A40]">Egzersiz 1: Boşluk Doldurma</h3>
              <p className="text-xs text-[#565E64] font-light mt-1">Cümlelerdeki boşlukları uygun dönüşlülük, edilgenlik veya işteşlik ekleriyle doldurunuz.</p>
            </div>
            <div className="space-y-6">
              {exercises
                .filter(ex => ex.exercise_type === 'CLOZE')
                .map(ex => (
                  <div key={ex.id}>{renderCloze(ex)}</div>
                ))}
            </div>
          </div>

          {/* Egzersiz 2: Hata Düzeltme */}
          <div className="space-y-6">
            <div className="border-b border-[#E9ECEF] pb-2">
              <h3 className="text-lg font-bold text-[#3A5A40]">Egzersiz 2: Hata Düzeltme</h3>
              <p className="text-xs text-[#565E64] font-light mt-1">Cümledeki dil bilgisi veya yazım hatasını bularak düzeltiniz.</p>
            </div>
            <div className="space-y-6">
              {exercises
                .filter(ex => ex.exercise_type === 'ERROR_CORRECTION')
                .map(ex => (
                  <div key={ex.id}>{renderErrorCorrection(ex)}</div>
                ))}
            </div>
          </div>

          {/* Egzersiz 3: Bağlaç Eşleştirme */}
          <div className="space-y-6">
            <div className="border-b border-[#E9ECEF] pb-2">
              <h3 className="text-lg font-bold text-[#3A5A40]">Egzersiz 3: Bağlaç ve Kelime Eşleştirme</h3>
              <p className="text-xs text-[#565E64] font-light mt-1">Verilen Türkçe bağlaçları veya kelimeleri anlamlarıyla eşleştiriniz.</p>
            </div>
            <div className="space-y-6">
              {exercises
                .filter(ex => ex.exercise_type === 'CONNECTOR_MATCHING')
                .map(ex => (
                  <div key={ex.id}>{renderConnectorMatching(ex)}</div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {exercises.map(ex => {
            if (ex.exercise_type === 'MULTIPLE_CHOICE') return <div key={ex.id}>{renderMultipleChoice(ex)}</div>;
            if (ex.exercise_type === 'WORD_SORT') return <div key={ex.id}>{renderWordSorting(ex)}</div>;
            if (ex.exercise_type === 'SUFFIX_BUILDER') return <div key={ex.id}>{renderAgglutinationBuilder(ex)}</div>;
            if (ex.exercise_type === 'CLOZE') return <div key={ex.id}>{renderCloze(ex)}</div>;
            if (ex.exercise_type === 'ERROR_CORRECTION') return <div key={ex.id}>{renderErrorCorrection(ex)}</div>;
            if (ex.exercise_type === 'CONNECTOR_MATCHING') return <div key={ex.id}>{renderConnectorMatching(ex)}</div>;
            return null;
          })}
        </div>
      )}

      {allChecked && (
        <div className="bg-[#3A5A40]/10 border border-[#3A5A40]/30 rounded-2xl p-5 text-center space-y-3 animate-fade-in" id="chapter-completion-card">
          <span className="text-3xl block">🏆</span>
          <h3 className="text-sm font-bold text-[#3A5A40] uppercase tracking-wide">
            {isB2 ? 'Egzersiz Sonuçları' : 'Rezultati i Ushtrimeve'}
          </h3>
          <p className="text-xs text-[#565E64] font-light">
            {isB2 
              ? (<span>Bölümdeki tüm egzersizleri tamamladınız! Sonucunuz: <span className="font-bold font-technical text-base text-[#3A5A40]">{correctCount} / {exercises.length}</span> doğru.</span>)
              : (<span>Keni përfunduar të gjitha ushtrimet e kapitullit! Rezultati juaj: <span className="font-bold font-technical text-base text-[#3A5A40]">{correctCount} / {exercises.length}</span> të sakta.</span>)}
          </p>
          <button
            onClick={resetAllExercises}
            className="px-4 py-2.5 bg-white border border-[#3A5A40] text-[#3A5A40] font-bold rounded-xl text-xs hover:bg-[#3A5A40] hover:text-white transition cursor-pointer shadow-xs"
          >
            {isB2 ? 'Tekrar Dene 🔄' : 'Provo Përsëri 🔄'}
          </button>
        </div>
      )}

      <div className="pt-6 border-t border-[#E9ECEF] flex flex-wrap items-center justify-between gap-4">
        <div>
          {readingCompleted && (
            <div className="text-xs text-[#3A5A40] bg-[#3A5A40]/10 border border-[#3A5A40]/30 px-4 py-2.5 rounded-xl font-bold uppercase tracking-wider flex items-center gap-1.5 select-none">
              <span>✓</span> {isB2 ? 'Bu bölüm tamamlandı!' : 'Ky kapitull u përfundua!'}
            </div>
          )}
        </div>
        <button
          onClick={handleFinishLesson}
          className="px-6 py-3.5 bg-[#3A5A40] hover:bg-[#2A3F2E] text-white font-bold rounded-xl text-xs uppercase tracking-widest transition cursor-pointer select-none active-cta shadow-md"
        >
          {readingCompleted 
            ? (isB2 ? 'Bölümü Tekrar Tamamla 🏆' : 'Kryej Kapitullin Përsëri 🏆') 
            : (isB2 ? 'Bölümü Tamamla 🏆' : 'Kryej Kapitullin 🏆')}
        </button>
      </div>
    </div>
  );
};
