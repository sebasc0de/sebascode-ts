import { works } from "../data/Works";
import { CardLayout2 } from "./UI/CardLayout2";
import { useTranslation } from "react-i18next";
import { WorksFilter } from "./UI/WorksFilter";
import { useFilter } from "../hooks/useFilter";
import { CardLayout } from "./UI/Card/CardLayout";

export const Portfolio = () => {
  const { results, setType, type } = useFilter(works);

  // i18next translation
  const [t] = useTranslation("global");

  return (
    <>
      <div id="portfolio" className="p-5 lg:p-10 bg-white flex flex-col">
        <div className="flex items-center justify-between w-full">
          <h2 className="font-bold text-left text-2xl">
            {t("portfolio.title")}
          </h2>
          <WorksFilter type={type} setType={setType} />
        </div>
        {/* Services grid */}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-5">
          {type === "Full Stack"
            ? results.map((item) => <CardLayout key={item.id} {...item} />)
            : results.map((item) => <CardLayout2 key={item.id} {...item} />)}
        </div>
        {/* End services grid */}
      </div>
    </>
  );
};
