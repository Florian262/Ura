# Ura e Gjuhës: Technical Documentation

Ura e Gjuhës is an offline-first, highly interactive, and premium Albanian-Turkish language learning framework. This document provides a comprehensive technical breakdown of its architectural design, grammar engines, database seed schemas, persistence layers, user interface flows, and testing suites.

---

## 1. Directory Structure and Architectural Design

The application is structured following Clean Architecture principles, separating core business logic, application orchestration, database infrastructure, and UI presentation details.

```
Ura/
├── .github/                   # GitHub action workflows
├── public/                    # Static assets (images, badges, dict JSON files)
│   ├── dict/                  # Letter-paged dictionary files (a.json to z.json)
│   └── audio/                 # Preconfigured audio assets (stubs)
├── src/
│   ├── core/                  # Core domain logic
│   │   └── harmony/           # Grammar harmonizer rules & strategies
│   ├── application/           # Application state, custom hooks, and context
│   │   ├── state/             # React Context stores
│   │   └── hooks/             # Utility hooks (audio player, scroll tracking)
│   ├── infrastructure/        # Data access and local database adapters
│   │   ├── db/                # SQL definitions, mock data, and lesson files
│   │   └── repository/        # Repositories for chapters and progress
│   ├── presentation/          # Views, pages, and modular components
│   │   └── components/
│   │       ├── common/        # Shared presentation elements (logo, badges)
│   │       ├── layout/        # Main layout modules (dashboard, navbar, tabs)
│   │       └── modules/       # Lesson step modules (reading, vocab, grammar, exercises, writing)
│   ├── App.tsx                # Main Router and entry layout manager
│   ├── index.css              # Global styling variables and glassmorphism rules
│   └── main.tsx               # Client entry point
├── tests/                     # Unit and E2E integration tests
├── package.json               # Package manifests and runner scripts
├── tsconfig.json              # TypeScript compilation rules
└── vite.config.ts             # Vite build orchestration configuration
```

### Architectural Layering

1. **Domain Layer (`src/core`)**: Pure business logic containing phonetic rules (vowel harmony, consonant voicing) and grammatical transformation algorithms. It has no dependencies on UI frameworks or storage adapters.
2. **Application Layer (`src/application`)**: Orchestrates the interaction of domain logic, state management, and side effects (like SpeechSynthesis and localStorage persistence).
3. **Infrastructure Layer (`src/infrastructure`)**: Models the relational storage schemas, contains curriculum blueprints (lessons A1 to C2), and maps them into an offline seed database accessed through repository interfaces.
4. **Presentation Layer (`src/presentation`)**: Purely concerned with user interactions, visual aesthetics, animations, responsive grid layouts, and rendering structured curriculum sections.

---

## 2. Core Turkish Suffix & Phonetics Engine

At the heart of the learning system is a dynamic, rule-based phonetics engine that processes Turkish words, detects vowel characteristics, maps consonant voicing rules, and conjugates words programmatically.

### A. Vowel Harmony (`src/core/harmony/vowelHarmony.ts`)
Turkish grammar uses vowel harmony, where the vowel of a suffix changes depending on the vowels in the root word. The engine implements:
* **2-Way Vowel Harmony (`getVowelHarmony2`)**: Categorizes vowels into **Back/Prapme** (`a, ı, o, u`) which yield suffix vowel `a`, and **Front/Përparme` (`e, i, ö, ü`) which yield suffix vowel `e`.
* **4-Way Vowel Harmony (`getVowelHarmony4`)**: Refines vowels into four harmony targets:
  - `a, ı` $\rightarrow$ `ı`
  - `e, i` $\rightarrow$ `i`
  - `o, u` $\rightarrow$ `u`
  - `ö, ü` $\rightarrow$ `ü`
* **Loanword Exceptions**: Words of foreign origin (e.g., *saat*) that violate standard harmony are mapped manually in an exception set to ensure correct suffix pairing (*saat* $\rightarrow$ *saatler* instead of *saatlar*).

### B. Consonant Mutation (`src/core/harmony/consonantMutation.ts`)
Commonly referred to as the **KETÇAP** voicing rule, voiceless plosives `k, t, ç, p` transition to voiced consonants `ğ/g, d, c, b` when followed by a suffix starting with a vowel.
* **Exceptions**: Monosyllabic roots (*saç*, *at*, *süt*) and specific loanwords (*saat*) are protected from mutation.
* **Proper Nouns**: Capitalized words do not change spelling in written Turkish but are marked with an apostrophe (e.g., *Ahmet* $\rightarrow$ *Ahmet'i*).
* **Fıstıkçı Şahap Rule**: Voiceless consonants (`f, s, t, k, ç, ş, h, p`) force suffixes starting with `d` to transition to `t` (e.g., Locative `-da` $\rightarrow$ `-ta`).

### C. Suffix Strategies (`src/core/harmony/strategies`)
A strategy pattern is used to dynamically construct suffixes, return completed forms, and output explanation lists in Albanian. All strategies implement a unified interface:

```typescript
export interface SuffixResult {
  mutatedRoot: string;
  suffixAdded: string;
  fullResult: string;
  explanationSteps: string[];
}

