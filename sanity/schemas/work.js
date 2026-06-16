export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: Rule => Rule.required().min(1900).max(2100)
    },
    {
      name: 'medium',
      title: 'Medium',
      type: 'string',
      description: 'e.g. Oil on Canvas, Photography, Video Installation'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{
        type: 'image',
        options: { hotspot: true }
      }],
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: '— Year —',         value: '' },
          { title: '2022',              value: '2022' },
          { title: '2023',              value: '2023' },
          { title: '2024',              value: '2024' },
          { title: '2025',              value: '2025' },
          { title: '2026',              value: '2026' },
          { title: '— Medium —',       value: '' },
          { title: 'Painting',         value: 'Painting' },
          { title: 'Drawing',          value: 'Drawing' },
          { title: 'Photography',      value: 'Photography' },
          { title: 'Sculpture',        value: 'Sculpture' },
          { title: 'Video',            value: 'Video' },
          { title: 'Installation',     value: 'Installation' },
          { title: 'Mixed Media',      value: 'Mixed Media' },
          { title: 'Performance',      value: 'Performance' },
          { title: '— Context —',      value: '' },
          { title: 'Exhibition',       value: 'Exhibition' },
          { title: 'Documentation',    value: 'Documentation' },
          { title: 'Series',           value: 'Series' },
          { title: 'Commission',       value: 'Commission' },
          { title: '— Format —',       value: '' },
          { title: 'Large Format',     value: 'Large Format' },
          { title: 'Monochrome',       value: 'Monochrome' },
          { title: 'Abstract',         value: 'Abstract' },
          { title: 'Figurative',       value: 'Figurative' },
          { title: '— Attribute —',    value: '' },
          { title: 'Light',            value: 'Light' },
          { title: 'Sound',            value: 'Sound' },
          { title: 'Site-specific',    value: 'Site-specific' },
          { title: 'Text',             value: 'Text' },
        ]
      }
    },
    {
      name: 'exhibition',
      title: 'Exhibition (if shown)',
      type: 'string',
      description: 'e.g. Cold Logic, KW Institute Berlin'
    },
    {
      name: 'visible',
      title: 'Visible on website',
      type: 'boolean',
      initialValue: true,
      description: 'Uncheck to hide this work without deleting it'
    }
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
      media: 'images.0'
    },
    prepare({ title, year, media }) {
      return {
        title: title,
        subtitle: year,
        media: media
      }
    }
  }
}
