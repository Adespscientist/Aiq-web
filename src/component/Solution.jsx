import React from "react";
import { contentData } from "../utils/data/data";
import map from '../utils/assets/heroMapImage.png'
import { color } from "../utils/data/data";
import { Button } from "./Button";
function Solution() {
  return (
    <div className="flex flex-col items-center mt-[60px] p-4">
     
        <div className="flex  justify-center">
        <div className="flex  items-center justify-around">
        <div className="img">
          <img src={map} alt="solution" style={{width:500, height:500, borderRadius:20}}/>
        </div>
        <div className="content flex-[.6]">
        <div className="text-[38px] w-[65%] text-left text-[700] mb-[40px]" style={{color: color.primary}}>Customized AI solutions for unique challenges</div>
     
          <p className="mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit illum iusto perferendis consequuntur vitae nesciunt, minus sapiente harum dolore.</p>
          <p className="mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit illum iusto perferendis consequuntur vitae nesciunt, minus sapiente harum dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates assumenda ipsum cum quam eveniet modi perspiciatis ex quasi iste laboriosam.</p>
          <Button title="Our solutions" />
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Solution;
