import React, { useState } from 'react';
import { 
  Code, 
  Layout,
  BarChart,
  Search,
  Smartphone,
  PenTool,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  DollarSign,
  Globe
} from 'lucide-react';

const DetailedServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      shortDesc: "Custom websites and web applications",
      overview: "End-to-end web development solutions tailored to your business needs",
      features: [
        "Responsive Design",
        "Custom CMS Integration",
        "E-commerce Solutions",
        "Progressive Web Apps"
      ],
      process: [
        "Requirements Analysis",
        "UI/UX Design",
        "Development",
        "Testing & Launch"
      ],
      pricing: [
        { name: "Basic Website", price: "$2,999" },
        { name: "E-commerce", price: "$4,999" },
        { name: "Custom Web App", price: "$8,999" }
      ],
      technologies: ["React", "Node.js", "Python", "PHP"],
      timeframe: "4-12 weeks",
      portfolio: [
        { name: "E-commerce Platform", result: "150% Revenue Increase" },
        { name: "Company Website", result: "90% User Satisfaction" }
      ]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      shortDesc: "Native and cross-platform apps",
      overview: "Powerful mobile applications that engage users and drive results",
      features: [
        "Native iOS Development",
        "Native Android Development",
        "Cross-platform Solutions",
        "Mobile UI/UX Design"
      ],
      process: [
        "Market Research",
        "Wireframing",
        "Development",
        "App Store Launch"
      ],
      pricing: [
        { name: "Basic App", price: "$5,999" },
        { name: "Advanced App", price: "$12,999" },
        { name: "Enterprise App", price: "$25,999" }
      ],
      technologies: ["React Native", "Swift", "Kotlin", "Flutter"],
      timeframe: "8-16 weeks",
      portfolio: [
        { name: "Fitness App", result: "1M+ Downloads" },
        { name: "Banking App", result: "4.8 Star Rating" }
      ]
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Digital Marketing",
      shortDesc: "Result-driven marketing strategies",
      overview: "Comprehensive digital marketing solutions to grow your business",
      features: [
        "SEO Optimization",
        "PPC Campaigns",
        "Social Media Marketing",
        "Content Strategy"
      ],
      process: [
        "Market Analysis",
        "Strategy Development",
        "Campaign Launch",
        "Performance Tracking"
      ],
      pricing: [
        { name: "Starter Package", price: "$999/mo" },
        { name: "Growth Package", price: "$2,499/mo" },
        { name: "Enterprise Package", price: "$4,999/mo" }
      ],
      technologies: ["Google Analytics", "SEMrush", "HubSpot", "Meta Ads"],
      timeframe: "Ongoing",
      portfolio: [
        { name: "E-commerce SEO", result: "200% Organic Traffic" },
        { name: "PPC Campaign", result: "350% ROI" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions to transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Service Selection */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`p-6 rounded-xl text-left transition-all ${
                  activeService === index 
                    ? 'bg-white shadow-lg ring-2 ring-indigo-500' 
                    : 'bg-white shadow hover:shadow-lg'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.shortDesc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Main Info */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600">
                      {services[activeService].icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {services[activeService].title}
                    </h2>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-6">
                    {services[activeService].overview}
                  </p>

                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {services[activeService].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-indigo-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process Timeline */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-6">Development Process</h3>
                  <div className="space-y-4">
                    {services[activeService].process.map((step, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>
                        <div className="flex-1 p-4 bg-gray-50 rounded-lg">
                          {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Portfolio Showcase */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Success Stories</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {services[activeService].portfolio.map((item, index) => (
                      <div key={index} className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
                        <div className="text-indigo-600 font-semibold">{item.result}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Pricing & Details */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="space-y-6">
                  {/* Pricing Plans */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Pricing Plans</h3>
                    <div className="space-y-4">
                      {services[activeService].pricing.map((plan, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg flex justify-between items-center">
                          <span className="text-gray-900">{plan.name}</span>
                          <span className="font-semibold text-indigo-600">{plan.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Facts */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-indigo-600" />
                        <span className="text-gray-700">Timeframe: {services[activeService].timeframe}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Globe className="w-5 h-5 text-indigo-600" />
                          <span className="text-gray-700">Technologies:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {services[activeService].technologies.map((tech, index) => (
                            <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailedServicesPage;