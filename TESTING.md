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