import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Navigation } from 'swiper';

import Product from '../components/Product'


const ProductSlider = ({ data }) => {
  // console.log(data)
  return <Swiper>
    {data.map((product) => {
      return <SwiperSlide>slide</SwiperSlide>
    })}
  </Swiper>;
};

export default ProductSlider;
