import React from 'react';
import { ServiceCard } from './ServiceCard';

export const ServicesSection = () => {
  return (
    <div className='p-10 bg-slate-50 flex flex-col items-center '>
      <div>
        <h2 className='text-black text-center'>Sitios web en Wordpress</h2>
        <p className='text-gray-500 text-center'>
          Este es mi rango de precios en Wordpress, los costos varian
          dependiendo las funcionalidades y caracteristicas que quieras incluir
          en tu sitio web.
        </p>
      </div>

      {/* Services grid */}
      <div className='grid gap-5 grid-cols-1 md:grid-cols-3 w-full mt-5'>
        <ServiceCard />
        <div>dsasd</div>
        <div>dsada</div>
      </div>
      {/* End services grid */}
    </div>
  );
};
