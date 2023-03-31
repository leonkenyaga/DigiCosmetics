import { motion } from 'framer-motion';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

const Button = ({title}) => {
  const variants = {
    hover: {
      scale: 1.05,
      backgroundColor: '#73c6b6',
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
      backgroundColor: '#73c6b6',
    },
  };

  return (
    <motion.button
      whileHover="hover"
      whileTap="tap"
      variants={variants}
      className="bg-gradient-to-r from-[#fbed96] to-[#96deda] text-[#254F6E] border-[#254F6E] border-2 hover:bg-gradient-to-r outline-none hover:from-[#96deda] hover:to-[#fbed96] font-bold py-2 px-4 rounded-lg flex items-center justify-center drop-shadow-lg"
    >
      <span className="mr-2 "> {title} </span>
      <ArrowRightCircleIcon className="h-6 w-6" />
    </motion.button>
  );
};

export default Button;
