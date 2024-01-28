import React from "react"
import Image from "next/image"

import logo_menkad from '@/public/images/logo/logo_menkad.png'

const Logo = () => {
    return (
        <>
            <div className="relative mx-5 sm:mx-15 md:mx-12 lg:mx-28 xl:mx-44 py-8 ">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ">
                    <Image
                        className='h-32 w-[6.5rem] sm:h-44 sm:w-[8.5rem] md:h-48 md:w-[9.5rem] lg:h-56 lg:w-[10.5rem] xl:h-72 xl:w-[15.5rem] 2xl:h-96 2xl:w-[21.5rem] mx-auto'
                        src={logo_menkad}
                        alt='logo_menkad'
                        priority={true}

                    />
                </div>
                <h1 className="flex text-center justify-center text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-extrabold pt-8 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-32 2xl:pt-44">
                    UNIVERSITAS PERTAHANAN REPUBLIK INDONESIA
                </h1>
                <h1 className="flex text-center justify-center text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold ">
                    RESIMEN KORPS KADET MAHASISWA
                </h1>
                <h1 className="flex text-center justify-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold md:mt-2">
                    Praditya - Wiratama - Nagara Bhakti
                </h1>
                <p className="text-xs text-center sm:text-sm lg:text-lg md:mt-2 lg:px-64">
                    Resimen Korps Kadet Universitas Pertahanan Republik Indonesia merupakan wadah bagi kadet mahasiswa untuk belajar tentang organisasi, kepemimpinan, karakter dan mentalitas untuk mempersiapkan diri dalam menyambut indonesia emas tahun 2045
                </p>
            </div></>
    )
}

export default Logo