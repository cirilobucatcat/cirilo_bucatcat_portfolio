import TechStackCard from '../shared/techstack-card'
import Link from 'next/link'

export default function TechStackSection() {

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
  return (<section id='techstack' className='relative pt-32'>
    <h3 className='text-center text-header-gradient font-extrabold text-2xl tracking-[5%] leading-[110%] uppercase'>tech stack</h3>
    <p className='text-center text-ghost-white/85 mt-2.75 text-sm'>These are my primary tech stack that I have learned and actively used</p>
    <div className="grid grid-cols-6 place-items-center md:grid-cols-12 grow mt-12 gap-x-5 gap-y-10">
      {techStacks.map(techStack => (<TechStackCard
        key={techStack.src}
        containerClassName='col-span-2'
        src={techStack.src}
        alt={techStack.alt}
      />))}
    </div>
    <p className='mt-16 text-center text-lg text-vivid-sky-blue uppercase underline font-semibold leading-1.5'><Link href="/techstacks">View More</Link></p>
  </section>)
}
