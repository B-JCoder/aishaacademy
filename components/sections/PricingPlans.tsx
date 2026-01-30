"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Crown, Star } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Online Group",
    price: "$50",
    period: "/month",
    description: "Perfect for interactive learning with peers.",
    features: [
      "Small groups (4-6 students)",
      "2 Classes per week",
      "Regular Progress Reports",
      "Access to Learning Materials",
      "Weekly Activity Sheets",
    ],
    popular: false,
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    name: "Private 1-on-1",
    price: "$120",
    period: "/month",
    description: "Dedicated attention for rapid progress.",
    features: [
      "Private One-on-One Sessions",
      "3 Classes per week",
      "Personalized Curriculum",
      "Flexible Timing",
      "Direct Teacher Access",
      "Hifz & Tajweed Focus",
    ],
    popular: true,
    gradient: "from-amber-400/20 to-orange-500/20",
    icon: <Crown className="w-6 h-6" />,
  },
  {
    name: "Weekend School",
    price: "$80",
    period: "/month",
    description: "Physical classes at our Montreal campus.",
    features: [
      "In-Person Instructions",
      "Saturday & Sunday (10am - 2pm)",
      "Islamic Studies & Quran",
      "Social Environment",
      "Physical Activities",
    ],
    popular: false,
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: <Star className="w-6 h-6" />,
  },
];

const PricingPlans = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Simple, Transparent{" "}
            <span className="text-accent italic">Pricing</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Choose the plan that fits your family's needs. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`
                relative p-8 rounded-3xl border backdrop-blur-xl flex flex-col h-full
                transition-all duration-300 shadow-[0_0_20px_#623F2F]
                ${
                  plan.popular
                    ? "bg-white/10 border-accent/50 scale-105 z-10"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-primary font-bold px-4 py-1 rounded-full text-sm shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div
                className={`
                w-12 h-12 rounded-2xl flex items-center justify-center mb-6
                bg-gradient-to-br ${plan.gradient} border border-white/10 text-white
              `}
              >
                {plan.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-400 text-sm mb-6 min-h-[40px]">
                {plan.description}
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-gray-400">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Action */}
              <Link
                href="/admissions"
                className={`
                  w-full py-4 rounded-xl font-bold text-center transition-all duration-300
                  ${
                    plan.popular
                      ? "bg-accent text-primary hover:bg-white"
                      : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                  }
                `}
              >
                Choose Plan
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
