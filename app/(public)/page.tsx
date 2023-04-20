import Image from 'next/image'
import Hero from '@/components/Hero'
import { client } from '@/lib/sanity.client'
import { homepage } from '@/lib/queries'
import ServicesBar from '@/components/ServicesBar'
import FeaturedVideos from '@/components/FeaturedVideos'

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
