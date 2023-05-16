import React from 'react';
import ProductSlider from './ProductSlider';
import useFetch from '../hooks/useFetch';

const LatestProducts = () => {
  const { data } = useFetch('/products?populate=*&filters[isNew]=true')
  return (
    <section className='mb-16'>

      <div className='container mx-auto'>
        <h2 className='h2 mb-6 text-center x1:text-left'>Latest Products</h2>
      </div>

      <ProductSlider data={data} />
    </section>
  );
};

export default LatestProducts;
