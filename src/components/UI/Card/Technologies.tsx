import { Icon } from "../Icon";

export const Technologies = () => {
  return (
    <div>
      <small className="font-medium text-xs">Tecnologias:</small>
      <div className="flex gap-1 mt-1">
        <Icon url="./logos/react.png" />
        <Icon url="./logos/redux.png" />
        <Icon url="./logos/firebase.png" />
      </div>
    </div>
  );
};
