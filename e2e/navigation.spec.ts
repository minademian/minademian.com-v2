import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test('navigates to About page', async ({ page }) => {
    await page.goto('/');

    // Find and click the About link
    const aboutLink = page.getByRole('link', { name: /about/i });
    await expect(aboutLink).toBeVisible();
    await aboutLink.click();

    // Verify we're on the about page
    await expect(page).toHaveURL(/\/about\/?$/);
  });

  test('navigates to Projects page', async ({ page }) => {
    await page.goto('/');

    // Find and click the Projects link
    const projectsLink = page.getByRole('link', { name: /projects/i });
    await expect(projectsLink).toBeVisible();
    await projectsLink.click();

    // Verify we're on the projects page
    await expect(page).toHaveURL(/\/projects\/?$/);
  });

  test('navigates to Articles page', async ({ page }) => {
    await page.goto('/');

    // Find and click the Articles link
    const articlesLink = page.getByRole('link', { name: /articles/i });
    await expect(articlesLink).toBeVisible();
    await articlesLink.click();

    // Verify we're on the articles page
    await expect(page).toHaveURL(/\/articles\/?$/);
  });

  test('logo links back to homepage', async ({ page }) => {
    // Start from another page
    await page.goto('/about');

    // Click the logo to go back home
    const logo = page.locator('[data-testid="logo"], .logo, img[alt*="logo"]').first();

    if (await logo.isVisible()) {
      await logo.click();
      await expect(page).toHaveURL(/^\/$/);
    }
  });
});

test.describe('Mobile Navigation', () => {
  test('mobile menu works on small screens', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Look for mobile menu toggle
    const mobileMenuToggle = page.locator(
      '[data-testid="mobile-menu"], .mobile-menu-toggle, button[aria-label*="menu"]',
    ).first();

    if (await mobileMenuToggle.isVisible()) {
      // Open mobile menu
      await mobileMenuToggle.click();

      // Check that navigation items are now visible
      const mobileNav = page.locator('[data-testid="mobile-nav"], .mobile-nav');
      await expect(mobileNav).toBeVisible();

      // Test navigation within mobile menu
      const aboutLink = page.getByRole('link', { name: /about/i });
      if (await aboutLink.isVisible()) {
        await aboutLink.click();
        await expect(page).toHaveURL(/\/about\/?$/);
      }
    }
  });
});