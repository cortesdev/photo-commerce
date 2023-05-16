import React from 'react'
import { Link } from 'react-router-dom'
import '../slider.css'

const Product = ({ product }) => {
  // console.log(product)

  return (
    <Link to={`/product/${product.id}`}>
      <div className='grad w-full rounded-[8px] overflow-hidden h-[362px] group'>
        <div className='w-full h-[200px] flex items-center justify-center relative'>
          <div className='absolute rounded-full z-10 text-[12px] px-2 right-2 top-2 bg-accent text-black'>New</div>
          <img
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt=""
            className="w-[160px] h-[160px] group-hover:scale-90"
          />
        </div>

        <div className='px-6 pb-8 flex flex-col'>
          <div className="text-sm text-accent capitalize mb-2">
            {product.attributes.categories.data[0].attributes.title}
          </div>
          <div className="text-[15px] mb-4 lg:mb-9">
            {product.attributes.title.substring(0, 35)}...
          </div>
          <div className="text-lg text-accent">
            €{product.attributes.price}
          </div>

        </div>
      </div>
    </Link>);
};

export default Product;
