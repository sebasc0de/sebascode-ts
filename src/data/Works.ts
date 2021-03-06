import { Work } from "../interfaces/Works";
import { v4 as uuid } from "uuid";

export const works: Work[] = [
  {
    id: uuid(),
    name: "malenProp",
    displayName: "Malen Prop",
    desc: "Sitio web informativo con botón de WhatsApp. El sitio web fue pensado por el cliente.",
    img: "/img/malenProp.jpg",
    url: "https://www.malenprop.com/",
    online: true,
    type: "Wordpress",
    tags: ["wp", "elementor"],
    date: "2019",
  },
  {
    id: uuid(),
    name: "zarDelFitness",
    displayName: "Zar del fitness",
    desc: "Sitio web de informativo + funcionalidad de tienda online y blog incorporados",
    img: "/img/zardelfitness.jpg",
    url: "https://zardelfitness.com.ar/",
    online: true,
    type: "Wordpress",
    tags: ["wp", "elementor", "woocommerce"],
    date: "2019",
  },
  {
    id: uuid(),
    name: "visionAutentic",
    displayName: "Vision autentic",
    desc: "Sitio web informativo + funcionalidad de tienda online. ",
    img: "/img/visionautentic.jpg",
    url: "",
    type: "Wordpress",
    online: false,
    tags: ["wp", "elementor", "woocommerce"],
    date: "2017-2018",
  },
  {
    id: uuid(),
    name: "LMViajes",
    displayName: "LM Viajes Privados",
    desc: "Sitio web informativo, con formulario para captar leads y botón de WhatsApp.",
    img: "/img/lmviajes.jpg",
    url: "",
    type: "Wordpress",
    online: false,
    tags: ["wp", "elementor", "woocommerce"],
    date: "2017-2018",
  },
  {
    id: uuid(),
    name: "SebasCode",
    displayName: "Sebas code",
    progress: "w-96",
    desc: "Mi website personal para mostrar todos mis trabajos y redes sociales. ",
    gitHub: "https://github.com/sebasc0de/sebascode-ts",
    img: "/img/sebas.png",
    url: "https://sebascode.com/",
    online: true,
    type: "Full Stack",
    tags: ["reactjs"],
    date: "2020",
  },
  {
    id: uuid(),
    name: "Codery",
    displayName: "Codery",
    progress: "w-20",
    desc: "App para restaurantes, mejora la experiencia de compra del usuario final.",
    img: "/logos/codery.png",
    url: "https://sebastiandiaz.com.ar/",
    online: true,
    type: "Full Stack",
    tags: ["reactjs", "nodejs", "mongodb"],
    date: "2020",
  },
  {
    id: uuid(),
    name: "JALF-dashboard",
    displayName: "JALF Dashboard",
    desc: "Gestion de stock, pedidos, clientes y organización del negocio.",
    img: "/logos/JALF.png",
    progress: "w-20",
    url: "",
    type: "Full Stack",
    online: false,
    tags: ["reactjs", "firebase", "nodejs"],
    date: "2020-2021",
  },
  // {
  //   id: uuid(),
  //   name: "1000tickets",
  //   displayName: "1000 tickets",
  //   desc: "Sitio web de tickets online, diseñado con el estilo que pidio el cliente y desarrollado por un experto en PHP.",
  //   img: "/img/1000tickets.jpg",
  //   url: "https://1000tickets.com.ar/",
  //   online: true,
  //   type: "Full Stack",
  //   tags: ["html", "bootstrap", "php"],
  //   date: "2018",
  // },
  {
    id: uuid(),
    name: "barboza",
    displayName: "Barboza amoblamientos",
    desc: "Sitio web con funcionalidad de tienda online y informacion detallada sobre como trabajan.",
    img: "/img/barboza.jpg",
    url: "",
    type: "Wordpress",
    online: false,
    tags: ["wp", "elementor", "woocommerce"],
    date: "2018",
  },
  {
    id: uuid(),
    name: "regodeo",
    displayName: "Regodeo catering",
    desc: "Sitio web informativo sobre servicios de catering",
    img: "/img/regodeo.jpg",
    url: "",
    type: "Wordpress",
    online: false,
    tags: ["wp", "elementor"],
    date: "2017-2018",
  },
  {
    id: uuid(),
    name: "casagabra",
    displayName: "Casa Gabra",
    desc: "Tienda online con sistema de login / registro de usuarios",
    img: "/img/casagabra.jpg",
    url: "",
    type: "Wordpress",
    online: false,
    tags: ["wp", "elementor", "woocommerce"],
    date: "2017-2018",
  },
  {
    id: uuid(),
    name: "merPoledance",
    displayName: "Mer poledance",
    desc: "Sitio web educativo para escuela de Poledance. ",
    img: "/img/merPoledance.jpg",
    url: "",
    type: "Wordpress",
    online: false,
    tags: ["wp", "elementor", "woocommerce"],
    date: "2019",
  },
  {
    id: uuid(),
    name: "federagro",
    displayName: "Federagro",
    desc: "Sitio web informativo basado en el diseño que pidio el cliente",
    img: "/img/federagro.jpg",
    url: "https://federagro.ar",
    online: true,
    type: "Wordpress",
    tags: ["wp", "elementor"],
    date: "2019",
  },
];
