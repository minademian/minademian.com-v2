# Deployment Guide

This guide covers all deployment scenarios for the minademian.com website, including production releases, sandbox previews, and the automated release system.

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