import { Works } from '../../interfaces/Works';
import { PortfolioCard } from './PortfolioCard';

const works: Works[] = [
  {
    id: 0,
    name: 'Malen Prop',
    desc: 'Sitio web informativo con botón de WhatsApp. El sitio web fue pensado por el cliente.',
    img: '/img/malenProp.jpg',
    url: 'https://www.malenprop.com/',
    online: true,
    tags: ['wp', 'elementor'],
  },
  {
    id: 1,
    name: 'Zar del fitness',
    desc: 'Sitio web de informativo + funcionalidad de tienda online y blog incorporados',
    img: '/img/zardelfitness.jpg',
    url: 'https://zardelfitness.com.ar/',
    online: true,
    tags: ['wp', 'elementor', 'woocommerce'],
  },
  {
    id: 2,
    name: 'Vision autentic',
    desc: 'Sitio web informativo + funcionalidad de tienda online. ',
    img: '/img/visionautentic.jpg',
    url: '',
    online: false,
    tags: ['wp', 'elementor', 'woocommerce'],
  },
  {
    id: 3,
    name: 'LM Viajes Privados',
    desc: 'Sitio web informativo, con formulario para captar leads y botón de WhatsApp.',
    img: '/img/lmviajes.jpg',
    url: '',
    online: false,
    tags: ['wp', 'elementor', 'woocommerce'],
  },
  {
    id: 4,
    name: 'Sebas code',
    desc: 'Blog con entradas en Sanity.io, changelog desarrollado de cero, carrito de compras y Auth con firebase.',
    img: '/img/sebascode.jpg',
    url: 'https://sebastiandiaz.com.ar/',
    online: true,
    tags: ['reactjs', 'firebase', 'commercejs'],
  },
  {
    id: 5,
    name: 'JALF Dashboard',
    desc: 'Aplicación web para gestionar stock, pedidos, clientes y organización del negocio.',
    img: '/img/jalfdashboard.jpg',
    url: '',
    online: false,
    tags: ['reactjs', 'firebase', 'redux'],
  },
  {
    id: 6,
    name: '1000 tickets',
    desc: 'Sitio web de tickets online, diseñado con el estilo que pidio el cliente y desarrollado por un experto en PHP.',
    img: '/img/1000tickets.jpg',
    url: 'https://1000tickets.com.ar/',
    online: true,
    tags: ['html', 'bootstrap', 'php'],
  },
  {
    id: 7,
    name: 'Barboza amoblamientos',
    desc: 'Sitio web con funcionalidad de tienda online y informacion detallada sobre como trabajan.',
    img: '/img/barboza.jpg',
    url: '',
    online: false,
    tags: ['wp', 'elementor', 'woocommerce'],
  },
  {
    id: 8,
    name: 'Regodeo catering',
    desc: 'Sitio web informativo sobre servicios de catering',
    img: '/img/regodeo.jpg',
    url: '',
    online: false,
    tags: ['wp', 'elementor'],
  },
  {
    id: 9,
    name: 'Casa Gabra',
    desc: 'Tienda online con sistema de login / registro de usuarios',
    img: '/img/casagabra.jpg',
    url: '',
    online: false,
    tags: ['wp', 'elementor', 'woocommerce'],
  },
  {
    id: 10,
    name: 'Mer poledance',
    desc: 'Sitio web educativo para escuela de Poledance. ',
    img: '/img/merPoledance.jpg',
    url: '',
    online: false,
    tags: ['wp', 'elementor', 'woocommerce'],
  },
  {
    id: 11,
    name: 'Federagro',
    desc: 'Sitio web informativo basado en el diseño que pidio el cliente',
    img: '/img/federagro.jpg',
    url: 'https://federagro.ar',
    online: true,
    tags: ['wp', 'elementor'],
  },
];

export const Portfolio = () => {
  return (
    <>
      <div id='portfolio' className='p-10 bg-white flex flex-col items-start'>
        <div className=' flex items-center'>
          <h2 className='font-bold text-left text-2xl'>
            Estos son algunos de mis trabajos
          </h2>
        </div>
        {/* Services grid */}
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
          {works.map((work) => (
            <PortfolioCard key={work.id} {...work} />
          ))}
        </div>
        {/* End services grid */}
      </div>
    </>
  );
};
