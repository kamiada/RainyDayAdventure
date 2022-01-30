import React, { Component } from "react";
import endings from "./endings.json";


export const BadEnding = (props) => {
  return (
    <div className="recipeHolder">
      <div className="holder">
        <p className="introduction_text">{endings.endings[1].text}</p>
      </div>
    </div>
  );
};

export default BadEnding;