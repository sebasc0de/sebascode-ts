export const Wordpress = ({ setShowWordpressModal }: any) => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-3'>
      {/* Left section */}
      <div className='md:w-2/4 p-3 md:p-5 grow flex flex-col items-start justify-start gap-8 md:gap-10'>
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
          <div className='bg-white rounded-md border border-gray-100 drop-shadow-sm p-1 px-3 flex text-xs font-bold text-zinc-700 items-center'>
            <img src='/img/information.png' className='w-5 mr-3' />
            Web informativa: desde $200 USD
          </div>
          {/* Blog presupuesto */}
          <div className='bg-white rounded-md border border-gray-100 drop-shadow-sm p-1 px-3 flex text-xs font-bold text-zinc-700 items-center'>
            <img src='/img/blog.png' className='w-5 mr-3' />
            Blog: desde $200 USD
          </div>
          {/* e-Commerce presupuesto */}
          <div className='bg-white rounded-md border border-gray-100 drop-shadow-sm p-1 px-3 flex text-xs font-bold text-zinc-700 items-center'>
            <img src='/img/bag.png' className='w-5 mr-3' />
            eCommerce: desde $200 USD
          </div>
          {/* Custom presupuesto */}
          <div className='bg-white rounded-md border border-gray-100 drop-shadow-sm p-1 px-3 flex text-xs font-bold text-zinc-700 items-center'>
            <img src='/img/custom.png' className='w-5 mr-3' />
            Proyecto personalizado: Consultar
          </div>

          {/* Aclaracion */}
          <small className='text-gray-500 Small'>
            * Todos los presupuestos se pueden personalizar, estos son los
            costos minimos para cada tipo de proyecto. IVA no incluido
          </small>

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
      <div id='gradient' className='rounded-r-md md:w-2/4 relative'>
        <img
          src='/img/render-default.png'
          className='md:w-11/12 relative fade-in-top'
        />
      </div>
    </div>
  );
};
