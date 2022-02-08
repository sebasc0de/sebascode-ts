import { Header } from './components/UI/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { Skills } from './components/Skills/Skills';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Footer } from './components/UI/Footer/Footer';
import '../src/App.css';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
