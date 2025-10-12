import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

Given('I am on the {word} page', async function(page) {
  if (!this.page) throw new Error('Page not initialized');

  const routes = {
    'homepage': '/',
    'about': '/about',
    'projects': '/projects',
    'articles': '/articles'
  };

  const path = routes[page.toLowerCase()] || '/';
  await this.page.goto(`${BASE_URL}${path}`);
});

Given('I am using a {word} viewport', async function(device) {
  if (!this.page) throw new Error('Page not initialized');

  const viewports = {
    'mobile': { width: 375, height: 667 },
    'tablet': { width: 768, height: 1024 }
  };

  await this.page.setViewportSize(viewports[device]);
});

Then('I should see the main heading {string} or similar', async function(expectedHeading) {
  if (!this.page) throw new Error('Page not initialized');
  const heading = await this.page.getByRole('heading', { name: new RegExp(expectedHeading, 'i') }).first();
  await expect(heading).toBeVisible();
});

Then('I should see the developer profile image', async function() {
  if (!this.page) throw new Error('Page not initialized');
  const profileImage = await this.page.getByRole('img', { name: 'minademian.com digital art' }).first();
  await expect(profileImage).toBeVisible({ timeout: 10000 });
});

Then('the content should be properly displayed for {word}', async function(viewport) {
  if (!this.page) throw new Error('Page not initialized');
  const mainContent = this.page.getByRole('main');
  await expect(mainContent).toBeVisible();
});

Then('I should be on the {word} page', async function(page) {
  if (!this.page) throw new Error('Page not initialized');

  const routes = {
    'homepage': '/',
    'about': '/about',
    'projects': '/projects',
    'articles': '/articles'
  };

  const path = routes[page.toLowerCase()] || '/';
  await expect(this.page).toHaveURL(new RegExp(`.*${path}`));
});

Then('the page should load successfully', async function() {
  if (!this.page) throw new Error('Page not initialized');
  await this.page.waitForLoadState('load');
});