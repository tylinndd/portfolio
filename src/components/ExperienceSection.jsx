import React, { useEffect, useRef } from 'react';

const experiences = [
  {
    id: 1,
    date: '2024-PRESENT',
    role: 'LEAD AI ENGINEER',
    company: '@TYRELL CORP',
    description: [
      'Architected generative neural networks for synthetic intelligence.',
      'Optimized query response times by 40% using advanced edge-caching.',
      'Led a strike team of 5 developers on Project NEXUS.'
    ],
    hash: 'XEZH6LPTVE'
  },
  {
    id: 2,
    date: '2022-2024',
    role: 'FULL STACK DEVELOPER',
    company: '@OMNICORP',
    description: [
      'Built resilient, scalable web interfaces for automated defense systems.',
      'Integrated secure authentication protocols blocking 99.9% of attacks.',
      'Refactored legacy monolithic backend into decoupled microservices.'
    ],
    hash: 'DYEVJD24QED'
  },
  {
    id: 3,
    date: '2020-2022',
    role: 'JUNIOR NETRUNNER',
    company: '@FREELANCE',
    description: [
      'Exploited vulnerabilities in corporate networks for bounty programs.',
      'Developed custom terminal applications using raw WebSockets.',
      'Maintained a 100% success rate in data retrieval operations.'
    ],
    hash: 'VBRSLP99XX'
  }
];

const ExperienceItem = ({ exp }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    const currentRef = itemRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
            
            // Animate children line by line
            const lines = entry.target.querySelectorAll('.reveal-line');
            lines.forEach((line, index) => {
              setTimeout(() => {
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
              }, index * 200); // 200ms delay per line
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={itemRef} className="relative pl-8 pb-12 opacity-0 transition-opacity duration-500">
      {/* Diamond Marker */}
      <div className="absolute left-[-6px] top-1 w-3 h-3 border border-green bg-black rotate-45 z-10"></div>
      
      <div className="flex flex-col gap-2">
        {/* Header Line */}
        <div className="reveal-line opacity-0 translate-y-4 transition-all duration-500 ease-out flex flex-wrap items-baseline gap-3">
          <span className="text-cyan font-vt text-sm tracking-wider">
            [INFO] [{exp.date}]
          </span>
          <h3 className="text-green font-press text-lg md:text-xl uppercase tracking-widest">
            {exp.role}
          </h3>
          <span className="text-red font-vt text-sm tracking-widest">
            {exp.company}
          </span>
        </div>

        {/* Description Lines */}
        <div className="mt-4 flex flex-col gap-3">
          {exp.description.map((line, i) => (
            <div 
              key={i} 
              className="reveal-line opacity-0 translate-y-4 transition-all duration-500 ease-out flex items-start gap-3"
            >
              <span className="text-green font-vt mt-1 terminal-prompt">{'>'}</span>
              <p className="text-green font-vt text-sm md:text-base leading-relaxed">
                {line}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Log Line */}
        <div className="reveal-line opacity-0 translate-y-4 transition-all duration-500 ease-out mt-6 text-green/50 font-vt text-xs tracking-widest uppercase">
          SYS.LOG // HASH: {exp.hash} // INTEGRITY: VERIFIED // OK
        </div>
      </div>
    </div>
  );
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full max-w-[1300px] mx-auto my-24 px-4 relative">
      {/* Terminal Window Frame */}
      <div className="border border-green bg-black/80 backdrop-blur-sm relative overflow-hidden">
        
        {/* Faint Background Text/Grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center overflow-hidden">
          <pre className="text-green text-[0.5rem] leading-none select-none font-vt">
            {`KEYBOARD CONTROL          SELECTION          MASTER TUNING
            
            
            
            
            THE VARIETY OF NOISES IS INFINITE.
            
            
            
            WE MUST BREAK OUT OF THIS NARROW CIRCLE OF PURE MUSICAL SOUNDS
            AND CONQUER THE INFINITE VARIETY OF NOISE-SOUNDS.`}
          </pre>
        </div>

        {/* Terminal Header */}
        <div className="border-b border-green p-3 flex justify-between items-center bg-green/10">
          <h2 className="text-green font-press text-xs md:text-sm tracking-widest flex items-center gap-2 terminal-prompt">
            <span>{'>'} LOADING EXPERIENCE...</span>
            <span className="animate-blink">█</span>
          </h2>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-cyan"></div>
            <div className="w-3 h-3 bg-red"></div>
            <div className="w-3 h-3 bg-green"></div>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-10 relative z-10">
          
          {/* Timeline Container */}
          <div className="relative border-l border-green ml-2 md:ml-4 pt-4 pb-4">
            {experiences.map((exp) => (
              <ExperienceItem key={exp.id} exp={exp} />
            ))}
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .animate-reveal {
          opacity: 1 !important;
        }
      `}} />
    </section>
  );
}
