import React from "react";
import SearchBox from "./header/search-box";
import './../styles/header.css'

const Header = () => {
    return(
        <header>
            <SearchBox 
                id="searchbox"
                type={"text"} 
                placeholder="Buscar un producto" 
                icon="fa fa-search"
            />
        </header>
    )
}

export default Header