import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

const Qty = ({ item }) => {
  const { removeFromCart, handleInput } = useContext(CartContext);

  return <>
    {item.amount > 10 ?
      <select
        className='text-primary placeholder:text-primary h-12 rounded-md p-4 w-[120px] outline-accent'
        value={item.amount}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </select>
      :
      <input
        onClick={(e) => handleInput(e, item.id)}
        className='text-primary placeholder:text-primary h-12 rounded-md p-4 w-[120px] outline-accent'
        type='text'
        placeholder={`${item.amount}`}
      />
    }
  </>;
};

export default Qty;
