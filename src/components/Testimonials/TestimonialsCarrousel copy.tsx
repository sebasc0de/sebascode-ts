import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const TestimonialCarrousel = () => {
  return (
    <div className='fixed bottom-0 left-0 m-3 flex gap-4 items-center bg-white rounded-full px-10 py-2 pl-1 drop-shadow-md'>
      <div>
        <img src='/avatars/giovanna.png' className='w-10' />
      </div>
      <div>
        <div className='flex items-center gap-2 mb-0.5'>
          <h2 className='font-bold text-sm'>Giovanna Rain</h2>
          <div>
            <FontAwesomeIcon className='text-sm text-amber-300' icon={faStar} />
            <FontAwesomeIcon className='text-sm text-amber-300' icon={faStar} />
            <FontAwesomeIcon className='text-sm text-amber-300' icon={faStar} />
            <FontAwesomeIcon className='text-sm text-amber-300' icon={faStar} />
            <FontAwesomeIcon className='text-sm text-amber-300' icon={faStar} />
          </div>
        </div>
        <p className='text-gray-500 text-xs'>
          Sebas es todo un genio porque...{' '}
          <a href='' className='text-blue-600'>
            Ver mas
          </a>
        </p>
      </div>
    </div>
  );
};
