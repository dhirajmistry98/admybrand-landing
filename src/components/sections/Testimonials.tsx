import React from "react";
import Card from "../ui/Card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content:
      "ADmyBRAND AI Suite transformed our marketing efficiency. We're generating 3x more leads with half the effort.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "StartupX",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content:
      "The AI-powered insights helped us identify new market opportunities we never knew existed.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Brand Manager",
    company: "Global Retail Co.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "Incredible ROI! Our campaign performance improved by 250% within the first month.",
    rating: 5
  }
];

const Testimonials = ({
  animatedElements,
  activeTestimonial,
  setActiveTestimonial
}) => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
    <div className="max-w-4xl mx-auto">
      <div
        id="testimonials-header"
        data-animate
        className={`text-center mb-16 transform transition-all duration-1000 ${
          animatedElements.has("testimonials-header")
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Loved by Marketing Teams
        </h2>
        <p className="text-xl text-white/70">
          See what our customers are saying about ADmyBRAND AI Suite
        </p>
      </div>
      <Card glassmorphism className="p-8 text-center">
        <div className="flex justify-center mb-4">
          {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
          ))}
        </div>
        <blockquote className="text-xl text-white/90 mb-8 leading-relaxed">
          "{testimonials[activeTestimonial].content}"
        </blockquote>
        <div className="flex items-center justify-center space-x-4">
          <img
            src={testimonials[activeTestimonial].image}
            alt={testimonials[activeTestimonial].name}
            className="w-16 h-16 rounded-full"
          />
          <div className="text-left">
            <div className="text-white font-semibold">
              {testimonials[activeTestimonial].name}
            </div>
            <div className="text-white/70">
              {testimonials[activeTestimonial].role} at {" "}
              {testimonials[activeTestimonial].company}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial ? "bg-purple-400" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </Card>
    </div>
  </section>
);

export default Testimonials;
