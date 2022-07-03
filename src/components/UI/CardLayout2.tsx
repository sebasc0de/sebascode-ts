import { colorConverter } from "../../helpers/colorConverter";
import { useTranslation } from "react-i18next";
import { Work } from "../../interfaces/Works";

export const CardLayout2 = (work: Work) => {
  // Translation
  const [t] = useTranslation("global");

  return (
    <div className="fade-in-top h-fit bg-white border border-gray-200 rounded-sm flex-col">
      {/* Header */}
      <div className="relative ">
        <img src={work.img} />
        {work.gitHub && (
          <div className="absolute bottom-2 right-2 flex justify-end">
            <a
              href={work.gitHub}
              className="w-8 h-8 p-1 bg-white rounded-md drop-shadow-lg"
            >
              <img src="/logos/github.png" />
            </a>
          </div>
        )}
      </div>
      {/* Body */}
      <div className="p-3 h-28">
        <div className="pb-5">
          <p className="text-black text-md font-semibold">{work.displayName}</p>
          <small className="text-gray-500">
            {t(`portfolioDesc.${work.name}`)}
          </small>
        </div>
      </div>
      {/* Footer */}
      <div className="border-t border-gray-100 flex items-center justify-end p-3">
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
