import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <HowItWorks />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
