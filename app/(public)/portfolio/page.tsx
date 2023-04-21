import FeaturedVideos from '@/components/FeaturedVideos';
import { portfolio } from '@/lib/queries'
import { client } from '@/lib/sanity.client'
import urlFor from '@/lib/urlFor';
import { groq } from 'next-sanity';
import React from 'react';

export async function generateMetadata() {
  const data = await client.fetch(portfolio);
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

export default async function Portfolio() {
    const data = await client.fetch(portfolio);
    return (
        <main>
            <div className='px-4 md:px-8 lg:px-32'>
                <h1 className='text-2xl font-bold'>{data.pageData[0].title}</h1>
            </div>
            <FeaturedVideos videos={data.videos[0].allVideos} />
        </main>
    )
}
