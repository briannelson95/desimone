import { VideoPreview } from '@/components/sanityPreviewComponents';
import { defineField, defineType } from 'sanity';

export const youtube = defineType({
    name: 'youtube',
    title: 'YouTube Emebed',
    type: 'object',
    fields: [
        defineField({
            name: 'url',
            type: 'url',
            title: 'YouTube video URL',
        })
    ],
    preview: {
        select: {
            // title: 'media.alt',
            url: 'url',
            // media: 'media.image', //adding this makes the image show up in standard preview components
        },
    },
})