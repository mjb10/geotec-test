import React from "react";
import Product from './products/product'
import './../styles/products.css'
import DB from './../db.json'

const Products = () => {   

    let get = window.location.search.split("=")[1]
    let lowercase = get !== undefined ? get.toLowerCase() : undefined

    let ProductsFilter = DB.filter(item => item.title.toLowerCase().includes( lowercase ) );

    return(
        <div id="products" className={get == null ? "none section" : "section"} >
            {
                ProductsFilter.map(product => {
                    return(
                        <Product 
                            title={product.title} 
                            talle={product.talle}
                            precio={product.precio}
                            descripcion={product.descripcion_corta}
                            img={product.img}
                            id={product.id}
                            key={product.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default Products