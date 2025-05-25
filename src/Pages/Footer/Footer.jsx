import logo from "../../assets/blacklogo.png";
import line from "../../assets/LINE-53.png";
import logoicon from "../../assets/logoicon.png";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <footer className="py-6 bg-[#CFFF55] text-black">
        <div className="container px-6 mx-auto space-y-6">
          <div className="grid grid-cols-12">
            <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex justify-center space-x-3 md:justify-start"
              >
                <div data-aos="fade-up" className="flex items-center justify-center">
                  <img src={logo} alt="" />
                </div>
                
              </a>
              <p data-aos="fade-up" className="w-1/2 max-sm:w-full mt-5">Onze missie is om professionals op te leiden in moderne technologieën die de basis vormen van innovatieve IT- oplossingen.</p>
            </div>
            <div className="col-span-6 text-center md:text-left grid justify-around max-sm:justify-start md:col-span-3">
              <p data-aos="fade-up" className="pb-1 text-2xl font-grotters font-medium">Links</p>
              <ul className="space-y-5 mt-5 max-sm:space-y-2 max-sm:mt-0">
                <li data-aos="fade-up">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-white"
                  >
                    Home
                  </a>
                </li>
                <li data-aos="fade-up">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-white"
                  >
                    Thema's
                  </a>
                </li>
                <li data-aos="fade-up">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-white"
                  >
                    Techstack
                  </a>
                </li>
                <li data-aos="fade-up">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-6 text-center grid justify-around max-sm:justify-start md:text-left md:col-span-3 ">
              <p data-aos="fade-up" className="pb-1 text-2xl font-grotters  font-medium">Category</p>
              <ul className="space-y-5 mt-5 max-sm:space-y-2 max-sm:mt-0">
                <li>
                  <a data-aos="fade-up"
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-white"
                  >
                    Email: info@learninablitz.nl
                  </a>
                </li>
                <li>
                  <a data-aos="fade-up"
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-white"
                  >
                    Telefoon: +31 (0)6 12345678
                  </a>
                </li>
                <li>
                  <a data-aos="fade-up"
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-white"
                  >
                    Locatie: Eindhoven, Nederland
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" grid mx-auto w-full items-center"><img data-aos="fade-up" className="w-[100%]" src={line} alt="" /></div>
          <div className=" text-center">
             <p data-aos="fade-up" className="text-center text-[14px]">© 2025 Blitz. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
      <div className="bg-[#CFFF55]  grid h-[50vh] md:h-[30vh] max-sm:h-[30vh] mx-auto items-center justify-center"><img data-aos="fade-up" src={logoicon} alt="" /></div>
    </div>
  );
};

export default Footer;
