import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

When('I look for the resume download link', async function() {
  if (!this.page) throw new Error('Page not initialized');
  this.resumeLink = this.page.getByRole('link', { name: /resume|cv/i }).first();
});

Then('the resume link should be present', async function() {
  if (!this.page) throw new Error('Page not initialized');
  if (!this.resumeLink) throw new Error('Resume link not found');
  await expect(this.resumeLink).toBeVisible();
});

Then('the resume link should have the correct href attribute', async function() {
  if (!this.page) throw new Error('Page not initialized');
  if (!this.resumeLink) throw new Error('Resume link not found');
  const href = await this.resumeLink.getAttribute('href');
  expect(href).toBeTruthy();
  expect(href).toMatch(/^https?:\/\//);
});