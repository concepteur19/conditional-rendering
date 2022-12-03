import React from "react";

function Button(props) {
    return (
        <div>
            <button type={ props.types }>Login</button>
        </div>
    )
}

export default Button;