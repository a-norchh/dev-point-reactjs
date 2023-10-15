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
  Footer,
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
      <Footer />
    </>
  );
}

export default App;
