import { useState } from 'react';
import {
  XIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

SwiperCore.use([Navigation]);

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  const bannerSlides = [
    {
      title: 'Spring Sale',
      subtitle: 'Up to 50% off',
      buttonLabel: 'Shop Now',
      imageSrc: 'https://picsum.photos/id/237/1200/600',
    },
    {
      title: 'Summer Collection',
      subtitle: 'New arrivals',
      buttonLabel: 'Explore',
      imageSrc: 'https://picsum.photos/id/1043/1200/600',
    },
    {
      title: 'Limited Edition',
      subtitle: 'Get them before they are gone',
      buttonLabel: 'Shop Now',
      imageSrc: 'https://picsum.photos/id/1080/1200/600',
    },
  ];

  return isVisible ? (
    <div className='bg-gray-100 py-2'>
      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='absolute top-0 right-0 pt-4 pr-4'>
          <button
            className='text-gray-600 hover:text-gray-800 focus:ring-gray-600 focus:outline-none focus:ring-2'
            onClick={handleDismiss}
          >
            <XIcon className='h-6 w-6' />
          </button>
        </div>
        <Swiper
          className='my-4'
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
        >
          {bannerSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className='relative'>
                <img className='w-full' src={slide.imageSrc} alt='' />
                <div className='absolute top-0 left-0 p-4'>
                  <h1 className='text-4xl font-bold text-white'>
                    {slide.title}
                  </h1>
                  <p className='text-xl font-semibold text-white'>
                    {slide.subtitle}
                  </p>
                  <button className='text-gray-800 mt-4 rounded-full bg-white py-2 px-4 font-bold'>
                    {slide.buttonLabel}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='absolute top-0 bottom-0 flex items-center'>
          <button className='text-gray-800 swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white py-2 px-4 font-bold shadow-md'>
            <ChevronLeftIcon className='h-6 w-6' />
          </button>
          <button className='text-gray-800 swiper-button absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white py-2 px-4 font-bold shadow-md'></button>
        </div>
      </div>
    </div>
  ) : (
    <div>Hi</div>
  );
};
