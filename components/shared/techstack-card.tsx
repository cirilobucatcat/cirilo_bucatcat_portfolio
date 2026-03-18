import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

type TechStackCardProps = {
    src: string,
    alt: string,
    containerClassName?: string,
    imageClassName?: string
}

export default function TechStackCard({ src, alt, containerClassName, imageClassName }: TechStackCardProps) {
    return (<div className={twMerge('size-42.5 bg-brand-gradient p-px rounded-lg', containerClassName ?? '')}>
        <div className='bg-nero h-full w-full rounded-lg flex items-center justify-center'>
            <Image
                src={src}
                alt={alt}
                className={twMerge('size-22 md:size-37.5 object-cover rounded-t-lg', imageClassName)}
                width={150}
                height={150}
            />
        </div>
    </div>)
}
