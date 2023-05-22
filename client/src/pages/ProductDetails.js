import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import RelatedProducts from '../components/RelatedProducts'

const ProductDetails = () => {

  const { id } = useParams()
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`)

  if (!data) {
    return <div className='container mx-auto'>loading... </div>
  }

  return <div className='mb-16 pt-[150px] xl:pt-[200px]'>
    <div className='w-full container mx-auto'>
      <div className='lg:flex lg:flex-row'>

        <img
          src={`
        http://localhost:1337${data[0].attributes.image.data.attributes.url}`
          }
          alt=""
          className='w-full max-w-[55%]'
        />

        <div className=''>
          <div className='text-2xl mb-2 text-accent'> {data[0].attributes.categories.data[0].attributes.title}</div>
          <h2 className='text-3xl mb-2'> {data[0].attributes.title}</h2>
          <p> {data[0].attributes.description}</p>

          <button type=""
            className="bg-accent capitalize text-black mt-5 px-6 py-3 rounded-[8px] font-semibold">
            buy now
          </button>

        </div>

      </div>

      <RelatedProducts />
    </div>

  </div>;
};

export default ProductDetails;
