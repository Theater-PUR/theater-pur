# Sanity Studio Schemas

This folder contains schema definitions for your Sanity Studio project. You'll need to set up Sanity Studio separately (it's a different project that runs independently).

## Quick Setup

1. Create a new Sanity project:
   ```bash
   npm create sanity@latest -- --project-id YOUR_PROJECT_ID --dataset production --template clean
   ```

2. Copy the schema files from this folder into your Sanity Studio's `schemas/` folder

3. Update `schemas/index.ts` in your Sanity Studio to import these schemas

4. Add your Sanity credentials to your Lovable project via environment variables:
   - `VITE_SANITY_PROJECT_ID` - Your Sanity project ID (find it at sanity.io/manage)
   - `VITE_SANITY_DATASET` - Usually "production"

## Schema Overview

- **play.ts** - Stage plays with cast, performances, ticket pricing
- **newsPost.ts** - Blog/news articles
- **teamMember.ts** - Theater group members
- **siteSettings.ts** - Global site configuration
