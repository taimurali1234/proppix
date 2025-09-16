import React from "react";

export default function FastWay() {
  return (
    <div className="relative bg-primary overflow-hidden px-4 md:px-12 lg:px-[180px]">
      {/* Background Blur Circles */}
      <div className="absolute md:top-24 lg:top-0 lg:bottom-0 -left-20 w-80 h-80 lg:w-72 lg:h-72 bg-[#C5FF7A] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-0 right-[20px] w-[400px] h-52 md:right-[70px] lg:top-40 lg:right-[200px] md:w-[600px] md:h-72 lg:w-[700px] lg:h-[450px] bg-[#C5FF7A] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>

      <div className="relative pt-8 md:pt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-start">
        {/* Left Side Content */}
        <div className="text-center flex-1 flex flex-col items-center lg:items-start lg:text-left relative z-30 ">
          <h1 className="text-2xl md:text-4xl md:leading-[38px] lg:text-5xl font-bold text-white lg:leading-[55px] mb-4 md:mb-6">
            The fastest way to buy, <br />
            sell, or rent homes
          </h1>
          <p className="text-white  text-xs px-[50px] leading-[20px] md:text-lg mb-4 md:mb-8 text-center lg:text-left md:px-[130px] lg:px-[0px] lg:max-w-[460px]">
            Discover a smarter way to find your perfect home. Our platform connects
            you with thousands of verified listings, from cozy apartments to luxury
            estates, making buying, selling, or renting effortless.
          </p>
          <button className="px-6 py-3 text-xs md:text-base md:w-[200px] bg-white max-w-[200px] text-[#41c8c8] md:font-medium rounded-lg shadow-md hover:bg-gray-100 transition">
            Explore App
          </button>
        </div>

        {/* Right Side - Mobile Mockups */}
       <div className="flex flex-1 justify-center lg:justify-end relative">
  {/* First Image */}
  <img
    src="/assets/fast3.png"
    alt="App preview"
    className="h-[200px] md:h-[300px] lg:h-auto lg:w-[250px] object-cover absolute bottom-0 right-[150px] md:left-[180px] lg:left-[100px] z-20"
  />

  {/* Second Image */}
  <img
    src="/assets/fast1.png"
    alt="App preview"
    className="h-[250px] md:h-[350px] lg:h-auto lg:w-[250px] object-cover relative ml-20 md:ml-32 lg:mr-32 z-10"
  />
</div>

      </div>
    </div>
  );
}
