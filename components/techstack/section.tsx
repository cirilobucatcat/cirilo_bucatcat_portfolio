import Image from 'next/image'
import React from 'react'

export default function TechStackSection() {
  return (<section id='projects' className='relative mt-74'>
    <h3 className='text-center text-ghost-white font-extrabold text-2xl tracking-[5%] leading-[110%]'>tech stack</h3>
    <p className='text-center text-ghost-white/85 mt-2.75 text-sm'>These are my tech stack that I have learned</p>
    <div className="grid grid-cols-12 grow mt-12 gap-x-5 gap-y-10">
      <div className='col-span-2 size-42.5 bg-linear-to-r from-0% from-vivid-sky-blue via-50% via-nero to-100% to-ghost-white p-px rounded-lg'>
        <div className='bg-nero h-full w-full rounded-lg flex items-center justify-center '>
          <Image
            src="/js.svg"
            alt="Placeholder"
            className="size-37.5 object-cover rounded-t-lg"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className='col-span-2 size-42.5 bg-linear-to-r from-0% from-vivid-sky-blue via-50% via-nero to-100% to-ghost-white p-px rounded-lg'>
        <div className='bg-nero h-full w-full rounded-lg flex items-center justify-center '>
          <Image
            src="/php.svg"
            alt="Placeholder"
            className="size-37.5 object-cover rounded-t-lg"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className='col-span-2 size-42.5 bg-linear-to-r from-0% from-vivid-sky-blue via-50% via-nero to-100% to-ghost-white p-px rounded-lg'>
        <div className='bg-nero h-full w-full rounded-lg flex items-center justify-center '>
          <Image
            src="/laravel.svg"
            alt="Placeholder"
            className="size-37.5 object-cover rounded-t-lg"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className='col-span-2 size-42.5 bg-linear-to-r from-0% from-vivid-sky-blue via-50% via-nero to-100% to-ghost-white p-px rounded-lg'>
        <div className='bg-nero h-full w-full rounded-lg flex items-center justify-center '>
          <Image
            src="/vuejs.svg"
            alt="Placeholder"
            className="size-37.5 object-cover rounded-t-lg"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className='col-span-2 size-42.5 bg-linear-to-r from-0% from-vivid-sky-blue via-50% via-nero to-100% to-ghost-white p-px rounded-lg'>
        <div className='bg-nero h-full w-full rounded-lg flex items-center justify-center '>
          <Image
            src="/js.svg"
            alt="Placeholder"
            className="size-37.5 object-cover rounded-t-lg"
            width={150}
            height={150}
          />
        </div>
      </div>
      <div className='col-span-2 size-42.5 bg-linear-to-r from-0% from-vivid-sky-blue via-50% via-nero to-100% to-ghost-white p-px rounded-lg'>
        <div className='bg-nero h-full w-full rounded-lg flex items-center justify-center '>
          <Image
            src="/js.svg"
            alt="Placeholder"
            className="size-37.5 object-cover rounded-t-lg"
            width={150}
            height={150}
          />
        </div>
      </div>
    </div>
  </section>)
}
