import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const params = useParams();
  const cars = [
    {
      id: "1",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "2",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "3",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "4",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "5",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "6",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "7",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "8",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "9",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "10",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "11",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "12",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "13",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "14",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "15",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
  ];
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
