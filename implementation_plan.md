# Technical Implementation Plan: Local & CI/CD Automation Pipeline

This plan details the step-by-step implementation for setting up the three-tiered automated testing framework (Playwright, Vale, Vitest), local Git pre-commit hooks, and a GitHub Actions CI pipeline.

---

## 1. Goal Description

1. **Unit Testing (Vitest)**: Guard core phonetic and grammatical strategy logic (vowel harmony, consonant mutation, and suffix conjugation builders) against accidental regression.
2. **UI & User Flow Automation (Playwright)**: Automate end-to-end browser checking. Launches a headless Chromium instance, verifies landing page, dashboard navigation, sub-dashboard levels, and coordinate scroll spy restoration. Includes a `webServer` dev server auto-start configuration.
3. **Typography & Translation Linting (Vale)**: Configure a syntax-aware prose linter to detect typos, missing unique Turkish/Albanian characters (`ç, ğ, ı, ö, ş, ü`, `ë`), and structural text violations.
4. **Git Pre-commit Hooks (simple-git-hooks)**: Intercept `git commit` to automatically run code compilation check (`npm run build`), unit tests, and Playwright UI tests, preventing broken commits from reaching version control.
5. **GitHub Actions CI Pipeline**: Create a GitHub Actions workflow that executes all checks on every push or pull request to the GitHub repository automatically.

---

## 2. Proposed Architectural Changes

We will introduce testing folders, configure global linter files, and install testing packages. The core codebase implementation remains untouched.

```
Ura/
├── .github/
│   └── workflows/
│       └── ci.yml                # [NEW] GitHub Actions CI workflow config
├── tests/
│   ├── grammar.test.ts           # [NEW] Vitest grammar strategies tests
│   └── ui.spec.ts                # [NEW] Playwright E2E browser tests
├── .vale.ini                     # [NEW] Vale linter settings
├── playwright.config.ts          # [NEW] Playwright testing server configuration
├── package.json                  # [MODIFY] Stage packages and git hooks
└── vite.config.ts                # [MODIFY] Integrate Vitest runner options
```

---

## 3. Proposed Changes by Component

---

### Component A: Dependencies & Hook Integrations

#### [MODIFY] [package.json](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/package.json)
* **DevDependencies to Add**:
  - `vitest`: `^3.0.0`
  - `@playwright/test`: `^1.50.0`
  - `simple-git-hooks`: `^2.11.0`
* **Scripts to Add**:
  - `"test"`: `"vitest run"`
  - `"test:watch"`: `"vitest"`
  - `"test:ui"`: `"playwright test"`
  - `"prepare"`: `"npx simple-git-hooks"`
* **Git Hook Configuration**:
  - Add the `simple-git-hooks` block to invoke typecheck compile and unit testing on commit:
    ```json
    "simple-git-hooks": {
      "pre-commit": "npm run build && npm run test"
    }
    ```
  - *Note: We run build and unit tests on pre-commit because Playwright browser testing takes longer. Playwright will run automatically in the GitHub CI pipeline.*

---

### Component B: Unit & E2E Testing Configs

#### [NEW] [playwright.config.ts](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/playwright.config.ts)
* Configure Playwright to:
  - Run tests inside `tests/` ending in `.spec.ts`.
  - Use `webServer` to automatically launch the Vite dev server (`npm run dev` on port `5173`) before testing, and shut it down afterward.
  - Test on Headless Chromium.

#### [MODIFY] [vite.config.ts](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/vite.config.ts)
* Add a `test` block inside the Vite config to support Vitest natively:
  ```typescript
  test: {
    globals: true,
    environment: 'happy-dom',
  }
  ```

#### [NEW] [tests/grammar.test.ts](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/tests/grammar.test.ts)
* Write unit tests for:
  - `vowelHarmony.ts` (Kalın vs. İnce vowel matching).
  - `consonantMutation.ts` (consonant hardening rules).
  - strategies (`pluralStrategy.ts` and `habitoreStrategy.ts`).

#### [NEW] [tests/ui.spec.ts](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/tests/ui.spec.ts)
* Write E2E browser checks for:
  - Welcoming onboarding screen (submitting username, verifying redirect).
  - Level Selection Dashboard (verifying A1 active card exists, and progress tracker is visible).
  - Chapter view (clicking level A1 card, viewing sub-chapters grid, and verifying Turkish/Albanian translations).

---

### Component C: Vale Prose Linter Config

#### [NEW] [.vale.ini](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/.vale.ini)
* Establish basic prose check patterns:
  - Point to check markdown files (`.md`) and database/dictionary source files.
  - Define custom spelling files to check for correct characters like `ç, ğ, ı, ö, ş, ü` and `ë`.

---

### Component D: GitHub Actions CI Pipeline

#### [NEW] [.github/workflows/ci.yml](file:///c:/Users/User/Desktop/Projekte%20per%20qejf/Ura/.github/workflows/ci.yml)
* Create a workflow that:
  - Spins up a Linux virtual environment on push/PR.
  - Installs npm packages.
  - Installs Playwright system browsers.
  - Runs compilation check (`npm run build`), unit tests (`npm run test`), and E2E browser tests (`npx playwright test`).

---

## 4. Verification & Rollout Plan

### Step 1: Package Installations
1. Install testing packages locally: `npm install --save-dev vitest @playwright/test simple-git-hooks`
2. Install Playwright browser engines: `npx playwright install --with-deps chromium`
3. Initialize git hooks: `npx simple-git-hooks`

### Step 2: Verification Execution
1. Run Unit Tests: `npm run test` (Assert all strategy checks pass).
2. Run UI Tests: `npx playwright test` (Assert that server boots, browser opens, and UI steps succeed headlessly).
3. Run Build checks: `npm run build` (Assert bundle compiles cleanly).
4. Verify Git Hook: Run a dummy git commit; verify that pre-commit tests trigger and block the commit if a unit test is intentionally broken.
5. Verify CI/CD: Push a commit to GitHub; verify that the Actions pipeline compiles and tests successfully on the remote server.
