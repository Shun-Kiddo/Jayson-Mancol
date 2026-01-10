export const Skills = () => {
   const categories = [
     {
       title: "Web Development",
       skills: [
         { name: "React", icon: "devicon-react-original" },
         { name: "Tailwind", icon: "devicon-tailwindcss-original" },
         { name: "Node.js", icon: "devicon-nodejs-plain" },
         { name: "Express", icon: "devicon-express-original" },
        
         { name: "MySQL", icon: "devicon-mysql-plain" },
         { name: "JavaScript", icon: "devicon-javascript-plain" },
         { name: "HTML5", icon: "devicon-html5-plain" },
         { name: "CSS3", icon: "devicon-css3-plain" },
       ],
     },
     {
       title: "Mobile Apps",
       skills: [
         { name: "Java", icon: "devicon-java-plain" },
         { name: "Kotlin", icon: "devicon-kotlin-plain" },
         { name: "Firebase", icon: "devicon-firebase-plain" },
       ],
     },
     {
      title: "IoT & Hardware",
      skills: [
        { name: "ESP32", icon: "devicon-embeddedc-plain" },
      ]
    },
     {
       title: "Design & Editing",
       skills: [
         { name: "Figma", icon: "devicon-figma-plain" },
         { name: "Photoshop", icon: "devicon-photoshop-plain" },
         { name: "Illustrator", icon: "devicon-illustrator-plain" },
         { name: "InDesign", icon: "devicon-indesign-plain" },
         { name: "Canva", icon: "devicon-canva-original" },
       ],
     },
   ];
 
   return (
     <section id="skills" className="py-20 lg:py-32 px-6">
       <div className="max-w-[1280px] mx-auto">
         
         {/* Header Section */}
         <div className="relative flex justify-center mb-16">
        {/* Portfolio label aligned to the left of the heading */}
        <div className="absolute -top-6 left-0 flex items-center gap-2">
          <div className="w-8 h-[1px] bg-[color:var(--color-subtext)] opacity-50"></div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--color-subtext)]">
          Specialization
          </span>
        </div>

        {/* Main heading */}
        <h3 className="text-3xl md:text-5xl font-extrabold text-[color:var(--color-foreground)] border-b-4 border-[color:var(--color-subtext)] pb-2">
        TECHNICAL STACK
        </h3>
      </div>
 
         {/* Categories Mapping */}
         <div className="space-y-20">
           {categories.map((category, catIndex) => (
             <div key={catIndex} className="flex flex-col">
               {/* Category Title with Line */}
               <div className="flex items-center gap-4 mb-8">
                 <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-[color:var(--color-subtext)] whitespace-nowrap">
                   {category.title}
                 </h4>
                 <div className="w-full h-px bg-gray-400/10"></div>
               </div>
 
               {/* Skills Grid */}
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                 {category.skills.map((tech, index) => (
                   <div
                     key={index}
                     className="group relative flex flex-col items-center justify-center 
                                p-5 sm:p-8 rounded-xl border border-gray-400/10 
                                bg-[color:var(--color-background)] 
                                hover:border-[color:var(--color-subtext)]/30 
                                transition-all duration-500 hover:-translate-y-1"
                   >
                     {/* Subtle Red Flashlight Glow (matching your mouse cursor) */}
                     <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 rounded-xl" />
 
                     {/* Icon */}
                     <i className={`${tech.icon} text-3xl sm:text-4xl mb-3 text-[color:var(--color-foreground)] opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`} />
 
                     {/* Name */}
                     <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[color:var(--color-foreground)] opacity-30 group-hover:opacity-100 transition-opacity text-center">
                       {tech.name}
                     </span>
                   </div>
                 ))}
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };