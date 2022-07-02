export const Tooltip = ({ show = false }: { show: boolean }) => {
  return (
    <>
      {show && (
        <div className="bg-blue-600 text-white font-medium text-xs absolute rounded-md p-1 right-0 -translate-y-10">
          App para restaurantes
        </div>
      )}
    </>
  );
};
