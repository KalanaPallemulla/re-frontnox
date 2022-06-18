import React, { useState } from "react";
import Home from "../../../assets/Home3.jpeg";

const RentComponent = ({ index }) => {
  const [show, setShow] = useState(false);
  let green = "border-green-500";
  let blue = "border-blue-500";
  let red = "border-red-500";
  let purple = "border-purple-500";
  let color;

  if (index % 4 === 0) {
    color = green;
  } else if (index % 4 === 1) {
    color = blue;
  } else if (index % 4 === 2) {
    color = red;
  } else if (index % 4 === 3) {
    color = purple;
  }

  return (
    <div className="p-1">
      <div
        className={`h-72 w-96 rounded-md  ${color} hover:scale-110 transition-transform border-b-4 `}
        style={{ backgroundImage: `url(${Home})` }}
      >
        <div className="absolute ">
          <div className="p-4">
            <div className="text-white text-3xl">Nugegoda</div>
            <div className="text-white text-sm">Address</div>
            <button className="bg-mainLightBrown text-lg AF rounded-full text-white py-1 px-2">
              150,000,000 LKR
            </button>
          </div>
          <div className="text-gray-500 text-sm w-96 h-72 opacity-0 hover:opacity-100 p-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentComponent;
