import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLesson } from '../../../application/state/LessonContext';
import type { Chapter } from '../../../infrastructure/db/seedData';
import { ProgressRepository } from '../../../infrastructure/repository/ProgressRepository';



export default function JourneyDashboard() {
  const { chapters, loadChapter, userName, setActivePage } = useLesson();
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);

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

  // Track absolute scroll progress inside this container (0.0 to 1.0)
  const { scrollYProgress } = useScroll({
    container: containerRef
  });

  // --- PARALLAX & CAMERA MOVEMENT TIMELINES ---

  // 1. Sky Gradient Opacities (Stacked fades simulating morning to night transition)
  const morningOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 0, 0]);
  const daytimeOpacity = useTransform(scrollYProgress, [0, 0.15, 0.45, 0.6], [0, 1, 1, 0]);
  const sunsetOpacity = useTransform(scrollYProgress, [0.45, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const nightOpacity = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 0, 1]);

  // 2. Camera Drop Parallax — dead-zone of 0.03 so no animation fires on mount
  const skylineY = useTransform(scrollYProgress, [0.03, 0.18], ["15%", "0%"]);
  const skylineX = useTransform(scrollYProgress, [0.18, 1], ["0%", "-8%"]);

  const bridgeY = useTransform(scrollYProgress, [0.03, 0.18], ["35%", "0%"]);
  const bridgeX = useTransform(scrollYProgress, [0.18, 1], ["0%", "-35%"]);

  const cliffY = useTransform(scrollYProgress, [0.03, 0.18], ["0%", "-60%"]);
  const cliffX = useTransform(scrollYProgress, [0.03, 0.18], ["0%", "-110%"]);

  const sailboatX = useTransform(scrollYProgress, [0.18, 1], ["50%", "-150%"]); // Sailboat sails in opposite direction

  // Get active progress information per level
  const getLevelProgress = (level: string) => {
    const chapterList = levels[level] || [];
    if (chapterList.length === 0) return { completed: 0, total: 0, percentage: 0 };
    const completedCount = chapterList.filter(ch => {
      const progress = ProgressRepository.getChapterProgress(ch.id);
      return progress?.is_completed === true;
    }).length;
    const percentage = Math.round((completedCount / chapterList.length) * 100);
    return { completed: completedCount, total: chapterList.length, percentage };
  };

  const getChapterStatus = (chapterId: number) => {
    const progress = ProgressRepository.getChapterProgress(chapterId);
    if (!progress) {
      return { 
        label: 'E paprekur', 
        style: 'text-[#636B74] bg-white/20 dark:bg-black/20 border-[#DDE1E5] dark:border-neutral-800' 
      };
    }
    if (progress.is_completed) {
      return { 
        label: 'E Përfunduar', 
        style: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30' 
      };
    }
    return { 
      label: 'Në Zhvillim', 
      style: 'text-amber-500 bg-amber-500/10 border-amber-500/30' 
      };
  };

  return (
    <div 
      className="h-screen w-full overflow-y-scroll bg-stone-950 relative no-scrollbar"
      ref={containerRef}
    >
      {/* ================= STICKY VISUAL ENGINE BACKGROUND ================= */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-10 select-none">
        
        {/* Layer 1: Sky gradients (Stacked for sunrise-to-night fades) */}
        <div className="absolute inset-0 w-full h-full gpu-accelerated">
          {/* Sunrise */}
          <motion.div 
            style={{ opacity: morningOpacity }} 
            className="absolute inset-0 bg-gradient-to-b from-[#FFA781] via-[#FFD29D] to-[#FFE8C5]" 
          />
          {/* Daytime */}
          <motion.div 
            style={{ opacity: daytimeOpacity }} 
            className="absolute inset-0 bg-gradient-to-b from-[#4A86E8] via-[#89B4FA] to-[#C7E0FF]" 
          />
          {/* Sunset */}
          <motion.div 
            style={{ opacity: sunsetOpacity }} 
            className="absolute inset-0 bg-gradient-to-b from-[#D946EF] via-[#F59E0B] to-[#FFEAA7]" 
          />
          {/* Night */}
          <motion.div 
            style={{ opacity: nightOpacity }} 
            className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#111827] to-[#1F2937]" 
          />
        </div>

        {/* Parallax Layer Skyline / Distant Mountains */}
        <motion.div 
          style={{ x: skylineX, y: skylineY }} 
          className="absolute left-0 bottom-[30%] w-[120%] h-48 opacity-45 gpu-accelerated"
        >
          <svg className="w-[120%] h-full fill-stone-700/30" viewBox="0 0 1200 200" preserveAspectRatio="none">
            <path d="M0,150 L50,130 L100,160 L150,140 L200,170 L250,120 L300,150 L350,110 L400,160 L450,130 L500,170 L550,140 L600,180 L650,150 L700,160 L750,120 L800,150 L850,110 L900,160 L950,130 L1000,170 L1050,140 L1100,180 L1150,150 L1200,170 L1200,200 L0,200 Z" />
          </svg>
        </motion.div>

        {/* Parallax Layer 2: Midground Water & Bridge Deck (Scroll-driven horizontal slide) */}
        <motion.div 
          style={{ x: bridgeX, y: bridgeY }} 
          className="absolute left-0 bottom-0 h-[35%] w-[150%] flex items-end gpu-accelerated"
        >
          {/* Sea / Water base */}
          <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-stone-900/60 to-stone-800/20" />
          
          {/* SVG Bridge representation */}
          <div className="w-[150%] h-56 relative flex items-end opacity-80">
            <svg className="w-full h-full stroke-stone-600/40 fill-none" viewBox="0 0 2000 200" preserveAspectRatio="none" strokeWidth="2">
              {/* Bridge pillars */}
              <line x1="200" y1="50" x2="200" y2="200" strokeWidth="5" />
              <line x1="800" y1="20" x2="800" y2="200" strokeWidth="6" />
              <line x1="1400" y1="20" x2="1400" y2="200" strokeWidth="6" />
              
              {/* Cable suspension curves */}
              <path d="M 0,90 Q 200,50 500,110" />
              <path d="M 500,110 Q 800,20 1100,110" />
              <path d="M 1100,110 Q 1400,20 1700,110" />
              <path d="M 1700,110 Q 1850,70 2000,90" />
              
              {/* Vertical bridge hangers */}
              <line x1="100" y1="80" x2="100" y2="150" />
              <line x1="300" y1="70" x2="300" y2="150" />
              <line x1="400" y1="90" x2="400" y2="150" />
              <line x1="600" y1="95" x2="600" y2="150" />
              <line x1="700" y1="65" x2="700" y2="150" />
              <line x1="900" y1="65" x2="900" y2="150" />
              <line x1="1000" y1="95" x2="1000" y2="150" />
              <line x1="1200" y1="90" x2="1200" y2="150" />
              <line x1="1300" y1="65" x2="1300" y2="150" />
              <line x1="1500" y1="65" x2="1500" y2="150" />
              
              {/* Main deck road line */}
              <line x1="0" y1="150" x2="2000" y2="150" stroke="var(--color-brand-accent)" strokeWidth="4" />
            </svg>
          </div>
        </motion.div>

        {/* Parallax Layer 4: Sailboat floating on the sea */}
        <motion.div
          style={{ x: sailboatX }}
          className="absolute bottom-[10%] h-8 w-12 gpu-accelerated opacity-60"
        >
          <svg viewBox="0 0 64 64" className="w-full h-full fill-stone-500">
            <path d="M 10,45 L 54,45 L 44,55 L 20,55 Z" />
            <path d="M 32,10 L 32,45 L 12,40 Z" />
            <path d="M 35,15 L 35,45 L 48,42 Z" />
          </svg>
        </motion.div>

        {/* Parallax Layer 3: Foreground Albanian side rocky cliff (Slides away on scroll) */}
        <motion.div 
          style={{ x: cliffX, y: cliffY }} 
          className="absolute left-0 bottom-0 w-[55%] h-screen flex flex-col justify-center p-16 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent gpu-accelerated"
        >
          <div className="max-w-xs space-y-4">
            <h2 className="text-4xl font-black text-white uppercase tracking-tight font-sans leading-none">
              Ura e Gjuhës
            </h2>
            <p className="text-xs text-stone-300 leading-relaxed font-light">
              Mirë se vini në udhëtimin tuaj. Rrotulloni mouse-in ose rrëshqitni poshtë për të zbritur nga shkëmbinjtë dhe për të kaluar urën.
            </p>
            <div className="flex items-center gap-1 text-[10px] font-bold text-[var(--color-brand-accent)] uppercase tracking-widest animate-pulse">
              <span>Rrotullo poshtë</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Static Header HUD */}
        <div className="absolute top-8 left-8 right-8 flex justify-between items-center z-40">
          <button
            onClick={() => setActivePage('lessons')}
            className="flex items-center gap-1.5 px-4 py-2 border border-white/10 bg-black/40 text-xs font-bold text-stone-300 uppercase tracking-widest rounded-xl hover:bg-black/60 hover:text-white transition duration-200 cursor-pointer pointer-events-auto"
          >
            [← Dashboard Klasik]
          </button>
          {userName && (
            <div className="flex items-center gap-2 border border-white/10 bg-black/40 px-3 py-1.5 rounded-full">
              <div className="w-4 h-4 rounded-full bg-[var(--color-brand-accent)] text-white text-[8px] font-black flex items-center justify-center">
                {userName.charAt(0).toUpperCase()}
              </div>
              <span className="text-[10px] font-bold text-stone-300 uppercase tracking-wide">
                Udhëtar: {userName}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* ================= INTERACTIVE TIER SCROLL SECTIONS ================= */}
      <div className="relative z-30 w-full">
        
        {/* SECTION 1: Intro Overview Landing frame */}
        <section className="h-[120vh] w-full shrink-0 pointer-events-none" />

        {/* SECTION 2: A1 level card */}
        <ScrollContainerSection>
          <LevelCard 
            tier="A1" 
            title="FILLESTAR" 
            progress={getLevelProgress('A1')}
            chaptersList={levels['A1']}
            getChapterStatus={getChapterStatus}
            loadChapter={loadChapter}
            expanded={expandedLevel === 'A1'}
            onToggle={() => setExpandedLevel(expandedLevel === 'A1' ? null : 'A1')}
          />
        </ScrollContainerSection>

        {/* SECTION 3: A2 level card */}
        <ScrollContainerSection>
          <LevelCard 
            tier="A2" 
            title="ELEMENTAR" 
            progress={getLevelProgress('A2')}
            chaptersList={levels['A2']}
            getChapterStatus={getChapterStatus}
            loadChapter={loadChapter}
            expanded={expandedLevel === 'A2'}
            onToggle={() => setExpandedLevel(expandedLevel === 'A2' ? null : 'A2')}
          />
        </ScrollContainerSection>

        {/* SECTION 4: B1 level card */}
        <ScrollContainerSection>
          <LevelCard 
            tier="B1" 
            title="NDËRMJETËM" 
            progress={getLevelProgress('B1')}
            chaptersList={levels['B1']}
            getChapterStatus={getChapterStatus}
            loadChapter={loadChapter}
            expanded={expandedLevel === 'B1'}
            onToggle={() => setExpandedLevel(expandedLevel === 'B1' ? null : 'B1')}
          />
        </ScrollContainerSection>

        {/* SECTION 5: B2 level card */}
        <ScrollContainerSection>
          <LevelCard 
            tier="B2" 
            title="NDËRMJETËM I LARTË" 
            progress={getLevelProgress('B2')}
            chaptersList={levels['B2']}
            getChapterStatus={getChapterStatus}
            loadChapter={loadChapter}
            expanded={expandedLevel === 'B2'}
            onToggle={() => setExpandedLevel(expandedLevel === 'B2' ? null : 'B2')}
          />
        </ScrollContainerSection>

        {/* SECTION 6: C1 level card */}
        <ScrollContainerSection>
          <LevelCard 
            tier="C1" 
            title="AVANCUAR" 
            progress={getLevelProgress('C1')}
            chaptersList={levels['C1']}
            getChapterStatus={getChapterStatus}
            loadChapter={loadChapter}
            expanded={expandedLevel === 'C1'}
            onToggle={() => setExpandedLevel(expandedLevel === 'C1' ? null : 'C1')}
          />
        </ScrollContainerSection>

        {/* SECTION 7: C2 level card */}
        <ScrollContainerSection>
          <LevelCard 
            tier="C2" 
            title="PRANË GJUHËS AMTARE" 
            progress={getLevelProgress('C2')}
            chaptersList={levels['C2']}
            getChapterStatus={getChapterStatus}
            loadChapter={loadChapter}
            expanded={expandedLevel === 'C2'}
            onToggle={() => setExpandedLevel(expandedLevel === 'C2' ? null : 'C2')}
          />
        </ScrollContainerSection>

      </div>
    </div>
  );
}

