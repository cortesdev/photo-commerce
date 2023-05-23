import React from 'react';
import { Link } from 'react-router-dom';
import Qty from './Qty'
import { IoIosTrash } from 'react-icons/io'

const CartItem = ({ item, removeFromCart }) => {

  return <div className='flex flex-row py-3 px-1 align-center'>


    <Link className='max-w-[20%] pr-2 self-start' to={`product/${item.id}`}>
      <img
        src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
        alt='product' />
    </Link>


    <div className='flex flex-col gap-x-12 '>
      <div className='flex flex-row items-center gap-x-12 font-semibold mb-2'>
        <Link to={`product/${item.id}`}>
          {item.attributes.title.substring(0, 28) + '...'}
        </Link>

        <div className="" onClick={() => removeFromCart(item.id)}>
          <IoIosTrash />
        </div>
      </div>

      <div className='flex flex-row gap-x-4 '>
        <Qty item={item} />

        <div className='text-semibold text-accent '>
          €{item.attributes.price * item.amount}
        </div>
      </div>
      <small className='text-accent font-semibold mt-2'>
        €{item.attributes.price} per piece
      </small>
    </div>
  </div>;
};

export default CartItem;
