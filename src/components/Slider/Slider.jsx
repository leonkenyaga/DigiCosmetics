import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';

import './Slider.css';

import { SliderProducts } from '../../data/products';

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <div className='s-container flex flex-col items-center justify-center gap-4'>
        <div className='text-stroke-2 flex items-center justify-center text-[30px] font-black tracking-[-0.009em] text-[#254F6E]'>
          New Products
        </div>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          className=' mySwiper bg-white lg:bg-darkBlue rounded-xl border-2 border-darkBlue'
          navigation={true}
          pagination={true}
          loopFillGroupWithBlank={true}
          slidesPerView={3}
          spaceBetween={40}
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          breakpoints={{
            1280: {
              slidesPerView: 4,
            },
            640: {
              slidesPerView: 3,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {SliderProducts.map((slide, i) => (
            <SwiperSlide key={slide.img} className=''>
              <div className='left-s'>
                <div className='name'>
                  <span>{slide.name}</span>
                  <span>{slide.detail}</span>
                </div>
                <span>{slide.price}$</span>
                <div>Shop now</div>
              </div>

              <img src={slide.img} alt='' className='img-p' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Divider */}
      <div className='relative z-[-1] px-[10%] pt-[8%]'>
        <hr className='h-[0.8px] border-none bg-[#b2c2be]' />
      </div>
    </>
  );
};

export default Slider;
