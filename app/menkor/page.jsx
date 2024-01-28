"use client";

import threestar from "/public/images/star/3star.png";
import twostar from "/public/images/star/2star.png";
import onestar from "/public/images/star/1star.png";

import danmenkor from "/public/images/menkorps/danmenkor.png";
import wadanmenkor from "/public/images/menkorps/wadanmenkor.png";
import danyonmadya from "/public/images/menkorps/danyonmadya.png";
import danyondewasa from "/public/images/menkorps/danyondewasa.png";
import danyonremaja from "/public/images/menkorps/danyonremaja.png";
import wadanyonmadya from "/public/images/menkorps/wadanyonmadya.png";
import wadanyondewasa from "/public/images/menkorps/wadanyondewasa.png";
import wadanyonremaja from "/public/images/menkorps/wadanyonremaja.png";
import dankiamadya from "/public/images/menkorps/dankiamadya.png";
import dankibmadya from "/public/images/menkorps/dankibmadya.png";
import dankicmadya from "/public/images/menkorps/dankicmadya.png";
import dankiadewasa from "/public/images/menkorps/dankiadewasa.png";
import dankibdewasa from "/public/images/menkorps/dankibdewasa.png";
import dankicdewasa from "/public/images/menkorps/dankicdewasa.png";
import dankiaremaja from "/public/images/menkorps/dankiaremaja.png";
import dankibremaja from "/public/images/menkorps/dankibremaja.png";
import dankicremaja from "/public/images/menkorps/dankicremaja.png";

import sekretaris from "/public/images/menkorps/sekretaris.png";
import bendahara from "/public/images/menkorps/bendahara.png";
import kasi1pam from "/public/images/menkorps/kasi1pam.png";
import kasi2ops from "/public/images/menkorps/kasi2ops.png";
import kasi3pers from "/public/images/menkorps/kasi3pers.png";
import kasi4log from "/public/images/menkorps/kasi4log.png";

import kaurprotokol from "/public/images/menkorps/kaurprotokol.png";
import kaurhumas from "/public/images/menkorps/kaurhumas.png";
import kaurkesehatan from "/public/images/menkorps/kaurkesehatan.png";
import kauradminlog from "/public/images/menkorps/kauradminlog.png";
import kaurperbekalan from "/public/images/menkorps/kaurperbekalan.png";
import kaurangkutan from "/public/images/menkorps/kaurangkutan.png";
import kaurtradisi from "/public/images/menkorps/kaurtradisi.png";
import kaurseni from "/public/images/menkorps/kaurseni.png";
import kaurislam from "/public/images/menkorps/kaurislam.png";
import kaurprotestan from "/public/images/menkorps/kaurprotestan.png";
import kaurkatolik from "/public/images/menkorps/kaurkatolik.png";
import kaurhindu from "/public/images/menkorps/kaurhindu.png";
import kaurbuddha from "/public/images/menkorps/kaurbuddha.png";
import stafopsyonmadya from "/public/images/menkorps/stafopsyonmadya.png";
import stafopsyondewasa from "/public/images/menkorps/stafopsyondewasa.png";
import stafopsyonremaja from "/public/images/menkorps/stafopsyonremaja.png";
import stafminlogyonmadya from "/public/images/menkorps/stafminlogyonmadya.png";
import stafminlogyondewasa from "/public/images/menkorps/stafminlogyondewasa.png";
import stafminlogyonremaja from "/public/images/menkorps/stafminlogyonremaja.png";

import kalemus from "/public/images/menkorps/kalemus.png";
import seslemus from "/public/images/menkorps/seslemus.png";
import kalemyonmadya from "/public/images/menkorps/kalemyonmadya.png";
import kalemyondewasa from "/public/images/menkorps/kalemyondewasa.png";
import kalemyonremaja from "/public/images/menkorps/kalemyonremaja.png";
import lemkiamadya1 from "/public/images/menkorps/lemkiamadya1.png";
import lemkiamadya2 from "/public/images/menkorps/lemkiamadya2.png";
import lemkibmadya1 from "/public/images/menkorps/lemkibmadya1.png";
import lemkibmadya2 from "/public/images/menkorps/lemkibmadya2.png";
import lemkicmadya1 from "/public/images/menkorps/lemkicmadya1.png";
import lemkicmadya2 from "/public/images/menkorps/lemkicmadya2.png";
import lemkiadewasa1 from "/public/images/menkorps/lemkiadewasa1.png";
import lemkiadewasa2 from "/public/images/menkorps/lemkiadewasa2.png";
import lemkibdewasa1 from "/public/images/menkorps/lemkibdewasa1.png";
import lemkibdewasa2 from "/public/images/menkorps/lemkibdewasa2.png";
import lemkicdewasa1 from "/public/images/menkorps/lemkicdewasa1.png";
import lemkicdewasa2 from "/public/images/menkorps/lemkicdewasa2.png";

