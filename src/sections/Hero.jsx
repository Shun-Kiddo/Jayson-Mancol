import profile from "@/assets/jayson-pic.jfif";
import hand from "@/assets/waving-hand.svg";
import { useEffect, useRef, useState } from "react";
export const Hero = () => {
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
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Content*/}
      <div>
        {/*Left-Item*/}
        <div className="intro max-w-[700px] text-white text-left relative">
          {/* HELLO with waving hand and your name */}
          <h2 className="text-[20px] font-extrabold tracking-wider text-[color:var(--color-foreground)] ">
            <span className="inline-block border-b-2 border-[color:var(--color-subtext)] mb-5">
              HELLO{" "}
              <span className="inline-block origin-[70%_70%] animate-wave">
                <img
                  className="inline-block h-[50px] -ml-2"
                  src={hand}
                  alt="waving hand"
                />
              </span>
            </span>
          </h2>

          <h2 className="text-[60px] font-extrabold tracking-wider text-[color:var(--color-foreground)] -mt-6">
            I'm <span className="text-[color:var(--color-subtext)] font-bold">{displayedText}</span>
          </h2>

          {/* Welcome message */}
          <h2 className="text-[60px] font-extrabold tracking-wider text-[color:var(--color-foreground)] -mt-4 leading-[1.2]">
            WELCOME TO MY WORLD!
          </h2>

          {/* Social media icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/Shun.Kiddo"
              target="_blank"
              className="fab fa-facebook text-white hover:text-blue-600 transition"
            ></a>
            <a
              href="https://www.tiktok.com/@shun_kiddo"
              target="_blank"
              className="fab fa-tiktok text-white hover:text-black transition"
            ></a>
            <a
              href="https://www.linkedin.com/in/jayson-flores-mancol"
              target="_blank"
              className="fab fa-linkedin text-white hover:text-blue-500 transition"
            ></a>
            <a
              href="https://www.instagram.com/shun_kiddo"
              target="_blank"
              className="fab fa-instagram text-white hover:text-pink-500 transition"
            ></a>
          </div>

          {/* About Me button */}
          <a
            href="#aboutme"
            className="inline-block mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            About Me
          </a>
        </div>

        {/*Right-Item*/}
        <div></div>
      </div>
    </section>
  );
};

{
  /*  
    <div className='social-media-icons'>
        <a href="https://www.facebook.com/Shun.Kiddo" class="fab fa-facebook soc-icon-facebook" target='blank'></a>
        <a href="https://www.tiktok.com/@shun_kiddo" class="fab fa-tiktok soc-icon-tiktok" target='blank'></a>
        <a href="https://www.linkedin.com/in/jayson-flores-mancol" class="fab fa-linkedin soc-icon-linkedin" target='blank'></a>
        <a href="https://www.instagram.com/shun_kiddo" class="fab fa-instagram soc-icon-instagram" target='blank'></a>
    </div>
*/
}
