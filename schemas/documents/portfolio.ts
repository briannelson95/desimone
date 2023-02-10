import { VideoPreview } from '@/components/sanityPreviewComponents';
import { defineField, defineType } from 'sanity';

export const portfolio = defineType({
    name: 'portfolio',
    title: 'Portfolio',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            readOnly: true
        }),
        defineField({
            name: 'allVideos',
            title: 'All Videos',
            type: 'videos',
        }),
    ],
})