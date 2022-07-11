import React, { useState } from "react";

import {
  locations,
  sellTypes,
  sellValuesMax,
  sellValuesMin,
} from "../../../../utils/searchHelpers";

const FilterSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="shadow-md  p-4">
        <div className="font-sans md:text-3xl text-2xl md:pt-8 font-bold text-mainLightBrown text-center">
          Let's search what you want to buy
        </div>
        <div className="mt-8 flex items-center justify-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="border border-mainLightBrown py-2 px-4 rounded-full text-mainLightBrown hover:text-white hover:bg-mainLightBrown"
          >
            {!isOpen ? "Filters" : "Close filters"}
          </button>
        </div>
        <div className={!isOpen ? `hidden` : "block"}>
          <div className="mt-4">
            <label
              for="rentType"
              className="block text-sm font-medium text-gray-700"
            >
              Type
            </label>
            <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Select type</option>
              {sellTypes.map((obj) => (
                <option value={obj.value}>{obj.type}</option>
              ))}
            </select>
          </div>
          <div>
            <div className="mt-4">
              <label
                for="rentMinValue"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Select location</option>
                {locations.map((obj) => (
                  <option value={obj.value}>{obj.type}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <div className="mt-4">
              <label
                for="rentMinValue"
                className="block text-sm font-medium text-gray-700"
              >
                Min sell value
              </label>
              <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Select value</option>
                {sellValuesMin.map((obj) => (
                  <option value={obj.value}>{obj.type}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <div className="mt-4">
              <label
                for="rentMinValue"
                className="block text-sm font-medium text-gray-700"
              >
                Max rent value
              </label>
              <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Select value</option>
                {sellValuesMax.map((obj) => (
                  <option value={obj.value}>{obj.type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
