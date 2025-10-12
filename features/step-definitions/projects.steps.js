import { Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

const DEFAULT_TIMEOUT = 15000;
setDefaultTimeout(DEFAULT_TIMEOUT);

Then('I should see the main heading Projects or similar', async function(expectedHeading) {
  if (!this.page) throw new Error('Page not initialized');

  const heading = await this.page.getByRole('main').getByText(expectedHeading).click();
  await expect(heading).toBeVisible();
});

Then('I should see the featured project', async function() {
  if (!this.page) throw new Error('Page not initialized');

  const featuredProject = this.page.locator('[data-testid="featured-project"], .featured-project, article').first();
  await expect(featuredProject).toBeVisible();

  const projectContent = featuredProject.locator('h2, h3, p');
  const contentCount = await projectContent.count();
  expect(contentCount).toBeGreaterThan(0);
});

Then('I should see the the video with the button overlay', async function() {
  if (!this.page) throw new Error('Page not initialized');

  await this.page.waitForLoadState('load');

  const video = this.page.locator('video');
  await expect(video).toBeVisible({ timeout: 10000 });

  const buttonOverlay = await this.page.getByRole('button', { name: 'Play video' });
  await expect(buttonOverlay).toBeVisible({ timeout: 10000 });
});
