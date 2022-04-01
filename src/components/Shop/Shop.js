import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products ,setProducts] =useState([])
    const[cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])

    const handleAddToCart=(product) =>{
        // console.log(product)
        // console.log(product.id);
        const newCart =[...cart, product]
        setCart(newCart)
        console.log(newCart);

    }
    return (
        <div>
            <h3>This is Product</h3>
            <div  className='shop'>
           <div className='products-container'>
               
               {
                   products.map(product => <Product 
                    key={product.id}
                    product ={product}
                    handleCart ={handleAddToCart}
                    >
                       
                   </Product>)
               }

           </div>
           <div className='cart-container'>
              <Cart cart ={cart}
              ></Cart>
               
           </div>
           </div>
        </div>
    );
};

export default Shop;