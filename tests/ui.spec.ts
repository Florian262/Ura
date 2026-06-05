import { test, expect } from '@playwright/test';

test.describe('Ura Language Portal E2E UI Automation Flows', () => {
  test.beforeEach(async ({ page }) => {
    // 1. Open the page
    await page.goto('/');

    // 2. Clear localStorage to guarantee a clean slate onboarding check
    await page.evaluate(() => window.localStorage.clear());
    await page.reload();
  });

  test('Should navigate welcome onboarding, enter dashboard, explore levels, and load Chapter 1', async ({ page }) => {
    // ---- STEP A: ONBOARDING ----
    // Wait for the 5-second welcoming splash screen to fade out and be unmounted
    await expect(page.locator('h1:has-text("Ura e Gjuhës")')).toBeHidden({ timeout: 8000 });

    // Verify onboarding welcome page is displayed
    const title = page.locator('h1:has-text("Mëso Turqisht")');
    await expect(title).toBeVisible();

    // Fill in username
    const nameInput = page.locator('input[placeholder="Shkruani emrin tuaj..."]');
    await expect(nameInput).toBeVisible();
    await nameInput.fill('Florian');

    // Click Vazhdo to go to Quiz step
    const nextButton = page.locator('button:has-text("Vazhdo")');
    await nextButton.click();

    // Select quiz option to go to Success step
    const quizOption = page.locator('button:has-text("Të gjitha këto")');
    await expect(quizOption).toBeVisible();
    await quizOption.click();

    // Click Fillo Mësimin to enter Dashboard
    const startButton = page.locator('button:has-text("Fillo Mësimin")');
    await expect(startButton).toBeVisible();
    await startButton.click();

    // ---- STEP B: LEVEL ROADMAP SELECTION DASHBOARD ----
    // Assert redirect to Dashboard and check welcome username message inside the profile badge
    const welcomeUser = page.locator('text=Florian');
    await expect(welcomeUser).toBeVisible();

    const mainHeader = page.locator('h1');
    await expect(mainHeader).toContainText('UDHËTIMI I DIJES SATE');

    // Locate the Active Level Card
    const activeLevelCard = page.locator('button:has-text("NIVELI A1")');
    await expect(activeLevelCard).toBeVisible();

    // Verify visual progress tracker exists
    await expect(activeLevelCard).toContainText('Përparimi');

    // ---- STEP C: TIER 2 LESSON ROADMAP VIEW ----
    // Click active level card to enter chapters sub-grid
    await activeLevelCard.click();

    // Verify back button and lesson titles
    const backButton = page.locator('button:has-text("Kthehu te Nivelet")');
    await expect(backButton).toBeVisible();

    const levelHeader = page.locator('h2');
    await expect(levelHeader).toContainText('FILL ESTAR');

    const firstChapter = page.locator('button:has-text("Mësimi 1")');
    await expect(firstChapter).toBeVisible();
    await expect(firstChapter).toContainText('Tanışma ve Çoğul Eki');

    const secondChapter = page.locator('button:has-text("Mësimi 2")');
    await expect(secondChapter).toBeVisible();
    await expect(secondChapter).toContainText('Sınıfta ve Evde');

    // ---- STEP D: LESSON VIEWPORT & STATE ----
    // Click chapter 1 to load the lesson container
    await firstChapter.click();

    // Verify active chapter is successfully mounted and header is visible
    const stickyPanel = page.locator('header.sticky:has-text("← Paneli")');
    await expect(stickyPanel).toBeVisible();
    
    // Assert coordinates tabs are present
    const readingTab = page.locator('button:has-text("Leximi")');
    await expect(readingTab).toBeVisible();
    
    const vocabTab = page.locator('button:has-text("Fjalori")');
    await expect(vocabTab).toBeVisible();
  });
});
