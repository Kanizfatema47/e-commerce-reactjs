import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,img,price,ratings} =props.product
    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <p><strong>Name:</strong>{name}</p>
            <p><strong>Price:</strong> ${price}</p>
            <h5><strong>Ratings:</strong>{ratings}</h5>
            <button onClick={()=>props.handleCart(props.product)} className='button'>Add to cart</button>
        </div>
    );
};

export default Product;