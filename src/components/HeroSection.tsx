

export const HeroSection = () => {
  return (
    <>
      <div className='container mx-auto flex items-center justify-center flex-col gap-5 min-h-screen p-3'>
        <h2 className='text-black font-bold text-center mb-0 text-5xl'>
        Hola, soy Sebas!
        </h2>
        <p className='text-center text-gray-400 font-regular text-xl'>
          Diseño sitios web en Wordpress y aplicaciones web con React JS.
          <br className='hidden md:block' /> Hablame por WhatsApp para eliminar
          todo tipo de dudas✌🏻
        </p>
        <div>
          <button className='bg-black p-1 text-white rounded-md px-5 font-medium'>
            Contactar
          </button>
        </div>
      </div>
    </>
  );
};
