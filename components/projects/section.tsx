import ProjectCard from "../shared/project-card"

export default function ProjectsSection() {
  return (
    <section id='projects' className='relative mt-74'>
      <h3 className='text-center text-header-gradient font-extrabold text-2xl tracking-[5%] leading-[110%] uppercase'>projects</h3>
      <p className='text-center text-ghost-white/85 mt-2.75 text-sm'>These are my projects that I’ve created in this tech journey</p>
      <div className="grid grid-cols-3 place-items-center mt-12 gap-5">
        <ProjectCard
          title="Cirilo Bucatcat Jr.’s Personal Website"
          description="My personal website developed using Next.js deployed in GitHub Pages"
          imageSrc="/project1.png"
          demoUrl="/"
          repositoryUrl="/"
          projectStacks={['next.js', 'tailwindcss', 'javascript']}
        />
        <ProjectCard
          title="Cirilo Bucatcat Jr.’s Personal Website"
          description="My personal website developed using Next.js deployed in GitHub Pages"
          imageSrc="/project1.png"
          demoUrl="/"
          repositoryUrl="/"
          projectStacks={['next.js', 'tailwindcss', 'javascript']}
        />
        <ProjectCard
          title="Cirilo Bucatcat Jr.’s Personal Website"
          description="My personal website developed using Next.js deployed in GitHub Pages"
          imageSrc="/project1.png"
          demoUrl="/"
          repositoryUrl="/"
          projectStacks={['next.js', 'tailwindcss', 'javascript']}
        />
      </div>
    </section>
  )
}
