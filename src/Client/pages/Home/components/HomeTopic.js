import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";

const HomeTopic = ({ topic }) => {
  return (
    <div className=" flex items-center AF text-2xl font-bold text-mainLightBrown pt-4 pl-8">
      {topic}{" "}
      <AiOutlineDoubleRight className=" ml-4 text-mainLightBrown text-2xl" />
    </div>
  );
};

export default HomeTopic;
