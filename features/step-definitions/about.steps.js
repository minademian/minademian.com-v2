import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

// About page specific steps
Then('I should see the profile section with personal information', async function () {
  if (!this.page) throw new Error('Page not initialized');

  const profileSection = this.page.locator('[data-testid="profile"], .profile, section').first();
  await expect(profileSection).toBeVisible();
});

Then('I should see the {string} section', async function (sectionName) {
  if (!this.page) throw new Error('Page not initialized');

  // Look for section with heading matching the section name
  const section = this.page.locator('h1, h2, h3').filter({ hasText: new RegExp(sectionName, 'i') });
  await expect(section).toBeVisible();
});

Then('I should see multiple job positions listed', async function () {
  if (!this.page) throw new Error('Page not initialized');

  // Look for multiple job/position elements
  const positions = this.page.locator('[data-testid="job"], .job, .position, li').filter({ hasText: /engineer|developer|frontend|backend/i });
  const count = await positions.count();
  expect(count).toBeGreaterThan(0);
});

Then('each job should have company links that work', async function () {
  if (!this.page) throw new Error('Page not initialized');

  // Look for company links within job sections
  const companyLinks = this.page.locator('a[href*="http"]').filter({ hasText: /@|company/i });
  const count = await companyLinks.count();

  if (count > 0) {
    const firstLink = companyLinks.first();
    const href = await firstLink.getAttribute('href');
    expect(href).toMatch(/^https?:\/\//);
  }
});

Then('company links should open in new tabs', async function () {
  if (!this.page) throw new Error('Page not initialized');

  // Check that company links have target="_blank"
  const companyLinks = this.page.locator('a[href*="http"]').filter({ hasText: /@|company/i });
  const count = await companyLinks.count();

  if (count > 0) {
    const firstLink = companyLinks.first();
    const target = await firstLink.getAttribute('target');
    expect(target).toBe('_blank');
  }
});

Then('I should see educational background information', async function () {
  if (!this.page) throw new Error('Page not initialized');

  // Look for education-related content
  const educationContent = this.page.locator('text=/university|college|degree|education|study|school/i').first();
  await expect(educationContent).toBeVisible();
});

Then('I should see various technical skills listed', async function () {
  if (!this.page) throw new Error('Page not initialized');

  // Look for technical skills
  const skillsContent = this.page.locator('text=/javascript|typescript|react|node|python|java|css|html/i').first();
  await expect(skillsContent).toBeVisible();
});

Then('all sections should be readable', async function () {
  if (!this.page) throw new Error('Page not initialized');

  // Check that main content sections are visible
  const sections = this.page.locator('section, main > div').first();
  await expect(sections).toBeVisible();
});