import danpolkad from "/public/images/menkorps/danpolkad.png";

import Image from "next/image";
import { useState } from "react";

const MenkorPage = () => {
    const [activeTab, setActiveTab] = useState("command_corps");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className="">
                <div
                    className=" w-full min-h-screen bg-fixed bg-contain bg-center bg-no-repeat text-center bg-[#000000]"
                    style={{
                        backgroundImage: 'url("images/logo/logo_menkor1.png")',
                    }}>
                    <div
                        className=" w-full"
                        style={{ backgroundColor: "rgba(255,255,255,0.7)" }}>
                        <div className="pt-10">
                            <h1 className="pt-6 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20 pb-6 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-20 text-center text-xl font-extrabold sm:text-2xl  md:text-3xl lg:text-4xl xl:text-5xl">
                                RESIMEN KORPS KADET MAHASISWA
                            </h1>
                        </div>
                        <div className="text-center">
                            <ul className="flex flex-col md:flex-row flex-wrap place-content-center mb-4">
                                <li className="">
                                    <button
                                        onClick={() => handleTabClick('command_corps')}
                                        className={`cursor-pointer ${activeTab === 'command_corps' ? 'border-primary text-[#ffffff] border-2 rounded-lg bg-primary block font-bold text-sm leading-tight uppercase w-full md:w-auto px-6 py-3 my-2 md:mx-2' : 'border-primary text-primary border-2 rounded-lg bg-[#ffffff] block font-bold text-sm leading-tight uppercase w-full md:w-auto px-6 py-3 my-2 md:mx-2'}
`}>
                                        KELOMPOK KOMANDO
                                    </button>
                                </li>
                                <li className="">
                                    <button
                                        onClick={() => handleTabClick('staff_corps')}
                                        className={`cursor-pointer ${activeTab === 'staff_corps' ? 'border-primary text-[#ffffff] border-2 rounded-lg bg-primary block font-bold text-sm leading-tight uppercase w-full md:w-auto px-6 py-3 my-2 md:mx-2' : 'border-primary text-primary border-2 rounded-lg bg-[#ffffff] block font-bold text-sm leading-tight uppercase w-full md:w-auto px-6 py-3 my-2 md:mx-2'}
`}>
                                        KELOMPOK STAF
                                    </button>
                                </li>
                                <li className="" role="">
                                    <button
                                        onClick={() => handleTabClick('deliberative_council')}
                                        className={`cursor-pointer ${activeTab === 'deliberative_council' ? 'border-primary text-[#ffffff] border-2 rounded-lg bg-primary block font-bold text-sm leading-tight uppercase w-full md:w-auto px-6 py-3 my-2 md:mx-2' : 'border-primary text-primary border-2 rounded-lg bg-[#ffffff] block font-bold text-sm leading-tight uppercase w-full md:w-auto px-6 py-3 my-2 md:mx-2'}
`}>
                                        LEMBAGA MUSYAWARAH
                                    </button>
                                </li>
                                <li className="" role="">
                                    <button
                                        onClick={() => handleTabClick('cadet_police')}
                                        className={`cursor-pointer ${activeTab === 'cadet_police' ? 'border-primary text-[#ffffff] border-2 rounded-lg bg-primary block font-bold text-sm leading-tight uppercase w-full md:w-auto px-6 py-3 my-2 md:mx-2' : 'border-primary text-primary border-2 rounded-lg bg-[#ffffff] block font-bold text-sm leading-tight uppercase w-full md:w-auto px-6 py-3 my-2 md:mx-2'}
`}>
                                        POLISI KADET
                                    </button>
                                </li>
                            </ul>

                            {/* Card Start */}
                            <div className="">
                                {/* Pokdo Start */}
                                {activeTab === 'command_corps' && (
                                    <div className="">
                                        {/* Pokdo Bintang 3 Start*/}
                                        <div>
                                            <div className="grid grid-cols-3">
                                                <div className="col-start-2">
                                                    <Image
                                                        className=""
                                                        src={threestar}
                                                        alt="star3"
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-2 md:h-4"></div>
                                            <div className="grid grid-cols-4 mx-10 gap-x-8 gap-y-6 md:gap-y-28 sm:gap-x-10 sm:mx-24 md:gap-x-16 md:mx-32 lg:gap-x-32 lg:mx-48 xl:gap-x-48 xl:mx-56 2xl:gap-x-56 2xl:mx-80">
                                                <div className="col-span-2 ">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={danmenkor}
                                                                alt="danmenkor"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KOMANDAN RESIMEN KADET MAHASISWA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Adriel
                                                                    Regginald
                                                                    Gerardo
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Kedokteran
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2 col-start-3">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={wadanmenkor}
                                                                alt="wadanmenkor"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    WAKIL KOMANDAN RESIMEN KORPS KADET MAHASISWA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Elvira
                                                                    Rosmawati Rahman
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Teknik Mesin
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Pokdo Bintang 3 End */}

                                        {/* Margin Pemisah */}
                                        <div className="my-10 md:my-16"></div>
                                        {/* Margin Pemisah */}

                                        {/* Pokdo Bintang 2 Start*/}
                                        <div>
                                            <div className="grid grid-cols-3">
                                                <div className="col-start-2">
                                                    <Image
                                                        src={twostar}
                                                        alt="star2"
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-2 md:h-4"></div>
                                            <div className="grid grid-cols-6 mx-2 gap-x-2 gap-y-6 md:gap-y-28 sm:gap-x-8 md:gap-x-16 md:mx-3 lg:gap-x-32 lg:mx-6 xl:gap-x-48 xl:mx-10 2xl:mx-48">
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={danyonmadya}
                                                                alt="danyonmadya"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KOMANDAN BATALYON MADYA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Devara Ega
                                                                    Dynansyah
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Teknik Mesin
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={danyondewasa}
                                                                alt="danyondewasa"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KOMANDAN BATALYON DEWASA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK M. Angga
                                                                    Yoga Pratama
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Teknik Elektro
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={danyonremaja}
                                                                alt="danyonremaja"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KOMANDAN BATALYON REMAJA

                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK M. Rizky
                                                                    Pratama
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Teknik Mesin
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={wadanyonmadya}
                                                                alt="wadanyonmadya"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    WAKIL KOMANDAN BATALYON MADYA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Kadek Jana
                                                                    Priyani
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Informatika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={wadanyondewasa}
                                                                alt="wadanyondewasa"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    WAKIL KOMANDAN BATALYON DEWASA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Astrid
                                                                    Josephine
                                                                    Natalia
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Kedokteran
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={wadanyonremaja}
                                                                alt="wadanyonremaja"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    WAKIL KOMANDAN BATALYON REMAJA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Shafira
                                                                    Oktaviana
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Farmasi
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Pokdo Bintang 2 End */}

                                        {/* Margin Pemisah */}
                                        <div className="my-10 md:my-16"></div>
                                        {/* Margin Pemisah */}

                                        {/* Pokdo Bintang 1 Start*/}
                                        <div>
                                            <div className="grid grid-cols-3">
                                                <div className="col-start-2">
                                                    <Image
                                                        src={onestar}
                                                        alt="star1"
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-2 md:h-4"></div>
                                            <div className="grid grid-cols-6 mx-2 gap-x-2 gap-y-6 md:gap-y-28 sm:gap-x-8 md:gap-x-16 md:mx-3 lg:gap-x-32 lg:mx-6 xl:gap-x-48 xl:mx-10 2xl:mx-48">
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={dankiamadya}
                                                                alt="dankiamadya"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KOMANDAN KOMPI A MADYA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Ryan Fahlepy
                                                                    Sinaga
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Informatika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={dankibmadya}
                                                                alt="dankibmadya"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KOMANDAN KOMPI B MADYA

                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK M. Yusuf Al
                                                                    Habsy
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Matematika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={dankicmadya}
                                                                alt="dankicmadya"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KOMANDAN  KOMPI C MADYA

                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Fathan
                                                                    Luqman
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Teknik Elektro
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={dankiadewasa}
                                                                alt="dankiadewasa"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KOMANDAN KOMPI A DEWASA

                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Ayumas
                                                                    Qonita
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Informatika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={dankibdewasa}
                                                                alt="dankibdewasa"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KOMANDAN KOMPI B DEWASA

                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK M. Abdhitya
                                                                    Arghanie
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Teknik Elektro
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={dankicdewasa}
                                                                alt="dankicdewasa"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KOMANDAN KOMPI C DEWASA

                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Gary
                                                                    Ferdinand
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Informatika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={dankiaremaja}
                                                                alt="dankiaremaja"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KOMANDAN KOMPI A REMAJA

                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Morgan Enryo
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Kedokteran
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={dankibremaja}
                                                                alt="dankibremaja"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KOMANDAN KOMPI B REMAJA

                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Fajrin Yuda
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Farmasi
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={dankicremaja}
                                                                alt="dankicremaja"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KOMANDAN KOMPI C REMAJA

                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Abigail
                                                                    Tifani
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Informatika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Pokdo Bintang 1 End*/}
                                    </div>
                                )}
                                {/* Pokdo End */}

                                {/* Poktaf Start */}
                                {activeTab === 'staff_corps' && (
                                    <div className="">
                                        {/* Poktaf Bintang 2 Start*/}
                                        <div>
                                            <div className="grid grid-cols-3">
                                                <div className="col-start-2">
                                                    <Image
                                                        src={twostar}
                                                        alt="star4"
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-2 md:h-4"></div>
                                            <div className="grid grid-cols-6 mx-2 gap-x-2 gap-y-6 md:gap-y-28 sm:gap-x-8 md:gap-x-16 md:mx-3 lg:gap-x-32 lg:mx-6 xl:gap-x-48 xl:mx-10 2xl:mx-48">
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={kasi1pam}
                                                                alt="kasi1pam"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KEPALA SEKSI PENGAMANAN
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Chadafa Gulti
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Farmasi
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={kasi2ops}
                                                                alt="kasi2ops"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KEPALA SEKSI OPERASIONAL
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Seftian Candra P
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Teknik Mesin
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={kasi3pers}
                                                                alt="kasi3pers"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KEPALA SEKSI PERSONALIA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Rigo Ginting
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Biologi
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={kasi4log}
                                                                alt="kasi4log"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KEPALA SEKSI LOGISTIK
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Alessandro
                                                                    Issac
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Kedokteran
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={sekretaris}
                                                                alt="sekretaris"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    SEKRETARIS
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Fajrin Yudha P
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Farmasi
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={bendahara}
                                                                alt="bendahara"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    BENDAHARA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Aura Monalisa R
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Fisika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Poktaf Bintang 2 End */}

                                        {/* Margin Pemisah */}
                                        <div className="my-10 md:my-16"></div>
                                        {/* Margin Pemisah */}

                                        {/* Poktaf Bintang 1 Start*/}
                                        <div>
                                            <div className="grid grid-cols-3">
                                                <div className="col-start-2">
                                                    <Image
                                                        src={onestar}
                                                        alt="star5"
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-2 md:h-4"></div>
                                            <div className="grid grid-cols-6 mx-2 gap-x-2 gap-y-6 md:gap-y-28 sm:gap-x-8 md:gap-x-16 md:mx-3 lg:gap-x-32 lg:mx-6 xl:gap-x-48 xl:mx-10 2xl:mx-48">
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={
                                                                    kaurseni
                                                                }
                                                                alt="sekretaris"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    SECRETARY
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK
                                                                    Chiquita
                                                                    Jasmine
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Kedokteran
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={
                                                                    stafopsyonmadya
                                                                }
                                                                alt="stafopsyonmadya"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    TREASURER
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK M.
                                                                    Nuralifudin
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Fisika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={
                                                                    kaurprotokol
                                                                }
                                                                alt="kaurprotokol"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    PROTOCOL
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Arya
                                                                    Muditama
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Matematika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={
                                                                    kaurhumas
                                                                }
                                                                alt="kaurhumas"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    PUBLIC
                                                                    RELATION
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK
                                                                    Rahmatul
                                                                    Fajri
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Informatika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={
                                                                    kaurkesehatan
                                                                }
                                                                alt="kaurkesehatan"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    HEALTH
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK
                                                                    Naufal
                                                                    Dimas
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Kedokteran
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={
                                                                    kauradminlog
                                                                }
                                                                alt="kauradminlog"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    ADMINISTRATION
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK
                                                                    Arini
                                                                    Fitria
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Fisika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={
                                                                    kaurperbekalan
                                                                }
                                                                alt="kaurperbekalan"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    SUPPLIES
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK
                                                                    Novia
                                                                    Selli
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Teknik Mesin
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={
                                                                    kaurangkutan
                                                                }
                                                                alt="kaurangkutan"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    TRANSPORT
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK
                                                                    Decinta
                                                                    jaya
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Biologi
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={
                                                                    kaurtradisi
                                                                }
                                                                alt="kaurtradisi"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    TRADITION
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK
                                                                    Ilham
                                                                    Rizki
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Kedokteran
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={
                                                                    kaurislam
                                                                }
                                                                alt="kaurislam"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    ISLAMIC
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK M.
                                                                    Ircham
                                                                    Atami
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Teknik Mesin
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={
                                                                    kaurprotestan
                                                                }
                                                                alt="kaurprotestan"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    PROTESTANT
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK
                                                                    Michael
                                                                    Ham
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Farmasi
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={
                                                                    kaurkatolik
                                                                }
                                                                alt="kaurkatolik"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    CATHOLIC
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK
                                                                    Adriel
                                                                    Omarpadu
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Informatika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={
                                                                    kaurhindu
                                                                }
                                                                alt="kaurhindu"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    HINDU
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK I
                                                                    Komang
                                                                    Tri
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Informatika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={
                                                                    kaurbuddha
                                                                }
                                                                alt="kaurbuddha"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    BUDDHA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Ricky
                                                                    Chan
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Informatika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Poktaf Bintang 1 End */}
                                    </div>
                                )}
                                {/* Poktaf End */}

                                {/* Lemus Start */}
                                {activeTab === 'deliberative_council' && (
                                    <div className="">
                                        {/* Lemus Bintang 3 Start */}
                                        <div>
                                            <div className="grid grid-cols-3">
                                                <div className="col-start-2">
                                                    <Image
                                                        className=""
                                                        src={threestar}
                                                        alt="star6"
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-2 md:h-4"></div>
                                            <div className="grid grid-cols-4 mx-10 gap-x-8 gap-y-6 md:gap-y-28 sm:gap-x-10 sm:mx-24 md:gap-x-16 md:mx-32 lg:gap-x-32 lg:mx-48 xl:gap-x-48 xl:mx-56 2xl:gap-x-56 2xl:mx-80">
                                                <div className="col-span-2 col-start-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={kalemus}
                                                                alt="kalemus"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KEPALA LEMBAGA MUSYAWARAH KADET MAHASISWA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Alfian Habib Ahmed
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Informatika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Lemus Bintang 3 End */}

                                        {/* Margin Pemisah */}
                                        <div className="my-10 md:my-16"></div>
                                        {/* Margin Pemisah */}

                                        {/* Lemus Bintang 2 Start*/}
                                        <div>
                                            <div className="grid grid-cols-3">
                                                <div className="col-start-2">
                                                    <Image
                                                        src={twostar}
                                                        alt="star7"
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-2 md:h-4"></div>
                                            <div className="grid grid-cols-8 mx-2 gap-x-2 gap-y-6 md:gap-y-28 sm:gap-x-4 md:gap-x-8 md:mx-3 lg:gap-x-14 lg:mx-6 xl:gap-x-20 xl:mx-10 2xl:mx-32">
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={kalemyonmadya}
                                                                alt="kalemyonmadya"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KEPALA LEMBAGA MUSYAWARAH BATALYON MADYA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK M Ilham Alfatrah
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Teknik Elektro
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={kalemyondewasa}
                                                                alt="kalemyondewasa"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KEPALA LEMBAGA MUSYAWARAH BATALYON DEWASA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK M Nuzuludz Dzikra
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Kedokteran
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={kalemyonremaja}
                                                                alt="kalemyonremaja"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KEPALA LEMBAGA MUSYAWRAH BATALYON REMAJA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Abigial Tifani M
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Informatika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={seslemus}
                                                                alt="seslemus"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    SEKRETARIS LEMBAGA MUSYAWARAH KADET MAHASISWA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Dennisa
                                                                    Putri
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Biologi
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Lemus Bintang 2 End */}

                                        {/* Margin Pemisah */}
                                        <div className="my-10 md:my-16"></div>
                                        {/* Margin Pemisah */}

                                        {/* Lemus Bintang 1 Start*/}
                                        <div>
                                            <div className="grid grid-cols-3">
                                                <div className="col-start-2">
                                                    <Image
                                                        src={onestar}
                                                        alt="star8"
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-2 md:h-4"></div>
                                            <div className="grid grid-cols-6 mx-2 gap-x-2 gap-y-6 md:gap-y-28 sm:gap-x-8 md:gap-x-16 md:mx-3 lg:gap-x-32 lg:mx-6 xl:gap-x-48 xl:mx-10 2xl:mx-48">
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={lemkiamadya1}
                                                                alt="lemkiamadya1"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    LEMUS KOMPI A MADYA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK MHD Rifqi
                                                                    Fauzan
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Informatika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={lemkibmadya1}
                                                                alt="lemkibmadya1"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    LEMUS KOMPI B MADYA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK FUAD IDRIS
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Matematika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={lemkicmadya1}
                                                                alt="lemkicmadya1"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    LEMUS KOMPI C MADYA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK RYAN RIFAT
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Teknik Mesin
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={lemkiamadya2}
                                                                alt="lemkiamadya2"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    LEMUS KOMPI A MADYA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK SELLA O.
                                                                    SEFA
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Farmasi
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={lemkibmadya2}
                                                                alt="lemkibmadya2"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    LEMUS KOMPI B MADYA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK ANNISA RISDA
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Matematika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={lemkicmadya2}
                                                                alt="lemkicmadya2"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    LEMUS KOMPI C MADYA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK JOFIM
                                                                    YORDANIEL
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Fisika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={lemkiadewasa1}
                                                                alt="lemkiadewasa1"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    LEMUS KOMPI A DEWASA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Oktavian Arya
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Farmasi
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={lemkibdewasa1}
                                                                alt="lemkibdewasa1"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    LEMUS KOMPI B DEWASA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Wahyu
                                                                    Nurmedica
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Matematika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={lemkicdewasa1}
                                                                alt="lemkicdewasa1"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    LEMUS KOMPI C DEWASA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK M. Ilham
                                                                    Alfatrah
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Teknik Elektrolectrical
                                                                    Engineering
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={lemkiadewasa2}
                                                                alt="lemkiadewasa2"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    LEMUS KOMPI A DEWASA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Alliya Putri
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Biologi
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={lemkibdewasa2}
                                                                alt="lemkibdewasa2"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    LEMUS KOMPI B DEWASA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Mahardika
                                                                    Vira
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Kedokteran
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={lemkicdewasa2}
                                                                alt="lemkicdewasa2"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    LEMUS KOMPI C DEWASA
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Gita Resty
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Fisika
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="col-span-2">
                                    <div className="flex justify-center ">
                                       <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                          <Image
                                             className="rounded-t-2xl"
                                             src={lemkia3_1}
                                             alt="lemkia3_1"

                                          />
                                          <div className="px-1 py-1 md:pb-3">
                                             <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                LEMUS KOMPI of A3 KOMPI
                                             </h5>
                                             <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                CP Jeremia Paskah
                                             </h1>
                                             <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                Informatika
                                             </h1>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-span-2">
                                    <div className="flex justify-center ">
                                       <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                          <Image
                                             className="rounded-t-2xl"
                                             src={lemkib3_1}
                                             alt="lemkib3_1"

                                          />
                                          <div className="px-1 py-1 md:pb-3">
                                             <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                LEMUS KOMPI of B3 KOMPI
                                             </h5>
                                             <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                CP Adriano Christopher
                                             </h1>
                                             <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                Teknik Sipil
                                             </h1>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-span-2">
                                    <div className="flex justify-center ">
                                       <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                          <Image
                                             className="rounded-t-2xl"
                                             src={lemkic3_1}
                                             alt="lemkic3_1"

                                          />
                                          <div className="px-1 py-1 md:pb-3">
                                             <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                LEMUS KOMPI of C3 KOMPI
                                             </h5>
                                             <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                CP Yudea Ray
                                             </h1>
                                             <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                Kedokteran
                                             </h1>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-span-2">
                                    <div className="flex justify-center ">
                                       <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                          <Image
                                             className="rounded-t-2xl"
                                             src={lemkia3_2}
                                             alt="lemkia3_2"

                                          />
                                          <div className="px-1 py-1 md:pb-3">
                                             <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                LEMUS KOMPI of A3 KOMPI
                                             </h5>
                                             <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                CP Fransina Revalina
                                             </h1>
                                             <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                Farmasi
                                             </h1>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-span-2">
                                    <div className="flex justify-center ">
                                       <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                          <Image
                                             className="rounded-t-2xl"
                                             src={lemkib3_2}
                                             alt="lemkib3_2"

                                          />
                                          <div className="px-1 py-1 md:pb-3">
                                             <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                LEMUS KOMPI of B3 KOMPI
                                             </h5>
                                             <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                CP Martha Laura
                                             </h1>
                                             <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                Kedokteran
                                             </h1>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-span-2">
                                    <div className="flex justify-center ">
                                       <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                          <Image
                                             className="rounded-t-2xl"
                                             src={lemkic3_2}
                                             alt="lemkic3_2"

                                          />
                                          <div className="px-1 py-1 md:pb-3">
                                             <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                LEMUS KOMPI of C3 KOMPI
                                             </h5>
                                             <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                CP Ria Aprilianingsih
                                             </h1>
                                             <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                Teknik Elektro
                                             </h1>
                                          </div>
                                       </div>
                                    </div>
                                 </div> */}
                                            </div>
                                        </div>
                                        {/* Lemus Bintang 1 End*/}
                                    </div>
                                )}
                                {/* Lemus End */}

                                {/* Polkad Start*/}
                                {activeTab === 'cadet_police' && (
                                    <div className="">
                                        {/* Polkad Bintang 2 Start*/}
                                        <div>
                                            <div className="grid grid-cols-3">
                                                <div className="col-start-2">
                                                    <Image
                                                        src={twostar}
                                                        alt="star9"
                                                    />
                                                </div>
                                            </div>
                                            <div className="h-2 md:h-4"></div>
                                            <div className="grid grid-cols-4 mx-10 gap-x-8 gap-y-6 md:gap-y-28 sm:gap-x-10 sm:mx-24 md:gap-x-16 md:mx-32 lg:gap-x-32 lg:mx-48 xl:gap-x-48 xl:mx-56 2xl:gap-x-56 2xl:mx-80">
                                                <div className="col-span-2 col-start-2">
                                                    <div className="flex justify-center ">
                                                        <div className="rounded-2xl shadow-xl bg-[#ffffff] max-w-xl ">
                                                            <Image
                                                                className="rounded-t-2xl"
                                                                src={danpolkad}
                                                                alt="danpolkad"
                                                            />
                                                            <div className="px-1 py-1 md:pb-3">
                                                                <h5 className="text-black text-[10px] md:text-sm xl:text-lg font-bold">
                                                                    KOMANDAN POLISI KADET
                                                                </h5>
                                                                <h1 className="text-black font-semibold text-[10px] md:text-sm xl:text-lg">
                                                                    <div className="md:mx-2 mx-1 h-0.5 bg-[#000000]"></div>
                                                                    SMDK Guruh Agpih Sugih
                                                                </h1>
                                                                <h1 className="text-black font-medium text-[10px] md:text-sm xl:text-lg">
                                                                    Teknik Sipil
                                                                </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Polkad Bintang 2 End */}
                                        {/* Margin Pemisah */}
                                        {/* <div className="my-10 md:my-16"></div> */}
                                        {/* Margin Pemisah */}
                                    </div>
                                )}
                                {/* Polkad End*/}
                            </div>
                            {/* Card End */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenkorPage;
