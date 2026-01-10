import profile from "@/assets/defungol.jpg";
import { useEffect, useRef, useState } from "react";
export const About = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const techStack = [
    { name: "React", icon: "devicon-react-original" },
    { name: "Tailwind", icon: "devicon-tailwindcss-original" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "Express", icon: "devicon-express-original" },
    { name: "Firebase", icon: "devicon-firebase-plain" },
    { name: "MySQL", icon: "devicon-mysql-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    // Newly added languages
    { name: "Java", icon: "devicon-java-plain" },
    { name: "Kotlin", icon: "devicon-kotlin-plain" },
    { name: "HTML5", icon: "devicon-html5-plain" },
    { name: "CSS3", icon: "devicon-css3-plain" },
  ];

  useEffect(() => {
    // Disable scroll animation on mobile
    if (window.innerWidth < 768) return;

    if (!sectionRef.current) return;

    const handleScroll = () => {
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Section fully visible → RESET
      if (rect.top <= windowHeight * 0.2 && rect.bottom >= windowHeight * 0.8) {
        if (leftRef.current) {
          leftRef.current.style.transform = "translate(0, 0)";
          leftRef.current.style.opacity = "1";
        }
        if (rightRef.current) {
          rightRef.current.style.transform = "translate(0, 0)";
          rightRef.current.style.opacity = "1";
        }
        return;
      }

      // Section leaving upward → hide progressively
      const progress = Math.min(
        Math.max((windowHeight - rect.bottom) / windowHeight, 0),
        1
      );
      const x = 140 * progress;
      const y = 90 * progress;

      if (leftRef.current) {
        leftRef.current.style.transform = `translate(-${x}px, -${y}px)`;
        leftRef.current.style.opacity = `${1 - progress}`;
      }
      if (rightRef.current) {
        rightRef.current.style.transform = `translate(${x}px, -${y}px)`;
        rightRef.current.style.opacity = `${1 - progress}`;
      }
    };

    const options = { passive: true };

    window.addEventListener("scroll", handleScroll, options);
    window.addEventListener("wheel", handleScroll, options);
    window.addEventListener("touchmove", handleScroll, options);
    window.addEventListener("pointerdown", handleScroll, options);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll, options);
      window.removeEventListener("wheel", handleScroll, options);
      window.removeEventListener("touchmove", handleScroll, options);
      window.removeEventListener("pointerdown", handleScroll, options);
    };
  }, []);

  return (
    <section id="aboutme" className="py-24 bg-[color:var(--color-background)]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Sticky Profile Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative group">
              {/* Decorative background element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[color:var(--color-subtext)] rounded-2xl -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-300" />

              <div className="bg-[color:var(--color-background)] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={profile}
                  alt="Jayson Mancol"
                  className="w-full aspect-[4/5] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold tracking-widest uppercase opacity-50">
                      Based In
                    </span>
                    <span className="text-sm font-medium">Philippines</span>
                  </div>

                  {/* Changed "Experience" to "Status" or "Role" to be more authentic */}
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold tracking-widest uppercase opacity-50">
                      Current Status
                    </span>
                    <span className="text-sm font-medium text-[color:var(--color-subtext)]">
                      BSIT - 3rd Year
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold tracking-widest uppercase opacity-50">
                      Work
                    </span>
                    <span className="text-sm font-medium">
                      Freelance Commissions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Skills */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <div className="space-y-2">
                {/* The Small Label */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-[1px] bg-[color:var(--color-subtext)] opacity-50"></div>
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--color-subtext)]">
                    About Me
                  </span>
                </div>

                {/* The Main Headline (Using Option 1 from before) */}
                <h2 className="text-4xl md:text-5xl font-bold text-[color:var(--color-foreground)] leading-tight">
                  Turning ideas into <br />
                  <span className="text-[color:var(--color-subtext)]">
                    functional reality.
                  </span>
                </h2>
              </div>
              <div className="space-y-6 text-lg leading-relaxed opacity-80">
                <p>
                  I am an{" "}
                  <span className="text-[color:var(--color-foreground)] font-semibold">
                    Independent Developer
                  </span>{" "}
                  currently pursuing my{" "}
                  <span className="text-[color:var(--color-foreground)] font-semibold">
                    BSIT degree (3rd Year)
                  </span>
                  . While I am still early in my journey, I have built my skills
                  through hands-on experience—designing and developing
                  functional websites from the ground up.
                </p>

                <p>
                  I specialize in taking on{" "}
                  <span className="text-[color:var(--color-subtext)] font-medium italic">
                    programming commissions
                  </span>
                  . Working directly with clients has allowed me to manage the
                  full lifecycle of a project—from initial logic to final
                  deployment—giving me a practical perspective on how modern
                  apps are built.
                </p>

                <p>
                  I am passionate about continuous learning and problem-solving.
                  Every commission and personal project is an opportunity for me
                  to refine my architecture and deliver useful, clean digital
                  experiences.
                </p>
              </div>
            </div>

            {/* Tech Stack Grid */}
            <div className="mt-16 pt-8 border-t border-white/10 overflow-hidden">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-[color:var(--color-subtext)] text-center lg:text-left">
                My Tech Stack
              </h3>

              <div className="relative flex overflow-x-hidden group">
                {/* The "animate-scroll" div needs two copies of the list to loop seamlessly */}
                <div className="animate-scroll flex whitespace-nowrap gap-12 items-center">
                  {[...techStack, ...techStack].map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    >
                      <i
                        className={`${tech.icon} text-3xl md:text-4xl text-[color:var(--color-foreground)]`}
                      ></i>
                      <span className="text-lg font-medium text-[color:var(--color-foreground)] uppercase tracking-wider">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Gradient Overlays for a "Fade-In/Out" effect on the sides */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[color:var(--color-background)] to-transparent"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[color:var(--color-background)] to-transparent"></div>
              </div>
            </div>
            {/* Call to action */}
            <div className="p-8 rounded-2xl bg-[color:var(--color-background)]  border border-gray-400 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-center md:text-left">
                <span className="block text-xl font-medium">
                  Have a project in mind?
                </span>
                <span className="opacity-60">
                  Let’s build something great together.
                </span>
              </p>
              <a
                href="#contact"
                className="px-8 py-3 bg-[color:var(--color-foreground)] text-[color:var(--color-background)] font-bold rounded-full hover:scale-105 transition-transform"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
