import React from 'react';
import useFetch from '../hooks/useFetch';
import PorductSlider from './ProductSlider'
const RelatedProducts = ({ categoryTitle }) => {

  const { data } = useFetch(
    `/products?populate=*&filters[categories][title]=${categoryTitle}`
  )

  return <div className='mb-16'>
    <div className='container mx-auto'>
      <h2 className='text-3xl py-5 text-center xl:text-left'>
        Related Products
      </h2>

      <PorductSlider data={data} />
    </div>
  </div>
    ;
};

export default RelatedProducts;
