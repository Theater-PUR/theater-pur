import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity configuration
// You'll need to create a Sanity project and add your project ID and dataset
const projectId = '3aql3s3c'
const dataset = 'production'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2026-01-01',
  useCdn: true, // Use CDN for faster responses in production
  perspective: 'published', // Show drafts in development
})

// Image URL builder for Sanity images
const builder = imageUrlBuilder(sanityClient)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source)
}

// Check if Sanity is configured
export function isSanityConfigured(): boolean {
  return Boolean(projectId && projectId.length > 0)
}
