import { LearningSkill as Type } from "../../data/LearningSkills";

export const LearningSkill = (item: Type) => {
  return (
    <div className="learningSkill tabItem flex items-center gap-3">
      {/* Skill image */}

      <div className="relative">
        <img className="w-10 h-10 bg-gray-500 rounded-md" src={item.img} />
        {item.completed && (
          <img
            className="w-4 absolute -left-2 -top-2"
            src="./icons/check.png"
          />
        )}
      </div>

      {/* Skill info */}
      <div>
        <a target={"_blank"} href={item.instructorUrl}>
          {item.name}
        </a>
        <small>{item.module}</small>
      </div>
    </div>
  );
};
