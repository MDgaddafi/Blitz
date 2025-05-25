import React, { useEffect, useRef, useState } from "react";
import icon1 from "../../assets/icon/icon3.png";
import icon2 from "../../assets/icon/icon2.png";
import icon3 from "../../assets/icon/icon1.png";
import icon4 from "../../assets/icon/icon4.png";
import rightUp from "../../assets/Arrow/rightUp.png";
import rightButtom from "../../assets/Arrow/rightButtom.png";
import leftUp from "../../assets/Arrow/leftUp.png";
import leftBottom from "../../assets/Arrow/leftBottom.png";

const Card = () => {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // ✅ fixed: must be between 0 and 1
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const cardData = [
    { icon: icon1, title: "Backend", desc: "Bouw de logica en functionaliteit van je applicaties." },
    { icon: icon2, title: "DATABEASE", desc: "Leer data op een efficiënte en schaalbare manier te beheren." },
    { icon: icon4, title: "FRONTEND", desc: "Ontwerp interactieve en dynamische gebruikersomgevingen." },
    { icon: icon3, title: "CLOUD", desc: "Implementeer en schaal je oplossingen in een flexibele cloud-omgeving." },
  ];

  return (
    <div
      ref={cardRef}
      className="w-[80%] md:w-[95%] max-sm:mr-4 mx-auto md:grid md:grid-flow-col md:grid-rows-2 md:gap-8 lg:flex md:grid-2 justify-around"
    >
      {cardData.map((item, idx) => (
        <div
          key={idx}
          className="relative w-[240px] h-[310px] max-sm:mb-10 gap-5 p-2 flex flex-col text-center items-center justify-center rounded-xl"
        >
          {/* Arrow overlays */}
          <img
            src={leftUp}
            className={`absolute top-1 left-1 w-[50px] transition-all duration-500 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            alt="leftUp"
          />
          <img
            src={rightUp}
            className={`absolute top-1 right-1 w-[50px] transition-all duration-700 delay-100 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            alt="rightUp"
          />
          <img
            src={leftBottom}
            className={`absolute bottom-1 left-1 w-[50px] transition-all duration-700 delay-200 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            alt="leftBottom"
          />
          <img
            src={rightButtom}
            className={`absolute bottom-1 right-1 w-[50px] transition-all duration-700 delay-300 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            alt="rightBottom"
          />

          {/* Card content */}
          <img src={item.icon} alt={item.title} />
          <h2 className="text-3xl font-grotters text-[#CFFF55]">{item.title}</h2>
          <p className="text-[14px] text-white">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
