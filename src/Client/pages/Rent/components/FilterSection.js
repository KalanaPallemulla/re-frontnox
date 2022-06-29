import React, { Fragment, useState } from "react";
import Select from "react-select";
import { Menu, Transition } from "@headlessui/react";

const FilterSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rentTypes] = useState([
    { type: "Home", value: "home" },
    { type: "Apartment", value: "apartment" },
    { type: "Building", value: "building" },
    { type: "Store", value: "store" },
  ]);
  return (
    <>
      <div className="shadow-md  p-4">
        <div className="font-sans md:text-3xl text-2xl md:pt-8 font-bold text-mainDarkBrown text-center">
          Let's search what you want to rent
        </div>
        <div className="">
          <label
            for="country"
            className="block text-sm font-medium text-gray-700"
          >
            Type
          </label>
          <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option>Select type</option>
            {rentTypes.map((obj) => (
              <option value={obj.value}>{obj.type}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
