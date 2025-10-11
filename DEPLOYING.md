# Deployment Guide

This guide covers all deployment scenarios for the minademian.com website, including production releases, sandbox previews, and the sophisticated automated CI/CD pipeline with recent optimizations.

## Deployment Targets

### Production Environment (Latest)
- **Path**: `/latest/` → `/releases/v{version}/` (symlink)
- **URL**: https://minademian.com/latest/
- **Purpose**: Always points to the most recent tagged release
- **Trigger**: Automatic symlink update when new releases are deployed

### Release Archive
- **Path**: `/releases/v{version}/`
- **URL**: https://minademian.com/releases/v{version}/
- **Purpose**: Permanent archive of all releases
- **Trigger**: Git tags (manual or automatic via PR merge)
- **Retention**: All releases are kept for reference

### Staging Environment
- **Path**: `/staging/`
- **URL**: https://minademian.com/staging/
- **Purpose**: Manual staging deployments for testing
- **Trigger**: Manual workflow dispatch

### Sandbox Environment
- **Path**: `/sandbox/{branch-name}/`
- **URL**: https://minademian.com/sandbox/{branch-name}/
- **Purpose**: Feature branch previews and testing
- **Trigger**: Pull requests and feature branch pushes
- **Cleanup**: Periodic (manual cleanup required)

## 🔄 CI/CD Pipeline

This project features a sophisticated deployment system with automated testing, building, and multi-environment deployments with recent optimizations for performance and debugging.

### Workflows Overview

| Workflow | Trigger | Purpose | Deployment Target |
|----------|---------|---------|-------------------|
| **Feature Branch** | Push to `feat/*`, `fix/*`, etc. | Testing + Sandbox Preview | `sandbox/{branch-name}/` |
| **Release** | PR merge to `main` | Production Deployment | `releases/{version}/` + `latest/` |
| **Dry Run** | Manual (workflow_dispatch) | Simulate entire release process | No deployment (simulation only) |

### 🔍 Dry Run Workflow (`dry-run.yml`)

The dry-run workflow provides a **safe, zero-risk way** to test and visualize the entire release pipeline without actually deploying anything or creating any artifacts.

#### Purpose:
- 🎯 **Test Configuration**: Validate workflow settings before real deployments
- 📊 **Understand Pipeline**: See detailed explanation of each step
- 🐛 **Debug Issues**: Identify problems without affecting production
- 📚 **Learn System**: Educational tool for understanding CI/CD flow
- ⚡ **Performance Testing**: Simulate cache scenarios and timing

#### How to Use:
1. Go to **Actions** → **🔍 Dry Run Release**
2. Click **Run workflow**
3. Configure simulation parameters (see below)
4. Review detailed output for each job

#### Configuration Options:

| Parameter | Options | Default | Description |
|-----------|---------|---------|-------------|
| **Deployment Type** | `automatic`, `manual` | `automatic` | Type of deployment to simulate |
| **Release Type** | `major`, `minor`, `patch` | `patch` | Version bump type |
| **Skip E2E?** | `true`, `false` | `false` | Manual override to skip E2E tests |
| **Mock Commit Message** | Free text | `feat: add new feature` | Test commit message for E2E trigger logic |
| **Deploy Environment** | `production`, `staging` | `production` | Target environment |
| **Cache Scenario** | `cache-hit`, `cache-miss` | `cache-hit` | Simulate build cache behavior |

#### What It Simulates:

1. **📋 Dry Run Info**: Configuration summary
2. **🔍 Commit Analysis**:
   - Analyzes mock commit message
   - Determines if E2E should be triggered
   - Shows pattern matching logic
   - Examples:
     - `ci: update workflow` → E2E skipped
     - `feat: add feature` → E2E runs
     - `fix(ci): repair action` → E2E skipped
     - `fix: bug in app` → E2E runs

3. **🏷️ Git Tag Creation**:
   - Calculates next version number
   - Shows version bump logic
   - Example: `v2.2.3` + `patch` → `v2.2.4`
   - **Does NOT create actual tag**

4. **🔍 Lint & Type Check**:
   - Shows what linting would check
   - Explains type checking process
   - **Does NOT run actual checks**

5. **🧪 E2E Tests**:
   - Shows E2E trigger decision
   - Explains commit type analysis
   - Displays matched patterns
   - Shows skip reasons if applicable
   - **Does NOT run actual tests**

6. **🏗️ Build**:
   - Simulates cache hit/miss scenarios
   - Shows estimated build times:
     - Cache hit: ~2-3 minutes
     - Cache miss: ~5-8 minutes
   - **Does NOT create actual build**

