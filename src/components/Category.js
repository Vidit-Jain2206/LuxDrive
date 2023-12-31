import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

import { brands } from "../utils/Brand";
import { bodyType } from "../utils/BodyType";
const Section2 = () => {
  return (
    <div className="w-full flex flex-col mt-[2rem]">
      <div className="mx-auto my-auto flex flex-col max-w-6xl">
        {/* rent by brand */}
        <div className="w-[100%] h-auto mt-[4rem]">
          <h1 className="font-bold text-[20px]">Rent By Brands</h1>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-y-2 gap-x-2 mt-10">
            {brands.map((item, index) => {
              return (
                <Link to={`/brand/${item.title}`} key={index}>
                  <Card title={item.title} pic={item.pic} />
                </Link>
              );
            })}
          </div>
        </div>
        {/* rent by type */}
        <div className="w-[100%] h-auto mt-20">
          <h1 className="font-bold text-[20px]">Rent By Body Type</h1>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-y-2 gap-x-2 mt-10">
            {bodyType.map((item, index) => {
              return (
                <Link to={`/bodytype/${item.title}`} key={index}>
                  <Card title={item.title} pic={item.pic} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
