import profile from "@/assets/jayson-pic.jfif";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MenuToggle } from "@/components/MenuToggle";
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
        <div className="hidden md:flex items-center gap-1 text-sm">
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
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center gap-1">
          {/* Dark mode button */}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* Menu button */}
          <MenuToggle />
        </div>
      </nav>

      {/*Mobile Menu*/}
      <div className="md:hidden glass">
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
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
    </header>
  );
};
