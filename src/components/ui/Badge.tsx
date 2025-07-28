import React from "react";

const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-purple-100 text-purple-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
  };
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
