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

    const handleAddToCart = (product) => {
        if(!cart.includes(product)){
            setCart([...cart, product]);
        }
    }

    const handleResetCart = () => {
        setCart([]);
    }

    return (
        <div className='container-fluid text-start'>
            <div className='row flex-column-reverse flex-md-row g-2'>
                    <div className='col-md-8 col-12 mb-3'>
                        <div className='row g-2'>
                            {products.map((product) =>  <Product key={product.id} data={product} handleAddToCart={handleAddToCart}></Product>)}
                        </div>
                    </div>
                <div className='col-12 col-md-4'>
                    <Cart cart={cart} handleResetCart={handleResetCart}></Cart>
                </div>
            </div>
        </div>
    );
};
export default Shop;
