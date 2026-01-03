import { Navbar } from "./layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Project } from "@/sections/Project";
import { Skills } from "@/sections/Skills";
import { Resume } from "@/sections/Resume";
import { Contact } from "@/sections/Contact";
import BackgroundParticles from "@/components/BackgroundParticles";

function App() {
  return (
    <div>
      <BackgroundParticles/>
      <Navbar />
     <main className="max-w-[1280px] mx-auto px-6">
        <Hero />
        <About />
        <Project />
        <Skills />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
