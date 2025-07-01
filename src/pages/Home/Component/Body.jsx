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
  const [activeTab, setActiveTab] = useState('web');

  const processSteps = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Discovery",
      description: "Understanding your goals and vision"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Strategy",
      description: "Creating a tailored action plan"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Execution",
      description: "Bringing ideas to life"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Growth",
      description: "Scaling your success"
    }
  ];

  const clients = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateLab", logo: "IL" },
    { name: "FutureWorks", logo: "FW" },
    { name: "DigitalPro", logo: "DP" }
  ];

  return (
    <div className="bg-white">
      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Proven Process
            </h2>
            <p className="text-lg text-gray-600">
              We follow a systematic approach to ensure your success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all duration-300">
                  <div className="bg-indigo-50 text-indigo-600 p-3 rounded-xl inline-block mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full -translate-y-1/2 w-8 text-gray-300">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transform Your Digital Presence
              </h2>
              <p className="text-gray-400 mb-8">
                Leverage our expertise to grow your business and reach new heights in the digital landscape.
              </p>
              <button className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Watch Demo
                <PlayCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-gray-800 p-6 rounded-xl">
                  <div className="text-indigo-400 mb-4">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {["Smart Analytics", "24/7 Support", "Fast Performance", "Security First"][i]}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {["Track your success", "Always here to help", "Lightning fast results", "Enterprise-grade security"][i]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600">
              Join hundreds of satisfied clients who trust us with their digital success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all duration-300">
                <div className="aspect-video flex items-center justify-center text-2xl font-bold text-gray-300">
                  {client.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-700 rounded-3xl p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-indigo-200 mb-8">
                Join thousands of businesses that have already transformed their digital presence
              </p>
              <button className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;