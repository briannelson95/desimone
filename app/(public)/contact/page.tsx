import ContactForm from '@/components/ContactForm'
import { contact } from '@/lib/queries'
import { client } from '@/lib/sanity.client'
import urlFor from '@/lib/urlFor';
import React from 'react';

export async function generateMetadata() {
    const data = await client.fetch(contact);
    const settings = data.siteSettings[0]
    const seo = data.pageData[0].seo ? data.pageData[0].seo : data.siteSettings[0].seo;
    return {
      title: seo.title ? seo.title : settings.title,
      description: seo.desc ? seo.desc : settings.seo.desc,
      openGraph: {
        siteName: settings.title,
        title: seo.title ? seo.title : settings.seo.title,
        description: seo.desc ? seo.desc : settings.seo.desc,
        images: [
          {
            url: `${urlFor(seo.image ? seo.image : settings.seo.image).url()}`,
            width: 800,
            height: 600,
          },
        ],
        locale: 'en-US',
        type: 'website',
      },
      robots: {
        index: seo.indexPage ? seo.indexPage : settings.seo.indexPage,
        follow: settings.indexSite,
        nocache: seo.indexPage ? seo.indexPage : settings.seo.indexPage,
        googleBot: {
          index: seo.indexPage ? seo.indexPage : settings.seo.indexPage,
          follow: seo.indexPage ? seo.indexPage : settings.seo.indexPage,
          noimageindex: seo.indexPage ? !seo.indexPage : !settings.seo.indexPage,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    }
}

export default async function Contact() {
    const data = await client.fetch(contact);
    const settings = data.siteSettings[0];

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 px-4 md:px-8 lg:px-32'>
            <div className='col-span-2'>
              <ContactForm />
            </div>
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
