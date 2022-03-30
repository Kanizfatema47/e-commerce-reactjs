import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,img,price,ratings} =props.product
    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <p><strong>Name:</strong>{name}</p>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Ratings:</strong>{ratings}</p>
        </div>
    );
};

export default Product;