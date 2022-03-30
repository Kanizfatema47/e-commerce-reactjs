import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products ,setProducts] =useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])
    return (
        <div>
            <h3>This is Product</h3>
            <div  className='shop'>
           <div className='products-container'>
               
               {
                   products.map(product => <Product 
                    key={product.id}
                    product ={product}
                    >
                       
                   </Product>)
               }

           </div>
           <div className='cart-container'>
               <h4>Order Summary</h4>
           </div>
           </div>
        </div>
    );
};

export default Shop;