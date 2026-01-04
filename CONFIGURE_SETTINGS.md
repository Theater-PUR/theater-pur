# Configure Site Settings in Sanity Studio

## Steps to add Hero content:

1. **Start Sanity Studio** (if not already running):
   ```bash
   bun studio
   ```
   This opens at http://localhost:3333

2. **Navigate to "Seiteneinstellungen" (Site Settings)** in the left sidebar

3. **Fill in the Hero-Bereich (Hero Section) fields**:
   - **Hero Untertitel**: e.g., "Willkommen bei Theaterpur Weyhe"
   - **Hero Haupttitel**: e.g., "Die Bühne ist bereitet" 
   - **Hero Beschreibung**: Your custom description
   - **Hero CTA Button Text**: e.g., "Tickets Sichern"
   - **Hero CTA Button Link**: e.g., "/aktuell"
   - **Hero Sekundärer CTA Button Text**: e.g., "Mehr Erfahren"
   - **Hero Sekundärer CTA Button Link**: e.g., "/ueber-uns"

4. **Fill in other sections** as needed:
   - **Navigation**: CTA button in header
   - **Kontakt**: Contact information and social links
   - **Über Uns**: About section content and statistics
   - **Footer**: Footer CTA and copyright text

5. **Click "Publish"** in the top right corner

6. **Refresh your frontend** - the changes should appear within ~10 seconds (CDN cache)

## If changes don't appear:

1. Check browser console for "Site Settings loaded:" log
2. Wait 10-30 seconds for CDN cache to clear
3. Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
4. Clear React Query cache by restarting the dev server

## Current Defaults (when not configured):

The site shows these fallback values if Sanity fields are empty:
- Hero Subtitle: "Willkommen bei Theaterpur Weyhe"
- Hero Title: "Die Bühne ist bereitet"
- Hero Description: "Erleben Sie unvergessliche Theatermomente..."
- CTA Text: "Tickets Sichern"
- etc.

