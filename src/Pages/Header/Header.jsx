import React, { useState } from "react";
import logo from "../../assets/Blitz_Logo.png";
import bgImage from "../../assets/Header.png";
import activeSVG from "../../assets/Underline.svg";
import btnBg from "../../assets/Vector.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    { name: "home", id: "home" },
    { name: "thema", id: "thema" },
    { name: "techstack", id: "techstack" },
    { name: "contact", id: "contactFormMe" }, // Updated ID
  ];

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="bg-cover h-36 max-sm:h-24 bg-center fixed top-0 right-0 left-0 z-50"
    >
      <div className="navbar w-[85%] max-sm:pb-10 max-sm:w-[100%] mx-auto h-24">
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setActiveLink(link.id)}
                    className="capitalize"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a href="#">
            <img className="cursor-pointer " src={logo} alt="Logo" />
          </a>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-10 text-white">
            {links.map((link) => (
              <li
                key={link.id}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setActiveLink(link.id)}
              >
                <a href={`#${link.id}`} className="capitalize">
                  {link.name}
                </a>
                {activeLink === link.id && (
                  <img src={activeSVG} alt="active" className="w-16 mt-1" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          <button
            style={{
              backgroundImage: `url(${btnBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="text-black font-grotters text-3xl max-sm:text-xl px-6 max-sm:py-1 py-2 inline-block transition-transform duration-300 hover:rotate-3"
          >
            <span className="inline-block transform -skew-y-6">
              Schrijf je in
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
