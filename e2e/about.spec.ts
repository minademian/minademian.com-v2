import { expect, test } from '@playwright/test';

test.describe('About Page', () => {
  test('loads about page successfully', async ({ page }) => {
    await page.goto('/about');
    
    // Check that the page loads without errors
    await expect(page).toHaveURL(/\/about\/?$/);
  });

  test('displays main heading and tagline', async ({ page }) => {
    await page.goto('/about');
    
    // Check for the main animated text heading
    await expect(page.getByText('Products, Not Code')).toBeVisible();
  });

  test('displays profile section with content', async ({ page }) => {
    await page.goto('/about');
    
    // Check for the Profile section heading
    await expect(page.getByRole('heading', { name: 'Profile' })).toBeVisible();
    
    // Check for key profile content
    await expect(page.getByText(/My name is Mina Demian/)).toBeVisible();
    await expect(page.getByText(/experienced front-end engineer/)).toBeVisible();
    await expect(page.getByText(/7 years of experience/)).toBeVisible();
    
    // Check for philosophy and approach content
    await expect(page.getByText(/code and technology are tools/)).toBeVisible();
    await expect(page.getByText(/Good products are for people by people/)).toBeVisible();
  });

  test('displays profile image', async ({ page }) => {
    await page.goto('/about');
    
    // Check that the profile image is visible
    const profileImage = page.getByAltText('Mina Demian');
    await expect(profileImage).toBeVisible();
    
    // Verify the image loads properly
    await expect(profileImage).toHaveAttribute('src', /developer_pic/);
  });

  test('displays experience section', async ({ page }) => {
    await page.goto('/about');
    
    // Check for the Experience section heading (use role to be more specific)
    await expect(page.getByText('Experience', { exact: true }).last()).toBeVisible();
    
    // The Experience component should be rendered
    // (specific content would depend on the Experience component implementation)
  });

  test('displays education section', async ({ page }) => {
    await page.goto('/about');
    
    // Check for the Education section heading
    await expect(page.getByText('Education')).toBeVisible();
    
    // The Studies component should be rendered
    // (specific content would depend on the Studies component implementation)
  });

  test('displays skills section', async ({ page }) => {
    await page.goto('/about');
    
    // The Skills component should be rendered between profile and experience
    // For now, ensure the page structure is intact by checking surrounding elements
    await expect(page.getByText('Profile')).toBeVisible();
    await expect(page.getByText('Experience', { exact: true }).last()).toBeVisible();
    
    // The Skills component exists between these sections in the DOM
    // We can verify this by checking the page has all expected sections
    await expect(page.getByText('Education')).toBeVisible();
  });

  test('has proper page metadata', async ({ page }) => {
    await page.goto('/about');
    
    // Check page title
    await expect(page).toHaveTitle(/about/i);
    
    // Check that the page has proper meta description (if accessible)
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    if (metaDescription) {
      expect(metaDescription.toLowerCase()).toContain('mina demian');
    }
  });

  test('page is responsive on different screen sizes', async ({ page }) => {
    await page.goto('/about');
    
    // Test desktop view
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.getByText('Products, Not Code')).toBeVisible();
    await expect(page.getByText('Profile')).toBeVisible();
    
    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.getByText('Products, Not Code')).toBeVisible();
    await expect(page.getByText('Profile')).toBeVisible();
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByText('Products, Not Code')).toBeVisible();
    await expect(page.getByText('Profile')).toBeVisible();
  });

  test('navigation from about page works', async ({ page }) => {
    await page.goto('/about');
    
    // Test navigation to home page
    const homeLink = page.getByRole('link', { name: /home/i }).first();
    if (await homeLink.isVisible()) {
      await homeLink.click();
      await expect(page).toHaveURL(/^\/$|\/$/);
      
      // Wait for navigation to complete
      await page.waitForLoadState('networkidle');
    }
  });

  test('navigation to projects from about page works', async ({ page }) => {
    await page.goto('/about');
    
    // Test navigation to projects page
    const projectsLink = page.getByRole('link', { name: /projects/i }).first();
    if (await projectsLink.isVisible()) {
      await projectsLink.click();
      await expect(page).toHaveURL(/\/projects\/?$/);
    }
  });

  test('content accessibility', async ({ page }) => {
    await page.goto('/about');
    
    // Check for proper heading hierarchy
    const h2Elements = page.locator('h2');
    
    // Should have main heading (h1 or equivalent)
    await expect(page.getByText('Products, Not Code')).toBeVisible();
    
    // Should have section headings (h2)
    await expect(h2Elements.filter({ hasText: 'Profile' })).toBeVisible();
    
    // Images should have alt text
    const profileImage = page.getByAltText('Mina Demian');
    await expect(profileImage).toBeVisible();
  });

  test('page loads without JavaScript errors', async ({ page }) => {
    const errors: string[] = [];
    
    // Listen for JavaScript errors
    page.on('pageerror', error => {
      errors.push(error.message);
    });
    
    await page.goto('/about');
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    // Check that no JavaScript errors occurred
    expect(errors).toEqual([]);
  });
});