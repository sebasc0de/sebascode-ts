import { useState } from 'react';
import { Selector } from '../UI/Selector';
import { WebWindow } from '../UI/WebWindow/WebWindow';
import Welcome from '../UI/Welcome';

const items = ['Tiempo de carga', 'Presupuesto', 'Opcion 3'];

export const ModalThumbnail = () => {
  // Show window
  const [showWindow, setShowWindow] = useState(true);

  // Show Selector
  const [showSelector, setShowSelector] = useState(true);

  return (
    <>
      <div
        id='gradient'
        className='relative h-5/6 p-5 md:p-20 flex items-center justify-center h-screen md:max-h-screen'
      >
        {/* Initial welcome - Step 1 */}
        <Welcome
          message='Hello'
          techName='React'
          setShowSelector={setShowSelector}
        />

        {/* Background image */}
        <WebWindow showWindow={showWindow} />

        {/* Controls - Steps selections*/}
        <Selector
          showSelector={showSelector}
          setShowWindow={setShowWindow}
          showWindow={showWindow}
        />
      </div>
    </>
  );
};
