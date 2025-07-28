import React from "react";
import Button from "../ui/Button";
import { Sparkles, Menu } from "lucide-react";

const Header = ({ onMenuOpen }) => (
  <nav className="fixed w-full z-40 bg-white/10 backdrop-blur-lg border-b border-white/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">ADmyBRAND</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-white/80 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">
            About
          </a>
          <Button variant="secondary" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
        <button className="md:hidden text-white" onClick={onMenuOpen}>
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </div>
  </nav>
);

export default Header;
