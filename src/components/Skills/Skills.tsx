import { useTranslation } from 'react-i18next';
import { SkillItem } from './SkillItem';

// Skills array for TSX
const mySkills = [
  {
    id: 1,
    title: 'React',
    img: '/img/react.png',
  },
  {
    id: 2,
    title: 'Redux',
    img: '/img/redux.png',
  },
  {
    id: 3,
    title: 'Firebase',
    img: '/img/firebase.png',
  },
  {
    id: 4,
    title: 'Tailwind',
    img: '/img/tailwind.png',
  },
  {
    id: 5,
    title: 'Bootstrap',
    img: '/img/bootstrap.png',
  },
  {
    id: 6,
    title: 'Photoshop',
    img: '/img/photoshop.png',
  },
  {
    id: 7,
    title: 'Wordpress',
    img: '/img/wordpress.png',
  },
  {
    id: 8,
    title: 'Elementor',
    img: '/img/elementor.png',
  },
];

export const Skills = () => {
  const [t] = useTranslation('global');

  return (
    <div className="bg-gray-50 p-3 md:p-10 flex flex-col">
      {/* Titulo y descripcion */}
      <div>
        <h2 className="font-bold text-left text-2xl">
          {t('skillsSection.title')}
        </h2>
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
