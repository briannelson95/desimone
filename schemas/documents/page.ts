import { MediaPreview } from '@/components/sanityPreviewComponents';
import { defineField, defineType } from 'sanity';

export const page = defineType({
    name: 'pages',
    title: 'Pages',
    type: 'document',
    fieldsets: [
        {
            name: 'main',
            options: {
                columns: 2,
            }
        }
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'title'}
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
    ],
    preview: {
        select: {
            title: 'title',
            media: 'featuredImage.media.image', //adding this makes the image show up in standard preview components
        },
    },
})