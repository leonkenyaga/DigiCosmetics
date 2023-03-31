/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import Logo from '../../assets/logo.png';
import {
  Bars3Icon,
  XMarkIcon,
  RectangleGroupIcon,
  RectangleStackIcon,
  SparklesIcon,
  ReceiptPercentIcon,
  UserPlusIcon,
  ArrowLeftOnRectangleIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import PopoverFAQ from '../PopoverFAQ';
import ToggleDarkMode from '../ToggleDarkMode'

const navigation = [
  { name: 'Collections', href: '#', icon: RectangleGroupIcon },
  { name: 'Brands', href: '#', icon: RectangleStackIcon },
  { name: 'New', href: '#', icon: SparklesIcon },
  { name: 'Sales', href: '#', icon: ReceiptPercentIcon },
];

export default function Header2() {
  // For Side bar Menu smaller then lg
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // For Search box grater than lg
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState('');
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <header className='z-[1] w-screen'>
      {/* First Nav */}
      <nav
        className='max-w-9xl mx-auto flex w-screen items-center justify-between gap-x-6 p-4 lg:px-8'
        aria-label='Global'
      >
        <div className='hidden'>
          <PopoverFAQ />
        </div>

        {/* Logo in Des and Mob view */}
        <div className='flex justify-start lg:w-[200px] order-2 lg:order-1 lg:mr-8 xl:mr-32 2xl:mr-64'>
          <a href='#' className=''>
            <span className='sr-only'>DigiCosmetics</span>
            <div className='flex flex-1 items-center gap-1'>
              <img src={Logo} alt='' className='h-[3rem] w-[3rem] lg:h-[4rem] lg:w-[4rem]' />
              <span className='flex items-center justify-center text-[15px] font-black tracking-[-0.009em] text-[#254F6E] text-stroke lg:text-[18px]'>
                DigiCosmetics
              </span>
            </div>
          </a>
        </div>
        <div className='order-1 flex items-start lg:order-5'>
          <ToggleDarkMode />
        </div>
        {/* Menu Items in Mob view */}
        <div className='hidden lg:flex lg:gap-x-6 lg:order-2'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-md cursor-pointer font-medium leading-6 text-darkBlue hover:text-hoverColor'
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Call to Action in Dec View */}
        <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-2 lg:order-3'>
          <div className='flex h-full w-full items-center justify-center pr-4'>
            <div className='ml-12'>
              <div className='relative inline-block drop-shadow-[0px_1px_#b2c2be] after:absolute after:top-[20px] after:right-[-4px] after:h-[15px] after:w-[4px] after:rotate-[135deg] after:bg-darkBlue after:content-[""]'>
                <input
                  type='text'
                  placeholder='Search products...'
                  required
                  className='h-[30px] w-[30px] rounded-[35px] border-[3px] border-solid border-darkBlue bg-transparent p-[10px] text-[16px] text-sm text-darkBlue outline-none transition-width duration-700 placeholder:text-sm placeholder:text-gray-600 placeholder:opacity-0 placeholder:transition-opacity placeholder:duration-300 placeholder:ease-out focus:lg:w-[160px] focus:xl:w-[250px] focus:placeholder:opacity-100'
                />
              </div>
            </div>
          </div>
          <a
            href='#'
            className='shrink-0 rounded-md bg-transparent py-2 px-3 text-sm font-semibold text-[#0F253E] shadow-none outline-none hover:text-hoverColor'
          >
            Log in
          </a>
          <a
            href='#'
            className='shrink-0 rounded-md bg-[#96deda] py-2 px-4 text-sm font-semibold text-[#0F253E] shadow-sm outline-none hover:bg-[#caeeec] hover:text-hoverColor'
          >
            Sign up
          </a>
        </div>
        {/* 3Bar Menu in Mob view */}
        <div className='flex lg:hidden order-3'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-7 w-7 cursor-pointer hover:text-hoverColor text-darkBlue' aria-hidden='true' />
          </button>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gradient-to-r from-[#96deda] to-[#fbed96] px-6 py-6 sm:max-w-lg '>
          {/* Logo in sidebar Mob View and Close Button */}
          <div className='flex items-center justify-between'>
            <a href='#' className='-mx-2 -my-2'>
              <span className='sr-only'>DigiCosmetics</span>
              <div className='flex flex-1 items-center gap-1'>
                <img src={Logo} alt='' className='h-[3rem] w-[3rem] text-darkBlue' />
                <span className='cursor-pointer font-medium text-[#0F253E]'>
                  DigiCosmetics
                </span>
              </div>
            </a>
            <div className='flex lg:hidden'>
              <button
                type='button'
                className='inline-flex items-center justify-center rounded-md text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6 hover:text-hoverColor text-darkBlue' aria-hidden='true' />
              </button>
            </div>
          </div>
          {/* Divider */}
          <div className='relative px-[10%] pt-6'>
            <hr className='h-[1px] border-none bg-[#b2c2be]' />
          </div>
          {/* Menu Items in sidebar in Mob View */}
          <div className='mt-6 flow-root'>
            <div className='-my-6'>
              {/* Section 1 */}
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 flex items-center gap-2 rounded-lg py-2 px-3 text-base font-semibold leading-7 text-darkBlue hover:bg-gray-50 '
                  >
                    <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg'>
                      <item.icon
                        className='h-7 w-7 text-darkGray'
                        aria-hidden='true'
                      />
                    </div>

                    {item.name}
                  </a>
                ))}
              </div>
              {/* Divider */}
              <div className='relative px-[10%]'>
                <hr className='h-[1px] border-none bg-[#b2c2be]' />
              </div>
              {/* Section 2 */}
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 flex items-center gap-2 rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-darkBlue hover:bg-gray-50'
                >
                  <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg'>
                    <UserPlusIcon
                      className='h-7 w-7 text-gray-600 text-darkGray'
                      aria-hidden='true'
                    />
                  </div>
                  Sign up
                </a>
                <a
                  href='#'
                  className='-mx-3 flex items-center gap-2 rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-darkBlue hover:bg-gray-50'
                >
                  <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg'>
                    <ArrowLeftOnRectangleIcon
                      className='h-7 w-7 text-darkGray'
                      aria-hidden='true'
                    />
                  </div>
                  Have an account? Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      {/* Divider */}
      <div className='relative z-[-1] py-[1%] px-[10%]'>
        <hr className='h-[0.8px] border-none bg-[#b2c2be]' />
      </div>
      {/* Second Nav */}
      <nav
        className='max-w-9xl mx-auto flex w-screen items-center justify-between gap-x-6 p-4 lg:hidden'
        aria-label='Global'
      >
        <div
          className={`flex w-3/4 items-center justify-start rounded-md border border-darkBlue p-1`}
        >
          <button>
            <MagnifyingGlassIcon className='mr-2 h-7 w-7 rounded-l-md bg-transparent text-darkBlue' />
          </button>
          <input
            type='text'
            className='h-7 rounded-r-md bg-transparent outline-none placeholder:text-darkGray placeholder:opacity-70'
            placeholder='Search products...'
            value={searchText}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <UserIcon className=' h-7 w-7 cursor-pointer rounded-l-md bg-transparent hover:text-hoverColor text-darkBlue' />
        </div>
        <div>
          <ShoppingBagIcon className=' h-7 w-7 cursor-pointer rounded-l-md bg-transparent hover:text-hoverColor text-darkBlue' />
        </div>
      </nav>
      {/* Divider */}
      <div className='relative z-[-1] py-[2%] px-[10%] lg:hidden'>
        <hr className='h-[0.8px] border-none bg-[#b2c2be]' />
      </div>
    </header>
  );
}
