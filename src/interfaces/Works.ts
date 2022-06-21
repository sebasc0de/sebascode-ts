export interface Work {
  id: string;
  name: string;
  displayName: string;
  desc: string;
  img: string;
  url?: string;
  gitHub?: string;
  type: "Full Stack" | "Wordpress";
  online: boolean;
  tags: string[];
  date: string;
}
