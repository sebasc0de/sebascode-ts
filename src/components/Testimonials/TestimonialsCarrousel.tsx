import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Testimonials } from '../../data/Testimonials';
import { AnimatePresence, motion } from 'framer-motion';
import { TestimonialStore } from '../../zustand/TestimonialsStore';

export const TestimonialCarrousel = () => {
  const show = TestimonialStore((state) => state.show);
  console.log(show);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            y: '100px',
          }}
          animate={{
            opacity: 1,
            y: '0px',
            transition: { duration: 1 },
          }}
          exit={{
            opacity: 0,
            y: '100px',
            transition: { duration: 1 },
          }}
          onClick={() =>
            location.replace(
              'https://www.instagram.com/stories/highlights/17914070968501040/'
            )
          }
          className='fixed z-50 bottom-0 left-0 m-3 bg-white rounded-full drop-shadow-md md:w-80 w-80 cursor-pointer'
        >
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            animationHandler={'fade'}
            interval={5000}
            stopOnHover={true}
          >
            {Testimonials.map((item) => (
              <div
                key={item.displayName}
                className='flex items-center justify-start gap-2 pr-2 py-1.5 pl-2 '
              >
                <div>
                  {item.img ? (
                    <img src={item.img} className='object-contain h-10' />
                  ) : (
                    <img
                      src='/avatars/defautl.png'
                      className='object-contain h-10'
                    />
                  )}
                </div>
                <div>
                  <div className='flex justify-start md:justify-start items-center gap-2 mb-0.5'>
                    <h2 className='font-bold text-sm'>{item.displayName}</h2>
                    <div>
                      <FontAwesomeIcon
                        className='text-sm text-amber-300'
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className='text-sm text-amber-300'
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className='text-sm text-amber-300'
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className='text-sm text-amber-300'
                        icon={faStar}
                      />
                      <FontAwesomeIcon
                        className='text-sm text-amber-300'
                        icon={faStar}
                      />
                    </div>
                  </div>
                  <p className='text-gray-500 text-xs'>
                    {item.testimonial.slice(0, 35)}...
                    <a className='text-blue-600'>Ver mas</a>
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
