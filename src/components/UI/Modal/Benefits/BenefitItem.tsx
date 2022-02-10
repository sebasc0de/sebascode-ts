import { Benefit } from '../../../../interfaces/Benefits';

export const BenefitItem = (item: Benefit) => {
  return (
    <div className='flex flex-col justify-between items-center p-10 bg-white rounded-xl drop-shadow-sm'>
      <div className='mb-10'>
        <h4 className='font-medium text-blue-600 text-lg'>{item.name}</h4>
        <p className='text-apple-900 text-lg font-medium mt-1.5'>{item.desc}</p>
      </div>

      <img src={item.img} className='w-40' />
    </div>
  );
};
