/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { XMarkIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import css from './Banner2.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Banner() {
  // make ready to use swiper options
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  // state to show and hid banner
  const [showBanner, setShowBanner] = useState(true);
  // state close handler
  const handleBannerClose = () => {
    setShowBanner(false);
  };
  // banner slides
  const bannerSlides = [
    {
      bannerTitle: 'Spring Sale',
      bannerDescription: 'Save up to 50%',
      bannerUrl: '#',
      buttonLabel: 'Shop Now',
    },
    {
      bannerTitle: 'Limited Edition',
      bannerDescription: 'Discover skincares',
      bannerUrl: '#',
      buttonLabel: 'Explore Now',
    },
    {
      bannerTitle: 'New Arrival',
      bannerDescription: 'New waterproof makeup',
      bannerUrl: '#',
      buttonLabel: 'Shop Now',
    },
    {
      bannerTitle: 'Free Gift',
      bannerDescription: 'Spend $50 and enjoy!',
      bannerUrl: '#',
      buttonLabel: 'Claim Now',
    },
    {
      bannerTitle: 'Popular Brands',
      bannerDescription: 'Find your idea!',
      bannerUrl: '#',
      buttonLabel: 'Explore Now',
    },
  ];
  return (
    <>
      <div className={`w-full ${showBanner ? '' : 'hidden'}`}>
        <div className='relative bg-darkBlue text-white'>
          <div className='mx-auto max-w-7xl py-0.5'>
            <div className='flex flex-row items-center justify-between gap-2'>
              <div className='swiperContainer flex h-full w-10/12 flex-1 items-center py-2 xs:px-8 sm:px-12 md:px-24 lg:px-32 xl:px-48 2xl:px-64 lg:py-0'>
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  navigation={true}
                  pagination={{ clickable: true }}
                  loop={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  className={css.mySwiper}
                  style={{
                    '--swiper-navigation-color': '#ffffff',
                    '--swiper-navigation-size': '15px',
                    '--swiper-pagination-position': 'absolute',
                    '--swiper-pagination-top': '10px',
                  }}
                >
                  {bannerSlides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div className='relative h-full w-full'>
                        <div className='inset-0'>
                          <div className='flex h-full w-full items-center justify-center gap-2 lg:h-10 lg:items-start lg:py-0.5'>
                            <div className='flex items-center text-sm text-white'>
                              <strong className='text-sm font-semibold'>
                                {slide.bannerTitle}
                              </strong>
                              <svg
                                viewBox='0 0 2 2'
                                className='fill-current mx-2 inline h-0.5 w-0.5'
                                aria-hidden='true'
                                fill='#ffffff'
                              >
                                <circle cx={1} cy={1} r={1} />
                              </svg>
                              <span className='hidden sm:flex'>
                                {slide.bannerDescription}
                              </span>
                              <svg
                                viewBox='0 0 2 2'
                                className='sm:fill-current hidden sm:mx-2 sm:inline sm:h-0.5 sm:w-0.5'
                                aria-hidden='true'
                                fill='#ffffff'
                              >
                                <circle cx={1} cy={1} r={1} />
                              </svg>
                              <button className='focus:rounded-full '>
                                <span className=' flex items-center justify-center gap-0.5 rounded-full border-2 border-white px-[6px] py-[-2px] text-sm font-semibold'>
                                  <span className='' aria-hidden='true'>
                                    {slide.buttonLabel}
                                  </span>
                                  <ArrowRightIcon className='str h-3 w-auto stroke-white stroke-2' />
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className='flex items-center justify-end pr-4 lg:px-4'>
                <button
                  type='button'
                  onClick={handleBannerClose}
                  className='outline-none'
                >
                  <span className='sr-only'>Dismiss</span>
                  <XMarkIcon
                    className='h-7 w-7 text-white outline-none'
                    aria-hidden='true'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
