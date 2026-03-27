import Image from 'next/image'
import Link from 'next/link'

export default function ContactSection() {

  return (<section id='contact' className='relative pt-18 lg:pt-32'>
    <h3 className='text-center text-header-gradient font-extrabold text-2xl tracking-[5%] leading-[110%] uppercase'>contact</h3>
    <p className='text-center text-ghost-white/85 mt-2.75 text-xs lg:text-sm'>Let`s collaborate and make things into reality</p>
    <div className='mt-12 grid grid-cols-2 gap-x-4 place-items-start justify-items-center'>
      <div className='flex flex-col gap-y-4 w-full'>
        <div className='flex flex-col'>
          <div className='inline-flex space-x-2'>
            <Image src="/at.svg" alt='Email Icon' width={24} height={24} />
            <Link className='text-vivid-sky-blue underline' href="mailto:bucatcat1999@gmail.com">bucatcat1999@gmail.com</Link>
          </div>
          <div className='inline-flex space-x-2'>
            <Image src="/phone.svg" alt='Phone Icon' width={24} height={24} />
            <Link className='text-vivid-sky-blue underline' href="tel:+639264570921">09264570921</Link>
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='text-base text-vivid-sky-blue font-bold'>Technical Platform</p>
          <div className='space-x-4 flex mt-2'>
            <Link target='_blank' href="https://www.linkedin.com/in/cirilo-bucatcat-30500916b">
              <Image src="/tlinkedin.svg" alt='LinkedIn Profile Icon' width={32} height={32} />
            </Link>
            <Link target='_blank' href="https://facebook.com/cirilo.dev">
              <Image src="/tfacebook.svg" alt='Facebook Profile Icon' width={32} height={32} />
            </Link>
            <Link target='_blank' href="https://github.com/cirilobucatcat">
              <Image src="/tgithub.svg" alt='Github Profile Icon' width={32} height={32} />
            </Link>
          </div>
        </div>
      </div>
      <div className='w-125 h-112.5 bg-brand-gradient p-0.75 rounded-lg'>
        <div className='h-full w-full bg-nero rounded-sm p-4'>
          <div>
            <label htmlFor="name" className='text-header-gradient font-bold uppercase'>YOUR FULL NAME</label>
            <div className='bg-brand-gradient p-0.75 rounded-sm'>
              <input
                type="text"
                placeholder='Enter your full name here'
                className='w-full py-2 text-ghost-white px-2 bg-nero'
              />
            </div>
          </div>
          <div className='mt-2'>
            <label htmlFor="name" className='text-header-gradient font-bold uppercase'>EMAIL ADDRESS</label>
            <div className='bg-brand-gradient p-0.75 rounded-sm'>
              <input
                type="text"
                placeholder='Enter your email address here'
                className='w-full py-2 text-ghost-white px-2 bg-nero'
              />
            </div>
          </div>
          <div className='mt-2'>
            <label htmlFor="name" className='text-header-gradient font-bold uppercase'>SUBJECT</label>
            <div className='bg-brand-gradient p-0.75 rounded-sm'>
              <input
                type="text"
                placeholder='Enter your email subject here'
                className='w-full py-2 text-ghost-white px-2 bg-nero'
              />
            </div>
          </div>
          <div className='mt-2'>
            <label htmlFor="name" className='text-header-gradient font-bold uppercase'>MESSAGE</label>
            <div className='bg-brand-gradient p-0.75 rounded-sm'>
              <textarea
                cols={4}
                placeholder='Enter you message here'
                className='w-full py-2 text-ghost-white px-2 bg-nero resize-none'
              ></textarea>
            </div>
          </div>
          <button className='bg-vivid-sky-blue mt-4 w-full py-2 rounded-sm font-bold text-nero cursor-pointer hover:bg-vivid-sky-blue/75 transition-colors duration-300'>SUBMIT</button>
          <p className='mt-2 text-red-500 font-semibold text-sm'>Refrain sending sensitive data!</p>
        </div>
      </div>
    </div>
  </section>)
}
