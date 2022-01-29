import React, { Component } from "react";
import "./components.scss";

const ClickableTextChoice = (props)  => {
    return (
        <div>
            <button className="choice_button " onClick={props.onClick}>
            {props.choice}
            </button>
        </div>
    )
}
export default ClickableTextChoice;