import Link from 'next/link';
import React from 'react'
import VideoBackground from './VideoBackground'

type Props = {
    title?: string;
    cta?: Cta;
}

export default function Hero({title, cta}: Props) {
    return (
        <div className='relative bg-black/50 h-screen flex flex-col justify-center items-center text-white text-center'>
            <VideoBackground />
            <div className='absolute h-screen flex flex-col justify-center items-center text-white text-center space-y-4'>
                <h1 className='text-5xl font-extrabold uppercase'>{title ? title : "Desimone"}</h1>
                {cta 
                    ? <Link href={`/${cta.url.slug.current}`} className='bg-white text-black px-3 py-2'>
                        {cta.title}
                    </Link>
                    : null
                }
                
                {/* <p className='text-xl'>This is a test of the fonts</p> */}
            </div>
        </div>
    )
}
