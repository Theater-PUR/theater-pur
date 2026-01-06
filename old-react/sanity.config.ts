import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/sanity-schemas'

export default defineConfig({
  name: 'default',
  title: 'Theater Pur Homepage',

  projectId: '3aql3s3c',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
