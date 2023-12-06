import danmenkad from '/public/images/menkad/danmenkad.png'
import wadanmenkad from '/public/images/menkad/wadanmenkad.png'
import danyonkad1 from '/public/images/menkad/danyonkad1.png'
import danyonkad2 from '/public/images/menkad/danyonkad2.png'
import danyonkad3 from '/public/images/menkad/danyonkad3.png'
import kasipamops from '/public/images/menkad/kasipamops.png'
import kasiminlog from '/public/images/menkad/kasiminlog.png'

import menkadfilosofi from '/public/images/menkad/menkadfilosofi.png'


import Image from "next/image";

const BodyResimenKadet = () => {
   return (
      <>
         <div className="">
            <div
               className="w-full min-h-screen bg-fixed bg-contain bg-center bg-no-repeat text-center bg-black"
               style={{
                  backgroundImage: 'url("images/logo/logo_menkad1.png")',
               }}
            >
               <div
                  className=" w-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
               >
                  <div className="pt-10">
                     <h1 className="pt-6 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20 pb-6 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20 text-center text-xl font-extrabold sm:text-2xl  md:text-3xl lg:text-4xl xl:text-5xl">
                        CADET REGIMENT
                     </h1>
                  </div>
                  {/* <div className="container mx-auto box-border p-8 md:p-12">
                     <Image
                        src={menkadfilosofi}
                        alt="menkadfilosofi"

                     />
                  </div> */}
                  {/* <div className="pt-10">
                     <h1 className="pt-6 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20  text-center text-xl font-extrabold sm:text-2xl  md:text-3xl lg:text-4xl xl:text-5xl">
                        MEET THE LEADER
                     </h1>
                  </div> */}
                  <div className="text-center">
                     <ul
                        className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none place-content-center mb-4"
                        id="pills-tab3"
                        role="tablist"
                     >
                        <li className="nav-item" role="presentation">
                           <button
                              type="button"
                              className=" border-red-900 border-2 rounded-lg
  nav-link
  block
  font-bold
  text-sm
  leading-tight
  uppercase
                    
  w-full
  md:w-auto
  px-6
  py-3
  my-2
  md:mr-2
  focus:outline-none focus:ring-0
  active
"
                              id="pills-home-tab3"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-pokdo"
                              role="tab"
                              aria-controls="pills-home3"
                              aria-selected="true"
                           >
                              COMMANDING OFFICER
                           </button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button
                              type="button"
                              className="border-red-900 border-2 rounded-lg
  nav-link
  block
  font-bold
  text-sm
  leading-tight
  uppercase
                 
  w-full
  md:w-auto
  px-6
  py-3
  my-2
  md:mx-2
  focus:outline-none focus:ring-0
"
                              id="pills-profile-tab3"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-poktaf"
                              role="tab"
                              aria-controls="pills-profile3"
                              aria-selected="false"
                           >
                              STAFF OFFICER
                           </button>
                        </li>
                     </ul>
                     <div className="tab-content" id="pills-tabContent3">
                        <div
                           className="tab-pane fade show active pb-8"
                           id="pills-pokdo"
                           role="tabpanel"
                           aria-labelledby="pills-home-tab3"
                        >
                           {/* Danmenkad Start */}
                           <div className=''>

                              <div
                                 className="flex flex-row bg-white rounded-2xl box-border m-2 lg:mx-40 xl:mx-56 2xl:mx-64 "
                              >
                                 <Image
                                    className="object-cover md:w-1/4 w-1/2 rounded-t-2xl rounded-bl-2xl lg:rounded-l-2xl "
                                    src={danmenkad}
                                    alt="danmenkad"



                                 />
                                 <div className="flex flex-col p-4 leading-normal">
                                    <h5 className="mb-3 text-md lg:text-3xl md:text-2xl font-extrabold tracking-tight text-black">
                                       REGIMENT COMMANDER
                                    </h5>
                                    <div className="h-0.5 bg-black"></div>
                                    <h5 className="mt-3 text-base md:text-xl lg:text-2xl font-semibold tracking-tight text-black">
                                       Colonel (MAR) Werijon
                                    </h5>
                                    <p className="my-4 font-normal text-xs md:text-sm lg:text-lg xl:text-[24px] text-black text-justify">
                                       Greeting from regiment commander
                                    </p>
                                    <p className="my-4 font-normal text-xs md:text-sm lg:text-lg xl:text-[24px] text-black text-justify">
                                       Cadets that I am proud of, as the Regiment Commander, i conveyed important things that you need to be aware of. We are entering a new era where the global situation and threats to a country{"'"}s sovereignty are really being tested with a formless war model. Cadets, at the same time, you must be smart and more efficient in seeing this challenge by showing your strength as true state defense cadres for a stronger Indonesia.
                                    </p>
                                 </div>
                              </div>
                           </div>
                           {/* Danmenkad End */}
                           <div className=" my-20"></div>
                           <div className="grid md:grid-cols-8 grid-cols-4 mx-2 gap-2 gap-y-6 md:gap-3 md:mx-3 lg:gap-6 lg:mx-6 xl:gap-10 xl:mx-60">

                              <div className="md:col-span-2 md:col-start-4 col-span-2 col-start-2">
                                 <div className="flex justify-center ">
                                    <div className="rounded-2xl shadow-xl bg-white max-w-xl ">
                                       <Image
                                          className="rounded-t-2xl w-full"
                                          src={wadanmenkad}
                                          alt="wadanmenkad"

                                       />
                                       <div className="px-1 py-1 md:pb-3">
                                          <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                             VICE REGIMENT COMMANDER
                                          </h5>
                                          <div className="md:mx-2 mx-1 h-0.5 bg-black"></div>
                                          <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">

                                             Ahmad G. Dohamid., S.Sos., MAP.
                                          </h1>
                                          <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                             Lieutenant Colonel (ARM)
                                          </h1>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                           </div>
                           <div className='my-20'></div>
                           {/* Danyonkad Start*/}
                           <div className="grid grid-cols-3 md:grid-cols-8 mx-2 gap-2 gap-y-6 md:gap-3 md:mx-3 lg:gap-6 lg:mx-6 xl:gap-8 xl:mx-60">
                              <div className="md:col-span-2 ">
                                 <div className="flex justify-center">
                                    <div className="rounded-2xl shadow-xl bg-white max-w-xl ">
                                       <Image
                                          className="rounded-t-2xl"
                                          src={danyonkad1}
                                          alt="danyonkad1"


                                       />
                                       <div className="px-1 py-1 md:pb-3">
                                          <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                             BATTALION 1 COMMANDER
                                          </h5>
                                          <div className="md:mx-2 mx-1 h-0.5 bg-black"></div>
                                          <h1 className="mx-2 xl:mx-6 text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                             Dr. M. Fatkhul Zuhdi, S.Ag., M.Pd.I.
                                          </h1>
                                          <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                             Lieutenant Colonel (INF)
                                          </h1>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="md:col-span-2 md:col-start-4">
                                 <div className="flex justify-center ">
                                    <div className="rounded-2xl shadow-xl bg-white max-w-xl ">
                                       <Image
                                          className="rounded-t-2xl"
                                          src={danyonkad2}
                                          alt="danyonkad2"

                                       />
                                       <div className="px-1 py-1 md:pb-3">
                                          <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                             BATTALION 2 COMMANDER
                                          </h5>
                                          <div className="md:mx-2 mx-1 h-0.5 bg-black"></div>
                                          <h1 className=" mx-2 md:mx-3 lg:mx-4 xl:mx-8 text-black font-semibold text-[10px] md:text-sm xl:text-lg">

                                             Kosmas Prayogo Wira Wijaya
                                          </h1>
                                          <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                             Lieutenant Colonel (CZI)
                                          </h1>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="md:col-span-2 md:col-start-7">
                                 <div className="flex justify-center ">
                                    <div className="rounded-2xl shadow-xl bg-white max-w-xl ">
                                       <Image
                                          className="rounded-t-2xl"
                                          src={danyonkad3}
                                          alt="danyonkad3"

                                       />
                                       <div className="px-1 py-1 md:pb-3">
                                          <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                             BATTALION 3 COMMANDER
                                          </h5>
                                          <div className="md:mx-2 mx-1 h-0.5 bg-black"></div>
                                          <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">

                                             Rully Ramadhiansyah, S.Sos., M.Tr.Opsla.
                                          </h1>
                                          <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                             Lieutenant Colonel (KH)
                                          </h1>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* Danyonkad End */}
                        </div>
                        <div
                           className="tab-pane fade pb-8"
                           id="pills-poktaf"
                           role="tabpanel"
                           aria-labelledby="pills-profile-tab3"
                        >
                           {/* Poktaf Start*/}
                           <div className="grid grid-cols-2 md:grid-cols-8 mx-2 gap-2 gap-y-6 md:gap-3 md:mx-3 lg:gap-6 lg:mx-6 xl:gap-10 xl:mx-60">
                              <div className="md:col-span-2 md:col-start-2 ">
                                 <div className="flex justify-center ">
                                    <div className="rounded-2xl shadow-xl bg-white max-w-xl ">
                                       <Image
                                          className="rounded-t-2xl"
                                          src={kasipamops}
                                          alt="kasipamops"

                                       />
                                       <div className="px-1 py-1 md:pb-3">
                                          <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                             HEAD OF OPERATION AND SECURITY
                                          </h5>
                                          <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                             <div className="md:mx-2 mx-1 h-0.5 bg-black"></div>
                                             Toto Sutiadi, S.Sos., M.Han
                                          </h1>
                                          <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                             Major (CPM)
                                          </h1>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="md:col-span-2 md:col-start-6">
                                 <div className="flex justify-center ">
                                    <div className="rounded-2xl shadow-xl bg-white max-w-xl ">
                                       <Image
                                          className="rounded-t-2xl w-full"
                                          src={kasiminlog}
                                          alt="kasiminlog"

                                       />
                                       <div className="px-1 py-1 md:pb-3">
                                          <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                             HEAD OF ADMINISTRATION AND LOGISTICS
                                          </h5>
                                          <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                             <div className="md:mx-2 mx-1 h-0.5 bg-black"></div>
                                             M. Teguh Imam Cahyadi
                                          </h1>
                                          <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                             Major (INF)
                                          </h1>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                           </div>

                           {/* Poktaf End */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default BodyResimenKadet;
