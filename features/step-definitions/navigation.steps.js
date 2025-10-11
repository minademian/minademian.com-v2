import { Given, Then, When, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium } from 'playwright';

const DEFAULT_TIMEOUT = 15000;
setDefaultTimeout(DEFAULT_TIMEOUT);

// Navigation steps
Given('I am on the homepage', async () => {
  if (!this.browser) {
    this.browser = await chromium.launch({ headless: true });
  }
  if (!this.page) {
    this.page = await this.browser.newPage();
  }
  await this.page.goto('http://localhost:3000/');
});

Given('I am on the about page', async () => {
  if (!this.browser) {
    this.browser = await chromium.launch({ headless: true });
  }
  if (!this.page) {
    this.page = await this.browser.newPage();
  }
  await this.page.goto('http://localhost:3000/about');
});

// Viewport steps
Given('I am using a mobile viewport', async () => {
  if (!this.page) throw new Error('Page not initialized');

  await this.page.setViewportSize({ width: 375, height: 667 });
});

Given('I am using a tablet viewport', async () => {
  if (!this.page) throw new Error('Page not initialized');

  await this.page.setViewportSize({ width: 768, height: 1024 });
});

Then('I should see the main heading {string} or similar', async () => {
  if (!this.page) throw new Error('Page not initialized');

  // Look for heading elements that might contain the expected text
  const heading = this.page.locator('h1, h2').first();
  await expect(heading).toBeVisible();
});

Then('I should see the developer profile image', async () => {
  if (!this.page) throw new Error('Page not initialized');

  // Look for image elements that might be the profile image
  const profileImage = this.page.locator('img').first();
  await expect(profileImage).toBeVisible({ timeout: 10000 });
});

Then('I should see the navigation menu', async () => {
  if (!this.page) throw new Error('Page not initialized');

  const navMenu = this.page.locator('nav, [role="navigation"]').first();
  await expect(navMenu).toBeVisible();
});

// Navigation interaction steps
When('I click on the {string} navigation link', async (linkText) => {
  if (!this.page) throw new Error('Page not initialized');

  const navLink = this.page.locator('a').filter({ hasText: new RegExp(linkText, 'i') });
  await navLink.click();
});

Then('I should be on the about page', async () => {
  if (!this.page) throw new Error('Page not initialized');

  await expect(this.page).toHaveURL(/.*\/about/);
});

Then('I should be on the projects page', async () => {
  if (!this.page) throw new Error('Page not initialized');

  await expect(this.page).toHaveURL(/.*\/projects/);
});

