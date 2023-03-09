import React from "react";
import { color, links } from "../utils/data/data";
function SideNavigation() {
  return (
    <div className="flex-col">
        <div className="p-4 h-[100vw]" style={{backgroundColor: color.secondary, color:color.white}}>
      {links.item1.map((item) => (
        <div key={item.id} className="mx-2 py-3 px-2" >
          <div>{item.link}</div>
        </div>
      ))}
      {links.item2.map((item) => (
        <div key={item.id} className="mx-2 py-3 px-2">
          <div>{item.link}</div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default SideNavigation;
