import "./styles/main.scss";
import { Navbar, Hero, About, Skills, Works, Gallery } from "./sections";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Gallery />
      <div>Process</div>
      <div>Services</div>
      <div>testimonials</div>
      <div>Contact</div>
    </>
  );
}

export default App;
