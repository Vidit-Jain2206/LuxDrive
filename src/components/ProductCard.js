import React from "react";
import { IoSpeedometerOutline } from "react-icons/io5";
import { TbManualGearbox } from "react-icons/tb";
import { MdSupervisorAccount } from "react-icons/md";
import { BsFuelPump } from "react-icons/bs";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  return (
    <div className="w-[315px] mx-auto md:w-[370px] shadow-xl border-2 border-gray-300 h-[530px] bg-white flex flex-col p-3 hover:border-1 hover:border-black rounded-2xl hover:translate-x-1 hover:translate-y-1 transition duration-200 ease-in-out hover:shadow-2xl">
      {/* photo */}
      <div>
        <img
          src={props.img}
          alt="pic"
          className="h-[260px] w-full rounded-2xl"
          loading="lazy"
        />
      </div>
      {/* details */}
      <div className="mx-[5px] flex flex-col">
        <div className="flex flex-col mt-[1rem]">
          <h3 className="font-medium text-[15px] md:text-[20px] not-italic">
            {props.title}
          </h3>
          <h2 className="md:text-[32px] font-extrabold  not-italic">
            {props.price}
            <span className="md:text-[16px] font-semibold text-gray-400 not-italic ">
              /day
            </span>
          </h2>
        </div>
        <div className="h-[63px] mt-[1rem] flex rounded-2xl bg-[#f5f5f5] px-[12px] py-[8px] space-x-2 justify-around">
          <div className="flex flex-col justify-center items-center space-y-1">
            <IoSpeedometerOutline className="w-[20px] h-[20px] " />
            <p className="text-[14px] font-medium">4,000</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-1">
            <TbManualGearbox className="w-[20px] h-[20px] " />
            <p className="text-[14px] font-medium">Auto</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-1">
            <MdSupervisorAccount className="w-[20px] h-[20px] " />
            <p className="text-[14px] font-medium">4 Person</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-1">
            <BsFuelPump className="w-[20px] h-[20px] " />
            <p className="text-[14px] font-medium">Electric</p>
          </div>
        </div>
      </div>
      {/* button */}

      <Link
        to={`/product/${props.id}`}
        className="flex justify-center items-center mt-[20px] w-full h-[43px] border-2 border-black rounded-full px-[24px] font-medium hover:bg-black hover:text-white not-italic"
      >
        Rent Now
      </Link>
    </div>
  );
};

export default ProductCard;
