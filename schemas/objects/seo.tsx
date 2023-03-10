import { defineField, defineType } from 'sanity';

export const seo = defineType({
    name: 'seo',
    title: 'Search Engine Optimization',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'desc',
            title: 'Description',
            type: 'text'
        }),
        defineField({
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [
                {type: 'string'}
            ]
        }),
        defineField({
            name: 'image',
            title: 'OG Image',
            type: 'image',
            description: (
                <>
                    This is the preview image for sharing. <a href='https://www.kapwing.com/resources/what-is-an-og-image-make-and-format-og-images-for-your-blog-or-webpage/'>Learn more</a>
                </>)
        }),
        defineField({
            name: 'indexPage',
            title: 'Index Page',
            type: 'boolean',
            initialValue: false,
            description: "When this is turned on, Google and other search engines will be able to see and show this page in search results. (Initial Value is false)"
        })
    ],
})