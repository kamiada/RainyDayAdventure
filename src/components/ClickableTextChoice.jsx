import React, { Component } from "react";
import "./components.scss";

const ClickableTextChoice = (props)  => {
    return (
        <div>
            <button>
            {props.choice}
            </button>
        </div>
    )
}
export default ClickableTextChoice;