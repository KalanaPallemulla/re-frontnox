import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FilterSection from "./components/FilterSection";
import RentComponent from "./components/RentComponent";

const RentContainer = () => {
  return (
    <>
      <Navbar />
      {/* <WelcomeComponent /> */}

      <div className="h-full w-screen mt-16 bg-white">
        <div className="sm:grid sm:grid-cols-3">
          <div className="px-4 pt-3 top-0 left-0 mt-8">
            <FilterSection />
          </div>
          <div className="sm:col-span-2 mt-8">
            <div className="sm:grid sm:grid-cols-2">
              <div className="flex justify-center mt-4 ">
                <RentComponent index={1} id="1234" type="rent" />
              </div>
              <div className="flex justify-center mt-4">
                <RentComponent index={2} id="1234" type="rent" />
              </div>
              <div className="flex justify-center mt-4">
                <RentComponent index={3} id="1234" type="rent" />
              </div>
              <div className="flex justify-center mt-4">
                <RentComponent index={4} id="1234" type="rent" />
              </div>
              <div className="flex justify-center mt-4 ">
                <RentComponent index={1} id="1234" type="rent" />
              </div>
              <div className="flex justify-center mt-4">
                <RentComponent index={2} id="1234" type="rent" />
              </div>
              <div className="flex justify-center mt-4">
                <RentComponent index={3} id="1234" type="rent" />
              </div>
              <div className="flex justify-center mt-4">
                <RentComponent index={4} id="1234" type="rent" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RentContainer;
