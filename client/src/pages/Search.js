import React from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../hooks/useFetch'
import CategoryNav from '../components/CategoryNav'
import Product from '../components/Product'

const Search = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query')

  // console.log(searchTerm)

  const { data } = useFetch(`/products?populate=*&filters[title][$contains]=${searchTerm}`)

  return (
    <div className="mt-[200px] lg:mt-[150px]">
      <div className='container mx-auto'>
        <div className='md:flex w-full gap-x-[30px]'>
          <div className="hidden md:block">
            <CategoryNav />
          </div>
          <div className="md:flex md:flex-col">

            <div className="text-3xl mb-[30px]">
              {data?.length > 0 ? `${data.length} results for ${searchTerm}` :
                `No results found for ${searchTerm}.`}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-1">
              {data?.map((product) => {
                return (
                  <>
                    <Product product={product} />
                  </>
                )
              })}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Search;
