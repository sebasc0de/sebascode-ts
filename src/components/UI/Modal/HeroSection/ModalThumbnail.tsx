import { AnimatePresence, motion } from 'framer-motion';

const animation = {
  hidden: {
    opacity: 0,
    x: '200px',
  },
  visible: {
    opacity: 1,
    x: '0px',
    transition: { delay: 0.5, duration: 1 },
  },
};

export const ModalThumbnail = () => {
  return (
    <>
      <div
        id='gradient'
        className='h-5/6 flex items-center justify-center max-h-screen'
      >
        <AnimatePresence exitBeforeEnter>
          {/* Background image */}
          <motion.img
            initial='hidden'
            variants={animation}
            animate='visible'
            exit={'hidden'}
            src='/img/render.png'
            className='relative md:max-w-4xl'
          />
        </AnimatePresence>
      </div>
    </>
  );
};
