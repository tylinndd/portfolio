import React, { useEffect, useRef, useState } from 'react';
import { Download } from 'lucide-react';
import resumePdf from '../assets/TylinDelaneyResume.pdf';

const ResumeSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showDossier, setShowDossier] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => setShowDossier(true), 100);
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

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isPreviewMode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPreviewMode]);

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
            
            // Trigger actual download
            const link = document.createElement('a');
            link.href = resumePdf;
            link.download = 'TylinDelaneyResume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  return (
    <section id="resume" ref={sectionRef} className="min-h-screen py-20 px-4 md:px-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-[1300px]">
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
            <div className="font-vt text-green tracking-widest text-sm flex items-center terminal-prompt">
              {'>'} RESUME_EXTRACT.EXE <span className="animate-blink ml-2">█</span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-cyan"></div>
              <div className="w-3 h-3 bg-green"></div>
              <div className="w-3 h-3 bg-red"></div>
            </div>
          </div>

          <div className="p-4 md:p-8 font-vt flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Column: Dossier */}
            <div className="flex-1 w-full">
              {/* Dossier Box */}
              <div className={`relative border border-green p-6 md:p-8 w-full max-w-xl bg-black transition-all duration-1000 transform h-[350px] flex flex-col justify-between ${showDossier ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                {/* Corner squares */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-green -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-green translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-green -translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-green translate-x-1/2 translate-y-1/2"></div>

                <div className="text-center mb-4">
                  <h3 className="font-press text-2xl md:text-3xl text-green mb-2 tracking-widest">RESUME</h3>
                  <p className="text-cyan text-xs md:text-sm tracking-[0.2em]">SECURITY CLEARANCE: LEVEL 9 REQUIRED</p>
                </div>

                <div className="space-y-3 mb-4 text-sm md:text-base flex-grow flex flex-col justify-center">
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
                  className="group relative w-full border border-green bg-transparent text-green py-4 font-bold text-lg tracking-widest uppercase overflow-hidden transition-colors hover:border-cyan hover:text-cyan hover:glitch-flicker flex items-center justify-center"
                >
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    <Download size={20} />
                    {/* TODO: Add actual download logic in handleDownload function above */}
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

            {/* Right Column: Resume Preview */}
            <div className={`flex-1 w-full transition-all duration-1000 delay-500 transform ${showDossier ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
              <div className="border border-green/50 bg-black/50 p-4 h-[350px] flex flex-col relative group">
                {/* Scanline overlay for preview */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                  <div className="w-full h-2 bg-green/30 animate-scanline-sweep absolute top-0 left-0 blur-[1px]"></div>
                </div>
                
                <div className="flex justify-between items-center mb-4 border-b border-green/30 pb-2">
                  <span className="text-cyan text-sm tracking-widest">PREVIEW_MODE.EXE</span>
                  <span className="text-green/50 text-xs animate-pulse">LIVE</span>
                </div>
                
                <div className="flex-grow flex items-center justify-center border border-dashed border-green/30 bg-green/5 relative overflow-hidden">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 border border-green/50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-cyan group-hover:text-cyan transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
                    </div>
                    <button 
                      onClick={() => setIsPreviewMode(true)}
                      className="border border-green text-green px-6 py-2 text-sm hover:bg-green hover:text-black transition-colors uppercase tracking-widest"
                    >
                      [ INITIALIZE PREVIEW ]
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {isPreviewMode && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl h-full max-h-[90vh] border border-green bg-black flex flex-col shadow-[0_0_30px_rgba(0,255,65,0.2)]">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b border-green px-4 py-3 bg-[#0a1910]">
              <div className="font-vt text-green tracking-widest text-sm flex items-center terminal-prompt">
                {'>'} RESUME_VIEWER.EXE <span className="animate-blink ml-2">█</span>
              </div>
              <button 
                onClick={() => setIsPreviewMode(false)}
                className="text-green hover:text-red transition-colors flex items-center gap-2"
              >
                <span className="font-vt text-sm tracking-widest">[ CLOSE ]</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="flex-grow p-4 overflow-y-auto custom-scrollbar relative">
              {/* Scanline overlay for modal */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                <div className="w-full h-2 bg-green/30 animate-scanline-sweep absolute top-0 left-0 blur-[1px]"></div>
              </div>
              
              <div className="w-full min-h-full bg-white/90 relative z-10 flex flex-col items-center justify-center">
                <object 
                  data={resumePdf} 
                  type="application/pdf" 
                  className="w-full h-[80vh] md:h-[800px]"
                >
                  <p className="text-black p-4">
                    Your browser does not support PDFs. 
                    <a href={resumePdf} className="text-blue-600 underline ml-1">Download the PDF</a>.
                  </p>
                </object>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResumeSection;