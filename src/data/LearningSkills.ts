import { v4 as uuid } from "uuid";

export interface LearningSkill {
  id: string;
  name: string;
  completed: boolean;
  instructorUrl: string;
  module: string;
  img: string;
}

export const LearningSkills: LearningSkill[] = [
  {
    id: uuid(),
    completed: false,
    name: "Node JS - Fernando Herrera",
    img: "./logos/nodejs.jpg",
    instructorUrl: "https://www.udemy.com/course/node-de-cero-a-experto/",
    module: "Actual module: JWT & Autenthication",
  },
  {
    id: uuid(),
    completed: true,
    name: "Typescript - Fernando Herrera",
    img: "./logos/typescript.jpg",
    instructorUrl: "https://www.udemy.com/course/typescript-guia-completa/",
    module: "Completed course",
  },
  {
    id: uuid(),
    completed: true,
    name: "TypeScript con Node.js y Express - midudev",
    img: "./logos/typescript.jpg",
    instructorUrl: "https://www.youtube.com/watch?v=ZpY5KdGQvwI&t=1175s",
    module: "Duration: 1h 37min on Youtube",
  },
  {
    id: uuid(),
    completed: true,
    name: "Aprendiendo NextJS con SSR - midudev",
    img: "./logos/nextJs.jpg",
    instructorUrl:
      "https://www.youtube.com/watch?v=2jxc8DMzt0I&list=PLV8x_i1fqBw1VR86y4C72xMGJ8ifjBwJ6",
    module: "Duration: 11h on Youtube videos",
  },
  {
    id: uuid(),
    name: "GraphQL Parte 1 - midudev",
    completed: true,
    img: "./logos/graphQl.jpg",
    instructorUrl: "https://www.youtube.com/watch?v=QG-qbmW-wes&t=1609s",
    module: "Duration: 42 min on Youtube",
  },
  {
    id: uuid(),
    name: "GraphQL Parte 2 - midudev",
    completed: true,
    img: "./logos/graphQl.jpg",
    instructorUrl: "https://www.youtube.com/watch?v=3vldzoNRz-8",
    module: "Duration: 18 min on Youtube",
  },
  {
    id: uuid(),
    name: "Conecta MongoDB con GraphQL - midudev",
    completed: true,
    img: "./logos/graphQl.jpg",
    instructorUrl: "https://www.youtube.com/watch?v=MoukujUvefs&t=2997s",
    module: "Duration: 1h 38 min on Youtube",
  },
  {
    id: uuid(),
    name: "React hooks y MERN - Fernando Herrera",
    completed: true,
    img: "./logos/reactJs.jpg",
    instructorUrl: "https://www.udemy.com/course/react-cero-experto/",
    module: "Completed course",
  },
  {
    id: uuid(),
    name: "React PRO - Fernando Herrera",
    completed: false,
    img: "./logos/reactJs.jpg",
    instructorUrl: "https://www.udemy.com/course/react-pro/",
    module: "Completed at module 8",
  },
];
