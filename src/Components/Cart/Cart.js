import React from 'react';

const Cart = ({cart}) => {
    return (
        <div className="cart-container">
            <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: $</p>
            <p>Total Shipping Charge: $</p>
            <p>Tax: $</p>
            <h3>Grand Total: $</h3>
            <div className='btn-order'>
                <button><p>Clear Cart</p></button>
                <button><p>Review Order</p></button>
            </div>
        </div>
    );
};

export default Cart;