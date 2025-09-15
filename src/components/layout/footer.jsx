import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#2f2f2f] text-white py-10 px-2 md:px-12 lg:px-20">
      {/* Top Section */}
      <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-10 items-start justify-start mb-10  md:text-left">
        {/* Logo */}
        <div className="flex justify-start col-span-2 md:col-auto">
          <img
            src="/assets/footerlogo.png" // apna logo path yahan dalna
            alt="Logo"
            className="w-[100px] h-[100px] md:w-[100px] md:h-[100px] object-cover"
          />
        </div>

        {/* Column 1 - Acesso fácil */}
        <div className="flex flex-col space-y-3">
          <h3 className="font-semibold text-lg mb-2">Acesso fácil</h3>
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            About us
          </a>
          <a href="#" className="hover:text-gray-300">
            FAQs
          </a>
          <a href="#" className="hover:text-gray-300">
            Privacy policy
          </a>
        </div>

        {/* Column 2 - Fale conosco */}
        <div className="flex flex-col space-y-4 col-span-2 mt-8 md:mt-0 pl-4 md:pl-[0px]  md:col-auto">
          <h3 className="font-semibold text-lg mb-2">Fale conosco</h3>
          <div className="flex flex-row items-center md:items-start space-x-2">
            <FaWhatsapp className="hidden md:block text-xl mb-2 sm:mb-0" />
            <p className="text-xs md:text-sm leading-relaxed max-w-[120px] md:max-w-full">
              WhatsApp: +55 (78) 3199-1686 <br />
              ou <span className="font-semibold cursor-pointer">clique aqui</span>{" "}
              para ser direcionado
            </p>
          </div>
          <div className="flex flex-row items-center md:items-start space-x-2">
            <MdEmail className="hidden md:block text-xl mb-2 sm:mb-0" />
            <a
              href="mailto:proppix@gmail.com"
              className="font-semibold hover:underline"
            >
              proppix@gmail.com
            </a>
          </div>
        </div>

        {/* Column 3 - Touch With Us */}
        <div className="flex flex-col items-start md:items-start space-y-4 md:pl-8 mt-8  md:mt-4 lg:mt-0">
          <h3 className="font-semibold text-lg">Touch With Us</h3>
          <div className="flex space-x-4 justify-start">
            <a href="#" className="p-2 bg-white text-black rounded-full">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-white text-black rounded-full">
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
