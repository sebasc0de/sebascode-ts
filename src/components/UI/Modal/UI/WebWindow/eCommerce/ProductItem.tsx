export const ProductItem = ({ name, img }: any) => {
  return (
    <div className='flex flex-col gap-1 justify-center'>
      {/* Thumnail */}
      <div className='relative'>
        <img src={img} className='rounded-sm' />
        <span className='absolute font-medium top-1 right-3 bg-black text-white Small p-1 px-3 rounded-sm'>
          $350 USD
        </span>
      </div>

      {/* Info */}
      <div className='flex gap-2.5 justify-center items-center flex-col'>
        <p className='text-sm font-medium'>{name}</p>

        <button className='bg-black text-white text-xs rounded-sm p-1 px-2'>
          Ver carrito
        </button>
      </div>
    </div>
  );
};
