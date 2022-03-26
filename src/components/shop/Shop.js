import React, { useEffect, useState } from 'react';
import Cart from './Cart';
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
        if(!cart.includes(product)){
            setCart([...cart, product]);
        }
    }

    const handleResetCart = () => {
        setCart([]);
        console.log(cart);
    }

    return (
        <div className='container-fluid text-start'>
            <div className='row'>
                <div className='col-md-8 col-12 mb-3'>
                    <div className='row g-2'>
                        {products.map((product) =>  <Product key={product.id} data={product} handleAddToCart={handleAddToCart}></Product>)}
                    </div>
                </div>
                <div className='col-md-4 col-12'>
                    <Cart cart={cart} handleResetCart={handleResetCart}></Cart>
                </div>
            </div>
        </div>
    );
};
export default Shop;
