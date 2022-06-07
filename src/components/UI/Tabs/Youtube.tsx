import { fetchYoutubeVideos } from "../../../helpers/fetchYoutubeVideos";
import { Item } from "../../../interfaces/Video";
import { useEffect, useState } from "react";
import { YoutubeVideo } from "../YoutubeVideo";

export const Youtube = ({ display }: { display: number }) => {
  const [videos, setVideos] = useState<Item[]>([]);

  useEffect(() => {
    fetchYoutubeVideos().then(setVideos);
  }, []);

  return (
    <div
      className={
        display === 2 ? "flex flex-col tabItemsContainer gap-8 px-5" : "hidden"
      }
    >
      {videos ? (
        videos.map((item) => (
          <YoutubeVideo key={item.snippet.channelId} {...item} />
        ))
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};
