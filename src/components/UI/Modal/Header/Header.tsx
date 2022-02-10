import { motion } from 'framer-motion';

const variant = {
  hidden: {
    y: '-110vh',
    opacity: 0,
  },
  visible: {
    y: '0px',
    opacity: 1,
    transition: { duration: 1, delay: 1.5 },
  },
};

export const Header = () => {
  return (
    <motion.div
      variants={variant}
      initial='hidden'
      animate='visible'
      className='glass bg-gray-100/40 fixed w-full p-3 md:px-20 flex justify-between items-center z-50 glass border-b border-gray-400/20'
    >
      <div>
        <button className='text-blue-600 font-medium text-xs'>
          Volver al home
        </button>
      </div>
      <nav>
        <ul className='flex gap-5 items-center'>
          <li className='text-xs font-medium text-apple-900'>Descripcion</li>
          <li className='text-xs font-medium text-apple-900'>
            Especificaciones
          </li>
          <li className='text-xs font-medium text-apple-900'>Detalles</li>
          <li>
            <button className='text-xs bg-blue-600 text-white p-1 px-3 font-medium rounded-full'>
              Comprar
            </button>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};
