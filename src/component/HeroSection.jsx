import React from "react";
import { color, heroData, sizes } from "../utils/data/data";
import hero from "../utils/assets/heroMapImage.png";
import Button, { HeroButton } from "./Button";
function HeroSection() {
  return (
   <div className="items-center flex justify-around mx-[40px]">
    <div className="w-full md:w-[40%]">
        <div className="text-[20px] md:text-[50px] my-4"style={{color:color.white}}>We are Africa first defence and intelligence focused AI company.</div>
        <HeroButton title="Explore"/>
    </div>
    <div>
        <img src={hero} alt="HeroBg" />
    </div>
   </div>
  );
}

export default HeroSection;
