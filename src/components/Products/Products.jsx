import React, { useState } from 'react';
import css from './Products.module.css';

import Plane from '../../assets/plane.png';
import { ProductsData } from '../../data/products';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Products = () => {
  const [parent] = useAutoAnimate();

  const [MenuProducts, setMenuProducts] = useState(ProductsData);

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };

  return (
    <>
      <div className={css.container}>
        <img src={Plane} alt='' />

        <span className='flex items-center justify-center text-[30px] font-black tracking-[-0.009em] text-[#254F6E] text-stroke-2'>
          Our Feature Products
        </span>

        <div className={css.products}>
          <ul className={css.menu}>
            <li onClick={() => setMenuProducts(ProductsData)}>All</li>
            <li onClick={() => filter('skin care')}>Skin Cares</li>
            <li onClick={() => filter('conditioner')}>Conditioners</li>
            <li onClick={() => filter('foundation')}>Foundations</li>
          </ul>

          <div className={css.list} ref={parent}>
            {MenuProducts.map((product, i) => (
              <div className={css.product} key={product.img}>
                <div className='left-s'>
                  <div className='name'>
                    <span>{product.name}</span>
                    <span>{product.detail}</span>
                  </div>
                  <span>{product.price}$</span>
                  <div>Shop now</div>
                  <img src={product.img} alt='' className='img-p' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className='relative z-[-1] px-[10%] py-[10%] lg:py-[8%]'>
        <hr className='h-[0.8px] border-none bg-[#b2c2be]' />
      </div>
    </>
  );
};

export default Products;