export interface SuffixStrategy {
  conjugate(root: string): SuffixResult;
}
```

#### Supported Strategies (`suffixRegistry.ts`):
1. **Plural (`pluralStrategy.ts`)**: Attaches `-lar` or `-ler` based on 2-way harmony.
2. **Locative (`LocativeStrategy.ts`)**: Attaches `-da/-de` or `-ta/-te` based on 2-way harmony and Fıstıkçı Şahap consonant classes.
3. **Copula (`CopulaStrategy.ts`)**: Generates the "to be" verb suffix for the first-person singular *Ben* (`-ım / -im / -um / -üm` or buffer `-yım / -yim ...` if ending in a vowel).
4. **Present Continuous (`PresentContinuousStrategy.ts`)**: Builds the present continuous verb form (`-iyor / -ıyor / -uyor / -üyor` with vowel narrowing rules).
5. **Dative (`DativeStrategy.ts`)**: Forms direction suffixes (`-a / -e` or buffer `-ya / -ye`).
6. **Possessive (`PossessiveStrategy.ts`)**: Attaches the first-person singular possessive suffix (`-m` for vowel endings, `-im/-ım/-um/-üm` for consonant endings).
7. **Accusative (`AccusativeStrategy.ts`)**: Constructs direct object suffixes (`-ı / -i / -u / -ü` or buffer `-yı / -yi ...`, honoring proper noun rules and KETÇAP voicing).
8. **Habitore (`habitoreStrategy.ts`)**: Handles habitore mood suffix generations.

---

## 3. Database Schema, Blueprints & Seeding System

To support offline access without relying on live APIs, Ura e Gjuhës contains an embedded, schema-mapped database layer.

### A. SQL Schema definition (`src/infrastructure/db/schema.sql`)
The physical relational schema contains seven tables. It acts as the design blueprint for the database:

```sql
-- 1. Chapters Root
CREATE TABLE chapters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    level TEXT NOT NULL,                  -- 'A1', 'A2', 'B1', etc.
    order_index INTEGER NOT NULL,
    title_albanian TEXT NOT NULL,
    title_turkish TEXT NOT NULL,
    UNIQUE(level, order_index)
);

-- 2. Reading Blocks
CREATE TABLE reading_blocks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chapter_id INTEGER NOT NULL,
    layout_style TEXT NOT NULL,           -- 'dialogue', 'narrative', 'blog_post'
    content_turkish TEXT NOT NULL,        -- JSON array of dialogue/text
    content_albanian TEXT NOT NULL,       -- JSON array of translations
    audio_asset_stub TEXT,
    FOREIGN KEY(chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
);

-- 3. Reading Comprehension
CREATE TABLE reading_questions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    reading_block_id INTEGER NOT NULL,
    question_turkish TEXT NOT NULL,
    question_albanian TEXT NOT NULL,
    options_json TEXT NOT NULL,           -- Encoded options array
    correct_index INTEGER NOT NULL,
    FOREIGN KEY(reading_block_id) REFERENCES reading_blocks(id) ON DELETE CASCADE
);

