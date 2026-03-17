import React from 'react';

const Socials = () => {
  const links = [
    { name: 'GITHUB', url: '#' },
    { name: 'LINKEDIN', url: '#' },
    { name: 'TWITTER', url: '#' },
    { name: 'EMAIL', url: '#' }
  ];

  return (
    <section id="socials" className="min-h-[50vh] py-20 px-8 border-t border-green">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-vt text-3xl text-green mb-12">
          {'>'} ESTABLISH_CONNECTION<span className="animate-pulse">█</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 font-share">
          {links.map(link => (
            <a 
              key={link.name} 
              href={link.url}
              className="group relative px-6 py-3 border border-green text-xl uppercase tracking-widest hover:text-cyan hover:border-cyan transition-colors"
            >
              {link.name}
              {/* Scanline hover effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 bg-[linear-gradient(transparent_50%,rgba(0,255,255,0.1)_50%)] bg-[length:100%_4px]"></div>
            </a>
          ))}
        </div>
        
        <footer className="mt-20 text-sm font-vt text-green/50">
          <p>© 2026 CYBER_NINJA. ALL RIGHTS RESERVED.</p>
          <p>SYSTEM_STATUS: ONLINE</p>
        </footer>
      </div>
    </section>
  );
};

export default Socials;