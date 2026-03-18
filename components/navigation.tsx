import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="bg-brand-gradient rounded-full p-0.5">
            <div className="flex justify-between bg-[#373737] rounded-full px-8 py-5">
                <Link href="#">
                    <span className="font-display text-base font-extrabold uppercase text-header-gradient">CIRILO B</span>
                </Link>
                <ul className="flex gap-x-5">
                    <li><a className="tracking-wide font-semibold text-ghost-white text-sm" href="#projects">projects</a></li>
                    <li><a className="tracking-wide font-semibold text-ghost-white text-sm" href="#techstack">techstack</a></li>
                    <li><a className="tracking-wide font-semibold text-ghost-white text-sm" href="#contact">contact</a></li>
                </ul>
            </div>
        </nav>
    )
}