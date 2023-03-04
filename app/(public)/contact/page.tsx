import ContactForm from '@/components/ContactForm'
import { contact } from '@/lib/queries'
import { client } from '@/lib/sanity.client'
import React from 'react'

export default async function Contact() {
    const data = await client.fetch(contact);
    const settings = data.siteSettings[0];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 px-4 md:px-8 lg:px-32'>
            <ContactForm />
            <div>
                <h2 className='text-xl font-bold'>Email:</h2>
                <a href={`mailto:${settings.contact.email}`} className="underline">
                    {settings.contact.email}
                </a>
                <hr className='w-10/12 mx-auto my-2' />
                <h2 className='text-xl font-bold'>Phone:</h2>
                <a href={`tel:${settings.contact.phone}`} className="underline">
                    {settings.contact.phone}
                </a>
            </div>
        </div>
    )
}
