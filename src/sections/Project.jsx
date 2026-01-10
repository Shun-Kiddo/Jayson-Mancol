import { ExternalLink, Github, Folder, Globe, Smartphone } from "lucide-react";
import { useState } from "react";
import lms from "@/assets/lms-pic.jpg";
import shun from "@/assets/shunresort.jpg";
import event from "@/assets/eventbooking.jpg";
import lostandfound from "@/assets/lostandfound.jpg";
import fashionidea from "@/assets/fashionidea.jpg";
import spellBee from "@/assets/spellBee.jpg";
const PROJECTS = [
  {
    title: "Learning Management System",
    category: "Web App",
    description: "A centralized academic platform where admins can manage student enrollments, create interactive quizzes, post announcements, and track assignment submissions.",
    tags: ["Html", "Css", "JavaScript", "MySQL", "Node.js", "Nodemailer"],
    github: "#",
    live: "#",
    image: lms,
  },
  {
    title: "Shun Resort Reservation",
    category: "Web App",
    description: "A specialized cottage booking platform featuring Stripe integration, secure OTP authentication via Gmail, and a comprehensive admin suite for income tracking.",
    tags: ["Html", "Css", "JavaScript", "MySQL", "Node.js", "Stripe", "Nodemailer"],
    github: "#",
    live: "#",
    image: shun,
  },
  {
    title: "Event Booking System",
    category: "Web App",
    description: "A secure event management platform featuring Stripe payments, Gmail-based OTP authentication, and an admin dashboard for revenue tracking.",
    tags: ["Html", "Css", "JavaScript", "MySQL", "Node.js", "Stripe", "Nodemailer"],
    github: "#",
    live: "#",
    image: event,
  },
  {
    title: "Lost & Found Mobile App",
    category: "Mobile App",
    description: "A real-time Android application built for community assistance, allowing users to report lost or found items with instant updates and built-in communication features.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Appwrite"],
    github: "#",
    live: "#",
    image: lostandfound,
  },
  {
    title: "Fashion Fusion App",
    category: "Mobile App",
    description: "A social-driven mobile platform for fashion enthusiasts to share outfit ideas, discover community-inspired trends, and 'clone' styles into their personal collections.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Appwrite"],
    github: "#",
    live: "#",
    image: fashionidea,
  },
  {
    title: "Spell Bee Game",
    category: "Mobile App",
    description: "A fun word-guessing game where users try to figure out the correct word in a limited time. The game features multiple levels, hints, and a timer to challenge players’ spelling and quick thinking skills.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase"],
    github: "#",
    live: "#",
    image: spellBee,
  }
];

export const Project = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleProjects = isExpanded ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <section id="project" className="py-20 lg:py-32">
      <div className="relative flex justify-center mb-16">
        {/* Portfolio label aligned to the left of the heading */}
        <div className="absolute -top-6 left-0 flex items-center gap-2">
          <div className="w-8 h-[1px] bg-[color:var(--color-subtext)] opacity-50"></div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--color-subtext)]">
            Portfolio
          </span>
        </div>

        {/* Main heading */}
        <h3 className="text-3xl md:text-5xl font-extrabold text-[color:var(--color-foreground)] border-b-4 border-[color:var(--color-subtext)] pb-2">
          LATEST PROJECTS
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-[color:var(--color-background)] border border-gray-400 rounded-2xl overflow-hidden hover:border-[color:var(--color-subtext)]/50 transition-all duration-500 h-[450px] animate-in fade-in zoom-in duration-500"
          >
            {/* Image and Detail Overlay */}
            <div className="relative h-64 md:h-64 overflow-hidden group">
              <img
                src={project.image}
                alt={project.title}
                className="
      w-full h-auto md:h-64 object-contain md:object-cover
      grayscale md:group-hover:grayscale-0
      transition-all duration-700
      md:group-hover:scale-110
    "
              />

              {/* Overlay */}
              <div
                className="
      absolute inset-0 bg-black/90 p-6
      flex flex-col justify-center
      transition-transform duration-500 ease-in-out
      translate-y-0 md:translate-y-full md:group-hover:translate-y-0
    "
              >
                <span className="text-[10px] font-bold text-[color:var(--color-subtext)] mb-2 uppercase tracking-widest">
                  {project.category}
                </span>
                <p className="text-sm text-white leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-white hover:text-[color:var(--color-subtext)] flex items-center gap-2 text-xs"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.live}
                    className="text-white hover:text-[color:var(--color-subtext)] flex items-center gap-2 text-xs"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 bg-black/20 md:group-hover:opacity-0 transition-all duration-500" />
            </div>

            {/* Bottom Content */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <Folder className="text-[color:var(--color-subtext)] w-8 h-8 opacity-80" />
                  {/* PLATFORM BADGE */}
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 rounded-md">
                    {project.category === "Web App" ? (
                      <Globe size={12} className="text-[color:var(--color-subtext)]" />
                    ) : (
                      <Smartphone size={12} className="text-[color:var(--color-subtext)]" />
                    )}
                    <span className="text-[10px] font-medium text-[color:var(--color-foreground)] opacity-80">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-bold text-[color:var(--color-foreground)] mb-3 group-hover:text-[color:var(--color-subtext)] transition-colors">
                {project.title}
              </h4>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIndex) => (
                  <span
                    key={tIndex}
                    className="text-[9px] uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/10 rounded text-[color:var(--color-foreground)] opacity-70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-block px-8 py-3 border border-gray-400 text-[color:var(--color-foreground)] rounded-full hover:bg-[color:var(--color-subtext)] hover:border-[color:var(--color-subtext)] hover:text-white transition-all font-medium"
        >
          {isExpanded ? "Show Less" : "View All Projects"}
        </button>
      </div>
    </section>
  );
};