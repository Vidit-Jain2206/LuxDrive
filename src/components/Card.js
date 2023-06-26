import React from "react";

const Card = ({ title, pic }) => {
  console.log(pic);
  return (
    <div className="w-[150px] sm:w-[155px] md:w-[170px] lg:w-[165px] xl:w-[186px] h-[130px] rounded-lg bg-[#0f0f0f0d]  flex justify-center items-center">
      <div className="w-[50px] h-[70%]">
        <img src={pic} alt="" className="w-full h-[80%]" />
        <p className="text-center text-[15px]">{title}</p>
      </div>
    </div>
  );
};

export default Card;
