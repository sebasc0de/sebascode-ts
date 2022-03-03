import { AnimatePresence, motion } from 'framer-motion';
import { Welcome } from './Welcome/Welcome';
import { Step1 } from './Steps/Step1/Step1';
import { Step2 } from './Steps/Step2/Step2';

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
          {/* <Step2 /> */}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Configurator;
