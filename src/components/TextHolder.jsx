import React, { Component } from "react";
import "./components.scss";

export const TextHolder = (props) => {
  return (
    <div className="holder">
      <div className="introduction_text">{props.intro_tex}
      </div>;
    </div>
  );
};
export default TextHolder;
