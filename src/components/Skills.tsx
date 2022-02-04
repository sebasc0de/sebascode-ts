import { SkillItem } from './SkillItem';

// Skills array for TSX
const mySkills = [
  {
    id: 1,
    title: 'React JS',
    desc: 'Una pequeña descripcion',
    img: '/public/img/react.png',
  },
  {
    id: 2,
    title: 'Redux',
    desc: 'Una pequeña descripcion',
    img: '/public/img/redux.png',
  },
  {
    id: 3,
    title: 'Firebase',
    desc: 'Una pequeña descripcion',
    img: '/public/img/firebase.png',
  },
  {
    id: 4,
    title: 'Tailwind CSS',
    desc: 'Una pequeña descripcion',
    img: '/public/img/tailwind.png',
  },
  {
    id: 5,
    title: 'Bootstrap',
    desc: 'Una pequeña descripcion',
    img: '/public/img/bootstrap.png',
  },
  {
    id: 6,
    title: 'Photoshop',
    desc: 'Una pequeña descripcion',
    img: '/public/img/photoshop.png',
  },
  {
    id: 7,
    title: 'Wordpress',
    desc: 'Una pequeña descripcion',
    img: '/public/img/wordpress.png',
  },
  {
    id: 8,
    title: 'Elementor',
    desc: 'Una pequeña descripcion',
    img: '/public/img/elementor.png',
  },
];

export const Skills = () => {
  return (
    <div className='bg-gray-50 p-10 flex flex-col'>
      {/* Titulo y descripcion */}
      <div>
        <h2 className='font-bold text-left text-2xl'>Mis skills</h2>
      </div>

      {/* Grilla de habilidades */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-5'>
        {/* Skill card */}
        {mySkills.map((skill) => (
          <SkillItem
            key={skill.id}
            title={skill.title}
            desc={skill.desc}
            img={skill.img}
          />
        ))}
      </div>
    </div>
  );
};
