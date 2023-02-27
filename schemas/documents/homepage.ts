import { MediaPreview } from '@/components/sanityPreviewComponents';
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
        }),
        defineField({
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'reference',
            to: {
                type: 'mediaLibrary',
                components: {
                    preview: MediaPreview
                }
            }
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
        defineField({
            name: 'services',
            title: 'Services',
            type: 'array',
            of: [
                {
                    type: 'services'
                }
            ]
        }),
        defineField({
            name: 'seo',
            title: 'Search Engine Optimization',
            type: 'seo'
        })
    ],
})