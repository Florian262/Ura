# Handover Document: Project Ura

This document serves as a transition guide to resume development on **Ura** (Turkish-Albanian language learning application) in a new chat session. All recent tasks, bug fixes, and feature integrations have been completed, verified via tests, and compiled successfully.

---

## 1. Current Project State

### A. Level A1 Curriculum & Alphabet Rework (Chapter 0)
* **Introductory Guide Layout (`intro_guide`)**: Chapter 0 (`Türk Alfabesi ve Telaffuz`, ID 21) has been completely redesigned into a premium, interactive **4-Tab Guide** inside the [ReadingModule](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/src/presentation/components/modules/ReadingModule.tsx):
  1. **🔤 Alfabeti**: Displays a responsive grid of all 29 letters, their Albanian pronunciation, example words, and browser speech synthesis audio triggers.
  2. **🔊 Shqiptimi**: Explains special sounds like the silent `Ğ` (soft g), the phonetic differences between dotted `İ/i` and dotless `I/ı` (sounds like *ë*), and spelling-to-sound equivalents (`ç`, `ş`, `c`, `j`, `y`) with audio examples.
  3. **👥 Përemrat**: Visual cards explaining the six personal pronouns (`Ben`, `Sen`, `O`, `Biz`, `Siz`, `Onlar`) with audio pronunciations, grammatical features (no gender pronouns), and polite/plural uses.
  4. **⚙️ Këshilla & Bazat**: Shows word order comparisons (Albanian SVO vs. Turkish SOV), vowel harmony classifications (Kalın/İnce), and beginner tips.
* **Focused Experience**: Hided Vocabulary, Grammar, Writing, and Exercises from Chapter 0 in the UI and database blueprints to make it clean and easy for absolute beginners.

### B. Level A2 Curriculum & Dictionary
* **Chapters 1 to 8**: Fully integrated with custom grammar strategies (definite past tense, future tense, aorist, potential, necessity, ablative, past continuous, and simple adverbial `-ip` linking), seeded content blocks, vocabulary lists, playgrounds, and writing validators.
* **Level A2 Dictionary**: Added **500 unique Turkish-Albanian vocabulary words** split across 10 categories in [a2Vocabulary.ts](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/src/infrastructure/db/a2Vocabulary.ts). Renamed the sidebar to "Fjalorthi Tematik" and built a tabbed switcher between A1 and A2 databases with tag badges.

### C. Level A2 Comprehensive Finishing Test
* **Questions Pool**: Seeded a pool of **110 A2 questions** in [a2TestPool.ts](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/src/infrastructure/db/a2TestPool.ts).
* **Test Generator**: Draws a balanced **25-question test** dynamically (1 Turkish-only reading section with 5 questions, 5 general MCQs, 6 suffix builders, 6 word sorts, and 3 translation prompts).
* **Header & Navbar**: Integrated an accessible bypass entry card on the dashboard showing completion state. Built a toggleable timer box displaying `"Timer"` or running `MM:SS` stopwatch.
* **Deduplication & Phonetics Fixes**:
  * Corrected duplicate suffix choices in `sf23` and `sf24`, preventing key-collision bugs in React.
  * Mutated database stems to their phonetically correct voiced or narrowed forms (`git` $\rightarrow$ `gid` for `sf14`/`sf16`; `et` $\rightarrow$ `ed` for `sf7`; `dinle` $\rightarrow$ `dinli` for `sf20`; `ye` $\rightarrow$ `yi` for `sf24`) so direct concatenation displays correctly.

---

## 2. Verification Status

* **Unit Tests (`npm run test`)**: All **150 automated assertions** across 16 files pass successfully. Check [a1Chapter0.test.ts](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/tests/a1Chapter0.test.ts) and [a2FinishingTest.test.ts](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/tests/a2FinishingTest.test.ts) to verify blueprint lengths and rules.
* **Production Build (`npm run build`)**: Vite bundling and TypeScript strict checking build cleanly with zero errors.

---

## 3. Recommended Next Steps

1. **Visual Walkthrough**:
   * Run `npm run dev` and open Chapter 0 to test tab switches and click-to-speak audio outputs.
   * Open the A2 Finishing Test, start the timer, check option buttons, and trigger the final confetti scoreboard.
2. **Level B1 Planning**:
   * If you wish to extend the curriculum, start planning the chapters, suffix strategies, and thematic dictionary words for Level B1.
