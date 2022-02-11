import { AnimatePresence, motion } from 'framer-motion';
import { ProductsGrid } from './ProductsGrid';
import { Cart } from './Cart';
import { useState } from 'react';
import { SelectorStore } from '../../../../../../zustand';

export const Ecommerce = () => {
  //eCommerce State
  const { ecommerce } = SelectorStore();

  // Cart Window
  const [showCart, setShowCart] = useState(false);

  return (
    <AnimatePresence>
      {ecommerce && (
        <motion.div className='relative h-104 bg-white rounded-b-lg overflow-auto window'>
          {/* Cart */}
          <Cart showCart={showCart} setShowCart={setShowCart} />

          {/* Top bar */}
          <div className='bg-black text-white font-medium text-center Small p-0.5'>
            BY 8PM FOR DAY DESPATCH. DISCOUNTED WORLDWIDE DELIVERY
          </div>
          {/* Header */}
          <div className='flex border-b border-gray-200 gap-3 justify-between items-center bg-white py-1.5 px-10'>
            <div className='text-xs font-black'>
              <img src='/img/visionLogo.png' className='h-6' />
            </div>
            <div>
              <ul className='hidden md:flex justify-between gap-10'>
                <li className='Small font-bold text-apple-900 uppercase'>
                  Inicio
                </li>
                <li className='Small font-bold text-apple-900 uppercase'>
                  Blog
                </li>
                <li className='Small font-bold text-apple-900 uppercase'>
                  Tienda
                </li>
                <li className='Small font-bold text-apple-900 uppercase'>
                  Contacto
                </li>
              </ul>
            </div>
            <div className='relative'>
              <span className='absolute flex items-center justify-center -right-1 -top-1 bg-gray-400 w-3 h-3 rounded-full Small font-bold'>
                2
              </span>
              <button
                onClick={() => setShowCart(!showCart)}
                className='Small uppercase font-medium text-white bg-black p-1 rounded-md'
              >
                Carrito
              </button>
            </div>
          </div>
          {/* Hero Section */}
          <ProductsGrid />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
