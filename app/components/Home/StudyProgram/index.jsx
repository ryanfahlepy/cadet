import React from 'react'
import Image from 'next/image'

import fk from '/public/images/logo/kedokteran.png'
import mat from '/public/images/logo/matematika.png'
import fis from '/public/images/logo/fisika.png'
import kim from '/public/images/logo/kimia.png'
import bio from '/public/images/logo/bio.png'
import far from '/public/images/logo/farmasi.png'
import ti from '/public/images/logo/ti.png'
import te from '/public/images/logo/te.png'
import tm from '/public/images/logo/tm.png'
import ts from '/public/images/logo/ts.png'
import prabowo from '/public/images/carousel/prabowo.jpeg'
import rektor from '/public/images/carousel/rektor.png'
import werijon from '/public/images/carousel/werijon.png'

const StudyProgram = () => {
    return (
        <div>
            <div className='h-8 md:h-14'></div>
            <div>
                <h1 className="md:pt-8 lg:pt-10 xl:pt-12 pb-2 sm:pb-4 md:pb-6 lg:pb-8 xl:pb-10 text-center text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-extrabold">
                    PROGRAM STUDI
                </h1>
            </div>
            <div className=" grid grid-flow-row grid-cols-11 gap-1 md:gap-3 pb-6 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20">
                <Image
                    className='justify-self-center xl:w-48 w-20 md:w-28 lg:w-32 col-start-4'
                    src={fk}
                    alt='fk'
                />
                <Image
                    className='justify-self-center xl:w-48 w-20 md:w-28 lg:w-32'
                    src={mat}
                    alt='mat'
                />
                <Image
                    className='justify-self-center xl:w-48 w-20 md:w-28 lg:w-32'
                    src={fis}
                    alt='fis'
                />
                <Image
                    className='justify-self-center xl:w-48 w-20 md:w-28 lg:w-32'
                    src={kim}
                    alt='kim'
                />
                <Image
                    className='justify-self-center xl:w-48 w-20 md:w-28 lg:w-32'
                    src={bio}
                    alt='bio'
                />
                <Image
                    className='justify-self-center xl:w-48 w-20 md:w-28 lg:w-32 col-start-4'
                    src={far}
                    alt='far'
                />
                <Image
                    className='justify-self-center xl:w-48 w-20 md:w-28 lg:w-32'
                    src={ti}
                    alt='ti'
                />
                <Image
                    className='justify-self-center xl:w-48 w-20 md:w-28 lg:w-32'
                    src={te}
                    alt='te'
                />
                <Image
                    className='justify-self-center xl:w-48 w-20 md:w-28 lg:w-32'
                    src={tm}
                    alt='tm'
                />
                <Image
                    className='justify-self-center xl:w-48 w-20 md:w-28 lg:w-32'
                    src={ts}
                    alt='ts'
                />
                <div className="flex justify-center mt-6 lg:mt-20 xl:mt-24 md:mt-12 col-start-6">
                    <a
                        href="https://www.idu.ac.id/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <button
                            type="button"
                            className="flex items-center justify-center xl:h-20 xl:w-72 lg:h-16 lg:w-56 md:h-14 md:w-52 sm:h-12 sm:w-40 h-10 w-32   border text-primary border-primary  hover:text-[#ffffff] hover:border-dark hover:bg-primary  rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2  "
                        >
                            <h1 className=" font-extrabold xl:text-xl 2xl:text-2xl lg:text-lg md:text-base sm:text-sm text-xs">
                                PELAJARI SELENGKAPNYA
                            </h1>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default StudyProgram
