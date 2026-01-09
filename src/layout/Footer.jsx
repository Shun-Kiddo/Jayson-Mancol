import { Github, Linkedin, Facebook, Instagram, ArrowUp } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/Shun.Kiddo",
      label: "Facebook",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/jayson-flores-mancol",
      label: "LinkedIn",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/Shun-Kiddo",
      label: "GitHub",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/shun_kiddo",
      label: "Instagram",
    },
  ];

  return (
    <footer className="relative mt-20 bg-transparent">
      {/* FORCE FULL WIDTH LINE */}
      {/* This uses viewport width (vw) to ignore parent containers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen flex items-center justify-center">
        {/* The Line */}
        <div className="absolute w-full border-t border-gray-400/20"></div>

        {/* The Icon Container */}
        <div className="relative bg-[color:var(--color-background)] px-4 py-1 flex items-center justify-center">
          <span className="text-[color:var(--color-subtext)] font-mono text-sm font-bold tracking-widest">
            &lt;/&gt;
          </span>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand & Name */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-xl font-bold text-[color:var(--color-foreground)] tracking-tight">
              Jayson Mancol
            </h2>
            <p className="text-sm text-[color:var(--color-subtext)] mt-1 font-medium">
              Web / App Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--color-foreground)] opacity-50 hover:opacity-100 hover:text-[color:var(--color-subtext)] transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[color:var(--color-subtext)] hover:text-[color:var(--color-foreground)] transition-colors"
          >
            Back to top
            <div className="p-2 border border-[color:var(--color-subtext)] rounded-full group-hover:bg-[color:var(--color-subtext)] group-hover:text-white transition-all duration-300">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-400/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-foreground)] opacity-40">
          <p>© {currentYear} — Built with Passion and Coffee</p>
          <p>Calbayog, Western Samar, Philippines</p>
        </div>
      </div>
    </footer>
  );
};
