import React from "react";
// import { HiOutlineLocationMarker } from "react-icons";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";

const Section1 = () => {
  return (
    <div className="h-[780px] w-full text-center relative">
      <div className=" flex justify-center items-center absolute top-0 w-full left-0  mt-[4rem]">
        <h1 className="tracking-[2px] text-white text-[34px] sm:text-[44px] md:text-[54px] md:leading-[4rem] lg:text-[64px] font-bold">
          Discover the world on wheels <br />
          with our car rental service
        </h1>
      </div>
      <img
        src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80"
        alt=""
        className="h-full w-full"
      />

      <div className="absolute w-full h-[110px] bottom-16 lg:bottom-6 left-0 flex flex-wrap justify-center items-center">
        <div
          style={{
            boxShadow:
              "0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)",
          }}
          className="w-[80%] bg-[#ffffffe6] rounded-2xl py-4 px-4"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            <div className="p-2 flex flex-col justify-start">
              <p className="text-[10px] sm:text-[11px] md:text-[13px] text-start">
                Pick-up Location
              </p>
              <div className="mt-[0.5rem] relative h-[45%] sm:h-[48%] md:h-[50%]">
                <input
                  style={{
                    boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                  type="text"
                  className="outline-none px-2 h-full w-full sm:text-[10px] text-[10px] md:text-[13px] rounded-lg"
                  placeholder="Search a location"
                />
                <GrLocation className="absolute top-2 right-2 sm:top-2 md:top-[0.6rem] text-[0.7rem] sm:text-[0.8rem] lg:text-[0.9rem] " />
              </div>
            </div>
            <div className="p-2  flex flex-col justify-start">
              <p className="text-[10px] md:text-[13px] sm:text-[11px] text-start">
                Pick-up date
              </p>
              <input
                style={{
                  boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                type="date"
                className="outline-none p-2 h-[45%] sm:text-[11px] sm:h-[48%] md:h-[50%] text-[10px] md:text-[13px] rounded-lg mt-2"
                placeholder="Search a location"
              />
            </div>
            <div className="p-2   flex flex-col justify-start">
              <p className="text-[10px]  md:text-[13px] sm:text-[11px] text-start">
                Drop-off Location
              </p>
              <div className="mt-[0.5rem] relative h-[45%] sm:h-[48%] md:h-[50%]">
                <input
                  style={{
                    boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                  type="text"
                  className="px-2 h-full w-full sm:text-[10px] text-[10px] md:text-[13px] rounded-lg outline-none"
                  placeholder="Search a location"
                />
                <GrLocation className="absolute top-2 right-2 sm:top-2 md:top-[0.6rem] text-[0.7rem] sm:text-[0.8rem] lg:text-[0.9rem] " />
              </div>
            </div>
            <div className="p-2   flex flex-col justify-start">
              <p className="text-[10px]  md:text-[13px] sm:text-[11px] text-start">
                Drop-off date
              </p>
              <input
                style={{
                  boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
                type="date"
                className="p-2 h-[45%] outline-none sm:text-[11px] sm:h-[48%] md:h-[50%] text-[10px] md:text-[13px] rounded-lg mt-2"
                placeholder="Search a location"
              />
            </div>
            <div className="p-2  flex flex-col md:justify-center">
              <div className=" w-[96%] h-[45%] md:h-[50%] ">
                <Link
                  to="/brand/Toyota"
                  className="text-start w-full h-full flex items-center justify-evenly border p-4 font-bold bg-black text-white rounded-full"
                >
                  <span className="text-[10px] md:text-[13px] sm:text-[11px] ">
                    Find a Vehicle
                  </span>
                  <AiOutlineArrowRight className="text-[12px] sm:text-[13px] md:text-[15px] hover:translate-x-2 transition duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
