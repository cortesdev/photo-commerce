import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const CategoryNav = () => {
  const { data } = useFetch('/categories')

  return <div>
    <aside className='dark:bg-primary w-[286px] h-[350px] rounded-[8px] overflow-hidden xl-flex'>
      <div className='bg-accent py-4 text-primary uppercase text-center justify-center font-semibold'>Browse Categories</div>
      <div className='flex flex-col gap-y-6 p-6'>

        {data?.map((category) => {
          return <Link
            key={category.id}
            // onClick={() => toggle()}
            to={`products/${category.id}`}
            className="hover:text-accent text-2xl py-1 cursor-pointer uppercase"
          >
            {category.attributes.title} Cameras
          </Link>
        })}
      </div>
    </aside>
  </div>
    ;
};

export default CategoryNav;
