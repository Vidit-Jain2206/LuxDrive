import React, { useEffect, useState } from "react";
import { cars } from "../utils/cars";
import { useParams } from "react-router-dom";
import { MdPeopleAlt } from "react-icons/md";
import { BsFuelPump } from "react-icons/bs";
import { TbManualGearbox } from "react-icons/tb";
import { TiTick } from "react-icons/ti";

const ProductDetails = () => {
  const params = useParams();
  const [carDetail, setCardDetail] = useState();
  useEffect(() => {
    fetchCarDetails();
    function fetchCarDetails() {
      cars.forEach((car) => {
        if (car.id === params.code) {
          setCardDetail(car);
        }
      });
    }
    console.log(carDetail);
  }, [params.code]);

  return (
    <main>
      {/* details */}
      <h1 className="font-bold text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] mt-10  ml-10">
        {carDetail?.title}
      </h1>
      <div className="flex flex-wrap space-x-10">
        {/* photo */}
        <div className="w-full lg:w-[50%] lg:h-[30%] p-10">
          <img
            src={carDetail?.img}
            alt=""
            className="w-full h-full rounded-3xl"
          />
        </div>
        {/* product description */}
        <div className="flex flex-col w-full lg:w-[45%] lg:h-[30%] p-10">
          <h2 className="font-bold text-[20px] sm:text-[20px] md:text-[25px] lg:text-[30px] mb-5">
            Specifications
          </h2>

          <div className="flex flex-wrap space-y-5 md:space-y-0 lg:space-y-10 flex-row justify-between">
            <ul className="flex flex-col space-y-4">
              <li className="flex text-[20px] lg:text-[30px]">
                <MdPeopleAlt className="text-[25px] lg:text-[40px] mr-[1rem] lg:mr-[3.5rem]" />{" "}
                4 Doors, 4 Seats
              </li>
              <li className="flex text-[20px] lg:text-[30px]">
                <BsFuelPump className="text-[25px] lg:text-[40px] mr-[1rem] lg:mr-[3.5rem]" />{" "}
                Electric
              </li>
              <li className="flex text-[20px] lg:text-[30px]">
                <TbManualGearbox className="text-[25px] lg:text-[40px] mr-[1rem] lg:mr-[3.5rem]" />{" "}
                Automatic
              </li>
            </ul>

            <ul className=" list-disc text-[20px] tracking-wide px-5 leading-7">
              <li>Gas V12 , 6.0L</li>
              <li>4-Wheel Drive</li>
              <li>7-Speed Shiftable Autotransmission</li>
              <li>4 wheel Anti-lock Braking System (ABS)</li>
              <li>Dual front side mounted airbags</li>
              <li>Traction Control</li>
            </ul>
          </div>
        </div>
      </div>

      {/* pricing */}
      <div>
        <h3 className="text-center text-[30px] font-bold tracking-wide mt-10">
          Pricing
        </h3>

        {/* three columns */}
        <div className="max-w-[1200px] mx-auto flex flex-row flex-wrap my-10 justify-evenly  h-auto space-y-4 sm:space-y-0">
          <div className="bg-[#212529] ml-2 w-[300px] lg:w-[350px] h-[400px]  p-4 rounded-2xl">
            <p className="text-[#A7A7A7] mb-3">Basic</p>
            <p className="mb-3 text-[25px]">
              <span className="text-white font-bold tracking-wider">
                $ {carDetail.price}/{" "}
              </span>
              <span className="text-[#A7A7A7] text-[20px]">a day</span>
            </p>
            <ul className="flex flex-col space-y-2">
              <li className="flex text-white items-center ">
                <span className="bg-white text-black rounded-full flex justify-center items-center mr-[1rem] text-[25px]">
                  <TiTick />
                </span>
                Lorem, ipsum dolor ipsum dolor.
              </li>
              <li className="flex text-white  items-center ">
                <span className="bg-white text-black rounded-full flex justify-center items-center mr-[1rem] text-[25px]">
                  <TiTick />
                </span>
                Lorem, ipsum dolor.
              </li>
              <li className="flex text-white  items-center ">
                <span className="bg-white text-black rounded-full flex justify-center items-center mr-[1rem] text-[25px]">
                  <TiTick />
                </span>
                Lorem, ipsum dolor.
              </li>
              <li className="flex text-white items-center ">
                <span className="bg-white text-black rounded-full flex justify-center items-center mr-[1rem] text-[25px]">
                  <TiTick />
                </span>
                Lorem, ipsum dolor.
              </li>
            </ul>
          </div>
          <div className="bg-[#212529] ml-2 w-[300px] lg:w-[350px] h-[400px]  p-4 rounded-2xl">
            <p className="text-[#A7A7A7] mb-3">Premium</p>
            <p className="mb-3 text-[25px]">
              <span className="text-white font-bold tracking-wider ">
                $ {carDetail.price * 30}/{" "}
              </span>
              <span className="text-[#A7A7A7] text-[20px]">a month</span>
            </p>
            <ul className="flex flex-col space-y-2">
              <li className="flex text-white items-center ">
                <span className="bg-white text-black rounded-full flex justify-center items-center mr-[1rem] text-[25px]">
                  <TiTick />
                </span>
                Lorem, ipsum dolor ipsum dolor.
              </li>
              <li className="flex text-white  items-center ">
                <span className="bg-white text-black rounded-full flex justify-center items-center mr-[1rem] text-[25px]">
                  <TiTick />
                </span>
                Lorem, ipsum dolor.
              </li>
              <li className="flex text-white  items-center ">
                <span className="bg-white text-black rounded-full flex justify-center items-center mr-[1rem] text-[25px]">
                  <TiTick />
                </span>
                Lorem, ipsum dolor.
              </li>

              <li className="flex text-white  items-center ">
                <span className="bg-white text-black rounded-full flex justify-center items-center mr-[1rem] text-[25px]">
                  <TiTick />
                </span>
                Lorem, ipsum dolor.
              </li>
              <li className="flex text-white  items-center ">
                <span className="bg-white text-black rounded-full flex justify-center items-center mr-[1rem] text-[25px]">
                  <TiTick />
                </span>
                Lorem, ipsum dolor.
              </li>
              <li className="flex text-white items-center ">
                <span className="bg-white text-black rounded-full flex justify-center items-center mr-[1rem] text-[25px]">
                  <TiTick />
                </span>
                Lorem, ipsum dolor.
              </li>
            </ul>
          </div>
          <div className="bg-[#212529] ml-2 w-[300px] lg:w-[350px] h-[400px]  p-4 rounded-2xl">
            <p className="text-[#A7A7A7] mb-3">Ultra</p>
            <p className="mb-3 text-[25px]">
              <span className="text-white font-bold tracking-wider ">
                $ {carDetail.price * 80}/{" "}
              </span>
              <span className="text-[#A7A7A7] text-[20px]">3 months</span>
            </p>
            <ul className="flex flex-col space-y-2">
              <li className="flex text-white items-center ">
                <span className="bg-white text-black rounded-full flex justify-center items-center mr-[1rem] text-[25px]">
                  <TiTick />
                </span>
                Lorem, ipsum dolor ipsum dolor.
              </li>
              <li className="flex text-white  items-center ">
                <span className="bg-white text-black rounded-full flex justify-center items-center mr-[1rem] text-[25px]">
                  <TiTick />
                </span>
                Lorem, ipsum dolor.
              </li>
              <li className="flex text-white  items-center ">
                <span className="bg-white text-black rounded-full flex justify-center items-center mr-[1rem] text-[25px]">
                  <TiTick />
                </span>
                Lorem, ipsum dolor.
              </li>
              <li className="flex text-white  items-center ">
                <span className="bg-white text-black rounded-full flex justify-center items-center mr-[1rem] text-[25px]">
                  <TiTick />
                </span>
                Lorem, ipsum dolor.
              </li>
              <li className="flex text-white  items-center ">
                <span className="bg-white text-black rounded-full flex justify-center items-center mr-[1rem] text-[25px]">
                  <TiTick />
                </span>
                Lorem, ipsum dolor.
              </li>
              <li className="flex text-white  items-center ">
                <span className="bg-white text-black rounded-full flex justify-center items-center mr-[1rem] text-[25px]">
                  <TiTick />
                </span>
                Lorem, ipsum dolor.
              </li>

              <li className="flex text-white  items-center ">
                <span className="bg-white text-black rounded-full flex justify-center items-center mr-[1rem] text-[25px]">
                  <TiTick />
                </span>
                Lorem, ipsum dolor.
              </li>
              <li className="flex text-white items-center ">
                <span className="bg-white text-black rounded-full flex justify-center items-center mr-[1rem] text-[25px]">
                  <TiTick />
                </span>
                Lorem, ipsum dolor.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* button */}

      <div className="flex justify-center -items-center mb-10">
        <button className="rounded-xl text-[25px] tracking-wider bg-black text-white px-16 py-2 border-2 border-black hover:bg-white hover:text-black transition duration-300">
          Book A Car
        </button>
      </div>
    </main>
  );
};

export default ProductDetails;
