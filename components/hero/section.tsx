export default function HeroSection() {
    return (
        <section id="hero" className="relative flex flex-col justify-center items-center mt-54.5">
            <div className="bg-vivid-sky-blue/30 relative w-fit rounded-full px-3 py-1 after:top-2 after:absolute after:size-3.75 after:rounded-full after:bg-vivid-sky-blue">
                <p className="ml-6 text-vivid-sky-blue font-semibold tracking-tight">Building Next.js Projects</p>
            </div>
            <h1 className="mt-9 flex flex-col items-center justify-center">
                <span className="text-2xl text-ghost-white font-semibold">Hello, I’m Cirilo Bucatcat Jr. 👋🖥️</span>
                <span className="mt-4.75 bg-clip-text text-transparent bg-linear-to-r from-0% from-ghost-white to-50% to-vivid-sky-blue text-[65px] font-extrabold text-center leading-[110%]">
                    FULL STACK <br /> WEB DEVELOPER
                </span>
            </h1>
            <h3 className="text-ghost-white w-137.5 text-center mt-3">A web developer dedicated about creating efficient and user-friendly solutions to meet the ever-evolving needs of the digital world using AI.</h3>
            <button className="bg-vivid-sky-blue text-nero mt-20.5 w-50 text-base font-semibold uppercase h-11.25 rounded-sm cursor-pointer hover:bg-vivid-sky-blue/85">Download CV</button>
        </section>
    )
}