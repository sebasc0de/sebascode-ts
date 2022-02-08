import { Web } from '../Web';
export const Wordpress = ({ setShowWordpressModal }: any) => {
  return (
    <div className='relative flex flex-col-reverse md:flex-row justify-between gap-3'>
      {/* Pop up close button */}
      <div
        onClick={() => setShowWordpressModal()}
        className='absolute top-0 right-0 z-50 bg-white h-6 w-6 flex justify-center items-center rounded-md m-1 drop-shadow-lg'
      >
        <i className='fas fa-times cursor-pointer hover:text-gray-600'></i>
      </div>

      {/* Left section */}
      <div className='h-64 overflow-auto md:h-auto md:w-2/4 p-3 md:p-20 flex flex-col items-start justify-start gap-8 md:gap-10'>
        {/* Titulo */}
        <div className='flex gap-3'>
          <h2 className='font-extrabold text-center text-black text-2xl md:text-4xl'>
            Presupuesto en Wordpress
          </h2>
        </div>

        {/* Desc */}
        <div className='flex items-center gap-3 md:gap-5'>
          {/* Img */}
          <div className='bg-cyan-100 rounded-full p-1.5'>
            <img src='/img/wordpress.png' className='w-20 md:w-8' />
          </div>
          {/* Text */}
          <div className='md:w-96'>
            <h2 className='font-bold text-sm md:text-xl text-black'>
              ¿ Para quien es este presupuesto ?
            </h2>
            <small className='text-gray-500 text-xs'>
              Este tipo de presupuestos es para personas que estan comenzando su
              negocio y necesitan presupuestos economicos.
            </small>
          </div>
        </div>

        {/* Action */}
        <div className='flex flex-col gap-3 w-11/12 md:w-96'>
          {/* Web informativa presupuesto */}
          <div className='bg-white h-32 rounded-md border border-gray-100 drop-shadow-sm font-bold text-zinc-700'>
            <div className='flex items-center border-b border-gray-100 w-full p-2 text-sm'>
              <img src='/img/information.png' className='w-5 mr-3' />
              Web informativa: desde $75.99 USD
            </div>
            <div className='p-3'>
              <small className='text-xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, molestiae?
              </small>
            </div>
          </div>
          {/* Blog presupuesto */}
          <div className='bg-white cursor-pointer hover:bg-slate-50 rounded-md border border-gray-100 drop-shadow-sm p-1 px-3 flex text-sm font-bold text-zinc-700 items-center'>
            <img src='/img/blog.png' className='w-5 mr-3' />
            Informativa + Blog: desde $149.99 USD
          </div>

          {/* Actions buttons */}
          <div className='mt-3 md:mt-10 flex gap-2'>
            {/* Action 1 */}
            <a href='https://api.whatsapp.com/send?phone=+5491151132129'>
              <button className='bg-black text-white rounded-md p-2 text-sm'>
                Pedir presupuesto
              </button>
            </a>
            <button
              onClick={() => setShowWordpressModal(false)}
              className='bg-slate-50 p-2 text-sm rounded-md border border-gray-200/40 text-gray-500'
            >
              Cerrar ventana
            </button>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div
        id='gradient'
        className='rounded-t-md h-96 md:h-screen md:rounded-none md:w-2/4'
      >
        <Web />
      </div>
    </div>
  );
};
