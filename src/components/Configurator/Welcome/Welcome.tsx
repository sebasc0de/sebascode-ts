import { motion } from 'framer-motion';

const rotateEntrance = {
  hidden: {
    rotate: 360,
  },
  visible: {
    rotate: 0,
    scale: [2.5, 1],
    transition: { duration: 1 },
  },
};

export const Welcome = () => {
  return (
    <>
      <motion.img
        variants={rotateEntrance}
        initial='hidden'
        animate='visible'
        src='/img/sebas.png'
        className='w-32 mb-3'
      />
      <h2 className='text-2xl mb-1 font-bold text-apple-900'>
        Configuremos tu presupuesto
      </h2>
      <p className='text-gray-500 text-lg text-center'>
        Responde mis preguntas para obtener un presupuesto a tu medida.
      </p>
      <button className='bg-blue-600 text-white rounded-full p-2 px-5 mt-5 font-medium'>
        Comenzar
      </button>
    </>
  );
};
