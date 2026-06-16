import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import work from '../sanity/schemas/work.js'

export default defineConfig({
  name: 'anton-kruse',
  title: 'Anton Kruse',

  projectId: 'wnzzyqoh',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: [work],
  },
})
