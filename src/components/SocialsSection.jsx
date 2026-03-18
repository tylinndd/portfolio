import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const socials = [
  { id: 1, name: 'GITHUB', handle: '@cyber_deckard', Icon: Github },
  { id: 2, name: 'LINKEDIN', handle: '/in/deckard_sys', Icon: Linkedin },
  { id: 3, name: 'SECURE_COMMS', handle: 'deckard@tyrell.corp', Icon: Mail },
];

const SocialCard = ({ social, isVisible, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const { Icon } = social;

  useEffect(() => {
    let timeout;
    if (isConnecting) {
      timeout = setTimeout(() => {
        setIsConnecting(false);
      }, 600);
    }
    return () => clearTimeout(timeout);
  }, [isConnecting]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsConnecting(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsConnecting(false);
  };

  const displayText = isConnecting ? 'CONNECTING...' : social.name;

  return (
    <a 
      href="#"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative border border-green bg-black p-8 flex flex-col items-center justify-center transition-all duration-500 hover:border-cyan
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Scanline Sweep on Hover */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-2 bg-cyan/30 opacity-0 group-hover:opacity-100 group-hover:animate-scanline-sweep absolute top-0 left-0 blur-[1px]"></div>
      </div>

      <div className="relative mb-6 text-green group-hover:text-cyan transition-colors duration-300">
        <Icon size={48} strokeWidth={1.5} />
      </div>
      
      <div className="text-center font-vt">
        <h3 className={`font-vt text-2xl text-green group-hover:text-cyan transition-colors duration-300 mb-2 tracking-widest ${isHovered && displayText === 'CONNECTING...' ? 'animate-blink' : ''}`}>
          {displayText}
        </h3>
        <p className="text-green/60 text-xs tracking-wider group-hover:text-cyan/80 transition-colors duration-300">
          {social.handle}
        </p>
      </div>
    </a>
  );
};

const SocialsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="socials" ref={sectionRef} className="min-h-screen py-20 px-4 md:px-8 flex flex-col">
      <div className="w-full max-w-[1300px] mx-auto flex-grow flex flex-col justify-center">
        
        {/* Terminal Window */}
        <div className="relative border border-green bg-black p-1 mb-20">
          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green -translate-x-[2px] -translate-y-[2px]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green translate-x-[2px] -translate-y-[2px]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green -translate-x-[2px] translate-y-[2px]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green translate-x-[2px] translate-y-[2px]"></div>

          {/* Top Bar */}
          <div className="flex justify-between items-center border-b border-green pb-2 mb-8 px-4 pt-2 bg-[#0a1910]">
            <div className="font-vt text-green tracking-widest text-sm flex items-center terminal-prompt">
              {'>'} COMMUNICATIONS.SYS <span className="animate-blink ml-2">█</span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-cyan"></div>
              <div className="w-3 h-3 bg-green"></div>
              <div className="w-3 h-3 bg-red"></div>
            </div>
          </div>

          <div className="p-4 md:p-8">
            <h2 className="font-press text-lg md:text-xl text-green mb-12 uppercase text-center terminal-prompt">
              {'>'} ESTABLISH CONNECTION...<span className="animate-blink inline-block ml-2">█</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socials.map((social, index) => (
                <SocialCard 
                  key={social.id} 
                  social={social} 
                  isVisible={isVisible} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="text-center font-vt text-green/60 py-8">
        <p className="tracking-widest text-sm md:text-base">
          © 2025 TY — ALL RIGHTS RESERVED<span className="animate-blink inline-block ml-1">█</span>
        </p>
      </footer>
    </section>
  );
};

export default SocialsSection;