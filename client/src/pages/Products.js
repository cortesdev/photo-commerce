import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Product from '../components/Product';
import useFetch from '../hooks/useFetch';
import CategoryNav from '../components/CategoryNav';

const Products = () => {
  const { data } = useFetch('/products?populate=*')

  return <div className="mt-[200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-1">
    <div className="text-3xl">
      Products
    </div>

    <div className="hidden md:block">
      <CategoryNav />
    </div>

    {data?.map((product) => {
      return <>
        <Product product={product} />
      </>
    })}
  </div>;
};

export default Products;
