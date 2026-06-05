import React, { useState } from 'react';
import { LessonProvider, useLesson } from './application/state/LessonContext';
import { LessonDashboard } from './presentation/components/layout/LessonDashboard';
import { ChapterContainer } from './presentation/components/layout/ChapterContainer';
import { DictionaryPage } from './presentation/components/layout/DictionaryPage';
import { PlaygroundPage } from './presentation/components/layout/PlaygroundPage';
import { ProgressPage } from './presentation/components/layout/ProgressPage';
import { Logo } from './presentation/components/common/Logo';
import { WelcomePage } from './presentation/components/layout/WelcomePage';
import { SplashScreen } from './presentation/components/layout/SplashScreen';
import { VocabularyBuilderPage } from './presentation/components/layout/VocabularyBuilderPage';
import { A2FinishingTestPage } from './presentation/components/layout/A2FinishingTestPage';
const HomeIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const BookOpenIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const SearchIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const BooksIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="8" y1="6" x2="16" y2="6" strokeWidth="2" opacity="0.6" />
    <line x1="8" y1="10" x2="16" y2="10" strokeWidth="2" opacity="0.6" />
  </svg>
);

const LightningIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const BarChartIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);


const MainLayout: React.FC = () => {
  const [showSplash, setShowSplash] = useState<boolean>(true);

  const { 
    currentChapter, 
    activePage, 
    setActivePage, 
    theme, 
    toggleTheme, 
    activeSection, 
    setActiveSection 
  } = useLesson();

  
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(true); // Starts collapsed (1cm space)

  const navItems = [
    { id: 'lessons', label: 'Dashboard', icon: <HomeIcon className="w-5 h-5" />, desc: 'Kapitujt e Studimit' },
    { id: 'lesson_active', label: 'Kapitulli Aktiv', icon: <BookOpenIcon className="w-5 h-5" />, desc: 'Mësimi aktual', disabled: !currentChapter },
    { id: 'dictionary', label: 'Fjalori', icon: <SearchIcon className="w-5 h-5" />, desc: 'Balkanizmat e përbashkët' },
    { id: 'vocab_builder', label: 'Fjalorthi Tematik', icon: <BooksIcon className="w-5 h-5" />, desc: 'Fjalët A1 & A2' },
    { id: 'playground', label: 'Playground', icon: <LightningIcon className="w-5 h-5" />, desc: 'Motorri Aglutinues' },
    { id: 'progress', label: 'Progresi Im', icon: <BarChartIcon className="w-5 h-5" />, desc: 'Statistikat & Gjurmimi' }
  ];

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
  };

  const subSections = [
    { id: 'reading', label: 'Leximi', icon: '📖' },
    { id: 'vocab', label: 'Fjalori', icon: '📚' },
    { id: 'grammar', label: 'Gramatika', icon: '✍️' },
    { id: 'writing', label: 'Shkrimi', icon: '📝' },
    { id: 'exercises', label: 'Ushtrime', icon: '🧩' }
  ];

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const event = new CustomEvent('navigate-to-section', { detail: sectionId });
    window.dispatchEvent(event);
    setMobileMenuOpen(false);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'lessons':
        return <LessonDashboard />;
      case 'lesson_active':
        return <ChapterContainer />;
      case 'dictionary':
        return <DictionaryPage />;
      case 'vocab_builder':
        return <VocabularyBuilderPage />;
      case 'playground':
        return <PlaygroundPage />;
      case 'progress':
        return <ProgressPage />;
      case 'a2_test':
        return <A2FinishingTestPage />;
      default:
        return <LessonDashboard />;
    }
  };

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  if (activePage === 'welcome') {
    return <WelcomePage />;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-grid-pattern bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)] relative">
      
      {/* 1. Mobile Menu Header (hidden on desktop) */}
      <header className="sticky top-0 md:hidden w-full bg-[var(--color-bg-surface)] px-4 py-3 flex justify-between items-center z-40 border-b border-[var(--color-border-primary)]">
        <div className="flex items-center gap-2">
          <Logo type="wordmark" size={22} className="w-auto h-5.5" />
          <span className="text-[9px] font-bold text-[var(--color-text-secondary)] uppercase tracking-widest block mt-1.5 ml-1.5 border-l border-[var(--color-border-primary-glass)] pl-2">
            Ura e Gjuhës
          </span>
        </div>
        <div className="flex items-center gap-3">
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 border border-[var(--color-border-primary)] bg-transparent text-sm cursor-pointer transition select-none flex items-center justify-center rounded-lg hover:bg-[var(--color-brand-accent-light)]"
            title="Ndrysho Temën"
          >
                {theme === 'dark' ? (
                  <svg className="w-3.5 h-3.5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="M4.93 4.93L6.34 6.34" />
                    <path d="M17.66 17.66l1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="M6.34 17.66l-1.41 1.41" />
                    <path d="M19.07 4.93l-1.41 1.41" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 text-[var(--color-text-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl p-1 bg-transparent border-0 text-[var(--color-text-primary)] cursor-pointer"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* 2. Collapsible Left-side Sidebar Navigation Drawer */}
      <aside className={`fixed md:sticky top-0 left-0 bottom-0 md:h-screen z-50 overflow-y-auto no-scrollbar transition-all duration-300 bg-[var(--color-bg-surface-glass)] border-r border-[var(--color-border-primary-glass)] backdrop-blur-xl flex flex-col justify-between ${
        isSidebarCollapsed 
          ? 'w-16 p-3 items-center' 
          : 'w-64 p-5 items-stretch'
      } ${
        mobileMenuOpen ? 'translate-x-0 w-64 p-5 items-stretch animate-fade-in' : '-translate-x-full md:translate-x-0'
      }`}>
        


        {/* COLLAPSED STATE LAYOUT */}
        {isSidebarCollapsed && !mobileMenuOpen ? (
          <div className="flex flex-col items-center gap-8 w-full">
            {/* Logo acting as Open trigger with dynamic 3D coin-flip on hover */}
            <button
              onClick={() => setIsSidebarCollapsed(false)}
              className="relative focus:outline-none w-10 h-10 coin-flip-container cursor-pointer mt-2"
              title="Hap Menunë"
            >
              <div className="coin-flip-card">
                {/* Front Side: Crest Logo */}
                <div className="coin-flip-front">
                  <Logo size={28} />
                </div>
                
                {/* Back Side: Open Arrow */}
                <div className="coin-flip-back">
                  <span className="text-sm font-black">➔</span>
                </div>
              </div>
            </button>

            {/* Vertical Icons List */}
            <nav className="flex flex-col gap-3 py-4 w-full items-center">
              {navItems.map(item => {
                const isActive = activePage === item.id;
                const isDisabled = item.disabled;

                return (
                  <div key={item.id} className="relative group">
                    <button
                      disabled={isDisabled}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] focus:outline-none ${
                        isActive
                          ? 'bg-[var(--color-brand-accent-light)] text-[var(--color-brand-accent)] border border-[var(--color-brand-accent)]/20 shadow-xs'
                          : isDisabled
                          ? 'text-stone-900/20 dark:text-slate-100/20 cursor-not-allowed opacity-35'
                          : 'text-[var(--color-text-secondary)] hover:bg-stone-900/5 dark:hover:bg-white/5 hover:text-[var(--color-text-primary)]'
                      }`}
                    >
                      {item.icon}
                    </button>
                    {/* Premium CSS Tooltip */}
                    <div className="absolute left-full ml-3.5 top-1/2 -translate-y-1/2 px-2.5 py-1.5 bg-neutral-900 dark:bg-stone-900 text-white text-[10px] font-bold rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md z-50 select-none before:content-[''] before:absolute before:right-full before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-transparent before:border-r-neutral-900 dark:before:border-r-stone-900">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Theme toggle in collapsed state */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-[var(--color-border-primary-glass)] bg-transparent text-xs hover:bg-stone-900/5 dark:hover:bg-white/5 transition cursor-pointer mb-2"
              title="Ndrysho Temën"
            >
              {theme === 'dark' ? (
                <svg className="w-3.5 h-3.5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="M4.93 4.93L6.34 6.34" />
                  <path d="M17.66 17.66l1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="M6.34 17.66l-1.41 1.41" />
                  <path d="M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 text-[var(--color-text-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>

            {/* Collapsed bottom indicator */}
            <div className="w-6 h-6 rounded-md bg-stone-900/5 dark:bg-white/5 border border-[var(--color-border-primary-glass)] flex items-center justify-center text-[9px] font-bold text-[var(--color-brand-accent)] font-technical">
              U
            </div>
          </div>
        ) : (
          /* EXPANDED STATE LAYOUT */
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-8">
              {/* Logo, Brand Title, & Close Window Button */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-primary-glass)] w-full gap-2">
                <div className="flex flex-col items-start gap-1.5">
                  <Logo type="wordmark" size={24} className="w-auto h-6" />
                  <span className="text-[8px] font-bold text-[var(--color-text-secondary)] uppercase tracking-widest leading-none block">
                    Ura e Gjuhës
                  </span>
                </div>
                
                {/* Sidebar Controls (Theme toggle & Close Button) */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={toggleTheme}
                    className="w-7 h-7 rounded-md border border-[var(--color-border-primary-glass)] bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-brand-accent)] hover:border-[var(--color-brand-accent)]/30 flex items-center justify-center text-xs font-bold transition duration-200 cursor-pointer shadow-xs"
                    title="Ndrysho Temën"
                  >
                    {theme === 'dark' ? (
                      <svg className="w-3.5 h-3.5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2" />
                        <path d="M12 20v2" />
                        <path d="M4.93 4.93L6.34 6.34" />
                        <path d="M17.66 17.66l1.41 1.41" />
                        <path d="M2 12h2" />
                        <path d="M20 12h2" />
                        <path d="M6.34 17.66l-1.41 1.41" />
                        <path d="M19.07 4.93l-1.41 1.41" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5 text-[var(--color-text-secondary)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={() => setIsSidebarCollapsed(true)}
                    className="w-7 h-7 rounded-md border border-[var(--color-border-primary-glass)] bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-brand-danger)] hover:border-[var(--color-brand-danger)]/30 flex items-center justify-center text-xs font-bold transition duration-200 cursor-pointer shadow-xs"
                    title="Mbyll Menunë"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Full Navigation items with labels */}
              <nav className="space-y-1">
                {navItems.map(item => {
                  const isActive = activePage === item.id;
                  const isDisabled = item.disabled;

                  return (
                    <React.Fragment key={item.id}>
                      <button
                        disabled={isDisabled}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all duration-200 border transform hover:translate-x-0.5 active:scale-98 cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] focus:outline-none ${
                          isActive
                            ? 'bg-[var(--color-brand-accent-light)] text-[var(--color-brand-accent)] border-[var(--color-brand-accent)]/20 shadow-xs'
                            : isDisabled
                            ? 'text-stone-900/30 dark:text-slate-100/30 border-transparent cursor-not-allowed opacity-35'
                            : 'text-[var(--color-text-secondary)] border-transparent hover:bg-stone-900/5 dark:hover:bg-white/5 hover:text-[var(--color-text-primary)]'
                        }`}
                      >
                        <span className="text-base leading-none">{item.icon}</span>
                        <div className="flex-grow">
                          <span className="block leading-none">{item.label}</span>
                          <span className={`text-[9px] font-light block mt-0.5 ${isActive ? 'text-[var(--color-brand-accent)]/80' : 'text-[var(--color-text-secondary)]/80'}`}>
                            {item.desc}
                          </span>
                        </div>
                        {isActive && (
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)]"></div>
                        )}
                      </button>

                      {/* Expanded Section Quick Links */}
                      {item.id === 'lesson_active' && activePage === 'lesson_active' && (
                        <div className="ml-6 mt-1 mb-2 pl-3.5 border-l border-dashed border-[var(--color-brand-accent)]/20 flex flex-col gap-1.5 transition-all duration-300">
                          {subSections.map(subSec => {
                            const isSubActive = activeSection === subSec.id;
                            return (
                              <button
                                key={subSec.id}
                                onClick={() => handleSectionClick(subSec.id)}
                                className={`flex items-center gap-2 py-1 px-2 text-[11px] font-medium text-left rounded-lg transition duration-150 transform hover:translate-x-0.5 active:scale-98 cursor-pointer ${
                                  isSubActive
                                    ? 'bg-[var(--color-brand-accent-light)] text-[var(--color-brand-accent)] font-semibold'
                                    : 'text-[var(--color-text-secondary)] hover:bg-stone-900/5 dark:hover:bg-white/5 hover:text-[var(--color-text-primary)]'
                                }`}
                              >
                                <span>{subSec.icon}</span>
                                <span>{subSec.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </nav>
            </div>

            {/* Full sidebar Footer Brand signature */}
            <div className="pt-4 border-t border-[var(--color-border-primary-glass)] text-[10px] text-[var(--color-text-secondary)] font-light leading-relaxed text-left mt-8">
              <p className="font-semibold text-[var(--color-text-primary)]">Offline Framework</p>
              <p className="mt-0.5">Albanian-Turkish A1-C2</p>
              <p className="text-[8px] text-stone-900/40 dark:text-slate-100/40 mt-2">© {new Date().getFullYear()} Ura e Gjuhës</p>
            </div>
          </div>
        )}
      </aside>

      {/* 3. Mobile menu overlay backing */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-xs md:hidden"
        ></div>
      )}

      {/* 4. Right Side Main Viewport */}
      <main className="flex-grow flex flex-col justify-between relative min-h-screen">
        {/* Active Page Renders Here */}
        <div className="flex-grow">
          {renderActivePage()}
        </div>

        {/* Bottom Persistent footer */}
        <footer className="w-full bg-[var(--color-bg-surface)] border-t border-[var(--color-border-primary)] py-6 text-center text-[10px] text-[var(--color-text-secondary)] font-light space-y-1.5">
          <p className="tracking-wide">
            © {new Date().getFullYear()} Ura e Gjuhës. Zhvilluar për studim profesional offline.
          </p>
          <p className="italic text-[var(--color-text-secondary)] opacity-60 max-w-lg mx-auto leading-relaxed px-4">
            Ky portal përdor huazimet e përbashkëta Ballkanike dhe krahasimet e Mënyrës Habitore me Kohën e Shkuar të Pacaktuar turke për të përshpejtuar mësimin.
          </p>
        </footer>
      </main>

    </div>
  );
};

function App() {
  return (
    <LessonProvider>
      <MainLayout />
    </LessonProvider>
  );
}

export default App;
