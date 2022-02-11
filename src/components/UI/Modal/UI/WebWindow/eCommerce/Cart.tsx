import { motion } from 'framer-motion';

const products = [
  {
    name: 'Vision one men',
    price: 145,
    img: '/img/product1.jpg',
  },
  {
    name: 'Vision one women',
    price: 145,
    img: '/img/product2.jpg',
  },
];

export const Cart = ({ showCart, setShowCart }: any) => {
  return (
    <>
      {showCart && (
        <motion.div className='absolute overflow-hidden z-10 right-0 bg-black/60 rounded-b-lg w-full h-screen shadow-lg'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0 }}
            className='fixed flex flex-col justify-between p-3 right-0 shadow-2xl bg-white w-52 h-104'
          >
            {/* Header cart */}
            <div className='flex flex-col'>
              <div className='flex justify-between'>
                <h2 className='font-bold text-md'>Carrito</h2>
                <button
                  onClick={() => setShowCart(!showCart)}
                  className='Small text-gray-500 font-bold'
                >
                  Close
                </button>
              </div>

              {/* Items */}
              <div className='mt-5 flex flex-col gap-3'>
                <li className='flex items-start gap-2'>
                  <img src='/img/product1.jpg' className='w-10 rounded-md' />
                  <div>
                    <p className='text-black text-xs font-bold text-apple-900'>
                      Vision one men
                    </p>
                    <small className='block text-gray-600 Small'>
                      Precio: $145 USD
                    </small>
                  </div>
                </li>
                <li className='flex items-start gap-2'>
                  <img src='/img/product2.jpg' className='w-10 rounded-md' />
                  <div>
                    <p className='text-black text-xs font-bold text-apple-900'>
                      Vision one women
                    </p>
                    <small className='block text-gray-600 Small'>
                      Precio: $145 USD
                    </small>
                  </div>
                </li>
              </div>
            </div>

            {/* Cart buttons */}
            <div className='flex justify-center'>
              <button
                onClick={() => setShowCart(!showCart)}
                className='bg-black text-xs font-medium rounded-sm p-1 w-full text-white'
              >
                Cerrar carrito
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
