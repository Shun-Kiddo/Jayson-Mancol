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
  {
    /* Mobile Menu Open */
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  {
    /* Dark Mode Toggle */
  }
  const [theme, setTheme] = useState(null);
  const storageKey = "theme-preference";
  const getColorPreference = () => {
    const stored = localStorage.getItem(storageKey);
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
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
    <header className="sticky top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      {/* Navbar content limited to 1280px */}
      <nav className="max-w-[1280px] mx-auto px-6 flex items-center justify-between py-5">
        {/* Profile */}
        <a href="#" className="flex items-center gap-3 font-bold">
          <img
            src={profile}
            alt="Jayson Mancol"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm sm:text-base md:text-lg">Jayson Mancol</span>
            <span className="text-xs font-normal text-[color:var(--color-subtext)]">
              Web / App Developer
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1 text-sm">
          {Navlinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="px-2 py-1 hover-highlight"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col gap-4">
            {Navlinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-lg text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
      {/* Full-width border */}
      <div className="w-full border-b border-gray-400/80 h-px"></div>
    </header>
  );
};
