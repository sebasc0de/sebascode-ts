export const Instagram = ({ display }: { display: number }) => {
  return <div className={display === 3 ? "block" : "hidden"}>Learning</div>;
};
