import { Computer } from './Computer';
import { useState } from 'react';
import { Dialog } from './Dialog';

// Type of budget
type Budget = {
  name: string;
  price: number;
  icon: string;
};

// Budgets info
const react: Budget = {
  name: 'React JS',
  price: 520,
  icon: '/img/react.png',
};

const wordpress: Budget = {
  name: 'Wordpress',
  price: 220,
  icon: '/img/wordpress.png',
};

export const HeroSection = () => {
  // Budget selector state
  const [state, setState] = useState(undefined);

  const budgetHandler = ({ target }: any) => {
    if (target.name === 'react') {
      setState(react);
      console.log(state);
    } else {
      setState(wordpress);
      console.log(state);
    }
  };

  return (
    <>
      <div className='flex flex-col lg:flex-row lg:min-h-auto'>
        {/* Izquierda */}
        <div className='p-3 py-10 md:p-10 grow flex flex-col items-center justify-start gap-8 md:gap-16'>
          {/* Titulo */}
          <div>
            <h2 className='font-extrabold text-center text-black text-3xl lg:text-4xl'>
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
            <div className='bg-white rounded-md border border-gray-100 drop-shadow-sm p-1 px-3 cursor-pointer flex'>
              <img src='/img/react.png' className='w-5 mr-3' />
              <input
                type='text'
                onClick={budgetHandler}
                name='react'
                value='React JS'
                className='text-sm font-bold text-zinc-700 cursor-pointer w-full focus:outline-none caret-transparent'
              />
            </div>
            <div className='bg-white rounded-md border border-gray-100 drop-shadow-sm p-1 px-3 cursor-pointer flex'>
              <img src='/img/wordpress.png' className='w-5 mr-3' />
              <input
                type='text'
                onClick={budgetHandler}
                name='wordpress'
                value='Wordpress y Elementor'
                className='text-sm font-bold text-zinc-700 cursor-pointer w-full focus:outline-none caret-transparent'
              />
            </div>
          </div>
        </div>
        {/* Derecha */}
        <div className='px-5 py-10 bg-slate-50 lg:w-1/2'>
          {state ? <Computer budget={state} /> : <Dialog />}
        </div>
      </div>
    </>
  );
};
