import React from "react";
import Navbar from "../../components/Navbar";
import FilterSection from "./components/FilterSection";
import RentComponent from "./components/RentComponent";
import WelcomeComponent from "./components/WelcomeComponent";

const RentContainer = () => {
  return (
    <>
      <Navbar />
      {/* <WelcomeComponent /> */}

      <div className="h-full w-screen mt-16 bg-white">
        <div className="sm:grid sm:grid-cols-3">
          <div className="p-4 top-0 left-0">
            <FilterSection />
          </div>
          <div className="sm:col-span-2 mt-8">
            <div className="sm:grid sm:grid-cols-2">
              <div className="flex justify-center mt-4 ">
                <RentComponent index={1} />
              </div>
              <div className="flex justify-center mt-4">
                <RentComponent index={2} />
              </div>
              <div className="flex justify-center mt-4">
                <RentComponent index={3} />
              </div>
              <div className="flex justify-center mt-4">
                <RentComponent index={4} />
              </div>
              <div className="flex justify-center mt-4 ">
                <RentComponent index={1} />
              </div>
              <div className="flex justify-center mt-4">
                <RentComponent index={2} />
              </div>
              <div className="flex justify-center mt-4">
                <RentComponent index={3} />
              </div>
              <div className="flex justify-center mt-4">
                <RentComponent index={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentContainer;
