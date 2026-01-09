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
  // 2. Add the scroll-to-top logic
  useEffect(() => {
    // Force scroll to top on load/refresh
    window.scrollTo(0, 0);

    // Stop the browser from remembering the last scroll position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div>
      <BackgroundParticles />
      <Navbar />
      <main className="max-w-[1280px] mx-auto px-6">
        {/* 3. Ensure Hero has the id="hero" for the Navbar observer */}
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