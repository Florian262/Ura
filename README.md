# Ura e Gjuhës (Offline Language Portal)

Welcome to **Ura e Gjuhës**, a premium, offline-first study dashboard designed to accelerate linguistic fluency between Albanian and Turkish (Levels A1–C2). By leveraging shared Balkanisms, structural grammar affinities (such as comparing the Albanian Habitores mood with the Turkish `-miş` hearsay tense), and automated vowel harmony conjugators, Ura acts as a "bridge" (*Ura* in Albanian) connecting these two languages.

---

## 🚀 Key Features

* **3D Animated Welcoming Splash Screen**: Premium theme-adaptive entry screen with a volumetric glassmorphic bridge logo, linear progress loader, and smooth ease-out transitions.
* **Progressive Chapter Roadmap**: Staggered interactive dashboard guiding users step-by-step through Albanian/Turkish chapters.
* **Linguistic Conjugation Sandbox (Playground)**: Interactive playground featuring the Aglutination Engine (Vowel Harmony, Vowel Mutations, Verb Suffix Builders).
* **Interactive Chapter Modules**:
  * 📖 **Leximi (Reading)**: Multi-paragraph texts with integrated bilingual line translations.
  * 📚 **Fjalori (Vocabulary)**: Core vocab tables with automatic phonetic audio pronunciations.
  * ✍️ **Gramatika (Grammar)**: Interactive flashcards outlining structural rule mappings.
  * 📝 **Shkrimi (Writing)**: Advanced text validation supporting phonetic alignments and diacritical assistance (like `ë`, `ç`, `ı`, `ş`, `ğ`).
  * 🧩 **Ushtrime (Exercises)**: Multiple choice, fill-in-the-blank, and conjugation drills.
* **Offline Common Balkanisms Dictionary**: Instant searches across thousands of common shared words loaded asynchronously on-demand.
* **Dual-Engine Dark Mode**: Styled seamlessly for day and night study modes using synchronized CSS variable themes.

---

## 🛠️ Technology Stack

* **Core Framework**: React 19 + TypeScript + Vite
* **Styling System**: Tailwind CSS v4 (using CSS variables mapping)
* **Unit Testing**: Vitest (20+ linguistic rules, verb suffix alignment, and writing validation test scenarios)

---

## 📦 Getting Started

### Prerequisites

Make sure you have Node.js (version 18 or above) installed on your machine.

### Installation

1. Clone or download this project workspace directory.
2. Open your terminal in the project directory and run:
   ```bash
   npm install
   ```

### Running Locally (Development Mode)

To launch the local development web server:
```bash
npm run dev
```
Open your browser and navigate to the local URL (usually `http://localhost:5173`) to view the application.

### Building for Production

To compile and bundle the application into an optimized static site inside `dist/`:
```bash
npm run build
```

### Running the Test Suite

To execute all linguistic rules and component logic unit tests:
```bash
npm run test
```

---

## 🗺️ Curriculum Roadmap (Levels A1–B2)

### 🟢 Level A1: Foundations
* **Chapter 1**: Prezantimi & Origjina (Introduction & Origin suffix `-lı/yim`)
* **Chapter 2**: Rasa Vendore (Locative Case `-da/-de`)
* **Chapter 3**: Koha e Shkuar (Direct Past Tense `-dı`)
* **Chapter 4**: Mënyra Habitore (Reported Past/Admirative Mood `-miş`)
* **Chapter 5**: Mënyra Kushtore (Conditional Clause `-se/-sa`)
* **Chapter 6**: Pjesoret (Active & Passive Participles `-an / -dık`)
* **Chapter 7**: Idiomat e Përbashkëta (Common shared Balkan idioms)
* **Chapter 8**: Ekzistencialet & Pyetjet (Existential statements and questions `var mı?`)

### 🔵 Level A2: Intermediate Expansion
* **Chapter 1**: Koha e Shkuar & Fundjava (Past Tense review and narrative build)
* **Chapter 2**: Koha e Ardhshme (Future Tense `-acak/-ecek`)
* **Chapter 3**: Koha e Gjerë (Broad Tense/Geniş Zaman `-r/-ar/-er`)
* **Chapter 4**: Folja e Mundësisë (Potential/Capability mood `-abil/-ebil`)
* **Chapter 5**: Mënyra Detyrore (Necessity & Obligation `-malı/-meli`)
* **Chapter 6**: Krahasimi & Rasa Rrjedhore (Comparison using `daha` and Ablative `-dan/-den`)
* **Chapter 7**: Koha e Shkuar e Vazhdueshme (Past Continuous `-iyordu`)
* **Chapter 8**: Lidhëzat & Zarf-Foljet e Thjeshta (Connectors `çünkü / bu yüzden` & Adverbial `-ip`)

