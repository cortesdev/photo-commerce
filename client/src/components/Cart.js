import React from 'react';
import { FiX } from 'react-icons/fi';

const Cart = ({ setIsOpen }) => {
  return <div className='flex justify-between flex-1 p-4  shadow-xl'>
    <h1 className='text-4xl'> Cart</h1>

    <div className='w-10 h-10 cursor-pointer hover:text-accent'>
      <FiX className="h-full w-full" onClick={() => setIsOpen(false)} />
    </div>
  </div>;
};

export default Cart;
