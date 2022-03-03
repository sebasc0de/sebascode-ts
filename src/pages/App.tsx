import '../../src/App.css';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { Meet } from '../components/Meet/Meet';
import { Portfolio } from '../components/Portfolio/Portfolio';
import { Skills } from '../components/Skills/Skills';
import { Testimonials } from '../components/Testimonials/Testimonials';

function App() {
  return (
    <>
      <HeroSection />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Meet />
    </>
  );
}

export default App;
