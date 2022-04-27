import React from "react";
import WelcomeImage from "./components/WelcomeImage";
import HomeTopic from "./components/HomeTopic";
import EstateCard from "./components/EstateCard";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

const HomeContainer = () => {
  return (
    <div className="">
      <WelcomeImage />
      <div>
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
      </div>
    </div>
  );
};

export default HomeContainer;
