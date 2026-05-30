import React, { useState } from 'react';
import { LessonProvider, useLesson } from './application/state/LessonContext';
import { LessonDashboard } from './presentation/components/layout/LessonDashboard';
import { ChapterContainer } from './presentation/components/layout/ChapterContainer';
import { DictionaryPage } from './presentation/components/layout/DictionaryPage';
import { PlaygroundPage } from './presentation/components/layout/PlaygroundPage';
import { ProgressPage } from './presentation/components/layout/ProgressPage';
import { Logo } from './presentation/components/common/Logo';
import { WelcomePage } from './presentation/components/layout/WelcomePage';


const MainLayout: React.FC = () => {
  const { currentChapter, activePage, setActivePage, resetAllData, theme, toggleTheme } = useLesson();

  
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(true); // Starts collapsed (1cm space)

  const navItems = [
    { id: 'lessons', label: 'Dashboard', icon: '🏠', desc: 'Kapitujt e Studimit' },
    { id: 'lesson_active', label: 'Kapitulli Aktiv', icon: '📖', desc: 'Mësimi aktual', disabled: !currentChapter },
    { id: 'dictionary', label: 'Fjalori', icon: '🔍', desc: 'Balkanizmat e përbashkët' },
    { id: 'playground', label: 'Playground', icon: '⚡', desc: 'Motorri Aglutinues' },
    { id: 'progress', label: 'Progresi Im', icon: '📊', desc: 'Statistikat & Gjurmimi' }
  ];

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
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
      case 'playground':
        return <PlaygroundPage />;
      case 'progress':
        return <ProgressPage />;
      default:
        return <LessonDashboard />;
    }
  };

  if (activePage === 'welcome') {
    return <WelcomePage />;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#FAFAFA] text-[#1A1D20] relative">
      
      {/* 1. Mobile Menu Header (hidden on desktop) */}
      <header className="md:hidden w-full bg-white px-4 py-3 flex justify-between items-center z-40 border-b border-[#E9ECEF]">
        <div className="flex items-center gap-2">
          <Logo size={28} />
          <span className="text-lg font-bold tracking-wide text-[#1A1D20] font-technical">
            Ura
          </span>
        </div>
        <div className="flex items-center gap-3">
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 border border-[#E9ECEF] bg-transparent text-sm cursor-pointer transition select-none flex items-center justify-center rounded-none hover:bg-[#E9ECEF]/30"
            title="Ndrysho Temën"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl p-1 bg-transparent border-0 text-[#1A1D20] cursor-pointer"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* 2. Collapsible Left-side Sidebar Navigation Drawer */}
      <aside className={`fixed md:sticky top-0 left-0 bottom-0 z-50 transition-all duration-300 bg-white border-r border-[#E9ECEF] flex flex-col justify-between ${
        isSidebarCollapsed 
          ? 'w-16 p-3 items-center' 
          : 'w-64 p-5 items-stretch'
      } ${
        mobileMenuOpen ? 'translate-x-0 w-64 p-5 items-stretch' : '-translate-x-full md:translate-x-0'
      }`}>
        
        {/* COLLAPSED STATE LAYOUT */}
        {isSidebarCollapsed && !mobileMenuOpen ? (
          <div className="flex flex-col items-center gap-8 w-full">
            {/* Logo acting as Open trigger */}
            <button
              onClick={() => setIsSidebarCollapsed(false)}
              className="relative group focus:outline-none flex items-center justify-center p-1.5 rounded-none transition duration-300 hover:bg-[#E9ECEF]/50 mt-2 border border-transparent hover:border-[#E9ECEF]"
              title="Hap Menunë"
            >
              <Logo size={28} className="transition-transform duration-300 group-hover:scale-105" />
              
              {/* "Open sidebar" button overlay appearing on hover */}
              <span className="absolute inset-0 bg-[#3A5A40]/10 rounded-none opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center border border-[#3A5A40]/30">
                <span className="text-[10px] font-bold text-[#3A5A40] animate-pulse">
                  ➔
                </span>
              </span>
            </button>

            {/* Vertical Icons List (Still clickable!) */}
            <nav className="flex flex-col gap-3 py-4 w-full items-center">
              {navItems.map(item => {
                const isActive = activePage === item.id;
                const isDisabled = item.disabled;

                return (
                  <button
                    key={item.id}
                    disabled={isDisabled}
                    onClick={() => handleNavClick(item.id)}
                    title={`${item.label}: ${item.desc}`}
                    className={`w-10 h-10 flex items-center justify-center rounded-none text-base transition duration-200 border relative cursor-pointer ${
                      isActive
                        ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                        : isDisabled
                        ? 'text-neutral-300 border-transparent cursor-not-allowed opacity-35'
                        : 'text-[#565E64] border-transparent hover:bg-[#E9ECEF]/50 hover:text-[#1A1D20]'
                    }`}
                  >
                    {item.icon}
                    {isActive && (
                      <span className="absolute right-1 top-1 w-1.5 h-1.5 rounded-none bg-white"></span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Theme toggle in collapsed state */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-none border border-[#E9ECEF] bg-transparent text-xs hover:bg-[#E9ECEF]/50 transition cursor-pointer mb-2"
              title="Ndrysho Temën"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* Collapsed bottom indicator */}
            <div className="w-6 h-6 rounded-none bg-[#E9ECEF] border border-neutral-300 flex items-center justify-center text-[9px] font-bold text-[#1A1D20] font-technical">
              U
            </div>
          </div>
        ) : (
          /* EXPANDED STATE LAYOUT */
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-8">
              {/* Logo, Brand Title, & Close Window Button */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E9ECEF] w-full gap-2">
                <div className="flex items-center gap-2.5">
                  <Logo size={32} />
                  <div className="text-left">
                    <h1 className="text-xl font-black tracking-tight leading-none text-[#1A1D20] m-0">
                      Ura
                    </h1>
                    <span className="text-[9px] font-bold text-[#565E64] uppercase tracking-widest leading-none block mt-0.5">
                      Ura e Gjuhës
                    </span>
                  </div>
                </div>
                
                {/* Sidebar Controls (Theme toggle & Close Button) */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={toggleTheme}
                    className="w-7 h-7 rounded-none border border-[#E9ECEF] bg-white text-[#565E64] hover:text-[#3A5A40] hover:border-[#3A5A40] flex items-center justify-center text-xs font-bold transition duration-200 cursor-pointer"
                    title="Ndrysho Temën"
                  >
                    {theme === 'dark' ? '☀️' : '🌙'}
                  </button>
                  <button
                    onClick={() => setIsSidebarCollapsed(true)}
                    className="w-7 h-7 rounded-none border border-[#E9ECEF] bg-white text-[#565E64] hover:text-[#c0392b] hover:border-[#c0392b] flex items-center justify-center text-xs font-bold transition duration-200 cursor-pointer"
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
                    <button
                      key={item.id}
                      disabled={isDisabled}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-none text-xs font-semibold text-left transition duration-200 border cursor-pointer ${
                        isActive
                          ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                          : isDisabled
                          ? 'text-neutral-300 border-transparent cursor-not-allowed opacity-35'
                          : 'text-[#565E64] border-transparent hover:bg-[#E9ECEF]/50 hover:text-[#1A1D20]'
                      }`}
                    >
                      <span className="text-base leading-none">{item.icon}</span>
                      <div className="flex-grow">
                        <span className="block leading-none">{item.label}</span>
                        <span className={`text-[9px] font-light block mt-0.5 ${isActive ? 'text-white/80' : 'text-[#565E64]'}`}>
                          {item.desc}
                        </span>
                      </div>
                      {isActive && (
                        <div className="w-1.5 h-1.5 rounded-none bg-white"></div>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Full sidebar Footer Brand signature */}
            <div className="pt-4 border-t border-[#E9ECEF] text-[10px] text-[#565E64] font-light leading-relaxed text-left mt-8">
              <p className="font-semibold text-[#1A1D20]">Offline Framework</p>
              <p className="mt-0.5">Albanian-Turkish A1-C2</p>
              <p className="text-[8px] text-neutral-400 mt-2">© {new Date().getFullYear()} Ura e Gjuhës</p>
              
              {/* Reset Progress Button */}
              <button
                onClick={resetAllData}
                className="w-full text-left text-[9px] font-bold text-[#c0392b] hover:text-[#c0392b]/80 uppercase tracking-widest mt-4 bg-transparent border-0 cursor-pointer flex items-center gap-1.5 transition"
                title="Rivendos të dhënat"
              >
                ⚠️ Rivendos (Reset)
              </button>
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
      <main className="flex-grow flex flex-col justify-between overflow-x-hidden relative min-h-screen">
        {/* Active Page Renders Here */}
        <div className="flex-grow">
          {renderActivePage()}
        </div>

        {/* Bottom Persistent footer */}
        <footer className="w-full bg-white border-t border-[#E9ECEF] py-6 text-center text-[10px] text-[#565E64] font-light space-y-1.5">
          <p className="tracking-wide">
            © {new Date().getFullYear()} Ura e Gjuhës. Zhvilluar për studim profesional offline.
          </p>
          <p className="italic text-neutral-400 max-w-lg mx-auto leading-relaxed px-4">
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
