import { VideoPreview } from '@/components/sanityPreviewComponents';
import { defineField, defineType } from 'sanity';

export const videos = defineType({
    name: 'videos',
    title: 'Videos',
    type: 'array',
    of: [
        {type: 'youtube'}
    ]
})