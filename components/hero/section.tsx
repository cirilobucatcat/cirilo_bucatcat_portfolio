export default function HeroSection() {
    return (
        <section id="hero" className="relative flex flex-col justify-center items-center mt-24 lg:mt-54.5">
            <div className="bg-vivid-sky-blue/30 relative before:size-2 before:left-3.25 lg:before:size-2.5 before:bg-vivid-sky-blue before:rounded-full before:absolute before:top-2 lg:before:top-2.75 w-fit rounded-full after:animate-ping px-3 py-1 after:top-1.75 lg:after:top-2.5 md:after:top-2.75 after:absolute after:size-2.5 after:rounded-full after:bg-vivid-sky-blue">
                <p className="ml-3.5 lg:ml-5 text-vivid-sky-blue font-semibold tracking-tight text-xs lg:text-base">Building Next.js Projects</p>
            </div>
            <h1 className="mt-4 lg:mt-8 flex flex-col items-center justify-center">
                <span className="text-base lg:text-2xl text-ghost-white font-semibold">Hello, I’m Cirilo Bucatcat Jr. 👋🖥️</span>
                <span className="mt-2 lg:mt-4.75 bg-clip-text text-transparent bg-linear-to-r from-0% from-ghost-white to-50% to-vivid-sky-blue text-[32px] lg:text-[65px] font-extrabold text-center leading-[110%]">
                    FULL STACK <br /> WEB DEVELOPER
                </span>
            </h1>
            <h3 className="text-ghost-white text-sm lg:w-137.5 text-center mt-3">A web developer dedicated about creating efficient and user-friendly solutions to meet the ever-evolving needs of the digital world using AI.</h3>
            <button className="bg-vivid-sky-blue text-nero mt-8 lg:mt-20.5 w-36 lg:w-50 lg:text-base text-sm font-semibold uppercase h-10 lg:h-11.25 rounded-sm cursor-pointer hover:bg-vivid-sky-blue/85">Download CV</button>
        </section>
    )
}