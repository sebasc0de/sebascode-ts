interface Props {
  text: string;
  shadow?: boolean;
  outline?: boolean;
  action?: () => void;
}

export const Button = ({
  action,
  outline = false,
  text,
  shadow = false,
}: Props) => {
  // Conditional button styling
  const STYLES = {
    normal: `bg-blue-600 ${
      shadow && "shadow-md shadow-blue-600"
    } rounded-full py-1 w-36`,
    outline:
      "text-blue-600 border-2 border-blue-600 rounded-full w-36 font-medium",
  };

  return (
    <button
      onClick={action}
      className={outline ? STYLES.outline : STYLES.normal}
    >
      {text}
    </button>
  );
};
