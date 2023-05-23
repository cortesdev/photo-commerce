import React, { useContext } from 'react';
import { FiX } from 'react-icons/fi';
import CartItem from './CartItem'
import CartContext from '../context/CartContext';

const Cart = () => {
  const { setIsOpen, cart, removeFromCart, amount, total } = useContext(CartContext);

  return <div className='flex flex-col  p-4 shadow-xl h-full'>
    <div className='flex justify-between flex-1 flex-row max-h-[40px]'>
      <h1 className='text-4xl h-[30px]'>Cart</h1>

      <div className='w-10 h-10 cursor-pointer hover:text-accent'>
        <FiX className="h-full w-full" onClick={() => setIsOpen(false)} />
      </div>
    </div>

    <div className='flex flex-col overflow-scroll h-[80%]'>

      {cart.map(item => {
        return (
          <div className='flex flex-col'>
            <CartItem removeFromCart={removeFromCart} item={item} key={item.id} />
          </div>
        )
      })}


    </div>
    <div className="mt-auto">

      {cart.length >= 1 &&
        <div className=' flex flex-col'>
          <div className="block">
            <div className="font-semibold flex w-full justify-between">
              <div className="Subtotal">
                Subtotal
              </div>
              € {total}
            </div>
            <div className="font-semibold text-2xl flex w-full justify-between">
              <div className="Total">
                Total
              </div>
              €{total}
            </div>
          </div>
        </div>
      }
    </div>

    <div className="mt-8">
      {cart.length >= 1 ?
        <div className='flex gap-8'>
          <button type="" className="btn btn-accent w-[50%]">keep</button>
          <button type="" className="btn btn-accent w-[50%]">checkout</button>
        </div>
        :
        <div className=" ">
          Your cart is empty
        </div>
      }
    </div>
  </div>
    ;
};

export default Cart;
