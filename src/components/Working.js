import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";
const Section4 = () => {
  return (
    <div>
      <section className="flex flex-col mx-auto h-auto lg:w-[1200px]">
        <div className="max-w-[720px] mx-auto mt-[3rem]">
          <h1 className=" font-bold text-[35px] sm:text-[38px] text-center lg:text-[48px] tracking-tight">
            How It Works
          </h1>
          <p className="mt-[1rem] font-medium not-italic  text-[13px] sm:text-[15px] text-center lg:text-[18px] tracking-tight">
            Renting a luxury car has never been easier. Our streamlined process
            makes it simple for you to book and confirm your vehicle of choice
            online
          </p>
        </div>

        <div className="relative mt-[4rem] w-full mx-auto flex justify-start lg:justify-end  lg:h-[638px]">
          {/* three Heading */}
          <div className="flex flex-col w-[90%] sm:w-[75%] md:w-[65%] absolute top-0 left-0 lg:left-6 lg:w-[526px] my-[1rem] lg:my-[2rem] space-y-3 ">
            <div className="w-full flex justify-center items-center md:h-[110px] lg:w-[572px] h-[100px] lg:h-[176px] rounded-3xl  border-gray-300 bg-white p-2 border-[1px] shadow-md">
              <div className="flex flex-row  w-[95%] h-[80%]  space-x-4">
                {/* img */}
                <div className="h-full flex justify-center items-center bg-[#f5f5f5] rounded-2xl min-w-[13%] ">
                  <FiSearch className="text-[15px] md:text-[24px]" />
                </div>
                {/* details */}
                <div className="flex flex-col">
                  <h3 className="text-[15px] md:text-[20px] lg:text-[24px] font-bold leading-6">
                    Browse and select
                  </h3>
                  <p className="text-[11px] md:text-[15px] lg:text-[18px] font-normal lg:mt-[1rem]">
                    Choose from our wide range of premium cars, select the
                    pickup and return dates and locations that suit you best.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center md:h-[110px] lg:w-[572px] h-[100px] lg:h-[176px] rounded-3xl  border-gray-300 bg-white p-2 border-[1px] shadow-md">
              <div className="flex flex-row  w-[95%] h-[80%]  space-x-4">
                {/* img */}
                <div className="h-full flex justify-center items-center bg-[#f5f5f5] rounded-2xl min-w-[13%] ">
                  <AiOutlineSchedule className="text-[15px] md:text-[24px]" />
                </div>
                {/* details */}
                <div className="flex flex-col">
                  <h3 className="text-[15px] md:text-[20px] lg:text-[24px] font-bold leading-6">
                    Book and Confirm
                  </h3>
                  <p className="text-[11px] md:text-[15px] lg:text-[18px] font-normal lg:mt-[1rem]">
                    Book your desired car with just a few clicks and receive an
                    instant confirmation via email or SMS.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center md:h-[110px] lg:w-[572px] h-[100px] lg:h-[176px] rounded-3xl  border-gray-300 bg-white p-2 border-[1px] shadow-md">
              <div className="flex flex-row  w-[95%] h-[80%]  space-x-4">
                {/* img */}
                <div className="h-full flex justify-center items-center bg-[#f5f5f5] rounded-2xl min-w-[13%] ">
                  <FaRegSmile className="text-[15px] md:text-[24px]" />
                </div>
                {/* details */}
                <div className="flex flex-col">
                  <h3 className="text-[15px] md:text-[15px] lg:text-[24px] font-bold leading-6">
                    Enjoy your Ride
                  </h3>
                  <p className="text-[11px] md:text-[15px] lg:text-[18px] font-normal lg:mt-[1rem]">
                    Pick up your car at the designated location and enjoy your
                    premium driving experience with our top-quality service.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className=" w-full md:w-[90%] h-full flex items-center rounded-2xl bg-[#f5f5f5] lg:w-[740px] ">
            <img
              src="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2159&q=80"
              alt=""
              className="lg:ml-[10rem] my-auto w-[545px] h-[359px] rounded-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section4;
