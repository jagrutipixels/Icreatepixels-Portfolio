
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  width?: 'fit-content' | '100%';
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  width = '100%',
  className = ""
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getDirectionClass = () => {
    if (isVisible) return 'opacity-100 translate-x-0 translate-y-0 scale-100';
    
    switch (direction) {
      case 'up': return 'opacity-0 translate-y-12';
      case 'down': return 'opacity-0 -translate-y-12';
      case 'left': return 'opacity-0 translate-x-12';
      case 'right': return 'opacity-0 -translate-x-12';
      case 'none': return 'opacity-0 scale-95';
      default: return 'opacity-0 translate-y-12';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${getDirectionClass()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        width: width 
      }}
    >
      {children}
    </div>
  );
};
