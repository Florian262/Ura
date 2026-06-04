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
