import React, { useState } from 'react';

const Cart = ({cart, handleResetCart}) => {
    const [chosenItem, setChosenItem] = useState({})

    const randomSelector = () => {
        if(cart.length){
            const index = Math.floor(Math.random() * cart.length);
            setChosenItem(cart[index])
        }
    }

    const showChosenItem = () => {
        if (cart.length){
            if(chosenItem.name){
                return (
                    <div> 
                        <h4 className='card-subtitle'>We've chosen:</h4>
                        <li className="list-group-item border-0 text-muted"><img className='rounded-circle border border-1 me-2' style={{height: 50, width: 50}} src={chosenItem?.image} alt={chosenItem?.name}/> {chosenItem?.name}</li>
                    </div> 
                    );
            }
        }
        else if((!cart.length) && chosenItem.name) {
            setChosenItem({})
        }
    }

    return (
        <div className='container-fluid'>
            <div className="card shadow">
                <div className="card-body">
                    {showChosenItem()}
                    <h5 className="card-title">Selected items:</h5>
                    <ul className="list-group list-group-flush mb-2">
                        {cart.map((cartItem) => <li className="list-group-item text-muted" key={cartItem.id}><img className='rounded-circle border border-1 me-2' style={{height: 50, width: 50}} src={cartItem.image} alt={cartItem.name}/> {cartItem.name}</li>)}
                    </ul>

                    <button className="btn btn-outline-success mb-2" onClick={() => randomSelector()}>Choose 1 for me</button>
                    <br></br>
                    <button className="btn btn-outline-danger" onClick={() => handleResetCart()}>Choose again</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Cart;