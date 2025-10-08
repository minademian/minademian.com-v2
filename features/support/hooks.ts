import { After, Before } from '@cucumber/cucumber';

import { CustomWorld } from './world';

// Scenario setup - run before each scenario
Before(async function beforeScenario(this: CustomWorld) {
  await this.init();
});

// Scenario teardown - run after each scenario
After(async function afterScenario(this: CustomWorld, scenario) {
  // Take screenshot on failure
  if (scenario.result?.status === 'FAILED' && this.page) {
    const screenshot = await this.page.screenshot({
      path: `screenshots/failed-${scenario.pickle.name?.replace(/\s+/g, '-')}-${Date.now()}.png`,
      fullPage: true,
    });

    // Attach screenshot to the report
    this.attach(screenshot, 'image/png');
  }

  await this.cleanup();
});