import React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  glassmorphism?: boolean;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ 
  className = "", 
  children, 
  glassmorphism = false,
  style 
}) => {
  const baseClasses = "rounded-2xl transition-all duration-300";
  const glassClasses = glassmorphism
    ? "bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl"
    : "bg-white shadow-xl hover:shadow-2xl border border-gray-100";

  return (
    <div 
      className={`${baseClasses} ${glassClasses} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;