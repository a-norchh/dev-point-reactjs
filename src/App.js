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
  Testimonial,
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
      <Testimonial />
      <div>Contact</div>
      <div>Footer</div>
    </>
  );
}

export default App;
