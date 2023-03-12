import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'carouselBanner',
  title: 'carousel images',
  type: 'document',
  fields: [
    defineField({
        name: 'carouselImage',
        title: 'Carousel image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
  ],
})
