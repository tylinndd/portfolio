import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="min-h-screen py-20 px-8 border-t border-green flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full">
        <h2 className="font-vt text-3xl text-green mb-8">
          {'>'} DOWNLOAD_RESUME.exe<span className="animate-pulse">█</span>
        </h2>
        
        <div className="border border-green p-8 bg-black/50 font-vt">
          <div className="mb-6 text-cyan uppercase text-sm">
            <p>CONNECTING TO SECURE SERVER...</p>
            <p>AUTHENTICATING_USER_CREDENTIALS...</p>
            <p>ACCESS_GRANTED.</p>
          </div>
          
          <div className="border-t border-b border-green/50 py-6 my-6">
            <h3 className="text-xl mb-4 font-bold tracking-widest">CYBER_NINJA_RESUME_v2.0.pdf</h3>
            <p className="text-sm text-green/70 mb-4">
              FILE_SIZE: 142KB<br/>
              ENCRYPTION: NONE<br/>
              LAST_MODIFIED: CURRENT_TIMESTAMP
            </p>
          </div>
          
          <button className="group relative inline-block px-8 py-3 font-bold uppercase tracking-widest border border-green text-green hover:bg-green hover:text-black transition-colors overflow-hidden">
            <span className="relative z-10">INITIATE_DOWNLOAD</span>
            {/* Scanline hover effect */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;