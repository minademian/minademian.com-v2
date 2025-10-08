# minademian.com

[![CI/CD Pipeline](https://github.com/minademian/minademian.com-v2/actions/workflows/feature-branch.yml/badge.svg)](https://github.com/minademian/minademian.com-v2/actions/workflows/feature-branch.yml)
[![Production Deploy](https://github.com/minademian/minademian.com-v2/actions/workflows/release.yml/badge.svg)](https://github.com/minademian/minademian.com-v2/actions/workflows/release.yml)
[![E2E Tests](https://github.com/minademian/minademian.com-v2/actions/workflows/e2e.yml/badge.svg)](https://github.com/minademian/minademian.com-v2/actions/workflows/e2e.yml)

A modern, high-performance portfolio website built with Next.js 14 and TypeScript, featuring automated deployment pipelines and comprehensive CI/CD workflows.

🌐 **Live Site**: [minademian.com](https://minademian.com/)

## 🏗️ Architecture

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS + Custom SCSS modules
- **Package Manager**: pnpm for efficient dependency management
- **Build**: Static site generation (SSG) with optimized output
- **Testing**: End-to-end testing with Playwright (Chromium, Firefox, WebKit)
- **Deployment**: Multi-environment with automated CI/CD

## 📋 Documentation

- **[CHANGELOG.md](./CHANGELOG.md)** - Project history and version updates
- **[DEPLOYING.md](./DEPLOYING.md)** - Comprehensive deployment guide and workflows
- **[TESTING.md](./TESTING.md)** - End-to-end testing setup, usage, and CI/CD integration

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
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint              # Run ESLint
pnpm lint:fix-trailing # Fix trailing spaces only
pnpm type-check        # Run TypeScript compiler check

# Testing
pnpm test:e2e           # Run end-to-end tests
pnpm test:e2e:ui        # Run tests in interactive UI mode
pnpm test:e2e:debug     # Run tests in debug mode
pnpm test:e2e:report    # Show test report

# BDD Testing (Cucumber)
pnpm test:cucumber        # Run Cucumber BDD tests
pnpm test:cucumber:watch  # Run BDD tests in watch mode (TDD)
pnpm test:cucumber:smoke  # Run only smoke tests (@smoke tagged)
pnpm test:bdd            # Alias for test:cucumber

# Git Pre-commit
pnpm pre-commit-check     # Full checks before commit (lint + types)
```

## ⚙️ Development Configuration

### Environment Variables

The application uses Next.js built-in environment handling. Create `.env.local` for local development:

```bash
# Local development overrides (not committed)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For deployment configuration and CI/CD setup, see **[DEPLOYING.md](./DEPLOYING.md)**.

## 🧪 Testing

This project uses comprehensive **End-to-End (E2E)** and **Behavior-Driven Development (BDD)** testing:

- **Playwright E2E**: Cross-browser testing with CI integration
- **Cucumber BDD**: Human-readable scenarios with TypeScript support
- **Smart Optimization**: E2E tests automatically skipped for CI/CD commits

For complete testing documentation, see **[TESTING.md](./TESTING.md)**.

## 📄 License

This project is private and proprietary. All rights reserved.

---

Built with ❤️ using modern web technologies and enterprise-grade deployment practices.
