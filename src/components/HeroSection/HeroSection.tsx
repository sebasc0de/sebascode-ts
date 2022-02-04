import { Computer } from './Computer';
export const HeroSection = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row lg:min-h-auto'>
        {/* Izquierda */}
        <div className='p-3 py-10 md:p-10 grow flex flex-col items-center justify-center gap-8 md:gap-16'>
          {/* Titulo */}
          <div>
            <h2 className='font-extrabold text-center text-black text-3xl lg:text-5xl'>
              Hola, soy Sebas!👋🏻
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
                Desarrollador web en Buenos Aires
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
            <div className='flex bg-white rounded-md border border-gray-100 drop-shadow-sm p-1 px-3 cursor-pointer hover:bg-slate-50'>
              <img src='/img/react.png' className='w-5 mr-3' />
              <span className='text-sm font-bold text-zinc-700'>React js</span>
            </div>
            <div className='bg-white rounded-md border border-gray-100 drop-shadow-sm p-1 px-3 cursor-pointer hover:bg-slate-50 flex'>
              <img src='/img/wordpress.png' className='w-5 mr-3' />
              <span className='text-sm font-bold text-zinc-700'>
                Wordpress y Elementor
              </span>
            </div>
          </div>
        </div>
        {/* Derecha */}
        <div className='px-5 py-10 bg-slate-50 lg:w-1/2'>
          <Computer />
        </div>
      </div>
    </>
  );
};
