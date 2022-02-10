import { motion } from 'framer-motion';
import { useState } from 'react';

// Animation
const animation = {
  hidden: {
    opacity: 0,
    y: '10px',
  },
  visible: {
    opacity: 1,
    y: '-1px',
    transition: { delay: 0.2, duration: 0.2 },
  },
};

// Menu
const items = ['Tiempo de carga', 'Presupuesto', 'Opcion 3'];

export const Selector = ({ showWindow, setShowWindow }: any) => {
  // Options
  const [show, setShow] = useState(false);

  return (
    <motion.div className='absolute text-sm right-5 bottom-5 rounded-lg'>
      <div className='relative flex flex-col gap-1.5 rounded-lg'>
        <motion.div
          variants={animation}
          initial='hidden'
          exit={'hidden'}
          animate={show ? 'visible' : 'hidden'}
          className='p-3 flex flex-col gap-1.5 rounded-md bg-white'
        >
          <button
            onClick={() => setShowWindow(!showWindow)}
            className='text-md block text-center text-apple-900 font-medium'
          >
            Mostrar ventana
          </button>
        </motion.div>
        <button
          onClick={() => setShow(!show)}
          className='py-1 flex gap-2 items-center px-5 shadow-xl text-apple-900 font-medium bg-white rounded-lg text-xs md:text-sm hover:bg-gray-100'
        >
          <img src='/img/sebas.png' className='w-6 md:w-9' alt='' />
          Elije una opcion
        </button>
      </div>
    </motion.div>
  );
};
