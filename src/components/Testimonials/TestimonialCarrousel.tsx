import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Testimonials } from '../../data/Testimonials';

export const TestimonialCarrousel = () => {
  const resumeTestimonial = (testimonial: string) => {
    if (testimonial.length > 200) {
      return testimonial.slice(0, 150) + '...';
    }

    return testimonial;
  };
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={5000}
      autoPlay={true}
      infiniteLoop={true}
    >
      {Testimonials.map((item) => (
        <div className='flex flex-col md:flex-row justify-center gap-10 md:gap-20'>
          <div
            key={item.item1.displayName}
            className='flex flex-col items-center gap-5'
          >
            <img className='h-20 object-contain' src='/img/sebas.png' />
            <div className='bg-white w-72 rounded-md p-3'>
              <h2 className='font-bold'>{item.item1.displayName}</h2>
              <p className='text-xs text-gray-500'>
                {resumeTestimonial(item.item1.testimonial)}
              </p>
              <a href='' className='text-xs text-blue-500 font-bold'>
                Leer mas
              </a>
            </div>
          </div>
          <div
            key={item.item2.displayName}
            className='flex flex-col items-center gap-5'
          >
            <img className='h-20 object-contain' src='/img/sebas.png' />
            <div className='bg-white w-72 rounded-md p-3'>
              <h2 className='font-bold'>{item.item2.displayName}</h2>
              <p className='text-xs text-gray-500'>
                {resumeTestimonial(item.item2.testimonial)}
              </p>
              <a href='' className='text-xs text-blue-500 font-bold'>
                Leer mas
              </a>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
