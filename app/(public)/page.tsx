import Image from 'next/image'
import Hero from '@/components/Hero'
import { client } from '@/lib/sanity.client'
import { homepage } from '@/lib/queries'

export default async function Home() {
  const data = await client.fetch(homepage)
  
  return (
    <main>
      <Hero title={data.siteSettings[0].title} />
    </main>
  )
}
