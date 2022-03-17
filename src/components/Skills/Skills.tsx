import { SkillItem } from './SkillItem';

// Skills array for TSX
const mySkills = [
  {
    id: 1,
    title: 'React',
    desc: '1 año de experiencia en React.',
    img: '/img/react.png',
  },
  {
    id: 2,
    title: 'Redux',
    desc: '1 año de experiencia con Redux',
    img: '/img/redux.png',
  },
  {
    id: 3,
    title: 'Firebase',
    desc: '1 año de experiencia con firebase',
    img: '/img/firebase.png',
  },
  {
    id: 4,
    title: 'Tailwind',
    desc: '2 años de experiencia con Tailwind',
    img: '/img/tailwind.png',
  },
  {
    id: 5,
    title: 'Bootstrap',
    desc: '4 años de experiencia con Bootstrap',
    img: '/img/bootstrap.png',
  },
  {
    id: 6,
    title: 'Photoshop',
    desc: '+10 años de experiencia con Photoshop',
    img: '/img/photoshop.png',
  },
  {
    id: 7,
    title: 'Wordpress',
    desc: '5 años de experiencia con Wordpress',
    img: '/img/wordpress.png',
  },
  {
    id: 8,
    title: 'Elementor',
    desc: '3 años de experiencia con Elementor',
    img: '/img/elementor.png',
  },
];

export const Skills = () => {
  return (
    <div className="bg-gray-50 p-3 md:p-10 flex flex-col">
      {/* Titulo y descripcion */}
      <div>
        <h2 className="font-bold text-left text-2xl">Mis skills</h2>
      </div>

      {/* Grilla de habilidades */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-5">
        {/* Skill card */}
        {mySkills.map((skill) => (
          <SkillItem key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  );
};
