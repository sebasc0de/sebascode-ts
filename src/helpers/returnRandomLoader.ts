import { Loaders } from "../data/Loaders";

export const returnRandomLoader = () => {
  const index = Math.floor(Math.random() * (0 - 7) + 7);
  const LoaderIMG = Loaders[index];
  const Loader = {
    index: Loaders.indexOf(LoaderIMG).toString(),
    img: LoaderIMG,
  };

  return Loader;
};
