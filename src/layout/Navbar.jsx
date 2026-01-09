import profile from "@/assets/jayson-pic.jfif";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

const Navlinks = [
  { href: "#aboutme", label: "About Me" },
  { href: "#project", label: "Project" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Tracks which section is visible
  const [theme, setTheme] = useState(null);
  const storageKey = "theme-preference";

  // --- Intersection Observer Logic (Handles Active State & Hero Reset) ---
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-35% 0px -60% 0px", // Section must reach 35% from top to be active
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          // If we see hero, clear the active state
          if (id === "hero") {
            setActiveSection("");
          } else {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Watch the Hero section
    const heroSection = document.getElementById("hero");
    if (heroSection) observer.observe(heroSection);

    // Watch all Navlink sections
    Navlinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // --- Theme Logic ---
  const getColorPreference = () => {
    const stored = localStorage.getItem(storageKey);
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const reflectPreference = (themeValue) => {
    document.documentElement.setAttribute("data-theme", themeValue);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem(storageKey, newTheme);
    reflectPreference(newTheme);
  };

  useEffect(() => {
    const initialTheme = getColorPreference();
    setTheme(initialTheme);
    reflectPreference(initialTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      const systemTheme = e.matches ? "dark" : "light";
      setTheme(systemTheme);
      localStorage.setItem(storageKey, systemTheme);
      reflectPreference(systemTheme);
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  if (!theme) return null;

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[color:var(--color-background)]/80 backdrop-blur-md">
      <nav className="max-w-[1280px] mx-auto px-6 flex items-center justify-between py-5">
        
        {/* Profile Link */}
        <a href="#hero" className="flex items-center gap-3 font-bold group">
          <img
            src={profile}
            alt="Jayson Mancol"
            className="w-10 h-10 rounded-full object-cover border border-white/10 group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm sm:text-base md:text-lg text-[color:var(--color-foreground)]">
              Jayson Mancol
            </span>
            <span className="text-xs font-normal text-[color:var(--color-subtext)]">
              Web / App Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {Navlinks.map((link, index) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;

            return (
              <a
                key={index}
                href={link.href}
                className={`group relative py-1 transition-all duration-300 ${
                  isActive 
                    ? "text-[color:var(--color-subtext)] font-bold opacity-100" 
                    : "text-[color:var(--color-foreground)] opacity-70 hover:opacity-100"
                }`}
              >
                {link.label}
                {/* Underline: Visible on Active OR Hover */}
                <span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-[color:var(--color-subtext)] transition-all duration-500 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} 
                />
              </a>
            );
          })}
          <div className="ml-2 pl-6 border-l border-gray-400">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-1 text-[color:var(--color-foreground)]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[color:var(--color-background)] border-b border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="max-w-[1280px] mx-auto px-6 py-8 flex flex-col gap-6">
            {Navlinks.map((link, index) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl transition-colors ${
                    isActive ? "text-[color:var(--color-subtext)] font-bold" : "text-[color:var(--color-foreground)] opacity-70"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
      
      {/* Bottom Border Line */}
      <div className="w-full border-b border-gray-400/20 h-px"></div>
    </header>
  );
};