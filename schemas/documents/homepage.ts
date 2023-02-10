import { defineField, defineType } from 'sanity';

export const homepage = defineType({
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fieldsets: [
        {name: 'title', title: 'Page Title and Permalink'}
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            fieldset: 'title',
            readOnly: true
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            fieldset: 'title',
            readOnly: true
        })
    ],
})