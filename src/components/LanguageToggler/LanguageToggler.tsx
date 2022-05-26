import { useState } from "react";
import i18next from "i18next";

export const LanguageToggler = () => {
  // Change language state
  const [inEnlgish, setInEnglish] = useState(false);

  // Loader state
  const [loading, setLoading] = useState(false);

  // Toggle language handler
  const toggleLanguageHandler = (lng: string) => {
    setLoading(true);
    setTimeout(() => {
      setInEnglish(!inEnlgish);
      i18next.changeLanguage(lng);
      setLoading(false);
    }, 800);
  };

  return (
    <>
      {loading && (
        <div className="flex flex-col justify-center items-center fixed bg-white top-0 left-0 z-50 w-full h-screen">
          <img
            className="w-32 md:w-20 animate-bounce"
            src="./img/loading.png"
          />
        </div>
      )}
      <div className="fixed bottom-3 left-3 z-20">
        {inEnlgish ? (
          <button
            onClick={() => toggleLanguageHandler("es")}
            className="flex gap-2 items-center bg-blue-600 shadow-sm shadow-blue-600 rounded-md py-1 px-3"
          >
            <img src="/img/eeuu.png" className="w-5" alt="" />
            <p className="text-xs text-white font-medium">English</p>
          </button>
        ) : (
          <button
            onClick={() => toggleLanguageHandler("en")}
            className="flex gap-2 items-center bg-blue-600 shadow-sm shadow-blue-600 rounded-md py-1 px-3"
          >
            <img src="/img/argentina.png" className="w-5" alt="" />
            <p className="text-xs text-white font-medium">Español</p>
          </button>
        )}
      </div>
    </>
  );
};
