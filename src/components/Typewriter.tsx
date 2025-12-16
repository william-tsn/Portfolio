import { useEffect, useState } from "react";

interface Part {
  text: string;
  color?: string;
}

type Fragment = {
  char: string;
  x: number;
  y: number;
  r: number;
  settled: boolean;
};

export default function NonEuclideanText({ parts }: { parts: Part[] }) {
  const fullText = parts.map(p => p.text).join("");
  const [fragments, setFragments] = useState<Fragment[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const spreadX = isMobile ? 140 : 600;
    const spreadY = isMobile ? 90 : 400;
    const rotation = isMobile ? 20 : 120;
    const baseDelay = isMobile ? 250 : 400;
    const randomDelay = isMobile ? 800 : 2000;

    const initial: Fragment[] = fullText.split("").map(char => ({
      char,
      x: (Math.random() - 0.5) * spreadX,
      y: (Math.random() - 0.5) * spreadY,
      r: (Math.random() - 0.5) * rotation,
      settled: false,
    }));

    setFragments(initial);

    initial.forEach((_, i) => {
      setTimeout(() => {
        setFragments(prev => {
          const copy = [...prev];
          if (!copy[i]) return prev;
          copy[i] = { ...copy[i], x: 0, y: 0, r: 0, settled: true };
          return copy;
        });
      }, baseDelay + Math.random() * randomDelay);
    });
  }, [fullText, isMobile]);

  let index = 0;

  return (
  <div
  className="
    relative
    flex
    justify-center
    whitespace-pre
    text-3xl sm:text-xl md:text-7xl
    font-light
    tracking-normal sm:tracking-wide md:tracking-widest
  "
>
      {parts.map((part, pIndex) => {
        const letters = fragments.slice(index, index + part.text.length);
        index += part.text.length;

        return (
          <span key={pIndex} className="flex">
            {letters.map((f, i) => {
              if (f.char === " ") {
                return (
                  <span
                    key={i}
                    className="inline-block"
                    style={{ width: isMobile ? "0.4em" : "0.6em" }}
                  />
                );
              }

              return (
                <span
                  key={i}
                  className="
                    inline-block
                    transition-all
                    duration-[1200ms] md:duration-[1600ms]
                    ease-[cubic-bezier(.16,1,.3,1)]
                  "
                  style={{
                    transform: `translate(${f.x}px, ${f.y}px) rotate(${f.r}deg)`,
                    opacity: f.settled ? 1 : 0.35,
                    color: part.color || "white",
                  }}
                >
                  {f.char}
                </span>
              );
            })}
          </span>
        );
      })}
    </div>
  );
}
