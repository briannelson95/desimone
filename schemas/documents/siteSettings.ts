import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fieldsets: [
        {
            name: 'socials',
            title: 'Socials'
        }
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Site Title',
            type: 'string'
        }),
        defineField({
            name: 'contact',
            title: 'Contact',
            type: 'contact'
        }),
        defineField({
            name: 'youtube',
            title: 'YouTube',
            type: 'url',
            fieldset: 'socials'
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram',
            type: 'url',
            fieldset: 'socials'
        }),
        defineField({
            name: 'facebook',
            title: 'Facebook',
            type: 'url',
            fieldset: 'socials'
        }),
        defineField({
            name: 'tiktok',
            title: 'TikTok',
            type: 'url',
            fieldset: 'socials'
        }),
        defineField({
            name: 'seo',
            title: 'Search Engine Optimization',
            type: 'seo'
        })
    ],
})