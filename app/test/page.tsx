import VideoBackground from '@/components/VideoBackground'
import React from 'react'

export default function page() {
    return (
        <div className='overflow-x-hidden'>
            <div className='bg-black/50 h-screen flex flex-col justify-center items-center text-white text-center relative'>
                <VideoBackground videoId='pCf4QvfOJ34' />
                {/* <div className='absolute h-screen flex flex-col justify-center items-center text-white text-center'>
                    <h1 className='text-5xl font-extrabold'>Nicholas Desimone</h1>
                    <p className='text-xl'>This is a test of the fonts</p>
                </div> */}
            </div>
            <div>
                <h2 className='text-3xl font-bold'>This is another section</h2>
                <p className='text-xl'>More text will go here</p>
            </div>
        </div>
    )
}
