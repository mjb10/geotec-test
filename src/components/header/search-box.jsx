import React, { useState } from "react";
import './../../styles/header/searchbox.css'
import Button from "../button";

const onclick = (e) => {
    window.location.href = "/items?search="+e
}

const Search_box = (props) => {

    let get = window.location.search.split("=")[1]
    let [Value,SetValue] = useState(get)

    return(
        <div className="searchbox">
            <input 
                id={props.id}
                type={props.type} 
                placeholder={props.placeholder}
                onKeyUp={ (e) => SetValue(e.target.value) }
                defaultValue={get}
            ></input>
            <Button
                type="button"
                onclick={ () => onclick(Value) }
                icon={props.icon}
            />
        </div>
    )
}

export default Search_box