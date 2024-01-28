"use client"

import Link from "next/link"
import Image from "next/image"

import logo from '@/public/images/logo/logo.png'
import { useState } from "react"

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false);

    const toggleNavbar = () => {
        setIsMobile(!isMobile);
    }

    return (
        <div className="fixed z-50 w-full">
            {/* <div
                className="
                bg-[#2f2fff]
                sm:bg-[#2DFF3B
                md:bg-[#fff12d]
                lg:bg-[#ffa42d]
                xl:bg-[#ff2d2d]"

            >
                Screen Width Test{" "}
            </div> */}
            <header className="bg-primary ">

                {/* Web Header Start */}
                <div className="transition-all ease-in-out flex h-12 md:h-16 items-center justify-between md:px-8 px-2">
                    <div className="flex md:flex">
                        <Link className="" href="/">
                            <Image src={logo} alt={""} className="w-32 md:w-48"></Image>
                        </Link>
                    </div>
                    <div className="md:flex md:items-center md:gap-8">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-md">
                                <li>
                                    <Link
                                        className="text-secondary hover:text-accent font-bold"
                                        href="/"
                                    >
                                        Beranda
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-secondary hover:text-accent font-bold"
                                        href="/menkor"
                                    >
                                        Resimen Korps Kadet
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-secondary hover:text-accent  font-bold"
                                        href="/menkad"
                                    >
                                        Resimen Kadet
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-secondary hover:text-accent  font-bold"
                                        href="/program-studi"
                                    >
                                        Program Studi
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-secondary hover:text-accent  font-bold"
                                        href="/berita"
                                    >
                                        Berita
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="text-secondary hover:text-accent font-bold"
                                        href="/galeri"
                                    >
                                        Galeri
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <div className="rounded-md">
                                    <Link
                                        className="text-secondary hover:text-accent font-bold text-md"
                                        href="/login"
                                    >
                                        Login
                                    </Link>
                                </div>
                            </div>

                            <div className="block md:hidden">
                                <button
                                    className="round p-2 text-[#fff] transition hover:text-accent" onClick={toggleNavbar}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Web Header End */}


                <div className="md:h-1.5 h-1 bg-accent">
                </div>

                {/* Mobile Header Start */}
                <div className={`transition-all ease-in-out md:hidden  ${isMobile ? "" : "hidden"}`}>
                    <Link
                        className="block px-3 py-2 text-right text-sm font-bold hover:text-accent text-secondary "
                        href="/"
                    >
                        Beranda
                    </Link>
                    <Link
                        className="block px-3 py-2 text-right text-sm font-bold hover:text-accent text-secondary "
                        href="/menkor"
                    >
                        Resimen Korps Kadet
                    </Link>
                    <Link
                        className="block px-3 py-2 text-right text-sm font-bold hover:text-accent text-secondary "
                        href="/menkad"
                    >
                        Resimen Kadet
                    </Link>
                    <Link
                        className="block px-3 py-2 text-right text-sm font-bold hover:text-accent text-secondary "
                        href="/program-studi"
                    >
                        Program Studi
                    </Link>
                    <Link
                        className="block px-3 py-2 text-right text-sm font-bold hover:text-accent text-secondary "
                        href="/berita"
                    >
                        Berita
                    </Link>
                    <Link
                        className="block px-3 py-2 text-right text-sm font-bold hover:text-accent text-secondary "
                        href="/galeri"
                    >
                        Galeri
                    </Link>
                </div>
                {/* Mobile Header End */}
            </header>
        </div>
    )
}

export default Navbar