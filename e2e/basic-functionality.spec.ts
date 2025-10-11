import { expect, test } from '@playwright/test';

test.describe('Basic Site Functionality', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');

    // Check basic elements are present
    await expect(page.getByText('Turning Ideas Into Scaleable Products')).toBeVisible();
    await expect(page.getByText(/As an experienced full-stack engineer/)).toBeVisible();
  });

  test('navigation links work', async ({ page }) => {
    await page.goto('/');

    // Test About page navigation
    const aboutLink = page.getByRole('link', { name: /about/i }).first();
    if (await aboutLink.isVisible()) {
      await aboutLink.click();
      await expect(page).toHaveURL(/\/about\/?$/);
    }

    // Go back to home
    await page.goto('/');

    // Test Projects page navigation
    const projectsLink = page.getByRole('link', { name: /projects/i }).first();
    if (await projectsLink.isVisible()) {
      await projectsLink.click();
      await expect(page).toHaveURL(/\/projects\/?$/);
    }
  });

  test('external resume link works', async ({ page }) => {
    await page.goto('/');

    const resumeLink = page.getByRole('link', { name: /resume/i });
    if (await resumeLink.isVisible()) {
      await expect(resumeLink).toHaveAttribute('target', '_blank');
      await expect(resumeLink).toHaveAttribute('href', /minademian\.com.*\.pdf/);
    }
  });

  test('site is responsive', async ({ page }) => {
    await page.goto('/');

    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForLoadState('domcontentloaded');

    // Check that main content is still visible
    await expect(page.getByText('Turning Ideas Into Scaleable Products')).toBeVisible();

    // Test desktop viewport
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.waitForLoadState('domcontentloaded');

    await expect(page.getByText('Turning Ideas Into Scaleable Products')).toBeVisible();
  });
});