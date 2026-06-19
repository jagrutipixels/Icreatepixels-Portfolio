import React, { useRef, useState } from 'react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  strength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  strength = 30, // Default magnetic pull strength
  className = '',
  ...props 
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    
    // Calculate distance from center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate translation based on strength
    const x = ((clientX - centerX) / width) * strength;
    const y = ((clientY - centerY) / height) * strength;
    
    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setPosition({ x: 0, y: 0 }); // Snap back cleanly
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex magnetic-btn ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isHovering 
          ? 'transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1)' // fast follow while hovering
          : 'transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)', // heavy snap back
      }}
      {...props}
    >
      {/* We can also add an inner element to translate differently if desired, but requirements specify the button itself translates */}
      {children}
    </button>
  );
};
