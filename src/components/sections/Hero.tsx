import React, { useState } from "react";
import { ArrowRight, Play, BarChart3, Target, Zap, TrendingUp, Users, Mail, Globe, Star, X } from "lucide-react";

const Badge = ({ children }) => (
  <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm border border-white/20">
    {children}
  </span>
);

const Button = ({ children, variant = "primary", size = "md", onClick, className = "" }) => {
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

const AnimatedDashboard = () => (
  <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto border border-white/10">
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
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
          <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-5 h-5 text-purple-400" />
              <span className="text-green-400 text-xs font-medium">{stat.change}</span>
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
            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
            <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
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

const FeatureGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    {[
      { icon: Zap, title: "AI Content Generation", desc: "Create compelling copy in seconds" },
      { icon: Target, title: "Smart Targeting", desc: "Reach the right audience automatically" },
      { icon: BarChart3, title: "Real-time Analytics", desc: "Track performance with precision" },
      { icon: Globe, title: "Multi-channel Campaigns", desc: "Coordinate across all platforms" },
      { icon: Users, title: "Audience Insights", desc: "Understand your customers deeply" },
      { icon: Star, title: "AI Optimization", desc: "Continuously improve results" }
    ].map((feature, index) => (
      <div
        key={index}
        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
      >
        <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
        <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-white/70">{feature.desc}</p>
      </div>
    ))}
  </div>
);

const FloatingElements = () => (
  <div className="relative max-w-5xl mx-auto h-96 overflow-hidden rounded-2xl">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-white/10 rounded-2xl"></div>

    <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
      <div className="flex items-center space-x-2">
        <TrendingUp className="w-5 h-5 text-green-400" />
        <span className="text-white text-sm font-medium">+127% ROI</span>
      </div>
    </div>

    <div className="absolute top-20 right-12 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
      <div className="flex items-center space-x-2">
        <Users className="w-5 h-5 text-blue-400" />
        <span className="text-white text-sm font-medium">2.4k Leads</span>
      </div>
    </div>

    <div className="absolute bottom-16 left-16 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}>
      <div className="flex items-center space-x-2">
        <Target className="w-5 h-5 text-purple-400" />
        <span className="text-white text-sm font-medium">98% Accuracy</span>
      </div>
    </div>

    <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
      <div className="flex items-center space-x-2">
        <Zap className="w-5 h-5 text-yellow-400" />
        <span className="text-white text-sm font-medium">Auto Optimize</span>
      </div>
    </div>

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-8">
        <BarChart3 className="w-16 h-16 text-white" />
      </div>
    </div>
  </div>
);

const HeroAlternatives = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [selectedOption, setSelectedOption] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge>🚀 Now with GPT-4 Integration</Badge>
          <h1 className="mt-8 text-5xl md:text-7xl font-bold text-white leading-tight">
            AI-Powered Marketing
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}That Converts
            </span>
          </h1>
          <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Transform your marketing strategy with our AI suite. Generate compelling campaigns,
            optimize performance, and scale your brand with intelligent automation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" size="lg" onClick={() => setShowDemo(true)}>
              <Play className="mr-2 w-5 h-5" /> Watch Demo
            </Button>
          </div>

          <div className="mt-12 flex justify-center space-x-4">
            {['dashboard', 'features', 'floating'].map((option) => (
              <button
                key={option}
                onClick={() => setSelectedOption(option)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedOption === option
                    ? 'bg-white/20 text-white'
                    : 'bg-white/5 text-white/60 hover:text-white'
                }`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>

          <div className="mt-16">
            {selectedOption === 'dashboard' && <AnimatedDashboard />}
            {selectedOption === 'features' && <FeatureGrid />}
            {selectedOption === 'floating' && <FloatingElements />}
          </div>
        </div>
      </section>

      {showDemo && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowDemo(false)}
        >
          <div
            className="bg-white rounded-xl p-6 w-full max-w-md mx-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDemo(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Demo Coming Soon!</h2>
            <p className="text-gray-700">We're working on adding a full demo walkthrough. Stay tuned!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroAlternatives;
