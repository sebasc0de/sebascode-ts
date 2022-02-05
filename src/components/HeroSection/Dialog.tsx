export const Dialog = () => {
  return (
    <div className='flex items-center justify-center md:h-screen'>
      <div className='relative'>
        <img src='/img/ask-me.png' />

        {/* Saludo */}
        <div className='absolute font-bold text-md drop-shadow-md -top-5 -left-20 bg-white rounded-md float p-3 text-zinc-800'>
          Hola, soy Sebas 👋🏻
        </div>

        {/* Sugerencia */}
        <div className='absolute font-bold text-md drop-shadow-md bg-white rounded-md text-md float p-3 text-zinc-800 -bottom-10 -right-20 flex items-center gap-2'>
          <img src='/img/portfolio.png' className='w-5' />
          <a href='#portfolio'> Visita mi portfolio</a>
        </div>
      </div>
    </div>
  );
};
