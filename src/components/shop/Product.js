import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = ({data, handleAddToCart}) => {
    const {name, price, image} = data;

    return (
        <div className='col-md-4 col-12'>
            <div className="card shadow">
                <img className="card-img-top" src={image} style={{height:200}} alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                    <button className="btn btn-outline-success" onClick={() => handleAddToCart(data)}>ADD TO CART <FontAwesomeIcon icon={faCartShopping} /></button>
                </div>
            </div>
        </div>
    );
};

export default Product;