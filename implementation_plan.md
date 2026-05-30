# Technical Implementation Plan: "Studio Print" Pedagogical Layout

This implementation plan adapts the dashboard and layout systems to transition from a technical database grid to an active learning space using **Cognitive Science Layout Rules** and the **"Studio Print"** gallery editorial aesthetic, as specified in [Specifications.md](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/Specifications.md).

---

## 1. Goal Description

1. **"Studio Print" Editorial Aesthetic**: 
   - Swap the primary Light Mode background to **Warm Bone Paper (`#FBFBF9`)**, mimicking physical gallery cardstock or high-end textbook media.
   - Restyle default text and labels to **Charcoal Black (`#111315`)** and slate accents to avoid sterile pure whites and high-dilation halation.
   - Redefine structural boundaries using sharp hairline dividers in **Concrete Gray (`#DDE1E5`)** with absolute sharp corners (`rounded-none`).
2. **Linear Progressive Roadmap with Spatial Hierarchy**:
   - **The Active Anchor Card**: The level currently being mastered (the first incomplete CEFR level) dominates the screen vertically with spatial anchoring (thick border, full-width profile, active actionable button `[ VAZHDO ]`). Shows the curriculum preview syllabus and a heavy custom progress track: `▬▬▬▬▬▬▬▬█─────────────── X%`.
   - **Roadmap Section (`VËZHGIMI I RUGËTIMIT TËND`)**: Sub-stages the subsequent levels vertically using muted, hairline concrete borders and lower contrast levels to reduce visual clutter while showing a motivating "mountain to climb."
   - **Locked Navigation Choice**: Displays the roadmap levels with a visual badge `[ I mbyllur ]`, but in accordance with your navigability preference, they remain fully clickable and unlocked, allowing direct access to their chapters instantly when tapped.
3. **Generative Scaffolding Copywriting**:
   - Move away from raw numbers like `[Mësimet: 2]`. 
   - Embed motivating curiosity-gap preview statements for all levels (e.g. A1: *"Kurrikula: Prezantimi, Harmonia Vokalike, dhe 250 fjalë të përbashkëta (Dollap, Xham, Çorape)."*) to activate prior knowledge and scaffold motivation.
4. **Typographic Badge Mutations**:
   - Drop system brackets like `[ STATUSI: AKTIV ]` and replace them with raw typographic weights and clean mono micro-badges: `px-2 py-1 text-[10px] uppercase font-mono tracking-wider font-bold border border-neutral-900 bg-neutral-900 text-white`.
5. **Interactive Color Shifts**:
   - Remove childish scale-lifting animations. Card interactions swap backgrounds instantly from `#FBFBF9` to a crisp `#FFFFFF` white, and borders transition instantly to `#111315`.

---

## 2. Proposed Architectural Changes

No database schema modifications are needed. We will alter two files:
1. `src/index.css`: Reconfigure the design system variables and typography tags to match the Studio Print element hex specs.
2. `src/presentation/components/layout/LessonDashboard.tsx`: Replace the uniform levels grid with the progressive vertical spatial flow.

```
src/
├── presentation/
│   ├── styles/
│   │   └── index.css             # [MODIFY] Warm Bone Paper, Charcoal Ink, Forest Green vars
│   └── components/
│       └── layout/
│           └── LessonDashboard.tsx# [REWRITE] Reconstruct as progressive linear roadmap
```

---

## 3. Proposed Changes by Component

---

### Component A: The "Studio Print" Style tokens

#### [MODIFY] [index.css](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/src/index.css)
* **CSS Variables**:
  - Update `--color-brand-indigo` $\rightarrow$ `#ffffff` (White container surfaces)
  - Update `--color-brand-slate` $\rightarrow$ `#111315` (Charcoal Black typography)
  - Update `--color-brand-amber` $\rightarrow$ `#2D4A36` (Deep Forest Green active elements)
  - Update `--color-brand-tiger` $\rightarrow$ `#636B74` (Slate Charcoal secondary captions)
  - Update `--color-brand-dark` $\rightarrow$ `#fbfbf9` (Warm Bone backdrop base)
  - Update `--color-brand-darker` $\rightarrow$ `#FBFBF9` (Primary Warm Paper Canvas)
* **Base Style**:
  - Map `:root` and `body` background colors to `#FBFBF9` and ink text color to `#111315`.
* **Structural Borders**:
  - Update structural hairline borders on `.glass-panel`, `.glass-card`, `.char-key`, and `.char-key:hover` to concrete gray `#DDE1E5` instead of `#E9ECEF`.
* **Dark Mode Backdoor**:
  - Ensure Night Mode variables remain fully accessible with high-contrast twilight charcoal and white text configurations.

---

### Component B: Progressive Roadmap Dashboard

