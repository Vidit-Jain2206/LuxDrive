import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Section6 = () => {
  const [index, setIndex] = useState(0);
  const reviews = [
    {
      review:
        "“I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, and the car I rented was in excellent condition. The staff was friendly and helpful, and I felt well taken care of throughout my rental period. I would definitely recommend this company to anyone looking for a premium car rental experience.”",
      name: "Lokman Hussain",
      pic: "",
      place: "Texas",
    },
    {
      review:
        "“I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, and the car I rented was in excellent condition. The staff was friendly and helpful, and I felt well taken care of throughout my rental period. I would definitely recommend this company to anyone looking for a premium car rental experience.”",
      name: "Vidit Jain",
      pic: "",
      place: "India",
    },
    {
      review:
        "“I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, and the car I rented was in excellent condition. The staff was friendly and helpful, and I felt well taken care of throughout my rental period. I would definitely recommend this company to anyone looking for a premium car rental experience.”",
      name: "Abhi ",
      pic: "",
      place: "Germany",
    },
  ];
  return (
    <div className="bg-white lg:w-[1200px] flex flex-col mt-[6rem] mb-[6rem] ">
      {/* heading */}
      <div className="flex flex-row justify-between w-full flex-wrap items-center">
        <h1 className="font-bold text-[40px] text-black tracking-tight">
          What Our Customers Says
        </h1>
        {/* buttons */}
        <div className="flex flex-row space-x-4 ml-[2rem] lg:ml-0">
          <button
            className={`w-[50px] h-[50px] lg:w-[64px] lg:h-[64px]  rounded-full   flex justify-center items-center   ${
              index === 0
                ? "text-gray-300 border-2 border-gray-300"
                : "border-2 border-black text-black focus:border-black focus:border-2 focus:bg-black focus:text-white"
            }`}
          >
            <AiOutlineArrowLeft
              className="w-[20px] h-[20px] lg:h-[24px] lg:w-[24px]  "
              onClick={() => {
                if (index === 0) return 0;
                setIndex(index - 1);
              }}
            />
          </button>
          <button
            className={`w-[50px] h-[50px] lg:w-[64px] lg:h-[64px] rounded-full  flex justify-center items-center   ${
              index === reviews.length - 1
                ? "text-gray-300 border-2 border-gray-400"
                : "border-black border-2 text-black focus:border-black focus:border-2 focus:bg-black focus:text-white "
            }`}
          >
            <AiOutlineArrowRight
              className=" w-[20px] h-[20px] lg:h-[24px] lg:w-[24px] "
              onClick={() => {
                if (index === reviews.length - 1) return reviews.length - 1;
                setIndex(index + 1);
              }}
            />
          </button>
        </div>
      </div>

      {/* review Section */}
      <div className="w-full ">
        <ReviewCard
          review={reviews[index].review}
          pic={reviews[index].pic}
          place={reviews[index].place}
          name={reviews[index].name}
        />
      </div>
    </div>
  );
};

export default Section6;
