import React from 'react';

export const ServiceCard = () => {
  return (
    <div className='bg-white border border-gray-200 rounded-sm flex-col'>
      {/* Header */}
      <div className='relative '>
        <img src='/img/services/ecommerce.jpg' alt='' />
        <div className='absolute top-0 flex justify-end w-full'>
          <button className='m-3 bg-none border-2 border-white rounded-full text-xs text-white p-1 px-5 font-bold hover:bg-white hover:text-black transition ease-in-out delay-10'>
            Ver mas
          </button>
        </div>
      </div>
      {/* Body */}
      <div className='p-3'>
        <div className='flex justify-between items-center'>
          <p className='text-black text-md font-semibold'>Tienda online</p>
          <p className='text-gray-500 text-sm'>$87</p>
        </div>
        <small className='text-gray-500'>Lorem ipsum dolor sit amet.</small>
      </div>
      {/* Footer */}
      <div className='border-t border-gray-100 flex items-center justify-between p-3'>
        <div className='text-xs text-gray-400'>1/24/2022</div>
        <div className='bg-green-200 p-0.5 px-2 text-xs rounded-full text-black'>
          <strong className='font-bold'>Tiempo estimado: {''}</strong>5 dias
        </div>
      </div>
    </div>
  );
};
