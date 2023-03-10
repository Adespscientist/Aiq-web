import React, { useEffect, useState } from "react";
import logo from "../utils/assets/aiqLogo.png";
import { color, font, links, sizes } from "../utils/data/data";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Button } from "./Button";
import { useGlobalContext } from "../context/ContextProvider";
import SideNavigation from "./SideNavigation";
function Header() {
  const { menuOpen, setMenuOpen, handleMenuClick } = useGlobalContext();
  return (

      <div className="w-full py-4 ">
        <div className="flex items-center justify-between mx-[10px] md:mx-[40px]">
          <div>
            <img
              src={logo}
              alt="logo"
              style={{ width: 120,  objectFit: "contain" }}
            />
          </div>
          <div className="hidden md:flex" style={{ color: color.white }}>
            {links.item1.map((item) => (
              <div key={item.id} className="mx-4">
                <Link to={item.url}>
                  <div>{item.link}</div>
                </Link>
              </div>
            ))}
          </div>
          <div className="hidden md:flex">
            <Button title="Contact us" />
          </div>
          <div
            className="text-[#fff] flex md:hidden"
            style={{ width: 40, fontSize: 30 }}
            onClick={handleMenuClick}
          >
            {!menuOpen ? <AiOutlineMenu /> : <AiOutlineClose />}
          </div>
        </div>
        {menuOpen ? (
          <div className="">
          <SideNavigation />
          </div>
        ): null}
      </div>
  );
}

export default Header;
