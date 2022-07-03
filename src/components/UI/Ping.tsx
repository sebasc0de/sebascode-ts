interface Props {
  position: string;
  size: string;
}

export const Ping = ({
  position = "right-0 top-0",
  size = "w-2.5 h-2.5",
}: Props) => {
  return (
    <>
      <div
        className={`${size} block bg-green-600 absolute rounded-full ${position} z-10`}
      ></div>
      <div
        className={`${size} animate-ping z-20 block bg-green-600 absolute rounded-full ${position}`}
      ></div>
    </>
  );
};
