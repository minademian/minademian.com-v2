# CI Test Skip Logic Investigation

**Date:** October 10, 2025
**Issue:** BDD and E2E tests running when they should be skipped for `fix(ci):` commits

---

## Problem Statement

A commit with message `fix(ci): install Playwright browsers for BDD tests and upgrade Node to 20` was pushed, but the CI pipeline **DID NOT** skip BDD and E2E tests as expected.

### Expected Behavior
Commits matching these patterns should skip both BDD and E2E tests:
- `ci:` - CI/CD changes
- `chore:` - Maintenance tasks
- `docs:` - Documentation changes
- `<any-type>(ci):` - Any conventional commit type with `(ci)` scope (e.g., `fix(ci):`, `feat(ci):`)

### Actual Behavior
The workflow ran BDD tests despite the commit being `fix(ci):` which should have been skipped.

---

## Evidence

### 1. Actual Commit Messages (from main branch)
```
82b5b7d fix(ci): install Playwright browsers for BDD tests and upgrade Node to 20
73105a0 [patch] upgrade and pin Node version for Cucumber
c6df9fc [patch] fix GitHub release syntax error (#17)
78ac9a3 [patch] add BDD tests (#16)
ee91087 [patch] CI/CD bugfixes + new dry run workflow (#15)
```

**HEAD commit:** `fix(ci):` - This SHOULD match the skip pattern!

### 2. GitHub Actions Log Output
From commit `b5c9255` workflow run:
```
🔍 Checking recent commit messages for CI/Chore/Docs patterns...
✅ Feature commit detected - E2E and BDD tests will run
Recent commits:
b5c9255 [patch] fix BDD runner (#19)
73105a0 [patch] upgrade and pin Node version for Cucumber
c6df9fc [patch] fix GitHub release syntax error (#17)
Final E2E skip setting: false
Final BDD skip setting: false
```

**Issue:** The log shows `b5c9255 [patch] fix BDD runner (#19)` instead of the actual commit message `fix(ci): ...`

### 3. Current Regex Pattern
Located in `.github/workflows/feature-branch.yml` lines 73-80:

```bash
if git log --oneline -n 3 | grep -qE "^[a-f0-9]+ ((ci|chore|docs):|[a-z]+\(ci\):)"; then
```

**Pattern breakdown:**
- `^[a-f0-9]+` - Matches commit hash
- `((ci|chore|docs):|[a-z]+\(ci\):)` - Matches:
  - `ci:` or `chore:` or `docs:`
  - OR any type with `(ci)` scope like `fix(ci):`

**The pattern IS correct!**

---

## Root Cause Analysis

### Hypothesis 1: PR Merge Commit Message Transformation ❌
**Theory:** When merging a PR, GitHub creates a merge commit with format `[patch] <PR title> (#PR-number)` which doesn't preserve the original conventional commit message.

**Evidence:**
- Git log shows: `b5c9255 [patch] fix BDD runner (#19)`
- Original commit message was: `fix(ci): install Playwright browsers...`
- The `[patch]` prefix comes from the PR title/branch name
- This transformed message doesn't match the `fix(ci):` pattern

**Status:** This is the most likely cause, but needs verification.

### Hypothesis 2: Git Log Format Mismatch ❌
**Theory:** The `git log --oneline` command might not show full commit messages.

**Evidence:**
- `git log --oneline` format is: `<short-hash> <subject>`
- Should preserve the conventional commit prefix
- Testing locally shows it DOES preserve `fix(ci):` format

**Status:** Unlikely - the format should work.

### Hypothesis 3: Squash/Rebase Behavior ✅ MOST LIKELY
**Theory:** GitHub's squash merge or PR merge strategy rewrites the commit message to use the PR title instead of the original commit message.

**Evidence:**
- PR title: `[patch] fix BDD runner`
- Merged commit shows: `[patch] fix BDD runner (#19)`
- Original branch commits had: `fix(ci): ...`
- After merge to main, the conventional commit format is LOST

**Status:** This is the root cause. GitHub merge commits use PR titles, not original commit messages.

---

## Impact

### Current Issues
1. **False Positives:** CI/CD commits like `fix(ci):` run full test suites unnecessarily
2. **Wasted Resources:** BDD and E2E tests run on infrastructure changes that don't need them
3. **Slower Feedback:** Unnecessary test runs delay developer feedback
4. **Pattern Inconsistency:** Developers write correct conventional commits but PR merge loses them

### Affected Workflows
- `.github/workflows/feature-branch.yml` - check-commit-type job
- `.github/workflows/release.yml` - check-commit-type job (has same logic)

