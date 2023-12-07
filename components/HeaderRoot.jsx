import logo from 'public/images/logo/logo.png'


import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeaderRoot = ({ background, isOpenParent, setIsOpen }) => {
    const isOpen = isOpenParent

    //setting nav color when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeColor)
    }, []);

    return (
        <>
            {/* <div
                className="
                bg-blue-500
                sm:bg-green-500
                md:bg-yellow-500
                lg:bg-orange-500
                xl:bg-red-500"

            >
                Screen Width Test{" "}
            </div> */}

            {/* Header */}
            <div className={`z-[1000]  fixed w-full transition duration-700 ease-in-out ${background} ${color ? 'bg-[#650000]' : ''} ${isOpen ? 'bg-[#650000]' : ''}`}>
                <nav>
                    {/* header banner start */}
                    <div className="mx-2 max-w-full px-4 lg:px-1 xl:px-20">
                        <div className="flex h-8 sm:h-10 md:h-12 xl:h-16">
                            <div className="flex w-full items-center  justify-between">

                                <Link className="flex-shrink-0" href="/">
                                    <Image
                                        className='h-10 w-24 sm:h-12 sm:w-28 md:h-16 md:w-36 xl:h-20 xl:w-44 '
                                        src={logo}
                                        alt="logo"
                                    />
                                </Link>
                                <div className={`hidden md:block`}>
                                    <div className="ml-10 flex items-baseline text-white space-x-2 tracking-wide">
                                        <Link
                                            className="px-3 py-2 font-bold  hover:text-yellow-500 focus:text-yellow-500 active:text-black  md:text-base lg:text-lg"
                                            href="/"
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            className="pr-3 pl-3 py-2 font-bold hover:text-yellow-500 focus:text-yellow-500 active:text-black  md:text-base lg:text-lg"
                                            href="/"
                                        >
                                            Cadet Regiment
                                        </Link>
                                        <Link
                                            className="px-3 py-2 font-bold hover:text-yellow-500 focus:text-yellow-500 active:text-black  md:text-base lg:text-lg"
                                            href="/"
                                        >
                                            Corps of Cadet
                                        </Link>
                                        <Link
                                            className="px-3 py-2 font-bold hover:text-yellow-500 focus:text-yellow-500 active:text-black  md:text-base lg:text-lg"
                                            href="/news"
                                        >
                                            News
                                        </Link>
                                        <Link
                                            className="px-3 py-2 font-bold hover:text-yellow-500 focus:text-yellow-500 active:text-black  md:text-base lg:text-lg"
                                            href="/"
                                        >
                                            Gallery
                                        </Link>
                                        <Link
                                            className="px-3 py-2 font-bold hover:text-yellow-500 focus:text-yellow-500 active:text-black  md:text-base lg:text-lg"
                                            href="/login"
                                        >
                                            Login
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            {/* burger button start */}
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-yellow-500 focus:outline-none active:text-black"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <svg
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                        viewBox="0 0 1792 1792"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                                    </svg>
                                </button>
                            </div>
                            {/* burger button end */}
                        </div>
                    </div>
                    {/* header banner end */}

                    {/* Mobile Header Start */}
                    <div className={`transition duration-700 ease-in-out md:hidden  ${isOpen ? "" : "hidden"}`}>
                        <div className="space-y-1 text-white tracking-widest px-2 pt-2 pb-3 sm:px-3">
                            <div className="h-1 bg-yellow-500">

                            </div>
                            <Link
                                className="block px-3 py-2 text-sm font-bold hover:text-yellow-500 active:text-black "
                                href="/"
                            >
                                Home
                            </Link>
                            <Link
                                className="block px-3 py-2 text-sm font-bold hover:text-yellow-500 active:text-black "
                                href="/cadet-regiment"
                            >
                                Cadet Regiment
                            </Link>
                            <Link
                                className="block px-3 py-2 text-sm font-bold hover:text-yellow-500 active:text-black "
                                href="/corps-of-cadets"
                            >
                                Corps of Cadet
                            </Link>
                            <Link
                                className="block px-3 py-2 text-sm font-bold hover:text-yellow-500 active:text-black "
                                href="/news"
                            >
                                News
                            </Link>
                            <Link
                                className="block px-3 py-2 text-sm font-bold hover:text-yellow-500 active:text-black "
                                href="/gallery"
                            >
                                Gallery
                            </Link>
                        </div>
                    </div>
                    {/* Mobile Header End */}

                </nav>
            </div>
        </>
    );
};

export default HeaderRoot;
