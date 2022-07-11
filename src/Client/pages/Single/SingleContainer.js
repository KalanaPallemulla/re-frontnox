import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SingleView from "./SingleView";

const SingleContainer = ({ pType }) => {
  return (
    <>
      <Navbar />
      <SingleView />
      <Footer />
    </>
  );
};

export default SingleContainer;
