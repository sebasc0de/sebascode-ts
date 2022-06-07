import { Video } from "../interfaces/Video";

export const fetchYoutubeVideos = async () => {
  const request = await fetch(
    "https://www.googleapis.com/youtube/v3/search?key=AIzaSyB2uQkWHQW_rt2F30VH0rmLlzvasinA5dA&part=snippet&channelId=UCgQr1eWf00URIYPs3f8sVyA&maxResults=24"
  );
  const data = (await request.json()) as Video;
  const filter = data.items.filter(
    (element) => element.snippet.title !== "sebascode"
  );
  return filter;
};
