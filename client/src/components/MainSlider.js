import React from 'react';
import CameraImg from '../img/camera.png'
import CameraImg2 from '../img/camera2.png'
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination } from 'swiper';

// data
const sliderData = [
  {
    img: CameraImg,
    pretitle: 'Special offer',
    titlePart1: 'Save 20%',
    titlePart2:
      'On your',
    titlePart3: 'first order',
    btnText: 'Shop now'
  },
  {
    img: CameraImg2,
    pretitle: 'Special offer',
    titlePart1: 'Save 25%',
    titlePart2: 'On your',
    titlePart3: 'second order',
    btnText: 'Shop now',
  }];

const MainSlider = () => {
  return <Swiper modules={[Pagination]}
    loop={true}
    pagination={{
      clickable: true
    }}
    className='mainSlider  mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px] h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat 
      max-w-lg lg:max-w-none rounder-[8px] overflow-hidden drop-shadow-2xl'
  >
    {sliderData?.map((slide, index) => {
      return (
        <SwiperSlide key={index}>
          <div className='flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]'>
            <div className='w-full lg:flex-1'>

              <div className='mb-1 lg:text-left   uppercase
              '>
                {slide.pretitle}
              </div>

              <div className='text-3xl md:text-[46px] font-semibold uppercase
             leading-none text-center lg:text-left mb-8 xl:mb-20'>
                {slide.titlePart1} <br />

                {slide.titlePart2}<br />

                {slide.titlePart3}
              </div>

              <div className='flex-1'>
                <img
                  className='xl:absolute xl:-right-16 xl:-bottom-12'
                  src={slide.img}
                  alt='camera' />
              </div>

              <button className='rounded-[8px] font-semibold uppercase bg-accent text-black p-4 '>
                Shop now
              </button>
            </div>
          </div>

        </SwiperSlide>
      )
    })}

  </Swiper>
    ;
};

export default MainSlider;
