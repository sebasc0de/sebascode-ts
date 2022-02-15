import { motion } from 'framer-motion';

export const Indicator = ({ tilt }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: '200px' }}
      animate={{ opacity: 1, y: '0px', transition: { delay: 1 } }}
      exit={{ opacity: 0 }}
      className={`${!tilt && 'hidden'} absolute top-20 left-20 float`}
    >
      <img src='/img/hand-down.png' className='w-10' />
    </motion.div>
  );
};
