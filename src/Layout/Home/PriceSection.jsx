import whitebg from "../../assets/blackbg.png";
import Line from "../../assets/Line.png";
import Rectangle23 from "../../assets/Rectangle23.png";
import vector2 from "../../assets/vector2.svg";
import Group from "../../assets/Group.svg";
import Vector3 from "../../assets/Vector3.svg";
import Vector4 from "../../assets/Vector4.svg";
import Watch from "../../assets/Watch.svg";
import Buttonbg from "../../assets/buttonbg.png";
import Buttonbg23 from "../../assets/skill/barbg.png";
import Form from "./Form";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PriceSection = () => {
   useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${whitebg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-full min-h-screen z-10 flex flex-col items-center justify-center max-sm:-mt-10 md:-mt-8 lg:pb-5 xl:pb-24 max-sm:pb-0 relative"
    >
      <div className="w-full xl:-mt-8 lg:-mt-1 md:mt-2 hidden sm:block absolute inset-0"><img className="w-full" src={Buttonbg23} alt="" /></div>
      {/* heding text */}
      <div className="text-center">
        <hr className=" bg-transparent border-none h-24" />
        <h2 data-aos="fade-left"
     data-aos-anchor-placement="bottom-bottom" className="text-center font-grotters text-[#4E57EB] text-4xl md:text-7xl lg:text-8xl xl:text-9xl">
          PROGRAMMA
        </h2>
        <div className="">
          <p data-aos="fade-left"
     data-aos-anchor-placement="bottom-bottom" className="mx-auto md:mt-5 md:mb-20 lg:mb-24 max-sm:mt-2 max-sm:mb-16 leading-[24px] text-[18px] max-sm:text-[14px] text-center text-white">
            Kies de duur die het beste bij jouw leerdoelen past. Alle
            programma's worden hybride aangeboden.
          </p>
        </div>
      </div>
      {/* Main Price Section */}
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6 justify-around">
        {/* price section 1 */}
        <div data-aos="flip-right" data-aos-anchor-placement="top-center" className="w-[310px] flex flex-col justify-between h-[479px] p-[30px] border-solid rounded-xl border border-white ">
          {/* price */}
          <div className="">
            <div className="flex gap-2 items-center">
              <img src={Group} alt="" />
              <p className="text-[20px]">1 Week</p>
            </div>
            <h2 className="text-[30px] font-bold">
              € 1.000 <span className="text-[16px] font-light">euro</span>
            </h2>
          </div>
          {/* items list */}
          <div className="space-y-2">
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Toegang tot online leeromgeving
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Praktijkgerichte projecten
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Gecertificeerde docenten
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Hybride lessen (online & fysiek)
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Intensief basisprogramma
                </p>
              </div>
            </div>
          </div>
          {/* bottom section */}
          <div>
            <img src={Line} alt="" />
            <div className="flex gap-2 items-center justify-center">
              <div className="flex gap-[5px]">
                <img src={Vector3} alt="" />
                <img src={Vector4} alt="" />
              </div>
              <p className="text-white font-light text-[14px]">
                Hybride training
              </p>
            </div>
          </div>
        </div>
        {/* price section 2 */}
        <div data-aos="flip-right" data-aos-anchor-placement="top-center" className="w-[310px] flex flex-col justify-between h-[479px] p-[30px] border-solid rounded-xl border border-white ">
          {/* price */}
          <div className="">
            <div className="flex gap-2 items-center justify-between">
              <div className="flex gap-2 items-center">
                <img src={Group} alt="" />
                <p className="text-[20px]">2 Week</p>
              </div>
              <div
                style={{
                  backgroundImage: `url(${Rectangle23})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className=" p-2"
              >
                <h2 className="text-[25px] font-grotters text-black">
                  aanbevolen
                </h2>
              </div>
            </div>
            <h2 className="text-[30px] font-bold">
              € 1.800 <span className="text-[16px] font-light">euro</span>
            </h2>
          </div>
          {/* items list */}
          <div className="space-y-2">
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Toegang tot online leeromgeving
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Praktijkgerichte projecten
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Gecertificeerde docenten
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Hybride lessen (online & fysiek)
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Uitgebreid basisprogramma
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Meer praktijkopdrachten
                </p>
              </div>
            </div>
          </div>
          {/* bottom section */}
          <div>
            <img src={Line} alt="" />
            <div className="flex gap-2 items-center justify-center">
              <div className="flex gap-[5px]">
                <img src={Vector3} alt="" />
                <img src={Vector4} alt="" />
              </div>
              <p className="text-white font-light text-[14px]">
                Hybride training
              </p>
            </div>
          </div>
        </div>
        {/* price section 3 */}
        <div data-aos="flip-right" data-aos-anchor-placement="top-center" className="w-[310px] flex flex-col justify-between h-[479px] p-[30px] border-solid rounded-xl border border-white ">
          {/* price */}
          <div className="">
            <div className="flex gap-2 items-center">
              <img src={Group} alt="" />
              <p className="text-[20px]">4 Week</p>
            </div>
            <h2 className="text-[30px] font-bold">
              € 3.500 <span className="text-[16px] font-light">euro</span>
            </h2>
          </div>
          {/* items list */}
          <div className="space-y-2">
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Toegang tot online leeromgeving
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Praktijkgerichte projecten
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Gecertificeerde docenten
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Hybride lessen (online & fysiek)
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Compleet programma
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Persoonlijke begeleiding
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  1 maand nazorg
                </p>
              </div>
            </div>
          </div>
          {/* bottom section */}
          <div>
            <img src={Line} alt="" />
            <div className="flex gap-2 items-center justify-center">
              <div className="flex gap-[5px]">
                <img src={Vector3} alt="" />
                <img src={Vector4} alt="" />
              </div>
              <p className="text-white font-light text-[14px]">
                Hybride training
              </p>
            </div>
          </div>
        </div>
        {/* price section 4 */}
        <div data-aos="flip-right" data-aos-anchor-placement="top-center" className="w-[310px] flex flex-col justify-between h-[479px] p-[30px] border-solid rounded-xl border border-white ">
          {/* price */}
          <div className="">
            <div className="flex gap-2 items-center">
              <img src={Watch} alt="" />
              <p className="text-[20px]">4 Week</p>
            </div>
            <h2 className="text-[30px] font-bold">
              € 3.500 <span className="text-[16px] font-light">euro</span>
            </h2>
          </div>
          {/* items list */}
          <div className="space-y-2">
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Toegang tot online leeromgeving
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Praktijkgerichte projecten
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Gecertificeerde docenten
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Hybride lessen (online & fysiek)
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Compleet programma
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  Persoonlijke begeleiding
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={vector2} alt="" />
                <p className="text-white font-light text-[14px]">
                  1 maand nazorg
                </p>
              </div>
            </div>
          </div>
          {/* bottom section */}
          <div>
            <img src={Line} alt="" />
            <div className="flex gap-2 items-center justify-center">
              <div className="flex gap-[5px]">
                <img src={Vector3} alt="" />
                <img src={Vector4} alt="" />
              </div>
              <p className="text-white font-light text-[14px]">
                Hybride training
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* button section */}
      <div data-aos="zoom-in-up" id="contactFormMe" className="my-16">
        <button style={{
        backgroundImage: `url(${Buttonbg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }} className="text-[14px] text-center text-black w-[230px] h-[64px]">Alle prijzen zijn exclusief BTW</button>
      </div>
      {/* Form Section */}
      <div className="xl:w-[80%] max-sm:w-[100%] mx-auto">
        <Form></Form>
      </div>
    </div>
  );
};

export default PriceSection;
