import React from 'react';
// useFetch Home

import useFetch from '../hooks/useFetch'
const Home = () => {
  const { data } = useFetch('/products?populate=*')


  console.log('DATA', data)

  return <div>Home</div>;
};

export default Home;
