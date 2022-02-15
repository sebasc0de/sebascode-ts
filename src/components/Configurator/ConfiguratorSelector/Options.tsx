import { motion } from 'framer-motion';
import React from 'react';

const animation = {
  hidden: {
    opacity: 0,
    y: '10px',
  },
  visible: {
    opacity: 1,
    y: '0px',
    transition: { duration: 0.2 },
  },
};

export const Options = () => {
  const show = true;

  return (
    <motion.div
      variants={animation}
      initial='hidden'
      exit={'hidden'}
      animate={show ? 'visible' : 'hidden'}
      className='p-3 flex flex-col gap-2 rounded-md bg-white'
    >
      {/* Option 4 */}
      <button className='text-md block text-center text-apple-900 font-medium'>
        Cursos online
      </button>
      {/* Option 3 */}
      <button className='text-md block text-center text-apple-900 font-medium'>
        Blog
      </button>
      {/* Option 2 */}
      <button className='text-md block text-center text-apple-900 font-medium'>
        Landing page
      </button>
      {/* Option 1 */}
      <button className='text-md block text-center text-apple-900 font-medium'>
        eCommerce
      </button>
    </motion.div>
  );
};
