import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  const mobileMenu = useSelector((state) => state.mobileMenu.mode);

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <main
      className={`absolute top-[64px] w-full h-[270px] left-0 z-50 md:hidden`}
    >
      <div
        className={`w-full h-full flex bg-black text-white transition-all duration-700  ${
          mobileMenu ? "translate-y-0" : "translate-y-[-400px]"
        }`}
      >
        <ul className="flex flex-col space-y-5 justify-center items-center w-full h-full">
          <li className="text-center text-[20px] hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="text-center text-[20px] hover:underline">
            <Link to="/rent/SUV">Rent</Link>
          </li>
          <li className="text-center text-[20px] hover:underline">
            <Link>Testimonials</Link>
          </li>
          <li className="text-center text-[20px] hover:underline">
            <Link onClick={handleScroll}>Contact</Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default SideNavbar;
