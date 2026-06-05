import React, { useState, useEffect, useRef } from 'react';
import { useLesson } from '../../../application/state/LessonContext';
import { generateRandomA2Test } from '../../../infrastructure/db/a2TestPool';
import { normalizeText } from '../../../core/harmony/writingValidation';

interface UnifiedQuestion {
  id: string;
  type: 'reading' | 'multiple_choice' | 'suffix_builder' | 'word_sort' | 'writing';
  promptAlbanian: string;
  readingText?: string;
  readingTitle?: string;
  questionTurkish?: string;
  options?: string[];
  correctAnswer?: string;
  explanation: string;
  root?: string;
  suffixes?: string[];
  correctSuffix?: string;
  words?: string[];
  correctSequence?: string[];
  correctAnswers?: string[];
}

export const A2FinishingTestPage: React.FC = () => {
  const { setActivePage, userName } = useLesson();

  // Test states
  const [stage, setStage] = useState<'start' | 'running' | 'results'>('start');
  const [flatQuestions, setFlatQuestions] = useState<UnifiedQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  
  // Timer states
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const timerIntervalRef = useRef<any>(null);

  // Sorting state for WORD_SORT questions
  const [sortedWords, setSortedWords] = useState<string[]>([]);
  
  // Confetti Canvas Ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Initialize randomized test
  const startTest = () => {
    const rawTest = generateRandomA2Test();
    
    // Compile to a flat list of 25 questions
    const list: UnifiedQuestion[] = [];

    // 1-5: Reading Section MCQs
    rawTest.readingSection.questions.forEach((q) => {
      list.push({
        id: q.id,
        type: 'reading',
        promptAlbanian: rawTest.readingSection.promptAlbanian,
        readingText: rawTest.readingSection.textTurkish,
        readingTitle: rawTest.readingSection.title,
        questionTurkish: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation
      });
    });

    // 6-10: Multiple Choice
    rawTest.multipleChoice.forEach((q) => {
      list.push({
        id: q.id,
        type: 'multiple_choice',
        promptAlbanian: q.promptAlbanian,
        questionTurkish: q.questionTurkish,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation
      });
    });

    // 11-16: Suffix Builders
    rawTest.suffixBuilder.forEach((q) => {
      list.push({
        id: q.id,
        type: 'suffix_builder',
        promptAlbanian: q.promptAlbanian,
        root: q.root,
        suffixes: q.suffixes,
        correctSuffix: q.correctSuffix,
        explanation: q.explanation
      });
    });

    // 17-22: Word Sorts
    rawTest.wordSort.forEach((q) => {
      list.push({
        id: q.id,
        type: 'word_sort',
        promptAlbanian: q.promptAlbanian,
        words: q.words,
        correctSequence: q.correctSequence,
        explanation: q.explanation
      });
    });

    // 23-25: Writing Tasks
    rawTest.writing.forEach((q) => {
      list.push({
        id: q.id,
        type: 'writing',
        promptAlbanian: q.promptAlbanian,
        correctAnswers: q.correctAnswers,
        explanation: q.explanation
      });
    });

    setFlatQuestions(list);
    setAnswers({});
    setCurrentIdx(0);
    setSortedWords([]);
    setSecondsElapsed(0);
    setStage('running');

    // Start running clock
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    timerIntervalRef.current = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, []);

  // Sync sorting pool when moving to a new Word Sort question
  const currentQuestion = flatQuestions[currentIdx];
  useEffect(() => {
    if (currentQuestion && currentQuestion.type === 'word_sort') {
      const stored = answers[currentQuestion.id] || [];
      setSortedWords(stored);
    } else {
      setSortedWords([]);
    }
  }, [currentIdx, flatQuestions]);

  // Handle answers
  const handleSelectOption = (qId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  const handleWordTap = (word: string, isSortingPool: boolean) => {
    if (isSortingPool) {
      const updated = sortedWords.filter((w) => w !== word);
      setSortedWords(updated);
      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: updated }));
    } else {
      const updated = [...sortedWords, word];
      setSortedWords(updated);
      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: updated }));
    }
  };

  const handleWritingChange = (qId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  // Navigation helpers
  const handleNext = () => {
    if (currentIdx < 24) {
      setCurrentIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  // Submit test and evaluate
  const handleSubmitTest = () => {
    // Check if there are unanswered questions
    const unansweredIndices: number[] = [];
    flatQuestions.forEach((q, idx) => {
      const ans = answers[q.id];
      if (ans === undefined || ans === '' || (Array.isArray(ans) && ans.length === 0)) {
        unansweredIndices.push(idx + 1);
      }
    });

    if (unansweredIndices.length > 0) {
      const confirmSubmit = window.confirm(
        `Keni ${unansweredIndices.length} pyetje pa përgjigjur (Pyetjet: ${unansweredIndices.join(
          ', '
        )}). A dëshironi ta dorëzoni provimin gjithsesi?`
      );
      if (!confirmSubmit) return;
    } else {
      const confirmSubmit = window.confirm('A jeni i sigurt që dëshironi të dorëzoni provimin?');
      if (!confirmSubmit) return;
    }

    // Stop timer
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);

    // Calculate score
    let correctCount = 0;
    flatQuestions.forEach((q) => {
      const ans = answers[q.id];
      if (!ans) return;

      if (q.type === 'reading' || q.type === 'multiple_choice') {
        if (ans === q.correctAnswer) correctCount++;
      } else if (q.type === 'suffix_builder') {
        if (ans === q.correctSuffix) correctCount++;
      } else if (q.type === 'word_sort') {
        if (JSON.stringify(ans) === JSON.stringify(q.correctSequence)) correctCount++;
      } else if (q.type === 'writing') {
        const normInput = normalizeText(ans);
        const match = q.correctAnswers?.some((correct) => normalizeText(correct) === normInput);
        if (match) correctCount++;
      }
    });

    const passed = correctCount >= 20; // 80% of 25 = 20

    // Save completion state if passed
    if (passed) {
      localStorage.setItem('ura_a2_test_passed', 'true');
      localStorage.setItem('ura_a2_test_score', `${Math.round((correctCount / 25) * 100)}`);
      localStorage.setItem('ura_a2_test_duration', `${secondsElapsed}`);
    }

    setStage('results');

    // Trigger Confetti
    if (passed) {
      setTimeout(() => triggerConfetti(), 100);
    }
  };

  const handleAbort = () => {
    const confirmAbort = window.confirm(
      'A jeni i sigurt që dëshironi të ndërprisni provimin? Përparimi juaj do të humbasë.'
    );
    if (confirmAbort) {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      setActivePage('lessons');
    }
  };

  // Format seconds as MM:SS
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // Confetti generator script using Canvas
  const triggerConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#3A5A40', '#A3B18A', '#0D9488', '#3B82F6', '#D97706', '#E11D48'];
    const particles = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * canvas.height,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 5,
      tiltAngleIncremental: Math.random() * 0.07 + 0.02,
      tiltAngle: 0,
    }));

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, idx) => {
        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
        p.x += Math.sin(p.tiltAngle);
        p.tilt = Math.sin(p.tiltAngle - idx / 3) * 15;

        ctx.beginPath();
        ctx.lineWidth = p.r;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
        ctx.stroke();
      });

      // Update position and check boundary
      let remaining = false;
      particles.forEach((p) => {
        if (p.y <= canvas.height) {
          remaining = true;
        }
      });

      if (remaining) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  };

  // Calculate score properties
  const scoreRaw = flatQuestions.reduce((acc, q) => {
    const ans = answers[q.id];
    if (!ans) return acc;
    if (q.type === 'reading' || q.type === 'multiple_choice') {
      return ans === q.correctAnswer ? acc + 1 : acc;
    } else if (q.type === 'suffix_builder') {
      return ans === q.correctSuffix ? acc + 1 : acc;
    } else if (q.type === 'word_sort') {
      return JSON.stringify(ans) === JSON.stringify(q.correctSequence) ? acc + 1 : acc;
    } else if (q.type === 'writing') {
      const normInput = normalizeText(ans);
      const match = q.correctAnswers?.some((correct) => normalizeText(correct) === normInput);
      return match ? acc + 1 : acc;
    }
    return acc;
  }, 0);

  const percentageScore = Math.round((scoreRaw / 25) * 100);
  const isPassed = scoreRaw >= 20;

  // Render question inputs
  const renderQuestionBody = (q: UnifiedQuestion) => {
    const currentVal = answers[q.id];

    switch (q.type) {
      case 'reading':
      case 'multiple_choice':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto pt-2">
            {q.options?.map((opt) => {
              const isSelected = currentVal === opt;
              return (
                <button
                  key={opt}
                  onClick={() => handleSelectOption(q.id, opt)}
                  className={`p-4 border text-sm text-left font-technical transition-all duration-200 cursor-pointer rounded-xl outline-hidden shadow-xs hover:translate-y-[-1px] ${
                    isSelected
                      ? 'bg-[#3A5A40]/10 border-[#3A5A40] text-[#3A5A40] font-black'
                      : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50'
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        );

      case 'suffix_builder':
        return (
          <div className="space-y-6 max-w-xl mx-auto pt-2">
            {/* Visual merging canvas */}
            <div className="bg-neutral-50 border border-[#E9ECEF] rounded-2xl p-6 flex justify-center items-center shadow-inner select-none">
              <div className="flex flex-wrap justify-center items-center gap-2 text-xl font-technical">
                <span lang="tr" className="px-4 py-2 border border-[#E9ECEF] bg-white text-[#1A1D20] rounded-xl font-semibold shadow-xs">
                  {q.root}
                </span>
                <span className="text-[#3A5A40] font-black">+</span>
                
                <div className={`px-4 py-2 border border-dashed rounded-xl min-w-[70px] text-center font-bold shadow-xs ${
                  currentVal 
                    ? 'bg-[#3A5A40]/10 border-[#3A5A40] text-[#3A5A40]' 
                    : 'border-neutral-300 bg-neutral-100 text-neutral-450'
                }`}>
                  {currentVal ? `-${currentVal}` : '?'}
                </div>

                {currentVal && (
                  <>
                    <span className="text-neutral-400 font-bold">=</span>
                    <span lang="tr" className="px-4 py-2 border border-[#3A5A40] bg-[#3A5A40] text-white rounded-xl font-extrabold tracking-wide shadow-md">
                      {q.root + currentVal}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Suffix Selectors */}
            <div className="flex flex-wrap gap-2 justify-center">
              {q.suffixes?.map((suff) => {
                const isSelected = currentVal === suff;
                return (
                  <button
                    key={suff}
                    onClick={() => handleSelectOption(q.id, suff)}
                    className={`px-4 py-2.5 rounded-xl border text-sm font-bold font-technical cursor-pointer transition duration-150 shadow-xs hover:translate-y-[-1px] ${
                      isSelected
                        ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                        : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50'
                    }`}
                  >
                    -{suff}
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 'word_sort':
        const unusedWords = q.words?.filter((w) => !sortedWords.includes(w)) || [];
        return (
          <div className="space-y-6 max-w-xl mx-auto pt-2">
            {/* Sorting display area */}
            <div className="bg-neutral-50 border border-[#E9ECEF] rounded-2xl p-4 min-h-[60px] flex items-center justify-start gap-2 flex-wrap shadow-inner">
              {sortedWords.length === 0 ? (
                <span className="text-xs text-neutral-400 italic mx-auto">Shtypni fjalët e mëposhtme sipas radhës për të ndërtuar fjalinë...</span>
              ) : (
                sortedWords.map((w) => (
                  <button
                    key={w}
                    onClick={() => handleWordTap(w, true)}
                    className="px-3.5 py-2 rounded-xl border border-[#3A5A40]/30 bg-[#3A5A40]/10 text-[#3A5A40] text-sm font-bold font-technical cursor-pointer hover:bg-[#3A5A40]/20 transition duration-150 shadow-xs"
                  >
                    {w}
                  </button>
                ))
              )}
            </div>

            {/* Word tags pool */}
            <div className="flex flex-wrap gap-2 justify-center">
              {unusedWords.map((w) => (
                <button
                  key={w}
                  onClick={() => handleWordTap(w, false)}
                  className="px-3.5 py-2 rounded-xl border border-[#E9ECEF] bg-white text-sm font-bold font-technical text-[#565E64] cursor-pointer hover:bg-neutral-50 transition duration-150 shadow-xs hover:translate-y-[-1px]"
                >
                  {w}
                </button>
              ))}
            </div>

            {sortedWords.length > 0 && (
              <div className="text-center">
                <button
                  onClick={() => {
                    setSortedWords([]);
                    setAnswers((prev) => ({ ...prev, [q.id]: [] }));
                  }}
                  className="text-xs text-red-650 hover:text-red-750 font-bold transition bg-transparent border-0 cursor-pointer"
                >
                  Rivendos radhitjen ↺
                </button>
              </div>
            )}
          </div>
        );

      case 'writing':
        const turkishChars = ['ç', 'ğ', 'ı', 'i', 'ö', 'ş', 'ü', 'Ç', 'Ğ', 'İ', 'Ö', 'Ş', 'Ü'];
        return (
          <div className="space-y-4 max-w-xl mx-auto pt-2">
            <textarea
              value={currentVal || ''}
              onChange={(e) => handleWritingChange(q.id, e.target.value)}
              placeholder="Shkruani përkthimin tuaj në turqisht këtu..."
              className="w-full rounded-2xl border border-[#E9ECEF] bg-white p-4 text-sm font-technical text-[#1A1D20] placeholder-neutral-400 focus:border-[#3A5A40] focus:ring-1 focus:ring-[#3A5A40]/30 focus:outline-hidden tracking-wide shadow-xs transition duration-150 min-h-[100px]"
            />

            {/* Turkish Keyboard Helpers */}
            <div className="flex flex-wrap gap-1.5 justify-center bg-neutral-50/50 p-2.5 rounded-xl border border-[#E9ECEF]">
              <span className="text-[10px] text-neutral-450 font-bold uppercase tracking-wider self-center mr-2 select-none">Karakteret Turke:</span>
              {turkishChars.map((char) => (
                <button
                  key={char}
                  onClick={() => {
                    const prevText = currentVal || '';
                    handleWritingChange(q.id, prevText + char);
                  }}
                  className="w-8 h-8 rounded-lg border border-[#E9ECEF] bg-white text-xs font-bold font-technical flex items-center justify-center hover:bg-[#3A5A40]/10 hover:border-[#3A5A40] hover:text-[#3A5A40] transition cursor-pointer active:scale-95 shadow-xs"
                >
                  {char}
                </button>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in relative min-h-[80vh] flex flex-col justify-between">
      
      {/* Canvas for confetti */}
      {stage === 'results' && isPassed && (
        <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50 w-full h-full" />
      )}

      {/* Welcome watermark */}
      <div className="curriculum-watermark opacity-10 select-none">PROVIM</div>

      {/* ================= STAGE 1: WELCOME SCREEN ================= */}
      {stage === 'start' && (
        <div className="glass-panel border border-[#E9ECEF] bg-white rounded-3xl p-8 md:p-12 text-center space-y-8 shadow-md z-10 max-w-2xl mx-auto my-auto animate-fade-in">
          <div className="flex flex-col items-center gap-3">
            <span className="text-5xl animate-bounce">🏆</span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#3A5A40] uppercase">Ura e Gjuhës elementar</span>
            <h2 className="text-3xl font-black text-[#1A1D20] uppercase font-sans tracking-tight">Provimi Përfundimtar A2</h2>
            <p className="text-sm text-[#565E64] font-light max-w-md leading-relaxed mt-2">
              Mirë se vini në testin gjithëpërfëshirës të nivelit A2. Ky vlerësim do të testojë të gjitha njohuritë tuaja lexike, gramatikore dhe ushtrimet e shkrimit të trajtuara në Kapitujt 13–20.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-left select-none">
            <div className="p-4 rounded-2xl bg-neutral-50 border border-[#E9ECEF] flex gap-3 items-center">
              <span className="text-2xl">📝</span>
              <div>
                <span className="text-[10px] font-bold text-neutral-450 block uppercase tracking-wider">Pyetje Gjithsej</span>
                <span className="text-sm font-bold text-[#1A1D20] font-technical">25 Pyetje</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-[#E9ECEF] flex gap-3 items-center">
              <span className="text-2xl">⏱️</span>
              <div>
                <span className="text-[10px] font-bold text-neutral-450 block uppercase tracking-wider">Kohëzgjatja</span>
                <span className="text-sm font-bold text-[#1A1D20] font-technical">20 - 30 Minuta</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-[#E9ECEF] flex gap-3 items-center">
              <span className="text-2xl">🎯</span>
              <div>
                <span className="text-[10px] font-bold text-neutral-450 block uppercase tracking-wider">Pragu i Kalimit</span>
                <span className="text-sm font-bold text-[#1A1D20] font-technical">80% (20 të sakta)</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-[#E9ECEF] flex gap-3 items-center">
              <span className="text-2xl">⏳</span>
              <div>
                <span className="text-[10px] font-bold text-neutral-450 block uppercase tracking-wider">Pa penalizim koha</span>
                <span className="text-sm font-bold text-[#1A1D20] font-technical">Vetëm kuriozitet</span>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E9ECEF] pt-6 flex justify-center gap-4">
            <button
              onClick={() => setActivePage('lessons')}
              className="px-6 py-3 border border-[#E9ECEF] bg-white text-[#565E64] hover:bg-neutral-50 rounded-2xl font-bold text-xs uppercase tracking-widest cursor-pointer shadow-xs transition active:scale-95"
            >
              Kthehu te Paneli
            </button>
            <button
              onClick={startTest}
              className="px-8 py-3 bg-[#3A5A40] hover:bg-[#2A3F2E] text-white rounded-2xl font-bold text-xs uppercase tracking-widest cursor-pointer shadow-md transition active:scale-95"
            >
              Fillo Provimin 🚀
            </button>
          </div>
        </div>
      )}

      {/* ================= STAGE 2: TEST RUNNER SCREEN ================= */}
      {stage === 'running' && currentQuestion && (
        <div className="space-y-6 z-10 flex-1 flex flex-col justify-between">
          
          {/* Header Progress & Timer */}
          <div className="glass-panel border border-[#E9ECEF] bg-white rounded-2xl p-4 flex justify-between items-center shadow-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={handleAbort}
                className="text-xs font-bold text-red-650 hover:text-red-750 transition bg-transparent border-0 cursor-pointer outline-none"
              >
                [ Ndërprit Provimin ]
              </button>
              <span className="text-neutral-300 select-none">|</span>
              <span className="text-xs font-bold text-[#1A1D20] font-technical">
                Pyetja {currentIdx + 1} nga 25
              </span>
            </div>

            {/* Toggleable Timer Box */}
            <button
              onClick={() => setShowTimer(!showTimer)}
              className="px-4 py-2 border border-[#E9ECEF] bg-neutral-50 hover:bg-neutral-100 rounded-xl text-xs font-bold font-technical cursor-pointer transition select-none outline-none shadow-xs text-[#565E64]"
            >
              {showTimer ? formatTime(secondsElapsed) : 'Timer'}
            </button>
          </div>

          {/* Test progress bar */}
          <div className="w-full bg-neutral-200/50 h-1.5 rounded-full overflow-hidden border border-neutral-100">
            <div
              className="bg-gradient-to-r from-teal-500 to-[#3A5A40] h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / 25) * 100}%` }}
            />
          </div>

          {/* Main Question Card Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch flex-1">
            
            {/* Context / Prompt column */}
            <div className={`lg:col-span-6 glass-panel border border-[#E9ECEF] bg-white rounded-3xl p-6 shadow-xs flex flex-col justify-between ${
              currentQuestion.type === 'reading' ? 'lg:col-span-7' : 'lg:col-span-6'
            }`}>
              <div className="space-y-4">
                <span className="text-[9px] font-bold text-[#3A5A40] bg-[#3A5A40]/10 border border-[#3A5A40]/25 px-2 py-0.5 rounded-md uppercase tracking-wider block w-max select-none">
                  {currentQuestion.type === 'reading' && 'Seksioni: Lexim & Kuptim'}
                  {currentQuestion.type === 'multiple_choice' && 'Seksioni: Strukturë & Fjalor'}
                  {currentQuestion.type === 'suffix_builder' && 'Seksioni: Prapashtesat'}
                  {currentQuestion.type === 'word_sort' && 'Seksioni: Sintaksa'}
                  {currentQuestion.type === 'writing' && 'Seksioni: Përkthim i Lirë'}
                </span>

                {/* Question prompts in Albanian directing the user */}
                <h3 className="text-sm font-semibold text-[#1A1D20] leading-relaxed">
                  {currentQuestion.promptAlbanian}
                </h3>

                {/* Turkish Reading Passage Card */}
                {currentQuestion.type === 'reading' && currentQuestion.readingText && (
                  <div className="bg-amber-50/20 border border-amber-900/10 rounded-2xl p-5 text-sm font-normal text-[#1A1D20] leading-relaxed italic font-technical tracking-wide shadow-inner max-h-[300px] overflow-y-auto">
                    <span className="text-[10px] font-bold text-[#D97706] uppercase block mb-2 font-sans not-italic">TEKSTI: {currentQuestion.readingTitle}</span>
                    {currentQuestion.readingText}
                  </div>
                )}

                {/* General Turkish question display */}
                {currentQuestion.questionTurkish && (
                  <div className="bg-neutral-50 border border-[#E9ECEF] rounded-2xl p-5 text-base font-bold text-center font-technical tracking-wide text-[#1A1D20]">
                    {currentQuestion.questionTurkish}
                  </div>
                )}
              </div>

              {/* Status indicator showing if question is answered */}
              <div className="border-t border-[#E9ECEF] pt-4 mt-6 flex justify-between text-[10px] text-neutral-400 select-none">
                <span>Lloji: {currentQuestion.type.replace('_', ' ').toUpperCase()}</span>
                <span className={answers[currentQuestion.id] ? 'text-emerald-700 font-bold' : 'text-amber-700 font-bold'}>
                  {answers[currentQuestion.id] ? '✓ E plotësuar' : '✗ E paplotësuar'}
                </span>
              </div>
            </div>

            {/* Answer / Input column */}
            <div className={`lg:col-span-6 glass-panel border border-[#E9ECEF] bg-white rounded-3xl p-6 shadow-xs flex flex-col justify-center ${
              currentQuestion.type === 'reading' ? 'lg:col-span-5' : 'lg:col-span-6'
            }`}>
              {renderQuestionBody(currentQuestion)}
            </div>

          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center gap-4 pt-4 border-t border-[#E9ECEF] z-10 bg-white/50 py-2 rounded-xl">
            <button
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="px-5 py-2.5 border border-[#E9ECEF] bg-white text-[#565E64] disabled:opacity-40 disabled:pointer-events-none rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-xs active:scale-95"
            >
              ← Mbrapa
            </button>

            {/* Question Quick-Jump grid */}
            <div className="hidden md:flex gap-1 justify-center max-w-md overflow-x-auto py-1">
              {flatQuestions.map((q, idx) => {
                const isCurrent = idx === currentIdx;
                const isAnswered = answers[q.id] !== undefined && answers[q.id] !== '' && (!Array.isArray(answers[q.id]) || answers[q.id].length > 0);
                
                let btnStyle = 'border-neutral-200 bg-white text-neutral-500';
                if (isAnswered) btnStyle = 'border-[#3A5A40]/30 bg-[#3A5A40]/5 text-[#3A5A40]';
                if (isCurrent) btnStyle = 'border-[#3A5A40] bg-[#3A5A40] text-white font-bold';

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIdx(idx)}
                    className={`w-7 h-7 rounded-lg border text-[10px] flex items-center justify-center cursor-pointer transition active:scale-90 font-technical ${btnStyle}`}
                    title={`Pyetja ${idx + 1}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {currentIdx < 24 ? (
              <button
                onClick={handleNext}
                className="px-5 py-2.5 bg-white border border-[#E9ECEF] text-[#1A1D20] hover:border-[#3A5A40] hover:text-[#3A5A40] rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-xs active:scale-95"
              >
                Para →
              </button>
            ) : (
              <button
                onClick={handleSubmitTest}
                className="px-6 py-2.5 bg-[#3A5A40] hover:bg-[#2A3F2E] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md active:scale-95 animate-pulse"
              >
                Dorëzo Testin 🏆
              </button>
            )}
          </div>
        </div>
      )}

      {/* ================= STAGE 3: RESULTS & SCORECARD SCREEN ================= */}
      {stage === 'results' && (
        <div className="space-y-8 z-10 animate-fade-in pb-12">
          
          {/* Main Results Summary Panel */}
          <div className="glass-panel border border-[#E9ECEF] bg-white rounded-3xl p-8 text-center space-y-6 shadow-md max-w-xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <span className="text-5xl">{isPassed ? '🏆' : '❌'}</span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-450 uppercase block">Rezultatet e Provimit</span>
              <h2 className="text-2xl font-black text-[#1A1D20] uppercase font-sans tracking-tight">
                {isPassed ? 'Provimi u Kalua me Sukses!' : 'Provimi nuk u kalua.'}
              </h2>
              <p className="text-xs text-[#565E64] max-w-sm leading-relaxed mt-1 font-light">
                {isPassed 
                  ? `Urime, ${userName || 'Student'}! Keni kaluar nivelin A2 me përqindje të shkëlqyer. Tani keni zyrtarisht kompetencë elementare të gjuhës turke.`
                  : `Mos u dorëzoni! Keni marrë ${percentageScore}%, ndërsa pragu i kalimit është 80% (të paktën 20 përgjigje të sakta). Rishikoni kapitujt ku gabuat dhe provoni përsëri.`}
              </p>
            </div>

            {/* Score Stats */}
            <div className="grid grid-cols-3 gap-3 border-y border-[#E9ECEF] py-4 select-none">
              <div className="text-center">
                <span className="text-[10px] font-bold text-neutral-400 block uppercase tracking-wider mb-0.5">Pikët</span>
                <span className={`text-xl font-black font-technical ${isPassed ? 'text-emerald-700' : 'text-red-750'}`}>
                  {percentageScore}%
                </span>
              </div>
              <div className="text-center border-x border-[#E9ECEF]">
                <span className="text-[10px] font-bold text-neutral-400 block uppercase tracking-wider mb-0.5">Të Sakta</span>
                <span className="text-xl font-black text-[#1A1D20] font-technical">
                  {scoreRaw} / 25
                </span>
              </div>
              <div className="text-center">
                <span className="text-[10px] font-bold text-neutral-400 block uppercase tracking-wider mb-0.5">Koha e Përdorur</span>
                <span className="text-xl font-black text-[#1A1D20] font-technical">
                  {formatTime(secondsElapsed)}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setActivePage('lessons')}
                className="px-6 py-3 border border-[#E9ECEF] bg-white text-[#565E64] hover:bg-neutral-50 rounded-2xl font-bold text-xs uppercase tracking-widest cursor-pointer shadow-xs transition"
              >
                Kthehu te Paneli
              </button>
              <button
                onClick={startTest}
                className="px-6 py-3 bg-[#3A5A40] hover:bg-[#2A3F2E] text-white rounded-2xl font-bold text-xs uppercase tracking-widest cursor-pointer shadow-md transition"
              >
                Provo Përsëri ↺
              </button>
            </div>
          </div>

          {/* Detailed Question Review Diagnostics */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-[#1A1D20] uppercase tracking-wider border-b border-[#E9ECEF] pb-2">
              Analiza e Detajuar e Pyetjeve (Scorecard Review)
            </h3>

            <div className="space-y-4">
              {flatQuestions.map((q, idx) => {
                const ans = answers[q.id];
                
                let isCorrect = false;
                let userAnsText = '';
                let correctAnsText = '';

                if (q.type === 'reading' || q.type === 'multiple_choice') {
                  isCorrect = ans === q.correctAnswer;
                  userAnsText = ans || '(Pa përgjigje)';
                  correctAnsText = q.correctAnswer || '';
                } else if (q.type === 'suffix_builder') {
                  isCorrect = ans === q.correctSuffix;
                  userAnsText = ans ? `-${ans}` : '(Pa përgjigje)';
                  correctAnsText = `-${q.correctSuffix}`;
                } else if (q.type === 'word_sort') {
                  isCorrect = JSON.stringify(ans) === JSON.stringify(q.correctSequence);
                  userAnsText = ans ? ans.join(' ') : '(Pa përgjigje)';
                  correctAnsText = q.correctSequence ? q.correctSequence.join(' ') : '';
                } else if (q.type === 'writing') {
                  const normInput = normalizeText(ans || '');
                  isCorrect = q.correctAnswers?.some((c) => normalizeText(c) === normInput) || false;
                  userAnsText = ans || '(Pa përgjigje)';
                  correctAnsText = q.correctAnswers ? q.correctAnswers[0] : '';
                }

                return (
                  <div
                    key={q.id}
                    className={`bg-white border rounded-2xl p-5 space-y-3 shadow-xs border-l-4 transition duration-200 ${
                      isCorrect 
                        ? 'border-l-emerald-500 hover:border-l-emerald-600' 
                        : 'border-l-red-500 hover:border-l-red-650'
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="text-[8px] font-bold text-[#565E64] uppercase bg-neutral-100 border border-neutral-200 px-1.5 py-0.5 rounded-md leading-none select-none">
                          Pyetje {idx + 1} • {q.type.replace('_', ' ').toUpperCase()}
                        </span>
                        <p className="text-xs text-[#565E64] font-medium mt-2 leading-relaxed">
                          {q.promptAlbanian}
                        </p>
                        
                        {q.questionTurkish && (
                          <p lang="tr" className="text-sm font-bold text-[#1A1D20] font-technical mt-1 tracking-wide">
                            {q.questionTurkish}
                          </p>
                        )}
                        {q.type === 'suffix_builder' && (
                          <p lang="tr" className="text-sm font-bold text-[#1A1D20] font-technical mt-1 tracking-wide">
                            Rrënja: {q.root}
                          </p>
                        )}
                      </div>

                      <span className={`text-sm font-extrabold flex items-center gap-1 leading-none ${isCorrect ? 'text-emerald-700' : 'text-red-750'}`}>
                        {isCorrect ? '✓ Saktë' : '✗ Gabim'}
                      </span>
                    </div>

                    {/* Answer Comparison */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs border-t border-neutral-100 pt-3 font-technical">
                      <div className="bg-neutral-50/50 p-2 rounded-lg border border-neutral-200/50">
                        <span className="text-[9px] font-bold text-neutral-400 block uppercase tracking-wider mb-0.5 select-none">Përgjigjja Juaj:</span>
                        <span lang="tr" className={isCorrect ? 'text-emerald-800 font-bold' : 'text-red-800 font-medium'}>
                          {userAnsText}
                        </span>
                      </div>
                      <div className="bg-neutral-50/50 p-2 rounded-lg border border-neutral-200/50">
                        <span className="text-[9px] font-bold text-neutral-400 block uppercase tracking-wider mb-0.5 select-none">Përgjigjja e Saktë:</span>
                        <span lang="tr" className="text-[#3A5A40] font-bold">
                          {correctAnsText}
                        </span>
                      </div>
                    </div>

                    {/* Grammatical Explanation */}
                    <div className="bg-[#3A5A40]/5 border border-[#3A5A40]/10 rounded-xl p-3 text-[11px] leading-relaxed text-[#565E64] font-light">
                      <span className="font-bold text-[#3A5A40] block uppercase text-[8px] tracking-wider mb-1 select-none">Shpjegim Gramatikor:</span>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}
    </div>
  );
};
