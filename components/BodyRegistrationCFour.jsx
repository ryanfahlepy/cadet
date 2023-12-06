
import c4logo from '/public/images/c4/c4logo.png'
import kategori from '/public/images/c4/kategori.png'
import rute from '/public/images/c4/rute.png'

import Link from "next/link";
import Image from "next/image";

const BodyRegistrationCFour = () => {
    return (
        <>

            <div>

            </div>
            <div className="h-2 bg-red-900"></div>
            <div className="w-screen flex items-center justify-center">
                <div className="flex items-center justify-center">
                    <Image
                        className="my-4 w-32 sm:w-40 md:my-6 md:w-56 lg:w-60 lg:my-10 xl:w-80"
                        src={c4logo}
                        alt="c4logo"
                    />
                </div>
            </div>
            <div className="relative mx-5 sm:mx-15 md:mx-12 lg:mx-28 xl:mx-44 pb-8 ">

                <h1 className="flex text-center justify-center text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-extrabold">
                    Cadet Cross Country Competition 2023
                </h1>
                <p className="text-xs text-justify sm:text-sm lg:text-lg mt-4">
                    C-Four atau Kompetisi Cadet Cross Country 2023 adalah sebuah acara yang bertujuan untuk menjadikan Relay Race 40 KM sebagai ajang yang prestisius bagi kadet mahasiswa, untuk mengenalkan Universitas Pertahanan RI. Acara ini memiliki beberapa tujuan, yaitu mengasah bakat dan potensi kadet mahasiswa, memperluas relasi dengan pihak eksternal, menjadi sarana refreshing, serta melatih kekuatan fisik dan solidaritas kadet mahasiswa dengan mahasiswa dari berbagai perguruan tinggi di Indonesia. Dengan diselenggarakannya C-Four, diharapkan dapat menjadikan Relay Race 40 KM sebagai acara bergengsi yang menampilkan bakat dan prestasi para kadet mahasiswa dan peserta dari berbagai perguruan tinggi di Indonesia. Kompetisi ini tidak hanya menjadi wadah untuk pengembangan fisik dan atletik, tetapi juga mendorong jaringan dan kerja sama antara kadet mahasiswa dan peserta dari berbagai universitas di Indonesia.
                </p>
            </div>
            <div className="center px-16 md:px-24 lg:px-32 xl:px-36">
                <div className="h-1 bg-black"></div>
            </div>
            <div>
                <h1 className="py-6 sm:py-10 md:py-12 lg:py-16 xl:py-20 text-center text-xl font-extrabold sm:text-2xl   md:text-3xl lg:text-4xl xl:text-5xl">
                    Sponsors
                </h1>
            </div>


            <div className="h-2 bg-red-900"></div>
            <div className='bg-white'>

            </div>
            {/* News Section End */}
            <div className='pb-20'>
                <h1 className="sm:my-4 md:my-8 lg:my-10 my-2 text-center text-xl font-bold sm:text-2xl  md:text-3xl  lg:text-4xl xl:text-5xl">
                    Category
                </h1>
                <div className="flex items-center justify-center">
                    <Image
                        className="w-3/4  xl:w-1/2"
                        src={kategori}
                        alt="kategori"
                    />
                </div>
                <h1 className="sm:my-4 md:my-8 lg:my-10 my-2 text-center text-xl font-bold sm:text-2xl  md:text-3xl  lg:text-4xl xl:text-5xl">
                    Race Route
                </h1>
                <div className="flex items-center justify-center">
                    <Image
                        className="w-3/4 xl:w-1/2"
                        src={rute}
                        alt="rute"
                    />
                </div>
                <h1 className="sm:my-4 md:my-8 lg:my-10 my-2 text-center text-xl font-bold sm:text-2xl  md:text-3xl  lg:text-4xl xl:text-5xl">
                    Race Jersey and Medal
                </h1>
                <div className="flex items-center justify-center">

                </div>
                <div className="static inset-x-0 top-2/3 flex items-center justify-center">
                    <Link href="/development" className="inline-block bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 hover:bg-gradient-to-r hover:from-slate-300 hover:via-slate-500 hover:to-slate-700 text-white font-extrabold xl:text-3xl xl:py-6 xl:px-20 py-3 px-6 text-xs sm:text-lg sm:py-3 sm:px-8 md:text-lg md:py-4 md:px-10  lg:py-5 lg:px-16 rounded-full border-2 md:border-4 border-white ">
                        DOWNLOAD GUIDEBOOK
                    </Link>

                </div>
            </div>

        </>

    );
};

export default BodyRegistrationCFour;
