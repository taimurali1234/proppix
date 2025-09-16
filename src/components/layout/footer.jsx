import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#2f2f2f] text-white py-10 px-2 md:px-12 lg:px-20">
      {/* Top Section */}
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-10 items-start justify-start mb-10  md:text-left">
        {/* Logo */}
        <div className="flex justify-start items-start">
          <img
            src="/assets/footerlogo.png" 
            alt="Logo"
            className="w-[80px] h-[80px]  md:w-[100px] md:h-[100px] object-cover"
          />
        </div>

        <div className="flex flex-col space-y-3 ">
          <h3 className="font-semibold text-base md:text-lg mb-2">Acesso fácil</h3>
          <a href="#" className="text-sm md:text-base text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#" className="text-sm md:text-base text-gray-300 hover:text-white">
            About us
          </a>
          <a href="#" className="text-sm md:text-base text-gray-300 hover:text-white">
            FAQs
          </a>
          <a href="#" className="text-sm md:text-base text-gray-300 hover:text-white">
            Privacy policy
          </a>
        </div>

        <div className="flex flex-col space-y-4  md:mt-0  md:pl-[0px] ">
          <h3 className="font-semibold text-base md:text-lg mb-2">Fale conosco</h3>
          <div className="flex flex-row items-center md:items-start md:space-x-2">
            <FaWhatsapp className="hidden md:block text-xl mb-2 sm:mb-0 " />
            <p className="text-xs md:text-sm leading-relaxed text-gray-300  md:max-w-full">
              WhatsApp: +55 (78) 3199-1686 <br />
              ou <span className="font-bold cursor-pointer">clique aqui</span>{" "}
              para ser direcionado
            </p>
          </div>
          <div className="flex flex-row items-center md:items-start md:space-x-2 ">
            <MdEmail className="hidden md:block text-xl mb-2 sm:mb-0" />
            <a
              href="mailto:proppix@gmail.com"
              className="font-semibold text-xs md:text-sm hover:underline text-gray-300 hover:text-white"
            >
              proppix@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-start space-y-4 pl-4 md:pl-4 mt-8  md:mt-4 lg:mt-0">
          <h3 className="font-semibold text-base md:text-lg">Touch With Us</h3>
          <div className="flex space-x-4 justify-start">
            <a href="#" className="p-2 bg-gray-300 hover:bg-white text-black rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-300 hover:bg-white text-black rounded-full">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" pt-6 text-center text-sm text-gray-300">
        © 2025 <span className="font-semibold">Proppix</span>. All rights
        reserved. Your trusted partner in real estate.
      </div>
    </footer>
  );
}
