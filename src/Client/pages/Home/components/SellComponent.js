import React from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import EstateCard from "./EstateCard";

const SellComponent = () => {
  return (
    <div className="mt-16 bg-brown-50">
      <div className="md:grid md:grid-cols-3">
        <div className="h-16 bg-mainDarkBrown col-span-2 rounded-sm">
          <div className="flex items-center h-16 px-4 text-2xl md:text-4xl font-serif text-white ">
            For sell
            <BiBuildingHouse className=" text-2xl md:text-4xl ml-4" />
          </div>
        </div>
        <div></div>
      </div>
      <div className="mt-8">
        <ScrollMenu>
          <EstateCard />
          <EstateCard />
          <EstateCard />
          <EstateCard />
          <EstateCard />
        </ScrollMenu>
      </div>
    </div>
  );
};

export default SellComponent;
