import Image from 'next/image'
import Hero from '@/components/Hero'
import { client } from '@/lib/sanity.client'
import { homepage } from '@/lib/queries'
import ServicesBar from '@/components/ServicesBar'
import FeaturedVideos from '@/components/FeaturedVideos'

export default async function Home() {
  const data = await client.fetch(homepage)
  const pageData = data.homePage[0];
  // console.log(data.videos.allVideos)
  
  return (
    <main>
      <Hero title={data.siteSettings[0].title} />
      <section>
        <ServicesBar services={pageData.services} />
        <FeaturedVideos />
      </section>
    </main>
  )
}
