import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="bg-linear-to-r from-0% from-vivid-sky-blue via-70% via-[#1A5B6C] to-100% to-nero font-extrabold p-0.5 rounded-full ">
            <div className="flex justify-between bg-[#373737] rounded-full px-8 py-5">
                <Link href="#">
                    <span className="font-display text-vivid-sky-blue text-base font-extrabold uppercase">Cirilo B.</span>
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