import React from 'react';
// useFetch Home
import useFetch from '../hooks/useFetch'
import ProductSlider from '../components/ProductSlider'
import LatestProducts from '../components/LatestProducts';
import Hero from '../components/Hero';
import CategoryNav from '../components/CategoryNav';


const Home = () => {

  // console.log('DATA', data)

  return (
    <section className=' '>

      <Hero />
      <LatestProducts />
    </section>
  );
};

export default Home;
