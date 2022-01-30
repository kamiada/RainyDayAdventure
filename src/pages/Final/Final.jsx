import React, { Component } from "react";
import endings from "./endings.json";

const checkEnding = (decision) => {
    console.log(decision);
  if (decision === "poison") {
    return endings.endings[1].text;
  }
  if (decision === "helped") {
    return endings.endings[0].text;
  } else return endings.endings[2].text;
};

export const Final = (props) => {
  return (
    <div className="recipeHolder">
      <div className="holder">
        <p className="introduction_text">{checkEnding(props.decision)}</p>
      </div>
    </div>
  );
};

export default Final;
