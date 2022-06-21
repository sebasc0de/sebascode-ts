export interface Work {
  id: number;
  name: string;
  displayName: string;
  desc: string;
  img: string;
  url?: string;
  type: "Full Stack" | "Wordpress";
  online: boolean;
  tags: string[];
}
