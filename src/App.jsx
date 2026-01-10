import { Navbar } from "./layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Project } from "@/sections/Project";
import { Skills } from "@/sections/Skills";
import { Resume } from "@/sections/Resume";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";
import BackgroundParticles from "@/components/BackgroundParticles";
import { useEffect } from "react"; // 1. Import useEffect

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div>
      <BackgroundParticles />
      <Navbar />
      <main className="max-w-[1280px] mx-auto px-6">
        <Hero /> 
        <About />
        <Project />
        <Skills />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;