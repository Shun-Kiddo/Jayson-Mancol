import { Mail, MapPin, Send, Facebook, Linkedin, Github, Instagram } from "lucide-react";

export const Contact = () => {
  const socials = [
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/Shun.Kiddo", label: "Facebook" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/jayson-flores-mancol", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "https://github.com/Shun-Kiddo", label: "GitHub" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/shun_kiddo", label: "Instagram" },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 px-6">
      <div className="max-w-[1280px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-20">
          
          {/* Left Side: Info & Socials */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-[color:var(--color-foreground)]">
                Let's talk about your project
              </h4>
              <p className="text-[color:var(--color-foreground)] opacity-60 leading-relaxed max-w-md text-sm md:text-base">
                I'm currently available for freelance work or full-time positions. 
                If you have a project that needs some creative injection, feel free to reach out.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg border border-gray-400/10 bg-white/5 text-[color:var(--color-subtext)] group-hover:bg-[color:var(--color-subtext)] group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[color:var(--color-subtext)] font-bold">Email Me</p>
                  <p className="text-[color:var(--color-foreground)] font-medium">mancoljayson219@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-lg border border-gray-400/10 bg-white/5 text-[color:var(--color-subtext)] group-hover:bg-[color:var(--color-subtext)] group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[color:var(--color-subtext)] font-bold">Location</p>
                  <p className="text-[color:var(--color-foreground)] font-medium">Calbayog, Western Samar, Philippines</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <p className="text-[10px] uppercase tracking-widest text-[color:var(--color-subtext)] font-bold mb-4">Follow My Journey</p>
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-gray-400/10 bg-white/5 text-[color:var(--color-foreground)] opacity-60 hover:opacity-100 hover:border-[color:var(--color-subtext)]/50 hover:-translate-y-1 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white/5 border border-gray-400/20 p-8 rounded-2xl order-1 lg:order-2">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[color:var(--color-subtext)]">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-gray-400/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--color-subtext)]/50 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-[color:var(--color-subtext)]">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-gray-400/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--color-subtext)]/50 transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[color:var(--color-subtext)]">Subject</label>
                <input type="text" placeholder="Project Inquiry" className="w-full bg-white/5 border border-gray-400/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--color-subtext)]/50 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[color:var(--color-subtext)]">Message</label>
                <textarea rows="4" placeholder="How can I help you?" className="w-full bg-white/5 border border-gray-400/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--color-subtext)]/50 transition-colors resize-none"></textarea>
              </div>
              <button disabled className="w-full bg-[color:var(--color-subtext)] text-white font-bold uppercase text-xs py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Send Message <Send size={14} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};