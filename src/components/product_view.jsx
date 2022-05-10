import React from "react";
import Button from './button'
import ProductDetail from "./single_product/product_detail";
import DB from './../db.json'
import './../styles/single_product/product_detail.css'

const ProductView = (props) => {

    let product = props.id == null ? {} : DB[props.id]

    const onclick = () => {
        window.location.href = "/"
    }

    return(
        <div id="product_detail_div" className={props.id == null ? "none" : "section"}>
            <div>
                <Button 
                    icon="fa fa-arrow-left"
                    className="backButton"
                    onclick={onclick}
                />
                <ProductDetail 
                    title={product.title}
                    talle={product.talle}
                    descripcion={product.descripcion}
                    precio={product.precio}
                    img={product.img}
                />
            </div>
        </div>
    )
}

export default ProductView