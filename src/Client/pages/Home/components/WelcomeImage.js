import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Home from "../../../assets/Home5.jpeg";

const WelcomeImage = () => {
  return (
    <div className="md:grid md:grid-cols-2  ">
      <div className="flex homeHeightCol2">
        <div className="m-auto md:px-24 p-12">
          <h1 className="text-md text-mainLightBrown AF">
            Find your best home
          </h1>
          <h1 className="text-6xl text-mainLightBrown font-serif mt-2">
            Discover Your Next Home
          </h1>
          <h1 className="text-md mt-2 AF text-gray-700">
            Whether your're looking to buy, rent or sell in Sri Lanka, you've
            come to right place....
          </h1>
          <h1 className="mt-16 text-xl AF text-mainLightBlue flex items-center hover:text-mainDarkBlue">
            LET'S DISCOVER
            <AiOutlineDoubleRight className=" ml-4 text-xl" />
          </h1>
        </div>
      </div>
      <div
        className="homeHeightCol2"
        style={{
          backgroundImage: `url(${Home})`,
          backgroundSize: "absolute",
        }}
      >
        <div className="AF text-gray-600 md:text-gray-700 bg-white flex homeHeightCol2 opacity-75 md:opacity-50">
          <div className="m-auto p-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incid alor the old familer olfre idunt ut labore
            ellt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incid alor the old familer olfre idunt ut labore
            ellt.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeImage;
