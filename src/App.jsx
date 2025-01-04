import ButtonGradient from "./assets/svg/ButtonGradient";
import Testimonials from "./components/Testimonials";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Courses";
import Team from "./components/Team";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Collaboration />
        <Services />
        <Pricing />
        <Testimonials />

        <Team />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
