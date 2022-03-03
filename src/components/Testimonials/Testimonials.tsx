import { TestimonialCarrousel } from './TestimonialCarrousel';

export const Testimonials = () => {
  return (
    <div className='flex flex-col md:gap-20 gap-10 p-3 md:px-20 md:py-5 py-5 bg-blue-500 '>
      <div>
        <h2 className='text-3xl md:text-4xl text-white font-bold text-center'>
          Que opinan mis clientes
        </h2>
        <p className='text-center text-white'>
          Estos son los testimonios que me han dejado todos mis clientes a lo
          largo de este tiempo.
        </p>
      </div>
      <div>
        <TestimonialCarrousel />
      </div>
    </div>
  );
};
