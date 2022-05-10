import React from "react";

const Button = (props) => {
    return(
        <button 
            type={props.type}
            className={props.className}
            onClick={props.onclick}
            id={props.id}
        >
            <i className={props.icon} ></i>
            {props.text}
        </button>
    )
}

export default Button