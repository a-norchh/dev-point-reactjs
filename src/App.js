import "./styles/main.scss";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Works,
  Gallery,
  Process,
  Services,
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
      <Services />
      <div>Testimonials</div>
      <div>Contact</div>
      <div>Footer</div>
    </>
  );
}

export default App;
