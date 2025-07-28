import React from "react";
import Card from "../ui/Card";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does the AI content generation work?",
    answer:
      "Our AI analyzes your brand voice, target audience, and campaign objectives to generate personalized content that resonates with your customers. It uses advanced natural language processing to maintain consistency with your brand identity."
  },
  {
    question: "Can I integrate with my existing marketing tools?",
    answer:
      "Yes! ADmyBRAND AI Suite integrates with over 50+ popular marketing platforms including Google Ads, Facebook Ads, HubSpot, Salesforce, and more. Our API allows for custom integrations as well."
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide 24/7 customer support via chat, email, and phone. Professional and Enterprise plans include priority support with dedicated account managers and onboarding assistance."
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption, comply with GDPR and CCPA regulations, and never share your data with third parties. Your campaigns and customer data remain completely private."
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. We offer a 30-day money-back guarantee for all new customers, and there are no long-term contracts required."
  }
];

const FAQ = ({
  animatedElements,
  expandedFAQ,
  setExpandedFAQ
}) => (
  <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <div
        id="faq-header"
        data-animate
        className={`text-center mb-16 transform transition-all duration-1000 ${
          animatedElements.has("faq-header")
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-white/70">
          Everything you need to know about ADmyBRAND AI Suite
        </p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card
            key={index}
            glassmorphism
            className={`overflow-hidden transition-all duration-500 ${
              animatedElements.has("faq-header")
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <button
              onClick={() =>
                setExpandedFAQ(expandedFAQ === index ? null : index)
              }
              className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <span className="text-lg font-semibold text-white">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-white/70 transition-transform duration-300 ${
                  expandedFAQ === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`px-6 overflow-hidden transition-all duration-300 ${
                expandedFAQ === index ? "pb-6 max-h-96" : "max-h-0"
              }`}
            >
              <p className="text-white/80 leading-relaxed">{faq.answer}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default FAQ;
