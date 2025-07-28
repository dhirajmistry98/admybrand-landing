import React from "react";

const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50";
  const variants = {
    primary:
      "bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white hover:shadow-2xl hover:shadow-purple-500/25 focus:ring-purple-500",
    secondary:
      "bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 focus:ring-white",
    outline:
      "border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white focus:ring-purple-500",
    ghost:
      "text-gray-600 hover:text-purple-600 hover:bg-purple-50 focus:ring-purple-500",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
