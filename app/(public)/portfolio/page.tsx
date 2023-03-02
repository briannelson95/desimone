import FeaturedVideos from '@/components/FeaturedVideos';
import { portfolio } from '@/lib/queries'
import { client } from '@/lib/sanity.client'
import React from 'react'

export default async function Portfolio() {
    const data = await client.fetch(portfolio);
    return (
        <main>
            <div className='px-4 md:px-8'>
                <h1 className='text-2xl font-bold'>{data.pageData[0].title}</h1>
            </div>
            <FeaturedVideos videos={data.videos} />
        </main>
    )
}
