import React from "react";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div className="max-w-[1560px]">
      <div className="flex flex-col justify-around ">
        <img src="./banner2.jpg" alt="banner " className="h-[450px] object-cover z-10 relative" />
        <span className="font-medium text-5xl z-30 absolute translate-x-[600px] -translate-y-32">
          Crypto Screener
        </span>
        <span className="font-mono text-xl z-30 absolute translate-x-[500px] -translate-y-20   ">
          Get All The Info Regarding Your Favorite Crypto Currency
        </span>
        <Carousel />
      </div>
    </div>
  );
};

export default Banner;
