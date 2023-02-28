import React from 'react'

interface Service {
    description: string;
    title: string;
}

type Props = {
    services: Service[]
}

export default function ServicesBar({services}: Props) {
    return (
        <div className='bg-zinc-900 text-white py-6 md:grid md:grid-cols-3 md:gap-10 px-4 md:px-8'>
            {services.map((item, index) => (
                <div key={index} className='my-4'>
                    <h2 className='font-bold uppercase'>{item.title}</h2>
                    <hr className='bg-white h-2' />
                    <p>{item.description}</p>   
                </div>
            ))}
        </div>
    )
}
