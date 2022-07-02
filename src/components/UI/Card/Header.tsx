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
      <img src="./logos/codery.png" className="w-20 md:w-14 object-contain" />
      <div className="leading-4">
        <h5 className="font-bold w-fit mb-2">Codery</h5>
        <p className="text-gray-500 text-xs md:text-sm">
          Su objetivo es crear una experiencia de compra unica entre
          restaurantes y clientes finales.
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
