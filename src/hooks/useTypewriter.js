import { useState, useEffect } from 'react';

export function useTypewriter(phrases, typingSpeed = 50, deletingSpeed = 30, pauseTime = 1000) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished) return;

    const current = loopNum % phrases.length;
    const fullText = phrases[current];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));

        if (text === fullText) {
          if (loopNum === phrases.length - 1) {
            setIsFinished(true);
            return;
          }
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(fullText.substring(0, text.length - 1));

        if (text === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, typingSpeed, deletingSpeed, pauseTime, isFinished]);

  return { text, isFinished };
}
