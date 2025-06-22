import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedComponentProps {
  children: ReactNode;
  animationClass?:
    | 'animate-slide-in'
    | 'animate-slide-in-right'
    | 'animate-slide-in-up'
    | 'animate-slide-in-down'
    | 'split-effect'
    | 'falling';
  threshold?: number;
  disableOnMobile?: boolean;
}

const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
  children,
  animationClass = 'animate-slide-in',
  threshold = 0.7,
  disableOnMobile = false,
}) => {
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (disableOnMobile && isMobile) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, disableOnMobile, isMobile]);

  return (
    <div
      ref={elementRef}
      className={`transition-opacity duration-1000 ease-out transform-gpu will-change-transform ${
        isInView ? `${animationClass} opacity-100` : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedComponent;
