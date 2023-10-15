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
  Contact,
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
      <Contact />
      <div>Footer</div>
    </>
  );
}

export default App;
