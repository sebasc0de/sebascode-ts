import { AnimatePresence, motion } from 'framer-motion';
import { ModalHeroSection } from './HeroSection/ModalHeroSection';
import { Header } from './Header/Header';
import { Benefits } from './Benefits/Benefits';

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

const Modal = ({ showModal = true, setShowModal }: any) => {
  return (
    <>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        {showModal && (
          <motion.div
            variants={modal}
            initial='hidden'
            animate='visible'
            className='bg-white md:h-screen rounded-md md:rounded-none md:m-0 flex flex-col gap-3'
          >
            <Header />
            <ModalHeroSection />
            <Benefits />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modal;
