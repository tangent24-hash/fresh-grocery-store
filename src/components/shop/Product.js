import React from 'react';

const Product = ({data, handleAddToCart}) => {
    const {id, name, price, image} = data;

    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image} alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                    <button className="btn btn-primary" onClick={() => handleAddToCart(data)}>ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default Product;