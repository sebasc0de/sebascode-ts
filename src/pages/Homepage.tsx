import "../../src/App.css";
import { Skills } from "../components/Skills";
import { HeroSection } from "../components/HeroSection";
import { Meet } from "../components/Meet";
import { Portfolio } from "../components/Portfolio";
import { ModalToggler } from "../components/Modal/ModalToggler";
import { Container } from "../components/Modal/Container";

function Homepage() {
  return (
    <>
      <ModalToggler /> {/* Toggler for open modal */}
      <Container /> {/* Modal window */}
      <HeroSection />
      <Skills />
      <Portfolio />
      <Meet />
    </>
  );
}

export default Homepage;
