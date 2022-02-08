export const Topbar = () => {
  return (
    <div className='bg-slate-50 border-b border-gray-200 p-3 flex items-center justify-between'>
      <div className='text-gray-600 text-xs font-medium underline cursor-not-allowed'>
        ESPAÑOL
      </div>

      <ul className='flex gap-4 items-center'>
        <li className='text-zinc-800 text-sm'>
          <a href='https://www.youtube.com/channel/UCgQr1eWf00URIYPs3f8sVyA'>
            <i className='fab fa-youtube'></i>
          </a>
        </li>
        <li className='text-zinc-800 text-sm'>
          <a href='https://www.instagram.com/sebas.code/'>
            <i className='fab fa-instagram'></i>
          </a>
        </li>
        <li className='text-zinc-800 text-sm'>
          <a href='mailto:nahuelsebastiandiaz@gmail.com'>
            <i className='fas fa-envelope'></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
