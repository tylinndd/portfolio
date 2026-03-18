import React from 'react';

const Projects = () => {
  const projects = [
    { id: 1, title: 'CYBER_DEFENSE_GRID', desc: 'Real-time network visualization dashboard', tech: 'React, Three.js, WebSockets' },
    { id: 2, title: 'NEURAL_LINK_API', desc: 'High-throughput LLM serving infrastructure', tech: 'Python, FastAPI, Redis' },
    { id: 3, title: 'HACKATHON_CHAMPION_2025', desc: 'Award winning decentralized application', tech: 'Solidity, Next.js, Hardhat' }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-8 border-t border-green">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-vt text-3xl text-green mb-12">
          {'>'} EXECUTE PROJECTS.sh<span className="animate-pulse">█</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-vt">
          {projects.map(p => (
            <div key={p.id} className="group border border-green p-6 relative overflow-hidden bg-black hover:bg-green/5 transition-colors cursor-pointer">
              {/* Glitch hover effect overlay */}
              <div className="absolute inset-0 bg-cyan/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:animate-pulse"></div>
              
              <div className="flex justify-between items-start mb-4 border-b border-green/50 pb-2">
                <h3 className="text-xl font-bold uppercase">{p.title}</h3>
                <span className="text-xs text-cyan">[v1.{p.id}]</span>
              </div>
              
              <p className="mb-6 text-green/80 h-16">{p.desc}</p>
              
              <div className="text-xs text-cyan uppercase tracking-wider">
                TECH_STACK: {p.tech}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;