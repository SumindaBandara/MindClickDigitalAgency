import { useState, useEffect } from "react";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Lightbulb, 
  Code, 
  ShoppingCart, 
  BarChart3, 
  Megaphone,
  Globe,
  Zap,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function AboutPage() {
  const [visibleCards, setVisibleCards] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards({ marketing: true });
      setTimeout(() => setVisibleCards(prev => ({ ...prev, software: true })), 200);
      setTimeout(() => setVisibleCards(prev => ({ ...prev, approach: true })), 400);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const marketingServices = [
    {
      icon: Megaphone,
      title: "Social Media Marketing",
      description: "Engaging, conversion-focused content for Instagram, Facebook, LinkedIn, and more.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Target,
      title: "Meta Ad Campaigns", 
      description: "Smart ad targeting that gets you real results, not just clicks.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Globe,
      title: "Business Page Setup & Optimization",
      description: "From profile creation to brand consistency, we make your business look professional online.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Audience Analysis & Strategy",
      description: "Understanding your market so every move you make hits the mark.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Users,
      title: "1-to-1 Marketing Coaching",
      description: "Practical training to help you or your team master the digital space.",
      color: "from-orange-500 to-amber-500"
    }
  ];

  const softwareServices = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Modern, responsive, and high-performing websites that reflect your brand and convert visitors into customers.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "From online stores to payment integrations, we create seamless shopping experiences.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Zap,
      title: "Web Applications",
      description: "Tailor-made tools to improve your operations, from booking systems to management dashboards.",
      color: "from-violet-500 to-purple-500"
    }
  ];

  const values = [
    { icon: Lightbulb, title: "Creativity", description: "Innovative solutions that make you stand out" },
    { icon: BarChart3, title: "Data-Driven", description: "Every decision backed by analytics and insights" },
    { icon: Code, title: "Technology", description: "Cutting-edge tools and modern approaches" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animation: `float ${8 + Math.random() * 8}s infinite linear`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="text-white">About </span>
              <span 
                className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent"
                style={{ color: '#ffd600' }}
              >
                Mindclick
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mb-8"></div>
          </div>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            We're more than just a digital marketing agency — we're your <span className="text-yellow-400 font-semibold">growth partner</span> in the online world.
          </p>

          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 max-w-5xl mx-auto border border-white/10">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              To help businesses <span className="text-yellow-400 font-semibold">stand out</span>, 
              <span className="text-yellow-400 font-semibold"> connect with the right audience</span>, and 
              <span className="text-yellow-400 font-semibold"> grow faster</span> using a mix of creative marketing strategies and cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Marketing Services Section */}
        <div className={`mb-20 transition-all duration-1000 ${visibleCards.marketing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Digital Marketing <span className="text-yellow-400">Excellence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in strategies that don't just get attention — they get results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {marketingServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  <div className="mt-4 flex items-center text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Software Solutions Section */}
        <div className={`mb-20 transition-all duration-1000 ${visibleCards.software ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-yellow-400/20 rounded-full mb-6">
              <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Now Expanded</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Software <span className="text-yellow-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powering your business with custom technology solutions that work as hard as you do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {softwareServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{service.description}</p>
                  <div className="mt-6 flex items-center text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-medium">Explore Solutions</span>
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Approach Section */}
        <div className={`mb-20 transition-all duration-1000 ${visibleCards.approach ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-yellow-400/10 to-amber-500/10 backdrop-blur-xl rounded-3xl p-12 border border-yellow-400/20 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                The <span className="text-yellow-400">Mindclick</span> Way
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine three core elements to make your business not just visible — but unforgettable.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="text-center group"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-12 h-12 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center space-x-2 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors cursor-pointer">
                <CheckCircle className="w-6 h-6" />
                <span>Ready to Transform Your Business?</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-12 border border-white/10 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Let's Build Something <span className="text-yellow-400">Amazing</span> Together
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you need marketing that converts or technology that transforms, we're here to make it happen.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-4 px-8 rounded-xl hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold py-4 px-8 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300">
                Schedule a Call
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(-5px) rotate(240deg); }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}