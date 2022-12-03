import React from "react";

function Input(props) {
    return (
        <div>
            <input type = {props.type} placeholder = {props.placeHolder} />
        </div>
    )
}

export default Input;