### 🟡 Level B1: Upper-Intermediate Transition
* **Chapter 1**: Haberin Var Mı? / A ke ndonjë lajm? (Past Continuous `-iyordu` & Adverbial `-ken`)
* **Chapter 2**: Yorumlar ve Görüşler / Komente dhe opinione (Reciprocal Verbs `-(I)ş`)
* **Chapter 3**: Eğitim / Edukimi & Arsimi (Conditional Mood `-se/-sa` & Past Conditional `-seydi`)
* **Chapter 4**: Gelin Tanış Olalım / Ejani të njihemi (Obligation `-malı`, Causatives, & Adverbial `-diğinden beri`)
* **Chapter 5**: Engelleri Kaldıralım / Të heqim pengesat (Reflexive Verbs `-(I)n`, Pronoun `kendi`, & `-mek zorunda`)
* **Chapter 6**: Kurgu / Fiksioni / Trillimi (Passive Voice `-il/-in` & Journalism 5W1H)
* **Chapter 7**: Kutlama / Festimet (Relative Participles `-an`, `-dık`, & `-acak`)
* **Chapter 8**: Ömür Dediğin / Kjo që quhet jetë (B1 grammar synthesis & verb voice summary)

### 🟠 Level B2: Advanced Competency
* **Chapter 1**: Seyahat ve Keşif / Udhëtimi dhe Zbulimi (Reflexive/Reciprocal review & Addition Connectors)
* **Chapter 2**: Çevre ve Sürdürülebilirlik / Mjedisi dhe Zhvillimi i Qëndrueshëm (Nominalization `-dik` & Case Inflexions)
* **Chapter 3**: Teknoloji ve Gelecek / Teknologjia dhe e Ardhmja (Nominalization `-me/-mek` & Cause-Result Connectors)
* **Chapter 4**: Duygusal Zekâ / Inteligjenca Emocionale (Nominalization `-ecek` & Contrast Connectors)
* **Chapter 5**: Edebiyat ve Kısa Hikaye / Letërsia dhe Tregimi i Shkurtër (Grammatical Participles & Exemplification Connectors)
* **Chapter 6**: Toplum ve Göç / Shoqëria dhe Migrimi (Unreal Past Conditional `-seydi` & Focus/Emphasis Connectors)
* **Chapter 7**: İş Dünyası ve Ekonomi / Bota e Biznesit dhe Ekonomia (Indirect Reported Speech & Comparative Connectors)
* **Chapter 8**: Tarih ve Biyografi / Historia dhe Biografia (Pluperfect `-mişti`, Narrative Past `-iyormuş`, & Summary Connectors)
* **Chapter 9**: Sanat ve Kültür / Arti dhe Kultura (Chain Noun Compounds, Advanced Aorist, & Contrast Connectors)

---

## 📂 Project Directory Structure

```text
Ura/
├── .github/workflows/   # CI/CD pipelines
├── public/              # Static assets, fonts, icons
│   ├── dict/            # Balkanisms dictionary (JSON slices)
│   ├── logo_icon.png    # 3D Brand logo icon
│   └── welcome_hero.png # Landing onboarding illustration
├── src/
│   ├── application/     # Application State (Context providers, hook bindings)
│   ├── core/            # Core Linguistic Models (Vowel Harmony, conjugation rules)
│   ├── infrastructure/  # Repositories & static lesson database seeds
│   └── presentation/    # React component pages, layouts, and modules
└── tests/               # Vitest test suites
```

---

## 📚 Linguistic Concepts Used

1. **Vowel Harmony**: Turkish suffixes dynamically shift vowels depending on the root word's vowels (e.g. 2-way harmony `a/ı/o/u` → `-lar` vs `e/i/ö/ü` → `-ler`).
2. **Verb Equivalence Rules**: Maps complex concepts like the Albanian Habitores mood (admirative e.g., *paska*) directly to the Turkish indirect hearsay past tense (`-miş` e.g., *varmış*).
3. **Phonetic Mutations**: Consonant shifts mapping grammatical transitions.

---

## 🔧 Local Troubleshooting & Developer Setup

### Running Playwright UI/Browser Tests
If you want to run the Playwright browser/UI tests (`npm run test:ui`), you need to install the required Playwright browser binaries first. Run:
```bash
npx playwright install
```

### Running the Dictionary Pipeline Scripts
If you are modifying or updating the dictionaries inside `scripts/dictionary_pipeline`, you will need to set up the Python environment:
1. Ensure Python 3 is installed.
2. Install dependencies:
   ```bash
   pip install requests
   ```