// Layout wrapper section to center the pinned card container on the left side
function ScrollContainerSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-[160vh] w-full shrink-0 flex items-center justify-start px-8 md:px-24 pointer-events-none relative z-30">
      {children}
    </section>
  );
}

interface LevelCardProps {
  tier: string;
  title: string;
  progress: { completed: number; total: number; percentage: number };
  chaptersList: Chapter[];
  getChapterStatus: (id: number) => { label: string; style: string };
  loadChapter: (id: number) => void;
  expanded: boolean;
  onToggle: () => void;
}

// Glassmorphic Card Shell with collapsible Accordion of Chapters
function LevelCard({ 
  tier, 
  title, 
  progress, 
  chaptersList, 
  getChapterStatus, 
  loadChapter, 
  expanded, 
  onToggle 
}: LevelCardProps) {
  return (
    <div className="glass-panel w-full max-w-md p-6 bg-black/60 border border-white/10 text-white rounded-2xl pointer-events-auto shadow-elevated flex flex-col justify-between max-h-[85vh] transition-all duration-300">
      <div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] font-bold text-[var(--color-brand-accent)] uppercase tracking-widest font-mono">
            Niveli {tier}
          </span>
          <span className="text-[10px] font-bold text-stone-400 font-mono">
            {progress.completed}/{progress.total} Mësime ({progress.percentage}%)
          </span>
        </div>

        <h3 className="text-xl font-black uppercase tracking-tight mb-2">
          {title}
        </h3>

        {/* Progress bar */}
        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-5">
          <div 
            className="bg-gradient-to-r from-teal-500 to-[var(--color-brand-accent)] h-full rounded-full transition-all duration-500"
            style={{ width: `${progress.percentage}%` }}
          />
        </div>

        {/* Action Toggle to Expand Chapters */}
        <button
          onClick={onToggle}
          className="w-full py-2.5 px-4 text-center text-xs font-bold uppercase tracking-widest rounded-xl border border-white/20 hover:border-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent-light)] transition duration-200 cursor-pointer flex items-center justify-center gap-2 mb-4"
        >
          <span>{expanded ? 'Msheh Mësimet ▲' : 'Shfaq Mësimet ▼'}</span>
        </button>

        {/* Expandable Accordion List of Chapters */}
        <div className={`overflow-y-auto no-scrollbar transition-all duration-300 ease-in-out ${
          expanded ? 'max-h-[40vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="space-y-3 pr-1 py-1">
            {chaptersList.map((ch) => {
              const status = getChapterStatus(ch.id);
              return (
                <button
                  key={ch.id}
                  onClick={() => loadChapter(ch.id)}
                  className="w-full text-left p-3.5 border border-white/5 bg-white/5 rounded-xl hover:border-[var(--color-brand-accent)] hover:bg-white/10 transition duration-200 flex items-center justify-between gap-3 cursor-pointer outline-hidden group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center w-full mb-1">
                      <span className="text-[9px] font-mono font-bold text-teal-400 uppercase tracking-wide">
                        Mësimi {ch.order_index}
                      </span>
                      <span className={`text-[8px] uppercase font-bold tracking-wider px-1.5 py-0.5 border rounded-md ${status.style}`}>
                        {status.label}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold truncate uppercase tracking-tight text-white group-hover:text-teal-400 transition-colors">
                      {ch.title_turkish}
                    </h4>
                    <span className="text-[10px] text-stone-400 italic block truncate">
                      {ch.title_albanian}
                    </span>
                  </div>
                  <div className="w-8 h-8 shrink-0 flex items-center justify-center bg-white/5 rounded-lg border border-white/10 font-mono font-bold text-[10px] text-teal-400">
                    K{ch.order_index}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
