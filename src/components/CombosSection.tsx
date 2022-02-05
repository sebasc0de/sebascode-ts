import { useEffect, useState } from 'react';
import { fetchWordpressPacks } from '../firebase/firestore';
import { ComboCard } from './ComboCard';

export const CombosSection = () => {
  // Wordpress packs
  const [packs, setPacks] = useState();

  console.log(packs);

  useEffect(() => {
    fetchWordpressPacks().then(setPacks);
  }, []);

  return (
    <>
      <div className='bg-slate-50 md:p-10 '>
        <div className='relative p-3 flex flex-col items-center'>
          {/* Title */}
          <div className=' w-full mt-5 md:mt-0 p-10 pb-0 '>
            <h2 className='font-black text-center mb-0 text-5xl mb-2'>
              Packs de Wordpress <span className='text-blue-500'>en</span>{' '}
              oferta
            </h2>
            <p className='text-gray-500 text-center text-xl'>
              Elije el pack que mas se adapte a tus necesidades, todos son low
              cost !
            </p>
            <div className='absolute font-medium text-sm top-0 right-0 text-blue-100 bg-blue-500 rounded-full px-3 py-0.5 m-5'>
              <i className='fab fa-wordpress'></i> Wordpress en oferta
            </div>
          </div>

          {/* Services grid */}
          {!packs ? null : (
            <div className='grid mt-5 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full'>
              {packs.map((pack: any) => (
                <ComboCard
                  id={pack.id}
                  key={pack.id}
                  name={pack.name}
                  desc={pack.desc}
                  price={pack.price}
                  url={pack.url}
                  features={pack.features}
                />
              ))}
            </div>
          )}

          {/* End services grid */}
        </div>
      </div>
    </>
  );
};
