import { useState } from 'react';
import i18next from 'i18next';

export const LanguageToggler = () => {
  const [inEnlgish, setInEnglish] = useState(false);

  // Toggle language handler
  const toggleLanguageHandler = (lng: string) => {
    setInEnglish(!inEnlgish);
    i18next.changeLanguage(lng);
  };

  return (
    <div className="fixed bottom-2 left-3 z-10 bg-white rounded-md drop-shadow-lg py-1 px-3 cursor-pointer">
      {inEnlgish ? (
        <button
          onClick={() => toggleLanguageHandler('en')}
          className="flex gap-2 items-center"
        >
          <img src="/img/argentina.png" className="w-5" alt="" />
          <p className="text-xs text-gray-500 font-medium">Español</p>
        </button>
      ) : (
        <button
          onClick={() => toggleLanguageHandler('es')}
          className="flex gap-2 items-center"
        >
          <img src="/img/eeuu.png" className="w-5" alt="" />
          <p className="text-xs text-gray-500 font-medium">English</p>
        </button>
      )}
    </div>
  );
};
