import React from 'react';

const Questions = () => {
    return (
        <div className='container-fluid'>
            <div className='mb-3 mt-2 row'>
                <div className='col-12 col-md-6'>
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title">How react works?</h5>
                            <p className="card-text"> React implements a virtual DOM. And it is basically a DOM tree 
                            representation in JavaScript. So when it needs to read or write to the DOM, it will 
                            use the virtual representation of the browser DOM. Virtual DOM helps in minimizing the actual changes on browser DOM.
                            Then the virtual DOM will try to find the most efficient way to update the browser's DOM using diff algorithm.</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-6'>
                    <div className="card shadow">
                        <div className="card-body">
                            <h5 className="card-title">What are the differences between props and state?</h5>
                            <h6 className='card-text'>State:</h6>
                            <p className="card-text">State is used to contain data or information in a 
                            component. A state can be changed. The state is a kind of local data storage. And it is local to the component</p>
                            <h6 className='card-text'>Props:</h6>
                            <p className="card-text">Props are read-only. We can't change them like a state. Props allow passing data from one 
                            component to another component as an argument.</p>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    );
};

export default Questions;