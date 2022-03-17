import '../../src/App.css';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { LanguageToggler } from '../components/LanguageToggler/LanguageToggler';
import { Meet } from '../components/Meet/Meet';
import { Portfolio } from '../components/Portfolio/Portfolio';
import { Skills } from '../components/Skills/Skills';
import { TestimonialCarrousel } from '../components/Testimonials/TestimonialsCarrousel';

function App() {
  return (
    <>
      <LanguageToggler />
      <HeroSection />
      <Skills />
      <Portfolio />
      <Meet />
      {/* <TestimonialCarrousel /> */}
    </>
  );
}

export default App;
