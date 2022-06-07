import { InstagramItems } from "../../../data/InstagramItems";
import { InstagramItem } from "../InstagramItem";

export const Instagram = ({ display }: { display: number }) => {
  return (
    <div
      className={
        display === 3 ? "flex flex-col tabItemsContainer gap-8 px-5" : "hidden"
      }
    >
      {InstagramItems.map((item) => (
        <InstagramItem key={item.id} {...item} />
      ))}
    </div>
  );
};
