import { AnimatePresence, motion } from 'framer-motion';

const animation = {
  hidden: {
    opacity: 0,
    x: '200px',
  },
  visible: {
    opacity: 1,
    x: '0px',
    transition: { delay: 1.2, duration: 1 },
  },
};

export const Web = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          className='relative flex justify-center'
          initial='hidden'
          variants={animation}
          animate='visible'
          exit={'hidden'}
        >
          {/* Background image */}
          <img src='/img/render.png' className='md:w-11/12 relative' />
        </motion.div>
      </AnimatePresence>
    </>
  );
};
