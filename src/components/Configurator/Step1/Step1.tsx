import { AnimatePresence, motion } from 'framer-motion';
import { ConfiguratorSelector } from '../ConfiguratorSelector/ConfiguratorSelector';
import ConfiguratorDialog from '../ConfiguratorDialog/ConfiguratorDialog';

const animation = {
  hidden: {
    opacity: 0,
    x: '200px',
    transition: { delay: 0.2, duration: 0.5 },
  },
  visible: {
    opacity: 1,
    x: '0px',
    transition: { delay: 0.2, duration: 0.5 },
  },
};

export const Step1 = () => {
  const showWindow = true;

  return (
    <AnimatePresence exitBeforeEnter>
      {showWindow && (
        <div
          id='gradient'
          className='w-full p-5 flex justify-center items-center h-screen'
        >
          {/* Options selector */}
          <ConfiguratorSelector />

          {/* Configurator dialog */}
          <ConfiguratorDialog />

          <motion.div
            initial='hidden'
            variants={animation}
            animate='visible'
            exit={'hidden'}
            className='relative bg-white w-full md:w-3/5 md:h-104 block rounded-xl shadow-2xl'
          >
            {/* Window banner */}
            <div className='py-2.5 rounded-t-xl bg-apple-200 flex gap-1.5 px-4'>
              <div className='block w-3.5 h-3.5 bg-red-500 rounded-full h'></div>
              <div className='block w-3.5 h-3.5 bg-yellow-500 rounded-full'></div>
              <div className='block w-3.5 h-3.5 bg-green-500 rounded-full'></div>
            </div>

            {/* Window content */}
            <div className='relative h-72 md:h-104'>
              {/* <Courses /> */}
              <Ecommerce />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
