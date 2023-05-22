import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';


const SearchForm = () => {
  const [isAnimating, setIsAnimating] = useState(false)
  const navigate = useNavigate()
  const [sarchTerm, setSearchTerm] = useState('')


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false)
    }, 1000);

    return () => clearTimeout(timeout);
  })

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(sarchTerm);

    if (sarchTerm.length > 0) {
      navigate(`/search?query=${sarchTerm}`);
      document.querySelector('input').value = '';
      setSearchTerm('')
    } else {
      // console.log('search for something');
      setIsAnimating(true)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative ${isAnimating ? 'animate-shake' : 'animate-none'} w-full relative`}
    >
      <input
        onChange={handleSearchInput}
        className='input  dark:bg-[#fff] bg-[#f1f1f1]'
        type='text'
        placeholder='Search for a product...'
      />

      <button className='btn btn-accent absolute top-0 right-0 rounded-t1-none rounded-bl-none'>
        <FiSearch navigate className='text-x1' />
      </button>
    </form>
  );
};

export default SearchForm;
