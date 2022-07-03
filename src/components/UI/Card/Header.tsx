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
    <div className="flex flex-col md:flex-row items-center gap-3 h-fit py-8 px-3">
      <img src={projectLogo} className="w-20 md:w-14 object-contain" />
      <div className="leading-4 w-fit">
        <h5 className="font-bold mb-2">{projectTitle}</h5>
        <p className="text-gray-500 mb-1 text-xs">{projectDesc}</p>
        <a
          href={githubUrl}
          target="_blank"
          className="fit text-xs mt-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          View on github
        </a>
      </div>
    </div>
  );
};
