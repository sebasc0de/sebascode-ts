import { useTranslation } from 'react-i18next';
import { Works } from '../../interfaces/Works';
import { colorConverter } from './helpers/colorConverter';

export const PortfolioCard = (work: Works) => {
  // Translation
  const [t] = useTranslation('global');

  return (
    <div className="h-fit bg-white border border-gray-200 rounded-sm flex-col">
      {/* Header */}
      <div className="relative ">
        <img src={work.img} />
        <div className="absolute top-0 flex justify-end w-full">
          {work.online ? (
            <a href={work.url}>
              <button className="m-3 bg-none border-2 border-white rounded-full text-xs text-white p-1 px-5 font-bold hover:bg-white hover:text-black transition ease-in-out delay-10">
                {t('portfolioCards.stateTag.online')}
              </button>
            </a>
          ) : (
            <span className="m-3 bg-none border-2 border-white rounded-full text-xs text-white p-1 px-5 font-bold">
              {t('portfolioCards.stateTag.inactive')}
            </span>
          )}
        </div>
      </div>
      {/* Body */}
      <div className="p-3 h-28">
        <div className="pb-5">
          <p className="text-black text-md font-semibold">{work.name}</p>
          <small className="text-gray-500">{work.desc}</small>
        </div>
      </div>
      {/* Footer */}
      <div className="border-t border-gray-100 flex items-center justify-between p-3">
        <div className="md:hidden lg:block text-xs text-gray-400">⚡</div>
        <div className="flex gap-1">
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
