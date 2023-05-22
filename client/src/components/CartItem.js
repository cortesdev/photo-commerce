import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {

  return <div className='flex p-3'>
    <Link className='max-w-[15%] pr-3' to={`product/${item.id}`}>
      <img
        src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
        alt='product' />
    </Link>

    <h3 className=' w-full'>{item.attributes.title.substring(0, 35)}</h3>

    <div className='text-semibold text-accent '>
      €{item.attributes.price}
    </div>
  </div>;
};

export default CartItem;
