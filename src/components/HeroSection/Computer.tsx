export const Computer = () => {
  return (
    <div className='flex items-end'>
      <div className='relative'>
        <img src='/img/render-default.png' className='w-11/12 relative top-5' />
        {/* React icon */}
        <div className='absolute w-16 bg-white rounded-md drop-shadow-sm border border-gray-50 p-1 top-20 right-10 drop-shadow-sm float'>
          <img src='/img/react.png' />
        </div>
        {/* App price */}
        <div className='absolute w-60 bottom-10 left-5 bg-white rounded-md p-3 drop-shadow-sm float'>
          <div className='p-1 px-3 text-white flex gap-3'>
            <img src='/img/money-bag.png' className='w-9 object-contain' />
            <div>
              <h3 className='text-black text-sm font-bold mb-0'>
                Proyectos en React JS
              </h3>
              <p className='text-gray-500 text-xs font-light'>Desde $350 USD</p>
            </div>
          </div>
        </div>

        {/* Customer journey */}
        <div className='absolute top-20 left-5 bg-white rounded-md p-3 drop-shadow-sm float'>
          <div className='p-1 px-3 text-white flex gap-3'>
            <img
              src='/img/customer-journey.png'
              className='w-9 object-contain'
            />
            <div>
              <h3 className='text-black text-sm font-bold mb-0'>
                ¿Para quien es este presupuesto?
              </h3>
              <a href='#' className='text-cyan-600 text-xs'>
                Haz click para ver mas info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
