import { defineField, defineType } from 'sanity';

export const cta = defineType({
    name: 'cta',
    title: 'Call to Action',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'reference',
            to: {type: 'pages'}
        }),
    ],
})