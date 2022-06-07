import { LearningSkills } from "../../../data/LearningSkills";
import { LearningSkill } from "../LearningSkill";

export const Learning = ({ display }: { display: number }) => {
  return (
    <div
      className={
        display === 1 ? "flex flex-col tabItemsContainer gap-8 px-5" : "hidden"
      }
    >
      {LearningSkills.map((item) => (
        <LearningSkill key={item.id} {...item} />
      ))}
    </div>
  );
};
