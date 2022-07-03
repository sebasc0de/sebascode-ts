import { useTranslation } from "react-i18next";
import { Skill } from "../../interfaces/Skill";

export const SkillItem = (skill: Skill) => {
  const [t] = useTranslation("global");

  return (
    <div className="bg-white flex flex-col items-center justify-center p-3 md:p-5 lg:py-10 rounded-md drop-shadow-sm">
      <img src={skill.img} className="w-20 mb-3" />
      <div>
        <h2 className="text-center font-semibold">{skill.title}</h2>
        <p className="text-center text-gray-500 text-xs">
          {t(`skillsSection.${skill.title}`)}
        </p>
      </div>
    </div>
  );
};
