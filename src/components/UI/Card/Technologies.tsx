import { returnTechImage } from "../../../helpers/returnTechImage";
import { Icon } from "../Icon";

export const Technologies = ({ techs }: { techs: string[] }) => {
  return (
    <div>
      <small className="font-medium text-xs">Tecnologias:</small>
      <div className="flex gap-1 mt-1">
        {techs.map((item) => (
          <Icon key={item} url={returnTechImage(item)} />
        ))}
      </div>
    </div>
  );
};
