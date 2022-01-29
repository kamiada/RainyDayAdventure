import React from "react";
import "./components.scss";

const MenuButton = (props) => {
  return (
    <div className="button_holder">
      <button className="menuButton" onClick={props.func}>
        {props.title}
      </button>
    </div>
  );
};

export default MenuButton;
