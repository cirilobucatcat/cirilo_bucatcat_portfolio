'use client'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

type TechStackCardProps = {
    src: string,
    alt: string,
    containerClassName?: string,
    imageClassName?: string
}

export default function TechStackCard({ src, alt, containerClassName = '', imageClassName }: TechStackCardProps) {

    return (<div className={twMerge('size-18 md:size-32 lg:size-42.5 relative bg-brand-gradient p-px rounded-lg hover:scale-110 transition-all duration-300 after:size-42.5 after:absolute after:top-0 after:right-px', containerClassName)}>
        <div 
            className='bg-nero size-18 md:size-32 lg:size-42 rounded-lg flex items-center justify-center'
        >
            <Image
                src={src}
                alt={alt}
                className={twMerge('size-15 md:size-28 object-cover rounded-t-lg', imageClassName)}
                width={150}
                height={150}
            />
        </div>
    </div>)
}
