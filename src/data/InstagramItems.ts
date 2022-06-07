import { v4 as uuid } from "uuid";

export interface Instagram {
  id: string;
  title: string;
  desc: string;
  url: string;
  img: string;
}

export const InstagramItems: Instagram[] = [
  {
    id: uuid(),
    title: "Preguntas frecuentes",
    desc: "Respondo preguntas frecuentes de mis seguidores en Instagram.",
    img: "Mira esto",
    url: "https://www.instagram.com/stories/highlights/17919149404497690/",
  },
  {
    id: uuid(),
    title: "Testimonios de clientes",
    desc: "Videos y palabras de mis clientes acerca de como trabajo.",
    img: "Mira esto",
    url: "https://www.instagram.com/stories/highlights/17914070968501040/",
  },
  {
    id: uuid(),
    title: "Tips de todo tipo",
    desc: "Info sobre como crecer tu marca, consejos sobre webs, etc. Un poco de orientacion general.",
    img: "Mira esto",
    url: "https://www.instagram.com/stories/highlights/17918979880411658/",
  },
  {
    id: uuid(),
    title: "Preguntas parte 2",
    desc: "Respondo preguntas frecuentes de mis seguidores en Instagram.",
    img: "Mira esto",
    url: "https://www.instagram.com/stories/highlights/17912640991688442/",
  },
  {
    id: uuid(),
    title: "Muestras de sitios web",
    desc: "Un pequeño review rapido de los sitios web en los que estaba trabajando al momento de subir la historia.",
    img: "",
    url: "https://www.instagram.com/stories/highlights/17875783678708732/",
  },
  {
    id: uuid(),
    title: "Estrategias de venta",
    desc: "Te cuento como implemento las estrategias que uso dia-a-dia para vender en negocio familiar.",
    img: "",
    url: "https://www.instagram.com/stories/highlights/17867070941297650/",
  },
];
