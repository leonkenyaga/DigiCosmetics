/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import css from './Header.module.css';
import Logo from '../../assets/logo.png';
import { CgShoppingBag } from 'react-icons/cg';
import { GoThreeBars } from 'react-icons/go';

const Header = () => {
  const [ShowMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu((ShowMenu) => !ShowMenu);
  };

  return (
    <>
      <div className={css.container}>
        <a href='#'>
          <div className={css.logo}>
            <img src={Logo} alt='' />
            <span className=''>DigiCosmetics</span>
          </div>
        </a>

        <div className={css.right}>
          <div className={css.bars} onClick={toggleMenu}>
            <GoThreeBars />
          </div>

          <ul
            className={css.menu}
            style={{ display: ShowMenu ? 'inherit' : 'none' }}
          >
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>

          <input
            type='text'
            placeholder='Search products...'
            className={css.search}
          />

          <CgShoppingBag className={css.cart} />
        </div>
      </div>
      <div className={css.hrHolder}>
        <hr className={css.horDivider} />
      </div>
    </>
  );
};

export default Header;
