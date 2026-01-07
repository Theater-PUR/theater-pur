# Theaterpur Weyhe - Homepage 2026

Website for **Theaterpur Weyhe**, an amateur theater company based in Weyhe, Germany. Built with Next.js 16 and Sanity CMS, featuring a dark, elegant theater theme with integrated ticket sales via Fienta.

## 🎭 About

Theaterpur Weyhe has been bringing passionate theater performances to audiences since 2002. This website serves as the digital home for the theater group, showcasing current and past productions, news, team information, and enabling ticket sales for upcoming performances.

## ✨ Features

- **Dynamic Content Management** - Powered by Sanity CMS with visual editing capabilities
- **Current Play Showcase** - Detailed pages for active productions with performance schedules
- **Archive System** - Browse past productions by year
- **News & Updates** - Blog-style news section with categories
- **Ticket Integration** - Seamless Fienta.com integration for online ticket sales
- **Image Galleries** - Beautiful photo galleries for each production
- **Contact Form** - Integrated contact functionality
- **Draft Mode** - Preview unpublished content before going live
- **Responsive Design** - Optimized for all devices with a modern dark theme
- **SEO Optimized** - Dynamic metadata generation

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **CMS:** [Sanity v4](https://www.sanity.io/) with Visual Editing
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Package Manager:** [Bun](https://bun.sh/)
- **Ticketing:** [Fienta API](https://fienta.com/)

## 📦 Project Structure

```
homepage-2026/
├── app/                      # Next.js App Router
│   ├── aktuell/             # Current play page
│   ├── archiv/              # Archive pages (by year/slug)
│   ├── neuigkeiten/         # News section
│   ├── ueber-uns/           # About & contact pages
│   ├── studio/              # Sanity Studio (mounted at /studio)
│   └── api/                 # API routes (draft mode)
├── components/              # React components
│   ├── layout/             # Layout components (Header, Footer, etc.)
│   └── ui/                 # shadcn/ui components
├── sanity/                  # Sanity CMS configuration
│   ├── schemaTypes/        # Content schemas (Play, News, Settings, etc.)
│   └── lib/                # Sanity utilities and queries
├── lib/                     # Utilities
│   ├── sanity-data.ts      # Data fetching functions
│   └── fienta.ts           # Fienta API integration
└── types/                   # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (or Node.js 20+)
- [Sanity account](https://www.sanity.io/) and project
- [Fienta account](https://fienta.com/) (optional, for ticket integration)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd homepage-2026
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   SANITY_API_TOKEN=your_api_token
   ```

4. **Run the development server:**

   ```bash
   bun dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000)

5. **Access Sanity Studio:**

   Navigate to [http://localhost:3000/studio](http://localhost:3000/studio) to manage content

## 📝 Content Management

### Sanity Studio

The Sanity Studio is integrated directly into the Next.js application at `/studio`. Content editors can manage:

- **Theaterstücke (Plays)** - Productions with cast, performances, galleries, and pricing
- **Neuigkeiten (News)** - Blog posts and announcements
- **Seiteneinstellungen (Site Settings)** - Global site configuration including:
  - Hero section content
  - Navigation and footer
  - Contact information
  - Social media links
  - Current play reference
  - Fienta organizer ID

### Content Types

#### Play (Theaterstück)

- Title, author, director, year
- Cover image and gallery
- Description and detailed synopsis
- Cast members
- Performance schedule (can be synced from Fienta)
- Ticket pricing
- Active/archive status

#### News Post (Neuigkeit)

- Title, slug, cover image
- Excerpt and full content (rich text)
- Categories (Backstage, Ankündigung, Aufführung, etc.)
- Publication date

#### Site Settings

Centralized configuration for all site-wide content and settings

## 🎟️ Fienta Integration

The website integrates with [Fienta.com](https://fienta.com/) to fetch event data and enable ticket sales.

### Setup

1. Add your Fienta Organizer ID to Site Settings in Sanity Studio
2. Performances matching the play title will be automatically fetched
3. Ticket booking links will be displayed on the current play page

### How it Works

- The `lib/fienta.ts` module handles API communication
- Events are fetched by organizer ID and filtered by play title
- Performance data is transformed into the site's format
- Booking URLs link directly to Fienta checkout

## 🎨 Customization

### Theme

The site uses a dark theater theme with Tailwind CSS. Customize colors and styling in:

- `app/globals.css` - CSS variables and custom styles
- `tailwind.config.js` - Tailwind configuration (if needed)

### Components

UI components are built with shadcn/ui and can be customized:

```bash
# Add new components
bunx shadcn@latest add [component-name]
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy!

### Environment Variables for Production

Ensure these are set in your deployment platform:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_API_TOKEN` (for ISR and draft mode)

## 📄 Scripts

```bash
# Development
bun dev          # Start dev server

# Production
bun build        # Build for production
bun start        # Start production server

# Linting
bun lint         # Run ESLint
```

## 🔒 Draft Mode

Preview unpublished content using Next.js Draft Mode:

- **Enable:** Visit `/api/draft-mode/enable`
- **Disable:** Visit `/api/draft-mode/disable`
- A banner appears when draft mode is active
- Changes in Sanity Studio appear immediately

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Commit your changes: `git commit -am 'Add new feature'`
3. Push to the branch: `git push origin feature/my-feature`
4. Open a Pull Request

## 📧 Support

For questions or support regarding:

- **Website Content:** Contact through the website form or Theaterpur Weyhe directly
- **Technical Issues:** Open an issue in this repository

## 📄 License

This project is proprietary and confidential. All rights reserved © Theaterpur Weyhe.

---

**Built with ❤️ for Theaterpur Weyhe** 🎭
