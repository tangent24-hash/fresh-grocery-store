import React, { useEffect, useState } from 'react';
import Product from './Product';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('store_data.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    console.log('products', products);
    console.log('cart', cart);
    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    }
    const handleResetCart = () => {
        setCart([]);
        console.log(cart);
    }
    return (
        <div className='container bg-light'>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='md-row-col-3'>
                        {products.map((product) =>  <Product key={product.id} data={product} handleAddToCart={handleAddToCart}></Product>)}
                    </div>
                </div>
                <div className='col-md-4'>
                    
                </div>
            </div>
        </div>
    );
};
export default Shop;