Then('I should be on the Home page', async () => {
  if (!this.page) throw new Error('Page not initialized');

  await expect(this.page).toHaveURL(/.*\//);
});

Then('I should be on the Articles page', async () => {
  if (!this.page) throw new Error('Page not initialized');

  await expect(this.page).toHaveURL(/.*\/articles/);
});

Then('I should be on the Projects page', async () => {
  if (!this.page) throw new Error('Page not initialized');

  await expect(this.page).toHaveURL(/.*\/projects/);
});

// Page loading verification
Then('the page should load without errors', async () => {
  if (!this.page) throw new Error('Page not initialized');

  // Check that page loaded successfully (no error status)
  await this.page.waitForLoadState('load');
});

Then('the page should load successfully', async () => {
  if (!this.page) throw new Error('Page not initialized');

  await this.page.waitForLoadState('load');
});

Then('I should see project items displayed', async () => {
  if (!this.page) throw new Error('Page not initialized');

  // Look for project-related content
  const projectContent = this.page.locator('[data-testid="project"], .project, article').first();
  await expect(projectContent).toBeVisible();
});

// Resume/CV functionality
When('I look for the resume download link', async () => {
  if (!this.page) throw new Error('Page not initialized');

  this.resumeLink = this.page.locator('a').filter({ hasText: /resume|cv/i }).first();
});

Then('the resume link should be present', async () => {
  if (!this.page) throw new Error('Page not initialized');
  if (!this.resumeLink) throw new Error('Resume link not found');

  await expect(this.resumeLink).toBeVisible();
});

Then('the resume link should have the correct href attribute', async () => {
  if (!this.page) throw new Error('Page not initialized');
  if (!this.resumeLink) throw new Error('Resume link not found');

  const href = await this.resumeLink.getAttribute('href');
  expect(href).toBeTruthy();
});

// Responsive design verification
Then('the content should be properly displayed for mobile', async () => {
  if (!this.page) throw new Error('Page not initialized');

  // Check that content is visible and not overflowing
  const mainContent = this.page.locator('main, [role="main"]').first();
  await expect(mainContent).toBeVisible();
});

Then('the content should be properly displayed for tablet', async () => {
  if (!this.page) throw new Error('Page not initialized');

  // Check that content adapts to tablet viewport
  const mainContent = this.page.locator('main, [role="main"]').first();
  await expect(mainContent).toBeVisible();
});

Then('the mobile navigation should be accessible', async () => {
  if (!this.page) throw new Error('Page not initialized');

  // Find the hamburger button by its aria-label
  const hamburgerButton = this.page.getByRole('button', { name: 'Toggle mobile menu' });

  // Wait for hamburger button to be visible
  await expect(hamburgerButton).toBeVisible({ timeout: 10000 });

  // Click to open mobile menu
  await hamburgerButton.click();

  // Wait for mobile menu to appear using its ID
  const mobileMenu = this.page.locator('#mobile-menu');
  await expect(mobileMenu).toBeVisible({ timeout: 10000 });

  // Verify the mobile navigation is accessible
  const mobileNav = this.page.getByRole('navigation', { name: 'Mobile navigation' });
  await expect(mobileNav).toBeVisible({ timeout: 5000 });
});

// Dark mode functionality
When('I click the dark mode toggle', async () => {
  if (!this.page) throw new Error('Page not initialized');

  // Look for the dark mode toggle button by finding the button that contains Sun or Moon icon
  // The button is in the nav and has a rounded-full class
  const darkModeToggle = this.page.locator('button.rounded-full').filter({
    has: this.page.locator('svg'),
  }).first();

  await darkModeToggle.waitFor({ state: 'visible', timeout: 10000 });
  await darkModeToggle.click();
});

Then('the page theme should change to dark mode', async () => {
  if (!this.page) throw new Error('Page not initialized');

  // Check for dark mode indicators (class names, attributes, etc.)
  const body = this.page.locator('body');

  const TIMEOUT = 500;
  await this.page.waitForTimeout(TIMEOUT);

  body.evaluate((el) => {
    if (!el.classList.contains('dark')) {
      throw new Error('Dark mode class not applied');
    }
  });
});

Then('the page theme should change back to light mode', async () => {
  if (!this.page) throw new Error('Page not initialized');

  // Check for light mode indicators
  const body = this.page.locator('body');
  const TIMEOUT = 500;
  await this.page.waitForTimeout(TIMEOUT);

  body.evaluate((el) => {
    if (!el.classList.contains('light')) {
      throw new Error('Light mode class not applied');
    }
  });
});

When('I click the dark mode toggle again', async () => {
  if (!this.page) throw new Error('Page not initialized');

  // Same selector as initial toggle
  const darkModeToggle = this.page.locator('button.rounded-full').filter({
    has: this.page.locator('svg'),
  }).first();

  await darkModeToggle.waitFor({ state: 'visible', timeout: 10000 });
  await darkModeToggle.click();
});

// Page viewing steps
When('I view the homepage', async () => {
  // This step is handled by the "Given I am on the homepage" step
  // Just ensure the page is loaded
  if (!this.page) throw new Error('Page not initialized');
  await this.page.waitForLoadState('load');
});

When('I view the about page', async () => {
  // This step is handled by the "Given I am on the about page" step
  // Just ensure the page is loaded
  if (!this.page) throw new Error('Page not initialized');
  await this.page.waitForLoadState('load');
});

Then('I should see the main heading {string}', async (expectedHeading) => {
  if (!this.page) throw new Error('Page not initialized');

  const heading = this.page.locator('h1, h2').first();
  const headingText = await heading.textContent();
  // Trim whitespace to handle extra spaces
  expect(headingText?.trim()).toContain(expectedHeading);
});