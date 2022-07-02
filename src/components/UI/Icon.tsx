export const Icon = ({ url }: { url: string }) => {
  return (
    <div className="p-1 bg-white rounded-md border border-gray-200/40">
      <img src={url} className="w-4 h-4" />
    </div>
  );
};
