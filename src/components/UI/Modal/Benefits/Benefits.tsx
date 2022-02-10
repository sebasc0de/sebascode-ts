import { BenefitItem } from './BenefitItem';
import { Benefit } from '../../../../interfaces/Benefits';

const techBenefits: Benefit[] = [
  {
    name: 'Diseños personalizados',
    desc: 'Disfruta de peliculas y series en streaning durante una llamada de Facetime. La reproduccion y los controles se sincronizan para que todos rian.',
    img: 'img/1.png',
  },
  {
    name: 'Poco tiempo de espera',
    desc: 'Disfruta de peliculas y series en streaning durante una llamada de Facetime. La reproduccion y los controles se sincronizan para que todos rian.',
    img: 'img/1.png',
  },
  {
    name: 'Presupuestos economicos',
    desc: 'Disfruta de peliculas y series en streaning durante una llamada de Facetime. La reproduccion y los controles se sincronizan para que todos rian.',
    img: 'img/1.png',
  },
];

export const Benefits = () => {
  return (
    <div className='p-20 min-h-screen bg-slate-50 grid grid-cols-3 gap-5'>
      {techBenefits.map((item) => (
        <BenefitItem key={item.name} {...item} />
      ))}
    </div>
  );
};
