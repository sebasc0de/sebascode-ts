import { ModalThumbnail } from './ModalThumbnail';
import { ModalDesc } from './ModalDesc';

export const ModalHeroSection = () => {
  return (
    <div className='relative flex flex-col justify-between gap-3'>
      {/* First section */}
      <ModalThumbnail />

      {/* Second section */}
      <ModalDesc />
    </div>
  );
};
