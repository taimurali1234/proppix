import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Header = () => {
  return (
    <header className="bg-[#41C8CB] w-full h-[100px] relative z-10">
      <div className="flex items-center justify-between py-2 pr-4 md:pr-12 px-2 md:px-12 lg:px-[80px]">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 animate-slide-left">
          <img
            src="/assets/headerlogo.png"
            alt="Logo"
            className="w-[80px] h-[80px] md:h-[100px] md:w-[100px] object-cover"
          />
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex gap-12 text-white animate-fade-up delay-[600ms] relative z-20">
          <a href="#home" className="text-[16px] font-medium hover:underline">
            Home
          </a>
          <a href="#about" className="text-[16px] font-medium hover:underline">
            About us
          </a>
          <a href="#contact" className="text-[16px] font-medium hover:underline">
            Contact us
          </a>
          <a href="#faq" className="text-[16px] font-medium hover:underline">
            Faqs
          </a>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-3 animate-slide-right">
          <button className="bg-white text-primary px-6 py-2 md:px-6 md:py-2 rounded-lg text-sm md:text-lg font-semibold shadow hover:bg-gray-100 transition">
            Login to us
          </button>

          <div className="flex items-center gap-[2px] bg-[#DEE5FF] rounded-full px-4 py-1 cursor-pointer hover:bg-white/70 transition">
            <img
              src="/assets/usflag.png"
              alt="USA"
              className="h-4 w-6 object-cover"
            />
            <MdOutlineArrowDropDown className="text-3xl text-primary" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
