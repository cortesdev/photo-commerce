import React from 'react';
import { FiSearch } from 'react-icons/fi'

const handleSubmit = 8
const isAnimating = true

const SearchForm = () => {
  return (
    <form classNam="relative " onSubmit={handleSubmit}
      className={`${isAnimating ? 'animate-shake' : 'animate-none'} w-full relative`}>
      <input
        // onChange={handleSearch Input}
        className='input'
        type='text'
        placeholder='Search for a product...'
      />

      <button className='btn btn-accent absolute top-0 right-0 rounded-t1-none
    rounded-bl-none'>

        <FiSearch className='text-x1' />
      </button>
    </form>
  );
};

export default SearchForm;
