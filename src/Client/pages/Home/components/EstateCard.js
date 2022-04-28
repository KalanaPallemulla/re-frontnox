import React from "react";
import Home from "../../../assets/Home3.jpeg";
import { BsFillTagFill } from "react-icons/bs";

const EstateCard = () => {
  return (
    <div className="p-1">
      <div
        className="h-96 w-96  rounded-sm  border-mainDarkBrown hover:scale-110 transition-transform"
        style={{ backgroundImage: `url(${Home})` }}
      >
        <div className="top-0 flex justify-end  p-4">
          <BsFillTagFill className="text-red-600 text-2xl" />
        </div>
        <div className="p-8 absolute top-0">
          <button className="bg-green-400 rounded-full AF text-md px-4 py-1 text-white">
            Verified
          </button>
        </div>

        <div className="absolute bottom-0">
          <div className="p-4">
            <div className="text-white text-3xl">Nugegoda</div>
            <div className="text-white text-sm">Address</div>
            <button className="bg-mainLightBrown text-lg AF rounded-full text-white py-1 px-2">
              150,000,000 LKR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
