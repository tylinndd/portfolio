import React, { useState, useEffect } from 'react';
import { User, Briefcase, Code, FileText, Share2 } from 'lucide-react';

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
  const [showNav, setShowNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Show nav immediately after component mounts
    const timer = setTimeout(() => setShowNav(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="text-center w-full flex flex-col items-center z-10 -mt-32">
        {/* Name ASCII Art */}
        <pre className="font-press text-green mb-8 hidden md:block text-[12px] md:text-[12px] lg:text-[12px] xl:text-[17px] leading-none transform scale-y-170">
          {ASCII_ART}
        </pre>
        <h1 className="font-press text-green mb-8 md:hidden text-3xl lg:text-5xl text-center leading-tight tracking-tighter">
          TYLIN DELANEY
        </h1>
      </div>

      {/* Nav Dock (Desktop) */}
      <div className="absolute top-1/2 mt-24 w-full hidden md:flex justify-center z-20">
        <nav className="flex justify-center items-end space-x-6 md:space-x-12">
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
                <div className="w-16 h-16 md:w-20 md:h-20 border border-green flex items-center justify-center mb-3 group-hover:border-cyan transition-colors glitch-flicker bg-black relative z-10">
                  <Icon size={32} className="group-hover:text-cyan transition-colors" />
                </div>
                <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-vt tracking-wider text-base text-cyan whitespace-nowrap">
                  {item.id}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className="absolute bottom-10 w-full flex md:hidden justify-center z-20" style={{ opacity: showNav ? 1 : 0, transition: 'opacity 0.5s ease-in' }}>
        <div className="relative">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="border border-green bg-black text-green px-6 py-3 font-press text-xs uppercase tracking-widest hover:bg-green hover:text-black transition-colors terminal-prompt"
          >
            {'>'} MENU.exe<span className="animate-blink ml-2">█</span>
          </button>
          
          {mobileMenuOpen && (
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 border border-green bg-black p-2 flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-green font-vt text-sm p-2 hover:bg-green/20 hover:text-cyan transition-colors border border-transparent hover:border-green/50 flex items-center gap-3"
                >
                  <item.icon size={16} />
                  {item.id}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;