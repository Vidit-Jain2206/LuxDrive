import React from "react";
import CoverPage from "./CoverPage";
import Category from "./Category";
import CarCollection from "./CarCollection";
import Working from "./Working";
import ServicesAndBenefits from "./Services&Benefits";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center ">
      <CoverPage />
      <Category />
      <CarCollection />
      <Working />
      <ServicesAndBenefits />
      <Reviews />
    </div>
  );
};

export default Home;
