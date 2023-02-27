import React from 'react'
import VideoBackground from './VideoBackground'

type Props = {
    title?: string
}

export default function Hero({title}: Props) {
    return (
        <div className='relative bg-black/50 h-screen flex flex-col justify-center items-center text-white text-center'>
            <VideoBackground />
            
            <div className='absolute h-screen flex flex-col justify-center items-center text-white text-center'>
                <h1 className='text-5xl font-extrabold uppercase'>{title ? title : "Desimone"}</h1>
                <p className='text-xl'>This is a test of the fonts</p>
            </div>
        </div>
    )
}
