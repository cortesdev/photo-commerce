import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import RelatedProducts from '../components/RelatedProducts'
import CartContext from '../context/CartContext';

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext)
  const { id } = useParams()
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`)

  if (!data) {
    return <div className='container mx-auto'>loading... </div>
  }

  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;

  return <div className='mb-16 pt-[200px] md:pt-[200px]'>
    <div className='w-full container mx-auto'>
      <div className='lg:flex lg:flex-row gap-x-8'>
        <div className='grad rounded-lg flex justify-center items-center'>
          <img
            src={`
        http://localhost:1337${data[0].attributes.image.data.attributes.url}`
            }
            alt=""
            className='w-full max-w-[65%]'
          />
        </div>

        <div className='dark:bg-primary rounded-lg justify-center items-center p-5'>
          <div className='text-2xl uppercase mb-2 text-accent'>{data[0].attributes.categories.data[0].attributes.title}</div>
          <h2 className='text-3xl my-4'>{data[0].attributes.title}</h2>
          <p>{data[0].attributes.description}</p>

          <div className="flex gap-x-8 items-center mt-8">
            <div className='text-3xl text-accent font-semibold'>€{data[0].attributes.price}</div>

            <button
              onClick={() => addToCart(data, id)}
              type=""
              className="btn btn-accent ">
              Add to cart
            </button>
          </div>

        </div>

      </div>

      <RelatedProducts categoryTitle={categoryTitle} />
    </div>

  </div>;
};

export default ProductDetails;
