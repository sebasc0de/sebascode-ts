import { useState } from 'react';
import { Dialog } from './Dialog';
import ReactModal from './ReactModal/ReactModal';
import WordpressModal from './WordpressModal/WordpressModal';

export const HeroSection = () => {
  // React Modal
  const [showReactModal, setShowReactModal] = useState(false);

  // Wordpress Modal
  const [showWordpressModal, setShowWordpressModal] = useState(false);

  return (
    <>
      <ReactModal
        showReactModal={showReactModal}
        setShowReactModal={setShowReactModal}
      />
      <WordpressModal
        showWordpressModal={showWordpressModal}
        setShowWordpressModal={setShowWordpressModal}
      />
      <div className='flex flex-col lg:flex-row lg:min-h-auto'>
        {/* Izquierda */}
        <div className='p-3 py-10 md:p-10 grow flex flex-col items-center justify-start gap-8 md:gap-16'>
          {/* Titulo */}
          <div>
            <h2 className='font-extrabold text-center text-black text-2xl md:text-4xl'>
              Desarrollador front-end
            </h2>
          </div>

          {/* Desc */}
          <div className='flex items-center gap-3 md:gap-5'>
            {/* Img */}
            <div className='bg-yellow-200 rounded-full p-1.5'>
              <img src='/img/coding.png' className='w-20 md:w-8' />
            </div>
            {/* Text */}
            <div className='md:w-96'>
              <h2 className='font-bold text-sm md:text-xl text-black'>
                Sobre mis proyectos
              </h2>
              <small className='text-gray-500 text-xs md:text-sm'>
                Tengo 28 años, vivo en Buenos Aires y realizo proyectos en todo
                LATAM. Mis proyectos son personalizados, mis presupuestos
                tambien.
              </small>
            </div>
          </div>

          {/* Action */}
          <div className='flex flex-col gap-3 w-11/12 md:w-96'>
            {/* React js budget */}
            <button
              onClick={() => setShowReactModal(true)}
              className='bg-white rounded-md border border-gray-100 drop-shadow-sm p-1 px-3 cursor-pointer flex text-sm font-bold text-zinc-700 cursor-pointer hover:bg-slate-50'
            >
              <img src='/img/react.png' className='w-5 mr-3' />
              Presupuestos en React JS
            </button>
            {/* Wordpress budget */}
            <button
              onClick={() => setShowWordpressModal(true)}
              className='bg-white rounded-md border border-gray-100 drop-shadow-sm p-1 px-3 cursor-pointer flex text-sm font-bold text-zinc-700 cursor-pointer hover:bg-slate-50'
            >
              <img src='/img/wordpress.png' className='w-5 mr-3' />
              Presupuestos en Wordpress
            </button>
            {/* Action */}
            <div className='mt-10'>
              <a href='https://api.whatsapp.com/send?phone=+5491151132129'>
                <button className='bg-black text-white rounded-md p-2 text-sm font-medium'>
                  WhatsApp!
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Derecha */}
        <div className=' bg-slate-50 lg:w-1/2 relative'>
          <Dialog />
        </div>
      </div>
    </>
  );
};