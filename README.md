# Theater Pur Homepage 2026

A modern theater website with integrated CMS powered by Sanity.

## Quick Start

### Prerequisites

- [Bun](https://bun.sh) - Fast all-in-one JavaScript runtime

### Installation

```bash
# Install dependencies
bun install
```

### Development

Run both services in separate terminals:

```bash
# Terminal 1: Frontend (http://localhost:5173)
bun dev

# Terminal 2: Sanity Studio CMS (http://localhost:3333)
bun studio
```

## Technologies

### Frontend

- **Vite** - Build tool and dev server
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **React Router** - Navigation
- **TanStack Query** - Data fetching

### CMS

- **Sanity** - Headless CMS
- Integrated content management for:
  - Theater plays/productions
  - News posts
  - Team members
  - Site settings

## Project Structure

```
/
├── src/
│   ├── components/        # React components
│   ├── pages/            # Page components
│   ├── sanity-schemas/   # Sanity content schemas
│   └── lib/              # Utilities and Sanity client
├── sanity.config.ts      # Sanity Studio config
└── package.json          # Unified dependencies
```

## Content Management

See [SANITY_SETUP.md](./SANITY_SETUP.md) for detailed CMS documentation.

## Available Scripts

### Frontend

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun preview` - Preview production build
- `bun lint` - Run ESLint

### Sanity Studio

- `bun studio` - Start CMS locally
- `bun studio:build` - Build CMS
- `bun studio:deploy` - Deploy CMS to Sanity hosting

## Deployment

### Frontend

Build and deploy the `dist` folder to your hosting provider:

```bash
bun build
```

### Sanity Studio

Deploy the CMS to Sanity's hosting:

```bash
bun studio:deploy
```

## Why Unified Repository?

This project uses a single repository for both frontend and CMS:

- ✅ Single source of truth for content schemas
- ✅ Simplified dependency management
- ✅ Easier deployment and CI/CD
- ✅ No need to sync changes between repos
