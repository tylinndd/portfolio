import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 px-8 border-t border-green">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-vt text-3xl text-green mb-12">
          {'>'} LOADING EXPERIENCE...<span className="animate-pulse">█</span>
        </h2>
        
        <div className="space-y-8 font-share">
          <div className="border-l-2 border-green pl-6 relative">
            <div className="absolute w-3 h-3 bg-green -left-[7px] top-1"></div>
            <div className="text-cyan text-sm mb-1">2024 - PRESENT</div>
            <h3 className="text-xl font-bold uppercase">Senior AI Engineer // Neural_Corp</h3>
            <p className="mt-2 text-green/80">
              Architecting next-generation large language model applications. Reduced inference latency by 40% and established new CI/CD pipelines for model deployment.
            </p>
          </div>
          
          <div className="border-l-2 border-green pl-6 relative">
            <div className="absolute w-3 h-3 bg-green -left-[7px] top-1"></div>
            <div className="text-cyan text-sm mb-1">2022 - 2024</div>
            <h3 className="text-xl font-bold uppercase">Full Stack Developer // Synth_Systems</h3>
            <p className="mt-2 text-green/80">
              Built scalable web applications using React and Node.js. Maintained high-availability microservices serving over 1M daily active users.
            </p>
          </div>

          <div className="border-l-2 border-green pl-6 relative">
            <div className="absolute w-3 h-3 bg-green -left-[7px] top-1"></div>
            <div className="text-cyan text-sm mb-1">2020 - 2022</div>
            <h3 className="text-xl font-bold uppercase">Frontend Specialist // Neo_Tokyo_Web</h3>
            <p className="mt-2 text-green/80">
              Developed highly interactive user interfaces. Won multiple internal hackathons for innovative UI/UX designs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;