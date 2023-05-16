import React from 'react';

const Cart = ({ setIsOpen }) => {
  return <div>
    Cart

    <div></div>
    <button className='text-white' onClick={() => setIsOpen(false)}>X</button>
  </div>;
};

export default Cart;
