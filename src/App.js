import "./styles/main.scss";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Works,
  Gallery,
  Process,
} from "./sections";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Gallery />
      <Process />
      <div>Services</div>
      <div>testimonials</div>
      <div>Contact</div>
    </>
  );
}

export default App;
