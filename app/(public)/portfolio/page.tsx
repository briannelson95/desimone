import FeaturedVideos from '@/components/FeaturedVideos';
import { portfolio } from '@/lib/queries'
import { client } from '@/lib/sanity.client'
import urlFor from '@/lib/urlFor';
import React from 'react';

export async function generateMetadata() {
    const data = await client.fetch(portfolio);
    const title = data.pageData[0].seo.title ? `${data.pageData[0].seo.title} - ${data.siteSettings[0].title}` : `${data.pageData[0].title} - ${data.siteSettings[0].title}`;
    const description = data.pageData[0].seo.desc ? data.pageData[0].seo.desc : data.siteSettings[0].seo.desc;
    const image = data.pageData[0].seo.image ? `${urlFor(data.pageData[0].seo.image).url()}` : data.pageData[0].featuredImage ? `${urlFor(data.pageData[0].featuredImage.media.image).url()}` : `${urlFor(data.siteSettings[0].seo.image).url()}`;

    return {
      title,
      description,
      openGraph: {
        siteName: data.siteSettings[0].title,
        title,
        description,
        images: [
          {
            url: image,
            width: 800,
            height: 600,
          },
        ],
        locale: 'en-US',
        type: 'website',
      },
    }
  }

export default async function Portfolio() {
    const data = await client.fetch(portfolio);
    return (
        <main>
            <div className='px-4 md:px-8'>
                <h1 className='text-2xl font-bold'>{data.pageData[0].title}</h1>
            </div>
            <FeaturedVideos videos={data.videos[0].allVideos} />
        </main>
    )
}
