import { Then, When } from '@cucumber/cucumber';

When('I click the dark mode toggle', async function() {
  if (!this.page) throw new Error('Page not initialized');

  const darkModeToggle = this.page.locator('button.rounded-full').filter({
    has: this.page.locator('svg'),
  }).first();

  await darkModeToggle.waitFor({ state: 'visible', timeout: 10000 });
  await darkModeToggle.click();
});

Then('the page theme should change to dark mode', async function() {
  if (!this.page) throw new Error('Page not initialized');

  const body = this.page.locator('body');
  const TIMEOUT = 500;
  await this.page.waitForTimeout(TIMEOUT);

  body.evaluate((el) => {
    if (!el.classList.contains('dark')) {
      throw new Error('Dark mode class not applied');
    }
  });
});

Then('the page theme should change back to light mode', async function() {
  if (!this.page) throw new Error('Page not initialized');

  const body = this.page.locator('body');
  const TIMEOUT = 500;
  await this.page.waitForTimeout(TIMEOUT);

  body.evaluate((el) => {
    if (!el.classList.contains('light')) {
      throw new Error('Light mode class not applied');
    }
  });
});

When('I click the dark mode toggle again', async function() {
  await this.steps['I click the dark mode toggle']();
});