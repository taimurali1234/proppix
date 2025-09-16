import React, { useEffect, useState } from 'react'
import Header from '../../layout/header';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1000); // 1s delay
    return () => clearTimeout(timer);
  }, []);
 return (
    <section className="bg-primary min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div id='home' className="flex  flex-col lg:flex-row items-center justify-center py-10 gap-8 px-4 md:px-12 lg:gap-48 lg:px-[80px] lg:py-16 relative">
        
        {/* Left Content */}
        <div className=" flex flex-1 flex-col md:gap-4 lg:gap-16 text-center lg:text-left lg:pl-[50px] ">
          <div className='flex flex-col gap-2'>
           <h1 className="text-secondary text-3xl md:text-4xl leading-[38px] lg:text-5xl md:leading-[52px]  lg:text-[60px] lg:leading-[72px]  font-semibold">
  Find your dream <br /> At Proppix
</h1>
          <p className="text-white text-lg px-5 md:px-[50px] lg:px-[0px] md:text-3xl md:leading-[40px] mt-4 max-w-lg">
            The fastest way to buy, sell, or rent homes
          </p>
          </div>
          

          {/* App Buttons */}
          <div className="flex justify-center  gap-4 md:gap-0 items-center flex-row lg:justify-start md:space-x-4 mt-6">
            <img
              src="/assets/google.png"
              alt="Google Play"
              className={`w-[120px] h-14 md:w-auto md:h-auto object-fit px-2 py-2 md:px-6 md:py-3 bg-black text-white rounded-xl shadow-lg transform transition-transform duration-700 ${
          animate ? "flip-animation" : ""
        }`}
            />
            <img
              src="/assets/apple.png"
              alt="App Store"
              className={`w-[120px] h-14 md:w-auto  md:h-auto object-fit px-2 py-2 md:px-6 md:py-3 bg-black text-white rounded-xl shadow-lg transform transition-transform duration-700 ${
          animate ? "flip-animation" : ""
        }`}
            />
          </div>
        </div>

        {/* Right Side Images */}
        <div className="relative flex-1 mt-10 lg:mt-0 flex items-center justify-center">
          {/* Decorative Circles */}
          {/* <div className="absolute w-64 h-64 bg-white/20 rounded-full -top-10 -right-10 blur-2xl"></div>
          <div className="absolute w-48 h-48 bg-white/10 rounded-full top-20 -left-10"></div> */}

          {/* Phones */}
          <div className="relative flex ">
            <img
              src="/assets/heroimage2.png"
              alt="Phone 1"
              className="h-[300px] md:h-[500px] z-20 object-cover"
            />
           
          </div>
        </div>
      </div>
      <div className=''>
        <section className="w-full bg-bodyText text-white py-10 px-2 md:px-12  lg:px-[80px]">
      <div className=" text-center lg:text-left px-10  md:px-20  lg:px-0 lg:pl-[50px]">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-primary mb-4">
          Seamless Property Solutions for Buyers & Sellers
        </h2>

        {/* Description */}
        <p className="text-sm md:text-base lg:text-2xl font-normal text-gray-200 leading-relaxed  max-w-5xl">
          Our platform provides a professional, secure, and efficient way to buy
          or sell real estate. Connect with verified clients, access.
        </p>
      </div>
    </section>
      </div>
      
    </section>
  );
}

export default Hero
