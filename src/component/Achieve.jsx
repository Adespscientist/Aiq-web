import React from "react";
import { contentData } from "../utils/data/data";
import map from '../utils/assets/heroMapImage.png'
import { color } from "../utils/data/data";
import { Button } from "./Button";
function Achieve() {
  return (
    <div className="flex flex-col items-center mt-[60px] p-4">
     
        <div className="flex items-center justify-center">
        <div className="inline-block  md:flex-row-reverse items-center justify-around">
        <div className="img w-[50%]">
          <img src={map} alt="solution" style={{width:500, borderRadius:20}}/>
        </div>
        <div className="content flex-[.6]">
        <div className="text-[38px] w-[65%] text-left text-[700] mb-[40px]" style={{color: color.primary}}>Achieve your Goals with our Advanced AI Technologies</div>
     
          <p className="mb-[40px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit illum iusto perferendis consequuntur vitae nesciunt, minus sapiente harum dolore.</p>
          <Button title="Our solutions" />
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Achieve;
