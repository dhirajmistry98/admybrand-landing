import React from "react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

interface TestimonialsProps {
  animatedElements: Set<unknown>;
  activeTestimonial: number;
  setActiveTestimonial: React.Dispatch<React.SetStateAction<number>>;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    content: "ADmyBRAND AI Suite transformed our marketing efficiency. We're generating 3x more leads with half the effort.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "StartupX",
    content: "The AI-powered insights helped us identify new market opportunities we never knew existed.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Brand Manager",
    company: "Global Retail Co.",
    content: "Incredible ROI! Our campaign performance improved by 250% within the first month.",
    rating: 5
  }
];

const Testimonials: React.FC<TestimonialsProps> = ({
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
      <div className="p-8 text-center bg-white/10 rounded-2xl shadow-2xl">
        <div className="flex justify-center mb-4">
          {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
            <span key={i} className="inline-block w-6 h-6 text-yellow-400">★</span>
          ))}
        </div>
        <blockquote className="text-xl text-white/90 mb-8 leading-relaxed">
          &ldquo;{testimonials[activeTestimonial].content}&rdquo;
        </blockquote>
        <div className="text-center">
          <div className="text-white font-semibold text-lg">
            {testimonials[activeTestimonial].name}
          </div>
          <div className="text-white/70 mt-1">
            {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
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
      </div>
    </div>
  </section>
);

export default Testimonials;