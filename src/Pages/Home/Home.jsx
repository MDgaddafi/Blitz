import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "../../assets/image.png";
import Image2 from "../../assets/background.png";
import Image3 from "../../assets/Title.png";
import btnBg5 from "../../assets/vector.svg";
import btnBg6 from "../../assets/arrow.png";
import btnBg7 from "../../assets/btn2.png";
import Card from "../../Layout/Home/Card";
import HeroTwo from "../../Layout/Home/HeroTwo";
import SkillSection from "../../Layout/Home/SkillSection";
import PriceSection from "../../Layout/Home/PriceSection";
import LogoSlider from "../../Layout/Home/LogoSlider";





const Home = () => {
   useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="home" className="">
      <div  className="z-1">
        <div
          style={{ backgroundImage: `url(${Image})` }}
          className="bg-cover lg:h-[110vh] md:h-[50vh] bg-center lg:mt-31 max-sm:h-[35vh] max-sm:mt-16 mt-20 md:mt-24 z-0 relative"
        ></div>
      </div>
      <div
        style={{ backgroundImage: `url(${Image2})` }}
        className="bg-no-repeat bg-cover"
      >
        <div className="bg-cover relative mx-auto bg-center">
          <div className="py-36 md:py-24 max-sm:py-16 mx-auto items-center justify-center flex">
            <div className="max-sm:w-[90%] md:w-[90%] mx-auto">
              <h2 data-aos="fade-up" className="text-center mt-16 mb-8 max-sm:mb-4 text-[#CFFF55] font-grotters text-2xl md:text-3xl -skew-y-6 max-sm:-skew-y-2">
                Intensive tech bootcamp
              </h2>

              <img data-aos="fade-up"
                className="mx-auto w-[80%] max-sm:w-[95%]"
                src={Image3}
                alt=""
              />

              <div className="lg:w-[850px] md:w-[90%] max-sm:w-[100%] mx-auto">
                <p data-aos="fade-up" className="mx-auto h-[200px] md:mt-10 leading-[24px] inline-block text-[18px] max-sm:text-[14px] text-center my-6">
                  {" "}
                  Wij geloven dat de evolutie van programmeren niet het einde
                  betekent, maar het begin van een nieuwe creatieve revolutie.
                  Terwijl AI routinetaken automatiseert, transformeert het de
                  rol van ontwikkelaars in strategische denkers en digitale
                  co-ontwikkelaars die de toekomst vormgeven. Onze visie is
                  helder: de technische fundamenten backend, database, frontend
                  en cloud vormen de basis, aangevuld met een krachtige
                  techstack (Java, .NET, Python, React) en extra skills zoals
                  security, DevOps, testing en debugging. Hiermee bereiden wij
                  jou voor op een toekomst waarin jij niet alleen code schrijft,
                  maar innovatieve oplossingen ontwerpt die de grenzen van de IT
                  verleggen.
                </p>
              </div>

              <div className="flex items-center max-sm:mt-5 justify-center">
                <button data-aos="zoom-in-up"
                  style={{
                    backgroundImage: `url(${btnBg7})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="text-black font-grotters text-2xl max-sm:text-[16px] max-sm:py-0 mr-6 px-6 py-2 inline-block"
                >
                  <span className="transform flex ml-2">
                    Meer info
                    <span>
                      <img className="mt-1" src={btnBg6} alt="" />
                    </span>
                  </span>
                </button>

                <button data-aos="zoom-in-up" id="thema"
                  style={{
                    backgroundImage: `url(${btnBg5})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="text-black font-grotters text-2xl max-sm:text-[16px] max-sm:py-0 px-6 py-2 inline-block"
                >
                  <span className="inline-block transform -skew-y-3">
                    Schrijf je in
                  </span>
                </button>
              </div>

              {/* Stock Text */}
              <div>
                <h2 data-aos="fade-left" className="text-center font-grotters text-[#4E57EB] lg:mt-36 md:mt-20 mt-24 text-4xl md:text-7xl lg:text-8xl xl:text-9xl">
                  ONZE 4 HOOFDTHEMA'S
                </h2>
                <div className="w-[500px] max-sm:w-[100%] mx-auto">
                  <p data-aos="fade-left" className="mx-auto md:mt-5 md:mb-20 lg:mb-24 max-sm:mt-2 max-sm:mb-16 leading-[24px] text-[18px] max-sm:text-[14px] text-center ">
                    De fundamentele bouwstenen van jouw programma, ontworpen om
                    je een complete skillset te geven.
                  </p>
                </div>
              </div>
              <div className="xl:mb-24">
                <Card></Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <HeroTwo></HeroTwo>
      </div>
      <div>
        <SkillSection></SkillSection>
      </div>
      <div>
        <PriceSection></PriceSection>
      </div>
      <div>
        <LogoSlider></LogoSlider>
      </div>
    </div>
  );
};

export default Home;
