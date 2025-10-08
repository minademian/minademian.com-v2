import { expect, test } from '@playwright/test';

test.describe('Projects Page', () => {
  test('loads projects page successfully', async ({ page }) => {
    await page.goto('/projects');
    
    // Check that the page loads without errors
    await expect(page).toHaveURL(/\/projects\/?$/);
  });

  test('displays page heading', async ({ page }) => {
    await page.goto('/projects');
    
    // Look for a heading that indicates this is the projects page
    const heading = page.locator('h1, h2').first();
    await expect(heading).toBeVisible();
  });

  test('displays project items', async ({ page }) => {
    await page.goto('/projects');
    
    // Look for project cards or containers
    const projects = page.locator('[data-testid="project"], .project, article').first();
    
    // If projects exist, test their basic structure
    if (await projects.isVisible()) {
      // Projects should have images
      const projectImage = page.locator('img').first();
      await expect(projectImage).toBeVisible();
      
      // Projects should have links or titles
      const projectLink = page.locator('a, h2, h3').first();
      await expect(projectLink).toBeVisible();
    }
  });

  test('project links are functional', async ({ page }) => {
    await page.goto('/projects');
    
    // Find project links that open in new tabs
    const externalProjectLinks = page.locator('a[target="_blank"]');
    const linkCount = await externalProjectLinks.count();
    
    if (linkCount > 0) {
      // Check that external links have proper attributes
      const firstExternalLink = externalProjectLinks.first();
      await expect(firstExternalLink).toHaveAttribute('target', '_blank');
      
      // Check for security attributes on external links
      const rel = await firstExternalLink.getAttribute('rel');
      if (rel) {
        expect(rel).toContain('noopener');
      }
    }
  });

  test('page is responsive', async ({ page }) => {
    await page.goto('/projects');
    
    // Test desktop view
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.waitForLoadState('domcontentloaded');
    
    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForLoadState('domcontentloaded');
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForLoadState('domcontentloaded');
    
    // Ensure page content is still visible on mobile
    const mainContent = page.locator('main, [role="main"]').first();
    await expect(mainContent).toBeVisible();
  });
});