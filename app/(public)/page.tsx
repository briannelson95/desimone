import Image from 'next/image'
import Hero from '@/components/Hero'
import { client } from '@/lib/sanity.client'
import { homepage } from '@/lib/queries'
import ServicesBar from '@/components/ServicesBar'
import FeaturedVideos from '@/components/FeaturedVideos'
import { Metadata } from 'next'
import urlFor from '@/lib/urlFor'

export async function generateMetadata() {
  const data = await client.fetch(homepage);
  const settings = data.siteSettings[0]
  const seo = data.homePage[0].seo ? data.homePage[0].seo : data.siteSettings[0].seo;
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

export default async function Home() {
  const data = await client.fetch(homepage)
  const pageData = data.homePage[0];
  // console.log(pageData.cta)
  
  return (
    <main>
      <Hero 
        title={data.siteSettings[0].title} 
        cta={pageData.cta} 
        desktop={pageData.desktop}
        mobile={pageData.mobile}
      />
      <section className='space-y-6'>
        <ServicesBar services={pageData.services} />
        <FeaturedVideos videos={data.videos.allVideos} />
      </section>
    </main>
  )
}
