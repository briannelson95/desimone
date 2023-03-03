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
            name: 'navigation',
            title: 'Navigation',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {type: 'pages'}
                    ]
                }
            ]
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image'
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
        }),
        defineField({
            name: 'indexSite',
            title: 'Index Site',
            type: 'boolean',
            initialValue: false,
            description: "When this is turned on, Google and other search engines will be able to see and show your site in search results. (Initial Value is false)"
        })
    ],
})