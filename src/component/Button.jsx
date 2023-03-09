import React, { Component, useEffect } from "react";
import { color } from "../utils/data/data";
export const Button = ({ title, arrow }) => {
  return (
    <div>
      <button
        className="w-[150px] p-3"
        style={{
          color: color.white,
          backgroundColor: color.primary,
          borderRadius: 4,
        }}
      >
        {title}
      </button>
    </div>
  );
};
export const HeroButton = ({ title }) => {
  return (
    <div>
      <button
        className="w-[150px] p-3"
        style={{
          color: color.primary,
          backgroundColor: color.white,
          borderRadius: 4,
        }}
      >
        {title}
      </button>
    </div>
  );
};
