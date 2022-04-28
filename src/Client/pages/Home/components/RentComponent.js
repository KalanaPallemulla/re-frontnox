import React from "react";
import { BiBuilding } from "react-icons/bi";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import EstateCard from "./EstateCard";

const RentComponent = () => {
  return (
    <div className="bg-brown-50">
      <div className="mt-16 ">
        <div className="md:grid md:grid-cols-3">
          <div></div>

          <div className="h-16 bg-mainDarkBrown col-span-2 rounded-sm">
            <div className="flex items-center h-16 px-4 text-2xl md:text-4xl font-serif text-white ">
              For Rent
              <BiBuilding className=" text-2xl md:text-4xl ml-4" />
            </div>
          </div>
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
    </div>
  );
};

export default RentComponent;
