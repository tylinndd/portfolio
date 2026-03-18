import React, { useState, useEffect } from 'react';

const BOOT_MESSAGES = [
  "INITIALIZING SYSTEM BOOT...",
  "MEMORY CHECK: 1048576 KB OK",
  "LOADING KERNEL MODULES...",
  "MOUNTING VIRTUAL FILE SYSTEM... OK",
  "ESTABLISHING SECURE CONNECTION..."
];

const POST_PROGRESS_MESSAGES = [
  "ACCESS GRANTED.",
  "EXECUTING [ABOUT_ME].exe..."
];

const BootScreen = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [postVisibleLines, setPostVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('lines'); // 'lines', 'progress', 'post_lines', 'glitch'

  useEffect(() => {
    if (phase === 'lines') {
      if (visibleLines < BOOT_MESSAGES.length) {
        const delays = [400, 100, 300, 200, 400];
        const timer = setTimeout(() => {
          setVisibleLines(prev => prev + 1);
        }, delays[visibleLines] || 300);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setPhase('progress');
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [phase, visibleLines]);

  useEffect(() => {
    if (phase === 'progress') {
      if (progress < 100) {
        // Fast progress bar updates (0 to 100 in about 1.5s total)
        const increment = Math.floor(Math.random() * 15) + 5;
        const nextProgress = Math.min(progress + increment, 100);
        
        const timer = setTimeout(() => {
          setProgress(nextProgress);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        // Brief pause at 100% before moving to post lines
        const timer = setTimeout(() => {
          setPhase('post_lines');
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [phase, progress]);

  useEffect(() => {
    if (phase === 'post_lines') {
      if (postVisibleLines < POST_PROGRESS_MESSAGES.length) {
        const timer = setTimeout(() => {
          setPostVisibleLines(prev => prev + 1);
        }, 300);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setPhase('glitch');
        }, 400);
        return () => clearTimeout(timer);
      }
    }
  }, [phase, postVisibleLines]);

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
    return '|'.repeat(filledCount) + '\u00A0'.repeat(emptyCount);
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black text-green font-vt p-6 md:p-8 flex flex-col justify-end items-start overflow-hidden ${
        phase === 'glitch' ? 'animate-glitch-burst' : 'animate-crt-power-on'
      }`}
    >
      <div className="w-full terminal-prompt">
        {BOOT_MESSAGES.slice(0, visibleLines).map((msg, index) => (
          <div key={index} className="mb-1 text-sm sm:text-base md:text-lg">
            <span className="text-cyan mr-2">&gt;</span>
            <span>{msg}</span>
            {phase === 'lines' && index === visibleLines - 1 && (
              <span className="animate-pulse ml-2 inline-block w-2 h-4 bg-green align-middle"></span>
            )}
          </div>
        ))}

        {phase !== 'lines' && (
          <div className="mb-1 text-sm sm:text-base md:text-lg">
            <span className="mr-4">[{getProgressBar()}]</span>
            <span>{progress}%</span>
            {phase === 'progress' && (
              <span className="animate-pulse ml-2 inline-block w-2 h-4 bg-green align-middle"></span>
            )}
          </div>
        )}

        {phase !== 'lines' && phase !== 'progress' && POST_PROGRESS_MESSAGES.slice(0, postVisibleLines).map((msg, index) => (
          <div key={`post-${index}`} className="mb-1 text-sm sm:text-base md:text-lg">
            <span className="text-cyan mr-2">&gt;</span>
            <span>{msg}</span>
            {phase === 'post_lines' && index === postVisibleLines - 1 && (
              <span className="animate-pulse ml-2 inline-block w-2 h-4 bg-green align-middle"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BootScreen;
