import React, { useState } from 'react';
import { 
  Zap, 
  Shield, 
  Globe, 
  ArrowRight, 
  ChevronRight,
  PlayCircle,
  MessageSquare,
  Sparkles
} from 'lucide-react';

const Body = () => {
  const points = [
    {
      title: "Creative & Data-Driven",
      desc: "We mix creativity with analytics so every post and ad connects and converts.",
      icon: "🎨",
    },
    {
      title: "Full-Service Marketing",
      desc: "From social media to web development, we handle everything so you can focus on growth.",
      icon: "🌐",
    },
    {
      title: "Results That Matter",
      desc: "We aim for real leads and sales, not just likes and follows.",
      icon: "📈",
    },
    {
      title: "Tailored Strategies",
      desc: "Your business is unique — our strategies are built to match.",
      icon: "🛠️",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose{" "}
            <span style={{ color: "#fed600" }}>MindClick</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your growth is our mission — here’s what makes us different.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg p-6 border-t-4"
              style={{ borderTopColor: i % 2 === 0 ? "#fed600" : "#3B82F6" }} // yellow or blue
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {point.title}
              </h3>
              <p className="text-gray-600">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="px-8 py-3 font-medium rounded-lg shadow-md transition"
            style={{
              background: "#fed600",
              color: "#000",
            }}
          >
            Let’s Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Body;