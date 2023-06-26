import React from "react";

const ReviewCard = ({ review, name, place, pic }) => {
  return (
    <div className="w-full lg:w-[80%]">
      {/* review */}
      <div className="mt-[2rem] ">
        <p className="opacity-80 text-[#0F0F0F] font-semibold not-italic text-[25px] lg:text-[32px] tracking-[0.02rem] leading-[48px]">
          {review}
        </p>
      </div>
      {/* details */}

      <div className="w-[320px] mt-[4rem] h-[80px] flex flex-row space-x-8">
        <img
          src={pic}
          alt="pic"
          className="h-full w-[80px] rounded-full shadow-md"
        />

        <div className="flex flex-col h-full items-start ">
          <h3 className=" font-bold text-[24px] leading-6 tracking-tight text-black">
            {name}
          </h3>
          <p className=" font-normal text-[20px] text-[#737373] leading-6 tracking-tight mt-[0.3rem] align-start">
            From {place}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
