/* eslint-disable jsx-a11y/anchor-is-valid */
// import css from './Hero.module.css';
import React from 'react';
import HeroImgMob from '../../assets/hero5EnhancedMob.png';
import HeroImg2 from '../../assets/hero5Enhanced.png';
import { motion } from 'framer-motion';
import AnimatedNumbers from 'react-animated-numbers';
import Button from '../Button';

const Hero = () => {
  const transition = { duration: 3, type: 'spring' };

  return (
    <>
      <div className='grid-flow-rows-3 grid auto-rows-min py-2 px-4 lg:grid-cols-[1.5fr_2.5fr_1fr] lg:grid-rows-1'>
        {/* leftSide */}
        <div className='grid-flow-rows-2 row-start-2 row-end-3 grid auto-rows-auto gap-28 lg:row-start-1 lg:row-end-2 lg:justify-around lg:gap-4 lg:pt-20'>
          <span className='flex w-full items-center justify-center text-[2.2rem]'>
            <span
              data-text='UNLEASH YOUR'
              className='font-[Impact, "Anton", Haettenschweiler, "Arial Narrow Bold",sans-serif] absolute block translate-x-[-0.255em] translate-y-[-0.25em] font-black italic tracking-[-0.08em] text-fill-leftColor before:absolute before:z-[0] before:block before:px-[0.05em] before:content-[attr(data-text)] before:text-stroke-black before:text-stroke-8 after:relative after:z-[1] after:block after:p-[0.05em] after:content-[attr(data-text)]'
            ></span>
            <span
              data-text='INNER BEAUTY'
              className='font-[Impact, "Anton", Haettenschweiler, "Arial Narrow Bold",sans-serif] absolute block translate-x-[0.5em] translate-y-[0.5em] font-black italic tracking-[-0.05em] text-fill-rightColor before:absolute before:z-[0] before:block before:px-[0.05em] before:content-[attr(data-text)] before:text-stroke-black before:text-stroke-8 after:relative after:z-[1] after:block after:p-[0.05em] after:content-[attr(data-text)]'
            ></span>
          </span>
          <div className='flex w-full flex-col items-center justify-center gap-8 px-2 lg:gap-4'>
            <div className='flex w-full items-center justify-center font-[Poppins] text-[25px] font-black tracking-[-0.009em] text-[#254F6E] text-stroke-2 sm:scale-75'>
              <span className='mx-1'>BEST</span>
              <span className='mx-1 animate-[span_3s_ease-in_infinite_alternate] '>
                C
              </span>
              <span className='relative bottom-[0px] mx-[0px] inline-flex h-[22px] w-[22px] animate-[letter2_3s_ease-in-out_infinite_alternate] rounded-[14px] border-[7px] border-solid'>
                {' '}
              </span>
              <span className='mx-1 animate-[span_3s_ease-in_infinite_alternate] '>
                L
              </span>
              <span className='mx-1 animate-[span_3s_ease-in_infinite_alternate] '>
                L
              </span>
              <span className='mx-1 animate-[span_3s_ease-in_infinite_alternate] '>
                E
              </span>
              <span className='mx-1 animate-[span_3s_ease-in_infinite_alternate] '>
                C
              </span>
              <span className='mx-1 animate-[span_3s_ease-in_infinite_alternate] '>
                T
              </span>
              <span className='mx-1 animate-[span_3s_ease-in_infinite_alternate] '>
                I
              </span>
              <span className='relative bottom-[0px] ml-[0px] inline-flex h-[22px] w-[22px] animate-[letter1_3s_ease-in-out_infinite_alternate] rounded-[14px] border-[7px] border-solid'>
                {' '}
              </span>
              <span className='mx-1 animate-[span_3s_ease-in_infinite_alternate]'>
                N
              </span>
            </div>
            <span className='it flex w-full items-center justify-center text-center text-lg font-medium text-black opacity-75'>
              Discover our collection of natural skincare and makeup products
              that enhance your natural beauty.
            </span>
            <div className='flex items-center justify-center'>
              <Button title='Explore Now' />
            </div>
          </div>
        </div>

        {/* middleSide */}
        <div className='relative row-start-1 row-end-2 flex items-start justify-center lg:relative lg:row-start-1 lg:row-end-2 lg:mt-24 lg:items-baseline'>
          <motion.div
            initial={{ bottom: '-3rem' }}
            whileInView={{ bottom: '0rem' }}
            transition={transition}
            className='hidden lg:z-[-99] lg:flex lg:h-[28rem] lg:w-[26.8rem] lg:rounded-[50%] lg:from-rightColor lg:to-leftColor lg:bg-gradient-135'
          ></motion.div>
          <motion.img
            initial={{ bottom: '2rem' }}
            whileInView={{ bottom: '-0.12rem' }}
            transition={transition}
            src={HeroImg2}
            alt=''
            className='lg:left-0.6 hidden lg:absolute lg:flex lg:w-[32.5rem]'
          />
          <motion.img
            initial={{ bottom: '2rem' }}
            whileInView={{ bottom: '0rem' }}
            transition={transition}
            src={HeroImgMob}
            alt=''
            className='relative z-[-1] mt-4 flex items-center justify-center xs:w-[85vw] md:w-[75vw] lg:hidden'
          />
        </div>

        {/* RightSide */}
        <div className='row-start-3 row-end-4 flex items-start justify-between py-12 px-2 text-lg font-semibold text-darkBlue lg:row-start-1 lg:row-end-2 lg:flex-col lg:items-center lg:justify-around lg:gap-16'>
          <div className='flex flex-col items-center justify-center'>
            <span className='flex items-end justify-center text-4xl'>
              <AnimatedNumbers
                includeComma
                animateToNumber='6.8'
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
              <span className='text-2xl lg:text-4xl'>&nbsp;m</span>
            </span>
            <span className='font-bla flex justify-center'>
              Monthly Traffic
            </span>
          </div>
          <div className='flex flex-col items-center justify-center '>
            <span className='flex items-end justify-center text-4xl'>
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
              <span className='text-2xl lg:text-4xl'>&nbsp;K</span>
            </span>
            <span className='flex justify-center'>Happy Users</span>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className='relative z-[-1] px-[10%] pb-16 lg:pt-16 '>
        <hr className='h-[0.8px] border-none bg-[#b2c2be]' />
      </div>
    </>
  );
};
export default Hero;
