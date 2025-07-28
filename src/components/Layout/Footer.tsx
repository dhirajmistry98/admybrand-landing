import React from "react";
import { Sparkles, Twitter, Linkedin, Github, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">ADmyBRAND</span>
          </div>
          <p className="text-white/70 mb-6 max-w-md">
            Empowering marketers with AI-driven solutions to create, optimize, and scale their campaigns.
          </p>
          <div className="flex space-x-4">
            <Twitter className="w-6 h-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-6 h-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
            <Github className="w-6 h-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
            <Instagram className="w-6 h-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-white/70">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                API
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Integrations
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-white/70">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Status
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Community
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-white/60">
          © 2025 ADmyBRAND AI Suite. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
            Terms of Service
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