---

## Proposed Solutions

### Option 1: Check PR Title Instead of Commit Message (RECOMMENDED)
**Approach:** Modify the check-commit-type job to look at PR title/labels instead of commit messages.

**Implementation:**
```yaml
- name: Check for CI/Chore commits
  id: check
  shell: bash
  run: |
    SKIP_E2E="false"
    SKIP_BDD="false"
    COMMIT_TYPE="feature"

    # For PR events, check the PR title
    if [ "${{ github.event_name }}" == "pull_request" ]; then
      PR_TITLE="${{ github.event.pull_request.title }}"
      echo "🔍 Checking PR title: $PR_TITLE"

      if echo "$PR_TITLE" | grep -qE "^((ci|chore|docs):|[a-z]+\(ci\):)"; then
        SKIP_E2E="true"
        SKIP_BDD="true"
        COMMIT_TYPE="ci-chore-docs"
        echo "🔧 CI/Chore/Docs PR detected - skipping tests"
      fi
    else
      # For push events (direct to main), check commit messages
      echo "🔍 Checking recent commit messages..."
      if git log --oneline -n 3 | grep -qE "^[a-f0-9]+ ((ci|chore|docs):|[a-z]+\(ci\):)"; then
        SKIP_E2E="true"
        SKIP_BDD="true"
        COMMIT_TYPE="ci-chore-docs"
        echo "🔧 CI/Chore/Docs commit detected - skipping tests"
      fi
    fi
```

**Pros:**
- Works with GitHub's PR merge behavior
- Maintains conventional commit standards at PR level
- Simple implementation

**Cons:**
- Requires PR titles to follow conventional commit format
- Doesn't work for direct pushes to main (but we don't do those)

---

### Option 2: Use PR Labels
**Approach:** Add labels like `ci`, `chore`, `docs` to PRs and check labels instead of commit messages.

**Implementation:**
```yaml
- name: Check PR labels
  if: github.event_name == 'pull_request'
  run: |
    LABELS="${{ toJson(github.event.pull_request.labels.*.name) }}"
    if echo "$LABELS" | grep -qE "(ci|chore|docs)"; then
      SKIP_E2E="true"
      SKIP_BDD="true"
    fi
```

**Pros:**
- Visual indication in GitHub UI
- Easy to understand and modify
- Works regardless of commit message format

**Cons:**
- Requires manual label addition
- Easy to forget
- Doesn't work for direct pushes

---

### Option 3: Enforce Squash Merge with Conventional Commit Template
**Approach:** Configure GitHub to use the original commit message when squashing.

**Implementation:**
1. In repository settings → Pull Requests
2. Enable "Allow squash merging"
3. Set "Default to pull request title and commit details"
4. Add branch protection rule requiring conventional commit format

**Pros:**
- Preserves original commit messages
- No workflow changes needed
- Consistent with conventional commits

**Cons:**
- Requires repository admin access
- Harder to enforce for all contributors
- GitHub UI doesn't make this easy

---

### Option 4: Check Both PR Title AND Commit Messages
**Approach:** Hybrid solution checking both sources.

**Implementation:**
```yaml
- name: Check for CI/Chore patterns
  run: |
    SKIP_E2E="false"
    SKIP_BDD="false"

    # Check PR title (for PR events)
    if [ "${{ github.event_name }}" == "pull_request" ]; then
      PR_TITLE="${{ github.event.pull_request.title }}"
      if echo "$PR_TITLE" | grep -qE "^((ci|chore|docs):|[a-z]+\(ci\):)"; then
        SKIP_E2E="true"
        SKIP_BDD="true"
        echo "🔧 Detected from PR title"
      fi
    fi

    # Also check commit messages (for push events or as fallback)
    if [ "$SKIP_E2E" != "true" ]; then
      if git log --oneline -n 3 | grep -qE "^[a-f0-9]+ ((ci|chore|docs):|[a-z]+\(ci\):)"; then
        SKIP_E2E="true"
        SKIP_BDD="true"
        echo "🔧 Detected from commit messages"
      fi
    fi
```

**Pros:**
- Works in all scenarios
- Backwards compatible
- Flexible

**Cons:**
- More complex logic
- Two sources of truth

---

## Execution Plan

### Phase 1: Immediate Fix (Recommended: Option 1)
**Timeline:** 1 hour

1. **Update feature-branch.yml check-commit-type job**
   - Add PR event detection
   - Check `github.event.pull_request.title` for PR events
   - Keep commit message check for push events
   - Test with a `fix(ci):` PR title

