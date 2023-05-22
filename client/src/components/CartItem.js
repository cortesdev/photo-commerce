import React from 'react';
import { Link } from 'react-router-dom';
import Qty from './Qty'
import { IoIosClose } from 'react-icons/io'

const CartItem = ({ item, removeFromCart }) => {

  return <div className='flex p-3'>
    <Link className='max-w-[15%] pr-3' to={`product/${item.id}`}>
      <img
        src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
        alt='product' />
    </Link>

    <div className="">
      <Link to={`product/${item.id}`}>
        {item.attributes.title.substring(0, 28) + '...'}
      </Link>

      <div className="" onClick={() => removeFromCart(item.id)}>
        <IoIosClose />
      </div>
    </div>

    <div className='flex items-center gap-x-12 '>

      <div className='flex'>
        <Qty item={item} />

        <div className='flex items-center gap-x-4 text-semibold text-accent '>
          €{item.attributes.price}
        </div>
      </div>
    </div>

  </div>;
};

export default CartItem;
