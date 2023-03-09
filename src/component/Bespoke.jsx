import React from "react";
import { contentData } from "../utils/data/data";
import solution from '../utils/assets/solution1.gif'
import { color } from "../utils/data/data";
import { Button } from "./Button";
function Bespoke() {
  return (
    <div className="flex flex-col items-center mt-[60px] p-4">
      <div className="text-[38px] w-[65%] text-center text-[700] mb-[40px]" style={{color: color.primary}}>Aiq is your go to AI company for bespoke and turnkey solutions in the defeence and intelligence industry</div>
     
        <div className="flex justify-center">
        <div className="flex items-center justify-around">
        <div className="img">
          <img src={solution} alt="solution" style={{width:500, height:300, borderRadius:20}}/>
        </div>
        <div className="content flex-[.6]">
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
