import { Works } from '../../interfaces/Works';
const colorConverter = (techonology: string): string => {
  switch (techonology) {
    case 'wp':
      return 'bg-blue-500';

    case 'elementor':
      return 'bg-pink-500';

    case 'woocommerce':
      return 'bg-violet-500';

    case 'reactjs':
      return 'bg-cyan-500';

    case 'firebase':
      return 'bg-orange-500';

    case 'redux':
      return 'bg-violet-500';

    case 'commercejs':
      return 'bg-green-500';

    case 'sanity':
      return 'bg-red-500';

    default:
      return 'bg-gray-500';
  }
};

export const PortfolioCard = (work: Works) => {
  return (
    <div className='h-fit bg-white border border-gray-200 rounded-sm flex-col'>
      {/* Header */}
      <div className='relative '>
        <img src={work.img} />
        <div className='absolute top-0 flex justify-end w-full'>
          {work.online ? (
            <a href={work.url}>
              <button className='m-3 bg-none border-2 border-white rounded-full text-xs text-white p-1 px-5 font-bold hover:bg-white hover:text-black transition ease-in-out delay-10'>
                Ver mas
              </button>
            </a>
          ) : (
            <span className='m-3 bg-none border-2 border-white rounded-full text-xs text-white p-1 px-5 font-bold hover:bg-white hover:text-black transition ease-in-out delay-10'>
              Offline
            </span>
          )}
        </div>
      </div>
      {/* Body */}
      <div className='p-3 h-28'>
        <div className='pb-5'>
          <p className='text-black text-md font-semibold'>{work.name}</p>
          <small className='text-gray-500'>{work.desc}</small>
        </div>
      </div>
      {/* Footer */}
      <div className='border-t border-gray-100 flex items-center justify-between p-3'>
        <div className='md:hidden lg:block text-xs text-gray-400'>⚡</div>
        <div className='flex gap-1'>
          {work.tags.map((tag: string) => (
            <div
              key={tag}
              className={`${colorConverter(
                tag
              )} font-bold p-0.5 px-2 superSmall rounded-full uppercase text-white`}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
