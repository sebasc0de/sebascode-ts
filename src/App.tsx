import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
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
      <Footer />
    </>
  );
}

export default App;