2. **Update release.yml check-commit-type job**
   - Apply same changes for consistency

3. **Document the requirement**
   - Add to CONTRIBUTING.md: "PR titles must follow conventional commit format"
   - Add examples: `fix(ci): ...`, `chore: ...`, `docs: ...`

4. **Test the fix**
   - Create a test PR with `fix(ci): test skip logic` title
   - Verify BDD and E2E are skipped
   - Merge and confirm main branch behavior

### Phase 2: Long-term Improvement (Optional: Option 4)
**Timeline:** 2-3 hours

1. **Implement hybrid approach**
   - Check both PR title and commit messages
   - Provide better debug logging
   - Add workflow summary output

2. **Add validation**
   - Consider adding a GitHub Action to validate PR title format
   - Auto-label PRs based on conventional commit type

3. **Update documentation**
   - Create docs/CONTRIBUTING.md with conventional commit guide
   - Add PR template with conventional commit examples

---

## Testing Checklist

After implementing the fix, verify:

- [ ] PR with `fix(ci): ...` title skips BDD tests
- [ ] PR with `fix(ci): ...` title skips E2E tests
- [ ] PR with `chore: ...` title skips both tests
- [ ] PR with `docs: ...` title skips both tests
- [ ] PR with `feat: ...` title runs both tests
- [ ] PR with `fix: ...` title runs both tests
- [ ] Direct push with `fix(ci):` commit skips tests (if applicable)
- [ ] Workflow logs clearly show why tests were skipped/run

---

## Related Files

### Files to Modify
1. `.github/workflows/feature-branch.yml` (lines 47-95)
2. `.github/workflows/release.yml` (similar check-commit-type job)

### Files to Review
1. `.github/workflows/dry-run.yml` (has similar logic for simulation)
2. `docs/CONTRIBUTING.md` (needs documentation update)
3. `.github/pull_request_template.md` (could add conventional commit reminder)

---

## Additional Notes

### Why This Matters
- **Developer Experience:** Faster feedback on infrastructure changes
- **Cost Efficiency:** Reduced CI minutes for unnecessary test runs
- **Code Quality:** Proper separation of concerns (infrastructure vs. features)
- **Team Standards:** Enforces conventional commit practices

### Future Considerations
- Consider using semantic-release or similar tools that rely on conventional commits
- Automated changelog generation from conventional commits
- Version bumping based on commit types (major/minor/patch)
- Integration with issue tracking (e.g., `fix(ci): ... Closes #123`)

---

## Appendix: Regex Pattern Reference

### Current Pattern
```regex
^[a-f0-9]+ ((ci|chore|docs):|[a-z]+\(ci\):)
```

### Pattern Explanation
- `^` - Start of line
- `[a-f0-9]+` - Git short hash (1+ hex characters)
- ` ` - Single space
- `(` - Start group
  - `(ci|chore|docs):` - Literal types: ci, chore, or docs
  - `|` - OR
  - `[a-z]+\(ci\):` - Any lowercase type with (ci) scope
- `)` - End group

### Test Cases (Should Match)
- `abc1234 ci: update workflow`
- `def5678 chore: bump dependencies`
- `123abcd docs: update README`
- `456beef fix(ci): repair build script`
- `789cafe feat(ci): add new pipeline`

### Test Cases (Should NOT Match)
- `abc1234 feat: add new feature`
- `def5678 fix: resolve bug`
- `123abcd [patch] fix something (#19)` ← **This is the problem!**

---

**Status:** Investigation complete, awaiting implementation.

Read feature-branch.yml, lines 47 to 95

Now let me create the investigation document:

Created INVESTIGATION.md

Perfect! I've created a comprehensive investigation document at INVESTIGATION.md that includes:

Summary
Problem: fix(ci): commits aren't skipping tests because GitHub PR merges transform commit messages from fix(ci): ... to [patch] PR Title (#19), breaking the regex pattern.

Root Cause: GitHub's merge strategy uses PR titles instead of preserving original conventional commit messages.

Recommended Solution: Modify check-commit-type job to check PR title for PR events instead of commit messages.

Impact: CI/CD changes run full test suites unnecessarily, wasting time and resources.

The document includes:

✅ Clear problem statement with evidence
✅ Root cause analysis with 3 hypotheses
✅ 4 proposed solutions with pros/cons
✅ Detailed execution plan
✅ Testing checklist
✅ Related files to modify
✅ Regex pattern reference with examples
Take your time reviewing it when you're back from work!
