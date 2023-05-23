import React from 'react';
import useFetch from '../hooks/useFetch';
import { FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const CategoryNavMobile = ({ toggle, setCatNavMobile }) => {
  const { data } = useFetch('/categories')

  return <div className='flex flex-wrap h-full w-full bg-primary'>
    <div className='w-full p-4'>
      <div
        onClick={() => toggle()}
        className='flex w-full flex-1 justify-between hover:text-accent '
      >
        <Link to="/">
          <img className='w-[240px] mt-1' src={logo} alt='logo' />
        </Link>

        <FiX className="cursor-pointer w-10 h-10 " />
      </div>


      <div className='flex flex-col mt-5'>
        {data?.map((category) => {
          return <Link
            key={category.id}
            onClick={() => toggle()}
            to={`products/${category.id}`}
            className="hover:text-accent text-2xl py-3 cursor-pointer uppercase"
          >
            {category.attributes.title} Cameras
          </Link>
        })}
      </div>
    </div>
  </div>
    ;
};

export default CategoryNavMobile;
