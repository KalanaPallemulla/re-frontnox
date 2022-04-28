import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <h1 className="font-serif text-3xl text-gray-700 text-center">
        Dream Properties
      </h1>
      <div className="flex w-44 text-sm justify-between text-gray-600 mt-8 font-sans font-extralight">
        <h1>Download now</h1>
        <h1>License</h1>
      </div>
      <div className="flex justify-between space-x-8 md:space-x-16  mt-8 AF text-gray-700 text-sm">
        <h1>Home</h1>
        <h1>Sell</h1>
        <h1>Rent</h1>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>
      <div className="mt-8 md:flex md:space-x-8 text-xs text-gray-500 AF text-center">
        <h1>kalanaheshan47@gmail.com</h1>
        <h1 className="mt-4 md:mt-0">+94 76 705 1802 </h1>
      </div>
      <div className="mt-8 border-t border-t-gray-300 w-screen flex justify-center">
        <h1 className="mt-4 mb-4  text-xs text-gray-500 flex items-center ">
          <AiOutlineCopyrightCircle className="mr-1" /> 2022 product. All right
          reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
