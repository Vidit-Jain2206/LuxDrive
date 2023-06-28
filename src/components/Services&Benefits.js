import React from "react";

const Section5 = () => {
  return (
    <div className="mt-[4rem] bg-black w-full flex flex-col">
      {/* heading */}
      <div className="max-w-[720px] mx-auto mt-[6rem] text-white ">
        <h1 className=" font-bold text-[35px] sm:text-[38px] text-center lg:text-[48px] tracking-tight">
          Our Services & Benefits
        </h1>
        <p className="mt-[1rem] font-medium not-italic text-[13px] sm:text-[15px] text-center lg:text-[18px] tracking-wide">
          To make renting easy and hassle-free, we provide a variety of services
          and advantages. We have you covered with a variety of vehicles and
          flexible rental terms.
        </p>
      </div>
      {/* cards */}
      <div className="mb-[6rem] mt-[6rem] max-w-[1200px] mx-auto flex flex-row flex-wrap  md:space-x-8 space-y-10 md:space-y-0 items-center justify-center">
        {/* three Cards */}
        <div className="flex flex-col w-full h-[178px] max-w-[370px] items-center justify-center ">
          {/* pic */}
          <img
            src="../assets/qualityChoice.png"
            alt=""
            className="w-[48px] h-[48px] border-[8px] border-[#ffffffda] rounded-3xl"
          />
          {/* title */}
          <h2 className=" font-semibold text-[20px] text-center leading-8 mt-[1rem] text-white not-italic tracking-wider">
            Quality Choice
          </h2>
          {/* description */}
          <p className="text-center font-normal text-[16px] mt-[0.5rem] text-[#D6D6D6] not-italic tracking-wide leading-6">
            We offer a wide range of high-quality vehicles to choose from,
            including luxury cars, SUVs, vans, and more.
          </p>
        </div>
        <div className="flex flex-col w-full h-[178px] max-w-[370px] items-center justify-center ">
          {/* pic */}
          <img
            src="../assets/price.png"
            alt=""
            className="w-[48px] h-[48px] border-[8px] border-[#ffffffda] rounded-3xl"
          />
          {/* title */}
          <h2 className=" font-semibold text-[20px] text-center leading-8 mt-[1rem] text-white not-italic tracking-wider">
            Affordable Price
          </h2>
          {/* description */}
          <p className="text-center font-normal text-[16px] mt-[0.5rem] text-[#D6D6D6] not-italic tracking-wide leading-6">
            Our rental rates are highly competitive and affordable, allowing our
            customers to enjoy their trips without breaking the bank.
          </p>
        </div>
        <div className="flex flex-col w-full  h-[178px] max-w-[370px] items-center justify-center ">
          {/* pic */}
          <img
            src="../assets/onlineBooking.png"
            alt=""
            className="w-[48px] h-[48px] border-[8px] border-[#ffffffda] rounded-3xl"
          />
          {/* title */}
          <h2 className=" font-semibold text-[20px] text-center leading-8 mt-[1rem] text-white not-italic tracking-wider">
            Convenient Online Booking
          </h2>
          {/* description */}
          <p className="text-center font-normal text-[16px] mt-[0.5rem] text-[#D6D6D6] not-italic tracking-wide leading-6">
            With our easy-to-use online booking system, customers can quickly
            and conveniently reserve their rental car from anywhere, anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section5;
