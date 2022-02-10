export const WhyChoose = () => {
  return (
    <div className='p-10 bg-slate-100 flex flex-col gap-20 rounded-lg'>
      {/* Caracteristica 1 */}
      <div>
        {/* <small className='text-blue-600 font-bold text-sm uppercase'>
          Bajo tiempo de espera
        </small> */}
        <h2 className='text-8xl text-left font-medium text-apple-900'>
          Tardo poco tiempo en diseñar.
        </h2>
        <div className='flex justify-center p-20'>
          <img src='/img/1.png' className='' />
        </div>
        <p className='text-center text-2xl text-gray-500 font-medium'>
          Hoy, estar en contacto a través de una videollamada es más importante
          que nunca. Por eso, la nueva cámara de la MacBook Pro tiene todo
          listo: el doble de resolución, 1080p, y un lente con una mayor
          apertura que deja ingresar más luz. Además, la cámara funciona con un
          sensor de imagen más grande que tiene pixeles más eficientes y te
          ofrece un rendimiento dos veces mejor en condiciones de poca luz. En
          resumen, todos te verán increíble.
        </p>
      </div>
    </div>
  );
};