7. **🚀 Deployment**:
   - Shows production vs staging flow
   - Displays expected URLs:
     - Production: `https://minademian.com`
     - Staging: `https://staging-minademian.vercel.app`
   - **Does NOT deploy anything**

8. **📦 GitHub Release**:
   - Shows actual commit history
   - Generates preview of release notes
   - Shows what would be published
   - **Does NOT create actual release**

9. **📊 Summary**:
   - Complete workflow overview
   - All configuration used
   - Decision points explained

#### Use Cases:

**Testing Commit Message Patterns:**
```
Mock Commit: "ci: update workflow"
→ Shows: E2E would be skipped (ci commit)

Mock Commit: "fix(ci): repair deployment"
→ Shows: E2E would be skipped (ci-scoped)

Mock Commit: "feat: add dark mode"
→ Shows: E2E would run (regular feature)
```

**Testing Version Bumps:**
```
Current: v2.2.3
Release Type: patch
→ Shows: Would create v2.2.4

Current: v2.2.3
Release Type: minor
→ Shows: Would create v2.3.0

Current: v2.2.3
Release Type: major
→ Shows: Would create v3.0.0
```

**Testing Cache Scenarios:**
```
Cache: cache-hit
→ Shows: Fast build (~2-3 min)

Cache: cache-miss
→ Shows: Full build (~5-8 min)
```

**Testing Environment Targets:**
```
Environment: production
→ Shows: Deploy to minademian.com

Environment: staging
→ Shows: Deploy to staging preview URL
```

#### Benefits:

✅ **Safe Experimentation**: Test any configuration without risk
✅ **Clear Documentation**: Each step explains what happens
✅ **Visual Learning**: See the entire pipeline flow
✅ **Debug Tool**: Understand why E2E tests run or skip
✅ **Fast Feedback**: Complete simulation in ~1-2 minutes
✅ **No Cleanup**: Nothing is created or deployed

#### Example Workflow Output:

```
════════════════════════════════════════════════════════════════
🔍 ANALYZING: Commit Message for E2E Trigger
════════════════════════════════════════════════════════════════

📝 Mock Commit Message:
   "ci: update GitHub Actions workflow"

✅ Commit matches CI-only pattern: ci:
   → E2E tests would be SKIPPED (commit-based)

🎯 Final Decision:
   ⏭️ E2E tests would be SKIPPED

════════════════════════════════════════════════════════════════
```

### Feature Branch Workflow (`feature-branch.yml`)

#### Recent Enhancements:
- ✅ **Smart E2E Optimization**: E2E tests automatically skipped for `ci` and `chore` commits
- ✅ **Configurable Debug Output**: Enable detailed logging via commit message `[DEBUG_DEPLOYMENT_INFORMATION]`
- ✅ **Consolidated Actions**: Unified deployment through `deploy-to-remote-server` action
- ✅ **Enhanced Error Handling**: Comprehensive failure notifications and PR comments

#### Key Features:
- **Automated Testing**: Linting, type checking, conditional E2E tests, build verification
- **Fail-Fast**: E2E tests run before build - failures prevent deployment
- **Sandbox Deployment**: Branch-specific preview environments
- **PR Comments**: Automatic preview links and test results in pull requests
- **Smart Optimization**: Early exit if build artifacts fail

#### E2E Test Optimization:
Commits starting with `ci` or `chore` automatically skip E2E tests to speed up CI/CD pipelines:
```
ci: update workflow syntax           ← Skips E2E
chore: update dependencies          ← Skips E2E
feat: add new component            ← Runs E2E
fix: resolve navigation bug        ← Runs E2E
```

### Production Deployment (`release.yml`)

#### Recent Enhancements:
- 🎛️ **Manual Debug Toggle**: Dropdown option in workflow dispatch for debug output
- 🔧 **Consolidated Jobs**: Removed duplicate `configure` job, enhanced `deploy-to-remote-server`
- 🔄 **Improved Job Order**: Logical flow: `create-tag` → `deploy` → `publish-release`
- 📋 **Enhanced Debugging**: Comprehensive deployment information when enabled

#### Key Features:
- **Semantic Versioning**: Automatic version calculation from PR content
- **Release Archives**: Permanent versioned deployments
- **Symlink Management**: Zero-downtime updates via `latest/` pointer
- **Security**: SSH key-based authentication with dedicated CI/CD keys
- **Manual Override**: Workflow dispatch for emergency deployments

### Configurable Debug Output

#### For Manual Deployments:
1. Go to **Actions** → **Release and Deploy**
2. Set **Enable Debug Output**: `true`
3. View comprehensive deployment information in logs

