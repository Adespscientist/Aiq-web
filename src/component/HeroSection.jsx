import React from "react";
import { color, heroData, sizes } from "../utils/data/data";
import hero from "../utils/assets/heroMapImage.png";
import Button, { HeroButton } from "./Button";
function HeroSection() {
  return (
   <div className="hero__container items-center flex justify-around mx-3 md:mx-[40px] gap-10 ">
    <div className="frame w-full lg:w-[50%]">
      <div className="p-1 m-1 md:p-4 md:m-4">
        <div className="text-[16px] md:text-[40px] my-1"style={{color:color.white}}>We are Africa first defence and intelligence focused AI company.</div>
        <HeroButton title="Explore"/>
    </div>
    </div>
    <div>
        <img src={hero} alt="HeroBg" className="image flex-[.4] w-[70%] md:w-full" />
    </div>
   </div>
  );
}

export default HeroSection;
