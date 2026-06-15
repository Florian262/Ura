import React, { useState, useEffect, useRef, useMemo } from 'react';
import anime from 'animejs';
import { useLesson } from '../../../application/state/LessonContext';
import type { Chapter } from '../../../infrastructure/db/seedData';

import { ChapterRepository } from '../../../infrastructure/repository/ChapterRepository';

const UraIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg 
    className={`${className} shrink-0`}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M3 18c4-5 8-5 12 0" />
    <path d="M9 18c3-3 6-3 9 0" opacity="0.5" />
  </svg>
);

export const LessonDashboard: React.FC = () => {
  const { 
    chapters, 
    loadChapter, 
    userName, 
    setActivePage,
    sessionSeconds,
    lifetimeSeconds,
    isSessionRunning,
    hasSavedSession,
    resumeSession,
    resetSession,
    toggleSession,
    progressMap
  } = useLesson();
  
  const [isTimerExpanded, setIsTimerExpanded] = useState<boolean>(false);
  
  // Ref for the Timer card to handle click outside
  const timerCardRef = useRef<HTMLDivElement | null>(null);
  
  // Static state to freeze the display when the card is collapsed/closed
  const [staticSessionSeconds, setStaticSessionSeconds] = useState<number>(sessionSeconds);
  const prevExpandedRef = useRef<boolean>(false);
  const initialSyncRef = useRef<boolean>(false);

  // Sync static session seconds when collapsed or on initial load
  useEffect(() => {
    if (!initialSyncRef.current && sessionSeconds > 0) {
      setStaticSessionSeconds(sessionSeconds);
      initialSyncRef.current = true;
    }
  }, [sessionSeconds]);

  useEffect(() => {
    // If transitioning from open (true) to closed (false), capture the final value to freeze the display
    if (prevExpandedRef.current && !isTimerExpanded) {
      setStaticSessionSeconds(sessionSeconds);
    }
    prevExpandedRef.current = isTimerExpanded;
  }, [isTimerExpanded, sessionSeconds]);

  // Click outside listener for the timer card
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (timerCardRef.current && !timerCardRef.current.contains(event.target as Node)) {
        setIsTimerExpanded(false);
      }
    };

    if (isTimerExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isTimerExpanded]);

  // Group chapters by level
  const levels: Record<string, Chapter[]> = {
    A1: [],
    A2: [],
    B1: [],
    B2: [],
    C1: [],
    C2: []
  };

  chapters.forEach(ch => {
    if (levels[ch.level]) {
      levels[ch.level].push(ch);
    }
  });

  // Pedagogical Preview Syllabus & Curiosity Gaps focus configurations
  const levelSyllabus: Record<string, { desc: string; preview: string; focus: string; index: string; tags: string[] }> = {
    A1: { 
      desc: 'FILLESTAR', 
      index: '01',
      preview: 'Kurrikula: Prezantimi, Harmonia Vokalike, dhe 250 fjalë të përbashkëta (Dollap, Xham, Çorape).', 
      focus: 'Fokusimi: Prezantimi dhe Harmonia Vokalike (Çoğul Eki).',
      tags: ['Harmoni Vokalike', 'Çoğul Eki', '250 Cognates']
    },
    A2: { 
      desc: 'ELEMENTAR', 
      index: '02',
      preview: 'Kurrikula: Koha e shkuar e drejtpërdrejtë dhe strukturat e lakimit vendor për biseda elementare.', 
      focus: 'Fokusimi: Koha e shkuar e drejtpërdrejtë (-dı) dhe përshkrimet elementare.',
      tags: ['Koha e Shkuar (-dı)', 'Lokativi', 'Përshkrime']
    },
    B1: { 
      desc: 'NDËRMJETËM', 
      index: '03',
      preview: 'Kurrikula: Zotërimi i Mënyrës Habitore të shkuar të pacaktuar për të shprehur habi dhe thashetheme.', 
      focus: 'Fokusimi: Lidhja e fjalive me Mënyrën Habitore (Mënyra e habitshme -miş).',
      tags: ['Habitore (-miş)', 'Lidhëzat', 'Tregime']
    },
    B2: { 
      desc: 'NDËRMJETËM I LARTË', 
      index: '04',
      preview: 'Kurrikula: Strukturat hipotetike kushtore dhe shprehja e dëshirave komplekse në turqisht.', 
      focus: 'Fokusimi: Fjalia kushtore (-se), hipotezat dhe shprehja e dëshirave.',
      tags: ['Kushtorja (-se)', 'Dëshirat', 'Hipotezat']
    },
    C1: { 
      desc: 'AVANCUAR', 
      index: '05',
      preview: 'Kurrikula: Strukturat letrare akademike, gazetareske dhe pjesoret e ndërlikuara turke.', 
      focus: 'Fokusimi: Pjesoret & strukturat e ndërlikuara letrare turke (Sıfat-Fiiller).',
      tags: ['Sıfat-Fiiller', 'Letrare', 'Akademike']
    },
    C2: { 
      desc: 'PRANË GJUHËS AMTARE', 
      index: '06',
      preview: 'Kurrikula: Idiomat kulturore, shprehjet e urta popullore dhe huazimet e përbashkëta Ballkanike.', 
      focus: 'Fokusimi: Idiomat, shprehjet e urta popullore dhe huazimet e përbashkëta Ballkanike.',
      tags: ['Balkanizmat', 'Idiomat', 'Proverbat']
    }
  };

  const getLevelProgress = (level: string) => {
    const chapterList = levels[level] || [];
    if (chapterList.length === 0) return { completed: 0, total: 0, percentage: 0 };
    const completedCount = chapterList.filter(ch => {
      const progress = progressMap[ch.id];
      return progress?.is_completed === true;
    }).length;
    const percentage = Math.round((completedCount / chapterList.length) * 100);
    return { completed: completedCount, total: chapterList.length, percentage };
  };

  // Determine active incomplete level
  const getActiveLevelKey = () => {
    const keys = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    for (const key of keys) {
      const { percentage, total } = getLevelProgress(key);
      if (percentage < 100 && total > 0) {
        return key;
      }
    }
    return 'A1'; // Default fallback
  };

  const activeLevelKey = getActiveLevelKey();
  
  // State for active expanded accordion card
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  // Refs to accordion containers and cards
  const containerRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const cardRefs = useRef<Record<string, HTMLElement | null>>({});

  // 1. Staggered load entrance timeline animation
  useEffect(() => {
    anime.set('.hero-banner-anim', { opacity: 0 });
    anime.set('.stat-card-anim', { opacity: 0 });
    anime.set('.level-card-anim', { opacity: 0 });

    const tl = anime.timeline({ easing: 'easeOutCubic' });
    tl.add({
      targets: '.hero-banner-anim',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 500
    })
    .add({
      targets: '.stat-card-anim',
      translateY: [20, 0],
      opacity: [0, 1],
      scale: [0.97, 1],
      delay: anime.stagger(60),
      duration: 600,
      easing: 'easeOutElastic(1.1, 0.76)'
    }, '-=300')
    .add({
      targets: '.level-card-anim',
      translateX: [-25, 0],
      opacity: [0, 1],
      scale: [0.98, 1],
      delay: anime.stagger(60),
      duration: 600,
      easing: 'easeOutElastic(1.0, 0.8)',
      complete: () => {
        // Strip inline transforms from cards to ensure 3D tilt hover works
        const cards = document.querySelectorAll('.level-card-anim');
        cards.forEach((card) => {
          (card as HTMLElement).style.transform = '';
        });
      }
    }, '-=400');
  }, []);

  // 2. Active neon border rotation animation loop
  useEffect(() => {
    let angle = 0;
    let rId: number;
    const animateActiveBorders = () => {
      angle = (angle + 1.2) % 360;
      const activeCards = document.querySelectorAll('.level-card.active-glow');
      activeCards.forEach(card => {
        (card as HTMLElement).style.setProperty('--angle', `${angle}deg`);
      });
      rId = requestAnimationFrame(animateActiveBorders);
    };
    rId = requestAnimationFrame(animateActiveBorders);
    return () => cancelAnimationFrame(rId);
  }, []);

  // 3. 3D Tilt & Glare mouse listener effect
  useEffect(() => {
    const cards = document.querySelectorAll('.level-card:not(.locked)');
    
    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      const dx = x - xc;
      const dy = y - yc;
      
      // Milder 3D tilt angle (max 0.5 degrees) for premium touch
      const rotateX = -(dy / yc) * 0.5;
      const rotateY = (dx / xc) * 0.5;
      
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    const handleMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };
    
    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove as EventListener);
      card.addEventListener('mouseleave', handleMouseLeave as EventListener);
    });
    
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove as EventListener);
        card.removeEventListener('mouseleave', handleMouseLeave as EventListener);
      });
    };
  }, [chapters, selectedLevel]);

  // 4. Accordion heights transition listener
  const prevSelectedLevel = useRef<string | null>(selectedLevel);
  useEffect(() => {
    const prev = prevSelectedLevel.current;
    const curr = selectedLevel;
    
    if (prev && prev !== curr) {
      const container = containerRefs.current[prev];
      if (container) {
        const currentHeight = container.scrollHeight;
        container.style.maxHeight = currentHeight + 'px';
        anime.remove(container);
        anime({
          targets: container,
          maxHeight: [currentHeight, 0],
          opacity: [1, 0],
          duration: 250,
          easing: 'easeInOutCubic',
          complete: () => {
            container.style.maxHeight = '0px';
          }
        });
      }
    }
    
    if (curr && curr !== prev) {
      const container = containerRefs.current[curr];
      if (container) {
        container.style.maxHeight = 'none';
        const targetHeight = container.scrollHeight;
        container.style.maxHeight = '0px';
        container.style.opacity = '0';
        anime.remove(container);
        anime({
          targets: container,
          maxHeight: [0, targetHeight],
          opacity: [0, 1],
          duration: 350,
          easing: 'easeOutCubic',
          complete: () => {
            container.style.maxHeight = 'none';
          }
        });
        
        // Stagger chapter buttons with bounce
        const items = container.querySelectorAll('.ch-item');
        if (items.length > 0) {
          anime.remove(items);
          anime({
            targets: items,
            translateX: [-15, 0],
            opacity: [0, 1],
            scale: [0.96, 1],
            delay: anime.stagger(25),
            duration: 550,
            easing: 'easeOutElastic(1.1, 0.72)'
          });
        }
      }
    }
    
    prevSelectedLevel.current = selectedLevel;
  }, [selectedLevel]);

  const formatSessionTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    const pad = (num: number) => num.toString().padStart(2, '0');
    if (hrs > 0) {
      return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    }
    return `${pad(mins)}:${pad(secs)}`;
  };

  const formatLifetimeTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    let result = '';
    if (hrs > 0) result += `${hrs} ${hrs === 1 ? 'Orë' : 'Orë'} `;
    if (mins > 0 || hrs > 0) result += `${mins} ${mins === 1 ? 'Min' : 'Min'} `;
    result += `${secs} Sek`;
    return result;
  };

  const stats = useMemo(() => {
    const progressItems = Object.values(progressMap);
    const completedChapters = progressItems.filter(p => p.is_completed).length;
    const completionPercentage = chapters.length > 0 
      ? Math.round((completedChapters / chapters.length) * 100) 
      : 0;

    let balkanWordsMastered = 0;
    progressItems.forEach(p => {
      if (p.is_completed) {
        const vocab = ChapterRepository.getVocabularyForChapter(p.chapter_id);
        balkanWordsMastered += vocab.filter(v => v.is_shared_balkan_word === 1).length;
      }
    });

    return {
      completionPercentage,
      balkanWordsMastered,
      completedChapters
    };
  }, [chapters, progressMap]);

  const weeklyActivity = useMemo(() => {
    const progressItems = Object.values(progressMap);
    
    const days = [];
    const today = new Date();
    
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(today.getDate() - i);
      d.setHours(0, 0, 0, 0);
      
      const dayStart = d.getTime();
      const dayEnd = dayStart + 24 * 60 * 60 * 1000;
      
      const isActive = progressItems.some(item => {
        const ts = item.last_accessed_timestamp;
        return ts >= dayStart && ts < dayEnd;
      });
      
      const dayOfWeek = d.getDay();
      const abrvLabels = ['Die', 'Hën', 'Mar', 'Mër', 'Enj', 'Pre', 'Sht'];
      
      days.push({
        dateString: d.toLocaleDateString(),
        label: abrvLabels[dayOfWeek],
        isActive
      });
    }
    return days;
  }, [chapters, progressMap]);

  const getChapterStatus = (chapterId: number) => {
    const progress = progressMap[chapterId];
    if (!progress) {
      return { 
        label: 'E paprekur', 
        style: 'text-[#636B74] bg-white dark:bg-transparent border-[#DDE1E5] dark:border-neutral-800' 
      };
    }
    if (progress.is_completed) {
      return { 
        label: 'E Përfunduar', 
        style: 'text-[#2D4A36] bg-[#2D4A36]/10 border-[#2D4A36]/30' 
      };
    }
    return { 
      label: 'Në Zhvillim', 
      style: 'text-[#636B74] bg-neutral-100 dark:bg-neutral-800/50 border-[#DDE1E5] dark:border-neutral-800' 
    };
  };

  const isA2Completed = () => {
    const a2Chapters = levels['A2'] || [];
    if (a2Chapters.length === 0) return false;
    return a2Chapters.every(ch => {
      const progress = progressMap[ch.id];
      return progress?.is_completed === true;
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 relative min-h-[70vh]">
      
      {/* Giant Background Typography Watermark */}
      <div className="curriculum-watermark opacity-15 select-none">
        STUDIO
      </div>

      <div className="z-10 relative space-y-12">
        {/* Typographic Welcome Header */}
        <div className="text-left border-b border-[#DDE1E5] dark:border-neutral-800 pb-8 hero-banner-anim">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2.5">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 border border-[#111315] dark:border-neutral-800 bg-[#111315] dark:bg-neutral-900 text-[#FBFBF9] select-none">
                Ura e Gjuhës v1.0 Offline
              </span>
              <div className="flex items-center gap-1 border border-amber-500/20 bg-amber-500/5 px-2 py-0.5 rounded-lg select-none">
                <svg className="w-3.5 h-3.5 text-amber-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
                <span className="text-[9px] font-bold text-amber-600 dark:text-amber-400 font-mono">1 ditë</span>
              </div>
            </div>
            {userName && (
              <div className="flex items-center gap-2 select-none border border-[var(--color-border-primary-glass)] bg-[var(--color-bg-surface-glass)] px-2.5 py-1 rounded-full shadow-xs">
                <div className="w-4.5 h-4.5 rounded-full bg-[var(--color-brand-accent)] text-white text-[9px] font-black flex items-center justify-center">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <span className="text-[10px] font-bold text-[var(--color-text-secondary)]">
                  {userName}
                </span>
              </div>
            )}
          </div>

          {/* Visual Hero Banner */}
          <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative border border-[#DDE1E5] dark:border-neutral-800 shadow-sm bg-stone-950">
            <img 
              src="/ura_dashboard_hero.png" 
              alt="Ura e Gjuhës Hero" 
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase font-sans leading-none">
                  UDHËTIMI I DIJES SATE
                </h1>
                <p className="text-xs text-neutral-300 mt-1.5 max-w-lg font-normal">
                  Lidhja kulturore dhe gjuhësore mes Shqipërisë dhe Turqisë. Zgjidh kapitullin ku dëshiron të përqendrohesh sot.
                </p>
              </div>
            </div>
          </div>

          {/* Weekly Activity Grid */}
          <div className="mt-6 glass-panel p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/30 dark:bg-neutral-900/30 border border-[#DDE1E5] dark:border-neutral-855/40 rounded-2xl select-none">
            <div className="space-y-1 text-left">
              <span className="text-[9px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest block font-mono">AKTIVITETI JAVOR</span>
              <h4 className="text-xs font-black text-[#111315] dark:text-stone-300 uppercase tracking-tight">Vazhdimësia e Studimit</h4>
            </div>
            <div className="flex items-center gap-2.5">
              {weeklyActivity.map((day, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border text-[10px] font-bold transition-all duration-300 ${
                    day.isActive 
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-extrabold shadow-xs shadow-emerald-500/10 scale-105' 
                      : 'bg-white/40 dark:bg-neutral-900/40 border-neutral-200 dark:border-neutral-800/80 text-neutral-400 dark:text-neutral-500'
                  }`} title={day.dateString}>
                    {day.isActive ? '✓' : day.label.charAt(0)}
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-mono">
                    {day.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Frosted Stats Pedestal Row */}
          <div className="grid grid-cols-3 gap-4 mt-6 items-start">
            <div className="glass-panel p-4 flex flex-col justify-between select-none relative overflow-hidden bg-white/40 dark:bg-neutral-900/40 stat-card-anim">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-[var(--color-brand-accent)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="text-[9px] font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">Mësimi</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-extrabold text-[var(--color-text-primary)]">{stats.completionPercentage}%</span>
              </div>
              <p className="text-[9px] text-[var(--color-text-secondary)] font-light mt-1">
                {stats.completedChapters}/{chapters.length} kapituj kryer
              </p>
            </div>

            {/* Session Timer Card (Option 4) */}
            <div 
              ref={timerCardRef}
              onClick={() => setIsTimerExpanded(!isTimerExpanded)}
              className={`glass-panel p-4 flex flex-col justify-between select-none relative overflow-hidden bg-white/40 dark:bg-neutral-900/40 stat-card-anim cursor-pointer transition-all duration-300 ${
                isTimerExpanded ? 'ring-2 ring-[#3A5A40] border-[#3A5A40] shadow-md scale-[1.01]' : 'hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <svg className={`w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 ${isSessionRunning ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span className="text-[9px] font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">Koha e Mësimit</span>
                      {/* Status badge */}
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        hasSavedSession 
                          ? 'bg-amber-500 animate-pulse' 
                          : isSessionRunning 
                            ? 'bg-emerald-500 animate-pulse' 
                            : 'bg-neutral-400'
                      }`} />
                    </div>
                    
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-xl font-extrabold text-[var(--color-text-primary)] font-technical tracking-wide">
                        {formatSessionTime(isTimerExpanded ? sessionSeconds : staticSessionSeconds)}
                      </span>
                      <span className="text-[9px] font-bold text-[var(--color-text-secondary)] uppercase">Sesioni</span>
                    </div>
                  </div>

                  {/* Circular progress track */}
                  <div className="relative w-10 h-10 shrink-0 ml-2">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 40 40">
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        className="stroke-neutral-200/50 dark:stroke-neutral-800"
                        strokeWidth="3.5"
                        fill="transparent"
                      />
                      <circle
                        cx="20"
                        cy="20"
                        r="16"
                        className="stroke-emerald-500 dark:stroke-emerald-400"
                        strokeWidth="3.5"
                        fill="transparent"
                        strokeDasharray={100.53} // 2 * Math.PI * 16
                        strokeDashoffset={100.53 - (Math.min(((isTimerExpanded ? sessionSeconds : staticSessionSeconds) / 1800) * 100, 100) / 100) * 100.53}
                        style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-[8px] font-black text-emerald-600 dark:text-emerald-400 font-mono">
                      {Math.min(Math.round(((isTimerExpanded ? sessionSeconds : staticSessionSeconds) / 1800) * 100), 100)}%
                    </div>
                  </div>
                </div>
                
                <p className="text-[9px] text-[var(--color-text-secondary)] font-light mt-0.5">
                  {hasSavedSession ? 'Sesion i pezulluar' : isSessionRunning ? 'Duke numëruar kohën...' : 'Kohëmatësi i ndaluar'}
                </p>
              </div>

              {/* Expandable part */}
              {isTimerExpanded && (
                <div 
                  className="mt-4 pt-4 border-t border-[#DDE1E5] dark:border-neutral-800 space-y-4 text-left cursor-default animate-fade-in"
                  onClick={(e) => e.stopPropagation()} // Prevent card closing when clicking buttons
                >
                  <div className="space-y-1">
                    <span className="text-[8px] font-bold text-neutral-400 uppercase tracking-widest block">Koha e Plotë e Kaluar</span>
                    <span className="text-xs font-black text-[#3A5A40] dark:text-[#52B788] block font-sans">
                      {formatLifetimeTime(lifetimeSeconds)}
                    </span>
                  </div>

                  <p className="text-[10px] text-neutral-500 leading-relaxed font-light">
                    Ky panel regjistron kohën tuaj të studimit. Ndalohet automatikisht kur dilni nga aplikacioni.
                  </p>

                  {/* Actions / Prompts */}
                  {hasSavedSession ? (
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 space-y-2">
                      <span className="text-[9px] font-bold text-amber-800 dark:text-amber-300 block">Keni një sesion të pambaruar!</span>
                      <div className="flex flex-col gap-1.5">
                        <button
                          onClick={() => {
                            resumeSession();
                          }}
                          className="w-full py-1.5 bg-[#3A5A40] hover:bg-[#2C4430] active:scale-95 transition text-white font-bold text-[9px] uppercase tracking-wider rounded-lg cursor-pointer text-center"
                        >
                          Vazhdo Sesionin
                        </button>
                        <button
                          onClick={() => {
                            resetSession();
                          }}
                          className="w-full py-1.5 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 active:scale-95 transition text-neutral-700 dark:text-neutral-300 font-bold text-[9px] uppercase tracking-wider rounded-lg cursor-pointer text-center"
                        >
                          Fillo nga e para
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={toggleSession}
                        className={`flex-grow flex items-center justify-center gap-1 py-2 font-bold text-[9px] uppercase tracking-wider rounded-lg transition active:scale-95 cursor-pointer ${
                          isSessionRunning 
                            ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                            : 'bg-[#3A5A40] hover:bg-[#2C4430] text-white'
                        }`}
                      >
                        {isSessionRunning ? (
                          <>
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                              <rect x="6" y="4" width="4" height="16" rx="1" />
                              <rect x="14" y="4" width="4" height="16" rx="1" />
                            </svg>
                            Pezullo
                          </>
                        ) : (
                          <>
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                              <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                            Fillo
                          </>
                        )}
                      </button>
                      
                      <button
                        onClick={resetSession}
                        className="flex-grow flex items-center justify-center gap-1 py-2 bg-neutral-150 hover:bg-neutral-250 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 font-bold text-[9px] uppercase tracking-wider rounded-lg transition active:scale-95 cursor-pointer"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21.5 2v6h-6" />
                          <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                        </svg>
                        Rikujto
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="glass-panel p-4 flex flex-col justify-between select-none relative overflow-hidden bg-white/40 dark:bg-neutral-900/40 stat-card-anim">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-amber-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
                  <path d="M12 2a6 6 0 0 1 6 6v5H6V8a6 6 0 0 1 6-6z" />
                </svg>
                <span className="text-[9px] font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">Synimi</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-extrabold text-[var(--color-text-primary)]">{activeLevelKey}</span>
              </div>
              <p className="text-[9px] text-[var(--color-text-secondary)] font-light mt-1">
                Niveli aktual aktiv
              </p>
            </div>
          </div>
        </div>

        {/* Curved learning path roadmap container */}
        <div className="space-y-4 pt-4">
          <h2 className="text-xs font-mono font-bold tracking-widest text-[#636B74] uppercase select-none mb-6">
            Rruga e Ndërtimit të Urave (Learning Path)
          </h2>
          
          <div className="relative px-4 md:px-8 space-y-8 py-2 levels-perspective">
            {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map((level) => {
              const syllabus = levelSyllabus[level];
              const { completed, total, percentage } = getLevelProgress(level);
              
              const isCompleted = percentage === 100;
              const isCurrentExpanded = selectedLevel === level;
              const locked = (levels[level] || []).length === 0;
              
              return (
                <div key={level} className="relative">
                  
                  {/* Staggered container wrapper */}
                  <div className="transition-all duration-500 transform">

                    <article
                      id={`card-${level}`}
                      ref={(el) => { cardRefs.current[level] = el; }}
                      className={`level-card level-card-anim dashboard-card-transition w-full text-left relative overflow-hidden ${
                        locked ? 'locked' : ''
                      } ${
                        isCurrentExpanded 
                          ? 'active-glow border-2 border-[var(--color-brand-accent)] shadow-elevated' 
                          : isCompleted 
                            ? 'border border-[var(--color-brand-success)]/30 shadow-xs hover:shadow-md' 
                            : 'border border-[var(--color-border-primary-glass)] bg-[var(--color-bg-surface-glass)]/35 shadow-xs hover:shadow-md'
                      }`}
                      style={{ '--glow-color': `var(--lv-${level.toLowerCase()})` } as React.CSSProperties}
                    >
                      <div className="border-glow"></div>
                      <div className="lv-stripe" style={{ background: `var(--lv-${level.toLowerCase()})` }} aria-hidden="true"></div>
                      <div className="lv-watermark" aria-hidden="true">{level}</div>

                      {/* Clickable Header Info block */}
                      <div
                        role="button"
                        tabIndex={locked ? -1 : 0}
                        onClick={() => {
                          if (!locked) {
                            setSelectedLevel(isCurrentExpanded ? null : level);
                          }
                        }}
                        onKeyDown={(e) => {
                          if (!locked && (e.key === 'Enter' || e.key === ' ')) {
                            e.preventDefault();
                            setSelectedLevel(isCurrentExpanded ? null : level);
                          }
                        }}
                        className="level-inner p-5 cursor-pointer select-none"
                      >
                        <div className="flex justify-between items-center flex-wrap gap-2 w-full">
                          <span className={`font-mono font-bold tracking-wider text-[var(--color-text-primary)] uppercase flex items-center gap-2 transition-all duration-300 ${
                            isCurrentExpanded ? 'text-sm' : 'text-xs'
                          }`}>
                            <UraIcon className={`transition-all duration-300 ${
                              isCurrentExpanded 
                                ? 'w-4 h-4 text-[var(--color-brand-accent)]' 
                                : isCompleted 
                                  ? 'w-3.5 h-3.5 text-[var(--color-brand-success)]' 
                                  : 'w-3.5 h-3.5 text-[var(--color-text-secondary)] opacity-50'
                            }`} />
                            {syllabus.index}. NIVELI {level} — {syllabus.desc}
                          </span>
                          {isCurrentExpanded ? (
                            <span className="px-2.5 py-1 text-[9px] uppercase font-mono tracking-wider font-black bg-[var(--color-brand-accent)] text-white select-none rounded-lg flex items-center gap-1 shadow-sm">
                              Mbyll
                              <svg className="w-3 h-3 stroke-white fill-none" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="18 15 12 9 6 15" />
                              </svg>
                            </span>
                          ) : isCompleted ? (
                            <span className="text-[9px] uppercase font-mono tracking-wider font-black px-2.5 py-1 border border-emerald-500/20 text-emerald-600 bg-emerald-500/10 dark:text-emerald-400 dark:bg-emerald-500/10 select-none rounded-lg flex items-center gap-1 shadow-xs">
                              Kryer
                              <svg className="w-3 h-3 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </span>
                          ) : locked ? (
                            <span className="text-[9px] uppercase font-mono tracking-wider font-black px-2.5 py-1 border border-neutral-200 dark:border-neutral-800 text-neutral-400 dark:text-neutral-500 bg-neutral-100/50 dark:bg-neutral-900/40 select-none rounded-lg flex items-center gap-1">
                              Kyçur
                              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                              </svg>
                            </span>
                          ) : (
                            <span className="text-[9px] uppercase font-mono tracking-wider font-black px-2.5 py-1 border border-[var(--color-brand-accent)]/20 text-[var(--color-brand-accent)] bg-[var(--color-brand-accent-light)] select-none rounded-lg flex items-center gap-1 shadow-xs hover:border-[var(--color-brand-accent)] transition-colors">
                              Hap
                              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9" />
                              </svg>
                            </span>
                          )}
                        </div>

                        <div className="mt-4">
                          <p className="text-xs md:text-sm text-[var(--color-text-primary)] opacity-90 leading-relaxed mb-4">
                            {syllabus.preview}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {syllabus.tags.map((tag, tIdx) => (
                              <span 
                                key={tIdx} 
                                className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border text-[var(--color-brand-accent)] border-[var(--color-brand-accent)]/20 bg-[var(--color-brand-accent-light)] select-none"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {!locked && (
                            <div className="space-y-2 mt-auto w-full pt-2">
                              <div className="flex justify-between items-center text-[10px] font-mono text-[var(--color-text-secondary)] font-semibold select-none">
                                <span>Përparimi: {completed} nga {total} mësime të përfunduara</span>
                                <span className="font-bold text-[var(--color-text-primary)]">{percentage}%</span>
                              </div>
                              <div className="w-full bg-neutral-200/50 dark:bg-stone-900/60 h-1.5 rounded-full overflow-hidden relative border border-neutral-200/20 dark:border-neutral-800/30 mt-1">
                                <div 
                                  className="bg-gradient-to-r from-teal-500 to-[var(--color-brand-accent)] h-full rounded-full transition-all duration-500"
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Collapsible Accordion Chapters Grid */}
                      {!locked && (
                        <div
                          id={`chapters-${level}`}
                          ref={(el) => { containerRefs.current[level] = el; }}
                          className={`chapters-wrap px-6 pb-6 ${isCurrentExpanded ? 'open' : ''}`}
                        >
                          <hr className="border-[var(--color-border-primary-glass)] mb-4 w-full" />
                          <div className="chapters-grid">
                            {(levels[level] || []).map((ch) => {
                              const status = getChapterStatus(ch.id);
                              return (
                                <button
                                  key={ch.id}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    loadChapter(ch.id);
                                  }}
                                  className="ch-item"
                                  aria-label={`Mësimi ${ch.order_index}: ${ch.title_turkish} — ${status.label}`}
                                >
                                  <div className="ch-body">
                                    <div className="ch-num">Mësimi {ch.order_index}</div>
                                    <div className="ch-title">{ch.title_turkish}</div>
                                    <div className="ch-sub">{ch.title_albanian}</div>
                                  </div>
                                  <div className={`ch-badge ${status.label === 'E Përfunduar' ? 'ch-done' : 'ch-pending'}`}>
                                    {status.label === 'E Përfunduar' ? '✓' : `K${ch.order_index}`}
                                  </div>
                                </button>
                              );
                            })}
                          </div>

                          {/* A2 Finishing Test rendering */}
                          {level === 'A2' && (
                            <div className="mt-8 border-t border-[var(--color-border-primary-glass)] pt-6">
                              {(() => {
                                const completedAll = isA2Completed();
                                const hasPassed = localStorage.getItem('ura_a2_test_passed') === 'true';
                                const testScore = localStorage.getItem('ura_a2_test_score');

                                return (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActivePage('a2_test');
                                    }}
                                    className={`w-full text-left p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 relative outline-hidden border cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5 ${
                                      hasPassed 
                                        ? 'bg-gradient-to-r from-emerald-500/10 to-teal-500/5 border-emerald-500/30 dark:border-emerald-500/20' 
                                        : completedAll 
                                          ? 'bg-gradient-to-r from-amber-500/10 to-yellow-500/5 border-amber-500/40 dark:border-amber-500/30'
                                          : 'bg-neutral-50/50 dark:bg-neutral-900/30 border-neutral-200 dark:border-neutral-800'
                                    }`}
                                  >
                                    <div className="flex-1 space-y-2">
                                      <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-[9px] font-mono font-bold tracking-wider px-2.5 py-0.5 bg-[#111315] dark:bg-neutral-900 text-stone-300 border border-neutral-700 rounded-md select-none">
                                          PROVIMI PËRFUNDIMTAR A2
                                        </span>
                                        {!completedAll && (
                                          <span className="text-[9px] uppercase font-mono tracking-wider font-black px-2 py-0.5 border border-amber-500/20 text-amber-600 bg-amber-500/10 rounded-md select-none">
                                            Sfidë e Hapur
                                          </span>
                                        )}
                                        {completedAll && !hasPassed && (
                                          <span className="text-[9px] uppercase font-mono tracking-wider font-black px-2 py-0.5 border border-emerald-500/20 text-emerald-600 bg-emerald-500/10 rounded-md select-none animate-pulse">
                                            Gati për Test
                                          </span>
                                        )}
                                        {hasPassed && (
                                          <span className="text-[9px] uppercase font-mono tracking-wider font-black px-2 py-0.5 border border-emerald-500/30 text-white bg-emerald-600 rounded-md select-none">
                                            Kaluar — {testScore}%
                                          </span>
                                        )}
                                      </div>

                                      <h3 className="text-base font-black text-[#111315] dark:text-white uppercase tracking-tight">
                                        Provimi Gjithëpërfshirës i Nivelit A2
                                      </h3>
                                      <p className="text-xs text-[#636B74] dark:text-neutral-400 font-light leading-relaxed max-w-xl">
                                        {completedAll
                                          ? 'Ju keni përfunduar të gjithë kapitujt e nivelit A2! Testoni njohuritë tuaja leximore, gramatikore, sintaksore dhe të përkthimit në këtë provim përfundimtar me 25 pyetje.'
                                          : 'Kapitujt e nivelit A2 nuk janë përfunduar plotësisht, por ju mund të hyni në provim për të testuar njohuritë tuaja në çdo kohë.'}
                                      </p>
                                    </div>

                                    <div className="flex items-center gap-3 shrink-0">
                                      <div className={`w-12 h-12 flex items-center justify-center rounded-2xl shadow-sm ${
                                        hasPassed 
                                          ? 'bg-emerald-500/10 border border-emerald-500/20' 
                                          : completedAll 
                                            ? 'bg-amber-500/15 border border-amber-500/30' 
                                            : 'bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700'
                                      }`}>
                                        <svg 
                                          className={`w-6 h-6 ${
                                            hasPassed 
                                              ? 'text-emerald-500 drop-shadow-[0_2px_4px_rgba(16,185,129,0.3)]' 
                                              : completedAll 
                                                ? 'text-amber-500 animate-bounce drop-shadow-[0_2px_4px_rgba(245,158,11,0.3)]' 
                                                : 'text-neutral-400'
                                          }`} 
                                          style={completedAll && !hasPassed ? { animationDuration: '2.5s' } : undefined}
                                          viewBox="0 0 24 24" 
                                          fill="none" 
                                          stroke="currentColor" 
                                          strokeWidth="2.2" 
                                          strokeLinecap="round" 
                                          strokeLinejoin="round"
                                        >
                                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                                          <path d="M4 22h16" />
                                          <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
                                          <path d="M12 2a6 6 0 0 1 6 6v5H6V8a6 6 0 0 1 6-6z" />
                                        </svg>
                                      </div>
                                    </div>
                                  </button>
                                );
                              })()}
                            </div>
                          )}
                        </div>
                      )}
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Academic Footer Info */}
        <div className="border-t border-[#DDE1E5] dark:border-neutral-800 pt-8 text-center select-none text-[10px] text-[#636B74] font-light leading-relaxed">
          <p>Programi është optimizuar plotësisht për përpunim lokal, pa server.</p>
        </div>
      </div>
    </div>
  );
};
