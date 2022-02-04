import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CombosSection } from './components/CombosSection';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import '../src/App.css';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Skills />
      <Portfolio />
      {/* <CombosSection /> */}
      <Footer />
    </>
  );
}

export default App;
