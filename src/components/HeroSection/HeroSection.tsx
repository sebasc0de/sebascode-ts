import { Dialog } from './Dialog';

export const HeroSection = () => {
  return (
    <>
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
                también.
              </small>
            </div>
          </div>

          {/* Action */}
          <div className='flex flex-col gap-3 w-11/12 md:w-96'>
            {/* React js budget */}
            <div className='bg-white rounded-md border border-gray-100 drop-shadow-sm p-1 px-3 flex text-sm font-bold text-zinc-700 '>
              <img src='/img/react.png' className='w-5 mr-3' />
              Disponible para proyectos React JS
            </div>
            {/* Wordpress budget */}
            <div className='bg-white rounded-md border border-gray-100 drop-shadow-sm p-1 px-3 flex text-sm font-bold text-zinc-700 '>
              <img src='/img/wordpress.png' className='w-5 mr-3' />
              Disponible para proyectos Wordpress
            </div>
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
          <div className='absolute flex gap-1.5 top-2 right-2'>
            <a
              href='https://github.com/sebasc0de'
              className='w-6 h-6 p-1 bg-white rounded-md drop-shadow-lg'
            >
              <img src='/icons/github.png' />
            </a>
            <a
              href='https://www.instagram.com/sebas.code/'
              className='w-6 h-6 p-1 bg-white rounded-md drop-shadow-lg'
            >
              <img src='/icons/instagram.png' />
            </a>
            <a
              href='https://www.twitch.tv/sebasc0de'
              className='w-6 h-6 p-1 bg-white rounded-md drop-shadow-lg'
            >
              <img src='/icons/twich.png' />
            </a>
            <a
              href='https://www.youtube.com/channel/UCgQr1eWf00URIYPs3f8sVyA'
              className='w-6 h-6 p-0.5 bg-white rounded-md drop-shadow-lg'
            >
              <img src='/icons/youtube.png' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
