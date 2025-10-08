# Playwright End-to-End Testing

This project now includes Playwright for comprehensive end-to-end testing.

## Running Tests

### Basic Commands

```bash
# Run all tests
pnpm test:e2e

# Run tests in UI mode (interactive)
pnpm test:e2e:ui

# Run tests in debug mode
pnpm test:e2e:debug

# Show test report
pnpm test:e2e:report

# Run specific test file
pnpm exec playwright test e2e/basic-functionality.spec.ts

# Run tests in specific browser
pnpm exec playwright test --project=chromium
pnpm exec playwright test --project=firefox
pnpm exec playwright test --project=webkit
```

### Test Structure

- `e2e/basic-functionality.spec.ts` - Core site functionality tests
- `e2e/homepage.spec.ts` - Homepage-specific tests
- `e2e/about.spec.ts` - About page comprehensive tests
- `e2e/navigation.spec.ts` - Navigation and routing tests
- `e2e/projects.spec.ts` - Projects page tests

### Configuration

The tests are configured to:
- Automatically start your dev server on `http://localhost:3000`
- Run across Chromium, Firefox, and WebKit browsers
- Include GitHub Actions workflow for CI/CD
- Generate HTML reports for test results

### Writing Tests

Example test structure:
```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test('should do something', async ({ page }) => {
    await page.goto('/');

    // Your test logic here
    await expect(page.getByText('Expected Text')).toBeVisible();
  });
});
```

### Best Practices

1. **Use semantic selectors**: Prefer `getByRole`, `getByText`, `getByLabel` over CSS selectors
2. **Wait for elements**: Use `toBeVisible()` assertions to ensure elements are loaded
3. **Test user workflows**: Focus on real user interactions
4. **Keep tests isolated**: Each test should be independent
5. **Use page object pattern**: For complex pages, create page object classes

### Debugging Tests

- Use `pnpm test:e2e:debug` to run tests in debug mode
- Add `await page.pause()` in your test to pause execution
- Use browser dev tools when running in headed mode
- Check the generated screenshots and videos in `test-results/`

### CI/CD Integration

E2E tests are integrated into your CI/CD pipeline and will **fail early** to prevent broken code from being deployed:

#### Feature Branch Workflow
- **Triggers**: Push to `feat/*`, `fix/*`, `chore/*`, etc. branches and PRs to main
- **Test Flow**: `install` → `lint` → `typecheck` → **`e2e-tests`** → `build` → `deploy`
- **Fail Fast**: If E2E tests fail, the build and deployment steps are skipped
- **PR Comments**: Automatic test result comments on pull requests

#### Release Workflow
- **Triggers**: PR merged to main, manual workflow dispatch
- **Test Flow**: `validate` → **`e2e-tests`** → `build` → `deploy` → `tag-release`
- **Production Safety**: E2E tests must pass before any production deployment
- **Artifact Upload**: Test reports, videos, and screenshots are saved on failure

#### Test Reporting
- ✅ **Pass**: Green checkmark with link to full report
- ❌ **Fail**: Red X with links to reports and video recordings
- 📊 **Artifacts**: Test reports retained for 7 days, videos on failure
- 🔗 **GitHub Integration**: Results appear in PR checks and commit status

#### Manual Testing
You can also run the E2E workflow manually from the GitHub Actions tab with custom environment settings.

---

# Cucumber BDD Testing

This project includes Cucumber for Behavior-Driven Development (BDD) testing, allowing you to write human-readable test scenarios.

## Running BDD Tests

### Basic Commands

```bash
# Run all BDD tests
pnpm test:cucumber
# or
pnpm test:bdd

# Run tests in watch mode (for TDD)
pnpm test:cucumber:watch

# Run only smoke tests
pnpm test:cucumber:smoke

# Run with pretty formatting
pnpm test:cucumber:debug
```

### Feature Files Structure

```
features/
├── homepage.feature          # Homepage behavior scenarios
├── about.feature            # About page scenarios
├── step-definitions/        # TypeScript step implementations
│   ├── navigation.steps.ts  # Navigation and common steps
│   └── about.steps.ts       # About page specific steps
└── support/                 # Test configuration and setup
    ├── world.ts            # Custom World class with Playwright
    └── hooks.ts            # Before/After scenario hooks
```

### Writing Feature Files

Feature files use Gherkin syntax for human-readable test scenarios:

```gherkin
@smoke @homepage
Feature: Portfolio Homepage
  As a visitor to the portfolio website
  I want to see the main content and navigation
  So that I can learn about Mina Demian and navigate the site

  Background:
    Given I am on the homepage

  Scenario: Homepage loads successfully
    Then I should see the main heading "Products, Not Code" or similar
    And I should see the developer profile image
    And I should see the navigation menu

  @navigation
  Scenario: Navigation links work correctly
    When I click on the "About" navigation link
    Then I should be on the about page
    And the page should load without errors
```

### Step Definitions

Step definitions are written in TypeScript with Playwright integration:

```typescript
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('I am on the homepage', async function (this: CustomWorld) {
  await this.goto('/');
});

Then('I should see the main heading {string} or similar', async function (this: CustomWorld, expectedText: string) {
  if (!this.page) throw new Error('Page not initialized');

  const headings = this.page.locator('h1, h2').first();
  await expect(headings).toBeVisible();
});
```

### Tags and Test Organization

Use tags to organize and run specific test subsets:

- `@smoke` - Critical functionality tests
- `@navigation` - Navigation-related scenarios
- `@responsive` - Responsive design tests
- `@homepage`, `@about` - Page-specific tests

```bash
# Run only smoke tests
pnpm test:cucumber --tags @smoke

# Run navigation tests
pnpm test:cucumber --tags @navigation

# Exclude certain tags
pnpm test:cucumber --tags "not @slow"
```

### Configuration

BDD tests are configured via `cucumber.config.js`:

- **Browser**: Uses Playwright with Chromium (configurable)
- **Parallel**: Runs up to 2 scenarios in parallel
- **Retry**: Automatically retries failed scenarios once
- **Reports**: Progress bar + pretty formatting
- **Screenshots**: Automatic screenshots on test failures

### TDD Workflow with BDD

1. **Write Feature**: Create `.feature` file with scenario
2. **Run Tests**: `pnpm test:cucumber:watch` (will show missing steps)
3. **Implement Steps**: Add step definitions in TypeScript
4. **Implement Code**: Write actual application code to make tests pass
5. **Refactor**: Improve code while keeping tests green

### Best Practices

- **Feature Files**: Focus on business value, not implementation details
- **Step Reuse**: Write reusable steps for common actions
- **Page Objects**: Use the CustomWorld class for browser interactions
- **Tags**: Organize tests with meaningful tags for selective running
- **Background**: Use Background for common setup across scenarios