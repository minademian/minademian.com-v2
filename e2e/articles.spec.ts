import { expect, test } from '@playwright/test';

test.describe('Articles Page', () => {
  test('loads articles page successfully', async ({ page }) => {
    await page.goto('/articles');

    // Check that the page loads without errors
    await expect(page).toHaveURL(/\/articles\/?$/);
  });

  test('displays main heading', async ({ page }) => {
    await page.goto('/articles');

    // Check for the main animated text heading
    await expect(page.getByText('Writing')).toBeVisible();
  });

  test('displays Documentation Library section', async ({ page }) => {
    await page.goto('/articles');

    // Check for Documentation Library
    await expect(page.getByText('Documentation Library')).toBeVisible();
    await expect(page.getByText(/technical guides covering CI\/CD/)).toBeVisible();

    // Check GitHub link
    const docLink = page.getByRole('link', { name: /Documentation Library/i });
    await expect(docLink).toHaveAttribute('href', /github\.com\/minademian\/documentation-library/);
    await expect(docLink).toHaveAttribute('target', '_blank');
  });

  test('displays Blog section', async ({ page }) => {
    await page.goto('/articles');

    // Check for Blog section
    await expect(page.getByText('Blog')).toBeVisible();
    await expect(page.getByText(/short-form writing/)).toBeVisible();

    // Check blog link
    const blogLink = page.getByRole('link', { name: /Blog/i });
    await expect(blogLink).toHaveAttribute('href', 'https://blog.minademian.com');
    await expect(blogLink).toHaveAttribute('target', '_blank');
  });

  test('displays featured articles', async ({ page }) => {
    await page.goto('/articles');

    // Check for specific article titles
    await expect(page.getByText('Lessons Learned from React Native App Production')).toBeVisible();
    await expect(page.getByText('Grafting TDD into a Legacy React Native Codebase')).toBeVisible();
    await expect(page.getByText('Timeboxing Ideas with AI-Assisted Engineering')).toBeVisible();
  });

  test('articles have read time displayed', async ({ page }) => {
    await page.goto('/articles');

    // Check for read time indicators
    const readTimes = page.getByText(/\d+ min read/);
    await expect(readTimes.first()).toBeVisible();
  });

  test('article links point to external sites', async ({ page }) => {
    await page.goto('/articles');

    // Check LinkedIn article links
    const linkedInLinks = page.locator('a[href*="linkedin.com"]');
    const linkCount = await linkedInLinks.count();
    expect(linkCount).toBeGreaterThan(0);

    // Check that external links open in new tabs
    const firstLinkedInLink = linkedInLinks.first();
    await expect(firstLinkedInLink).toHaveAttribute('target', '_blank');
  });

  test('blog article links are present', async ({ page }) => {
    await page.goto('/articles');

    // Check for blog.minademian.com links
    const blogLinks = page.locator('a[href*="blog.minademian.com"]');
    const linkCount = await blogLinks.count();
    expect(linkCount).toBeGreaterThan(0);
  });

  test('page is responsive on different screen sizes', async ({ page }) => {
    await page.goto('/articles');

    // Test desktop view
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.getByText('Writing')).toBeVisible();
    await expect(page.getByText('Documentation Library')).toBeVisible();

    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.getByText('Writing')).toBeVisible();

    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByText('Writing')).toBeVisible();
  });

  test('navigation from articles page works', async ({ page }) => {
    await page.goto('/articles');

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

    await page.goto('/articles');
    await page.waitForLoadState('networkidle');

    expect(errors).toEqual([]);
  });
});
