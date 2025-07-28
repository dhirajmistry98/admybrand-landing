import React from "react";

const Card = ({ className = "", children, glassmorphism = false }) => {
  const baseClasses = "rounded-2xl transition-all duration-300";
  const glassClasses = glassmorphism
    ? "bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl"
    : "bg-white shadow-xl hover:shadow-2xl border border-gray-100";
  return (
    <div className={`${baseClasses} ${glassClasses} ${className}`}>{children}</div>
  );
};

export default Card;
