import React, { Component } from "react";
import endings from "./endings.json";


export const GoodEnding = (props) => {
  return (
    <div className="recipeHolder">
      <div className="holder">
        <p className="introduction_text">{endings.endings[0].text}</p>
      </div>
    </div>
  );
};

export default GoodEnding;