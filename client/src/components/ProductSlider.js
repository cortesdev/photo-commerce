import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper';

import Product from '../components/Product'


const ProductSlider = ({ data }) => {
  // console.log(data)
  return <Swiper modules={[Pagination, Navigation]} loop={false} navigation
    pagination={{
      clickable: true
    }}
    className='productSlider mx-auto max-w-[360px] md:max-w-full xl:max-w-[1410px]'
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    }}
  >
    {data?.map((product) => {
      return <SwiperSlide key={product.id}>
        <Product product={product} />
      </SwiperSlide>
    })}
  </Swiper>;
};

export default ProductSlider;
