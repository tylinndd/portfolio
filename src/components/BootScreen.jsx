import React, { useState, useEffect } from 'react';

const BOOT_MESSAGES = [
  "INITIALIZING NEURAL LINK...",
  "SCANNING BIOMETRIC DATA...",
  "VERIFYING IDENTITY...",
  "LOADING PORTFOLIO OS v2.0...",
  "ACCESS GRANTED"
];

const BootScreen = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('lines'); // 'lines', 'progress', 'glitch'

  useEffect(() => {
    if (phase === 'lines') {
      if (visibleLines < BOOT_MESSAGES.length) {
        const timer = setTimeout(() => {
          setVisibleLines(prev => prev + 1);
        }, 150);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setPhase('progress');
        }, 0);
        return () => clearTimeout(timer);
      }
    }
  }, [phase, visibleLines]);

  useEffect(() => {
    if (phase === 'progress') {
      if (progress < 100) {
        // Fast progress bar updates (0 to 100 in about 1-1.5s total)
        const increment = Math.floor(Math.random() * 15) + 5;
        const nextProgress = Math.min(progress + increment, 100);
        
        const timer = setTimeout(() => {
          setProgress(nextProgress);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        // Brief pause at 100% before glitching
        const timer = setTimeout(() => {
          setPhase('glitch');
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [phase, progress]);

  useEffect(() => {
    if (phase === 'glitch') {
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 600); // Wait for glitch animation to finish
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  // Prevent scrolling while booting
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const getProgressBar = () => {
    const filledCount = Math.floor(progress / 5); // 20 blocks total
    const emptyCount = 20 - filledCount;
    return '█'.repeat(filledCount) + '░'.repeat(emptyCount);
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black text-green font-share p-6 flex flex-col justify-center items-start overflow-hidden ${
        phase === 'glitch' ? 'animate-glitch-burst' : ''
      }`}
    >
      <div className="w-full max-w-3xl mx-auto">
        {BOOT_MESSAGES.slice(0, visibleLines).map((msg, index) => (
          <div key={index} className="mb-2 text-xl sm:text-2xl md:text-3xl">
            <span className="text-cyan mr-2">&gt;</span>
            <span>{msg}</span>
            {phase === 'lines' && index === visibleLines - 1 && (
              <span className="animate-pulse ml-2 inline-block w-3 h-5 bg-green align-middle"></span>
            )}
          </div>
        ))}
        
        {phase !== 'lines' && visibleLines === BOOT_MESSAGES.length && (
          <div className="mb-2 text-xl sm:text-2xl md:text-3xl">
            <span className="text-cyan mr-2">&gt;</span>
            <span>{BOOT_MESSAGES[BOOT_MESSAGES.length - 1]}</span>
          </div>
        )}

        {phase !== 'lines' && (
          <div className="mt-8 text-xl sm:text-2xl md:text-3xl">
            <span className="text-cyan mr-2">&gt;</span>
            <span className="mr-4">[{getProgressBar()}]</span>
            <span>{progress}%</span>
            <span className="animate-pulse ml-2 inline-block w-3 h-5 bg-green align-middle"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BootScreen;
