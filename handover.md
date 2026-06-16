# Project Handover: Everyday Practice Upgrades & Stemmer Enhancements

Use this document as context when starting a new chat session. It summarizes all recent features, architectural changes, database additions, and verification commands.

---

## 1. Summary of Completed Work

### A. Everyday Practice Page UI Updates
- **Desktop Resizability**: The available scenarios sidebar on [EverydayPracticePage.tsx](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/src/presentation/components/layout/EverydayPracticePage.tsx) is resizable ($200\text{px} - 500\text{px}$) with a clean drag divider.
- **Mobile Mode**: On mobile screens ($< 1024\text{px}$), the sidebar is hidden. A select button opens the scenarios list in a full-height overlay modal drawn using React Portal.
- **Responsive Layouts**: Inside components dynamically adapt to narrow panel widths ($< 280\text{px}$ hides descriptions; $< 230\text{px}$ shrinks fonts, paddings, and headings).

### B. Practice Content & Icons Added
- **A2 Scenarios**: Added 4 dialogues and 4 stories (supporting 1st & 3rd person perspectives) in [everydayPracticeData.ts](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/src/infrastructure/db/everydayPracticeData.ts).
- **B1 Scenarios**: Added 4 dialogues and 4 stories (supporting 1st & 3rd person perspectives) in [everydayPracticeData.ts](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/src/infrastructure/db/everydayPracticeData.ts).
- **Custom SVGs**: Integrated 12 modern icons in [EverydayPracticePage.tsx](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/src/presentation/components/layout/EverydayPracticePage.tsx) (`supermarket`, `cafe`, `taxi`, `introduction`, `routine`, `family`, `neighborhood`, `weekend`, `doctor`, `hotel`, `travel`, `future`, `bank`, `job`, `home`, `repair`, `business`, `culture`, `sports`, `nature`).

### C. Stemmer Upgrades
In [stemmer.ts](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/src/core/harmony/stemmer.ts), added suffix patterns to `SUFFIX_DETAILS`:
- `-ki` relative suffix (e.g. `kurstaki` -> `kurs`).
- `-ca/-ce/-ça/-çe` equative suffix (e.g. `yıllarca` -> `yıl`).
- `y` past copula buffer (e.g. `bittiyse` -> `bit`).
- `-lık/-lik/-luk/-lük` noun maker (e.g. `tıkanıklık` -> `tıkanık`).
- `-cı/-ci/-cu/-cü` profession suffix (e.g. `bankacılık` -> `banka`).

### D. Vocabulary Alignment
- Added 63 (A2) + 114 (B1) missing root words to [basicGrammarVocabulary.ts](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/src/infrastructure/db/basicGrammarVocabulary.ts) to guarantee that in-app word popovers display exact translations.
- Updated [everydayPractice.test.ts](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/tests/everydayPractice.test.ts) to ignore brand/city names and suffixes split by apostrophes (`rentacar`, `ankara`, `a`, `yi`, `ni`, `js`, etc.).

---

## 2. Verification Commands

Run the following commands in the workspace root directory:

- **Run Alignment Test**:
  ```powershell
  npx vitest run tests/everydayPractice.test.ts
  ```
- **Run Full Test Suite** (All 247/247 tests passing):
  ```powershell
  npx vitest run
  ```
- **Build Production Bundle** (Clean compilation check):
  ```powershell
  npm run build
  ```