#### For Automatic Deployments:
Include `[DEBUG_DEPLOYMENT_INFORMATION]` in any recent commit message:
```bash
git commit -m "fix: resolve deployment issue [DEBUG_DEPLOYMENT_INFORMATION]"
```

### Supported Branch Patterns

```
feat/*      # New features
fix/*       # Bug fixes
chore/*     # Maintenance tasks (E2E skipped)
ci/*        # CI/CD changes (E2E skipped)
refactor/*  # Code refactoring
docs/*      # Documentation updates
test/*      # Test additions/updates
style/*     # Code style changes
perf/*      # Performance improvements
```

### Shared Actions Architecture

Recent consolidation created focused, reusable actions:

- **`create-git-tag`**: Semantic versioning and tag creation
- **`deploy-to-remote-server`**: Unified deployment with multi-mode support
- **`create-github-release`**: GitHub release creation with deployment info
- **`configure-deployment`**: Environment-aware configuration with debug support
- **`prepare-release`**: Orchestrates release preparation workflow

## ⚙️ Configuration

### Environment Variables

The application uses Next.js built-in environment handling. Create `.env.local` for local development:

```bash
# Local development overrides (not committed)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### GitHub Secrets (Required for Deployment)

These secrets must be configured in your GitHub repository settings:

```bash
# Server Connection
SFTP_HOST=your-server.com
SFTP_USERNAME=deploy-user
SFTP_PASSWORD=secure-password  # Or use SSH keys
DEPLOY_BASE_PATH=/home/user/minademian.com

# Optional: SSH Key Authentication (recommended)
SSH_PRIVATE_KEY=your-ssh-private-key
SSH_KNOWN_HOSTS=your-server-known-hosts
```

### Server Setup Requirements

Your deployment server must have:

1. **SSH/SFTP Access**: For file transfers and symlink management
2. **Web Server**: Nginx, Apache, or similar serving static files
3. **Directory Structure**:
   ```
   /home/user/minademian.com/
   ├── latest/           # Symlink to current release
   ├── staging/          # Manual staging deployment
   ├── releases/         # Versioned releases
   │   ├── v1.0.0/
   │   ├── v1.1.0/
   │   └── v1.2.0/
   └── sandbox/          # Feature branch previews
       ├── feat-new-component/
       └── fix-navigation/
   ```

4. **Permissions**: Write access for deployment user
5. **Symlink Support**: For zero-downtime deployments

## Deployment Workflows

### 1. Production Releases (`release.yml`)

#### Automatic Release via Pull Request
The recommended approach for production deployments:

1. **Create feature branch**: `feat/my-feature`, `fix/bug-name`, etc.
2. **Open Pull Request** to `main` branch
3. **Include release type** in PR title or description:
   - `feat: Add new contact form` → **minor** release
   - `fix: Correct navigation bug` → **patch** release
   - `BREAKING: Redesign homepage` → **major** release
   - Or explicitly: `[major]`, `[minor]`, `[patch]`

4. **Merge PR**: Automatically triggers:
   - Semantic version calculation
   - Git tag creation (e.g., `v1.2.3`)
   - Deployment to `/releases/v1.2.3/`
   - Update symlink: `latest` → `releases/v1.2.3`

#### Manual Release via GitHub Actions
For emergency deployments or specific scenarios:

1. Go to **Actions** → **Release and Deploy**
2. Click **Run workflow**
3. Select:
   - **Branch**: `main`
   - **Release Type**: `major`, `minor`, `patch`, or `none`
   - **Environment**: `production`, `staging`, etc.
   - **Deploy Target**: Custom path if needed

#### Direct Tag Push
Traditional git tag approach:

```bash
git tag v1.2.3
git push origin v1.2.3
```

This deploys to `/releases/v1.2.3/` and updates the symlink.

### 2. Sandbox Previews (`feature-branch.yml`)

#### Automatic Preview via Pull Request
When you open a PR, a sandbox deployment is automatically created:

- **URL**: https://minademian.com/sandbox/{sanitized-branch-name}/
- **Updated**: On every push to the PR branch
- **Comment**: Automatically added to PR with preview link

#### Manual Sandbox Deployment
For testing branches without PRs:

1. Go to **Actions** → **Test Feature Branch**
2. Click **Run workflow**
3. Enter branch name for deployment

#### Branch Name Sanitization
Special characters in branch names are converted to hyphens:
- `feat/contact-form` → `feat-contact-form`
- `fix/bug_123` → `fix-bug-123`

## Release Versioning

### Semantic Versioning
We follow [semantic versioning](https://semver.org/) (MAJOR.MINOR.PATCH):

- **MAJOR** (`1.0.0` → `2.0.0`): Breaking changes, major redesigns
- **MINOR** (`1.0.0` → `1.1.0`): New features, significant updates
- **PATCH** (`1.0.0` → `1.0.1`): Bug fixes, small improvements

### Automatic Detection
Release types are detected from PR titles and descriptions:

#### By Keywords
- **Major**: `BREAKING`, `breaking change`, `major`
- **Minor**: `feat`, `feature`, `add`, `new`
- **Patch**: `fix`, `bug`, `patch`, `update`, `improve`

#### By Explicit Tags
- `[major]` or `[MAJOR]`
- `[minor]` or `[MINOR]`
- `[patch]` or `[PATCH]`

#### Examples
```
feat: Add dark mode toggle           → v1.1.0 (minor)
fix: Correct mobile navigation bug   → v1.0.1 (patch)
BREAKING: Redesign entire layout     → v2.0.0 (major)
Update dependencies [patch]          → v1.0.2 (patch)
```

## Deployment Architecture

```
Production Server (minademian.com/)
├── latest/                       # Symlink → releases/v1.2.3/ (main website)
├── staging/                      # Manual staging deployments
├── releases/
│   ├── v1.0.0/                  # Release archive
│   ├── v1.1.0/
│   └── v1.2.3/                  # Latest release
└── sandbox/
    ├── feat-contact-form/        # Feature branch previews
    ├── fix-navigation/
    └── experimental-design/
