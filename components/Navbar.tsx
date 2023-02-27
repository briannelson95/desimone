import React from 'react'

type Navigation = {
    slug: Slug
    title: string
}

type Slug = {
    '_type': string
    current: string
}

interface Props {
    navigation: Navigation[]
}

export default function Navbar() {
    return (
        <nav className='w-full bg-zinc-900 text-white px-10 py-5 font-bold'>
            <ul className='flex items-center uppercase justify-end'>
                <li className='first:mr-auto'><div className='w-[222px] h-[126px] bg-white' /></li>
                <li>Portfolio</li>
            </ul>
        </nav>
    )
}
