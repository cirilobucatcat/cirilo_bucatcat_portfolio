import Link from "next/link";

export default function Navigation() {
    return (
        <nav>
            <div className="hidden lg:flex bg-brand-gradient rounded-full p-0.5">
                <div className="flex justify-between bg-[#373737] rounded-full w-full px-8 py-5">
                    <Link href="#">
                        <span className="font-display text-base font-extrabold uppercase text-header-gradient">CIRILO B</span>
                    </Link>
                    <ul className="flex gap-x-5">
                        <li><a className="tracking-wide font-semibold text-ghost-white text-sm" href="#projects">projects</a></li>
                        <li><a className="tracking-wide font-semibold text-ghost-white text-sm" href="#techstack">techstack</a></li>
                        <li><a className="tracking-wide font-semibold text-ghost-white text-sm" href="#contact">contact</a></li>
                    </ul>
                </div>
            </div>
            <div aria-description="Mobile Navigation" className="z-50 absolute top-0 right-0">
                {/* <button>
                        <Image
                            src="/hamburger.svg"
                            alt="Hamburger"
                            className="size-8 object-cover rounded-t-lg"
                            width={32}
                            height={32}
                        />
                    </button> */}
                {/* <button>
                        <Image
                            src="/close.svg"
                            alt="Nav Close button"
                            className="size-8 object-cover rounded-t-lg"
                            width={32}
                            height={32}
                        />
                    </button> */}
            </div>
            {/* 
                <div aria-description="Mobile Navigation Menu" className="z-40 flex flex-col lg:hidden fixed w-dvh h-dvh bg-nero top-0 left-0">
                    <ul className="flex flex-col items-end justify-center">
                        <li><Link href="#">home</Link></li>
                        <li><Link href="#projects">projects</Link></li>
                        <li><Link href="#techstacks">techstacks</Link></li>
                        <li><Link href="#contacts">contacts</Link></li>
                    </ul>
                    <div className="mt-auto flex items-center justify-evenly w-full">
                        <div className="flex flex-col">
                            <Link href="mailto:bucatcat1999@gmail.com">bucatcat1999@gmail.com</Link>
                            <Link href="tel:+639264570921">09264570921</Link>
                        </div>
                        <div className="flex">
                            <Link href="tel:+639264570921">
                                <Image
                                    src="/linkedin.svg"
                                    alt="Nav Close button"
                                    className="size-8 object-cover rounded-t-lg"
                                    width={32}
                                    height={32}
                                />
                            </Link>
                            <Link href="https://facebook.com/cirilo.dev">
                                <Image
                                    src="/facebook.svg"
                                    alt="Nav Close button"
                                    className="size-8 object-cover rounded-t-lg"
                                    width={32}
                                    height={32}
                                />
                            </Link>
                            <Link href="tel:+639264570921">
                                <Image
                                    src="/github.svg"
                                    alt="Nav Close button"
                                    className="size-8 object-cover rounded-t-lg"
                                    width={32}
                                    height={32}
                                />
                            </Link>
                        </div>
                    </div>
                </div> */}
        </nav>
    )
}