import { useState } from "react";
import i18next from "i18next";
import { Loader } from "../UI/Loader";
import { Button } from "../UI/Button";

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
          <Button action={() => toggleLanguageHandler("es")} text="English" />
        ) : (
          <Button action={() => toggleLanguageHandler("en")} text="Español" />
        )}
      </div>
    </>
  );
};
