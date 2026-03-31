import Image from 'next/image'
import Link from 'next/link'
import ContactForm from './form'

export default function ContactSection() {

  return (<section id='contact' className='relative pt-18 lg:pt-32'>
    <h3 className='text-center text-header-gradient font-extrabold text-2xl tracking-[5%] leading-[110%] uppercase'>contact</h3>
    <p className='text-center text-ghost-white/85 mt-2.75 text-xs lg:text-sm'>Let`s collaborate and make things into reality</p>
    <div className='mt-12 grid grid-cols-1 lg:grid-cols-2 gap-x-4 place-items-start justify-items-center'>
      <div className='mt-4 lg:mt-0 order-2 lg:order-1 flex flex-col items-center lg:items-start gap-y-4 w-full'>
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
      <div className='order-1 lg:order-2 w-full lg:w-125 bg-brand-gradient p-0.75 rounded-lg'>
        <ContactForm/>
      </div>
    </div>
  </section>)
}
