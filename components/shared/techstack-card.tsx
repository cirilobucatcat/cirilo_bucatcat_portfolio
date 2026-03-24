'use client'
import Image from 'next/image'
import { useState } from 'react';
import { twMerge } from 'tailwind-merge'

type TechStackCardProps = {
    src: string,
    alt: string,
    containerClassName?: string,
    imageClassName?: string
}

export default function TechStackCard({ src, alt, containerClassName, imageClassName }: TechStackCardProps) {

    const [isMouseInside, setIsMouseInside] = useState(false);

    const handleMouseEnter = () => {
        setIsMouseInside(true);
    };

    const handleMouseLeave = () => {
        setIsMouseInside(false);
    };

    const aStyle = isMouseInside ? 'after:animate-ping' : 'after:animate-none'

    return (<div className={twMerge('size-18 md:size-32 lg:size-42.5 relative bg-brand-gradient transition-colors duration-300 p-px rounded-lg hover:animate-ping after:size-42.5 after:absolute after:top-0 after:right-px', containerClassName ?? '', aStyle)}>
        <div 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
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
