import React from "react";
import WelcomeImage from "./components/WelcomeImage";
// import HomeTopic from "./components/HomeTopic";
// import EstateCard from "./components/EstateCard";
// import { ScrollMenu } from "react-horizontal-scrolling-menu";
import SubCard from "./components/SubCard";
import AboutComponent from "./components/AboutComponent";
import SellComponent from "./components/SellComponent";
import RentComponent from "./components/RentComponent";
import Footer from "../../components/Footer";

const HomeContainer = () => {
  return (
    <div className="">
      <WelcomeImage />
      <SubCard />
      <AboutComponent />
      <div className="bg-brown-50">
        <SellComponent />
        <RentComponent />{" "}
      </div>
      <Footer />
    </div>
  );
};

export default HomeContainer;
