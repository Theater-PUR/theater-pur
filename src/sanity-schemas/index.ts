// Sanity Studio Schema Index
// Copy this file to your Sanity Studio project's schemas folder
// and update the import paths accordingly

import play from './play'
import newsPost from './newsPost'
import teamMember from './teamMember'
import siteSettings from './siteSettings'

export const schemaTypes = [
  // Document types
  play,
  newsPost,
  teamMember,
  siteSettings,
]
