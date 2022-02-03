
export const Header = () => {
  return (
    <div className='fixed z-50 bg-white w-full'>
      <div className='bg-white container-fluid border-b border-black/10 h-14 flex justify-between'>
        <div className='flex items-center pl-5'>
          <p className='font-black text-black'>Sebascode.</p>
        </div>
        <div className='hidden md:flex items-center'>
          
        </div>
        <div>
          <a
            className='text-white'
            href='https://api.whatsapp.com/send?phone=+5491151132129'
          >
            <button className='bg-black hover:bg-gray-900 tracking-wide text-white h-full w-28 md:w-36 text-sm'>
              Contactar
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
