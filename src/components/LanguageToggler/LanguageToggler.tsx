import { useState } from "react";
import i18next from "i18next";
import { Loader } from "../Loader/Loader";

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
    }, 1300);
  };

  return (
    <>
      {loading && <Loader />}
      <div className="fixed bottom-3 left-3 z-20">
        {inEnlgish ? (
          <button
            onClick={() => toggleLanguageHandler("es")}
            className="flex gap-2 items-center bg-black shadow-sm shadow-black rounded-md py-1 px-3"
          >
            <img src="/img/eeuu.png" className="w-5" alt="" />
            <p className="text-xs text-white font-medium">English</p>
          </button>
        ) : (
          <button
            onClick={() => toggleLanguageHandler("en")}
            className="flex gap-2 items-center bg-black shadow-sm shadow-black rounded-md py-1 px-3"
          >
            <img src="/img/argentina.png" className="w-5" alt="" />
            <p className="text-xs text-white font-medium">Español</p>
          </button>
        )}
      </div>
    </>
  );
};
