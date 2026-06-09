# Nuxt Portfolio

A modern, multilingual portfolio website for Olivier Hayot - an analyst developer specializing in React.js, .NET Core, Vue.js, and PowerShell automation.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Building & Deployment](#building--deployment)
- [Internationalization](#internationalization)
- [Available Scripts](#available-scripts)

## 🎯 Overview

This portfolio website showcases professional experience, education, certifications, and skills. It's built with Nuxt 4, Vue 3, and Tailwind CSS, featuring:

- **Responsive Design**: Mobile-first approach using DaisyUI components
- **Multilingual Support**: Available in English and French
- **Dynamic CV Generation**: Multiple CV layout variants with print optimization
- **Analytics Integration**: Application Insights tracking
- **SEO Optimized**: Sitemap generation and meta tags

**Live Demo**: [olivier.hayot.cloud](https://olivier.hayot.cloud)

## ✨ Features

- 📱 **Responsive Web Design** - Optimized for desktop, tablet, and mobile devices
- 🌍 **Multilingual** - Full i18n support with English and French translations
- 🖨️ **Printable CV** - Multiple CV layout variants (squared, lined) with customizable sections
- 📊 **Analytics** - Application Insights integration for page view and event tracking
- 🎨 **Modern UI** - Built with Tailwind CSS and DaisyUI components
- 🚀 **Static Site Generation** - Pre-rendered static content for optimal performance
- ♿ **Accessibility** - Semantic HTML and ARIA compliance
- 🔍 **SEO Ready** - Automatic sitemap generation and meta tag configuration

## 🛠️ Tech Stack

### Frontend
- **Nuxt 4.4.7** - Vue 3 meta-framework for production-grade applications
- **Vue 3.5.28** - Progressive JavaScript framework
- **Vue Router 4.5.1** - Official router for Vue.js
- **TypeScript** - Static typing for JavaScript

### Styling
- **Tailwind CSS 4.3.0** - Utility-first CSS framework
- **DaisyUI 5.5.23** - Component library built on Tailwind CSS
- **PostCSS 8.5.6** - CSS transformations
- **Autoprefixer 10.5.0** - CSS vendor prefixing

### Modules & Integrations
- **@nuxtjs/i18n 10.4.0** - Internationalization for Nuxt
- **@nuxtjs/sitemap 8.1.0** - Sitemap generation
- **@microsoft/applicationinsights-web 3.4.1** - Application monitoring and analytics

### Utilities
- **Zod 4.4.3** - Schema validation library

## 📂 Project Structure

```
nuxt-portfolio/
├── components/          # Reusable Vue components
│   ├── cv/             # CV-related components
│   ├── form/           # Form input components
│   └── ...             # Other components
├── pages/              # Nuxt pages and routes
├── server/             # Server-side logic and API routes
├── services/           # Business logic and API services
├── helpers/            # Utility functions and helpers
├── types/              # TypeScript type definitions
├── i18n/               # Internationalization files
│   └── locales/        # Translation files (en.json, fr.json)
├── assets/             # Static assets (images, stylesheets)
├── public/             # Public static files
├── app.vue             # Root component
├── nuxt.config.ts      # Nuxt configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (or Bun, pnpm, yarn)
- npm, yarn, pnpm, or bun package manager

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd nuxt-portfolio

# Using npm
npm install

# Or using pnpm
pnpm install

# Or using yarn
yarn install

# Or using bun
bun install
```

### Verify Setup

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio running.

## 🏗️ Development

### Development Server

Start the development server with hot module replacement:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

The application will be available at `http://localhost:3000` with automatic hot-reload on file changes.

### Development Tools

- **Nuxt DevTools** - Enabled by default for debugging and component inspection
- **TypeScript Support** - Full type checking and IntelliSense
- **Vue DevTools** - Browser extension for Vue component debugging

### Code Organization Best Practices

- Components: Create reusable, single-responsibility Vue components
- Services: Place business logic and data fetching in services
- Helpers: Keep utility functions in helpers folder
- Types: Define interfaces and types in types folder

## 🔨 Building & Deployment

### Production Build

Build the application for production (static site generation):

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

This generates a static, pre-rendered site in the `.output` directory.

### Preview Production Build

Test the production build locally before deployment:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

### Static Site Generation

Generate static HTML files for all routes:

```bash
# npm
npm run generate

# pnpm
pnpm generate

# yarn
yarn generate

# bun
bun run generate
```

### Deployment

This project is configured as a static site (`preset: 'static'`). You can deploy to:

- **Vercel** - Automatic deployments from Git
- **Netlify** - Drag-and-drop or Git integration
- **GitHub Pages** - Using GitHub Actions
- **Any Static Host** - AWS S3, Firebase Hosting, etc.

For detailed deployment instructions, see [Nuxt Deployment Documentation](https://nuxt.com/docs/getting-started/deployment).

## 🌐 Internationalization

The portfolio supports multiple languages through **@nuxtjs/i18n**.

### Supported Languages
- **English** (en)
- **French** (fr)

### Language Configuration

Edit `nuxt.config.ts`:

```typescript
i18n: {
  defaultLocale: 'fr',
  locales: [
    { code: 'en', name: 'English', file: 'en.json' },
    { code: 'fr', name: 'French', file: 'fr.json' }
  ]
}
```

### Translation Files

Translation strings are stored in `i18n/locales/`:
- `en.json` - English translations
- `fr.json` - French translations

Use `$t()` function in templates to access translations:

```vue
<h1>{{ $t('welcome') }}</h1>
```

## 📝 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `nuxt dev` | Start development server with HMR |
| `build` | `nuxt build` | Build for production (static output) |
| `generate` | `nuxt generate` | Generate static HTML files |
| `preview` | `nuxt preview` | Preview production build locally |
| `postinstall` | `nuxt prepare` | Prepare Nuxt (runs automatically after install) |

## 📚 Additional Resources

- [Nuxt Documentation](https://nuxt.com/docs/getting-started/introduction)
- [Vue 3 Documentation](https://vuejs.org/guide/introduction.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [DaisyUI Documentation](https://daisyui.com/docs/install/)
- [i18n Documentation](https://i18n.nuxtjs.org/)

## 📄 License

This project is private and proprietary.

## 👤 Author

**Olivier Hayot** - Full Stack Analyst Developer

- Portfolio: [olivier.hayot.cloud](https://olivier.hayot.cloud)
- GitHub: [@h0livier](https://github.com/h0livier)
- LinkedIn: [olivier-hayot](https://www.linkedin.com/in/olivier-hayot/)
- Email: olivier.hayot.dev@gmail.com
