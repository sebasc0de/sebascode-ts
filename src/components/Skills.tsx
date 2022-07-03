import { mySkills } from "../data/Skills";
import { SkillItem } from "../components/UI/SkillItem";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const [t] = useTranslation("global");

  return (
    <div className="bg-gray-50 p-3 md:p-10 flex flex-col">
      <h2 className="font-bold text-left text-2xl">
        {t("skillsSection.title")}
      </h2>

      {/* Skills OLD GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-5">
        {mySkills.map((skill) => (
          <SkillItem key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  );
};
