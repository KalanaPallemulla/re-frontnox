import React from "react";
import { Link } from "react-router-dom";
import Home from "../../../assets/Home3.jpeg";

const RentComponent = ({ index, id, type }) => {
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
  console.log(id);

  return (
    <Link className="cursor-pointer" to={`/add-component/${type}=${id}`}>
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
            <div className="px-4">
              <div className="text-sm w-40 h-30 p-4 bg-white rounded-lg opacity-75">
                <h1 className="text-gray-800 AF text-md">
                  Size : <span className="text-gray-700">10 Purchase</span>
                </h1>
                <h1 className="text-gray-800 AF text-md">
                  Beds : <span className="text-gray-700">2</span>
                </h1>
                <h1 className="text-gray-800 AF text-md">
                  Bath : <span className="text-gray-700">1</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RentComponent;
