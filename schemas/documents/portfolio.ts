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
            description: "The first 3 videos will be used on the homepage as 'Featured Videos'."
        }),
    ],
})