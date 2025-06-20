import React, { useEffect, useState } from 'react';

interface TypewriterGlitchProps {
  parts: { text: string; color?: string }[];
}

const TypewriterGlitch = ({ parts }: TypewriterGlitchProps) => {
  const charset = 'ҺңҢҹӌӂҿҗѽѩ'.split('');
  const fullText = parts.map((p) => p.text).join('');

  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (currentIndex >= fullText.length) {
      setIsDone(true);
      return;
    }

    let glitchCount = 0;
    let timeoutId: any;

    const doGlitch = () => {
      if (glitchCount < 2) {
        const randomChar = charset[Math.floor(Math.random() * charset.length)];
        setDisplayedText(fullText.slice(0, currentIndex) + randomChar);
        glitchCount++;
        timeoutId = setTimeout(doGlitch, 35);
      } else {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      }
    };

    doGlitch();

    return () => clearTimeout(timeoutId);
  }, [currentIndex, fullText]);

  const renderColoredText = () => {
    let remaining = displayedText;
    const elements = [];
    for (const part of parts) {
      if (remaining.length === 0) break;
      const partText = part.text;
      const sliceText = remaining.slice(0, partText.length);
      remaining = remaining.slice(partText.length);

      elements.push(
        <span key={elements.length} style={{ color: part.color || 'inherit' }}>
          {sliceText}
        </span>
      );
    }
    return elements;
  };

  return (
    <div className="text-4xl md:text-6xl text-white text-center p-4 font-ubuntu">
      {renderColoredText()}
      {!isDone && <span className="animate-pulse text-[#00ffcc]">|</span>}
    </div>
  );
};

export default TypewriterGlitch;
