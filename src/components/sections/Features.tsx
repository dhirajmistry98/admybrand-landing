// src/components/sections/Features.tsx
import React from "react";
import Card from "../ui/Card";
import {
  Brain,
  BarChart3,
  Zap,
  Users,
  Sparkles,
  Shield,
} from "lucide-react";

interface FeaturesProps {
  animatedElements: Set<string>;
}

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Content Generation",
    description:
      "Create compelling ad copy, social media posts, and marketing materials with advanced AI algorithms.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Performance Analytics",
    description:
      "Track campaign performance with real-time insights and predictive analytics.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Automated Campaigns",
    description:
      "Set up and optimize marketing campaigns that run themselves with AI automation.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Audience Targeting",
    description:
      "Identify and reach your perfect customers with precision AI-powered targeting.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Creative Optimization",
    description:
      "A/B test and optimize your creative assets automatically for maximum impact.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Brand Safety",
    description:
      "Ensure brand consistency and safety across all marketing channels with AI monitoring.",
  },
];

const Features: React.FC<FeaturesProps> = ({ animatedElements }) => (
  <section
    id="features"
    className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm"
  >
    <div className="max-w-7xl mx-auto">
      <div
        id="features-header"
        data-animate
        className={`text-center mb-16 transform transition-all duration-1000 delay-200 ${
          animatedElements.has("features-header")
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Powerful Features for Modern Marketers
        </h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Everything you need to create, optimize, and scale your marketing campaigns with AI
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            glassmorphism
            className={`p-8 hover:scale-105 transform transition-all duration-500 delay-${index * 100} ${
              animatedElements.has("features-header")
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-purple-400 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-white/70">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
