"use client"

import urlFor from '@/lib/urlFor'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'

type Props = {
    navigation: Navigation[];
    image: Image;
}

export default function Navbar({ navigation, image }: Props) {
    const handleOpen = () => {
        setMenuOpen(true)
        setIcon(<XMarkIcon className='md:hidden z-[999]' height={40} width={40} onClick={handleClose} />)
    }

    const handleClose = () => {
        setMenuOpen(false)
        setIcon(<Bars2Icon className='md:hidden z-[999]' height={40} width={40} onClick={handleOpen} />)
    }

    const [menuOpen, setMenuOpen] = useState(false);
    const [icon, setIcon] = useState(<Bars2Icon className='md:hidden z-[999]' height={40} width={40} onClick={handleOpen} />)

    useEffect(() => {
        if (menuOpen) {
            document.getElementsByTagName('html')[0].style.overflow = 'hidden';
        } else {
            document.getElementsByTagName('html')[0].style.overflow = 'unset';
        }
    }, [menuOpen])

    return (
        <nav className='w-full font-bold text-3xl md:text-base' id='top'>
            <ul className='p-6 md:px-10 md:py-5 flex items-center uppercase justify-end relative z-[999]'>
                <li className='first:mr-auto z-[999]'>
                    <Image
                        src={urlFor(image).url()} 
                        alt={'Nicholas Desimone Logo'}
                        height={100}
                        width={100}
                        className='w-[124px] h-auto md:w-[222px]'                    
                    />
                    {/* <div className='w-[222px] h-[126px] bg-white' /> */}
                </li>
                {/* <Bars2Icon className='md:hidden' height={40} width={40} onClick={() => setMenuOpen(!menuOpen)} /> */}
                {icon}
                <div className={`
                    absolute top-24 left-0 bg-white w-full h-[calc(100vh-6rem)] duration-500 transition-all ease-in-out ${menuOpen ? 'opacity-100 translate-y-0 z-[888]' : 'opacity-0 -translate-y-full -z-10'}
                    md:static md:top-auto md:right-0 md:h-fit md:opacity-100 md:translate-y-0 md:flex md:justify-end
                `}>
                    <div className='flex flex-col justify-center items-center h-full md:flex-row'>
                        {navigation.map((item, index) => (
                            <li key={index} className='py-3 md:px-5'>
                                <Link href={`/${item.slug.current}`}>{item.title}</Link>
                            </li>
                        ))}
                    </div>
                </div>
            </ul>
        </nav>
    )
}
