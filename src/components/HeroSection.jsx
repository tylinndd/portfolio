import React, { useState, useEffect } from 'react';
import { User, Briefcase, Code, FileText, Share2 } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

const ASCII_ART = `
████████╗██╗   ██╗██╗     ██╗███╗   ██╗    ██████╗ ███████╗██╗      █████╗ ███╗   ██╗███████╗██╗   ██╗
╚══██╔══╝╚██╗ ██╔╝██║     ██║████╗  ██║    ██╔══██╗██╔════╝██║     ██╔══██╗████╗  ██║██╔════╝╚██╗ ██╔╝
   ██║    ╚████╔╝ ██║     ██║██╔██╗ ██║    ██║  ██║█████╗  ██║     ███████║██╔██╗ ██║█████╗   ╚████╔╝ 
   ██║     ╚██╔╝  ██║     ██║██║╚██╗██║    ██║  ██║██╔══╝  ██║     ██╔══██║██║╚██╗██║██╔══╝    ╚██╔╝  
   ██║      ██║   ███████╗██║██║ ╚████║    ██████╔╝███████╗███████╗██║  ██║██║ ╚████║███████╗   ██║   
   ╚═╝      ╚═╝   ╚══════╝╚═╝╚═╝  ╚═══╝    ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   
`;

const NAV_ITEMS = [
  { id: 'ABOUT', icon: User },
  { id: 'EXPERIENCE', icon: Briefcase },
  { id: 'PROJECTS', icon: Code },
  { id: 'RESUME', icon: FileText },
  { id: 'SOCIALS', icon: Share2 }
];

const HeroSection = () => {
  const { text, isFinished } = useTypewriter([
    "> CS TUTOR",
    "> RESEARCH INTERN",
    "> HACKATHON CHAMPION."
  ], 80, 40, 1500);

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (isFinished) {
      const timer = setTimeout(() => setShowNav(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isFinished]);

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="text-center w-full flex flex-col items-center z-10">
        {/* Name ASCII Art */}
        <pre className="font-press text-green mb-8 hidden md:block text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px] leading-none">
          {ASCII_ART}
        </pre>
        <h1 className="font-press text-green mb-8 md:hidden text-3xl lg:text-5xl text-center leading-tight tracking-tighter">
          TYLIN DELANEY
        </h1>
        
        {/* Typewriter text */}
        <p className="font-share text-lg md:text-xl lg:text-2xl uppercase tracking-widest h-8 flex items-center justify-center mt-4">
          {text}
          <span className="animate-pulse ml-1 inline-block w-3 h-5 md:h-6 bg-green align-middle"></span>
        </p>
      </div>

      {/* Nav Dock */}
      <div className="absolute bottom-20 w-full flex justify-center z-20">
        <nav className="flex justify-center items-end space-x-4 md:space-x-8">
          {NAV_ITEMS.map((item, index) => {
            const Icon = item.icon;
            
            // Calculate a slight curve using translation
            // Center is 2, so offset is index - 2. (-2, -1, 0, 1, 2)
            const offset = Math.abs(index - 2);
            const translateY = offset * 16; // curve upwards at the edges

            return (
              <a
                key={item.id}
                href={`#${item.id.toLowerCase()}`}
                className={`group relative flex flex-col items-center text-green transition-all duration-500 ease-out`}
                style={{
                  transform: showNav ? `translateY(${translateY}px)` : 'translateY(50px)',
                  opacity: showNav ? 1 : 0,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 border border-green flex items-center justify-center mb-3 group-hover:border-cyan transition-colors glitch-flicker bg-black relative z-10">
                  <Icon size={24} className="group-hover:text-cyan transition-colors" />
                </div>
                <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-share tracking-wider text-sm text-cyan whitespace-nowrap">
                  {item.id}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default HeroSection;