#### [MODIFY] [LessonDashboard.tsx](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/src/presentation/components/layout/LessonDashboard.tsx)
* **Roadmap Parsing Logic**:
  - Add static data preview configurations for the levels:
    - **A1**: descriptor `FILL ESTAR`, preview `Kurrikula: Prezantimi, Harmonia Vokalike, dhe 250 fjalë të përbashkëta (Dollap, Xham, Çorape).`, focus `Fokusimi: Prezantimi, Harmonia Vokalike (Çoğul Eki).`
    - **A2**: descriptor `ELEMENTAR`, preview `Kurrikula: Koha e shkuar e drejtpërdrejtë dhe strukturat e përshkrimit vendor.`, focus `Fokusimi: Koha e shkuar e drejtpërdrejtë (-dı) dhe përshkrimet elementare.`
    - **B1**: descriptor `NDËRMJETËM`, preview `Kurrikula: Zotërimi i Mënyrës Habitore të shkuar të pacaktuar për të shprehur habi.`, focus `Fokusimi: Lidhja e fjalive me Mënyrën Habitore (Mënyra e habitshme -miş).`
    - **B2**: descriptor `NDËRMJETËM I LARTË`, preview `Kurrikula: Strukturat hipotetike kushtore dhe shprehja e dëshirave komplekse.`, focus `Fokusimi: Fjalia kushtore (-se), hipotezat dhe shprehja e dëshirave.`
    - **C1**: descriptor `AVANCUAR`, preview `Kurrikula: Strukturat letrare akademike dhe pjesoret e ndërlikuara turke.`, focus `Fokusimi: Pjesoret & strukturat e ndërlikuara letrare turke (Sıfat-Fiiller).`
    - **C2**: descriptor `PRANË GJUHËS AMTARE`, preview `Kurrikula: Idiomat, frazeologjite dhe huazimet e përbashkëta Ballkanike.`, focus `Fokusimi: Idiomat, shprehjet e urta popullore dhe huazimet e përbashkëta Ballkanike.`
  - Calculate level progress:
    - Level progress is calculated as: `completedChaptersCount / totalChaptersInLevel`.
  - Identify the **Active Anchor Level**:
    - The active level is dynamically selected as **the first level whose completion is less than 100%**.
    - If all levels are 100% completed, defaults to C2.
* **Layout Switch (selectedLevel === null)**:
  - Render the typography-first welcome header `URREMTJA E DIJES SATE` (or `UDHËTIMI YT I DIJES`) with warm bones paper backgrounds.
  - **The Active Anchor Card block**:
    - Render with a thick dark border: `border-2 border-[#111315] bg-[#FBFBF9] p-6 mb-8 hover:bg-white transition-colors duration-100 rounded-none w-full text-left cursor-pointer`.
    - Top bar: `01. NIVELI A1 — FILL ESTAR` (`font-mono tracking-wider font-bold text-[#111315] text-sm`) with a clean dark forest green badge `[ VAZHDO ]` styled as a micro-badge (`px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider font-bold bg-[#2D4A36] text-white`).
    - Hairline divider `#DDE1E5`.
    - Pedagogical preview narrative styled in primary ink `#111315`.
    - Dynamic solid heavy progress bar:
      - Helper translates percentage into blocks: `▬▬▬▬▬▬▬▬█─────────────── 12%` using `▬` and `█` and `─`.
  - **Roadmap Section (`VËZHGIMI I RUGËTIMIT TËND (Nivelet e Ardhshme)`)**:
    - Renders a vertical stack of subsequent levels.
    - Borders are hairline concrete: `border border-[#DDE1E5] bg-[#FBFBF9]/40 p-5 mb-4 hover:bg-white hover:border-[#111315] transition-colors duration-100 rounded-none w-full text-left cursor-pointer opacity-80 hover:opacity-100`.
    - Muted visual status tag `[ I mbyllur ]` or completed indicator `[ PËRFUNDUAR ]`.
    - Curiosity preview: `Fokusimi: Koha e tashme e vazhdueshme...` styled in secondary slate charcoal `#636B74`.
    - *Navigability: Clicking any card, active or future, opens the chapters grid page.*

---

## 4. Verification Plan

### Automated Type Checks
1. **TypeScript Production Compiler**: Run `npm run build` in the workspace terminal to verify complete type safety, with zero typescript errors and zero compiler warnings.

### Manual Verification Flow
1. **Bone Surface Contrast**: Open the app; check that Light Mode is rendered on a warm, organic Bone Paper `#FBFBF9` canvas, avoiding high-dilation eye strain.
2. **Roadmap Progressive Stack**:
   - Verify that the current active incomplete level dominates the top with a thick dark border and visual solid bar `▬▬▬▬▬▬▬▬█─────────────── 12%`.
   - Verify that subsequent levels stack below under the roadmap title with muted hairline concrete borders and secondary focus taglines.
3. **No Ambient AI Shadows**: Check that card layouts are flat, defined solely by clean concrete borders and instant typography colors, with no radial shadows or glowing backgrounds.
4. **Typographic Badge Mutations**: Ensure statuses like `[ VAZHDO ]` use raw typographic weights and micro-badges, with no system bracket strings like `[ STATUSI: AKTIV ]`.
5. **Night Mode Accessibility**: Toggle night mode; verify that contrast, text sizes, and progress tracks remain highly legible on twilight charcoal.
