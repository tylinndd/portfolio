import React from 'react';
import IDCard from './IDCard';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-8 flex justify-center items-center font-share">
      <div className="w-full max-w-[1300px] border border-green bg-black relative shadow-[0_0_30px_rgba(0,255,65,0.05)]">
        {/* Window Header */}
        <div className="flex justify-between items-center border-b border-green px-4 py-2">
          <div className="flex items-center text-green text-[13px] tracking-widest">
            {'>'} ABOUT_ME.EXE<span className="animate-pulse ml-[2px]">█</span>
          </div>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-cyan"></div>
            <div className="w-3 h-3 bg-red"></div>
            <div className="w-3 h-3 bg-cyan"></div>
          </div>
        </div>
        
        {/* Window Content */}
        <div className="p-8 md:p-14 flex flex-col xl:flex-row gap-12 justify-between">
          
          {/* Left Side: Bio & Skills */}
          <div className="flex-1 text-[13px] leading-relaxed text-green">
            <div className="space-y-6">
              <p className="flex gap-2"><span>{'>'}</span> <span>UPLOADING BIO_DATA...</span></p>
              <p className="flex gap-2"><span>{'>'}</span> <span>NAME: CYBER_DECKARD</span></p>
              <p className="flex gap-2"><span>{'>'}</span> <span>DESIGNATION: FULL STACK ENGINEER / AI SPECIALIST</span></p>
              <p className="flex gap-2"><span>{'>'}</span> <span>LOCATION: SECTOR 4, NEO-TOKYO</span></p>
              <p className="flex gap-2"><span>{'>'}</span> <span>STATUS: ONLINE AND SEARCHING FOR ANOMALIES...</span></p>
            </div>
            
            <div className="mt-8 space-y-6">
              <p className="flex gap-2">
                <span>{'>'}</span> 
                <span className="leading-[2]">
                  I specialize in building high-performance, resilient web applications that survive the harshest<br className="hidden lg:block"/>
                  network conditions. My focus is on creating immersive user interfaces blending with powerful backend<br className="hidden lg:block"/>
                  systems.
                </span>
              </p>
              
              <p className="flex gap-2">
                <span>{'>'}</span> 
                <span className="leading-[2]">
                  When I'm not tracing rogue AI instances, I'm competing in underground hackathons and contributing to<br className="hidden lg:block"/>
                  open-source subroutines.
                </span>
              </p>
            </div>
            
            <div className="border border-green p-6 mt-12 relative max-w-4xl">
              <h3 className="text-[15px] font-press text-green mb-8 flex items-center gap-4">
                <span className="text-xl leading-none -mt-1">{'>'}</span> CORE_SKILLS.DAT
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
                {[
                  { name: 'React / Next.js', width: '90%' },
                  { name: 'TypeScript', width: '85%' },
                  { name: 'Python / AI', width: '75%' },
                  { name: 'Node.js', width: '80%' },
                  { name: 'Tailwind CSS', width: '95%' },
                  { name: 'Cyber Security', width: '70%' },
                ].map(skill => (
                  <div key={skill.name} className="space-y-3">
                    <div className="text-[12px]">{skill.name}</div>
                    <div className="w-full h-[12px] border border-green p-[2px]">
                      <div className="h-full bg-green" style={{ width: skill.width }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Side: ID Card */}
          <div className="flex-none flex justify-center xl:justify-end items-start pt-2">
            <IDCard />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;