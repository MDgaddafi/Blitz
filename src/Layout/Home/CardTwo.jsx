import React, { useEffect, useRef, useState } from "react";
import icon1 from "../../assets/icon/group.png";
import icon2 from "../../assets/icon/group-1.png";
import icon3 from "../../assets/icon/group-3.png";
import icon4 from "../../assets/icon/group-2.png";
import rightUp from "../../assets/Arrow/rightUp.png";
import rightBottom from "../../assets/Arrow/rightButtom.png";
import leftUp from "../../assets/Arrow/leftUp.png";
import leftBottom from "../../assets/Arrow/leftBottom.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardTwo = () => {
   useEffect(() => {
    AOS.init();
  }, []);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // ✅ fixed: must be between 0 and 1
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cardData = [
    {
      icon: icon1,
      title: "Security",
      desc: "Autorisatie en authenticatie om veilige applicaties te garanderen.",
    },
    {
      icon: icon2,
      title: "DevOps & CICD",
      desc: "Automatisering van build-, test- en deploymentprocessen.",
    },
    {
      icon: icon4,
      title: "Testing & Kwaliteitsborging",
      desc: "Unit testing, integratietesten en test-driven development.",
    },
    {
      icon: icon3,
      title: "Software Architectuur",
      desc: "Keuzes in architectuur en veelgebruikte design patterns.",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="w-[80%] md:w-[95%] max-sm:w-[95%] max-sm:mr-24 overflow-hidden mx-auto md:grid md:grid-flow-col md:grid-rows-2 md:gap-8 lg:flex md:grid-2 justify-around"
    >
      {cardData.map((item, idx) => (
        <div
          key={idx}
          className="relative w-[240px] max-sm:mb-10 h-[310px] gap-2 p-2 flex flex-col text-center items-center justify-center rounded-xl"
        >
          {/* Arrow overlays with animation */}
          <img
            src={leftUp}
            alt="leftUp"
            className={`absolute top-1 left-1 w-[40px] md:w-[50px] transition-all duration-500 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          />
          <img
            src={rightUp}
            alt="rightUp"
            className={`absolute top-1 right-1 w-[40px] md:w-[50px] transition-all duration-500 delay-150 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          />
          <img
            src={leftBottom}
            alt="leftBottom"
            className={`absolute bottom-1 left-1 w-[40px] md:w-[50px] transition-all duration-500 delay-300 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          />
          <img
            src={rightBottom}
            alt="rightBottom"
            className={`absolute bottom-1 right-1 w-[40px] md:w-[50px] transition-all duration-500 delay-500 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          />

          {/* Card Content */}
          <img data-aos="zoom-in" src={item.icon} alt={item.title} className="w-[60px] md:w-[70px]" />
          <h2 data-aos="zoom-in" className="text-2xl font-grotters text-[#4E57EB]">{item.title}</h2>
          <p data-aos="zoom-in" className="text-[14px] text-black px-2">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default CardTwo;
