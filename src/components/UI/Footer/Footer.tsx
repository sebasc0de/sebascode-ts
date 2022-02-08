export const Footer = () => {
  return (
    <div className='container-fluid bg-slate-50 border-t border-gray-200'>
      <div className='container mx-auto p-5 flex justify-between items-center'>
        <p className='text-gray-500 text-xs'>@2022 Nahuel Sebastian Diaz</p>

        <ul className='flex gap-5'>
          <li className='text-gray-500 text-xs'>
            <a href='https://www.youtube.com/channel/UCgQr1eWf00URIYPs3f8sVyA'>
              <i className='fab fa-youtube'></i>
            </a>
          </li>
          <li className='text-gray-500 text-xs'>
            <a href='https://www.instagram.com/sebas.code/'>
              <i className='fab fa-instagram'></i>
            </a>
          </li>
          <li className='text-gray-500 text-xs'>
            <a href='mailto:nahuelsebastiandiaz@gmail.com'>
              <i className='far fa-envelope'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