```

## URL Structure

| Environment | URL Pattern | Example |
|-------------|-------------|---------|
| Production (Latest) | `https://minademian.com/latest/` | Always current version (main website) |
| Staging | `https://minademian.com/staging/` | Testing environment |
| Specific Release | `https://minademian.com/releases/v{version}/` | `releases/v1.2.3/` |
| Sandbox | `https://minademian.com/sandbox/{branch}/` | `sandbox/feat-contact-form/` |

## Required Secrets

Ensure these secrets are configured in GitHub repository settings:

### SFTP Deployment
- `SFTP_HOST`: Server hostname
- `SFTP_USERNAME`: SFTP username
- `SFTP_PASSWORD`: SFTP password

### Alternative SSH Configuration
- `SSH_HOST`: Server hostname
- `SSH_USERNAME`: SSH username
- `SSH_PRIVATE_KEY`: SSH private key
- `SSH_PORT`: SSH port (default: 22)

## Best Practices

### For Feature Development
1. **Always work in feature branches**: `feat/`, `fix/`, `chore/`
2. **Test in sandbox first**: Preview changes before merging
3. **Use descriptive PR titles**: Helps with automatic versioning
4. **Review sandbox deployment**: Check the preview URL in PR comments

### For Releases
1. **Use PR-based releases**: More reliable than manual tagging
2. **Include release notes**: Describe changes in PR description
3. **Test thoroughly**: Use sandbox deployments for validation
4. **Monitor deployments**: Check Actions tab for deployment status

### For Maintenance
1. **Clean up sandbox**: Periodically remove old feature branch deployments
2. **Archive old releases**: Consider retention policy for release archives
3. **Monitor disk usage**: Keep track of deployment directory sizes
4. **Update secrets**: Rotate SFTP/SSH credentials regularly

## Troubleshooting

### Common Issues

#### Deployment Fails
1. Check GitHub Actions logs
2. Verify SFTP/SSH credentials
3. Ensure server disk space
4. Check file permissions

#### Version Not Detected
1. Verify PR title contains keywords
2. Check for explicit version tags
3. Ensure PR is merged (not closed)
4. Review release detection logic in workflow

#### Symlink Issues
1. Check SSH access to server
2. Verify directory permissions
3. Ensure symlink update step runs
4. Manually fix symlink if needed:
   ```bash
   cd /
   rm -f latest
   ln -sf releases/v1.2.3 latest
   ```

#### Sandbox Not Accessible
1. Check branch name sanitization
2. Verify SFTP deployment succeeded
3. Ensure directory permissions
4. Check for conflicting deployments

### Getting Help

1. **Check Actions logs**: Detailed deployment information
2. **Review PR comments**: Sandbox URLs and deployment status
3. **Verify server state**: SSH to server and check directories
4. **Manual deployment**: Use workflow_dispatch for testing

## Migration Notes

This deployment system replaces the previous manual process and provides:

- ✅ Automatic semantic versioning
- ✅ PR-based release workflow
- ✅ Sandbox environment for testing
- ✅ Release archive with symlink management
- ✅ Comprehensive deployment logging
- ✅ Integration with GitHub PR system

The new system maintains backward compatibility with existing git tag deployments while adding modern CI/CD capabilities.