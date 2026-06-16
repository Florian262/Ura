import React, { useState, useEffect, useRef } from 'react';
import { useLesson } from '../../../application/state/LessonContext';
import { getA2Test } from '../../../infrastructure/db/a2TestPool';
import { getB1Test } from '../../../infrastructure/db/b1TestPool';
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

interface FinishingTestPageProps {
  level: 'A2' | 'B1';
  subType?: 'official' | 'practice_a' | 'practice_b';
}

export const FinishingTestPage: React.FC<FinishingTestPageProps> = ({ level, subType = 'official' }) => {
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

  // B2 Unlock Modal State
  const [showB2UnlockModal, setShowB2UnlockModal] = useState<boolean>(false);

  const [scoreRaw, setScoreRaw] = useState<number>(0);
  const [percentageScore, setPercentageScore] = useState<number>(0);
  const [isPassed, setIsPassed] = useState<boolean>(false);

  const getLevelLabel = () => {
    if (level === 'A2') {
      return 'Niveli A2';
    }
    return subType === 'official' ? 'Niveli B1' : `B1 - Praktikë ${subType === 'practice_a' ? 'A' : 'B'}`;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Localization resources
  const localizedStrings = {
    A2: {
      welcomeTitle: subType === 'official' ? "Provimi Përfundimtar A2" : `A2 - Test Praktike ${subType === 'practice_a' ? 'A' : 'B'}`,
      welcomeSub: subType === 'official' ? "Ura e Gjuhës elementar" : "Ura e Gjuhës elementar (Praktikë)",
      welcomeDesc: subType === 'official' 
        ? "Mirë se vini në testin gjithëpërfëshirës të nivelit A2. Ky vlerësim do të testojë të gjitha njohuritë tuaja lexike, gramatikore dhe ushtrimet e shkrimit të trajtuara në Kapitujt 9–16."
        : `Ky është një provim praktik opsional për nivelin A2 (${subType === 'practice_a' ? 'Pjesa A' : 'Pjesa B'}). Mund ta përdorni për të testuar veten.`,
      unansweredConfirm: "Keni {unansweredCount} pyetje pa përgjigjur (Pyetjet: {indices}). A dëshironi ta dorëzoni provimin gjithsesi?",
      submitConfirm: "A jeni i sigurt që dëshironi të dorëzoni provimin?",
      abortConfirm: "A jeni i sigurt që dëshironi të ndërprisni provimin? Përparimi juaj do të humbasë.",
      type: "Lloji",
      statusComplete: "E plotësuar",
      statusIncomplete: "E paplotësuar",
      resultsTitle: "Rezultatet e Provimit",
      resultsPassed: "Provimi u Kalua me Sukses!",
      resultsFailed: "Provimi nuk u kalua.",
      resultsDescPassed: "Urime, {userName}! Keni kaluar nivelin A2 me përqindje të shkëlqyer. Tani keni zyrtarisht kompetencë elementare të gjuhës turke.",
      resultsDescFailed: "Mos u dorëzoni! Keni marrë {score}%, ndërsa pragu i kalimit është 80% (të paktën 20 përgjigje të sakta). Rishikoni kapitujt ku gabuat dhe provoni përsëri.",
      points: "Pikët",
      correct: "Të Sakta",
      timeUsed: "Koha e Përdorur",
      returnPanel: "Kthehu te Paneli",
      tryAgain: "Provo Përsëri",
      diagnosticsTitle: "Analiza e Detajuar e Pyetjeve (Scorecard Review)",
      correctLabel: "Saktë",
      incorrectLabel: "Gabim",
      yourAnswer: "Përgjigjja Juaj:",
      correctAnswerLabel: "Përgjigjja e Saktë:",
      explanationHeader: "Shpjegim Gramatikor:",
      unanswered: "(Pa përgjigje)",
      timer: "Timer",
      next: "Para →",
      prev: "← Mbrapa",
      submit: "Dorëzo Testin 🏆",
      confirmMessage: "A jeni i sigurt?"
    },
    B1: {
      welcomeTitle: subType === 'official' ? "Provimi Përfundimtar B1" : `B1 - Test Praktike ${subType === 'practice_a' ? 'A' : 'B'}`,
      welcomeSub: subType === 'official' ? "Ura e Gjuhës i Mesëm" : "Ura e Gjuhës i Mesëm (Praktikë)",
      welcomeDesc: subType === 'official' 
        ? "B1 seviyesi bitirme sınavına hoş geldiniz. Bu sınav, fiil çatılarını, dilek-şart kipini ve bağlaçları anlama derecenizi ölçerek B2 seviyesini açacaktır."
        : `Bu, B1 seviyesi için isteğe bağlı bir pratik sınavıdır (${subType === 'practice_a' ? 'Bölüm A' : 'Bölüm B'}). Kendinizi test etmek için kullanabilirsiniz.`,
      unansweredConfirm: "Cevaplanmamış {unansweredCount} sorunuz var (Sorular: {indices}). Yine de sınavı teslim etmek istiyor musunuz?",
      submitConfirm: "Sınavı teslim etmek istediğinizden emin misiniz?",
      abortConfirm: "Sınavı yarıda kesmek istediğinizden emin misiniz? İlerlemeniz silinecektir.",
      type: "Tür",
      statusComplete: "Tamamlandı",
      statusIncomplete: "Tamamlanmadı",
      resultsTitle: "Sınav Sonuçları",
      resultsPassed: "Sınav Başarıyla Tamamlandı!",
      resultsFailed: "Sınav Başarısız Oldu.",
      resultsDescPassed: "Tebrikler, {userName}! B1 seviyesini üstün başarıyla geçtiniz. Artık B2 seviyesine başlamak için resmi olarak hazırsınız.",
      resultsDescFailed: "Pes etmeyin! %{score} aldınız, geçme barajı ise %80'dir (en az 20 doğru). Hatalı olduğunuz konuları gözden geçirip tekrar deneyiniz.",
      points: "Puan",
      correct: "Doğru Sayısı",
      timeUsed: "Kullanılan Süre",
      returnPanel: "Panele Dön",
      tryAgain: "Tekrar Dene",
      diagnosticsTitle: "Detaylı Soru Analizi (Puan Tablosu)",
      correctLabel: "Doğru",
      incorrectLabel: "Yanlış",
      yourAnswer: "Sizin Cevabınız:",
      correctAnswerLabel: "Doğru Cevap:",
      explanationHeader: "Dil Bilgisi Açıklaması:",
      unanswered: "(Boş bırakıldı)",
      timer: "Zamanlayıcı",
      next: "İleri →",
      prev: "← Geri",
      submit: "Sınavı Teslim Et 🏆",
      confirmMessage: "Emin misiniz?"
    }
  };

  const loc = (key: string, variables: Record<string, string | number> = {}) => {
    let str = (localizedStrings[level] as any)[key] || '';
    Object.keys(variables).forEach((vKey) => {
      str = str.replace(`{${vKey}}`, variables[vKey].toString());
    });
    return str;
  };

  const getSectionTag = (type: string) => {
    if (level === 'A2') {
      if (type === 'reading') return 'Seksioni: Lexim & Kuptim';
      if (type === 'multiple_choice') return 'Seksioni: Strukturë & Fjalor';
      if (type === 'suffix_builder') return 'Seksioni: Prapashtesat';
      if (type === 'word_sort') return 'Seksioni: Sintaksa';
      return 'Seksioni: Përkthim i Lirë';
    } else {
      if (type === 'reading') return 'Bölüm: Okuma & Anlama';
      if (type === 'multiple_choice') return 'Bölüm: Dil Bilgisi & Sözcük Bilgisi';
      if (type === 'suffix_builder') return 'Bölüm: Ek Yapılandırıcı';
      if (type === 'word_sort') return 'Bölüm: Söz Dizimi';
      return 'Bölüm: Serbest Yazma';
    }
  };

  const getSectionName = (type: string) => {
    return type.replace('_', ' ').toUpperCase();
  };

  // Initialize randomized test
  const startTest = () => {
    const list: UnifiedQuestion[] = [];

    if (level === 'A2') {
      const rawTest = getA2Test(subType);
      
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

      rawTest.writing.forEach((q) => {
        list.push({
          id: q.id,
          type: 'writing',
          promptAlbanian: q.promptAlbanian,
          correctAnswers: q.correctAnswers,
          explanation: q.explanation
        });
      });
    } else {
      const rawTest = getB1Test(subType);
      
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

      rawTest.writing.forEach((q) => {
        list.push({
          id: q.id,
          type: 'writing',
          promptAlbanian: q.promptAlbanian,
          correctAnswers: q.correctAnswers,
          explanation: q.explanation
        });
      });
    }

    setFlatQuestions(list);
    setAnswers({});
    setCurrentIdx(0);
    setSortedWords([]);
    setSecondsElapsed(0);
    setScoreRaw(0);
    setPercentageScore(0);
    setIsPassed(false);
    setStage('running');

    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    timerIntervalRef.current = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, []);

  const currentQuestion = flatQuestions[currentIdx];
  useEffect(() => {
    if (currentQuestion && currentQuestion.type === 'word_sort') {
      const stored = answers[currentQuestion.id] || [];
      setSortedWords(stored);
    } else {
      setSortedWords([]);
    }
  }, [currentIdx, flatQuestions]);

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

  const handleSubmitTest = () => {
    const unansweredIndices: number[] = [];
    flatQuestions.forEach((q, idx) => {
      const ans = answers[q.id];
      if (ans === undefined || ans === '' || (Array.isArray(ans) && ans.length === 0)) {
        unansweredIndices.push(idx + 1);
      }
    });

    if (unansweredIndices.length > 0) {
      const confirmSubmit = window.confirm(
        loc('unansweredConfirm', {
          unansweredCount: unansweredIndices.length,
          indices: unansweredIndices.join(', ')
        })
      );
      if (!confirmSubmit) return;
    } else {
      const confirmSubmit = window.confirm(loc('submitConfirm'));
      if (!confirmSubmit) return;
    }

    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);

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

    const passed = correctCount >= 20; // 80%
    const percentage = Math.round((correctCount / 25) * 100);

    setScoreRaw(correctCount);
    setPercentageScore(percentage);
    setIsPassed(passed);

    if (level === 'A2') {
      if (subType === 'official') {
        if (passed) {
          localStorage.setItem('ura_a2_test_passed', 'true');
          localStorage.setItem('ura_a2_test_score', `${percentage}`);
          localStorage.setItem('ura_a2_test_duration', `${secondsElapsed}`);
        }
      } else if (subType === 'practice_a') {
        localStorage.setItem('ura_a2_practice_a_score', `${percentage}`);
        localStorage.setItem('ura_a2_practice_a_duration', `${secondsElapsed}`);
        if (passed) {
          localStorage.setItem('ura_a2_practice_a_passed', 'true');
        }
      } else if (subType === 'practice_b') {
        localStorage.setItem('ura_a2_practice_b_score', `${percentage}`);
        localStorage.setItem('ura_a2_practice_b_duration', `${secondsElapsed}`);
        if (passed) {
          localStorage.setItem('ura_a2_practice_b_passed', 'true');
        }
      }
    } else {
      if (subType === 'official') {
        if (passed) {
          localStorage.setItem('ura_b1_test_passed', 'true');
          localStorage.setItem('ura_b1_test_score', `${percentage}`);
          localStorage.setItem('ura_b1_test_duration', `${secondsElapsed}`);
          setShowB2UnlockModal(true);
        }
      } else if (subType === 'practice_a') {
        localStorage.setItem('ura_b1_practice_a_score', `${percentage}`);
        localStorage.setItem('ura_b1_practice_a_duration', `${secondsElapsed}`);
        if (passed) {
          localStorage.setItem('ura_b1_practice_a_passed', 'true');
        }
      } else if (subType === 'practice_b') {
        localStorage.setItem('ura_b1_practice_b_score', `${percentage}`);
        localStorage.setItem('ura_b1_practice_b_duration', `${secondsElapsed}`);
        if (passed) {
          localStorage.setItem('ura_b1_practice_b_passed', 'true');
        }
      }
    }

    setStage('results');

    if (passed) {
      setTimeout(() => triggerConfetti(), 100);
    }
  };

  const handleAbort = () => {
    const confirmAbort = window.confirm(loc('abortConfirm'));
    if (confirmAbort) {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      setActivePage('lessons');
    }
  };

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

      let remaining = false;
      particles.forEach((p) => {
        if (p.y <= canvas.height) remaining = true;
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

  const renderQuestionBody = (q: UnifiedQuestion) => {
    const currentVal = answers[q.id];

    switch (q.type) {
      case 'reading':
      case 'multiple_choice':
        const optionPrefixes = ['A', 'B', 'C', 'D'];
        return (
          <div className="flex flex-col gap-3.5 max-w-xl mx-auto w-full pt-2">
            {q.options?.map((opt, oIdx) => {
              const isSelected = currentVal === opt;
              return (
                <button
                  key={opt}
                  onClick={() => handleSelectOption(q.id, opt)}
                  className={`p-4 border text-sm text-left font-technical transition-all duration-200 cursor-pointer rounded-2xl flex items-center gap-4 shadow-sm hover:translate-y-[-2px] hover:shadow-md ${
                    isSelected
                      ? 'bg-[#3A5A40]/10 border-[#3A5A40] text-[#3A5A40] font-black'
                      : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50 dark:bg-neutral-900/35 dark:border-neutral-800 dark:text-neutral-300'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold font-mono shrink-0 ${
                    isSelected
                      ? 'bg-[#3A5A40] text-white'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500'
                  }`}>
                    {optionPrefixes[oIdx] || '•'}
                  </span>
                  <span className="flex-grow">{opt}</span>
                </button>
              );
            })}
          </div>
        );

      case 'suffix_builder':
        return (
          <div className="space-y-6 max-w-xl mx-auto pt-2">
            <div className="bg-neutral-50 border border-[#E9ECEF] rounded-2xl p-6 flex justify-center items-center shadow-inner select-none dark:bg-neutral-900/40 dark:border-neutral-850">
              <div className="flex flex-wrap justify-center items-center gap-2 text-xl font-technical">
                <span lang="tr" className="px-4 py-2 border border-[#E9ECEF] bg-white text-[#1A1D20] rounded-xl font-semibold shadow-xs dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-250">
                  {q.root}
                </span>
                <span className="text-[#3A5A40] font-black">+</span>
                
                <div className={`px-4 py-2 border border-dashed rounded-xl min-w-[70px] text-center font-bold shadow-xs ${
                  currentVal 
                    ? 'bg-[#3A5A40]/10 border-[#3A5A40] text-[#3A5A40]' 
                    : 'border-neutral-300 bg-neutral-100 text-neutral-450 dark:border-neutral-700 dark:bg-neutral-800'
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
                        : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50 dark:bg-neutral-900/35 dark:border-neutral-800 dark:text-neutral-300'
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
            <div className="bg-neutral-50 border border-[#E9ECEF] rounded-2xl p-4 min-h-[60px] flex items-center justify-start gap-2 flex-wrap shadow-inner dark:bg-neutral-900/40 dark:border-neutral-850">
              {sortedWords.length === 0 ? (
                <span className="text-xs text-neutral-400 italic mx-auto">
                  {level === 'A2' ? 'Shtypni fjalët e mëposhtme sipas radhës...' : 'Kelimeleri sırayla seçerek cümleyi kurunuz...'}
                </span>
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

            <div className="flex flex-wrap gap-2 justify-center">
              {unusedWords.map((w) => (
                <button
                  key={w}
                  onClick={() => handleWordTap(w, false)}
                  className="px-3.5 py-2 rounded-xl border border-[#E9ECEF] bg-white text-sm font-bold font-technical text-[#565E64] cursor-pointer hover:bg-neutral-50 transition duration-150 shadow-xs hover:translate-y-[-1px] dark:bg-neutral-900/35 dark:border-neutral-800 dark:text-neutral-300"
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
                  {level === 'A2' ? 'Rivendos radhitjen ↺' : 'Sıralamayı Sıfırla ↺'}
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
              placeholder={level === 'A2' ? "Shkruani përkthimin tuaj në turqisht këtu..." : "Cevabınızı buraya yazınız..."}
              className="w-full rounded-2xl border border-[#E9ECEF] bg-white p-4 text-sm font-technical text-[#1A1D20] placeholder-neutral-400 focus:border-[#3A5A40] focus:ring-1 focus:ring-[#3A5A40]/30 focus:outline-hidden tracking-wide shadow-xs transition duration-150 min-h-[100px] dark:bg-neutral-900/40 dark:border-neutral-800 dark:text-neutral-200"
            />

            <div className="flex flex-wrap gap-1.5 justify-center bg-neutral-50/50 p-2.5 rounded-xl border border-[#E9ECEF] dark:bg-neutral-900/30 dark:border-neutral-800">
              <span className="text-[10px] text-neutral-450 font-bold uppercase tracking-wider self-center mr-2 select-none">Karakteret Turke:</span>
              {turkishChars.map((char) => (
                <button
                  key={char}
                  onClick={() => {
                    const prevText = currentVal || '';
                    handleWritingChange(q.id, prevText + char);
                  }}
                  className="w-8 h-8 rounded-lg border border-[#E9ECEF] bg-white text-xs font-bold font-technical flex items-center justify-center hover:bg-[#3A5A40]/10 hover:border-[#3A5A40] hover:text-[#3A5A40] transition cursor-pointer active:scale-95 shadow-xs dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300"
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
      
      {stage === 'results' && isPassed && (
        <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50 w-full h-full" />
      )}

      <div className="curriculum-watermark opacity-10 select-none">PROVIM</div>

      {/* ================= STAGE 1: WELCOME SCREEN ================= */}
      {stage === 'start' && (
        <div className="glass-panel border border-[#E9ECEF] bg-white rounded-3xl p-8 md:p-12 text-center space-y-8 shadow-md z-10 max-w-2xl mx-auto my-auto animate-fade-in dark:bg-neutral-900/60 dark:border-neutral-800">
          <div className="flex flex-col items-center gap-3">
            <span className="text-5xl animate-bounce">🏆</span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#3A5A40] dark:text-[#A3B18A] uppercase">{getLevelLabel()}</span>
            <h2 className="text-3xl font-black text-[#1A1D20] uppercase font-sans tracking-tight dark:text-neutral-100">{loc('welcomeTitle')}</h2>
            <p className="text-sm text-[#565E64] font-light max-w-md leading-relaxed mt-2 dark:text-neutral-400">
              {loc('welcomeDesc')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-left select-none">
            <div className="p-4 rounded-2xl bg-neutral-50 border border-[#E9ECEF] flex gap-3 items-center dark:bg-neutral-800/40 dark:border-neutral-700/60">
              <span className="text-2xl">📝</span>
              <div>
                <span className="text-[10px] font-bold text-neutral-450 block uppercase tracking-wider">{level === 'A2' ? 'Pyetje Gjithsej' : 'Toplam Soru'}</span>
                <span className="text-sm font-bold text-[#1A1D20] font-technical dark:text-neutral-250">25 {level === 'A2' ? 'Pyetje' : 'Soru'}</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-[#E9ECEF] flex gap-3 items-center dark:bg-neutral-800/40 dark:border-neutral-700/60">
              <span className="text-2xl">⏱️</span>
              <div>
                <span className="text-[10px] font-bold text-neutral-450 block uppercase tracking-wider">{level === 'A2' ? 'Kohëzgjatja' : 'Süre'}</span>
                <span className="text-sm font-bold text-[#1A1D20] font-technical dark:text-neutral-250">20 - 30 {level === 'A2' ? 'Minuta' : 'Dakika'}</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-[#E9ECEF] flex gap-3 items-center dark:bg-neutral-800/40 dark:border-neutral-700/60">
              <span className="text-2xl">🎯</span>
              <div>
                <span className="text-[10px] font-bold text-neutral-450 block uppercase tracking-wider">{level === 'A2' ? 'Pragu i Kalimit' : 'Geçme Barajı'}</span>
                <span className="text-sm font-bold text-[#1A1D20] font-technical dark:text-neutral-250">80% (20 {level === 'A2' ? 'të sakta' : 'doğru'})</span>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-neutral-50 border border-[#E9ECEF] flex gap-3 items-center dark:bg-neutral-800/40 dark:border-neutral-700/60">
              <span className="text-2xl">⏳</span>
              <div>
                <span className="text-[10px] font-bold text-neutral-450 block uppercase tracking-wider">{level === 'A2' ? 'Pa penalizim' : 'Zaman Sınırı'}</span>
                <span className="text-sm font-bold text-[#1A1D20] font-technical dark:text-neutral-250">{level === 'A2' ? 'Vetëm kuriozitet' : 'Sınır Yok'}</span>
              </div>
            </div>
          </div>

          <div className="border-t border-[#E9ECEF] pt-6 flex justify-center gap-4 dark:border-neutral-800">
            <button
              onClick={() => setActivePage('lessons')}
              className="px-6 py-3 border border-[#E9ECEF] bg-white text-[#565E64] hover:bg-neutral-50 rounded-2xl font-bold text-xs uppercase tracking-widest cursor-pointer shadow-xs transition active:scale-95 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400"
            >
              {loc('returnPanel')}
            </button>
            <button
              onClick={startTest}
              className="px-8 py-3 bg-[#3A5A40] hover:bg-[#2A3F2E] text-white rounded-2xl font-bold text-xs uppercase tracking-widest cursor-pointer shadow-md transition active:scale-95"
            >
              {level === 'A2' ? 'Fillo Provimin 🚀' : 'Sınavı Başlat 🚀'}
            </button>
          </div>
        </div>
      )}

      {/* ================= STAGE 2: TEST RUNNER SCREEN ================= */}
      {stage === 'running' && currentQuestion && (
        <div className="space-y-6 z-10 flex-1 flex flex-col justify-between max-w-3xl mx-auto w-full">
          
          {/* Header Progress & Timer */}
          <div className="glass-panel border border-[#E9ECEF] bg-white rounded-2xl p-4 flex justify-between items-center shadow-xs dark:bg-neutral-900/60 dark:border-neutral-800">
            <div className="flex items-center gap-3">
              <button
                onClick={handleAbort}
                className="text-xs font-bold text-red-650 hover:text-red-750 transition bg-transparent border-0 cursor-pointer outline-none"
              >
                {level === 'A2' ? '[ Ndërprit Provimin ]' : '[ Sınavı Yarıda Kes ]'}
              </button>
              <span className="text-neutral-300 select-none">|</span>
              <span className="text-xs font-bold text-[#1A1D20] font-technical dark:text-neutral-250">
                {level === 'A2' ? `Pyetja ${currentIdx + 1} nga 25` : `Soru ${currentIdx + 1} / 25`}
              </span>
            </div>

            <button
              onClick={() => setShowTimer(!showTimer)}
              className="px-4 py-2 border border-[#E9ECEF] bg-neutral-50 hover:bg-neutral-100 rounded-xl text-xs font-bold font-technical cursor-pointer transition select-none outline-none shadow-xs text-[#565E64] dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300"
            >
              {showTimer ? formatTime(secondsElapsed) : loc('timer')}
            </button>
          </div>

          <div className="w-full bg-neutral-200/50 h-1.5 rounded-full overflow-hidden border border-neutral-100 dark:bg-neutral-850 dark:border-neutral-800">
            <div
              className="bg-gradient-to-r from-teal-500 to-[#3A5A40] h-full rounded-full transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / 25) * 100}%` }}
            />
          </div>

          {/* Centered Single-Column Card Layout */}
          <div className="glass-panel border border-[#E9ECEF] bg-white rounded-3xl p-6 md:p-8 shadow-xs flex flex-col justify-between dark:bg-neutral-900/60 dark:border-neutral-800 w-full min-h-[350px]">
            <div className="space-y-6 w-full text-center">
              <div className="flex justify-center">
                <span className="text-[9px] font-bold text-[#3A5A40] bg-[#3A5A40]/10 border border-[#3A5A40]/25 px-3 py-1 rounded-full uppercase tracking-wider block w-max select-none">
                  {getSectionTag(currentQuestion.type)}
                </span>
              </div>

              <h3 className="text-base md:text-lg font-black text-[#1A1D20] leading-relaxed dark:text-neutral-250 max-w-xl mx-auto">
                {currentQuestion.promptAlbanian}
              </h3>

              {currentQuestion.type === 'reading' && currentQuestion.readingText && (
                <div className="bg-amber-50/20 border border-amber-900/10 rounded-2xl p-5 md:p-6 text-sm font-normal text-[#1A1D20] leading-relaxed italic font-technical tracking-wide shadow-inner max-h-[250px] overflow-y-auto text-left dark:bg-amber-950/10 dark:border-amber-900/20 dark:text-neutral-200">
                  <span className="text-[10px] font-bold text-[#D97706] uppercase block mb-2 font-sans not-italic">TEKSTI: {currentQuestion.readingTitle}</span>
                  {currentQuestion.readingText}
                </div>
              )}

              {currentQuestion.questionTurkish && (
                <div className="bg-neutral-50 border border-[#E9ECEF] rounded-2xl p-5 text-base font-bold text-center font-technical tracking-wide text-[#1A1D20] dark:bg-neutral-900/35 dark:border-neutral-800 dark:text-neutral-100 max-w-xl mx-auto">
                  {currentQuestion.questionTurkish}
                </div>
              )}
            </div>

            {/* Answer body aligned in the center card */}
            <div className="pt-6 w-full border-t border-[#E9ECEF] dark:border-neutral-800 mt-6">
              {renderQuestionBody(currentQuestion)}
            </div>

            <div className="border-t border-[#E9ECEF] pt-4 mt-6 flex justify-between text-[10px] text-neutral-400 select-none dark:border-neutral-800">
              <span>{loc('type')}: {getSectionName(currentQuestion.type)}</span>
              <span className={answers[currentQuestion.id] ? 'text-emerald-700 font-bold' : 'text-amber-700 font-bold'}>
                {answers[currentQuestion.id] ? `✓ ${loc('statusComplete')}` : `✗ ${loc('statusIncomplete')}`}
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center gap-4 pt-4 border-t border-[#E9ECEF] z-10 bg-white/50 py-2 rounded-xl dark:bg-transparent dark:border-neutral-800">
            <button
              onClick={handlePrev}
              disabled={currentIdx === 0}
              className="px-5 py-2.5 border border-[#E9ECEF] bg-white text-[#565E64] disabled:opacity-40 disabled:pointer-events-none rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-xs active:scale-95 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400"
            >
              {loc('prev')}
            </button>

            <div className="hidden md:flex gap-1 justify-center max-w-md overflow-x-auto py-1">
              {flatQuestions.map((q, idx) => {
                const isCurrent = idx === currentIdx;
                const isAnswered = answers[q.id] !== undefined && answers[q.id] !== '' && (!Array.isArray(answers[q.id]) || answers[q.id].length > 0);
                
                let btnStyle = 'border-neutral-200 bg-white text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900';
                if (isAnswered) btnStyle = 'border-[#3A5A40]/30 bg-[#3A5A40]/5 text-[#3A5A40] dark:bg-[#3A5A40]/10';
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
                className="px-5 py-2.5 bg-white border border-[#E9ECEF] text-[#1A1D20] hover:border-[#3A5A40] hover:text-[#3A5A40] rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-xs active:scale-95 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-200"
              >
                {loc('next')}
              </button>
            ) : (
              <button
                onClick={handleSubmitTest}
                className="px-6 py-2.5 bg-[#3A5A40] hover:bg-[#2A3F2E] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md active:scale-95 animate-pulse"
              >
                {loc('submit')}
              </button>
            )}
          </div>
        </div>
      )}

      {/* ================= STAGE 3: RESULTS & SCORECARD SCREEN ================= */}
      {stage === 'results' && (
        <div className="space-y-8 z-10 animate-fade-in pb-12">
          
          <div className="glass-panel border border-[#E9ECEF] bg-white rounded-3xl p-8 text-center space-y-6 shadow-md max-w-xl mx-auto dark:bg-neutral-900/60 dark:border-neutral-800">
            <div className="flex flex-col items-center gap-2">
              <span className="text-5xl">{isPassed ? '🏆' : '❌'}</span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-450 uppercase block">
                {loc('resultsTitle')}
              </span>
              <h2 className="text-2xl font-black text-[#1A1D20] uppercase font-sans tracking-tight dark:text-neutral-100">
                {isPassed ? loc('resultsPassed') : loc('resultsFailed')}
              </h2>
              <p className="text-xs text-[#565E64] max-w-sm leading-relaxed mt-1 font-light dark:text-neutral-400">
                {isPassed 
                  ? loc('resultsDescPassed', { userName: userName || (level === 'A2' ? 'Student' : 'Öğrenci') })
                  : loc('resultsDescFailed', { score: percentageScore })}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 border-y border-[#E9ECEF] py-4 select-none dark:border-neutral-800">
              <div className="text-center">
                <span className="text-[10px] font-bold text-neutral-400 block uppercase tracking-wider mb-0.5">{loc('points')}</span>
                <span className={`text-xl font-black font-technical ${isPassed ? 'text-emerald-700' : 'text-red-750'}`}>
                  {percentageScore}%
                </span>
              </div>
              <div className="text-center border-x border-[#E9ECEF] dark:border-neutral-800">
                <span className="text-[10px] font-bold text-neutral-400 block uppercase tracking-wider mb-0.5">{loc('correct')}</span>
                <span className="text-xl font-black text-[#1A1D20] font-technical dark:text-neutral-250">
                  {scoreRaw} / 25
                </span>
              </div>
              <div className="text-center">
                <span className="text-[10px] font-bold text-neutral-400 block uppercase tracking-wider mb-0.5">{loc('timeUsed')}</span>
                <span className="text-xl font-black text-[#1A1D20] font-technical dark:text-neutral-250">
                  {formatTime(secondsElapsed)}
                </span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setActivePage('lessons')}
                className="px-6 py-3 border border-[#E9ECEF] bg-white text-[#565E64] hover:bg-neutral-50 rounded-2xl font-bold text-xs uppercase tracking-widest cursor-pointer shadow-xs transition dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400"
              >
                {loc('returnPanel')}
              </button>
              <button
                onClick={startTest}
                className="px-6 py-3 bg-[#3A5A40] hover:bg-[#2A3F2E] text-white rounded-2xl font-bold text-xs uppercase tracking-widest cursor-pointer shadow-md transition"
              >
                {loc('tryAgain')}
              </button>
            </div>
          </div>

          {/* Detailed Question Review Diagnostics */}
          <div className="space-y-4">
            <h3 className="text-sm font-black text-[#1A1D20] uppercase tracking-wider border-b border-[#E9ECEF] pb-2 dark:text-neutral-200 dark:border-neutral-800">
              {loc('diagnosticsTitle')}
            </h3>

            <div className="space-y-4">
              {flatQuestions.map((q, idx) => {
                const ans = answers[q.id];
                
                let isCorrect = false;
                let userAnsText = '';
                let correctAnsText = '';

                if (q.type === 'reading' || q.type === 'multiple_choice') {
                  isCorrect = ans === q.correctAnswer;
                  userAnsText = ans || loc('unanswered');
                  correctAnsText = q.correctAnswer || '';
                } else if (q.type === 'suffix_builder') {
                  isCorrect = ans === q.correctSuffix;
                  userAnsText = ans ? `-${ans}` : loc('unanswered');
                  correctAnsText = `-${q.correctSuffix}`;
                } else if (q.type === 'word_sort') {
                  isCorrect = JSON.stringify(ans) === JSON.stringify(q.correctSequence);
                  userAnsText = ans ? ans.join(' ') : loc('unanswered');
                  correctAnsText = q.correctSequence ? q.correctSequence.join(' ') : '';
                } else if (q.type === 'writing') {
                  const normInput = normalizeText(ans || '');
                  isCorrect = q.correctAnswers?.some((c) => normalizeText(c) === normInput) || false;
                  userAnsText = ans || loc('unanswered');
                  correctAnsText = q.correctAnswers ? q.correctAnswers[0] : '';
                }

                return (
                  <div
                    key={q.id}
                    className={`bg-white border rounded-2xl p-5 space-y-3 shadow-xs border-l-4 transition duration-200 dark:bg-neutral-900/40 dark:border-neutral-800 ${
                      isCorrect 
                        ? 'border-l-emerald-500 hover:border-l-emerald-600' 
                        : 'border-l-red-500 hover:border-l-red-650'
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="text-[8px] font-bold text-[#565E64] uppercase bg-neutral-100 border border-neutral-200 px-1.5 py-0.5 rounded-md leading-none select-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                          {loc('type')} {idx + 1} • {getSectionName(q.type)}
                        </span>
                        <p className="text-xs text-[#565E64] font-medium mt-2 leading-relaxed dark:text-neutral-300">
                          {q.promptAlbanian}
                        </p>
                        
                        {q.questionTurkish && (
                          <p lang="tr" className="text-sm font-bold text-[#1A1D20] font-technical mt-1 tracking-wide dark:text-neutral-250">
                            {q.questionTurkish}
                          </p>
                        )}
                        {q.type === 'suffix_builder' && (
                          <p lang="tr" className="text-sm font-bold text-[#1A1D20] font-technical mt-1 tracking-wide dark:text-neutral-250">
                            Rrënja: {q.root}
                          </p>
                        )}
                      </div>

                      <span className={`text-sm font-extrabold flex items-center gap-1 leading-none ${isCorrect ? 'text-emerald-700' : 'text-red-750'}`}>
                        {isCorrect ? loc('correctLabel') : loc('incorrectLabel')}
                      </span>
                    </div>

                    {/* Answer Comparison */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs border-t border-neutral-100 pt-3 font-technical dark:border-neutral-800/80">
                      <div className="bg-neutral-50/50 p-2 rounded-lg border border-neutral-200/50 dark:bg-neutral-950/20 dark:border-neutral-800">
                        <span className="text-[9px] font-bold text-neutral-400 block uppercase tracking-wider mb-0.5 select-none">{loc('yourAnswer')}</span>
                        <span lang="tr" className={isCorrect ? 'text-emerald-800 font-bold dark:text-emerald-400' : 'text-red-800 font-medium'}>
                          {userAnsText}
                        </span>
                      </div>
                      <div className="bg-neutral-50/50 p-2 rounded-lg border border-neutral-200/50 dark:bg-neutral-950/20 dark:border-neutral-800">
                        <span className="text-[9px] font-bold text-neutral-400 block uppercase tracking-wider mb-0.5 select-none">{loc('correctAnswerLabel')}</span>
                        <span lang="tr" className="text-[#3A5A40] font-bold dark:text-[#A3B18A]">
                          {correctAnsText}
                        </span>
                      </div>
                    </div>

                    {/* Grammatical Explanation */}
                    <div className="bg-[#3A5A40]/5 border border-[#3A5A40]/10 rounded-xl p-3 text-[11px] leading-relaxed text-[#565E64] font-light dark:bg-[#3A5A40]/10 dark:border-[#3A5A40]/20 dark:text-neutral-300">
                      <span className="font-bold text-[#3A5A40] block uppercase text-[8px] tracking-wider mb-1 select-none dark:text-[#A3B18A]">{loc('explanationHeader')}</span>
                      {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* ================= B2 CELEBRATORY UNLOCK MODAL ================= */}
      {showB2UnlockModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4 py-8 animate-fade-in">
          <div className="bg-white dark:bg-neutral-900 border border-[#E9ECEF] dark:border-neutral-800 rounded-3xl p-8 max-w-lg w-full text-center space-y-6 shadow-2xl relative animate-scale-up z-50">
            <div className="flex flex-col items-center gap-3">
              <span className="text-7xl animate-bounce">🎉</span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#3A5A40] dark:text-[#A3B18A] uppercase">Zhbllokim i Ri</span>
              <h2 className="text-3xl font-black text-[#1A1D20] dark:text-neutral-100 uppercase font-sans tracking-tight">Keni Zhbllokuar B2!</h2>
              <p className="text-sm text-[#565E64] dark:text-neutral-450 font-light max-w-sm leading-relaxed">
                Urime, {userName || 'Student'}! Keni kaluar me sukses <strong>Provimin Përfundimtar B1</strong> me një rezultat prej {percentageScore}%.
                <br />
                Tani jeni gati për të filluar kapitullin e parë të nivelit **B2 (Ndërmjetëm i Lartë)**!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 bg-neutral-50 dark:bg-neutral-800/40 border border-[#E9ECEF] dark:border-neutral-800 p-4 rounded-2xl max-w-xs mx-auto">
              <div>
                <span className="text-[9px] text-neutral-400 uppercase block font-bold tracking-wider">Rezultati</span>
                <span className="text-lg font-black text-emerald-600 font-technical">{percentageScore}%</span>
              </div>
              <div className="border-l border-[#E9ECEF] dark:border-neutral-800">
                <span className="text-[9px] text-neutral-400 uppercase block font-bold tracking-wider">Të sakta</span>
                <span className="text-lg font-black text-[#1A1D20] dark:text-neutral-250 font-technical">{scoreRaw} / 25</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E9ECEF] dark:border-neutral-800 flex justify-center">
              <button
                onClick={() => {
                  setShowB2UnlockModal(false);
                  setActivePage('lessons');
                  localStorage.setItem('ura_scroll_to_b2', 'true');
                }}
                className="px-8 py-3.5 bg-gradient-to-r from-teal-600 to-[#3A5A40] hover:scale-[1.02] active:scale-[0.98] text-white rounded-2xl font-bold text-xs uppercase tracking-widest cursor-pointer shadow-lg transition duration-200"
              >
                Vazhdo te Paneli B2 ➔
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
