import { animate, AnimatePresence, motion } from 'framer-motion';

const variant = {
  hidden: {
    opacity: 0,
    x: '100px',
  },
  visible: {
    opacity: 1,
    x: '0px',
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    x: '0px',
    transition: { duration: 0.2 },
  },
};

export const ReactJS = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div variants={variant} initial={'hidden'} animate='visible'>
        <div className='flex h-screen'>
          <div className='p-10 w-1/2 bg-slate-100'>
            <small className='uppercase font-semibold text-blue-500'>
              ESTAS VIENDO: React JS
            </small>
            <h2 className='text-4xl font-bold mb-1.5'>
              Desarrollo de aplicaciones web
            </h2>
            <p className='text-xl text-gray-500'>
              Ideal para negocios que necesitan una aplicacion web a su medida,
              excelente opcion si apuestas a largo plazo y sabes lo que tu
              negocio necesita.
            </p>
            <div>
              <h3 className='text-xl font-bold mt-10'>
                ¿Para quien recomiendo presupuestos en React JS?
              </h3>
            </div>
          </div>
          <div className='w-1/2 bg-blue-500'>s</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
