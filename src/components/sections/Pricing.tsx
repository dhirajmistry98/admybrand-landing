import React from "react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small businesses getting started",
    features: [
      "5 AI-generated campaigns/month",
      "Basic analytics",
      "Email support",
      "1 brand profile"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "Ideal for growing marketing teams",
    features: [
      "Unlimited AI campaigns",
      "Advanced analytics",
      "Priority support",
      "5 brand profiles",
      "A/B testing",
      "Custom integrations"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom AI training",
      "White-label options",
      "Advanced security",
      "SLA guarantee"
    ],
    popular: false
  }
];

const Pricing = ({ animatedElements }) => (
  <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div
        id="pricing-header"
        data-animate
        className={`text-center mb-16 transform transition-all duration-1000 ${
          animatedElements.has("pricing-header")
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Choose Your Plan
        </h2>
        <p className="text-xl text-white/70">Start free, then scale as you grow</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            glassmorphism={!plan.popular}
            className={`p-8 relative transform transition-all duration-500 hover:scale-105 ${
              plan.popular
                ? "bg-gradient-to-b from-purple-600/20 to-cyan-600/20 border-2 border-purple-400 scale-105"
                : ""
            } ${
              animatedElements.has("pricing-header")
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                Most Popular
              </Badge>
            )}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-white/70 mb-4">{plan.description}</p>
              <div className="text-4xl font-bold text-white">
                {plan.price}
                <span className="text-lg text-white/70">{plan.period}</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-white/80">
                  <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.popular ? "primary" : "secondary"}
              className="w-full"
              size="lg"
            >
              {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
