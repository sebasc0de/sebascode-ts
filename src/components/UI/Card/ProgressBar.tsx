export const ProgressBar = () => {
  return (
    <div>
      <small className="font-medium text-xs">Progreso del proyecto:</small>
      <div className="w-full mt-1 h-3 bg-slate-200 rounded-full relative overflow-hidden">
        <div className="absolute w-36 h-3 bg-blue-600 z-20 block"></div>
      </div>
    </div>
  );
};
