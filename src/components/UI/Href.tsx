interface Props {
  text: string;
  url: string;
  outline?: boolean;
}

export const Href = ({ outline = false, url, text }: Props) => {
  // Conditional button styling
  const STYLES = {
    normal: `bg-blue-600 rounded-full py-1 h-10 w-36`,
    outline:
      "text-blue-600 border-2 border-blue-600 rounded-full h-10 w-36 font-medium",
  };

  return (
    <a target="_blank" href={url}>
      <button className={outline ? STYLES.outline : STYLES.normal}>
        {text}
      </button>
    </a>
  );
};
