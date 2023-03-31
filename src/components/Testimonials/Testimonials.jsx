import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import Hero from '../../assets/testimonialHero.png';
import css from './Testimonials.module.css';
import { TestimonialsData } from '../../data/testimonials';
import AnimatedNumbers from 'react-animated-numbers';

const Testimonials = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span className='flex items-center justify-center text-[30px] font-black tracking-[-0.05em] text-[#254F6E] text-stroke-2'>Top Rated</span>
          <span className='text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            dolore eos necessitatibus.
          </span>
        </div>

        <img src={Hero} alt='' className='' />

        <div className={css.container}>
          <span className='flex items-end justify-center text-4xl'>
            <div className='flex items-center justify-center py-2'>
              <AnimatedNumbers
                animateToNumber='500'
                locale='en'
                configs={[
                  { mass: 1, tension: 220, friction: 100 },
                  { mass: 1, tension: 180, friction: 130 },
                  { mass: 1, tension: 280, friction: 90 },
                  { mass: 1, tension: 180, friction: 135 },
                  { mass: 1, tension: 260, friction: 100 },
                  { mass: 1, tension: 210, friction: 180 },
                ]}
              />
              <span className='text-3xl'>&nbsp;K</span>
            </div>
          </span>
          <span className='flex justify-center font-black text-xl'>Happy Customers with us</span>
        </div>
      </div>

      <div className='flex items-center justify-center text-[30px] font-black tracking-[-0.009em] text-[#254F6E] text-stroke-2 pt-12'>Reviews</div>

      <div className={css.carousel}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          className={css.tCarousel}
          navigation={true}
          pagination={true}
          loopFillGroupWithBlank={true}
          slidesPerView={3}
          spaceBetween={20}
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          breakpoints={{
            1950: {
              slidesPerView: 5,
            },
            1281: {
              slidesPerView: 4,
            },
            856: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {TestimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className={css.testimonial}>
                <img src={testimonial.image} alt='' />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
