import { Instagram } from "../../data/InstagramItems";

export const InstagramItem = (item: Instagram) => {
  return (
    <div className="flex gap-3 instagramItem tabItem">
      <img src="./logos/instagram.png" className="w-8 object-contain" />
      <div>
        <a href="">{item.title}</a>
        <small>{item.desc}</small>
      </div>
    </div>
  );
};
