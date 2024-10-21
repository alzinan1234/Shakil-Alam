import React from "react";
import ProductSlider from "./ProductSlider";

const MarketPlace = () => {
  return (
    <div>
      <div className="mt-[10px] ">
        <h3 className="text-[84px] font-[600] text-center text-[#fff] pt-20">
          My Market Place
        </h3>
        <div className="divider w-[120px] mx-auto my-1 mt-4 bg-[#EE6A50] h-1"></div>
        <div className="pt-20">
          <ProductSlider />
        </div>
      </div>
      <div className="flex justify-between absolute">
        <div className="gradient-rounded-div-left left-[0px] background_color_animation"></div>
        <div className="gradient-rounded-div-right right-[0px] background_color_animation "></div>
      </div>
    </div>
  );
};

export default MarketPlace;
