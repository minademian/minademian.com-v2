import { After, Before, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';

const DEFAULT_TIMEOUT = 15000;
setDefaultTimeout(DEFAULT_TIMEOUT);

Before(async function() {
  if (!this.browser) {
    this.browser = await chromium.launch({ headless: true });
  }
  if (!this.page) {
    this.page = await this.browser.newPage();
  }
});

After(async function() {
  if (this.page) {
    await this.page.close();
  }
  if (this.browser) {
    await this.browser.close();
  }
});