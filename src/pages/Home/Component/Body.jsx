import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Shield, 
  Globe, 
  ArrowRight, 
  ChevronRight,
  PlayCircle,
  MessageSquare,
  Sparkles,
  TrendingUp,
  Target,
  Users,
  Award
} from 'lucide-react';

const Body = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const points = [
    {
      title: "Creative & Data-Driven",
      desc: "We mix creativity with analytics so every post and ad connects and converts like magic.",
      icon: <Sparkles className="w-8 h-8" />,
      gradient: "from-yellow-400 via-orange-400 to-red-400",
      bgGradient: "from-yellow-400/10 to-orange-400/5",
      borderGlow: "yellow-400/30",
      stats: "95% conversion boost"
    },
    {
      title: "Full-Service Marketing",
      desc: "From social media to web development, we handle everything so you can focus on growth.",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-yellow-400 via-green-400 to-emerald-400",
      bgGradient: "from-yellow-400/10 to-green-400/5",
      borderGlow: "green-400/30",
      stats: "All-in-one solution"
    },
    {
      title: "Results That Matter",
      desc: "We aim for real leads and sales, not just likes and follows. Your ROI is our priority.",
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: "from-yellow-400 via-blue-400 to-purple-400",
      bgGradient: "from-yellow-400/10 to-blue-400/5",
      borderGlow: "blue-400/30",
      stats: "3x revenue growth"
    },
    {
      title: "Tailored Strategies",
      desc: "Your business is unique — our strategies are built to match your specific goals.",
      icon: <Target className="w-8 h-8" />,
      gradient: "from-yellow-400 via-pink-400 to-purple-400",
      bgGradient: "from-yellow-400/10 to-pink-400/5",
      borderGlow: "pink-400/30",
      stats: "100% customized"
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-300/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-yellow-400/3 to-transparent rounded-full"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + (i * 0.3)}s`
            }}
          >
            <div className="w-3 h-3 bg-yellow-400/20 rounded transform rotate-45"></div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div 
          className="text-center mb-20 transform transition-all duration-1000"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium mb-6 animate-pulse">
            <Award className="w-4 h-4 mr-2" />
            Industry-leading expertise
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              MindClick
            </span>
            <span className="block text-3xl md:text-4xl mt-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-light">
              for Your Success
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your growth is our mission — here's what makes us the partner you've been looking for.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {points.map((point, i) => (
            <div
              key={i}
              className="group relative"
              onMouseEnter={() => setHoveredPoint(i)}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              {/* Card */}
              <div className={`
                relative h-full bg-gradient-to-br ${point.bgGradient} backdrop-blur-lg 
                border border-white/10 rounded-3xl p-8 
                transform transition-all duration-500 hover:scale-105 hover:-translate-y-6
                ${hoveredPoint === i ? 'shadow-2xl shadow-yellow-400/20' : 'shadow-lg shadow-black/20'}
              `}>
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className={`
                    w-16 h-16 bg-gradient-to-r ${point.gradient} rounded-2xl 
                    flex items-center justify-center text-white mb-4 mx-auto
                    transform transition-all duration-300 group-hover:rotate-6 group-hover:scale-110
                    shadow-lg
                  `}>
                    {point.icon}
                  </div>
                  
                  {/* Animated ring */}
                  <div className={`
                    absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 
                    border-2 border-yellow-400/50 rounded-2xl
                    ${hoveredPoint === i ? 'animate-ping' : 'opacity-0'}
                  `}></div>
                </div>

                {/* Stats Badge */}
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 bg-yellow-400/20 border border-yellow-400/30 rounded-full text-yellow-400 text-xs font-semibold">
                    {point.stats}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors text-center">
                  {point.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-center mb-6">
                  {point.desc}
                </p>

               

                {/* Hover Glow Effect */}
                <div className={`
                  absolute inset-0 rounded-3xl border-2 border-yellow-400/50 opacity-0 
                  transform scale-95 transition-all duration-300 pointer-events-none
                  ${hoveredPoint === i ? 'opacity-100 scale-100' : ''}
                `}></div>

                {/* Corner Accent */}
                <div className={`
                  absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${point.gradient} rounded-full
                  transform transition-all duration-300 
                  ${hoveredPoint === i ? 'scale-100 rotate-180' : 'scale-0'}
                `}></div>
              </div>

              {/* Floating number */}
              <div className={`
                absolute -top-3 -left-3 w-8 h-8 bg-yellow-400 rounded-full 
                flex items-center justify-center text-black font-bold text-sm
                transform transition-all duration-300 z-10
                ${hoveredPoint === i ? 'scale-110 rotate-12' : 'scale-100'}
              `}>
                {i + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(-5px) rotate(-5deg); }
          75% { transform: translateY(-15px) rotate(3deg); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Body;