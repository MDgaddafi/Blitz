import whitebg from "../../assets/whitebg.png";
import java from "../../assets/skill/java.png";
import react from "../../assets/skill/react.png";
import mysql from "../../assets/skill/mysql.png";
import post from "../../assets/skill/post.png";
import azure from "../../assets/skill/azure.png";
import cardbg from "../../assets/skill/cardbg.png";
import newcard from "../../assets/skill/newcard.png";
import netbg from "../../assets/skillbg/net.png";
import net from "../../assets/skill/net.png";
import python from "../../assets/skill/python.png";
import typescript from "../../assets/skill/typescripe.png";
import arrow from "../../assets/skill/arrow.png";
import greenbg from "../../assets/skill/greenbg.png";
import CardTwo from "./CardTwo";
import btnBg6 from "../../assets/arrow.png";
import btnBg7 from "../../assets/btnbggreen.png";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillSection = () => {
   useEffect(() => {
    AOS.init();
  }, []);
  const cardStyle = "flex flex-col xl:w-[315px] xl:h-[315px] lg:w-[315px] lg:h-[315px] md:w-[300px] md:h-[315px] max-sm:w-[300px] max-sm:h-[300px] items-center justify-center gap-y-2 transition-transform duration-300 hover:rotate-6 hover:scale-105";

  return (
    <div
      style={{
        backgroundImage: `url(${whitebg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-full min-h-screen -mt-36 z-0 flex flex-col items-center justify-center"
    >
      <div id="techstack" className="mt-24">
        <hr className="w-24 h-24" />
        <h2 data-aos="fade-left" className="text-center font-grotters text-[#4E57EB] lg:mt-36 md:mt-20 mt-24 text-4xl md:text-7xl lg:text-8xl xl:text-9xl">
          ONZE TECHSTACK
        </h2>
        <div>
          <p data-aos="fade-left" className="mx-auto md:mt-5 md:mb-20 lg:mb-24 max-sm:mt-2 max-sm:mb-16 leading-[24px] text-[18px] max-sm:text-[14px] text-center text-black">
            De technologieën waar we mee werken zijn actueel en veelgevraagd in
            de markt.
          </p>
        </div>
      </div>

      {/* First Row */}
      <div className=" cursor-pointer xl:w-[70%] -mt-16 lg:w-[70%] md:w-[80%] max-sm:w-[80%] md:gap-x-5 mx-auto xl:flex md:grid md:grid-cols-2  justify-around">
        <div style={{ backgroundImage: `url(${newcard})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className={cardStyle}>
          <img src={java} alt="Java" />
          <h2 className="text-3xl font-grotters text-[#4E57EB]">Java</h2>
        </div>
        <div style={{ backgroundImage: `url(${netbg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className={cardStyle}>
          <img className="mt-6" src={net} alt="Net" />
          <h2 className="text-3xl font-grotters text-[#4E57EB]">Net</h2>
        </div>
        <div style={{ backgroundImage: `url(${cardbg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className={cardStyle}>
          <img src={python} alt="Python" />
          <h2 className="text-3xl font-grotters text-[#4E57EB]">Python</h2>
        </div>
        <div style={{ backgroundImage: `url(${cardbg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className={cardStyle}>
          <img src={typescript} alt="Typescript" />
          <h2 className="text-3xl font-grotters text-[#4E57EB]">Typescript</h2>
        </div>
      </div>

      {/* Second Row */}
      <div className="cursor-pointer xl:w-[70%] lg:w-[70%] md:w-[80%] max-sm:w-[80%] md:gap-x-5 mx-auto xl:flex md:grid md:grid-cols-2 -mt-5 justify-around">
        <div style={{ backgroundImage: `url(${netbg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className={cardStyle}>
          <img className="mt-10" src={react} alt="React" />
          <h2 className="text-3xl font-grotters text-[#4E57EB]">React</h2>
        </div>
        <div style={{ backgroundImage: `url(${netbg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className={cardStyle}>
          <img className="mt-10" src={mysql} alt="MySQL" />
          <h2 className="text-3xl font-grotters text-[#4E57EB]">Mysql</h2>
        </div>
        <div style={{ backgroundImage: `url(${newcard})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className={cardStyle}>
          <img src={post} alt="PostgreSQL" />
          <h2 className="text-3xl font-grotters text-[#4E57EB]">Postgresql</h2>
        </div>
        <div style={{ backgroundImage: `url(${cardbg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} className={cardStyle}>
          <img src={azure} alt="Azure" />
          <h2 className="text-3xl font-grotters text-[#4E57EB]">Azure</h2>
        </div>
      </div>

      {/* Extra Thema's Section */}
      <div  className="w-full px-4 md:px-10 py-10 text-center relative">
        <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="text-black text-[16px] md:text-[18px] uppercase mb-4 z-10 relative">EXTRA THEMA'S</p>
        <h2 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="text-black text-[40px] sm:text-[60px] md:text-[80px] font-bold leading-[1.2] mb-6 z-10 relative">
          SOLVE, IMPROVE,<br />
          <span className="relative inline-block">
            Move <span className="text-black relative z-20">FORWARD</span>
            <div className="absolute top-1/2 left-1/2 md:-right-[200px] transform -translate-x-1/4 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[400px] z-0">
              <img src={greenbg} alt="" className="w-full" />
            </div>
          </span>
        </h2>
        <div className="relative z-10">
          <img data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" src={arrow} alt="arrow" className="absolute md:right-0 xl:right-[550px] max-sm:right-0 bottom-2 w-[100px] md:w-auto" />
        </div>
        <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="text-black text-[16px] md:text-xl -mt-3 md:-mt-5 max-w-[90%] md:max-w-[600px] mx-auto relative z-10">
          Aanvullende vaardigheden die je laten uitblinken als moderne ontwikkelaar.
        </p>
      </div>

      <div className="w-[80%] mx-auto mt-12 max-sm:mr-0">
        <CardTwo />
      </div>

      {/* Contact Section */}
      <div className="text-black w-[90%] mb-16 max-sm:-mt-9 mt-24 mx-auto">
        <h2 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="lg:text-[30px] max-sm:text-[20px] text-center">
          Mis je een techniek? Neem contact met ons op
        </h2>
        <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="lg:text-[20px] max-sm:text-[14px] text-center">
          wij integreren ook andere tools en technologieën in onze projecten!
        </p>
        <div className="text-center lg:my-16 max-sm:my-6">
          <button
            style={{
              backgroundImage: `url(${btnBg7})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="text-black transform -skew-y-6 font-grotters text-2xl max-sm:text-[16px] max-sm:py-0 mr-6 px-6 py-2 inline-block"
          >
            <span className="transform flex ml-6">
              neem contact op
              <span>
                <img className="mt-1" src={btnBg6} alt="" />
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
