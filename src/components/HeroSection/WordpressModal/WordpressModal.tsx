import { AnimatePresence, motion } from 'framer-motion';
import { Wordpress } from './Wordpress';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: '-110vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: { delay: 0.5 },
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
          className='bg-black/60 fixed h-screen top-0 left-0 z-50'
        >
          <motion.div
            variants={modal}
            initial='hidden'
            animate='visible'
            className='bg-white m-3 rounded-md flex flex-col gap-3'
          >
            <Wordpress setShowWordpressModal={setShowWordpressModal} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WordpressModal;
