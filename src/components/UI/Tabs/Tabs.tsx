import { Instagram } from "./Instagram";
import { Learning } from "./Learning";
import { useState } from "react";
import { Youtube } from "./Youtube";

export const Tabs = () => {
  const [state, setState] = useState(1);

  return (
    <>
      <div className="flex justify-around py-5">
        <div
          onClick={() => setState(1)}
          className={state === 1 ? "tab active" : "tab"}
        >
          Dev Experience
        </div>
        <div
          onClick={() => setState(2)}
          className={state === 2 ? "tab active" : "tab"}
        >
          Youtube Channel
        </div>
        <div
          onClick={() => setState(3)}
          className={state === 3 ? "tab active" : "tab"}
        >
          In Instagram
        </div>
      </div>
      {/* Tabs container */}
      <div>
        <Learning display={state} />
        <Youtube display={state} />
        <Instagram display={state} />
      </div>
    </>
  );
};
