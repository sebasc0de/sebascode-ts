import { motion } from 'framer-motion';
import { DialogStore } from '../../../zustand/DialogStore';

const animation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.8 },
  },
};

const ConfiguratorDialog = () => {
  const { show, message } = DialogStore();
  const toggleShowHandler = DialogStore((state) => state.toggleShowHandler);

  return (
    <div className='absolute bottom-5 left-5 z-10'>
      <div className='flex items-center gap-2'>
        <motion.img
          variants={animation}
          onClick={toggleShowHandler}
          initial='hidden'
          animate='visible'
          src='/img/sebas.png'
          className='w-12 md:w-20 cursor-pointer'
        />
        <motion.div
          variants={animation}
          initial='hidden'
          animate={show ? 'visible' : 'hidden'}
          className='relative bg-white font-medium text-sm text-apple-900 shadow-xl z-50 glass p-3 rounded-lg'
        >
          {message}
        </motion.div>
      </div>
    </div>
  );
};

export default ConfiguratorDialog;
