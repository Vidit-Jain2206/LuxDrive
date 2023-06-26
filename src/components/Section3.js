import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Section3 = () => {
  const [category, setCategory] = useState("Popular");
  const [cars, setCars] = useState([]);

  const Popular = [
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
  ];
  const Luxury = [
    {
      id: "1",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "2",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "3",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "4",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "5",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "6",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
  ];
  const Vintage = [
    {
      id: "1",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1610479415732-10db2f23cc62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHZpbnRhZ2UlMjBjYXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "2",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1610479415732-10db2f23cc62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHZpbnRhZ2UlMjBjYXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "3",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1610479415732-10db2f23cc62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHZpbnRhZ2UlMjBjYXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "4",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1610479415732-10db2f23cc62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHZpbnRhZ2UlMjBjYXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "5",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1610479415732-10db2f23cc62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHZpbnRhZ2UlMjBjYXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: "6",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1610479415732-10db2f23cc62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHZpbnRhZ2UlMjBjYXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
  ];
  const Family = [
    {
      id: "1",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1667833521855-3f79bad75f72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    },
    {
      id: "2",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1667833521855-3f79bad75f72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    },
    {
      id: "3",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1667833521855-3f79bad75f72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    },
    {
      id: "4",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1667833521855-3f79bad75f72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    },
    {
      id: "5",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1667833521855-3f79bad75f72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    },
    {
      id: "6",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1667833521855-3f79bad75f72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    },
  ];
  const OffRoad = [
    {
      id: "1",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2159&q=80",
    },
    {
      id: "2",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2159&q=80",
    },
    {
      id: "3",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2159&q=80",
    },
    {
      id: "4",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2159&q=80",
    },
    {
      id: "5",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2159&q=80",
    },
    {
      id: "6",
      title: "Audi A8 L 2022",
      price: "89.53",
      img: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2159&q=80",
    },
  ];

  useEffect(() => {
    if (category === "Popular") {
      setCars(Popular);
    } else if (category === "Luxury") {
      setCars(Luxury);
    } else if (category === "Vintage") {
      setCars(Vintage);
    } else if (category === "Family") {
      setCars(Family);
    } else {
      setCars(OffRoad);
    }
  }, [category]);
  console.log(category);
  return (
    <div className="w-full h-auto mt-[10rem] t-[10rem] bg-[#f5f5f5]">
      <section className="">
        {/* heading */}
        <div className="max-w-[720px] mx-auto mt-[6rem]">
          <h1 className=" font-bold text-[35px] sm:text-[38px] text-center lg:text-[48px] tracking-tight">
            Our Impressive Collection of Cars
          </h1>
          <p className="mt-[1rem] not-italic font-medium text-[13px] sm:text-[15px] text-center lg:text-[18px] tracking-tight">
            Ranging from elegant sedans to powerful sports cars, all carefully
            selected to provide our customers with the ultimate driving
            experience.
          </p>
        </div>

        {/* category */}
        <div className="mt-[4rem] max-w-[764px] mx-auto flex">
          <ul className="flex flex-wrap w-full space-x-4 items-center justify-center">
            <li
              onClick={() => {
                setCategory("Popular");
              }}
              className={`cursor-pointer mt-[6px] px-[19px] py-[12px]  text-[18px] text-center rounded-full font-medium not-italic${
                category === "Popular"
                  ? " bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              Popular Car
            </li>
            <li
              onClick={() => {
                setCategory("Luxury");
              }}
              className={`cursor-pointer mt-[6px] px-[19px] py-[12px]  text-[18px] text-center rounded-full font-medium not-italic ${
                category === "Luxury"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              Luxury Car
            </li>
            <li
              onClick={() => {
                setCategory("Vintage");
              }}
              className={`cursor-pointer mt-[6px] px-[19px] py-[12px]  text-[18px] text-center rounded-full font-medium not-italic ${
                category === "Vintage"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              Vintage Car
            </li>
            <li
              onClick={() => {
                setCategory("Family");
              }}
              className={`cursor-pointer mt-[6px] px-[19px] py-[12px]  text-[18px] text-center rounded-full font-medium not-italic ${
                category === "Family"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              Family Car
            </li>
            <li
              onClick={() => {
                setCategory("Off-Road");
              }}
              className={`cursor-pointer mt-[6px] px-[19px] py-[12px]  text-[18px] text-center rounded-full font-medium  not-italic not-italic ${
                category === "Off-Road"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              Off-Road Car
            </li>
          </ul>
        </div>

        {/* cards */}
        <div className="mb-[10rem] mt-[4rem] max-w-[1200px] mx-auto grid gap-[33px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((item, id) => {
            return (
              <ProductCard
                key={id}
                img={item.img}
                title={item.title}
                price={item.price}
                id={item.id}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Section3;
