import React from 'react';
import CategoryNav from '../components/CategoryNav'
import MainSlider from '../components/MainSlider'
import PromoImg1 from '../img/promo_img1.png'
import PromoImg2 from '../img/promo_img2.png'

const Hero = () => {

  return (
    <section className='
    '>
      {/* flex w-full max-w-lg lg:max-w-[600px] mb-[30px] pt-36 lg:pt-0 */}
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          <div className="w-full max-w-lg lg:max-w-[734px] mx-auto">
            <CategoryNav />
          </div>

          <div className="w-full max-w-lg lg:max-w-[734px] mx-auto">
            <MainSlider />
          </div>

          <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">

              <div className="max-2-[144px] h-full justify-center overflow-hidden">
                <div className=" uppercase font-medium leading-light">
                  Save 30$ in Dslr cameras
                </div>

                <a href="/#" className='uppercase text-accent'> Shop Now</a>

                <img alt='' className="absolute z-20 " src={PromoImg1} />
              </div>
            </div>


            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              <div className=" uppercase font-medium leading-light">
                Save 25% in Mirroless cameras
              </div>

              <a href="/#" className='uppercase text-accent'> Shop Now</a>

              <img alt='' src={PromoImg2} />
            </div>
          </div>
        </div>
      </div>
    </section>);
};

export default Hero;
