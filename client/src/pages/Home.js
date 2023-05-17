import React from 'react';
import Hero from '../components/Hero';
import LatestProducts from '../components/LatestProducts';
import Professionals from '../components/Professionals';


const Home = () => {
  return (
    <section>
      <Hero />
      <LatestProducts />
      <Professionals />
    </section>
  );
};

export default Home;
