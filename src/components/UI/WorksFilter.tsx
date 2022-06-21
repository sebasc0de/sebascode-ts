interface Props {
  setType: (type: string) => void;
}
export const WorksFilter = ({ setType }: Props) => {
  return (
    <div className="flex items-center gap-1.5">
      <img
        onClick={() => setType("Full Stack")}
        src="./logos/react.png"
        className="w-9 bg-slate-50 border border-gray-200/40 rounded-md p-1 cursor-pointer"
      />
      <img
        onClick={() => setType("Wordpress")}
        src="./logos/wordpress.png"
        className="w-9 bg-slate-50 border border-gray-200/40 rounded-md p-1 cursor-pointer"
      />
    </div>
  );
};
