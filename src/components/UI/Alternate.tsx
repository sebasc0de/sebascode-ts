import { ReactElement, useState } from "react";
import { Expand } from "./Expand";

interface Props {
  children: ReactElement | ReactElement[];
}

export const Alternate = ({ children }: Props) => {
  const [alternate, setAlternate] = useState(true);

  return (
    <div
      className={`relative shadow-sm shadow-black/20 p-3 md:px-5 md:py-5 rounded-lg flex flex-col gap-3 overflow-hidden ${
        alternate ? "expandDown" : "expandUp"
      }`}
    >
      {children}
      <Expand action={() => setAlternate(!alternate)} />
    </div>
  );
};
