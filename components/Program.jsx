import icon1 from '/public/images/icon/salute.png'
import icon2 from '/public/images/icon/hat.png'
import icon3 from '/public/images/icon/run.png'
import icon4 from '/public/images/icon/helmet.png'

import Image from "next/image";


const Program = () => {
    return (
        <div className="  min-h-screen flex justify-center items-center bg-fixed bg-cover bg-center bg-no-repeat " id='bg-section' style={{
            backgroundImage: 'url("images/random/program2.png")',
        }}>
            <div className="w-full" style={{
                backgroundColor: "rgba(0,0,0,0.1)   ",
            }}>
                <div className="h-screen"></div>
                <h1 className="sm:mb-2 md:mb-3 lg:mb-4 mb-1 mx-2 text-center text-3xl font-bold text-white md:text-4xl lg:text-6xl xl:text-8xl">
                    LIFE IN THE CADET CORPS
                </h1>
                <p className=" flex justify-center items-center mx-4 text-center text-white text-xs md:text-sm lg:text-base xl:text-lg">The Cadet Corps is more than an organization. It is a life path. The day one becomes a Cadet brings purpose to every day that follows</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 mx-10 pt-10">
                    <div>
                        <Image className=" w-1/2 flex justify-center items-center content-center mx-auto my-auto" src={icon1} alt="icon1" />
                        <h1 className="text-center text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2">LEADERSHIP</h1>
                    </div>
                    <div>
                        <Image className=" w-1/2 flex justify-center items-center content-center mx-auto my-auto" src={icon2} alt="icon2" />
                        <h1 className="text-center text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2 ">ACADEMIC</h1>
                    </div>
                    <div>
                        <Image className=" w-1/2 flex justify-center items-center content-center mx-auto my-auto" src={icon3} alt="icon3" />
                        <h1 className="text-center text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2">PHYSICAL</h1>
                    </div>
                    <div>
                        <Image className=" w-1/2 flex justify-center items-center content-center mx-auto my-auto" src={icon4} alt="icon4" />
                        <h1 className="text-center text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2">MILITARY</h1>
                    </div>
                </div>
                <div className="flex justify-center mt-6 lg:mt-20 xl:mt-24 md:mt-12">
                    <a href="https://penerimaan.idu.ac.id/" rel="noopener noreferrer" target='_blank'><button type="button" className=" xl:h-24 xl:w-96 lg:h-24 lg:w-80 md:h-20 md:w-72 sm:h-16 sm:w-48 h-14 w-44   border text-white border-white  hover:text-black hover:border-black hover:bg-white  rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 "><h1 className=" font-extrabold xl:text-2xl 2xl:text-3xl lg:text-xl md:text-lg sm:text-base text-sm">BECOME A CADET</h1></button></a>
                </div>
                <div className="h-screen"></div>
            </div>
        </div >
    );
};

export default Program;