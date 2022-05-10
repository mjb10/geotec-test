import React from "react";
import Button from "../button";

const ProductDetail = (props) => {
    return(
        <div id="product_detail">
            <div>
                <h1>{props.title}</h1>
                <h2>Talle: {props.talle}</h2>
            </div>
            <div>
                <div>
                    <img alt="" src={"/products/"+props.img} ></img>
                </div>
                <div>
                    <h1>Descripción</h1>
                    <p className="descripcion">{props.descripcion}.</p>
                    <small className="precio">Precio: ${props.precio}</small>
                    <Button
                        type="button"
                        icon="fa fa-shopping-cart"
                        text="Comprar"
                        className="buy"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductDetail