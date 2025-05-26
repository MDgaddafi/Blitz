import { useEffect } from "react";
import heroimg from "../../assets/heroImage.png";
import liner from "../../assets/liner.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroTwo = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative h-screen max-sm:h-[70vh] overflow-hidden bg-cover bg-no-repeat bg-center bg-fixed max-sm:bg-scroll" style={{ backgroundImage: `url(${heroimg})` }}>
      {/* Background image with parallax */}

      {/* Overlay content */}
      <div className="absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 w-[80%] lg:w-[50%] md:w-[60%] text-center">
        <h2 data-aos="zoom-in" className="text-4xl md:text-6xl lg:text-4xl xl:text-7xl 2xl:text-[100px] text-white font-bold leading-tight">
          Master the code. <br />Own the logic.
        </h2>
        <img data-aos="zoom-in" className="lg:w-[50%] md:w-[28%] 2xl:w-[30%] max-sm:w-[30%] lg:ml-28 md:ml-16 max-sm:ml-6" src={liner} alt="" />
      </div>
    </div>
  );
};

export default HeroTwo;
