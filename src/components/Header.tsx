import { Topbar } from '../Topbar';
export const Header = () => {
  return (
    <>
      <div className='fixed z-50 bg-white w-full'>
        <Topbar />
        <div className='bg-white container-fluid border-b border-black/10 h-14 flex justify-between'>
          <div className='flex items-center pl-5'>
            <p className='font-black text-black'>Sebas</p>
          </div>
          <div className='hidden md:flex items-center'>
            <img src='/img/sebas.png' className='h-10' />
          </div>
          <div>
            <a
              className='text-white'
              href='https://api.whatsapp.com/send?phone=+5491151132129'
            >
              <button className='bg-black text-xs hover:bg-gray-900 tracking-wide text-white h-full w-36 font-medium md:w-44 md:text-sm'>
                Pedir presupuesto
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
