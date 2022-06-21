const STYLES = {
  fullStack: "w-9 bg-slate-50 border-2 border-cyan-300/40 rounded-md p-1",
  Wordpress: "w-9 bg-slate-50 border border-sky-700/40 rounded-md p-1",
  normal:
    "w-9 bg-slate-50 border border-gray-200/40 rounded-md p-1 cursor-pointer",
};

export const WorksFilter = ({ setType, type }: Props) => {
  return (
    <div className="flex items-center gap-1.5">
      <img
        onClick={() => setType("Full Stack")}
        src="./logos/react.png"
        className={type === "Full Stack" ? STYLES.fullStack : STYLES.normal}
      />
      <img
        onClick={() => setType("Wordpress")}
        src="./logos/wordpress.png"
        className={type === "Wordpress" ? STYLES.Wordpress : STYLES.normal}
      />
    </div>
  );
};

interface Props {
  type: "Full Stack" | "Wordpress";
  setType: (type: "Full Stack" | "Wordpress") => void;
}
