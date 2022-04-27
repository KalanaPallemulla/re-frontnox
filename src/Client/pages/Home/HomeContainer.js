import React from "react";
import WelcomeImage from "./components/WelcomeImage";
import HomeTopic from "./components/HomeTopic";

const HomeContainer = () => {
  return (
    <div className="">
      <WelcomeImage />
      <div>
        <HomeTopic topic="For Rentals" />
      </div>
    </div>
  );
};

export default HomeContainer;
