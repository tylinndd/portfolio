import React, { useEffect, useRef, useState } from 'react';
import { Download } from 'lucide-react';

const terminalLines = [
  "> EXTRACTING RESUME DATA...",
  "> NAME: TYLER LIN",
  "> ROLE: FULL STACK DEVELOPER & AI ENGINEER",
  "> SKILLS: REACT, NODE.JS, PYTHON, THREE.JS",
  "> COMPILING DOSSIER..."
];

const ResumeSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lines, setLines] = useState([]);
  const [showDossier, setShowDossier] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Type out lines
          terminalLines.forEach((line, index) => {
            setTimeout(() => {
              setLines(prev => [...prev, line]);
              if (index === terminalLines.length - 1) {
                setTimeout(() => setShowDossier(true), 500);
              }
            }, index * 400);
          });
          
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const handleDownload = () => {
    if (isDownloading) return;
    
    setIsDownloading(true);
    setDownloadProgress(0);
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDownloading(false);
            setDownloadProgress(0);
            // Trigger actual download here if needed
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  return (
    <section id="resume" ref={sectionRef} className="min-h-screen py-20 px-4 md:px-8 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        <h2 className="font-press text-xl md:text-2xl text-green mb-12 uppercase terminal-prompt">
          {'>'} RETRIEVING RESUME.PDF...<span className="animate-blink inline-block ml-2">█</span>
        </h2>
        
        {/* Terminal Window */}
        <div className="relative border border-green bg-black p-1">
          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green -translate-x-[2px] -translate-y-[2px]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green translate-x-[2px] -translate-y-[2px]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green -translate-x-[2px] translate-y-[2px]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green translate-x-[2px] translate-y-[2px]"></div>

          {/* Top Bar */}
          <div className="flex justify-between items-center border-b border-green pb-2 mb-4 px-4 pt-2 bg-[#0a1910]">
            <div className="font-share text-green tracking-widest text-sm flex items-center terminal-prompt">
              {'>'} RESUME_EXTRACT.EXE <span className="animate-blink ml-2">█</span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-cyan"></div>
              <div className="w-3 h-3 bg-green"></div>
              <div className="w-3 h-3 bg-red"></div>
            </div>
          </div>

          <div className="p-4 md:p-8 font-share min-h-[400px] flex flex-col">
            {/* Terminal Readout */}
            <div className="mb-8 text-green/80 space-y-2">
              {lines.map((line, i) => (
                <div key={i} className="typing-line">{line}</div>
              ))}
            </div>

            {/* Dossier Box */}
            <div className={`relative border border-green p-6 md:p-10 mx-auto w-full max-w-2xl bg-black transition-all duration-1000 transform ${showDossier ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
              {/* Corner squares */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-green -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-0 right-0 w-2 h-2 bg-green translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-green -translate-x-1/2 translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-green translate-x-1/2 translate-y-1/2"></div>

              <div className="text-center mb-8">
                <h3 className="font-press text-3xl md:text-4xl text-green mb-4 tracking-widest">DOSSIER</h3>
                <p className="text-cyan text-xs md:text-sm tracking-[0.2em]">SECURITY CLEARANCE: LEVEL 9 REQUIRED</p>
              </div>

              <div className="space-y-4 mb-10 text-sm md:text-base">
                <div className="border-t border-dashed border-green/30 pt-4 flex justify-between">
                  <span className="text-green/70">FILE_SIZE:</span>
                  <span className="text-green">2.4 MB</span>
                </div>
                <div className="border-t border-dashed border-green/30 pt-4 flex justify-between">
                  <span className="text-green/70">FORMAT:</span>
                  <span className="text-green">ENCRYPTED_PDF</span>
                </div>
                <div className="border-t border-dashed border-green/30 pt-4 flex justify-between">
                  <span className="text-green/70">LAST_UPDATED:</span>
                  <span className="text-green">2026-03-17</span>
                </div>
                <div className="border-t border-dashed border-green/30"></div>
              </div>

              <button 
                onClick={handleDownload}
                className="group relative w-full border border-green bg-transparent text-green py-4 font-bold text-lg tracking-widest uppercase overflow-hidden transition-colors hover:border-cyan hover:text-cyan hover:glitch-flicker"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <Download size={20} />
                  {isDownloading ? `DOWNLOADING... ${downloadProgress}%` : '[ DOWNLOAD RESUME.PDF ]'}
                </div>
                
                {/* Hover glitch background */}
                <div className="absolute inset-0 bg-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                
                {/* Fake loading bar */}
                {isDownloading && (
                  <div 
                    className="absolute bottom-0 left-0 h-1 bg-cyan transition-all duration-100"
                    style={{ width: `${downloadProgress}%` }}
                  ></div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;