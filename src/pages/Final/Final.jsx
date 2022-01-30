import React, { Component } from "react";

const checkEnding = (decision) => {
    if(decision === 'poison') {
        return 'you evil motherfucker';
    }
    if(decision === 'helped') {
        return 'Mother Theresa';
    }
    else return 'He had diarrhea';
};


export const Final = (props)  => {
    return (
        <div>
            {checkEnding(props.decision)}
        </div>
    )
}

export default Final;