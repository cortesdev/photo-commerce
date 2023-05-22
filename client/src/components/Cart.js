import React, { useContext } from 'react';
import { FiX } from 'react-icons/fi';
import CartItem from './CartItem'
import CartContext from '../context/CartContext';

const Cart = () => {
  const { setIsOpen, cart, removeFromCart, amount } = useContext(CartContext);

  return <div className=' p-4  shadow-xl'>
    <div className='flex justify-between flex-1 flex-row'>

      <h1 className='text-4xl'> Cart</h1>

      <div className='w-10 h-10 cursor-pointer hover:text-accent'>
        <FiX className="h-full w-full" onClick={() => setIsOpen(false)} />
      </div>
    </div>

    <div className='flex flex-col'>

      {cart.map(item => {
        return (
          <div className='flex flex-col'>
            <CartItem removeFromCart={removeFromCart} item={item} key={item.id} />
          </div>
        )
      })}

    </div>
  </div>
    ;
};

export default Cart;
