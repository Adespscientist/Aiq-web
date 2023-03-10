import React from "react";
import { contentData } from "../utils/data/data";
import solution from '../utils/assets/solution1.gif'
import { color } from "../utils/data/data";
import { Button } from "./Button";
function Bespoke() {
  return (
    <div className="flex flex-col items-center mt-[30px] md:mt-[60px] p-4 justify-center">
      <div className="text-[20px] md:text-[38px] w-full md:w-[65%] text-center text-[700] mb-[40px]" style={{color: color.primary}}>Aiq is your go to AI company for bespoke and turnkey solutions in the defeence and intelligence industry</div>
     
        <div className="flex items-center justify-center ">
        <div className="flex flex-col md:flex-row  md:justify-around">
        <div className="img">
          <img src={solution} alt="solution w-[200px] h-[100px] md:w-[400px] md:h-[300px]" style={{width:400, height:300, borderRadius:20}}/>
        </div>
        <div className="w-full md:w-[50%] content mt-5 items-center ">
          <h1 className="font-bold mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, perspiciatis.</h1>
          <p className="mb-[40px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit illum iusto perferendis consequuntur vitae nesciunt, minus sapiente harum dolore.</p>
          <Button title="Our solutions" />
        </div>
      </div>
      </div>
      </div>
  );
}

export default Bespoke;
