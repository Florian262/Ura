import React, { useState } from 'react';
import { useLesson } from '../../../application/state/LessonContext';
import { useAudioPlayer } from '../../../application/hooks/useAudioPlayer';

const Avatar: React.FC<{ speakerName: string }> = ({ speakerName }) => {
  const initial = speakerName ? speakerName.charAt(0).toUpperCase() : '?';
  
  const getAvatarColors = (name: string) => {
    const cleanName = (name || '').toLowerCase().trim();
    if (cleanName.length === 0) return 'bg-teal-600 text-white';
    
    let hash = 0;
    for (let i = 0; i < cleanName.length; i++) {
      hash = cleanName.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const colors = [
      'bg-amber-500 text-white',
      'bg-rose-500 text-white',
      'bg-emerald-600 text-white',
      'bg-blue-600 text-white',
      'bg-teal-600 text-white',
      'bg-purple-600 text-white',
      'bg-indigo-600 text-white',
      'bg-orange-500 text-white'
    ];
    
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  };

  const colorClass = getAvatarColors(speakerName);

  return (
    <div 
      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs uppercase shadow-xs shrink-0 border border-white/20 select-none ${colorClass}`}
      title={speakerName}
    >
      {initial}
    </div>
  );
};

export const ReadingModule: React.FC = () => {
  const { currentChapter, readingBlock, readingQuestions, setReadingCompleted, readingCompleted } = useLesson();
  const { play, playDialogue, playText, stop, isPlaying, currentSrc, activeDialogueIndex } = useAudioPlayer();
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'alphabet' | 'pronunciation' | 'pronouns' | 'structure'>('alphabet');

  if (!readingBlock) return null;

  // Dialogue lines parsed from seeded JSON
  const dialogueTurkish = JSON.parse(readingBlock.content_turkish);
  const dialogueAlbanian = JSON.parse(readingBlock.content_albanian);

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
    setShowResults(false);
  };

  const verifyComprehension = () => {
    // Check if all questions are answered
    if (Object.keys(selectedAnswers).length < readingQuestions.length) {
      alert('Ju lutemi përgjigjuni të gjitha pyetjeve përpara se të verifikoni!');
      return;
    }

    // Verify answers
    let allCorrect = true;
    readingQuestions.forEach(q => {
      if (selectedAnswers[q.id] !== q.correct_index) {
        allCorrect = false;
      }
    });

    setShowResults(true);

    if (allCorrect) {
      setReadingCompleted(true);
    } else {
      alert('Disa përgjigje nuk janë të sakta. Rishikoni dialogun dhe provoni përsëri!');
    }
  };

  const renderIntroGuide = () => {
    const alphabetList = [
      { letter: 'A a', desc: 'Si "a" në shqip (zanore e trashë)', ex: 'Araba', tr: 'Makinë' },
      { letter: 'B b', desc: 'Si "b" në shqip', ex: 'Baba', tr: 'Babë' },
      { letter: 'C c', desc: 'Si "xh" në shqip (p.sh. xham)', ex: 'Cam', tr: 'Xham / Qelq' },
      { letter: 'Ç ç', desc: 'Si "ç" në shqip (p.sh. çelës)', ex: 'Çiçek', tr: 'Lule' },
      { letter: 'D d', desc: 'Si "d" në shqip', ex: 'Ders', tr: 'Mësim' },
      { letter: 'E e', desc: 'Si "e" në shqip (zanore e hollë)', ex: 'Ev', tr: 'Shtëpi' },
      { letter: 'F f', desc: 'Si "f" në shqip', ex: 'Fare', tr: 'Mi' },
      { letter: 'G g', desc: 'Si "g" në shqip', ex: 'Göz', tr: 'Sy' },
      { letter: 'Ğ ğ', desc: 'G-ja e butë (yumuşak g). Zgjat zanoren para saj, nuk shqiptohet vetë.', ex: 'Dağ', tr: 'Mal (shqiptohet: daa)' },
      { letter: 'H h', desc: 'Si "h" në shqip', ex: 'Halı', tr: 'Qilim' },
      { letter: 'I ı', desc: 'Si "ë"-ja e fortë në shqip (i pa pikë)', ex: 'Irmak', tr: 'Lumë' },
      { letter: 'İ i', desc: 'Si "i"-ja në shqip (i me pikë)', ex: 'İyi', tr: 'I mirë' },
      { letter: 'J j', desc: 'Si "zh" në shqip', ex: 'Jilet', tr: 'Zhiletë' },
      { letter: 'K k', desc: 'Si "k" në shqip', ex: 'Kitap', tr: 'Libër' },
      { letter: 'L l', desc: 'Si "l" në shqip', ex: 'Limon', tr: 'Limon' },
      { letter: 'M m', desc: 'Si "m" në shqip', ex: 'Masa', tr: 'Tavolinë' },
      { letter: 'N n', desc: 'Si "n" në shqip', ex: 'Nar', tr: 'Shegë' },
      { letter: 'O o', desc: 'Si "o" në shqip (zanore e trashë)', ex: 'Oda', tr: 'Dhomë' },
      { letter: 'Ö ö', desc: 'O-ja e hollë (rrumbullakosni buzët si për "o", thoni "e")', ex: 'Ördek', tr: 'Rosë' },
      { letter: 'P p', desc: 'Si "p" në shqip', ex: 'Para', tr: 'Para (monedhë)' },
      { letter: 'R r', desc: 'Si "r" në shqip', ex: 'Resim', tr: 'Pikturë' },
      { letter: 'S s', desc: 'Si "s" në shqip', ex: 'Su', tr: 'Ujë' },
      { letter: 'Ş ş', desc: 'Si "sh" në shqip (p.sh. shportë)', ex: 'Şeker', tr: 'Sheqer' },
      { letter: 'T t', desc: 'Si "t" në shqip', ex: 'Tahta', tr: 'Dërrasë' },
      { letter: 'U u', desc: 'Si "u" në shqip (zanore e trashë)', ex: 'Uçak', tr: 'Aeroplan' },
      { letter: 'Ü ü', desc: 'Si "y"-ja në shqip (zanore e hollë)', ex: 'Üzüm', tr: 'Rrush' },
      { letter: 'V v', desc: 'Si "v" në shqip', ex: 'Vazo', tr: 'Vazo' },
      { letter: 'Y y', desc: 'Si "j"-ja në shqip (p.sh. jo)', ex: 'Yol', tr: 'Rrugë' },
      { letter: 'Z z', desc: 'Si "z" në shqip', ex: 'Zeytin', tr: 'Ulli' }
    ];

    const pronounsList = [
      { tr: 'Ben', al: 'Unë', type: 'Veta I, njëjës', desc: 'Përdoret kur i referoheni vetes suaj.' },
      { tr: 'Sen', al: 'Ti', type: 'Veta II, njëjës', desc: 'Përdoret në biseda të thjeshta dhe joformale me miq ose familjarë.' },
      { tr: 'O', al: 'Ai / Ajo', type: 'Veta III, njëjës', desc: 'Gjuha turke nuk ka gjini gramatikore (nuk ka "he" apo "she" të ndryshëm). Përdoret njësoj për çdo gjini ose objekt.' },
      { tr: 'Biz', al: 'Ne', type: 'Veta I, shumës', desc: 'Përdoret për veten në numrin shumës.' },
      { tr: 'Siz', al: 'Ju', type: 'Veta II, shumës', desc: 'Përdoret për numrin shumës ose si formë respekti dhe zyrtare me një person (Ju i nderuar).' },
      { tr: 'Onlar', al: 'Ata / Ato', type: 'Veta III, shumës', desc: 'Përdoret për t\'iu referuar një grupi njerëzish ose sendesh.' }
    ];

    return (
      <div className="space-y-8 text-left animate-fade-in">
        {/* Intro Alert banner */}
        <div className="bg-[#3A5A40]/10 border border-[#3A5A40]/30 rounded-2xl p-5 shadow-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#3A5A40]/20 to-transparent rounded-bl-full pointer-events-none" />
          <h3 className="text-base font-black text-[#1A1D20] mb-2 flex items-center gap-2">
            <span>✨</span> Mirësevini në Udhëtimin Tuaj të Gjuhës Turke!
          </h3>
          <p className="text-xs md:text-sm text-neutral-600 leading-relaxed max-w-2xl">
            Ky kapitull hyrës (Kapitulli 0) është dizajnuar posaçërisht për të hedhur hapat e parë në gjuhën turke. 
            Mësoni alfabetin, zbuloni shqiptimet speciale me audio dhe njihuni me përemrat e rregullat bazë përpara se të vazhdojmë!
          </p>
        </div>

        {/* Tab switcher navigation */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-800/40 rounded-2xl max-w-lg mx-auto shadow-xs border border-neutral-200/50">
          <button
            onClick={() => setActiveTab('alphabet')}
            className={`flex-1 min-w-[80px] py-2 px-3 text-xs font-black rounded-xl cursor-pointer transition select-none text-center ${
              activeTab === 'alphabet'
                ? 'bg-[#3A5A40] text-white shadow-md'
                : 'text-neutral-500 hover:bg-neutral-200/50 hover:text-neutral-800'
            }`}
          >
            🔤 Alfabeti
          </button>
          <button
            onClick={() => setActiveTab('pronunciation')}
            className={`flex-1 min-w-[80px] py-2 px-3 text-xs font-black rounded-xl cursor-pointer transition select-none text-center ${
              activeTab === 'pronunciation'
                ? 'bg-[#3A5A40] text-white shadow-md'
                : 'text-neutral-500 hover:bg-neutral-200/50 hover:text-neutral-800'
            }`}
          >
            🔊 Shqiptimi
          </button>
          <button
            onClick={() => setActiveTab('pronouns')}
            className={`flex-1 min-w-[80px] py-2 px-3 text-xs font-black rounded-xl cursor-pointer transition select-none text-center ${
              activeTab === 'pronouns'
                ? 'bg-[#3A5A40] text-white shadow-md'
                : 'text-neutral-500 hover:bg-neutral-200/50 hover:text-neutral-800'
            }`}
          >
            👥 Përemrat
          </button>
          <button
            onClick={() => setActiveTab('structure')}
            className={`flex-1 min-w-[80px] py-2 px-3 text-xs font-black rounded-xl cursor-pointer transition select-none text-center ${
              activeTab === 'structure'
                ? 'bg-[#3A5A40] text-white shadow-md'
                : 'text-neutral-500 hover:bg-neutral-200/50 hover:text-neutral-800'
            }`}
          >
            ⚙️ Këshilla & Bazat
          </button>
        </div>

        {/* Dynamic Tab Content Rendering */}
        {activeTab === 'alphabet' && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-neutral-200 pb-2">
              <h4 className="text-xs font-extrabold text-[#1A1D20] uppercase tracking-wider">Alfabeti Turk (29 Shkronja)</h4>
              <p className="text-[10px] text-neutral-500 mt-1">Shtypni butonin e altoparlantit për të dëgjuar shqiptimin e shkronjës ose fjalës shembull.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto pr-1 no-scrollbar border border-neutral-100 rounded-xl p-2 bg-neutral-50/30">
              {alphabetList.map((item, idx) => (
                <div key={idx} className="bg-white border border-neutral-200/70 rounded-2xl p-4 shadow-xs hover:border-[#3A5A40]/40 transition hover:shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span lang="tr" className="text-2xl font-black text-[#3A5A40] font-sans">
                        {item.letter}
                      </span>
                      <button
                        onClick={() => playText(item.letter.split(' ')[0], 'tr')}
                        className="w-7 h-7 rounded-full bg-neutral-50 border border-neutral-200/60 flex items-center justify-center text-xs text-neutral-400 hover:text-[#3A5A40] hover:bg-[#3A5A40]/10 transition cursor-pointer"
                        title="Dëgjo shkronjën"
                      >
                        🔊
                      </button>
                    </div>
                    <p className="text-xs text-neutral-600 font-medium leading-relaxed mb-3 pr-2">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-2.5 border-t border-dashed border-neutral-100 flex items-center justify-between">
                    <span lang="tr" className="text-xs font-bold font-technical text-[#1A1D20]">
                      Shembull: <span className="underline decoration-[#3A5A40] underline-offset-4">{item.ex}</span> <span className="text-neutral-400 font-normal">({item.tr})</span>
                    </span>
                    <button
                      onClick={() => playText(item.ex, 'tr')}
                      className="text-[10px] font-bold text-[#3A5A40] hover:underline cursor-pointer select-none bg-[#3A5A40]/5 px-2 py-0.5 rounded-md"
                    >
                      Dëgjo 🔊
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'pronunciation' && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-neutral-200 pb-2">
              <h4 className="text-xs font-extrabold text-[#1A1D20] uppercase tracking-wider">Shqiptimi i Karaktereve të Veçanta</h4>
              <p className="text-[10px] text-neutral-500 mt-1">Karaktere dhe tinguj turq që nuk ekzistojnë ose shkruhen ndryshe nga shqipja.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Soft G block */}
              <div className="bg-white border border-neutral-200/70 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <h5 lang="tr" className="text-base font-black text-[#3A5A40] mb-2 flex justify-between items-center">
                    <span>Ğ ğ (Yumuşak g)</span>
                    <span className="text-xs text-neutral-400 bg-neutral-50 px-2 py-0.5 rounded-md">G-ja e Butë</span>
                  </h5>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    Kjo shkronjë nuk gjendet <strong>asnjëherë</strong> në fillim të një fjale. Ajo nuk shqiptohet si zë më vete, por shërben për të zgjatur vokalistin/zanoren që ndodhet para saj.
                  </p>
                </div>
                <div className="space-y-2.5 pt-3 border-t border-dashed border-neutral-100">
                  <span className="text-[10px] font-bold text-neutral-400 block uppercase">Shembuj me audio:</span>
                  {[
                    { word: 'Dağ', meaning: 'Mal (shqiptohet "daa")' },
                    { word: 'Ağaç', meaning: 'Pemë (shqiptohet "aa-aç")' },
                    { word: 'Öğretmen', meaning: 'Mësues (shqiptohet "öö-ret-men")' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-neutral-50/50 p-2 rounded-xl border border-neutral-100">
                      <span lang="tr" className="text-xs font-extrabold text-neutral-800">{item.word} <span className="font-normal text-neutral-500 text-[11px]">({item.meaning})</span></span>
                      <button
                        onClick={() => playText(item.word, 'tr')}
                        className="text-[10px] font-bold text-[#3A5A40] bg-white border border-neutral-200 hover:bg-[#3A5A40]/10 px-2.5 py-1 rounded-lg transition cursor-pointer"
                      >
                        🔊 Shqipto
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dotted vs Dotless I block */}
              <div className="bg-white border border-neutral-200/70 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <h5 lang="tr" className="text-base font-black text-[#3A5A40] mb-2 flex justify-between items-center">
                    <span>ı vs i (Pikat janë vendimtare!)</span>
                    <span className="text-xs text-neutral-400 bg-neutral-50 px-2 py-0.5 rounded-md">Diferenca</span>
                  </h5>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    Në turqisht ka dy shkronja "I" krejtësisht të ndryshme. Shkronja <strong>I ı (pa pikë)</strong> shqiptohet si <strong>"ë"</strong>-ja e fortë në shqip, ndërsa shkronja <strong>İ i (me pikë)</strong> shqiptohet si <strong>"i"</strong>-ja e zakonshme.
                  </p>
                </div>
                <div className="space-y-2.5 pt-3 border-t border-dashed border-neutral-100">
                  <span className="text-[10px] font-bold text-neutral-400 block uppercase">Shembuj me audio:</span>
                  {[
                    { word: 'ılık', meaning: 'I ngrohtë (shqiptohet si "ëlëk")' },
                    { word: 'iyi', meaning: 'I mirë (shqiptohet si "iji")' },
                    { word: 'sınıf', meaning: 'Klasë (shqiptohet si "sënëf")' },
                    { word: 'isim', meaning: 'Emër (shqiptohet si "isim")' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-neutral-50/50 p-2 rounded-xl border border-neutral-100">
                      <span lang="tr" className="text-xs font-extrabold text-neutral-800">{item.word} <span className="font-normal text-neutral-500 text-[11px]">({item.meaning})</span></span>
                      <button
                        onClick={() => playText(item.word, 'tr')}
                        className="text-[10px] font-bold text-[#3A5A40] bg-white border border-neutral-200 hover:bg-[#3A5A40]/10 px-2.5 py-1 rounded-lg transition cursor-pointer"
                      >
                        🔊 Shqipto
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sound Mapping Grid */}
              <div className="bg-white border border-neutral-200/70 rounded-2xl p-5 shadow-xs md:col-span-2">
                <h5 className="text-xs font-bold text-neutral-800 uppercase tracking-wider mb-3 flex items-center gap-1">
                  <span>🗺️</span> Harta e Shkronjave të Tjera Specifike
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { tr: 'Ç ç', eq: 'ç', desc: 'Si ç-ja e shqipes', sample: 'Çiçek' },
                    { tr: 'Ş ş', eq: 'sh', desc: 'Si sh-ja e shqipes', sample: 'Şeker' },
                    { tr: 'C c', eq: 'xh', desc: 'Si xh-ja e shqipes', sample: 'Cam' },
                    { tr: 'J j', eq: 'zh', desc: 'Si zh-ja e shqipes', sample: 'Jilet' },
                    { tr: 'Y y', eq: 'j', desc: 'Si j-ja e shqipes', sample: 'Yol' },
                    { tr: 'Ü ü', eq: 'y', desc: 'Si y-ja e shqipes', sample: 'Üzüm' }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-neutral-50 p-3 rounded-xl border border-neutral-100 hover:border-neutral-250 transition flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span lang="tr" className="text-base font-black text-[#3A5A40]">{item.tr}</span>
                          <span className="text-[10px] text-neutral-400 font-bold font-mono">({item.eq})</span>
                        </div>
                        <span className="text-[10px] text-neutral-500 font-medium block mt-0.5">{item.desc}</span>
                        <span lang="tr" className="text-[10px] text-neutral-400 font-bold block mt-1">Shembull: {item.sample}</span>
                      </div>
                      <button
                        onClick={() => playText(item.sample, 'tr')}
                        className="text-[10px] hover:text-[#3A5A40] w-7 h-7 rounded-full bg-white border border-neutral-200 flex items-center justify-center transition cursor-pointer"
                      >
                        🔊
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pronouns' && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-neutral-200 pb-2">
              <h4 className="text-xs font-extrabold text-[#1A1D20] uppercase tracking-wider">Përemrat Vetorë (Şahıs Zamirleri)</h4>
              <p className="text-[10px] text-neutral-500 mt-1">Zbuloni se si t\'iu referoheni njerëzve në turqisht.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pronounsList.map((pr, idx) => (
                <div key={idx} className="bg-white border border-neutral-200/70 rounded-2xl p-5 shadow-xs hover:border-[#3A5A40]/40 transition hover:shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3 pb-2 border-b border-neutral-100">
                      <div>
                        <span lang="tr" className="text-2xl font-black text-[#3A5A40]">
                          {pr.tr}
                        </span>
                        <span className="text-sm font-semibold text-neutral-500 ml-2">
                          ({pr.al})
                        </span>
                      </div>
                      <button
                        onClick={() => playText(pr.tr, 'tr')}
                        className="w-8 h-8 rounded-full bg-neutral-50 border border-neutral-200/60 flex items-center justify-center text-xs text-neutral-400 hover:text-[#3A5A40] hover:bg-[#3A5A40]/10 transition cursor-pointer"
                        title="Dëgjo përemrin"
                      >
                        🔊
                      </button>
                    </div>
                    
                    <span className="inline-block text-[10px] font-bold text-[#3A5A40]/80 bg-[#3A5A40]/5 px-2 py-0.5 rounded-full mb-2">
                      {pr.type}
                    </span>
                    
                    <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                      {pr.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'structure' && (
          <div className="space-y-6 animate-fade-in">
            <div className="border-b border-neutral-200 pb-2">
              <h4 className="text-xs font-extrabold text-[#1A1D20] uppercase tracking-wider">Këshilla për Fillestarët & Bazat</h4>
              <p className="text-[10px] text-neutral-500 mt-1">Konceptet më rëndësishme që duhet të dini kur filloni të mësoni turqisht.</p>
            </div>

            {/* Point 4: Beginner Tips Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: '📝 Fonetikë e Pastër', desc: 'Turqishtja është gjuhë tërësisht fonetike: çdo shkronjë shqiptohet saktësisht me një tingull të pandryshueshëm. Nuk ka shkronja të pazëshme ose kombinime dyshrueshe (si ch, sh).' },
                { title: '🚫🚻 Nuk ka Gjini Gramatikore', desc: 'Turqishtja nuk ka asnjë formë gjinie për mbiemrat apo emrat. Përemri "O" do të thotë njëkohësisht "ai", "ajo" dhe "ky/kjo".' },
                { title: '🚫📰 Nuk ka Nyje Shquese', desc: 'Në turqisht nuk ka një nyje shquese (si "the" në anglisht). Për emrat e pashquar përdoret thjesht fjala "bir" (një) si p.sh. "bir araba" (një makinë).' },
                { title: '🧱 Ndërtimi me "Lego" (Aglutinimi)', desc: 'Turqishtja është një gjuhë prapashtesore. Fjalët formohen duke ngjitur prapashtesa njera pas tjetrës në fund të fjalës bazë (p.sh. ev = shtëpi, evler = shtëpitë, evlerim = shtëpitë e mia).' }
              ].map((tip, idx) => (
                <div key={idx} className="bg-white border border-neutral-200/70 rounded-2xl p-5 shadow-xs hover:border-[#3A5A40]/30 transition">
                  <h5 className="text-xs font-extrabold text-[#1A1D20] mb-2 uppercase tracking-wide">{tip.title}</h5>
                  <p className="text-xs text-[#565E64] leading-relaxed font-medium">{tip.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6 pt-4">
              {/* Concept 1: Word Order */}
              <div className="bg-white border border-neutral-200/70 rounded-2xl p-5 shadow-xs">
                <h5 className="text-xs font-bold text-[#1A1D20] mb-2 flex items-center gap-1.5 uppercase">
                  <span>🔄</span> Renditja e Fjalëve (Subject - Object - Verb)
                </h5>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  Në ndryshim nga gjuha shqipe që përdor rendin <strong>Kryefjalë - Folje - Kundrinor (SVO)</strong>, gjuha turke përdor pothuajse gjithmonë rendin <strong>Kryefjalë - Kundrinor - Folje (SOV)</strong>. Folja shkon gjithmonë në fund të fjalisë.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-4">
                    <span className="text-[10px] font-bold text-rose-800 uppercase tracking-wider">Shqip (SVO)</span>
                    <p className="text-sm text-neutral-700 font-semibold mt-1">
                      Unë <span className="text-rose-700 underline underline-offset-2">shkruaj</span> një letër.
                    </p>
                    <span className="text-[10px] text-neutral-400 mt-1 block">(Kryefjalë + Folje + Kundrinor)</span>
                  </div>
                  <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Turqisht (SOV)</span>
                    <p lang="tr" className="text-sm text-neutral-700 font-semibold mt-1">
                      Ben bir mektup <span className="text-emerald-700 underline underline-offset-2">yazıyorum</span>.
                    </p>
                    <span className="text-[10px] text-neutral-400 mt-1 block">(Kryefjalë + Kundrinor + Folje)</span>
                  </div>
                </div>
              </div>

              {/* Concept 2: Vowel Harmony */}
              <div className="bg-white border border-neutral-200/70 rounded-2xl p-5 shadow-xs">
                <h5 className="text-xs font-bold text-[#1A1D20] mb-2 flex items-center gap-1.5 uppercase">
                  <span>🎼</span> Harmonia Vokalore (Ünlü Uyumu)
                </h5>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  Gjuha turke është një gjuhë prapashtesore. Për të ndërtuar kohët e foljeve ose rasat, ne shtojmë prapashtesa në fund të fjalëve. Zanorja e prapashtesës përshtatet me zanoren e fundit të rrënjës së fjalës sipas harmonisë:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-stone-50 border border-neutral-200 rounded-xl p-4">
                    <span className="text-xs font-bold text-neutral-800 block mb-2">Kalın Ünlüler (Zanoret e Trashë)</span>
                    <div className="flex gap-2 mb-2">
                      {['a', 'ı', 'o', 'u'].map(v => (
                        <span key={v} lang="tr" className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-sm">{v}</span>
                      ))}
                    </div>
                    <p className="text-[11px] text-neutral-500">Këto zanore shqiptohen në fund të gojës. Marrin prapashtesa të trashë (p.sh. <strong>-lar</strong>, <strong>-dan</strong>).</p>
                  </div>
                  <div className="bg-stone-50 border border-neutral-200 rounded-xl p-4">
                    <span className="text-xs font-bold text-neutral-800 block mb-2">İnce Ünlüler (Zanoret e Hollë)</span>
                    <div className="flex gap-2 mb-2">
                      {['e', 'i', 'ö', 'ü'].map(v => (
                        <span key={v} lang="tr" className="w-8 h-8 rounded-lg bg-teal-500 text-white flex items-center justify-center font-bold text-sm">{v}</span>
                      ))}
                    </div>
                    <p className="text-[11px] text-neutral-500">Këto zanore shqiptohen në fillim të gojës. Marrin prapashtesa të hollë (p.sh. <strong>-ler</strong>, <strong>-den</strong>).</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="glass-panel rounded-2xl p-6 md:p-8 bg-white border border-[#E9ECEF] shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-4 border-b border-[#E9ECEF]">
        <div>
          <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-widest">Sekuenca 1</span>
          <h2 className="text-xl font-black text-[#1A1D20] uppercase font-sans">Lexim & Dëgjim (Okuma ve Dinleme)</h2>
        </div>
        {readingBlock.chapter_id !== 21 && (
          <div className="flex gap-2">
            {/* Audio Hook - Dialogue/Narrative TTS loop */}
            {dialogueTurkish.length > 0 && (
              <button
                onClick={() => {
                  const isMainPlaying = isPlaying && (currentSrc === 'dialogue' || (currentSrc && currentSrc.includes('reading')));
                  if (isMainPlaying) {
                    stop();
                  } else {
                    if (readingBlock.audio_asset_stub) {
                      play(readingBlock.audio_asset_stub, 'reading');
                    } else {
                      playDialogue(dialogueTurkish);
                    }
                  }
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition duration-200 cursor-pointer shadow-xs ${
                  isPlaying && (currentSrc === 'dialogue' || (currentSrc && currentSrc.includes('reading')))
                    ? 'bg-[#3A5A40]/15 text-[#3A5A40] border-[#3A5A40]/35 animate-pulse'
                    : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50 hover:text-[#1A1D20]'
                }`}
              >
                <span>
                  {isPlaying && (currentSrc === 'dialogue' || (currentSrc && currentSrc.includes('reading')))
                    ? '⏸ Ndalo'
                    : readingBlock.layout_style === 'dialogue'
                    ? '🔈 Dëgjo Dialogun'
                    : '🔈 Dëgjo Tekstin'}
                </span>
              </button>
            )}

            {/* Translation Toggle */}
            <button
              onClick={() => setShowTranslation(!showTranslation)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition duration-200 cursor-pointer shadow-xs ${
                showTranslation
                  ? 'bg-[#3A5A40] text-white border-[#3A5A40]'
                  : 'bg-white border-[#E9ECEF] text-[#565E64] hover:bg-neutral-50'
              }`}
            >
              {showTranslation ? 'Fshih Përkthimin' : 'Shfaq Përkthimin'}
            </button>
          </div>
        )}
      </div>

      {/* Reading Content Pane - Switching dynamically between Dialogue bubble layout and Prose paragraph layout */}
      {readingBlock.chapter_id === 21 ? (
        renderIntroGuide()
      ) : (
        <div className="bg-neutral-50 rounded-2xl p-4 md:p-6 mb-8 max-h-[450px] overflow-y-auto border border-[#E9ECEF] no-scrollbar shadow-inner">
          {readingBlock.layout_style === 'dialogue' ? (
            /* dialogue bubble conversation layout */
            <div className="space-y-4">
              {dialogueTurkish.map((line: any, idx: number) => {
                const isLeft = idx % 2 === 0;
                const isLinePlaying = isPlaying && (
                  currentSrc === line.text || 
                  (currentSrc === 'dialogue' && activeDialogueIndex === idx) ||
                  (currentChapter && currentSrc === `chapter${currentChapter.order_index}_reading_${idx}`)
                );
                return (
                  <div key={idx} className={`flex items-end gap-3 w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    {isLeft && <Avatar speakerName={line.speaker} />}
                    
                    {/* Turkish text bubble */}
                    <div className={`max-w-[75%] md:max-w-[70%] px-4 py-2.5 shadow-xs transition-all duration-300 ${
                      isLeft 
                        ? 'bg-white text-[#1A1D20] border border-[#E9ECEF] rounded-2xl rounded-bl-xs' 
                        : 'bg-[#3A5A40]/10 text-[#1A1D20] border border-[#3A5A40]/25 rounded-2xl rounded-br-xs'
                    } ${isLinePlaying ? 'ring-2 ring-teal-500/50 border-teal-500 shadow-md scale-[1.01]' : ''}`}>
                      <div className="flex justify-between items-center gap-4 mb-1">
                        <span className="text-[9px] font-bold text-[#3A5A40] uppercase tracking-wider font-technical">
                          {line.speaker}
                        </span>
                        <button
                          onClick={() => {
                            if (isLinePlaying) {
                              stop();
                            } else {
                              if (currentChapter && readingBlock.audio_asset_stub) {
                                play(`audio/chapter${currentChapter.order_index}_reading_${idx}.wav`, `chapter${currentChapter.order_index}_reading_${idx}`);
                              } else {
                                playText(line.text, 'tr');
                              }
                            }
                          }}
                          className={`text-[9px] font-bold hover:text-[#3A5A40] border-b border-transparent hover:border-[#3A5A40] transition cursor-pointer select-none ${
                            isLinePlaying ? 'text-teal-600 dark:text-teal-400 font-extrabold animate-pulse' : 'text-neutral-400'
                          }`}
                        >
                          {isLinePlaying ? '⏸ Po lexohet' : '🔈 Dëgjo'}
                        </button>
                      </div>
                      <p className="text-sm font-technical font-medium tracking-wide">
                        {line.text}
                      </p>

                      {/* Albanian translation bubble if toggle enabled - Translation Rule */}
                      {showTranslation && (
                        <span className="translation-subtitle border-t border-[#E9ECEF]/80 pt-1.5 mt-1.5">
                          {dialogueAlbanian[idx].text}
                        </span>
                      )}
                    </div>

                    {!isLeft && <Avatar speakerName={line.speaker} />}
                  </div>
                );
              })}
            </div>
          ) : readingBlock.layout_style === 'blog_post' ? (
            /* premium blog post article layout */
            <div className="bg-white dark:bg-[#12181F] border border-[#E9ECEF] dark:border-neutral-800 rounded-2xl overflow-hidden shadow-xs text-left max-h-[500px] overflow-y-auto no-scrollbar">
              {/* Header Image */}
              <div className="w-full h-36 relative bg-stone-900">
                <img 
                  src="/welcome_hero.png" 
                  alt="Blog Cover" 
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-4">
                  <div>
                    <span className="text-[9px] uppercase font-mono tracking-widest font-bold bg-[var(--color-brand-accent)] text-white px-2 py-0.5 rounded-sm">
                      KULTURË & GJUHË
                    </span>
                    <h3 className="text-sm md:text-base font-black text-white uppercase tracking-tight mt-1">
                      Ditar i Udhëtimit (Seyahat Günlüğü)
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Post Metadata & Content Body */}
              <div className="p-5 md:p-6 space-y-6">
                <div className="flex items-center gap-3 text-[10px] font-mono text-[#636B74] border-b border-[#E9ECEF] dark:border-neutral-800 pb-3 select-none">
                  <span>✍️ Nga: Ura e Gjuhës</span>
                  <span>•</span>
                  <span>⏱️ 3 min lexim</span>
                  <span>•</span>
                  <span>📅 2026-06-05</span>
                </div>
                
                <div className="space-y-6 text-[#1A1D20] dark:text-neutral-200">
                  {dialogueTurkish.map((line: any, idx: number) => {
                    const isLinePlaying = isPlaying && (
                      currentSrc === line.text || 
                      (currentSrc === 'dialogue' && activeDialogueIndex === idx) ||
                      (currentChapter && currentSrc === `chapter${currentChapter.order_index}_reading_${idx}`)
                    );
                    return (
                      <div key={idx} className={`relative pl-4 border-l-2 transition-all duration-300 ${
                        isLinePlaying 
                          ? 'border-teal-500 bg-teal-500/5' 
                          : 'border-dashed border-[#E9ECEF] dark:border-neutral-800 hover:border-[var(--color-brand-accent)]'
                      }`}>
                        <div className="flex justify-between items-center gap-4 mb-1.5 select-none">
                          {line.speaker && (
                            <span className="text-[9px] font-bold text-[var(--color-brand-accent)] uppercase tracking-wider font-mono">
                              {line.speaker}
                            </span>
                          )}
                          <button
                            onClick={() => {
                              if (isLinePlaying) {
                                stop();
                              } else {
                                if (currentChapter && readingBlock.audio_asset_stub) {
                                  play(`audio/chapter${currentChapter.order_index}_reading_${idx}.wav`, `chapter${currentChapter.order_index}_reading_${idx}`);
                                } else {
                                  playText(line.text, 'tr');
                                }
                              }
                            }}
                            className={`text-[9px] font-bold hover:text-[var(--color-brand-accent)] border-b border-transparent hover:border-[var(--color-brand-accent)] transition cursor-pointer select-none ml-auto ${
                              isLinePlaying ? 'text-teal-600 dark:text-teal-400 font-extrabold animate-pulse' : 'text-neutral-400'
                            }`}
                          >
                            {isLinePlaying ? '⏸ Po lexohet' : '🔈 Dëgjo'}
                          </button>
                        </div>
                        
                        <p className="text-sm font-technical font-medium tracking-wide leading-relaxed">
                          {line.text}
                        </p>
                        
                        {showTranslation && (
                          <p className="translation-subtitle mt-2 pt-1.5 border-t border-[#E9ECEF]/30 dark:border-neutral-800/50 leading-relaxed text-[#636B74] italic">
                            {dialogueAlbanian[idx].text}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            /* standard paragraph narrative prose layout */
            <div className="space-y-6 text-left">
              {dialogueTurkish.map((line: any, idx: number) => {
                const isLinePlaying = isPlaying && (
                  currentSrc === line.text || 
                  (currentSrc === 'dialogue' && activeDialogueIndex === idx) ||
                  (currentChapter && currentSrc === `chapter${currentChapter.order_index}_reading_${idx}`)
                );
                return (
                  <div key={idx} className={`bg-white dark:bg-neutral-900/30 border rounded-2xl p-5 shadow-xs relative group transition-all duration-300 ${
                    isLinePlaying 
                      ? 'border-teal-500 ring-2 ring-teal-500/20 shadow-sm' 
                      : 'border-[#E9ECEF] hover:border-[#3A5A40]/30'
                  }`}>
                    <div className="flex justify-between items-center gap-4 mb-2">
                      {line.speaker && (
                        <span className="text-[10px] font-bold text-[#3A5A40] uppercase tracking-wider font-technical">
                          {line.speaker}
                        </span>
                      )}
                      <button
                        onClick={() => {
                          if (isLinePlaying) {
                            stop();
                          } else {
                            if (currentChapter && readingBlock.audio_asset_stub) {
                              play(`audio/chapter${currentChapter.order_index}_reading_${idx}.wav`, `chapter${currentChapter.order_index}_reading_${idx}`);
                            } else {
                              playText(line.text, 'tr');
                            }
                          }
                        }}
                        className={`text-[9px] font-bold hover:text-[#3A5A40] border-b border-transparent hover:border-[#3A5A40] transition cursor-pointer select-none ml-auto ${
                          isLinePlaying ? 'text-teal-600 dark:text-teal-400 font-extrabold animate-pulse' : 'text-neutral-400'
                        }`}
                      >
                        {isLinePlaying ? '⏸ Po lexohet' : '🔈 Dëgjo'}
                      </button>
                    </div>
                    <p className="text-sm font-technical font-medium tracking-wide leading-relaxed">
                      {line.text}
                    </p>
                    {showTranslation && (
                      <p className="translation-subtitle border-t border-[#E9ECEF]/80 pt-2 mt-2 leading-relaxed">
                        {dialogueAlbanian[idx].text}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Comprehension Questions */}
      <div className="mt-8 border-t border-[#E9ECEF] pt-6">
        {readingQuestions && readingQuestions.length > 0 ? (
          <>
            <h3 className="text-xs font-bold text-[#1A1D20] uppercase tracking-widest mb-4 flex items-center gap-1.5">
              <span>🧠</span> Pyetje Kuptueshmërie (Anlama Soruları)
            </h3>

            <div className="space-y-6">
              {readingQuestions.map((q, qIdx) => {
                const selected = selectedAnswers[q.id];
                return (
                  <div key={q.id} className="bg-white border border-[#E9ECEF] rounded-xl p-4 shadow-xs">
                    <div className="mb-3">
                      <h4 lang="tr" className="text-sm font-bold text-[#1A1D20] font-technical tracking-tight">
                        {qIdx + 1}. {q.question_turkish}
                      </h4>
                      {/* Translation subtitle rule */}
                      <span className="translation-subtitle mt-0.5">
                        ({q.question_albanian})
                      </span>
                    </div>

                    {/* Options list */}
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
              <p className="text-xs text-[#565E64] font-light italic">
                * Përgjigjuni saktë për të zhbllokuar seksionet e tjera të këtij kapitulli.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto justify-end">
                {readingCompleted && (
                  <div className="flex items-center gap-2 text-[#3A5A40] bg-[#3A5A40]/10 border border-[#3A5A40]/30 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider select-none">
                    <span>✓</span> Të gjitha pyetjet u përgjigjën saktë! Moduli u zhbllokua.
                  </div>
                )}
                
                <button
                  onClick={verifyComprehension}
                  className="px-6 py-3 text-center text-xs font-bold uppercase tracking-widest rounded-xl cursor-pointer select-none active-cta shadow-sm"
                >
                  {readingCompleted ? 'Rivedos & Verifiko Përsëri' : 'Verifiko Përgjigjet'}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="mt-2 flex flex-col md:flex-row justify-between items-center gap-4 bg-neutral-50/50 border border-[#E9ECEF] rounded-xl p-5 shadow-xs">
            <div className="text-left">
              <h4 className="text-xs font-bold text-[#1A1D20] uppercase tracking-wide mb-1">Lexim i thjeshtë</h4>
              <p className="text-xs text-[#565E64] font-light">
                Ky lexim nuk përmban pyetje kuptueshmërie. Ju mund ta shënoni direkt si të lexuar për të vazhduar.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 justify-end w-full md:w-auto">
              {readingCompleted && (
                <div className="flex items-center gap-2 text-[#3A5A40] bg-[#3A5A40]/10 border border-[#3A5A40]/30 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 select-none">
                  <span>✓</span> Leximi u krye! Moduli u zhbllokua.
                </div>
              )}
              
              <button
                onClick={() => setReadingCompleted(true)}
                className="px-6 py-3 text-center text-xs font-bold uppercase tracking-widest rounded-xl cursor-pointer select-none active-cta shadow-sm shrink-0"
              >
                {readingCompleted ? 'Shëno përsëri si të Lexuar' : 'Shëno si të Lexuar'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
