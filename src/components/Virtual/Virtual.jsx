/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import css from './Virtual.module.css';
import Shade from '../../assets/shade.png';
import ReactCompareImage from 'react-compare-image';
import Before from '../../assets/before.png';
import After from '../../assets/after.png';
import Button from '../Button';

const Virtual = () => {
  return (
    <>
      <div className={css.Virtual}>
        <div className={css.left}>
          <span className='flex items-center justify-center text-[30px] font-black tracking-[-0.009em] text-[#254F6E] text-stroke-2'>
            Virtual Try-On
          </span>
          <span className='text-center'>never buy the wrong shade again!</span>
          <span className='flex items-center justify-center '>
            <Button title='Try More' />
          </span>
          <img src={Shade} alt='' className='831px:relative 831px:top-[180px] xl:top-[230px]' />
        </div>

        <div className={css.right}>
          <div className={css.wrapper}>
            <ReactCompareImage
              leftImage={Before}
              rightImage={After}
              skeleton
              sliderPositionPercentage={0.93}
            />
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className='relative z-[-1] px-[10%] pb-[18%] lg:pb-[12%]'>
        <hr className='h-[0.8px] border-none bg-[#b2c2be]' />
      </div>
    </>
  );
};

export default Virtual;
