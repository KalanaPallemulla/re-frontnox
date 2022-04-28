import React from "react";
import WelcomeImage from "./components/WelcomeImage";
// import HomeTopic from "./components/HomeTopic";
// import EstateCard from "./components/EstateCard";
// import { ScrollMenu } from "react-horizontal-scrolling-menu";
import SubCard from "./components/SubCard";
import AboutComponent from "./components/AboutComponent";
import SellComponent from "./components/SellComponent";
import RentComponent from "./components/RentComponent";

const HomeContainer = () => {
  return (
    <div className="">
      <WelcomeImage />
      <SubCard />
      <AboutComponent />
      <SellComponent />
      <RentComponent />
      {/* <div className="mt-36">
        <HomeTopic topic="For Rental" />
        <div className="px-2 pt-4">
          <ScrollMenu>
            <EstateCard />
            <EstateCard />
            <EstateCard />
            <EstateCard />
            <EstateCard />
          </ScrollMenu>
        </div>
      </div>
      <div>
        <HomeTopic topic="For Sale" />
        <div className="px-2 pt-4">
          <ScrollMenu>
            <EstateCard />
            <EstateCard />
            <EstateCard />
            <EstateCard />
            <EstateCard />
          </ScrollMenu>
        </div>
      </div> */}
    </div>
  );
};

export default HomeContainer;
