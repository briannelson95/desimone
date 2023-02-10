import { defineField, defineType } from 'sanity';

export const contact = defineType({
    name: 'contact',
    title: 'Contact',
    type: 'object',
    fields: [
        defineField({
            name: 'email',
            title: 'Main Email',
            type: 'string',
            validation: (Rule: any) =>
                Rule.regex(
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    {
                        name: 'Email',
                        invert: false
                    }
                )
        }),
        defineField({
            name: 'phone',
            title: 'Main Phone Number',
            type: 'string',
            validation: (Rule: any) =>
                Rule.regex(
                    /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                    {
                        name: 'Phone',
                        invert: false
                    }
                )
        })
    ],
})