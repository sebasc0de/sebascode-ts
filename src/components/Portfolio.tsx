import { ServiceCard } from './ServiceCard';

const works = [
  {
    id: 0,
    name: 'Malen Prop',
    desc: 'Sitio web de Inmobiliaria, su objetivo es captar leads. Lalaladmsalsdm',
    img: '/public/img/malenProp.jpg',
    url: '',
    tags: ['wp', 'elementor'],
  },
  {
    id: 1,
    name: 'Zar del fitness',
    desc: 'Sitio web de informativo + funcionalidad de tienda online y blog.',
    img: '/public/img/zardelfitness.jpg',
    url: '',
    tags: ['wp', 'elementor', 'woocommerce'],
  },
  {
    id: 2,
    name: 'Vision autentic',
    desc: 'Sitio web de Inmobiliaria, su objetivo es captar leads.',
    img: '/public/img/visionautentic.jpg',
    url: '',
    tags: ['wp', 'elementor', 'woocommerce'],
  },
  {
    id: 3,
    name: 'LM Viajes Privados',
    desc: 'Sitio web de Inmobiliaria, su objetivo es captar leads.',
    img: '/img/lmviajes.jpg',
    url: '',
    tags: ['wp', 'elementor', 'woocommerce'],
  },
  {
    id: 4,
    name: 'Sebas code',
    desc: 'Sitio web de Inmobiliaria, su objetivo es captar leads.',
    img: '/img/sebascode.jpg',
    url: '',
    tags: ['reactjs', 'firebase', 'commercejs', 'sanity'],
  },
  {
    id: 5,
    name: 'JALF Dashboard',
    desc: 'Sitio web de Inmobiliaria, su objetivo es captar leads.',
    img: '/img/jalfdashboard.jpg',
    url: '',
    tags: ['reactjs', 'firebase', 'redux', 'sanity'],
  },
];

export const Portfolio = () => {
  return (
    <div className='p-10 bg-white flex flex-col items-center '>
      <div className='mb-5'>
        <h2 className='font-black text-center mb-0 text-5xl mb-2'>
          Estos son mis <span className='text-blue-500'>trabajos</span>
        </h2>
        <p className='text-gray-500 text-center text-xl'>
          Dale un vistazo al proyecto que mas te llame la atencion de mi
          portfolio.
        </p>
      </div>

      {/* Services grid */}
      <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-5'>
        {works.map((work) => (
          <ServiceCard
            key={work.id}
            name={work.name}
            img={work.img}
            url={work.url}
            desc={work.desc}
            tags={work.tags}
          />
        ))}
      </div>
      {/* End services grid */}
    </div>
  );
};
