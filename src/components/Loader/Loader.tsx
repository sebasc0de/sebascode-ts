import { useTranslation } from "react-i18next";
import { returnRandomLoader } from "../../helpers/returnRandomLoader";

export const Loader = () => {
  const [t] = useTranslation("global");

  const loaderIMG = returnRandomLoader();
  return (
    <div className="flex flex-col justify-center items-center fixed bg-white top-0 left-0 z-50 w-full h-screen">
      <img className="w-32 md:w-20 animate-bounce" src={loaderIMG.img} />
      <div className="absolute bottom-2">
        <small className="block font-bold text-xs text-center text-gray-500 uppercase">
          About me
        </small>
        <p className="font-black text-md"> {t(`loaders.${loaderIMG.index}`)}</p>
      </div>
    </div>
  );
};
