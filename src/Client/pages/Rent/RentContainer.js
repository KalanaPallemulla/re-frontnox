import React from "react";
import Navbar from "../../components/Navbar";
import FilterSection from "./components/FilterSection";

const RentContainer = () => {
  return (
    <>
      <Navbar />
      <div className="h-full w-screen bg-gradient-to-r from-yellow-200 to-white mt-16">
        <div className="sm:grid sm:grid-cols-3">
          <div className="p-4">
            <FilterSection />
          </div>
          <div className="sm:col-span-2">hi</div>
        </div>
      </div>
    </>
  );
};

export default RentContainer;
