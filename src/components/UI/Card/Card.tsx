import { Header } from "./Header";

import { ProgressBar } from "./ProgressBar";
import { Technologies } from "./Technologies";

export const Card = () => {
  return (
    <div>
      <div className="shadow-sm shadow-black/20 p-3 md:px-5 md:py-7 rounded-lg flex flex-col gap-3 relative">
        {/* Header */}
        <Header githubUrl="" />

        {/* Body */}
        <ProgressBar />
        <Technologies />
      </div>
    </div>
  );
};
