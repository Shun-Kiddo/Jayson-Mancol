import { Navbar } from "./layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Project } from "@/sections/Project";
import { Skills } from "@/sections/Skills";
import { Resume } from "@/sections/Resume";
import { Contact } from "@/sections/Contact";
function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
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
