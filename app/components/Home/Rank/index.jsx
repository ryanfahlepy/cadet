import React from 'react'
import Image from 'next/image'

import prajurit_kadet from '@/public/images/sevron/prajurit_kadet.png'
import kopral_kadet from '@/public/images/sevron/kopral_kadet.png'
import sersan_kadet from '@/public/images/sevron/sersan_kadet.png'
import sersan_mayor_dua_kadet from '@/public/images/sevron/sersan_mayor_dua_kadet.png'
import sersan_mayor_satu_kadet from '@/public/images/sevron/sersan_mayor_satu_kadet.png'

const Rank = () => {
    return (
        <>
            <div>
                <h1 className="md:pt-8 lg:pt-10 xl:pt-12 pb-2 sm:pb-4 md:pb-6 lg:pb-8 xl:pb-10 text-center text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-extrabold">
                    PANGKAT KADET MAHASISWA
                </h1>
            </div>
            {/* Class Section Start */}
            <div className="grid grid-flow-row grid-cols-7 md:grid-cols-11 gap-2">
                <div className='col-start-2'>
                    <h2 className="md:text-xs text-center text-[8px] font-normal lg:text-md xl:text-lg 2xl:text-xl">
                        Remaja
                    </h2>
                </div>
                <div className='col-start-3 md:col-start-4'>
                    <h2 className="md:text-xs text-center text-[8px] font-normal lg:text-md xl:text-lg 2xl:text-xl">
                        Remaja
                    </h2>

                </div>
                <div className='col-start-4 md:col-start-6'>
                    <h2 className="md:text-xs text-center text-[8px] font-normal lg:text-md xl:text-lg 2xl:text-xl">
                        Dewasa
                    </h2>

                </div>
                <div className='col-start-5 md:col-start-8'>
                    <h2 className="md:text-xs text-center text-[8px] font-normal lg:text-md xl:text-lg 2xl:text-xl">
                        Madya
                    </h2>

                </div>
                <div className='col-start-6 md:col-start-10'>
                    <h2 className="md:text-xs text-center text-[8px] font-normal lg:text-md xl:text-lg 2xl:text-xl">
                        Wreda
                    </h2>

                </div>

            </div>
            {/* Class Section End */}

            {/* Battalion Section Start */}
            <div className="grid grid-flow-row grid-cols-7 md:grid-cols-11 gap-2">
                <div className='col-start-2'>
                    <h2 className="pb-1 md:pb-3 md:text-xs text-center mx-[-20px] text-[8px] font-bold lg:text-md xl:text-lg 2xl:text-xl">

                    </h2>
                </div>
                <div className='col-start-3 md:col-start-4'>
                    <h2 className="pb-1 md:pb-3  md:text-xs text-center mx-[-20px] text-[8px] font-bold lg:text-md xl:text-lg 2xl:text-xl">
                        NARA ARKASENA
                    </h2>

                </div>
                <div className='col-start-4 md:col-start-6'>
                    <h2 className="pb-1 md:pb-3 md:text-xs text-center mx-[-20px] text-[8px] font-bold lg:text-md xl:text-lg 2xl:text-xl">
                        NARA NATYASAKA
                    </h2>

                </div>
                <div className='col-start-5 md:col-start-8'>
                    <h2 className="pb-1 md:pb-3 md:text-xs text-center mx-[-20px] text-[8px] font-bold lg:text-md xl:text-lg 2xl:text-xl">
                        NARA DYAVIKSATRA
                    </h2>

                </div>
                <div className='col-start-6 md:col-start-10'>
                    <h2 className="pb-1 md:pb-3 md:text-xs text-center mx-[-20px] text-[8px] font-bold lg:text-md xl:text-lg 2xl:text-xl">
                        NARA ANKASA
                    </h2>

                </div>

            </div>
            {/* Rank Section End */}

            {/* Sevron Section Start */}
            <div className=" grid grid-flow-row grid-cols-7 md:grid-cols-11 gap-2">
                <div className='col-start-2'>
                    <Image
                        className=''
                        src={prajurit_kadet}
                        alt='prajurit_kadet'
                    />
                </div>
                <div className='col-start-3 md:col-start-4'>
                    <Image
                        className=''
                        src={kopral_kadet}
                        alt='prajurit_kadet'
                    />
                </div>
                <div className='col-start-4 md:col-start-6'>
                    <Image
                        className=''
                        src={sersan_kadet}
                        alt='sersan_kadet'
                    />
                </div>
                <div className='col-start-5 md:col-start-8'>
                    <Image
                        className=''
                        src={sersan_mayor_dua_kadet}
                        alt='sersan_mayor_dua_kadet_kadet'
                    />
                </div>
                <div className='col-start-6 md:col-start-10'>
                    <Image
                        className=''
                        src={sersan_mayor_satu_kadet}
                        alt='sersan_mayor_satu_kadet'
                    />
                </div>
            </div>
            {/* Sevron Section End */}

            {/* Rank Section Start */}
            <div className="grid grid-flow-row grid-cols-7 md:grid-cols-11 gap-2">
                <div className='col-start-2'>
                    <h2 className="pt-1 md:pt-3 md:text-xs text-center text-[8px] font-bold lg:text-md xl:text-lg 2xl:text-xl">
                        Prajurit Kadet
                    </h2>
                </div>
                <div className='col-start-3 md:col-start-4'>
                    <h2 className="pt-1 md:pt-3 md:text-xs text-center text-[8px] font-bold lg:text-md xl:text-lg 2xl:text-xl">
                        Kopral Kadet
                    </h2>

                </div>
                <div className='col-start-4 md:col-start-6'>
                    <h2 className="pt-1 md:pt-3 md:text-xs text-center text-[8px] font-bold lg:text-md xl:text-lg 2xl:text-xl">
                        Sersan Kadet
                    </h2>

                </div>
                <div className='col-start-5 md:col-start-8'>
                    <h2 className="pt-1 md:pt-3 md:text-xs text-center text-[8px] font-bold lg:text-md xl:text-lg 2xl:text-xl">
                        Sersan Mayor Dua Kadet
                    </h2>

                </div>
                <div className='col-start-6 md:col-start-10'>
                    <h2 className="pt-1 md:pt-3 md:text-xs text-center text-[8px] font-bold lg:text-md xl:text-lg 2xl:text-xl">
                        Sersan Mayor Satu Kadet
                    </h2>

                </div>

            </div>
            {/* Rank Section End */}


        </>
    )
}

export default Rank
