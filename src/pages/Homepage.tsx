import "../../src/App.css";
import { AboutMe } from "../components/Skills/Skills";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { Meet } from "../components/Meet/Meet";
import { Portfolio } from "../components/Portfolio/Portfolio";
import { ModalToggler } from "../components/Modal/ModalToggler";
import { Container } from "../components/Modal/Container";

function Homepage() {
  return (
    <>
      <ModalToggler /> {/* Toggler for open modal */}
      <Container /> {/* Modal window */}
      <HeroSection />
      <AboutMe />
      <Portfolio />
      <Meet />
    </>
  );
}

export default Homepage;
