import { useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  QuestionMarkCircleIcon,
  ArrowSmallLeftIcon,
} from '@heroicons/react/24/outline';

function PopoverFAQ() {
  const [isOpen, setIsOpen] = useState(false);

  function closePopover() {
    setIsOpen(false);
  }

  return (
    <div className={`fixed inset-0 flex items-center justify-center overflow-hidden overflow-y-auto lg:hidden mt-[-60px] ${isOpen === true ? 'z-[1]' : 'h-28 w-20'} `}>
      <Popover
        open={isOpen}
        onClose={closePopover}
        className={`fixed inset-0 overflow-hidden mt-[-65px] ${isOpen === true ? 'z-[1]' : 'h-28 w-20'} `}
      >
        <Popover.Button
          className='top-12 overflow-y-hidden relative rounded-lg p-4 text-[#0F253E] outline-none'
          onClick={() => setIsOpen(true)}
        >
          <QuestionMarkCircleIcon className='h-7 w-7 cursor-pointer hover:text-hoverColor text-darkBlue' />
        </Popover.Button>
        <Transition
          show={isOpen}
          enter='transition ease-out duration-300 transform'
          enterFrom='translate-y-full opacity-0'
          enterTo='translate-y-0 opacity-100'
          leave='transition ease-in duration-300 transform'
          leaveFrom='translate-y-0 opacity-100'
          leaveTo='translate-y-full opacity-0'
        >
          <Popover.Panel
            className='inset-0 flex h-screen items-center justify-center overflow-hidden overflow-y-auto bg-black bg-opacity-50 text-center '
            static
          >
            <div className='relative h-screen rounded-lg bg-white'>
              <div className='flex items-center justify-between bg-hoverColor p-4 pt-7'>
                <button
                  onClick={closePopover}
                  className='text-darkBlue hover:text-gray-50'
                >
                  <ArrowSmallLeftIcon className='h-7 w-7 stroke-2' />
                </button>
                <h2 className='flex text-xl font-bold text-darkBlue '>Online Support</h2>
              </div>
              <dl className='space-y-4 p-8 text-left'>
                <div>
                  <p className='text-left'>Hi!</p>
                  <p className='text-left'>
                    You can find answers to your question below:
                  </p>
                  <p className='text-left'>
                    If you have another question, we always answer them.
                  </p>
                </div>
                <div>
                  <dt className='font-bold'>
                    What are your shipping options and how much do they cost?
                  </dt>
                  <dd>
                    We offer standard and express shipping options for domestic
                    and international orders. Shipping costs vary depending on
                    the destination and shipping method chosen. You can view the
                    shipping options and costs at checkout.
                  </dd>
                </div>
                <div>
                  <dt className='font-bold'>Question 2?</dt>
                  <dd>Answer 2.</dd>
                </div>
                <div>
                  <dt className='font-bold'>Question 3?</dt>
                  <dd>Answer 3.</dd>
                </div>
              </dl>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}

export default PopoverFAQ;
