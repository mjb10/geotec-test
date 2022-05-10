import React from "react";
import './../../styles/products/product.css'
import Button from "../button";

const onclick = (id) => {
    window.location.href="/items/:"+id
}

const Product = (props) => {
    return(
        <div className="product">
            <div>
                <div>
                    <h1>{props.title}</h1>
                    <h2>Talle: {props.talle} - {props.precio}</h2>
                </div>
                <div>
                    <img alt="" src={"/products/"+props.img} />
                </div>
            </div>
            <div>
                <div>
                    <p>{props.descripcion}</p>
                </div>
            </div>
            <div>
                <Button 
                    type="button" 
                    text="Ver Detalle" 
                    onclick={ () => onclick(props.id) } 
                />
            </div>
        </div>
    )
}

export default Product