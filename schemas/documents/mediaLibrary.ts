import { defineField, defineType } from 'sanity';
import {ImagesIcon} from '@sanity/icons';

export const mediaLibrary = defineType({
    name: 'mediaLibrary',
    title: 'Media Library',
    type: 'document',
    icon: ImagesIcon,
    fields: [
        defineField({
            name: 'media',
            type: 'mainImage'
        })
    ],
    preview: {
        select: {
            title: 'media.alt',
            url: 'media.image.asset.url',
            media: 'media.image', //adding this makes the image show up in standard preview components
        },
    },
})