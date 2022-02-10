import { motion } from 'framer-motion';
import { useState } from 'react';
import { Selector } from '../UI/Selector';
import { WebWindow } from '../UI/WebWindow';

const items = ['Tiempo de carga', 'Presupuesto', 'Opcion 3'];

export const ModalThumbnail = () => {
  // Show window
  const [showWindow, setShowWindow] = useState(false);

  return (
    <>
      <div
        id='gradient'
        className='relative h-5/6 p-5 md:p-20 flex items-center justify-center h-screen md:max-h-screen'
      >
        {/* Background image */}
        <WebWindow showWindow={showWindow} />

        {/* Controls */}
        <Selector setShowWindow={setShowWindow} showWindow={showWindow} />
      </div>
    </>
  );
};
