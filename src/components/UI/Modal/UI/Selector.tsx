import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { DialogStore } from '../../../../zustand/DialogStore';

// Animation
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

export const Selector = ({ showWindow, setShowWindow }: any) => {
  // Toggle show handler zustand
  const store = DialogStore();
  const hide = DialogStore((state) => state.hideShowHandler);
  console.log(store);

  // Options window
  const [show, setShow] = useState(false);

  const [tilt, setTilt] = useState(true);

  // Window handler
  const windowHandler = () => {
    setShow(!show);
    setTilt(false);
    hide();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: '200px' }}
        animate={{ opacity: 1, y: '0px', transition: { delay: 1 } }}
        exit={{ opacity: 0 }}
        className={`${!tilt && 'hidden'} absolute bottom-20 right-20 float`}
      >
        <img src='/img/hand-down.png' className='w-10' />
      </motion.div>
      <motion.div
        variants={animation}
        initial='hidden'
        animate={{
          opacity: 1,
          y: '0px',
          transition: { delay: 0.8, duration: 0.2 },
        }}
        className={`text-sm rounded-lg absolute text-sm right-5 bottom-5`}
      >
        <div className='relative flex flex-col gap-1.5 rounded-lg'>
          <motion.div
            variants={animation}
            initial='hidden'
            exit={'hidden'}
            animate={show ? 'visible' : 'hidden'}
            className='p-3 flex flex-col gap-2 rounded-md bg-white'
          >
            {/* Option 2 */}
            <button className='text-md block text-center text-apple-900 font-medium'>
              Medios de pago
            </button>
            {/* Option 1 */}
            <button
              onClick={() => setShowWindow(!showWindow)}
              className='text-md block text-center text-apple-900 font-medium'
            >
              Mostrar ventana
            </button>
          </motion.div>
          <button
            onClick={windowHandler}
            className='py-2 flex gap-2 items-center px-5 shadow-xl text-apple-900 font-medium bg-white rounded-lg text-xs md:text-sm hover:bg-gray-100'
          >
            Desarrollos en wordpress
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
