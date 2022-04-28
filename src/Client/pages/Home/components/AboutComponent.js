import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

const AboutComponent = () => {
  return (
    <div className="md:mt-16">
      <div className="md:grid md:grid-cols-3">
        <div></div>
        <div className="h-16 bg-mainDarkBrown col-span-2 rounded-sm">
          <div className="flex items-center h-16 px-4 text-2xl md:text-4xl font-serif text-white ">
            Why we are{" "}
            <BsFillCaretDownFill className=" text-2xl md:text-4xl ml-4" />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="md:grid md:grid-cols-3 mt-4 md:mt-0 ">
          <div className="flex abCardHeight ">
            <div className="m-auto">
              <div className="h-48 md:w-96 w-72 border border-mainLightBrown flex items-center justify-center text-left rounded-md bg-mainLightBrown  text-lg AF text-white p-8 hover:scale-110  transition-all">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incid alor the old familer olfre idunt ut labore
                ellt
              </div>
            </div>
          </div>
          <div className="flex abCardHeight ">
            <div className="m-auto">
              <div className="h-48 md:w-96 w-72 border border-mainLightBrown flex items-center justify-center text-left rounded-md bg-mainLightBrown  text-lg AF text-white p-8 hover:scale-110 transition-all">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incid alor the old familer olfre idunt ut labore
                ellt
              </div>
            </div>
          </div>
          <div className="flex abCardHeight ">
            <div className="m-auto">
              <div className="h-48 md:w-96 w-72 border border-mainLightBrown flex items-center justify-center text-left rounded-md bg-mainLightBrown  text-lg AF text-white p-8 hover:scale-110 transition-all">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incid alor the old familer olfre idunt ut labore
                ellt
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <div className="md:grid md:grid-cols-3 mt-4 md:mt-0 ">
          <div className="flex  abCardHeight2 ">
            <div className="m-auto">
              <div className="h-48 md:w-96 w-72 border border-mainLightBrown flex items-center justify-center text-left rounded-md bg-mainLightBrown  text-lg AF text-white p-8 hover:scale-110 transition-all">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incid alor the old familer olfre idunt ut labore
                ellt
              </div>
            </div>
          </div>
          <div className="flex  abCardHeight2 ">
            <div className="m-auto">
              <div className="h-48 md:w-96 w-72 border border-mainLightBrown flex items-center justify-center text-left rounded-md bg-mainLightBrown  text-lg AF text-white p-8 hover:scale-110 transition-all">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incid alor the old familer olfre idunt ut labore
                ellt
              </div>
            </div>
          </div>
          <div className="flex  abCardHeight2 ">
            <div className="m-auto">
              <div className="h-48 md:w-96 w-72 border border-mainLightBrown flex items-center justify-center text-left rounded-md bg-mainLightBrown  text-lg AF text-white p-8 hover:scale-110 transition-all">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incid alor the old familer olfre idunt ut labore
                ellt
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
