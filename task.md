# Tasks Checklist: Automation Pipeline Setup

## 1. Package Installation
- [ ] Install `vitest`, `@playwright/test`, and `simple-git-hooks` as devDependencies in `package.json`
- [ ] Download Playwright browser engine binaries (`npx playwright install chromium --with-deps`)
- [ ] Initialize git hook bindings via `npx simple-git-hooks`

## 2. Configuration Integration
- [x] Modify `vite.config.ts` to support Vitest native runner configurations
- [x] Create `playwright.config.ts` specifying test directories and dev-server `webServer` auto-start hook
- [x] Configure `package.json` with scripts for `test`, `test:watch`, `test:ui`, and staging hook execution mappings

## 3. Write Core Grammar Unit Tests
- [x] Create unit tests in `tests/grammar.test.ts` checking vowel harmony, consonant hardening, and strategy conjugation math rules
- [x] Verify that adding new features triggers automated matching test evaluations

## 4. Write E2E UI Browser Tests
- [x] Create browser workflow tests in `tests/ui.spec.ts` validating:
  - Welcome onboarding submission and page redirect
  - Level roadmap selection and double-tier sub-dashboard level switches
  - Coordinate scroll recovery on mount

## 5. Configure Text Linting (Vale)
- [x] Create `.vale.ini` configuration file in the project root to scan prose content

## 6. Configure CI/CD GitHub Actions Pipeline
- [x] Create `.github/workflows/ci.yml` executing linting, unit tests, and Playwright E2E browser tests automatically on push / PR

## 7. Pipeline Verification
- [ ] Run `npm run test` to verify Vitest strategy rules pass
- [ ] Run `npm run test:ui` (Playwright) to verify browser flows pass headlessly
- [ ] Test the pre-commit Git hook to verify commits are automatically protected
