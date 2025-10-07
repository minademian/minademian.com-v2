# minademian.com

[![CI/CD Pipeline](https://github.com/minademian/minademian.com-v2/actions/workflows/feature-branch.yml/badge.svg)](https://github.com/minademian/minademian.com-v2/actions/workflows/feature-branch.yml)
[![Production Deploy](https://github.com/minademian/minademian.com-v2/actions/workflows/release.yml/badge.svg)](https://github.com/minademian/minademian.com-v2/actions/workflows/release.yml)

A modern, high-performance portfolio website built with Next.js 14 and TypeScript, featuring automated deployment pipelines and comprehensive CI/CD workflows.

🌐 **Live Site**: [minademian.com](https://minademian.com/)

## 🏗️ Architecture

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS + Custom SCSS modules  
- **Package Manager**: pnpm for efficient dependency management
- **Build**: Static site generation (SSG) with optimized output
- **Deployment**: Multi-environment with automated CI/CD

## 📋 Documentation

- **[CHANGELOG.md](./CHANGELOG.md)** - Project history and version updates
- **[DEPLOYING.md](./DEPLOYING.md)** - Comprehensive deployment guide and workflows

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or later
- pnpm (recommended) or npm

### Development Setup

```bash
# Clone the repository
git clone https://github.com/minademian/minademian.com-v2.git
cd minademian.com-v2

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix linting issues
pnpm type-check   # Run TypeScript compiler check
```

## 🔄 CI/CD Pipeline

This project features a sophisticated deployment system with automated testing, building, and multi-environment deployments.

### Workflows Overview

| Workflow | Trigger | Purpose | Deployment Target |
|----------|---------|---------|-------------------|
| **Feature Branch** | Push to `feat/*`, `fix/*`, etc. | Testing + Sandbox Preview | `sandbox/{branch-name}/` |
| **Release** | PR merge to `main` | Production Deployment | `releases/{version}/` + `latest/` |

### Feature Branch Workflow

- ✅ **Automated Testing**: Linting, type checking, build verification
- ✅ **Sandbox Deployment**: Branch-specific preview environments
- ✅ **PR Comments**: Automatic preview links in pull requests
- ✅ **Smart Optimization**: Early exit if build artifacts fail
- ✅ **Error Handling**: Comprehensive failure notifications

### Production Deployment

- 🏷️ **Semantic Versioning**: Automatic version calculation from PR content
- 📦 **Release Archives**: Permanent versioned deployments
- 🔗 **Symlink Management**: Zero-downtime updates via `latest/` pointer
- 🔒 **Security**: SSH key-based authentication with dedicated CI/CD keys

### Supported Branch Patterns

```
feat/*      # New features
fix/*       # Bug fixes  
chore/*     # Maintenance tasks
refactor/*  # Code refactoring
docs/*      # Documentation updates
test/*      # Test additions/updates
style/*     # Code style changes
perf/*      # Performance improvements
```

## ⚙️ Configuration

### Environment Variables

The application uses Next.js built-in environment handling. Create `.env.local` for local development:

```bash
# Local development overrides (not committed)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### GitHub Secrets (Required for Deployment)

```bash
SFTP_HOST=your-server.com
SFTP_USERNAME=deploy-user
SFTP_PASSWORD=secure-password  # Or use SSH keys
DEPLOY_BASE_PATH=/home/user/minademian.com
```

## 🎯 Development Workflow

1. **Create Feature Branch**
   ```bash
   git checkout -b feat/new-feature
   ```

2. **Develop & Test Locally**
   ```bash
   pnpm dev
   pnpm lint
   pnpm type-check
   ```

3. **Push for CI/CD**
   ```bash
   git push origin feat/new-feature
   ```
   - Triggers automated testing
   - Creates sandbox deployment
   - Generates preview URL in PR

4. **Production Release**
   - Merge PR to `main`
   - Automatic semantic versioning
   - Production deployment with zero downtime

## 🏛️ Project Structure

```
├── .github/
│   ├── actions/           # Reusable GitHub Actions
│   └── workflows/         # CI/CD pipeline definitions
├── public/               # Static assets
├── src/
│   ├── app/             # Next.js 14 App Router
│   ├── components/      # React components (Atomic Design)
│   ├── hooks/          # Custom React hooks
│   ├── styles/         # Global styles and SCSS modules
│   └── types/          # TypeScript type definitions
├── CHANGELOG.md        # Version history
├── DEPLOYING.md       # Deployment documentation
└── next.config.mjs    # Next.js configuration
```

## 🔧 Technical Highlights

- **Static Site Generation**: Optimized build output with trailing slashes
- **Image Optimization**: Unoptimized for static hosting compatibility  
- **TypeScript**: Strict type checking with custom type definitions
- **Code Quality**: ESLint + Prettier with automated formatting
- **Performance**: Lighthouse-optimized with Core Web Vitals focus
- **Accessibility**: WCAG compliance and semantic HTML structure

## 📚 Key Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations and transitions
- **GitHub Actions**: CI/CD automation
- **SFTP Deployment**: Secure file transfer protocol

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch following naming conventions
3. Make your changes with proper TypeScript types
4. Ensure all tests pass: `pnpm lint && pnpm type-check`
5. Submit a pull request with clear description

## 📄 License

This project is private and proprietary. All rights reserved.

---

Built with ❤️ using modern web technologies and enterprise-grade deployment practices.
