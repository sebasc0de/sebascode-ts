import { Alternate } from "../Alternate";
import { Header } from "./Header";
import { ProgressBar } from "./ProgressBar";
import { Technologies } from "./Technologies";

export const Card = () => {
  return (
    <div className="relative">
      <Alternate>
        {/* Header */}
        <Header githubUrl="" />

        {/* Body */}
        <ProgressBar />
        <Technologies />
      </Alternate>
    </div>
  );
};
