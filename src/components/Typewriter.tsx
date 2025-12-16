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

  useEffect(() => {
    const initial: Fragment[] = fullText.split("").map(char => ({
      char,
      x: (Math.random() - 0.5) * 600,
      y: (Math.random() - 0.5) * 400,
      r: (Math.random() - 0.5) * 120,
      settled: false,
    }));

    setFragments(initial);

    initial.forEach((_, i) => {
      setTimeout(() => {
        setFragments(prev => {
          const copy = [...prev];
          copy[i] = { ...copy[i], x: 0, y: 0, r: 0, settled: true };
          return copy;
        });
      }, 400 + Math.random() * 2000);
    });
  }, [fullText]);

  let index = 0;

  return (
    <div
      className="
        relative
        flex
        justify-center
        text-6xl md:text-7xl
        font-light
        tracking-widest
        whitespace-pre
      "
    >
      {parts.map((part, pIndex) => {
        const letters = fragments.slice(index, index + part.text.length);
        index += part.text.length;

        return (
          <span key={pIndex} className="flex">
            {letters.map((f, i) => {
              // ✅ CAS SPÉCIAL : ESPACE
              if (f.char === " ") {
                return (
                  <span
                    key={i}
                    className="inline-block"
                    style={{ width: "0.6em" }}
                  />
                );
              }

              return (
                <span
                  key={i}
                  className="
                    inline-block
                    transition-all
                    duration-[1600ms]
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
