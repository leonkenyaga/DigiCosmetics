import React from 'react';
import Logo from '../../assets/logo.png';
import {
  InboxIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon,
  UserGroupIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

import css from './Footer.module.css';

const Footer = () => {
  return (
    <div className={css.container}>
      {/* Divider */}
      <div className='relative z-[-1] pb-[2%] px-[10%]'>
        <hr className='h-[0.8px] border-none bg-[#b2c2be]' />
      </div>

      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt='' />
          <span>DigiCosmetics</span>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span className='text-darkGray'>Contact US</span>
            <span className={css.pngLine}>
              <MapPinIcon className={css.icon} />
              <span>Iran, Tehran, District 3, Epsum St, No. 21</span>
            </span>

            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <a href='tel: +98 21 0000 0000'> +98 21 0000 0000 </a>
            </span>

            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href='mailto: support@digicosmetics.com'>
                {' '}
                info@digicosmetics.com
              </a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span className='text-darkGray'>Acount</span>
            <span className={css.pngLine}>
              <ArrowRightOnRectangleIcon className={css.icon} />
              <span>Log in</span>
            </span>

            <span className={css.pngLine}>
              <ArrowLeftOnRectangleIcon className={css.icon} />
              <span>Log out</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span className='text-darkGray'>Company</span>
            <span className={css.pngLine}>
              <UserGroupIcon className={css.icon} />
              <span>About us</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span className='text-darkGray'>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <span>Privacy & Terms</span>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyRight}>
        <span className='text-darkGray'>Copyright ©2022 by DigiCosmetics, Inc</span>
        <span className='text-darkGray'>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
