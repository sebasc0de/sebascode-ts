import { useTranslation } from 'react-i18next';

export const Meet = () => {
  const [t] = useTranslation('global');

  return (
    <div className="h-96 gap-5 p-3 md:p-10 flex flex-col justify-center items-center bg-slate-50">
      <img src="/img/dudes.png" className="w-20" />
      <div>
        <span className="uppercase text-center block text-xs text-blue-600 font-bold">
          {t('meeting.small')}
        </span>
        <h2 className="font-bold text-2xl text-center">{t('meeting.title')}</h2>
        <p className="text-gray-500 text-center">{t('meeting.desc')}</p>
      </div>
      <a href="https://calendly.com/rocketup-designs/reunion-zoom">
        <button className="bg-blue-600 text-white rounded-full p-2 px-5 mt-5 font-medium">
          {t('meeting.button')}
        </button>
      </a>
    </div>
  );
};
