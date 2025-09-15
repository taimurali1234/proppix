import { useState } from "react";

export default function RentApartment() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="w-full lg:py-16 px-4 md:px-12 lg:px-[130px]">
      {/* Steps */}
      <div className="flex flex-col lg:flex-row lg:items-center  gap-14 mb-10 lg:pl-[60px]">
        <p className=" lg:hidden  text-3xl lg:text-2xl font-normal text-bodyText text-center lg:max-w-[150px]">
          Join as a Buyer Steps
        </p>

        <div className="flex flex-wrap  gap-6 lg:flex-nowrap lg:gap-8">
          {/* Steps with icons */}
          <div className="flex items-center gap-6 ">
            <div className="bg-primary p-2 md:p-4 lg:p-6 rounded-lg">
              <img src="/assets/Truck.png" alt="" className="w-10 h-10 object-cover" />
            </div>
            <span>List Property</span>
          </div>
          <div className="flex items-center gap-6 ">
            <div className="bg-primary p-2 md:p-4 lg:p-6 rounded-lg">
              <img src="/assets/Two-User.png" alt="" className="w-10 h-10 object-cover" />
            </div>
            <span>Attract Buyers</span>
          </div>
          <div className="flex items-center gap-6 ">
            <div className="bg-primary p-2 md:p-4 lg:p-6 rounded-lg">
              <img src="/assets/bank 2.png" alt="" className="w-10 h-10 object-cover" />
            </div>
            <span>Review Offers</span>
          </div>
          <div className="flex items-center gap-6 ">
            <div className="bg-primary p-2 md:p-4 lg:p-6 rounded-lg">
              <img src="/assets/closedeal.png" alt="" className="w-10 h-10 object-cover" />
            </div>
            <span>Finalize Sale</span>
          </div>
        </div>

        <p className=" hidden lg:block text-2xl font-normal text-bodyText max-w-[150px]">
          Join as a Buyer Steps
        </p>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-10 justify-center lg:items-center mt-16 rounded-2xl p-[60px] ">
        {/* Image */}
        <div>
          <img
            src="/assets/rentimage.png"
            alt="Rent Apartment"
            className="rounded-xl shadow-lg object-cover w-[400px] h-[300px] md:w-[500px] md:h-[400px]"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col  gap-[20px] lg:gap-[30px] text-bodyText max-w-[300px]  md:max-w-[400px] lg:max-w-[500px]">
          <p className="text-small md:text-base font-medium text-neutral">Com a paypay você</p>
          <h2 className="text-xl md:text-2xl lg:text-[40px] lg:leading-[42px] font-semibold">
            Find Your Perfect Home to Rent
          </h2>
          <p className="text-base md:text-lg lg:text-[22px] font-normal lg:leading-[25px] ">
            Browse thousands of verified rental properties that fit your lifestyle and budget. From
            cozy apartments to spacious houses, we make renting simple, fast, and stress-free.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setShowPopup(true)}
              className="bg-primary w-[200px] max-w-[200px] text-white px-6 py-2 rounded-lg hover:bg-teal-600"
            >
              Book Now
            </button>
            <button className="bg-transparent border-[2px] w-[200px] max-w-[200px] border-primary text-bodyText font-semibold px-6 py-2 rounded-lg hover:bg-gray-50">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-primary backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-sm text-center">
            <p className="text-white text-lg font-semibold">
              Download the app and buy the property
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 bg-white text-bodyText rounded-lg hover:bg-gray-50"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
