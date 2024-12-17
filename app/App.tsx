import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Academics } from "./components/Academics";
// import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Newsletter } from "./components/Newsletter";
// import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
// import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
// import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import Features from "@/components/Features";
import Hero from "@/components/Hero";


function App() {
  return (
    <>
    

      <Hero />
      <Features />
      <Sponsors />
      <About />
      <HowItWorks />
      <Academics />
      {/* <Services /> */}
      <Cta />
      <Testimonials />
      {/* <Team /> */}
      {/* <Pricing /> */}
      <Newsletter />
      <FAQ />
      
      <ScrollToTop />
    </>
  );
}

export default App;
