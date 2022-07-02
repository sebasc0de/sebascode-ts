import { Work } from "../../../interfaces/Works";
import { Alternate } from "../Alternate";
import { Header } from "./Header";
import { ProgressBar } from "./ProgressBar";
import { Technologies } from "./Technologies";

export const Card = (work: Work) => {
  return (
    <div className="relative">
      <Alternate>
        {/* Header */}
        <Header
          githubUrl={work.gitHub || "https://github.com/sebasc0de"}
          projectDesc={work.desc}
          projectTitle={work.displayName}
          projectLogo={work.img}
        />

        {/* Body */}
        <ProgressBar />
        <Technologies techs={work.tags} />
      </Alternate>
    </div>
  );
};
