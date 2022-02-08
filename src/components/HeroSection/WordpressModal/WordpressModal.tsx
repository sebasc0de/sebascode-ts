import { AnimatePresence, motion } from 'framer-motion';
import { Wordpress } from './Wordpress';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 1 },
  },
};

const WordpressModal = ({ showWordpressModal, setShowWordpressModal }: any) => {
  console.log(showWordpressModal);

  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => setShowWordpressModal(false)}
    >
      {showWordpressModal && (
        <motion.div
          variants={backdrop}
          initial='hidden'
          exit={'hidden'}
          animate='visible'
          className='bg-black/60 fixed min-h-screen top-0 left-0 z-50'
        >
          <motion.div
            variants={modal}
            initial='hidden'
            animate='visible'
            className='bg-white md:h-screen m-1 rounded-md md:rounded-none md:m-0 flex flex-col gap-3'
          >
            <Wordpress setShowWordpressModal={setShowWordpressModal} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WordpressModal;
