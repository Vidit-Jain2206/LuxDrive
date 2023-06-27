import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { cars } from "../utils/cars";

const ProductList = () => {
  const params = useParams();

  const location = useLocation();

  return (
    <main className=" w-full h-auto ">
      <h1 className="mt-10 font-bold text-[35px] sm:text-[38px] text-center lg:text-[48px] tracking-tight">
        {location.pathname.includes("brand")
          ? `Best Collection of ${params.brand} Cars`
          : `Best Collection of ${params.type} Cars`}
      </h1>
      <div className=" my-10 bg-[#f5f5f5] max-w-[1200px] mx-auto border border-[#f5f5f5] rounded-2xl ">
        <ul className=" mb-10 mt-10 grid gap-[10px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {cars.map((item, index) => {
            return (
              <li>
                <ProductCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  id={item.id}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default ProductList;
