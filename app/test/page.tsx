import VideoBackground from '@/components/VideoBackground'
import YouTubeBackground from '@/components/YouTubeVideoBackground'
import React from 'react'

export default function page() {
    return (
        <div className=''>
            <div className='relative bg-black/50 h-screen flex flex-col justify-center items-center text-white text-center'>
                <VideoBackground videoId='pCf4QvfOJ34' />
                
                <div className='absolute h-screen flex flex-col justify-center items-center text-white text-center'>
                    <h1 className='text-5xl font-extrabold uppercase'>Nicholas Desimone</h1>
                    <p className='text-xl'>This is a test of the fonts</p>
                </div>
            </div>
            <div className='m-4'>
                <h2 className='text-3xl font-bold'>Another Section</h2>
                <p className='text-xl'>More data will go here</p>
            </div>
            {/* <YouTubeBackground videoId='EOAMz5uh6p0' /> */}
        </div>
    )
}
