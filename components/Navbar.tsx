import urlFor from '@/lib/urlFor'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Navigation {
    slug: Slug;
    title: string;
}

interface Slug {
    current: string
}

interface Image {
    _type: "image";
    asset: Reference;
}

interface Reference {
    _ref: string;
    _type: "reference"
}

type Props = {
    navigation: Navigation[]
    image: Image
}

export default function Navbar({ navigation, image }: Props) {
    return (
        <nav className='w-full px-10 py-5 font-bold'>
            <ul className='flex items-center uppercase justify-end'>
                <li className='first:mr-auto'>
                    <Image
                        src={urlFor(image).url()} 
                        alt={'Nicholas Desimone Logo'}
                        height={100}
                        width={100}
                        className='w-[222px] h-[126px]'                    
                    />
                    {/* <div className='w-[222px] h-[126px] bg-white' /> */}
                </li>
                {navigation.map((item, index) => (
                    <li key={index} className='px-5'>
                        <Link href={`/${item.slug.current}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
