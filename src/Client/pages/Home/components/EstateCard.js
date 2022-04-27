import React from "react";
import Home from "../../../assets/Home3.jpeg";

const EstateCard = () => {
  return (
    <div className="p-1">
      <div
        className="h-96 w-96 flex items-end rounded-sm  border-mainDarkBrown"
        style={{ backgroundImage: `url(${Home})` }}
      >
        <div className="p-4">
          <div className="text-white text-3xl">Nugegoda</div>
          <div className="text-white text-sm">Address</div>
          <button className="bg-mainLightBrown text-lg AF rounded-full text-white py-1 px-2">
            150,000,000 LKR
          </button>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;
