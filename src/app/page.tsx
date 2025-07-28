"use client";
import React, { useState, useEffect } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Modal from "../components/ui/Modal";

import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import { Play } from "lucide-react";

const testimonialsCount = 3; // update if testimonials list changes

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const animatedElements = useScrollAnimation();

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialsCount);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header onMenuOpen={() => setIsMenuOpen(!isMenuOpen)} />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#features" className="text-2xl text-white" onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            <a href="#pricing" className="text-2xl text-white" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </a>
            <a href="#about" className="text-2xl text-white" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            {/* You can reuse your Button component if you want */}
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-lg">
              Get Started
            </button>
          </div>
        </div>
      )}

      <Hero animatedElements={animatedElements} setShowDemo={setShowDemo} />
      <Features animatedElements={animatedElements} />
      <Pricing animatedElements={animatedElements} />
      <Testimonials
        animatedElements={animatedElements}
        activeTestimonial={activeTestimonial}
        setActiveTestimonial={setActiveTestimonial}
      />
      <FAQ
        animatedElements={animatedElements}
        expandedFAQ={expandedFAQ}
        setExpandedFAQ={setExpandedFAQ}
      />
      <Footer />

      {/* Demo Modal */}
      <Modal isOpen={showDemo} onClose={() => setShowDemo(false)} title="Product Demo">
        <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
          <Play className="w-16 h-16 text-gray-400" />
        </div>
        <p className="text-gray-600 mb-4">
          Watch how ADmyBRAND AI Suite can transform your marketing strategy in just 5 minutes.
        </p>
        <div className="flex space-x-3">
          <button className="px-4 py-2 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 text-white">
            Watch Now
          </button>
          <button
            className="px-4 py-2 rounded-xl text-gray-700 border"
            onClick={() => setShowDemo(false)}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;