-- 4. Vocabulary
CREATE TABLE vocabulary (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chapter_id INTEGER NOT NULL,
    turkish_word TEXT NOT NULL,
    albanian_word TEXT NOT NULL,
    category TEXT NOT NULL,               -- 'emër', 'folje', 'mbiemër', etc.
    is_shared_balkan_word INTEGER DEFAULT 0,
    notes_albanian TEXT,
    audio_asset_stub TEXT,
    FOREIGN KEY(chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
);

-- 5. Grammar Cards
CREATE TABLE grammar_cards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chapter_id INTEGER NOT NULL,
    step_order INTEGER NOT NULL,
    title_albanian TEXT NOT NULL,
    rule_concept_turkish TEXT NOT NULL,
    explanation_albanian TEXT NOT NULL,
    interactive_example_json TEXT,        -- JSON matching harmony configurations
    FOREIGN KEY(chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
);

-- 6. Interactive Exercises
CREATE TABLE exercises (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chapter_id INTEGER NOT NULL,
    exercise_type TEXT NOT NULL,          -- 'MULTIPLE_CHOICE', 'WORD_SORT', 'SUFFIX_BUILDER'
    prompt_albanian TEXT NOT NULL,
    source_payload_json TEXT NOT NULL,
    validation_target_json TEXT NOT NULL,
    FOREIGN KEY(chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
);

-- 7. User Progress
CREATE TABLE user_progress (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chapter_id INTEGER UNIQUE NOT NULL,
    is_completed INTEGER DEFAULT 0,
    last_accessed_timestamp INTEGER NOT NULL,
    last_viewed_section TEXT NOT NULL,
    carousel_grammar_step INTEGER DEFAULT 0,
    writing_validation_preference TEXT,
    FOREIGN KEY(chapter_id) REFERENCES chapters(id) ON DELETE CASCADE
);
```

### B. Seeding Adapter (`src/infrastructure/db/seedData.ts`)
Static JSON models defined in lessons blueprints (`a1_chapter1.ts` to `a1_chapter7.ts`) are combined and flattened into memory tables inside `seedData.ts` to mock database tables cleanly:
* `SEED_CHAPTERS`
* `SEED_READING_BLOCKS`
* `SEED_READING_QUESTIONS`
* `SEED_VOCABULARY`
* `SEED_GRAMMAR_CARDS`
* `SEED_EXERCISES`

---

## 4. Onboarding, Theme and Progress Persistence

User state, profile settings, and chapter logs are encapsulated and saved locally to the browser to ensure an instant-load offline experience.

### A. Progress Repository (`src/infrastructure/repository/ProgressRepository.ts`)
Acts as the persistence adapter, mapping local state records directly into `localStorage`.
* **State Structs**:
  - `ChapterProgress`: Holds metadata about lesson completions, current sections, grammar step indexing, and writing preferences.
  - `badge_level`: Preserves unlocked badges for completed curriculum levels.
* **Unlock Rules**: Completing all lessons in a specific curriculum level (e.g. all 7 lessons of Level A1) automatically writes progress tokens and yields badge awards.

### B. Lesson Context Orchestration (`LessonContext.tsx`)
A unified React Context wrapper managing navigation flows and active lesson coordinates.
* **Welcome Verification**: Upon application load, checks `localStorage` for `ura_welcome_seen`. If absent, redirects the router to `welcome` mode.
* **Theme Switching**: Manages dark-theme class overlays (`dark-theme` and `dark`) on the root HTML body node, dynamically shifting style sheets and colors using CSS variables.
* **Reset Interface**: Provides a master reset callback clearing all local cache structures, resetting settings, and returning the user to the onboarding state.

---

## 5. Interactive UI Modules and Pages

The presentation layer is composed of structural pages and individual step modules rendered sequentially inside chapters.

### A. Visual Layouts (`src/presentation/components/layout`)
1. **WelcomePage (`WelcomePage.tsx`)**: An onboarding slider capturing user name and initiating progress.
2. **LessonDashboard (`LessonDashboard.tsx`)**: Displays level indicators (A1-C2). Selecting a level unlocks its respective chapters in a cards grid showing completion checkmarks and badges.
3. **ChapterContainer (`ChapterContainer.tsx`)**: Implements step-by-step tabs (Reading $\rightarrow$ Vocabulary $\rightarrow$ Grammar $\rightarrow$ Exercises $\rightarrow$ Writing) tracking user progress sequentially.
4. **DictionaryPage (`DictionaryPage.tsx`)**: A dictionary combining core curriculum items and an external vocabulary database divided alphabetically (`a.json` through `z.json`). Fetches data using split-loading queries for fast response. Includes parts-of-speech filtering, search queries, pronunciation fallback, and custom annotations for Balkan loanwords.
5. **PlaygroundPage (`PlaygroundPage.tsx`)**: A utility suite where users can type any Turkish word and select a grammatical suffix strategy to see conjugation steps immediately.
6. **ProgressPage (`ProgressPage.tsx`)**: Displays certificates, total hours, completion metrics, and level badges.
7. **StickyNavbar (`StickyNavbar.tsx`)**: Universal header for dashboard navigation, theme switching, language selectors, profile resets, and stats.

### B. Module Steps (`src/presentation/components/modules`)
* **ReadingModule (`ReadingModule.tsx`)**: Renders dialogue or narrative text with double subtitle translations. Users can click any line to trigger local audio playing or text-to-speech fallback. Followed by multi-choice comprehension checks.
* **VocabularyModule (`VocabularyModule.tsx`)**: Supports **List Mode** and **Flashcard Mode** (clicking to flip cards). Highlights Balkan cognates and tags words with color-coded part-of-speech badges.
* **GrammarModule (`GrammarModule.tsx`)**: Displays rules with an interactive playground interface. Renders root cards that dynamically connect to selected grammatical strategies, allowing the user to test mutations and vowel changes in real-time.
* **ExerciseModule (`ExerciseModule.tsx`)**:
  - `MULTIPLE_CHOICE`: Simple selection tests.
  - `WORD_SORT`: Syntax construction, drag-ordering words in sequences.
  - `SUFFIX_BUILDER`: Suffix assembly testing.
* **WritingModule (`WritingModule.tsx`)**: Challenges the user to translate sentence prompts. Supports two validation choices:
  - **Self-Check**: Gives the correct solution and asks the user to rate their response.
  - **Strict Check**: Compares input against database answers using spelling comparison rules.

---

## 6. Writing Validation Engine

The strict spelling comparison rules in the writing module (`src/core/harmony/writingValidation.ts`) analyze the user's Turkish translation inputs using normalizations to prevent false negatives caused by formatting variations.

### Comparison Normalizations:
1. **Lowercase Conversion**: Standardizes Turkish-specific casing (`I` $\rightarrow$ `ı` and `i` $\rightarrow$ `İ`).
2. **Diacritics Preservation**: Does not strip critical Turkish accents (`ç, ş, ğ, ı, ö, ü`) as they alter word meanings, but normalizes Unicode normalization forms (NFC/NFD).
3. **Punctuation Stripping**: Removes non-syntactic symbols (`.`, `,`, `!`, `?`, `*`, `"`).
4. **Whitespace Condensation**: Merges double spaces and trims leading/trailing spaces.
5. **Apostrophe Standardizing**: Converts curly apostrophes (`’`, `` ` ``) into standard straight apostrophes (`'`) to ensure proper matching of proper noun suffixes.

```typescript
export function normalizeTurkishText(text: string): string {
  if (!text) return '';
  return text
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, '')
    .replace(/['’`]/g, "'")
    // Custom Turkish-specific lowercasing rules
    .replace(/İ/g, 'i')
    .replace(/I/g, 'ı')
    .toLowerCase();
}
```

---

## 7. Offline Media & Voice Pronunciation Engine

To ensure full accessibility without external network connectivity, Ura e Gjuhës implements a dual-mode audio manager (`src/application/hooks/useAudioPlayer.ts`).

### Mode 1: Static Audio Assets
* Custom recorded MP3 assets are defined via file stubs in curriculum schemas (e.g. `audio/vocab_merhaba.mp3`).
* The player attempts to fetch and play these local files asynchronously.

### Mode 2: Browser Speech Synthesis Fallback
If a local audio asset is missing or has a `null` stub:
* The player falls back to browser-native `window.speechSynthesis`.
* Instantiates `SpeechSynthesisUtterance`.
* Dynamically checks for local system Turkish/Albanian speech voices and selects matching locale targets (`tr-TR` or `sq-AL`) to read terms clearly.

---

## 8. Test Automation and Verification Suites

Quality assurance is verified using a split testing model: Unit/Integration tests via **Vitest** and End-to-End browser simulation tests via **Playwright**.

### A. Vitest Suites
Run in isolation on the core engines:
1. **Grammar Strategies (`tests/grammar.test.ts`)**: Validates conjugation outputs, explanations, vowel harmony triggers, and exception voicing rules (e.g., accusative checks on `çilek`, proper noun formatting on `Ahmet`, and noun extensions on `saat`).
2. **Content Integrity (`tests/content.test.ts`)**: Ensures all database lessons, reading stubs, exercise payloads, and vocabulary lists match type schemas, options are in bounds, and vocabulary items contain valid categories.
3. **Writing Validation (`tests/writingValidation.test.ts`)**: Asserts normalizations and spelling validations are correct.

To run:
```bash
npm run test
```

### B. Playwright Integration (`tests/ui.spec.ts`)
Simulates user onboarding, navigates dashboards, selects levels, clicks through grammar cards, and tests input submissions.

To run:
```bash
npm run test:ui
```
