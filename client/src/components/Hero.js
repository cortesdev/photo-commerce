import React, { useState } from 'react';
import CategoryNav from '../components/CategoryNav'
import MainSlider from '../components/MainSlider'
import PromoImg1 from '../img/promo_img1.png'
import PromoImg2 from '../img/promo_img2.png'

const Hero = () => {
  const [catNavMobile, setCatNavMobile] = useState(false)
  return (
    <section className='mb-[30px]lg:pt-0 '>
      {/* */}
      <div className="container mx-auto  md:pt-[200px] lg:pt-[150px] ">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          <div className={`${catNavMobile ? 'left-0' : '-left-full'} fixed top-0 bottom-0 z-30 w-full transition-all duration-200`}>
            <CategoryNav className="" setCatNavMobile={setCatNavMobile} />
          </div>

          <div className="w-full max-w-lg lg:max-w-[734px] mx-auto">
            <MainSlider />
          </div>

          <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">

              <div className=" uppercase font-medium leading-light">
                Save 30$ in Dslr cameras
              </div>

              <div className="flex flex-col max-2-[144px] h-full justify-center overflow-hidden">
                <a href="/#" className='uppercase text-accent'> Shop Now</a>

                <img alt='' className="absolute z-20 -top-2 -right-4 " src={PromoImg1} />
              </div>
            </div>


            <div className="grad  flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              <div className=" uppercase font-medium leading-light">
                Save 25% in Mirroless cameras
              </div>
              <div className="flex flex-col max-2-[144px] h-full justify-center overflow-hidden">

                <a href="/#" className='uppercase text-accent'> Shop Now</a>

                <img className='absolute z-20 -top-2 -right-4' alt='' src={PromoImg2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
};

export default Hero;
