import { ExternalLink, Github, Folder, Globe, Smartphone } from "lucide-react";
import { useState } from "react";

const PROJECTS = [
  {
    title: "Learning Management System",
    category: "Web App", // Added Category
    description: "A centralized academic platform where admins can manage student enrollments, create interactive quizzes, post announcements, and track assignment submissions.",
    tags: ["Html", "Css", "JavaScript", "Node.js", "Nodemailer"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Shun Resort Reservation",
    category: "Web App",
    description: "A specialized cottage booking platform featuring Stripe integration, secure OTP authentication via Gmail, and a comprehensive admin suite for income tracking.",
    tags: ["Html", "Css", "JavaScript", "Node.js", "Stripe", "Nodemailer"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Event Booking System",
    category: "Web App",
    description: "A secure event management platform featuring Stripe payments, Gmail-based OTP authentication, and an admin dashboard for revenue tracking.",
    tags: ["Html", "Css", "JavaScript", "Node.js", "Stripe", "Nodemailer"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Lost & Found Mobile App",
    category: "Mobile App", // Added Category
    description: "A real-time Android application built for community assistance, allowing users to report lost or found items with instant updates and built-in communication features.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Appwrite"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Fashion Fusion App",
    category: "Mobile App",
    description: "A social-driven mobile platform for fashion enthusiasts to share outfit ideas, discover community-inspired trends, and 'clone' styles into their personal collections.",
    tags: ["Kotlin", "Jetpack Compose", "Firebase", "Appwrite"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
  },
];

export const Project = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleProjects = isExpanded ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <section id="project" className="py-20 lg:py-32">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-sm font-bold tracking-[0.2em] text-[color:var(--color-subtext)] uppercase mb-2">
          Portfolio
        </h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-[color:var(--color-foreground)]">
          LATEST PROJECTS
        </h3>
        <div className="w-20 h-1.5 bg-[color:var(--color-subtext)] mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-[color:var(--color-background)] border border-gray-400 rounded-2xl overflow-hidden hover:border-[color:var(--color-subtext)]/50 transition-all duration-500 h-[450px] animate-in fade-in zoom-in duration-500"
          >
            {/* Image and Detail Overlay */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              
              <div className="absolute inset-0 bg-black/90 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-center">
                {/* Overlay Category Badge */}
                <span className="text-[10px] font-bold text-[color:var(--color-subtext)] mb-2 uppercase tracking-widest">
                  {project.category}
                </span>
                <p className="text-sm text-white leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4">
                   <a href={project.github} className="text-white hover:text-[color:var(--color-subtext)] flex items-center gap-2 text-xs">
                     <Github size={16} /> Code
                   </a>
                   <a href={project.live} className="text-white hover:text-[color:var(--color-subtext)] flex items-center gap-2 text-xs">
                     <ExternalLink size={16} /> Live Demo
                   </a>
                </div>
              </div>

              <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-all duration-500" />
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