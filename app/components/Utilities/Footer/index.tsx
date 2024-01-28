import React from 'react'
import Image from 'next/image'
import pin from '/public/images/icon/pin.png'
import call from '/public/images/icon/call.png'
import email from '/public/images/icon/email.png'
import youtube from '/public/images/icon/youtube.png'
import instagram from '/public/images/icon/instagram.png'
import tiktok from '/public/images/icon/tiktok.png'
import logomenkad from '/public/images/logo/logo_menkad1.png'
import logomenkor from '/public/images/logo/logo_menkor1.png'


function Footer() {
    return (
        <div>
            <div className='md:h-1.5 h-1 bg-accent'>

            </div>
            <footer className="bg-[#141414] text-center lg:text-left ">
                <div className="container p-6 text-[#ffffff] mx-auto">
                    <div className="grid grid-cols-2 md:gap-5 md:grid-cols-5 ">
                        <div className="self-center mx-auto mb-6 md:mb-0 relative w-40 h-40 lg:w-56 lg:h-56 xl:w-80  ">
                            <Image
                                src={logomenkad}
                                priority={true}
                                alt="logo menkad"
                                fill={true}
                                className="absolute object-contain -translate-y-3"
                                sizes='40vw'
                            />

                        </div>
                        <div className="self-center mx-auto md:-ml-8 mb-6 md:mb-0 relative w-40 h-40 lg:w-56 lg:h-56 xl:w-80 ">
                            <Image
                                src={logomenkor}
                                priority={true}
                                alt="logo menkor"
                                fill={true}
                                className="absolute object-contain "
                                sizes='40vw'
                            />
                        </div>
                        <div className="mb-6 col-span-2 md:mb-0 md:flex md:flex-col md:col-start-3 md:col-span-3 md:text-left">
                            <h5 className="mb-6 text-2xl lg:text-3xl font-bold uppercase">
                                Tentang Kami
                            </h5>
                            <p className="mb-4 text-center text-sm sm:text-md md:text-md md:text-justify lg:text-base ">
                                Resimen Korps Kadet Universitas Pertahanan Republik Indonesia merupakan wadah bagi kadet mahasiswa untuk belajar tentang organisasi, kepemimpinan, karakter dan mentalitas untuk mempersiapkan diri dalam menyambut indonesia emas tahun 2045
                            </p>
                            <div className="mb-6 md:mb-0 md:flex md:flex-col ">
                                <h5 className="mb-6 text-2xl lg:text-3xl font-bold uppercase">
                                    Kontak
                                </h5>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="flex justify-center md:justify-start">
                                        <Image src={pin} className=" h-8 w-8 my-auto hover:scale-150 transition duration-200 ease-in-out" alt="location" />                           </div>
                                    <div className="col-span-2 text-justify md:text-start text-sm sm:text-md md:text-md lg:text-lg  ">
                                        <p className='md:-ml-28 lg:-ml-36 xl:-ml-44 2xl:-ml-56'>
                                            Kawasan IPSC Sentul, Sukahati, Kabupaten Bogor, Provinsi Jawa Barat, Indonesia
                                        </p>
                                    </div>
                                    <div
                                        className="flex justify-center md:justify-start"
                                    >
                                        <Image src={call} className="h-8 w-8 my-auto hover:scale-150 transition duration-200 ease-in-out" alt="call" />
                                    </div>
                                    <div className="col-span-2 text-justify text-sm sm:text-md md:text-md lg:text-lg ">
                                        <p className='md:-ml-28 lg:-ml-36 xl:-ml-44 2xl:-ml-56'>(+62) 85161503047</p>
                                    </div>
                                    <div
                                        className="flex justify-center md:justify-start"
                                    >
                                        <Image src={email} className="h-8 w-8 my-auto hover:scale-150 transition duration-200 ease-in-out" alt="email" />
                                    </div>
                                    <div className="col-span-2 text-justify text-sm sm:text-md md:text-md lg:text-lg ">
                                        <p className='md:-ml-28 lg:-ml-36 xl:-ml-44 2xl:-ml-56'>resimenkadetunhan@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex w-full justify-center ">
                    <div className="pb-8 md:pb-10 mx-8" >
                        <a className="hover:scale-150 transition duration-200 ease-in-out " target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@unhanri.menkorps">
                            <Image src={youtube} alt={'youtube'} width={50} />
                        </a>
                    </div>
                    <div className="pb-8 md:pb-10 mx-8" >
                        <a className="hover:scale-150 transition duration-200 ease-in-out " target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/unhanri.menkorps">
                            <Image src={instagram} alt={'instagram'} width={50} />
                        </a>
                    </div>
                    <div className="pb-8 md:pb-10 mx-8" >
                        <a className="hover:scale-150 transition duration-200 ease-in-out " target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@unhanri.menkorps">
                            <Image src={tiktok} alt={'tiktok'} width={50} />
                        </a>
                    </div>

                </div>
                <div className="center px-16 lg:px-32">
                    <div className="h-1 bg-[#ffffff]"></div>
                </div>
                <div className="">
                    <div className="p-3 text-center text-[#ffffff] ">
                        © 2024 Nara Creative
                    </div>
                </div>
            </footer>
            {/* <div
            className="
                bg-blue-500
                sm:bg-green-500
                md:bg-yellow-500
                lg:bg-orange-500
                xl:bg-red-500
                2xl:bg-gray-500"
                

        >
            Screen Width Test{" "}
         </div> */}
        </div>
    );
}

export default Footer
