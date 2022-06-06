interface Props {
  text: string;
  shadow?: boolean;
  action: () => void;
}

export const Button = ({ action, text, shadow = false }: Props) => {
  return (
    <button
      onClick={action}
      className={`flex gap-2 items-center bg-blue-600 ${
        shadow && "shadow-md shadow-blue-600"
      } rounded-full py-1 px-3`}
    >
      <p className="text-md text-white font-medium">{text}</p>
    </button>
  );
};
