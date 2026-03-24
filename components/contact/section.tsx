import Image from 'next/image'
import TechStackCard from '../shared/techstack-card'
import Link from 'next/link'

export default function ContactSection() {

  const techStacks = [
    {
      src: '/js.svg',
      alt: 'JavaScript'
    },
    {
      src: '/typescript.svg',
      alt: 'TypeScript'
    },
    {
      src: '/php.svg',
      alt: 'PHP'
    },
    {
      src: '/laravel.svg',
      alt: 'Laravel'
    },
    {
      src: '/vuejs.svg',
      alt: 'VueJS'
    },
    {
      src: '/angular.svg',
      alt: 'Angular'
    },
    {
      src: '/docker.svg',
      alt: 'Docker'
    },
    {
      src: '/tailwindcss.svg',
      alt: 'TailwindCSS'
    },
    {
      src: '/postgresql.svg',
      alt: 'PostgreSQL'
    },
    {
      src: '/html5.svg',
      alt: 'HTML 5'
    },
    {
      src: '/css3.svg',
      alt: 'CSS 3'
    },
    {
      src: '/aws.svg',
      alt: 'Amazon Web Services'
    },
    {
      src: '/digitalocean.svg',
      alt: 'Digital Ocean'
    },
    {
      src: '/linux.svg',
      alt: 'Linux'
    },
    {
      src: '/nodejs.svg',
      alt: 'Nodejs'
    },
    {
      src: '/npm.svg',
      alt: 'Node Package Manager'
    },
    {
      src: '/git.svg',
      alt: 'Git'
    },
    {
      src: '/figma.svg',
      alt: 'Figma'
    }
  ]
  return (<section id='techstack' className='relative pt-18 lg:pt-32'>
    <h3 className='text-center text-header-gradient font-extrabold text-2xl tracking-[5%] leading-[110%] uppercase'>contact</h3>
    <p className='text-center text-ghost-white/85 mt-2.75 text-xs lg:text-sm'>Let`s collaborate and make things into reality</p>
    <div className='mt-12 grid grid-cols-2 gap-x-4 place-items-center'>
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
            <Link href="">
              <Image src="/tlinkedin.svg" alt='LinkedIn Profile Icon' width={32} height={32} />
            </Link>
            <Link href="https://facebook.com/cirilo.dev">
              <Image src="/tfacebook.svg" alt='Facebook Profile Icon' width={32} height={32} />
            </Link>
            <Link href="https://github.com/cirilobucatcat">
              <Image src="/tgithub.svg" alt='Github Profile Icon' width={32} height={32} />
            </Link>
          </div>
        </div>
      </div>
      <div>
        contact form
      </div>
    </div>
  </section>)
}
