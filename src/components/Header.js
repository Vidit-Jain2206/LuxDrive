import React from "react";
import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import { useSelector, useDispatch } from "react-redux";
import {
  mobileMenuOn,
  mobileMenuOff,
} from "../Features/MobileMenu/MobileMenuSlice";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Header = () => {
  const mobileMenu = useSelector((state) => state.mobileMenu.mode);
  const dispatch = useDispatch();
  console.log(mobileMenu);
  return (
    <div className="h-16 bg-black text-white">
      <header className="h-full flex flex-wrap justify-between items-center  mx-auto my-auto max-w-6xl">
        {/* Logo Starts */}
        <div className="text-xl tracking-[3px] text-center">LUXEDRIVE</div>
        {/* logo Ends  */}

        {/* Menu starts */}
        <div className="md:flex hidden justify-center items-center ">
          <div className="">
            <ul className="flex space-x-2 ">
              <Link
                to={"/"}
                className="px-[20px] py-[8px] backdrop-blur-[18px] text-sm tracking-[1px] leading-6 font-sans not-italic font-semibold before:w-full before:h-full before:absolute before:top-0 before:left-0 before:border before:border-white before:hover:origin-center before:hover:rotate-[180deg] before:transition before:duration-700 active:text-black"
              >
                <li>Home</li>
              </Link>
              <Link
                to={"/rent/SUV"}
                className="px-[20px] py-[8px] backdrop-blur-[18px] text-sm tracking-[1px] leading-6 font-sans not-italic font-semibold before:w-full before:h-full before:absolute before:top-0 before:left-0 before:border before:border-white before:hover:origin-center before:hover:rotate-180 before:transition before:duration-700 active:text-black"
              >
                <li>Rent</li>
              </Link>
              <Link
                to="/about"
                className="px-[20px] py-[8px] backdrop-blur-[18px] text-sm tracking-[1px] leading-6 font-sans not-italic font-semibold before:w-full before:h-full before:absolute before:top-0 before:left-0 before:border before:border-white before:hover:origin-center before:hover:rotate-180 before:transition before:duration-700 active:text-black"
              >
                <li>About Us</li>
              </Link>
              <Link
                to={"/contact"}
                className="px-[20px] py-[8px] backdrop-blur-[18px] text-sm tracking-[1px] leading-6 font-sans not-italic font-semibold before:w-full before:h-full before:absolute before:top-0 before:left-0 before:border before:border-white before:hover:origin-center before:hover:rotate-180 before:transition before:duration-700 active:text-black"
              >
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        {/* Menu  end */}

        {/* sideNav Bar Starts */}
        <div className="md:hidden flex justify-center text-center">
          {!mobileMenu ? (
            <CgClose
              className="text-xl w-[23px] h-full  text-white"
              onClick={() => dispatch(mobileMenuOn())}
            />
          ) : (
            <SlMenu
              className="text-xl w-[23px] h-full  text-white"
              onClick={() => dispatch(mobileMenuOff())}
            />
          )}
        </div>
        {/* sideNavBar ends */}
      </header>
    </div>
  );
};

export default Header;
