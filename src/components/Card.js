import React from "react";

const Card = (props) => {
  return (
    <div className="w-[150px] sm:w-[155px] md:w-[170px] lg:w-[165px] xl:w-[186px] h-[130px] rounded-lg bg-[#0f0f0f0d]  flex justify-center items-center">
      <div className="w-[70px] h-[72%] flex flex-col justify-center items-center space-y-4">
        <img src={props.pic} alt="" className="w-full h-[40%]" />
        <p className="text-center text-[15px]">{props.title}</p>
      </div>
    </div>
  );
};

export default Card;
