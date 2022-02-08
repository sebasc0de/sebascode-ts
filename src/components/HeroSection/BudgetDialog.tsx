export const BudgetDialog = () => {
  return (
    <div className='min-h-full flex items-center justify-center'>
      <div className='relative'>
        <img src='/img/see-budget.png' />

        {/* Portfolio */}

        <div className='absolute float font-bold text-md drop-shadow-md bg-white rounded-md text-xs md:text-md p-3 text-zinc-800 gap-2 -top-10 -right-10 text-center flex flex-col items-center'>
          Haz click en el tipo de sitio web en el que estas interesad@
        </div>
      </div>
    </div>
  );
};
