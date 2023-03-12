import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'carousel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    // defineField({
    //   name: 'bannerImages',
    //   title: 'banners',
    //   type: 'array',
    //   of: [{type: 'image'}],
    // }),
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
