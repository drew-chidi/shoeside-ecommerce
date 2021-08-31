import React from 'react'
import classes from './Products.module.css';

const Products = ({data}) => {
    return (
        <div className={classes.products_container}>
            <div className={classes.products_heading}>
                <h2>Browse All Products</h2>

                <div className={classes.products_wrapper}>
                    {data.map((product, index)=>{
                        return(
                            <div className={classes.products_card} key={index}>
                                
                                <img className={classes.products_image} src={product.img} alt={product.alt} />
                                <div className={classes.product_info}>
                                    <div className={classes.product_name}>{product.name}</div>
                                    <div className={classes.product_desc}>{product.desc}</div>
                                    <div className={classes.product_price}>{product.price}</div>
                                    <button className={classes.product_button}>{product.button}</button>
                                </div>
                                
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Products
