import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { DialogStore, SelectorStore } from '../../../zustand/index';
import { Options } from './Options';
import { Indicator } from './Indicator';

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

export const ConfiguratorSelector = () => {
  // Store
  const dialogStore = DialogStore();
  const selectorStore = SelectorStore();

  // Ecommerce show toggler
  const { ecommerce, toggleShowEcommerce } = SelectorStore();
  const setECommerceMessage = DialogStore((state) => state.setMessage);

  // Toggle show handler zustand
  const hide = DialogStore((state) => state.hideShowHandler);

  // Show window with options selector
  const [show, setShow] = useState(false);

  // Indicator to selector
  const [tilt, setTilt] = useState(true);

  // Window handler
  const windowHandler = () => {
    setShow(!show);
    setTilt(false);
    hide();
  };

  // Ecommerce handler
  const eCommerceMSGHandler = () => {
    toggleShowEcommerce();
    setECommerceMessage(`Estas viendo un eCommerce la`, ecommerce);
  };

  return (
    <AnimatePresence>
      {/* Indicator */}
      <Indicator tilt={tilt} />
      {/* Selector Menu */}
      <motion.div
        variants={animation}
        initial='hidden'
        animate={{
          opacity: 1,
          y: '0px',
          transition: { delay: 0.8, duration: 0.2 },
        }}
        className={`text-sm rounded-lg absolute text-sm top-5 left-5`}
      >
        <div className='w-full relative flex flex-col-reverse gap-1.5 rounded-lg'>
          {/* Menu options */}
          <Options />

          {/* Menu button */}
          <button
            onClick={windowHandler}
            className='py-2 flex gap-2 items-center px-5 shadow-xl text-apple-900 font-medium bg-white rounded-lg text-sm md:text-sm hover:bg-gray-100'
          >
            Portfolio interactivo
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
