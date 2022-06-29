import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FilterSection from "./components/FilterSection";
import SellComponent from "./components/SellComponent";

const SellContainer = () => {
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
                <SellComponent index={1} id="9876" type="sell" />
              </div>
              <div className="flex justify-center mt-4">
                <SellComponent index={2} id="9876" type="sell" />
              </div>
              <div className="flex justify-center mt-4">
                <SellComponent index={3} id="9876" type="sell" />
              </div>
              <div className="flex justify-center mt-4">
                <SellComponent index={4} id="9876" type="sell" />
              </div>
              <div className="flex justify-center mt-4 ">
                <SellComponent index={1} id="9876" type="sell" />
              </div>
              <div className="flex justify-center mt-4">
                <SellComponent index={2} id="9876" type="sell" />
              </div>
              <div className="flex justify-center mt-4">
                <SellComponent index={3} id="9876" type="sell" />
              </div>
              <div className="flex justify-center mt-4">
                <SellComponent index={4} id="9876" type="sell" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SellContainer;
