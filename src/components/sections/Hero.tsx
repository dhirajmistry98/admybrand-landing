"use client";
import React, { useState } from "react";
import { ArrowRight, Play, BarChart3, Target, Zap, TrendingUp, Users, Mail, Globe, Star, X } from "lucide-react";

interface BadgeProps {
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children }) => (
  <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm border border-white/20">
    {children}
  </span>
);

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", size = "md", onClick, className = "" }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 hover:scale-105";
  const variants = {
    primary: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg",
    secondary: "bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20"
  };
  const sizes = {
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const AnimatedDashboard: React.FC = () => (
  <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto border border-white/10">
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="text-white/60 text-sm">AI Marketing Dashboard</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { icon: TrendingUp, label: "Conversion Rate", value: "24.5%", change: "+12%" },
          { icon: Users, label: "Leads Generated", value: "1,247", change: "+8%" },
          { icon: Mail, label: "Email Open Rate", value: "68.2%", change: "+15%" },
          { icon: Target, label: "ROI", value: "340%", change: "+22%" }
        ].map((stat, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-5 h-5 text-purple-400" />
              <span className="text-green-400 text-xs font-medium animate-pulse">{stat.change}</span>
            </div>
            <div className="text-white text-2xl font-bold">{stat.value}</div>
            <div className="text-white/60 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white/5 rounded-lg p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white text-lg font-semibold">Campaign Performance</h3>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>
        <div className="relative h-32">
          <svg className="w-full h-full" viewBox="0 0 400 128">
            <path
              d="M 0 100 Q 50 80 100 60 T 200 40 T 300 20 T 400 10"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  </div>
);

const FeatureGrid: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {[
      { icon: Zap, title: "AI Content Generation", desc: "Create compelling copy in seconds", color: "text-yellow-400" },
      { icon: Target, title: "Smart Targeting", desc: "Reach the right audience automatically", color: "text-purple-400" },
      { icon: BarChart3, title: "Real-time Analytics", desc: "Track performance with precision", color: "text-blue-400" },
      { icon: Globe, title: "Multi-channel Campaigns", desc: "Coordinate across all platforms", color: "text-green-400" },
      { icon: Users, title: "Audience Insights", desc: "Understand your customers deeply", color: "text-pink-400" },
      { icon: Star, title: "AI Optimization", desc: "Continuously improve results", color: "text-cyan-400" }
    ].map((feature, index) => (
      <div
        key={index}
        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
      >
        <feature.icon className={`w-12 h-12 ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
        <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-white/70">{feature.desc}</p>
      </div>
    ))}
  </div>
);

const FloatingElements: React.FC = () => (
  <div className="relative max-w-5xl mx-auto h-96 overflow-hidden rounded-2xl">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-white/10 rounded-2xl"></div>

    <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-bounce hover:animate-none hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: '0s', animationDuration: '3s' }}>
      <div className="flex items-center space-x-2">
        <TrendingUp className="w-5 h-5 text-green-400" />
        <span className="text-white text-sm font-medium">+127% ROI</span>
      </div>
    </div>

    <div className="absolute top-20 right-12 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-bounce hover:animate-none hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: '1s', animationDuration: '3s' }}>
      <div className="flex items-center space-x-2">
        <Users className="w-5 h-5 text-blue-400" />
        <span className="text-white text-sm font-medium">2.4k Leads</span>
      </div>
    </div>

    <div className="absolute bottom-16 left-16 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-bounce hover:animate-none hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: '2s', animationDuration: '3s' }}>
      <div className="flex items-center space-x-2">
        <Target className="w-5 h-5 text-purple-400" />
        <span className="text-white text-sm font-medium">98% Accuracy</span>
      </div>
    </div>

    <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-bounce hover:animate-none hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
      <div className="flex items-center space-x-2">
        <Zap className="w-5 h-5 text-yellow-400" />
        <span className="text-white text-sm font-medium">Auto Optimize</span>
      </div>
    </div>

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-8 animate-pulse hover:scale-110 transition-transform cursor-pointer">
        <BarChart3 className="w-16 h-16 text-white" />
      </div>
    </div>
  </div>
);

// Updated interface to accept the props that are being passed
interface HeroAlternativesProps {
  animatedElements: Set<string>;
  setShowDemo?: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeroAlternatives: React.FC<HeroAlternativesProps> = ({ animatedElements, setShowDemo: externalSetShowDemo }) => {
  const [showDemo, setShowDemo] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('dashboard');

  // Use external setShowDemo if provided, otherwise use internal state
  const handleShowDemo = (value: boolean) => {
    if (externalSetShowDemo) {
      externalSetShowDemo(value);
    } else {
      setShowDemo(value);
    }
  };

  const demoVisible = externalSetShowDemo ? false : showDemo; // If external control, don't show internal modal

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge>🚀 Now with GPT-4 Integration</Badge>
          <h1 className="mt-8 text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in-up">
            AI-Powered Marketing
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              {" "}That Converts
            </span>
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Transform your marketing strategy with our AI suite. Generate compelling campaigns,
            optimize performance, and scale your brand with intelligent automation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button size="lg" className="group">
              Start Free Trial 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg" onClick={() => handleShowDemo(true)} className="group">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" /> 
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 flex justify-center space-x-4 animate-fade-in-up animation-delay-600">
            {['dashboard', 'features', 'floating'].map((option) => (
              <button
                key={option}
                onClick={() => setSelectedOption(option)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                  selectedOption === option
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>

          <div className="mt-16 animate-fade-in-up animation-delay-800">
            {selectedOption === 'dashboard' && <AnimatedDashboard />}
            {selectedOption === 'features' && <FeatureGrid />}
            {selectedOption === 'floating' && <FloatingElements />}
          </div>
        </div>
      </section>

      {demoVisible && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
          onClick={() => handleShowDemo(false)}
        >
          <div
            className="bg-white rounded-xl p-6 w-full max-w-md mx-auto relative transform animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => handleShowDemo(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors hover:scale-110"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Demo Coming Soon!</h2>
            <p className="text-gray-700">We&apos;re working on adding a full demo walkthrough. Stay tuned!</p>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .animation-delay-800 {
          animation-delay: 800ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default HeroAlternatives;