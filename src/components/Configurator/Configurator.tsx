import { AnimatePresence, motion } from 'framer-motion';
import { Welcome } from './Welcome/Welcome';
import { Step1 } from './Step1/Step1';

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
  },
};

const Configurator = () => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          variants={modal}
          initial='hidden'
          animate='visible'
          exit={'hidden'}
          className='bg-white h-screen flex flex-col justify-center items-center'
        >
          {/* <Welcome /> */}
          <Step1 />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Configurator;
