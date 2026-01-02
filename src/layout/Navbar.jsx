import profile from "@/assets/jayson-pic.jfif";
import { useEffect, useState } from "react";

const Navlinks = [
  { href: "#aboutme", label: "About Me" },
  { href: "#project", label: "Project" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
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
    <header className="sticky top-0 left-0 right-0 bg-transparent z-50 border-b border-b border-gray-400/40 backdrop-blur-sm">
      <nav className="container mx-auto px-6 flex items-center justify-between py-5">
        {/* Logo / Profile */}
        <a href="#" className="flex items-center gap-3 font-bold">
          <img
            src={profile}
            alt="Jayson Mancol"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-lg">Jayson Mancol</span>
            <span className="text-xs font-normal text-gray-400">
              Web / App Developer
            </span>
          </div>
        </a>

        {/* Navigation Links + Theme Button */}
        <div className="flex items-center gap-1 text-sm">
          {Navlinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="px-2 py-1 rounded-md transition hover-highlight"
            >
              {link.label}
            </a>
          ))}

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-gray-200/20 transition"
            title="Toggles light & dark"
            aria-label="Toggle theme"
            aria-live="polite"
          >
            {theme === "light" ? (
              // Moon icon
              <svg
                className="w-6 h-6 text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <mask id="half-moon-mask">
                  <rect x="0" y="0" width="100%" height="100%" fill="white" />
                  <circle cx="15" cy="6" r="4" fill="black" />
                </mask>
                <circle cx="12" cy="12" r="8" mask="url(#half-moon-mask)" />
              </svg>
            ) : (
              // Sun icon
              <svg
                className="w-6 h-6 text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="6" />
                <g stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </g>
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};
