
export default function SellApartment() {
  return (
    <section className="w-full px-4  py-16 md:px-12 lg:px-[130px] ">
      {/* Steps */}
      <div className="flex flex-col lg:flex-row lg:items-center  gap-14 mb-10 lg:pl-[60px]">
        <p className=" text-3xl lg:text-2xl font-normal text-bodyText text-center lg:max-w-[150px]">Join as a Seller Steps</p>
        <div className="flex flex-wrap  gap-6 lg:flex-nowrap lg:gap-8">
          <div className="flex items-center gap-6 ">
            <div className="bg-primary p-2 md:p-4 lg:p-6 rounded-lg">
              <img src="/assets/Truck.png" alt="" className="w-10 h-10 object-cover"/>
            </div>
             <span>Browse Listings</span>
          </div>
          <div className="flex items-center gap-6 ">
            <div className="bg-primary p-2 md:p-4 lg:p-6 rounded-lg">
              <img src="/assets/Two-User.png" alt="" className="w-10 h-10 object-cover"/>
            </div>
             <span>Schedule Visit</span>
          </div>
          <div className="flex items-center gap-6 ">
            <div className="bg-primary p-2 md:p-4 lg:p-6 rounded-lg">
              <img src="/assets/bank 2.png" alt="" className="w-10 h-10 object-cover"/>
            </div>
             <span>Make Offer</span>
          </div>
           <div className="flex items-center gap-6 ">
            <div className="bg-primary p-2 md:p-4 lg:p-6 rounded-lg">
              <img src="/assets/closedeal.png" alt="" className="w-10 h-10 object-cover"/>
            </div>
             <span>Close Deal</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-10 justify-center lg:items-center mt-16 rounded-2xl p-6 md:p-[60px] bg-[#F6F9F8]">
        {/* Text */}
        <div className=" flex flex-col  gap-[20px] lg:gap-[30px] text-bodyText max-w-[300px] md:max-w-[400px] lg:max-w-[500px]">
          <p className="text-small md:text-base font-medium text-neutral">Com a paypay você</p>
          <h2 className="text-xl md:text-2xl lg:text-[40px] lg:leading-[42px] font-semibold">
            Sell Your Apartment or Home with Ease
          </h2>
          <p className="text-base md:text-lg lg:text-[22px] font-normal lg:leading-[25px] ">
            List your property and reach serious buyers quickly. Our expert team
            guides you through every step, ensuring a smooth and profitable sale.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary w-[200px] max-w-[200px] text-white px-6 py-2 rounded-lg hover:bg-teal-600">
              Sell Now
            </button>
            <button className="bg-transparent border-[2px] w-[200px] max-w-[200px] border-primary text-bodyText font-semibold px-6 py-2 rounded-lg hover:bg-gray-50">
              Request Quote
            </button>
          </div>
        </div>

        {/* Image */}
        <div>
          <img
            src="/assets/sellimage.png"
            alt="Sell Apartment"
            
            className="rounded-xl shadow-lg object-cover w-[400px] h-[300px] md:w-[500px] md:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
