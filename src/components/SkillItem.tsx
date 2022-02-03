export const SkillItem = ({ title, desc, img }: any) => {
  return (
    <div className='bg-white flex flex-col items-center justify-center p-3 md:p-5 lg:py-20 rounded-md drop-shadow-sm'>
      <img src={img} className='w-20 mb-3' />
      <div>
        <h2 className='text-center font-semibold'>{title}</h2>
        <p className='text-center text-xs'>{desc}</p>
      </div>
    </div>
  );
};
