import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedComponentProps {
  children: ReactNode;
  animationClass?: 'animate-slide-in' | 'animate-slide-in-right' | 'animate-slide-in-up' | 'animate-slide-in-down' | 'split-effect' | 'falling';
  threshold?: number;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  children,
  animationClass = 'animate-slide-in',
  threshold = 0.7,
}) => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={elementRef}
      className={`transition-opacity duration-1000 ease-out ${
        isInView ? `${animationClass} opacity-100` : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedComponent;
