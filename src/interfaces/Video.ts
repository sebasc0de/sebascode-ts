export interface Video {
  kind: string;
  etag: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: Item[];
}

export interface Item {
  kind: ItemKind;
  etag: string;
  id: ID;
  snippet: Snippet;
}

export interface ID {
  kind: IDKind;
  videoId?: string;
  channelId?: ChannelID;
}

export enum ChannelID {
  UCGQr1EWf00URIYPs3F8SVyA = "UCgQr1eWf00URIYPs3f8sVyA",
}

export enum IDKind {
  YoutubeChannel = "youtube#channel",
  YoutubeVideo = "youtube#video",
}

export enum ItemKind {
  YoutubeSearchResult = "youtube#searchResult",
}

export interface Snippet {
  publishedAt: Date;
  channelId: ChannelID;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: ChannelTitle;
  liveBroadcastContent: LiveBroadcastContent;
  publishTime: Date;
}

export enum ChannelTitle {
  Sebascode = "sebascode",
}

export enum LiveBroadcastContent {
  None = "none",
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
}

export interface Default {
  url: string;
  width?: number;
  height?: number;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
