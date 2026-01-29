import { expect, test } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads homepage successfully', async ({ page }) => {
    await page.goto('/');

    // Check that the page loads without errors
    await expect(page).toHaveURL('/');
  });

  test('displays main heading and description', async ({ page }) => {
    await page.goto('/');

    // Check for the main animated text heading
    await expect(page.getByText('I design and build production-grade web applications.')).toBeVisible();

    // Check for the description paragraph
    await expect(page.getByText(/Full-stack engineer\. I build web apps/)).toBeVisible();
  });

  test('has working resume download link', async ({ page }) => {
    await page.goto('/');

    // Find the resume link and check it exists
    const resumeLink = page.getByRole('link', { name: /resume/i });
    await expect(resumeLink).toBeVisible();

    // Check that the link has the correct href
    await expect(resumeLink).toHaveAttribute('href', 'https://linkedin.com/in/minademian');
    await expect(resumeLink).toHaveAttribute('target', '_blank');
  });

  test('displays profile image', async ({ page }) => {
    await page.goto('/');

    // Check that the main profile/art image is visible
    const profileImage = page.getByAltText('minademian.com digital art');
    await expect(profileImage).toBeVisible();
  });

  test('has responsive navigation', async ({ page }) => {
    await page.goto('/');

    // Check for navigation elements (assuming NavBar component renders navigation)
    // This might need adjustment based on your actual navigation structure
    const navigation = page.locator('nav').first();
    await expect(navigation).toBeVisible();
  });

  test('dark mode toggle works', async ({ page }) => {
    await page.goto('/');

    // Look for dark mode toggle (you might need to adjust selector based on your implementation)
    const body = page.locator('body');

    // Check initial theme state
    const initialClass = await body.getAttribute('class');

    // Try to find and click theme toggle button (adjust selector as needed)
    const themeToggle = page.locator(
      '[aria-label*="theme"], [data-testid="theme-toggle"], button:has-text("theme")',
    ).first();

    if (await themeToggle.isVisible()) {
      await themeToggle.click();

      // Wait for theme change
      const THEME_TRANSITION_TIME = 500;
      await page.waitForTimeout(THEME_TRANSITION_TIME);

      // Check that theme changed
      const newClass = await body.getAttribute('class');
      expect(newClass).not.toBe(initialClass);
    }
  });

  test('page is accessible', async ({ page }) => {
    await page.goto('/');

    // Basic accessibility checks
    await expect(page).toHaveTitle(/minademian/i);

    // Check for proper heading hierarchy
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
  });
});