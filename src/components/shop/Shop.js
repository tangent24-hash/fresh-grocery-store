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
        if(!cart.includes(product)){
            setCart([...cart, product]);
        }
    }

    const handleResetCart = () => {
        setCart([]);
        console.log(cart);
    }
    
    return (
        <div className='container-fluid bg-light'>
            <div className='row'>
                <div className='col-md-8 col-sm-12'>
                    <div className='row'>
                        {products.map((product) =>  <Product key={product.id} data={product} handleAddToCart={handleAddToCart}></Product>)}
                    </div>
                </div>
                <div className='col-md-4 col-sm-12'>
                    
                </div>
            </div>
        </div>
    );
};
export default Shop;
