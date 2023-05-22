import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import useFetch from '../hooks/useFetch';
import CategoryNav from '../components/CategoryNav';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { id } = useParams();

  // console.log(id)

  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}`
  )

  // console.log(data)


  const [title, setTitle] = useState(null);

  useEffect(() => {
    if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title)
    }
  })

  return <div className="mt-[200px] pt-40 lg:pt-0">
    <div className="flex gap-x-[30px] container mx-auto ">

      <div className="hidden md:block">
        <CategoryNav />
      </div>

      <main className='px-5 '>
        <div className="text-3xl mb-5 capitalize">
          {title} Cameras
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] md:gap-[20px]">
          {data?.map((product) => {
            return <>
              <Product product={product} key={product.id} />
            </>
          })}
        </div>
      </main>
    </div>
  </div>
    ;
};

export default Products;
