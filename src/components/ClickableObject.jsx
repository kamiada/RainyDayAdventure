import React, { Component } from "react";
import "./components.scss";

export const ClickableObject = (props)  => {
    return (
        <div>
            <button id={props.id } className="object" onClick={props.onClick}>
            <img  src={props.thisIs} />
            </button>
        </div>
    )
}

export default ClickableObject;