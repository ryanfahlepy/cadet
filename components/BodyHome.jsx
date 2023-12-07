import crop1 from '/public/images/crop/crop1.png'
import crop2 from '/public/images/crop/crop2.png'
import crop3 from '/public/images/crop/crop3.png'
import logo_menkad from '/public/images/logo/logo_menkad.png'
import prajurit_kadet from '/public/images/sevron/prajurit_kadet.png'
import kopral_kadet from '/public/images/sevron/kopral_kadet.png'
import sersan_kadet from '/public/images/sevron/sersan_kadet.png'
import sersan_mayor_dua_kadet from '/public/images/sevron/sersan_mayor_dua_kadet.png'
import sersan_mayor_satu_kadet from '/public/images/sevron/sersan_mayor_satu_kadet.png'
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
import rektor from '/public/images/carousel/rektor.jpg'
import werijon from '/public/images/carousel/werijon.png'

import { Program, NewsCarousel } from ".";

import Image from "next/image";

const BodyHome = ({ featuredPosts }) => {
   return (
      <>
         <div>
            <div className=" w-full">
               <div className=" relative w-full">
                  <div className="absolute flex top-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-30">
                     <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/watch?v=9chguO_GDdM"
                     >
                        <h1 className=" font-bold text-white text-[10px]  sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl flex text-center">
                           This is where true warriors for Indonesia were
                           born
                        </h1>
                     </a>
                  </div>
                  <a
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://www.youtube.com/watch?v=9chguO_GDdM"
                  >
                     <video
                        autoPlay
                        playsInline
                        loop
                        muted
                        className="w-full"
                     >
                        <source
                           src="videos/home/home_video.webm"
                           type="video/webm"
                        />
                     </video>
                     <div className="absolute right-1/2 md:left-1/4 transform -translate-y-full z-30">
                        <Image
                           className="h-24 w-28 sm:h-40 sm:w-48 md:h-48 md:w-60 lg:h-56 lg:w-[250px] xl:h-80 xl:w-[370px] 2xl:w-[400px] 2xl:h-96"
                           src={crop1}
                           alt="crop1"

                        />
                     </div>
                     <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full z-50">
                        <Image
                           className="h-28 w-28 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 xl:h-96 xl:w-[384px] 2xl:w-[470px] 2xl:h-[470px]"
                           src={crop3}
                           alt="crop3"

                        />
                     </div>
                     <div className="absolute left-1/2 md:right-1/4 transform  -translate-y-full z-20">
                        <Image
                           className='h-24 w-24 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-64 xl:h-80 xl:w-[320px] 2xl:w-[360px] 2xl:h-96'
                           src={crop2}
                           alt="crop2"

                        />
                     </div>
                  </a>
               </div>
            </div>
         </div>
         <div className="h-2 bg-red-900"></div>
         <div className="relative mx-5 sm:mx-15 md:mx-12 lg:mx-28 xl:mx-44 py-8 ">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ">
               <Image
                  className='h-32 w-[6.5rem] sm:h-44 sm:w-[8.5rem] md:h-48 md:w-[9.5rem] lg:h-56 lg:w-[10.5rem] xl:h-72 xl:w-[15.5rem] 2xl:h-96 2xl:w-[21.5rem] mx-auto'
                  src={logo_menkad}
                  alt='logo_menkad'
                  priority={true}

               />
            </div>
            <h1 className="flex text-center justify-center text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-extrabold pt-10 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-36 2xl:pt-48">
               INDONESIA DEFENSE UNIVERSITY
            </h1>
            <h1 className="flex text-center justify-center text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold ">
               CADET CORPS
            </h1>
            <h1 className="flex text-center justify-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold mt-4">
               Praditya - Wiratama - Nagara Bhakti
            </h1>
            <p className="text-xs text-center sm:text-sm lg:text-lg mt-4">
               The Republic of Indonesia Defense University Cadet Corps is a
               place for Indonesian Defense University cadets to organize, learn
               leadership, and shape the character and mentality of cadets in
               welcoming the golden Indonesia age in 2045
            </p>
         </div>
         <div className="center px-16 md:px-24 lg:px-32 xl:px-36">
            <div className="h-1 bg-black"></div>
         </div>
         <div>
            <h1 className="pt-6 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20 pb-6 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20 text-center text-xl font-extrabold sm:text-2xl   md:text-3xl lg:text-4xl xl:text-5xl">
               CADET RANKS
            </h1>
         </div>
         {/* Sevron Section Start */}
         <div className=" grid grid-flow-row grid-cols-7 gap-4">
            <Image
               className='justify-self-center w-20 sm:w-24 sm:h-32 md:w-28 md:h-40 lg:w-32 lg:h-48 xl:w-48 xl:h-72 col-start-2'
               src={prajurit_kadet}
               alt='prajurit_kadet'
            />
            <Image
               className='justify-self-center w-20  sm:w-24 sm:h-32 md:w-28 md:h-40 lg:w-32 lg:h-48 xl:w-48 xl:h-72'
               src={kopral_kadet}
               alt='kopral_kadet'
            />
            <Image
               className='justify-self-center w-20 sm:w-24 sm:h-32 md:w-28 md:h-40 lg:w-32 lg:h-48 xl:w-48 xl:h-72'
               src={sersan_kadet}
               alt='sersan_kadet'
            />
            <Image
               className='justify-self-center w-20 sm:w-24 sm:h-32 md:w-28 md:h-40 lg:w-32 lg:h-48 xl:w-48 xl:h-72'
               src={sersan_mayor_dua_kadet}
               alt='sersan_mayor_dua_kadet'
            />
            <Image
               className='justify-self-center w-20 sm:w-24 sm:h-32 md:w-28 md:h-40 lg:w-32 lg:h-48 xl:w-48 xl:h-72'
               src={sersan_mayor_satu_kadet}
               alt='sersan_mayor_satu_kadet'
            />
         </div>
         <div className="grid grid-flow-row grid-cols-7 pb-6 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20">
            <div className=" col-start-2">
               <h2 className="md:text-md text-center text-xs font-normal sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl pt-3">
                  Entry Class
               </h2>
               <h2 className="md:text-md text-center hidden sm:block text-xs font-bold sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
                  Cadet Private
               </h2>
            </div>
            <div className="">
               <h2 className="md:text-md text-center text-xs text font-normal sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl pt-3">
                  1st Class
               </h2>
               <h2 className="md:text-md text-center hidden sm:block text-xs font-bold sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
                  Cadet Corporal
               </h2>
            </div>
            <div className="">
               <h2 className="md:text-md text-center text-xs font-normal sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl pt-3">
                  2nd Class
               </h2>
               <h2 className="md:text-md text-center hidden sm:block text-xs font-bold sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
                  Cadet Sergeant
               </h2>
            </div>
            <div className="">
               <h2 className="md:text-md text-center text-xs font-normal sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl pt-3">
                  3rd Class
               </h2>
               <h2 className="md:text-md text-center hidden sm:block text-xs font-bold sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
                  Cadet Sergeant Major
               </h2>
            </div>
            <div className="">
               <h2 className="md:text-md text-center text-xs font-normal sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl pt-3">
                  4th Class
               </h2>
               <h2 className="md:text-md text-center hidden sm:block text-xs font-bold sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
                  Cadet Staff Sergeant Major
               </h2>
            </div>
            <div className="flex justify-center mt-6 lg:mt-20 xl:mt-24 md:mt-12 col-start-4">
               <a
                  href="/cadet-regiment"
                  rel="noopener noreferrer"
                  target="_blank"
               >
                  <button
                     type="button"
                     className=" flex items-center justify-center xl:h-20 xl:w-72 lg:h-16 lg:w-56 md:h-14 md:w-52 sm:h-12 sm:w-40 h-10 w-32   border text-red-900 border-red-900  hover:text-white hover:border-black hover:bg-red-900  rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2  "
                  >
                     <h1 className=" font-extrabold xl:text-xl 2xl:text-2xl lg:text-lg md:text-base sm:text-sm text-xs">
                        LEARN MORE
                     </h1>
                  </button>
               </a>
            </div>
         </div>

         <div className="center px-16 md:px-24 lg:px-32 xl:px-36">
            <div className="h-1 bg-black"></div>
         </div>
         <div>
            <h1 className="pt-6 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20 pb-6 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20 text-center text-xl font-extrabold sm:text-2xl   md:text-3xl lg:text-4xl xl:text-5xl">
               STUDY PROGRAM
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
                     className="flex items-center justify-center xl:h-20 xl:w-72 lg:h-16 lg:w-56 md:h-14 md:w-52 sm:h-12 sm:w-40 h-10 w-32   border text-red-900 border-red-900  hover:text-white hover:border-black hover:bg-red-900  rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2  "
                  >
                     <h1 className=" font-extrabold xl:text-xl 2xl:text-2xl lg:text-lg md:text-base sm:text-sm text-xs">
                        LEARN MORE
                     </h1>
                  </button>
               </a>
            </div>
         </div>

         <div className="h-2 bg-red-900"></div>
         {/* Sevron Section End */}

         {/* News Section Start */}





         <Program />
         <div className="h-2 bg-red-900"></div>
         <div className='bg-white'>
            <NewsCarousel featuredPosts={featuredPosts} />
         </div>
         <div className="center px-16 md:px-24 lg:px-32 xl:px-36">
            <div className="h-1 bg-black"></div>
         </div>
         {/* News Section End */}
         <div>
            <h1 className=" sm:my-4 md:my-8 lg:my-10 my-2 text-center text-xl font-bold sm:text-2xl  md:text-3xl  lg:text-4xl xl:text-5xl">
               INSPIRATION
            </h1>
         </div>
         {/* Carousel Section Start */}
         <div className="container mx-auto px-16 lg:px-28 xl:px-72">
            <div
               id="carouselExampleCaptions"
               className="slide carousel relative"
               data-bs-ride="carousel"
            >
               <div className="carousel-inner relative w-full overflow-hidden">
                  <div className="carousel-item active relative float-left w-full">
                     <Image
                        className='block w-full'
                        src={prabowo}
                        alt='prabowo'
                     />
                     <div className="h-24 md:h-40">
                        <p className="md:text-md text-center text-xs font-medium sm:text-sm lg:text-lg xl:text-xl">
                           Jadilah pemimpin-pemimpin yang baik di masa depan
                           dengan otak yang cemerlang harus menghasilkan ilmu,
                           inovasi, kemajuan, terobosan dalam sains dan
                           teknologi
                        </p>
                        <p className="sm:text-md text-center text-sm font-bold md:text-lg lg:text-xl xl:text-2xl">
                           - Prabowo Soebianto -
                        </p>
                     </div>
                  </div>
                  <div className="carousel-item relative float-left w-full">
                     <Image
                        className='block w-full'
                        src={rektor}
                        alt='rektor'
                     />
                     <div className="h-24 md:h-40">
                        <p className="md:text-md text-center text-xs font-medium sm:text-sm lg:text-lg xl:text-xl">
                           Kadet Mahasiswa Unhan RI harus menjadi ilmuan TNI
                           terkemuka di dunia.
                        </p>
                        <p className="sm:text-md text-center text-sm font-bold md:text-lg lg:text-xl xl:text-2xl">
                           <br />- Jonni Mahroza -
                        </p>
                     </div>
                  </div>
                  <div className="carousel-item relative float-left w-full">
                     <Image
                        className='block w-full'
                        src={werijon}
                        alt='werijon'
                     />
                     <div className="h-24 md:h-40">
                        <p className="md:text-md text-center text-xs font-medium sm:text-sm lg:text-lg xl:text-xl">
                           Disini tempat lahirnya fighter-fighter bela negara
                           sejati untuk indonesia.
                           <br />
                           OORAH!!!
                        </p>
                        <p className="sm:text-md text-center text-sm font-bold md:text-lg lg:text-xl xl:text-2xl">
                           - Werijon -
                        </p>
                     </div>
                  </div>
               </div>

               <button
                  className="carousel-control-prev absolute top-0 bottom-1/4 -left-2 -translate-x-3/4 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
               >
                  <span
                     className="carousel-control-prev-icon inline-block bg-no-repeat bg-red-900 rounded-2xl "
                     aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
               </button>
               <button
                  className="carousel-control-next absolute top-0 bottom-1/4 -right-2 translate-x-3/4 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
               >
                  <span
                     className="carousel-control-next-icon inline-block bg-no-repeat bg-red-900 rounded-2xl"
                     aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
               </button>
               {/* Carousel Section End */}
            </div>
         </div>
         {/* Carousel Section End */}
      </>
   );
};

export default BodyHome;
