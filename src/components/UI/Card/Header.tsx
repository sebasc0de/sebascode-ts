interface Props {
  projectLogo?: string;
  projectTitle?: string;
  projectDesc?: string;
  githubUrl: string;
}

export const Header = ({
  projectTitle,
  projectDesc,
  projectLogo,
  githubUrl,
}: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      <img src={projectLogo} className="w-20 md:w-14 object-contain" />
      <div className="leading-4 w-full">
        <h5 className="font-bold mb-2">{projectTitle}</h5>

        <p className="text-gray-500 text-xs h-5 xl:h-8 overflow-y-scroll">
          {projectDesc}
        </p>

        <a
          href={githubUrl}
          target="_blank"
          className="block text-xs mt-2 text-blue-600 font-medium"
        >
          View on github
        </a>
      </div>
    </div>
  );
};
