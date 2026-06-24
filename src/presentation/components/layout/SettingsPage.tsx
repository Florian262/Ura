import React, { useState } from 'react';
import { useLesson } from '../../../application/state/LessonContext';

export const SettingsPage: React.FC = () => {
  const {
    userName,
    updateUserName,
    theme,
    toggleTheme,
    fontSize,
    setFontSize,
    resetAllData,
    isInstallable,
    isIOS,
    isStandalone,
    installApp
  } = useLesson();

  // Local state for profile editor
  const [profileName, setProfileName] = useState<string>(userName);
  const [showProfileFeedback, setShowProfileFeedback] = useState<boolean>(false);

  // Accordion active sections: 'terms' | 'privacy' | null
  const [activeAccordion, setActiveAccordion] = useState<'terms' | 'privacy' | null>(null);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profileName.trim()) {
      alert('Ju lutemi shkruani një emër valid!');
      return;
    }
    updateUserName(profileName);
    setShowProfileFeedback(true);
    setTimeout(() => {
      setShowProfileFeedback(false);
    }, 3000);
  };

  const toggleAccordion = (section: 'terms' | 'privacy') => {
    setActiveAccordion(prev => (prev === section ? null : section));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 relative h-full text-left">
      {/* Background Watermark */}
      <div className="curriculum-watermark opacity-25 select-none pointer-events-none">
        CILËSIMET
      </div>

      <div className="animate-fade-in space-y-6">
        {/* Header Panel */}
        <div className="glass-panel p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden z-10 shadow-elevated border border-white/20">
          <div className="absolute w-48 h-48 rounded-full bg-teal-500/5 blur-2xl -top-12 -left-12 pointer-events-none"></div>
          <div className="absolute w-48 h-48 rounded-full bg-amber-500/5 blur-2xl -bottom-12 -right-12 pointer-events-none"></div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#0D9488] dark:text-[#14B8A6] uppercase select-none">
              Menaxhimi i Aplikacionit (Sistem Ayarları)
            </span>
            <h2 className="text-2xl font-black text-[#1A1D20] dark:text-white uppercase tracking-tight font-display leading-tight">
              Cilësimet e Sistemit
            </h2>
            <p className="text-xs text-[#565E64] dark:text-neutral-400 font-light max-w-2xl leading-relaxed">
              Përshtatni ndërfaqen e aplikacionit Ura sipas nevojave tuaja. Ndryshoni madhësinë e shkronjave për lexim më të lehtë, ndryshoni temën e dritës/errësirës, ose përditësoni profilin tuaj.
            </p>
          </div>
        </div>

        {/* Main Settings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          
          {/* LEFT COLUMN: Controls */}
          <div className="space-y-6">
            
            {/* 1. Accessibility Font-Sizing Card */}
            <div className="glass-panel p-6 space-y-4 border border-neutral-200/60 dark:border-neutral-800">
              <h3 className="text-sm font-black text-neutral-800 dark:text-neutral-105 uppercase tracking-wide flex items-center gap-2">
                <span>🔤</span> Madhësia e Shkronjave
              </h3>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                Zmadhoni ose zvogëloni shkronjat e tekstit të dialogjeve dhe pyetjeve në të gjithë aplikacionin.
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'small', label: 'Të vogla', desc: '14px' },
                  { id: 'medium', label: 'Normale', desc: '16px (Default)' },
                  { id: 'large', label: 'Të mëdha', desc: '18px' },
                  { id: 'xlarge', label: 'Shumë të mëdha', desc: '20px' }
                ].map(opt => {
                  const isActive = fontSize === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setFontSize(opt.id as any)}
                      className={`p-3 rounded-xl border text-left flex flex-col justify-between transition cursor-pointer select-none shadow-xs ${
                        isActive
                          ? 'bg-[#3A5A40]/10 dark:bg-[#14B8A6]/10 border-[#3A5A40] dark:border-[#14B8A6] text-[#3a5a40] dark:text-[#14B8A6] font-bold'
                          : 'bg-white dark:bg-neutral-850 border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700'
                      }`}
                    >
                      <span className="text-xs">{opt.label}</span>
                      <span className="text-[9px] font-normal text-neutral-400 dark:text-neutral-500 mt-1">
                        {opt.desc}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Scaling Live Preview Box */}
              <div className="p-4 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-2 mt-4">
                <span className="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block select-none">
                  Pamje Paraprake (Preview):
                </span>
                <div className="bg-white dark:bg-neutral-850 border border-neutral-200 dark:border-neutral-800 rounded-lg p-3 text-xs leading-relaxed max-w-[90%] shadow-xs">
                  <span className="text-[8px] font-bold text-[#3A5A40] dark:text-[#14B8A6] uppercase tracking-wider block mb-0.5">
                    MËSUESI
                  </span>
                  <p className="font-technical text-neutral-800 dark:text-neutral-200">
                    Türkçe öğrenmek <span className="underline decoration-[#3A5A40]">çok kolaydır</span>!
                  </p>
                  <p className="text-[10px] text-neutral-450 dark:text-neutral-450 italic mt-1 pt-1 border-t border-neutral-100 dark:border-neutral-800">
                    Mësimi i turqishtes është shumë i lehtë!
                  </p>
                </div>
              </div>
            </div>

            {/* 2. User Profile Card */}
            <div className="glass-panel p-6 space-y-4 border border-neutral-200/60 dark:border-neutral-800">
              <h3 className="text-sm font-black text-neutral-800 dark:text-neutral-105 uppercase tracking-wide flex items-center gap-2">
                <span>👤</span> Profili i Studentit
              </h3>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                Ndryshoni emrin me të cilin do të përfaqësoheni në mesazhet e mirëseardhjes dhe statistikat e progresit.
              </p>

              <form onSubmit={handleSaveProfile} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                    placeholder="Emri juaj..."
                    className="flex-1 px-3 py-2 text-xs border border-neutral-250 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 focus:outline-hidden focus:border-[#3A5A40] shadow-inner"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#3A5A40] text-white text-xs font-bold rounded-xl hover:shadow-xs transition active:scale-98 cursor-pointer select-none"
                  >
                    Ruaj
                  </button>
                </div>
                {showProfileFeedback && (
                  <div className="text-[10px] font-bold text-[#3A5A40] dark:text-[#14B8A6] animate-fade-in flex items-center gap-1">
                    ✓ U përditësua me sukses!
                  </div>
                )}
              </form>
            </div>

            {/* 3. Theme Toggle Card */}
            <div className="glass-panel p-6 space-y-4 border border-neutral-200/60 dark:border-neutral-800">
              <h3 className="text-sm font-black text-neutral-800 dark:text-neutral-105 uppercase tracking-wide flex items-center gap-2">
                <span>🌗</span> Pamja Vizuale
              </h3>
              <div className="flex justify-between items-center bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-3 rounded-2xl">
                <div className="text-left">
                  <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 block">
                    Tema: {theme === 'dark' ? 'Errët (Dark)' : 'Dritë (Light)'}
                  </span>
                  <span className="text-[9px] text-neutral-500 font-light block">
                    Ndryshoni stilin vizual të aplikacionit.
                  </span>
                </div>
                <button
                  onClick={toggleTheme}
                  className="px-4 py-2 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-neutral-50 rounded-xl text-xs font-bold transition cursor-pointer select-none shadow-xs text-neutral-700 dark:text-neutral-200"
                >
                  Ndrysho 🌗
                </button>
              </div>
            </div>

            {/* PWA Caching & Install Card */}
            <div className="glass-panel p-6 space-y-4 border border-neutral-200/60 dark:border-neutral-800">
              <h3 className="text-sm font-black text-neutral-800 dark:text-neutral-100 uppercase tracking-wide flex items-center gap-2">
                <span>📲</span> Instalo Aplikacionin
              </h3>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                Ndryshojeni portalin në një aplikacion të plotë celular ose desktop që funksionon 100% pa internet.
              </p>

              {isStandalone ? (
                <div className="p-3 bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-450 rounded-xl text-xs font-bold flex items-center gap-2">
                  <span>✓</span> Aplikacioni është i instaluar dhe po ekzekutohet në pajisjen tuaj.
                </div>
              ) : isInstallable ? (
                <div className="flex justify-between items-center bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-3 rounded-2xl">
                  <div className="text-left">
                    <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200 block">
                      Gati për Instalimi
                    </span>
                    <span className="text-[9px] text-neutral-500 font-light block">
                      Instaloni menjëherë në ekranin tuaj fillestar.
                    </span>
                  </div>
                  <button
                    onClick={installApp}
                    className="px-4 py-2 bg-[#3A5A40] text-white hover:bg-[#2D4A36] rounded-xl text-xs font-bold transition cursor-pointer select-none shadow-xs animate-pulse"
                  >
                    Instalo
                  </button>
                </div>
              ) : isIOS ? (
                <div className="p-4 bg-amber-500/5 dark:bg-amber-500/5 border border-amber-500/15 text-neutral-700 dark:text-neutral-300 rounded-xl text-[11px] leading-relaxed space-y-2">
                  <span className="font-bold text-amber-700 dark:text-amber-450 block uppercase tracking-wide">
                    Udhëzime për iOS (Safari)
                  </span>
                  <p>
                    Për të instaluar aplikacionin në iPhone ose iPad tuaj:
                  </p>
                  <ol className="list-decimal pl-4 space-y-1 font-light">
                    <li>Shtypni butonin <strong>"Shpërndaj" (Share)</strong> <span className="inline-block px-1 bg-neutral-100 dark:bg-neutral-800 rounded">⎙</span> në fund të Safari.</li>
                    <li>Rrotulloni poshtë dhe zgjidhni <strong>"Shto në ekranin fillestar" (Add to Home Screen)</strong>.</li>
                    <li>Shtypni <strong>"Shto" (Add)</strong> në cepin e djathtë lart.</li>
                  </ol>
                </div>
              ) : (
                <div className="p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 rounded-xl text-[10px] italic">
                  Shënim: Aplikacioni tashmë mund të jetë i instaluar, ose shfletuesi juaj aktual nuk mbështet instalimin e drejtpërdrejtë të PWA. Sigurohuni që po përdorni Chrome, Edge ose Safari.
                </div>
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: Accordeons & Reset */}
          <div className="space-y-6">
            
            {/* 4. Terms and Privacy Accordions */}
            <div className="glass-panel p-6 space-y-4 border border-neutral-200/60 dark:border-neutral-800">
              <h3 className="text-sm font-black text-neutral-800 dark:text-neutral-105 uppercase tracking-wide flex items-center gap-2">
                <span>⚖️</span> Rregullat & Privatësia
              </h3>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                Dokumentacioni ligjor mbi privatësinë e të dhënave tuaja dhe funksionimin e aplikacionit Ura.
              </p>

              <div className="space-y-3">
                {/* Accordion 1: Terms of Service */}
                <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleAccordion('terms')}
                    className="w-full flex justify-between items-center p-4 bg-neutral-50/50 dark:bg-neutral-900/30 text-xs font-bold text-neutral-700 dark:text-neutral-250 cursor-pointer select-none"
                  >
                    <span>📜 Rregullat e Përdorimit (Terms of Service)</span>
                    <span>{activeAccordion === 'terms' ? '▲' : '▼'}</span>
                  </button>
                  {activeAccordion === 'terms' && (
                    <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 text-[11px] text-neutral-600 dark:text-neutral-350 leading-relaxed font-light space-y-2 bg-white dark:bg-neutral-850/20 animate-fade-in">
                      <p className="font-semibold text-neutral-800 dark:text-neutral-200">1. Licenca e Përdoruesit</p>
                      <p>
                        Aplikacioni Ura ofrohet si një platformë akademike për studimin e gjuhës turke. Të gjitha materialet didaktike (dialogjet, fjalorët, regjistrimet zëmore) janë të destinuara për përdorim personal dhe jo-tregtar.
                      </p>
                      <p className="font-semibold text-neutral-800 dark:text-neutral-200">2. Qasja Jashtë Linje (Offline)</p>
                      <p>
                        Portali është dizajnuar të funksionojë pa pasur nevojë për internet. Përdoruesi është përgjegjës për ruajtjen e sigurisë së pajisjes ku ekzekutohet aplikacioni.
                      </p>
                      <p className="font-semibold text-neutral-800 dark:text-neutral-200">3. Përgjegjësia e Përmbajtjes</p>
                      <p>
                        Heuristikat e stemerit dhe fjalorët mbështeten në rregullat e harmonisë zanore turke. Rezultatet e përkthimeve shërbejnë për lehtësim studimi.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Privacy Policy */}
                <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleAccordion('privacy')}
                    className="w-full flex justify-between items-center p-4 bg-neutral-50/50 dark:bg-neutral-900/30 text-xs font-bold text-neutral-700 dark:text-neutral-250 cursor-pointer select-none"
                  >
                    <span>🛡️ Politika e Privatësisë (Privacy Policy)</span>
                    <span>{activeAccordion === 'privacy' ? '▲' : '▼'}</span>
                  </button>
                  {activeAccordion === 'privacy' && (
                    <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 text-[11px] text-neutral-600 dark:text-neutral-350 leading-relaxed font-light space-y-2 bg-white dark:bg-neutral-850/20 animate-fade-in">
                      <p className="font-semibold text-neutral-800 dark:text-neutral-200">1. Mbledhja e të Dhënave</p>
                      <p>
                        Ura funksionon <strong>100% offline</strong>. Ne nuk mbledhim, nuk transferojmë dhe nuk ruajmë asnjë të dhënë tuajën në serverë të jashtëm. Asnjë informacion personal apo statistike nuk largohet nga pajisja juaj.
                      </p>
                      <p className="font-semibold text-neutral-800 dark:text-neutral-200">2. Ruajtja Lokale (Storage)</p>
                      <p>
                        Të gjitha cilësimet (emri, fjalët e ruajtura, progresi i kapitujve) ruhen lokalisht në pajisjen tuaj nëpërmjet mekanizmit `LocalStorage` të shfletuesit.
                      </p>
                      <p className="font-semibold text-neutral-800 dark:text-neutral-200">3. Të Drejtat e Përdoruesit</p>
                      <p>
                        Ju keni kontroll të plotë mbi të dhënat tuaja. Ju mund t'i fshini ato plotësisht në çdo kohë duke përdorur butonin "Rivendos Sistemin" në këtë faqe.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 5. System Management Reset Card */}
            <div className="glass-panel p-6 border border-neutral-200/60 dark:border-neutral-800 text-left space-y-4">
              <h3 className="text-sm font-black text-rose-700 dark:text-rose-450 uppercase tracking-wide flex items-center gap-2">
                <span>⚠️</span> Zona e Rrezikut
              </h3>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                Nëse dëshironi të filloni mësimin nga fillimi ose të fshini të gjitha të dhënat personale, mund të rivendosni aplikacionin.
              </p>

              <div className="p-4 bg-rose-50/50 dark:bg-rose-950/15 border border-rose-200/80 dark:border-rose-900/60 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="text-left space-y-0.5">
                  <span className="text-xs font-bold text-rose-800 dark:text-rose-450 block">
                    Fshirja e Plotë e Progresit
                  </span>
                  <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-light block">
                    Ky veprim do të fshijë emrin tuaj, progresin, fjalët e ruajtura dhe cilësimet.
                  </span>
                </div>
                <button
                  onClick={resetAllData}
                  className="px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl transition active:scale-98 cursor-pointer select-none shadow-xs"
                >
                  Rivendos Sistemin
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
