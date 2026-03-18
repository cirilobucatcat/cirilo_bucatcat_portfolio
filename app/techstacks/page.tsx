import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
    title: "Techstacks - Cirilo Bucatcat Jr.",
    description: "Cirilo Bucatcat's Technical Stacks"
}


export default function TechStacksPage() {

    const techstacks = [
        {
            name: 'JavaScript',
            category: 'frontend'
        },
        {
            name: 'TypeScript',
            category: 'frontend'
        },
        {
            name: 'Vue.js',
            category: 'frontend'
        },
        {
            name: 'Tailwind CSS',
            category: 'frontend'
        },
        {
            name: 'Vite',
            category: 'frontend'
        },
        {
            name: 'Webpack',
            category: 'frontend'
        },
        {
            name: 'ESLint',
            category: 'frontend'
        },
        {
            name: 'jQuery',
            category: 'frontend'
        },
        {
            name: 'SASS',
            category: 'frontend'
        },
        {
            name: 'Prettier',
            category: 'frontend'
        },
        {
            name: 'PHP',
            category: 'backend'
        },
        {
            name: 'Laravel',
            category: 'backend'
        },
        {
            name: 'MySQL',
            category: 'backend'
        },
        {
            name: 'REST',
            category: 'backend'
        },
        {
            name: 'MongoDB',
            category: 'backend'
        },
        {
            name: 'Node.js',
            category: 'backend'
        },
        {
            name: 'PostgresSQL',
            category: 'backend'
        },
        {
            name: 'Stripe API',
            category: 'backend'
        },
        {
            name: 'Supabase',
            category: 'backend'
        },
        {
            name: 'Amazon Web Services(EC2, S3, and CloudFront)',
            category: 'devops'
        },
        {
            name: 'Docker',
            category: 'devops'
        },
        {
            name: 'Git',
            category: 'devtools'
        },
        {
            name: 'GitHub',
            category: 'devtools'
        },
        {
            name: 'Bitbucket',
            category: 'devtools'
        },
        {
            name: 'Discord',
            category: 'devtools'
        },
        {
            name: 'VS Code',
            category: 'devtools'
        },
        {
            name: 'Jira',
            category: 'devtools'
        },
        {
            name: 'Trello',
            category: 'devtools'
        },
        {
            name: 'Figma',
            category: 'devtools'
        }
    ]

    const StackBox = ({ techstack }: { techstack: { name: string, category: string } }) => {
        return (<div className="w-fit bg-linear-[45deg,#FAF8FF_0%,#969599_100%] p-0.5 rounded-md flex items-center justify-center">
            <div className="w-fit rounded-sm px-3 py-1 bg-nero inline-flex items-center justify-center">
                <p className="text-ghost-white">{techstack.name}</p>
            </div>
        </div>)
    }

    return (
        <div className="w-full">
            <p className="text-header-gradient text-4xl font-black uppercase text-center mt-24">Technical Stacks</p>
            <p className="text-ghost-white text-center text-xl mt-16 font-semibold uppercase">Frontend</p>
            <div className="w-full flex flex-wrap grow justify-center items-center gap-4 mt-8 px-10">
                {techstacks.filter((techstack) => techstack.category === 'frontend').map((techstack, index) => (
                    <StackBox techstack={techstack} key={`${techstack.category}_${index}`} />
                ))}
            </div>
            <p className="text-ghost-white text-center text-xl mt-16 font-semibold uppercase">Backend</p>
            <div className="w-full flex flex-wrap grow justify-center items-center gap-4 mt-8 px-10">
                {techstacks.filter((techstack) => techstack.category === 'backend').map((techstack, index) => (
                    <StackBox techstack={techstack} key={`${techstack.category}_${index}`} />
                ))}
            </div>
            <p className="text-ghost-white text-center text-xl mt-16 font-semibold uppercase">DevOps</p>
            <div className="w-full flex flex-wrap grow justify-center items-center gap-4 mt-8 px-10">
                {techstacks.filter((techstack) => techstack.category === 'devops').map((techstack, index) => (
                    <StackBox techstack={techstack} key={`${techstack.category}_${index}`} />
                ))}
            </div>
            <p className="text-ghost-white text-center text-xl mt-16 font-semibold uppercase">Developer Tools</p>
            <div className="w-full flex flex-wrap grow justify-center items-center gap-4 mt-8 px-10">
                {techstacks.filter((techstack) => techstack.category === 'devtools').map((techstack, index) => (
                    <StackBox techstack={techstack} key={`${techstack.category}_${index}`} />
                ))}
            </div>
        </div>
    )
}
