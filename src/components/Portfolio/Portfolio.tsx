import { works } from '../../data/Works';
import { PortfolioCard } from './PortfolioCard';
import { useTranslation } from 'react-i18next';

export const Portfolio = () => {
  // i18next translation
  const [t] = useTranslation('global');

  return (
    <>
      <div id="portfolio" className="p-10 bg-white flex flex-col items-start">
        <div className=" flex items-center">
          <h2 className="font-bold text-left text-2xl">
            {t('portfolio.title')}
          </h2>
        </div>
        {/* Services grid */}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
          {works.map((work) => (
            <PortfolioCard key={work.id} {...work} />
          ))}
        </div>
        {/* End services grid */}
      </div>
    </>
  );
};
