import { AnimatePresence, motion } from 'framer-motion';

interface window {
  showWindow: boolean;
}

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

export const WebWindow = ({ showWindow }: window) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showWindow && (
        <motion.div
          initial='hidden'
          variants={animation}
          animate='visible'
          exit={'hidden'}
          className='bg-white md:w-8/12 md:h-104 block rounded-xl shadow-2xl'
        >
          {/* Window banner */}
          <div className='bg-gray-100 py-2.5 rounded-t-xl bg-apple-200 flex gap-1.5 px-4'>
            <div className='block w-3.5 h-3.5 bg-red-500 rounded-full h'></div>
            <div className='block w-3.5 h-3.5 bg-yellow-500 rounded-full'></div>
            <div className='block w-3.5 h-3.5 bg-green-500 rounded-full'></div>
          </div>

          {/* Window content */}
          <img src='/img/test.jpg' className='rounded-b-xl' />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
