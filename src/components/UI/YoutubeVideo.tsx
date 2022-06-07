import { Item } from "../../interfaces/Video";

export const YoutubeVideo = (video: Item) => {
  const VIDEO_URL = `https://www.youtube.com/watch?v=${video.id.videoId}`;

  return (
    <div className="youtubeVideo tabItem flex items-center gap-3">
      {/* Skill image */}

      <img className="w-10 object-cover rounded-md" src="./logos/youtube.png" />

      {/* Skill info */}
      <div>
        <a className="text-xs" target={"_blank"} href={VIDEO_URL}>
          {video.snippet.title}
        </a>
        <small>{video.snippet.description}</small>
      </div>
    </div>
  );
};
