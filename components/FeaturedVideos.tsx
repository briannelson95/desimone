import React from 'react'
import getYouTubeID from 'get-youtube-id';

type Props = {
  videos: Video[]
}

export default function FeaturedVideos({videos}: Props) {
  return (
    <div className='px-4 md:px-8 lg:px-32'>
      {videos.map((item, index) => (
        <div key={index} className='w-full md:grid md:grid-cols-3 md:gap-10'>
          <iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/${getYouTubeID(item.url)}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      ))}
    </div>
  )
}
