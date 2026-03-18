import Image from 'next/image'
import Link from 'next/link'

type ProjectCardProps = {
    title: string,
    description: string,
    imageSrc: string,
    repositoryUrl: string,
    demoUrl: string,
    projectStacks: string[]
}

export default function ProjectCard({ title, description, imageSrc, repositoryUrl, demoUrl, projectStacks }: ProjectCardProps) {
    return (<div className="rounded-lg h-125 w-90 p-0.5 bg-brand-gradient">
        <div className="bg-nero rounded-lg h-full">
            <Image
                src={imageSrc}
                alt="Placeholder"
                className="w-90 h-62.5 object-cover rounded-t-lg"
                width={360}
                height={250}
            />
            <div className="px-6.25 flex mt-3">
                <Link href={repositoryUrl} target="_blank">
                    <Image width={32} height={32} alt="GH" src='/github-gradient-icon.svg' />
                </Link>
                <Link href={demoUrl} target="_blank">
                    <Image width={32} height={32} alt="GH" src='/demo-gradient-icon.svg' />
                </Link>
            </div>
            <div className="px-6.25 mt-1">
                <h3 className="text-ghost-white font-bold text-base h-17 flex items-center justify-start">{title}</h3>
                <p className="text-ghost-white text-sm h-24 flex items-baseline justify-start text-justify">{description}</p>
            </div>
            <div className="flex items-center justify-center gap-x-4 flex-wrap">
                {projectStacks.map((projectStack) => (<p key={projectStack} className="text-vivid-sky-blue underline">{projectStack}</p>))}
            </div>
        </div>
    </div>)
}
