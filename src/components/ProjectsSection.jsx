import React, { useEffect, useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    filename: 'StepSafe.exe',
    title: 'STEPSAFE',
    desc: 'Backend for ML powered diabetic foot ulcer detection system (1st Place @ 2026 HACKATHON)',
    status: 'ACTIVE',
    tech: ['Python', 'Shell'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    //projectUrl: '#', // TODO: Add your live project URL here
    githubUrl: 'https://github.com/StephenSook/StepSafe'   // TODO: Add your GitHub repository URL here
  },
  {
    id: 2,
    filename: 'Hexbear.exe',
    title: 'HEXBEAR',
    desc: 'A gamified climate-action mobile app that turns everyday sustainable habits into a magical wizard adventure.',
    status: 'SHIPPED',
    tech: ['TypeScript', 'JavaScript','SQL'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    projectUrl: 'https://youtu.be/zNZLKQuChu8', // TODO: Add your live project URL here
    githubUrl: 'https://github.com/tylinndd/hexbear'   // TODO: Add your GitHub repository URL here
  },
  {
    id: 3,
    filename: 'FilmFanatic.exe',
    title: 'FilmFanatic',
    desc: 'ML-based movie recommendation system that suggests movies based on a movies genres, cast, description, and director.',
    status: 'DEPLOYED',
    tech: ['Python', 'Shell', 'SQL', 'HTML/CSS','JavaScript'],
    image: 'https://images.unsplash.com/photo-1515630278258-407f66498911?auto=format&fit=crop&q=80&w=800',
    projectUrl: 'https://filmfanatic.onrender.com/', // TODO: Add your live project URL here
    githubUrl: 'https://github.com/tylinndd/movie-recommendation'   // TODO: Add your GitHub repository URL here
  },
  {
    id: 4,
    filename: 'Horizon.exe',
    title: 'HORIZON',
    desc: 'A production-ready AI-powered platform for detecting disease outbreaks, assessing health risks, and optimizing hospital resource allocation in real-time.',
    status: 'ARCHIVED',
    tech: ['Python', 'TypeScript', 'Shell', 'SQL'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    //projectUrl: '#', // TODO: Add your live project URL here
    githubUrl: 'https://github.com/tylinndd/horizon'   // TODO: Add your GitHub repository URL here
  }
];

const ProjectsSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Stagger reveal
          projects.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            }, index * 200);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-20 px-4 md:px-8">
      <div className="w-full max-w-[1300px] mx-auto">
        <h2 className="font-press text-xl md:text-2xl text-green mb-12 uppercase terminal-prompt">
          {'>'} ACCESSING PROJECT FILES...<span className="animate-blink inline-block ml-2">█</span>
        </h2>
        
        <div className="border border-green bg-black p-1 mb-8">
          <div className="flex justify-between items-center border-b border-green pb-2 mb-4 px-2 pt-2">
            <div className="font-vt text-green tracking-widest text-sm terminal-prompt">
              {'>'} PROJECT_DB.DAT <span className="animate-blink">█</span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-cyan"></div>
              <div className="w-3 h-3 bg-cyan"></div>
              <div className="w-3 h-3 bg-red"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 font-vt">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`group border border-green bg-black flex flex-col transition-all duration-300 hover:border-cyan relative overflow-hidden
                  ${visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionProperty: 'opacity, transform, border-color' }}
              >
                {/* Glitch Slice Overlay */}
                <div className="absolute inset-0 pointer-events-none z-20 hidden group-hover:block mix-blend-screen opacity-50">
                  <div className="w-full h-full bg-cyan/10 animate-glitch-slice"></div>
                </div>

                {/* Top Image Section */}
                <div className="relative h-48 border-b border-green group-hover:border-cyan transition-colors overflow-hidden">
                  <div className="absolute inset-0 bg-green mix-blend-color z-10 opacity-40"></div>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0Pgo8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSI0IiB5Mj0iMCIgc3Ryb2tlPSJyZ2JhKDAsIDI1NSwgNjUsIDAuMikiIHN0cm9rZS13aWR0aD0iMSI+PC9saW5lPgo8L3N2Zz4=')] z-10 pointer-events-none"></div>
                  
                  {/* Base Image */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-150 group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Glitch Slice Duplicate */}
                  <img 
                    src={project.image} 
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-cover grayscale contrast-150 hidden group-hover:block group-hover:animate-glitch-slice mix-blend-screen opacity-70"
                  />
                  
                  <div className="absolute top-2 right-2 z-20 border border-green bg-black px-2 py-1 text-[10px] text-green group-hover:border-cyan group-hover:text-cyan transition-colors uppercase">
                    STATUS: {project.status}
                  </div>
                  <div className="absolute bottom-2 left-2 z-20 text-xs text-green bg-black/80 px-2 py-1 border border-green/50 group-hover:border-cyan/50 group-hover:text-cyan transition-colors terminal-prompt">
                    {'>'} {project.filename}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-vt text-green mb-2 group-hover:text-cyan transition-colors uppercase tracking-wider">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-green/80 mb-6 flex-grow leading-relaxed group-hover:text-cyan/80 transition-colors">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="border border-green text-cyan text-[10px] px-2 py-1 group-hover:border-cyan transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mt-auto">
                    <a 
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-green text-green py-2 text-sm hover:bg-green hover:text-black transition-colors uppercase tracking-widest group-hover:border-cyan group-hover:hover:bg-cyan text-center"
                    >
                      [ VIEW PROJECT ]
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-green text-green py-2 text-sm hover:bg-green hover:text-black transition-colors uppercase tracking-widest group-hover:border-cyan group-hover:hover:bg-cyan text-center"
                    >
                      [ SOURCE CODE ]
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;