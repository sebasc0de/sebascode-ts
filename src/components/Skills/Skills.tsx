import { useTranslation } from "react-i18next";
import { mySkills } from "../../data/Skills";
import { SkillItem } from "./SkillItem";

export const Skills = () => {
  const [t] = useTranslation("global");

  return (
    <div className="bg-gray-50 p-3 md:p-10 flex flex-col">
      <div>
        <h2 className="font-bold text-left text-2xl">
          {t("skillsSection.title")}
        </h2>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-5">
        {/* Skill card */}
        {mySkills.map((skill) => (
          <SkillItem key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  );
};
