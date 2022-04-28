import React from "react";
import CardImage from "../../../assets/Home4.jpeg";

const SubCard = () => {
  return (
    <div className="md:grid md:grid-cols-5 mt-16">
      <div className="md:col-span-2 homeHeightCol2 ">
        <div className="">
          <div
            className="homeHeightCol2 rounded-md"
            style={{ backgroundImage: `url(${CardImage})` }}
          >
            <div className="homeHeightCol2 bg-white opacity-20"></div>
          </div>
        </div>
      </div>
      <div className="md:col-span-3 flex homeHeightCol2">
        <div className="m-auto">
          <div className="bg-mainDarkBrown h-80 w-80 md:h-96 md:w-96  rounded-md opacity-95">
            <div className="flex justify-center items-center h-80 w-80 md:h-96 md:w-96 text-white text-2xl md:text-4xl font-serif p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incid alor the old familer olfre idunt ut labore
              ellt
            </div>
          </div>
          <div className="bg-mainDarkBrown h-32 w-80 md:h-48 md:w-96 mt-16 rounded-md">
            <div className="flex justify-center items-center h-32 w-80 md:h-48 md:w-96 text-white text-lg md:text-xl AF p-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incid alor the old familer olfre idunt ut labore
              ellt
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCard;
