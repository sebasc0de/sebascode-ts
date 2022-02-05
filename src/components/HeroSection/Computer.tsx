import { motion } from 'framer-motion';

const variants = {
  react: {
    backgroundColor: '#ccc',
    // backgroundImage: "url('img/ask-me.png')",
  },
  wordpress: {
    backgroundColor: '#fbfbfb',
  },
};

export const Computer = ({ budget }: any) => {
  return (
    <motion.div
      id='gradient'
      variants={variants}
      animate={budget.name === 'React JS' ? 'react' : 'wordpress'}
      className='lg:items-end px-5 py-10 overflow-x-hidden md:h-screen'
    >
      <div className='relative'>
        <img
          src='/img/render-default.png'
          className='w-11/12 relative fade-in-top'
        />
        {/* React icon */}
        <div className='absolute w-16 bg-white rounded-md drop-shadow-sm border border-gray-50 p-1 top-20 lg:top-20 right-0 lg:right-10 drop-shadow-sm fade-in-right'>
          <img src={budget.icon} />
        </div>
        {/* App price */}
        <div className='absolute bottom-10 left-5 bg-white rounded-md p-3 drop-shadow-sm fade-in-left'>
          <div className='p-1 px-3 text-white flex gap-3'>
            <img src='/img/money-bag.png' className='w-9 object-contain' />
            <div>
              <h3 className='text-black text-xs lg:text-sm font-bold mb-0'>
                Proyectos en {budget.name}
              </h3>
              <p className='text-gray-500 text-xs font-light'>
                Desde ${budget.price} USD
              </p>
            </div>
          </div>
        </div>

        {/* Customer journey */}
        <div className='absolute top-0 lg:top-5 lg:left-5 bg-white rounded-md p-3 drop-shadow-sm fade-in-top-delay'>
          <div className='p-1 px-3 text-white flex gap-3'>
            <img
              src='/img/customer-journey.png'
              className='w-9 object-contain'
            />
            <div>
              <h3 className='text-black text-xs lg:text-sm font-bold mb-0'>
                ¿Para quien es este presupuesto?
              </h3>
              <a href='#' className='text-cyan-600 text-xs'>
                Haz click para ver mas info
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
