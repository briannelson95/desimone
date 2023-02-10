import { defineField, defineType } from 'sanity';

export const mainImage = defineType({
    name: 'mainImage',
    title: 'Main Image',
    type: 'object',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: 'Required. Used for accessibilty and SEO purposes',
            validation: Rule => Rule.required().max(96).warning('Keep this short')
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Optional'
        })
    ],
})