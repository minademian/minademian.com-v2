import { expect, test } from '@playwright/test';

test.describe('Portfolio Page', () => {
  test('loads portfolio page successfully', async ({ page }) => {
    await page.goto('/portfolio');

    // Check that the page loads without errors
    await expect(page).toHaveURL(/\/portfolio\/?$/);
  });

  test('displays main heading', async ({ page }) => {
    await page.goto('/portfolio');

    // Check for the main animated text heading
    await expect(page.getByText('Portfolio')).toBeVisible();
  });

  test('displays featured site section', async ({ page }) => {
    await page.goto('/portfolio');

    // Check for the featured site
    await expect(page.getByText('Featured Site')).toBeVisible();
    await expect(page.getByText('Voltaire Stockholm')).toBeVisible();
  });

  test('displays site description', async ({ page }) => {
    await page.goto('/portfolio');

    // Check for site description
    await expect(page.getByText(/modern website for Voltaire Stockholm/)).toBeVisible();
  });

  test('displays tech stack', async ({ page }) => {
    await page.goto('/portfolio');

    // Check for technology tags
    await expect(page.getByText('Parcel')).toBeVisible();
    await expect(page.getByText('HTML')).toBeVisible();
    await expect(page.getByText('JavaScript')).toBeVisible();
    await expect(page.getByText('SCSS')).toBeVisible();
  });

  test('has proper page metadata', async ({ page }) => {
    await page.goto('/portfolio');

    // Check page title
    await expect(page).toHaveTitle(/portfolio/i);
  });

  test('page is responsive on different screen sizes', async ({ page }) => {
    await page.goto('/portfolio');

    // Test desktop view
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.getByText('Portfolio')).toBeVisible();
    await expect(page.getByText('Voltaire Stockholm')).toBeVisible();

    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.getByText('Portfolio')).toBeVisible();

    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByText('Portfolio')).toBeVisible();
  });

  test('navigation from portfolio page works', async ({ page }) => {
    await page.goto('/portfolio');

    // Test navigation to about page
    const aboutLink = page.getByRole('link', { name: /about/i }).first();
    if (await aboutLink.isVisible()) {
      await aboutLink.click();
      await expect(page).toHaveURL(/\/about\/?$/);
    }
  });

  test('page loads without JavaScript errors', async ({ page }) => {
    const errors: string[] = [];

    page.on('pageerror', (error) => {
      errors.push(error.message);
    });

    await page.goto('/portfolio');
    await page.waitForLoadState('networkidle');

    expect(errors).toEqual([]);
  });
});
