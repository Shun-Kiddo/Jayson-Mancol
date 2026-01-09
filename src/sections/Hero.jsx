import profile from "@/assets/jayson-pic.jfif";
import hand from "@/assets/waving-hand.svg";
import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Facebook, Instagram, ArrowUp } from "lucide-react";
export const Hero = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  {
    /* Typing effect for name */
  }
  const names = ["Jayson", "Developer"];
  useEffect(() => {
    document.body.classList.add("loaded");
    return () => document.body.classList.remove("loaded");
  }, []);

  const [displayedText, setDisplayedText] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const typingSpeed = 200;
  const pauseTime = 2500;

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayedText.length < names[nameIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(names[nameIndex].slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setTyping(false), pauseTime);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, typingSpeed / 2);
      } else {
        setNameIndex((prev) => (prev + 1) % names.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, typing, nameIndex]);

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
    { icon: <Github size={20} />, href: "https://github.com/Shun-Kiddo", label: "GitHub" },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/shun_kiddo",
      label: "Instagram",
    },
  ];

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Content */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4">
        {/*=======================Left-Item=====================*/}
        <div
          ref={leftRef}
          className="intro max-w-[700px] text-white relative text-center md:text-left
             transition-transform transition-opacity duration-300 ease-out"
        >
          {/* HELLO with waving hand and your name */}
          <h2 className="text-sm sm:text-base md:text-lg font-extrabold tracking-wider text-[color:var(--color-foreground)] mb-2 ">
            <span className="inline-block border-b-2 border-[color:var(--color-subtext)] mb-5">
              HELLO{" "}
              <span className="inline-block origin-[70%_70%] animate-wave">
                <img
                  className="inline-block h-[32px] sm:h-[40px] md:h-[50px] -ml-1 sm:-ml-2"
                  src={hand}
                  alt="waving hand"
                />
              </span>
            </span>
          </h2>
          {/* I'm Jayson/Developer with typing effect */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wider text-[color:var(--color-foreground)] -mt-3 sm:-mt-6 mb-4 ">
            I'm{" "}
            <span className="text-[color:var(--color-subtext)] font-bold">
              {displayedText}
            </span>
          </h2>

          {/* Welcome message */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wider text-[color:var(--color-foreground)] -mt-2 sm:-mt-4 leading-tight sm:leading-[1.1]">
            WELCOME TO MY WORLD!
          </h2>

          {/* About Me button */}
          <div className="flex sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 sm:gap-4 mt-4">
            {/* Contact Me button */}
            <a
              href="#aboutme"
              className="inline-block px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base 
               bg-[color:var(--color-subtext)] text-white rounded-lg 
               hover:bg-red-700 transition w-full sm:w-auto text-center"
            >
              Contact Me
            </a>

            {/* View CV button */}
            <a
              href="#"
              className="inline-block px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base 
               bg-transparent border border-[color:var(--color-foreground)] text-[color:var(--color-foreground)] rounded-lg 
               hover:bg-[color:var(--color-foreground)]  hover:text-[color:var(--color-background)]  transition w-full sm:w-auto text-center"
            >
              View CV
            </a>
          </div>
        </div>

        {/*==========================Right-Item=======================*/}
        <div
          ref={rightRef}
          className="intro max-w-[400px] text-white relative flex flex-col items-center
      transition-transform transition-opacity duration-300 ease-out"
        >
          {/* Profile Image */}
          <div className="relative group">
            {/* Decorative background element - HIDDEN ON MOBILE */}
            <div className="hidden lg:block absolute -bottom-4 -right-4 w-full h-full border-2 border-[color:var(--color-subtext)] rounded-2xl -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-300" />

            <div className="bg-[color:var(--color-background)] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={profile}
                alt="Jayson Mancol"
                className="w-full aspect-[4/5] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />

              {/* Compact Social Media List using Map */}
              <div className="p-5 bg-white/[0.02]">
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 group/link"
                    >
                      <span className="text-[color:var(--color-foreground)] opacity-50 group-hover/link:opacity-100 group-hover/link:text-[color:var(--color-subtext)] transition-all">
                        {link.icon}
                      </span>
                      <span className="text-xs font-medium opacity-50 group-hover/link:opacity-100 transition-opacity text-[color:var(--color-foreground)]">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
