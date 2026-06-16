import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'wnzzyqoh',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01'
})

export async function getWorks() {
  return client.fetch(`
    *[_type == "work" && visible == true] | order(year desc) {
      _id,
      title,
      year,
      medium,
      tags,
      exhibition,
      "imageUrl": images[0].asset->url + "?w=1400&auto=format&q=85"
    }
  `)
}
