import React from "react";
import Home from "../../../assets/Home2.jpeg";

const WelcomeImage = () => {
  return (
    <img
      className="w-full h-36 md:max-h-96 md:h-96"
      src={Home}
      alt="home_image"
    />
  );
};

export default WelcomeImage;
