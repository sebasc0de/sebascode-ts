export const Dialog = () => {
  return (
    <div
      id='gradient'
      className='p-16 md:p-0 flex items-center justify-center md:h-screen'
    >
      <div className='relative'>
        <img src='/img/ask-me.png' className='' />

        {/* Saludo */}
        <div className='absolute font-bold text-md drop-shadow-md top-0 -left-5 md:top-0 md:-left-10 bg-white text-xs md:text-md rounded-md float p-3 text-zinc-800'>
          Hola, soy Sebas 👋🏻
        </div>

        {/* Sugerencia */}
        <div className='absolute float font-bold text-md drop-shadow-md bg-white rounded-md text-xs md:text-md  p-3 text-zinc-800 -bottom-10 md:-bottom-5 md:-right-20 right-10 flex items-center gap-2'>
          <img src='/img/portfolio.png' className='w-5' />
          <a href='#portfolio'> Visita mi portfolio</a>
        </div>
      </div>
    </div>
  );
};
