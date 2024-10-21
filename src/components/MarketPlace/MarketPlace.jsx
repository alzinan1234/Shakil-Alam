import React from "react";
import ProductSlider from "./ProductSlider";
import "./MarketPlace.css";

const MarketPlace = () => {
  return (
    <div>
      <div className="mt-[10px] ">
        <h3 className=" text-xl md:text-[80px] font-[600] text-center text-[#000] pt-20 uppercase">
          My Market Place
        </h3>
        <div className="divider w-[250px] mx-auto my-1 mt-10 bg-[#EE6A50] h-1"></div>
        <div className="pt-20 maxWidth my-12">
          <ProductSlider />
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
