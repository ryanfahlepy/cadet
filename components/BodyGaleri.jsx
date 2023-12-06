import gallery1 from '/public/images/inshot/p1.png'
import gallery2 from '/public/images/inshot/p2.png'
import gallery3 from '/public/images/inshot/p3.png'
import gallery4 from '/public/images/inshot/p4.png'
import gallery5 from '/public/images/inshot/p5.png'
import gallery6 from '/public/images/inshot/p6.png'
import gallery7 from '/public/images/inshot/p7.png'
import gallery8 from '/public/images/inshot/p8.png'
import gallery9 from '/public/images/inshot/p9.png'
import gallery10 from '/public/images/inshot/p10.png'
import gallery11 from '/public/images/inshot/p11.png'
import gallery12 from '/public/images/inshot/p12.png'
import gallery13 from '/public/images/inshot/p13.png'
import gallery14 from '/public/images/inshot/p14.png'
import gallery15 from '/public/images/inshot/p15.png'
import gallery16 from '/public/images/inshot/p16.png'
import gallery17 from '/public/images/inshot/p17.png'
import gallery18 from '/public/images/inshot/p18.png'

import Image from "next/image";

const BodyGaleri = () => {

    return (
        <>
            <div className=" bg-black">
                {/* <div className=" grid grid-cols-2 lg:gap-10 xl:gap-20 gap-2 ">
                    <div className="grid col-span-2">
                        
                        <div className=" w-full">
                            <video className='w-full' loop controls>
                                <source src="videos/daily/daily_video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                </div> */}
                <div className="w-full pt-24 pb-6">
                    <h1 className=" text-white text-center font-bold text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl pb-2">
                        InShots
                    </h1>
                </div>
                <section className="overflow-hidden text-gray-700">
                    <div className="mx-3">
                        <div className="flex flex-wrap -m-1 md:-m-2">
                            <div className="flex flex-wrap w-1/2">
                                <div className=" w-1/2 p-1 md:p-2  ">
                                    <Image alt="gallery1" className="block object-cover object-center w-full h-full rounded-lg "
                                        src={gallery1} />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <Image alt="gallery2" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gallery2} />
                                </div>
                                <div className="w-full p-1 md:p-2">
                                    <Image alt="gallery3" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gallery3} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-full p-1 md:p-2">
                                    <Image alt="gallery4" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gallery4} />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <Image alt="gallery5" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gallery5} />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <Image alt="gallery6" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gallery6} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-3 my-3">
                        <div className="flex flex-wrap -m-1 md:-m-2">
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-1/2 p-1 md:p-2">
                                    <Image alt="gallery7" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gallery7} />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <Image alt="gallery8" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gallery8} />
                                </div>
                                <div className="w-full p-1 md:p-2">
                                    <Image alt="gallery9" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gallery9} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-full p-1 md:p-2">
                                    <Image alt="gallery10" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gallery10} />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <Image alt="gallery11" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gallery11} />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <Image alt="gallery12" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gallery12} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-3 my-3">
                        <div className="flex flex-wrap -m-1 md:-m-2">
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-1/2 p-1 md:p-2">
                                    <Image alt="gallery13" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gallery13} />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <Image alt="gallery14" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gallery14} />
                                </div>
                                <div className="w-full p-1 md:p-2">
                                    <Image alt="gallery15" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gallery15} />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-full p-1 md:p-2">
                                    <Image alt="gallery16" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gallery16} />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <Image alt="gallery17" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gallery17} />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <Image alt="gallery18" className="block object-cover object-center w-full h-full rounded-lg"
                                        src={gallery18} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default BodyGaleri;