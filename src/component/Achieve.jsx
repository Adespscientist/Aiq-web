import React from "react";
import { contentData } from "../utils/data/data";
import map from '../utils/assets/heroMapImage.png'
import { color } from "../utils/data/data";
import { Button } from "./Button";
function Achieve() {
  return (
    <div className="flex flex-col items-center mt-[60px] p-4">
     
        <div className="flex items-center justify-center">
        <div className="flex flex-col  md:flex-row-reverse items-center justify-around">
        <div className="img">
          <img src={map} alt="solution" style={{width:500, borderRadius:20}}/>
        </div>
        <div className="content flex-[.6]">
        <div className="text-[25px] md:text-[38px] text-center w-full md:w-[100%] md:text-left text-[700] my-[20px] md:my-[40px]" style={{color: color.primary}}>Achieve your Goals with our Advanced AI Technologies</div>
     
          <p className="mb-[40px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit illum iusto perferendis consequuntur vitae nesciunt, minus sapiente harum dolore.</p>
          <Button title="Our solutions" />
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Achieve;
