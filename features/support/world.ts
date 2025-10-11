import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, Page } from '@playwright/test';

export interface CustomWorldOptions extends IWorldOptions {
  parameters: {
    baseUrl: string;
  };
}

export class CustomWorld extends World {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;
  baseUrl: string;

  constructor(options: CustomWorldOptions) {
    super(options);
    this.baseUrl = options.parameters.baseUrl || 'http://localhost:3000';
  }

  async init(): Promise<void> {
    this.browser = await chromium.launch({
      headless: process.env.CI === 'true',
      slowMo: 50,
    });

    this.context = await this.browser.newContext({
      viewport: { width: 1200, height: 800 },
      ignoreHTTPSErrors: true,
    });

    this.page = await this.context.newPage();
  }

  async cleanup(): Promise<void> {
    if (this.page) {
      await this.page.close();
    }
    if (this.context) {
      await this.context.close();
    }
    if (this.browser) {
      await this.browser.close();
    }
  }

  async goto(path: string): Promise<void> {
    if (!this.page) {
      throw new Error('Page not initialized. Call init() first.');
    }
    const url = path.startsWith('http') ? path : `${this.baseUrl}${path}`;
    await this.page.goto(url, { waitUntil: 'networkidle' });
  }

  async setViewport(width: number, height: number): Promise<void> {
    if (!this.page) {
      throw new Error('Page not initialized. Call init() first.');
    }
    await this.page.setViewportSize({ width, height });
  }
}

setWorldConstructor(CustomWorld);