import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, User, Sparkles, BookOpen, TrendingUp, Eye, Clock } from 'lucide-react';

const knowledgeItems = [
  {
    id: 1,
    title: "Boost Your Social Media Reach",
    snippet: "Learn how consistent posting, the right hashtags, and engaging visuals can increase your organic audience growth by 300%.",
    author: "Suminda Bandara",
    date: "Aug 5, 2025",
    img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    category: "Social Media",
    readTime: "5 min read",
    views: "2.4K views",
    icon: <TrendingUp className="w-5 h-5" />,
    gradient: "from-yellow-400 via-orange-400 to-red-400"
  },
  {
    id: 2,
    title: "Use Colors That Convert",
    snippet: "Discover why colors like yellow (#fed600) catch attention and how to use them strategically in your marketing to boost conversions.",
    author: "MindClick Team",
    date: "July 30, 2025",
    img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop",
    category: "Design",
    readTime: "7 min read",
    views: "3.1K views",
    icon: <Eye className="w-5 h-5" />,
    gradient: "from-yellow-400 via-pink-400 to-purple-400"
  },
  {
    id: 3,
    title: "Know Your Audience",
    snippet: "Understanding your customers' preferences is the key to tailoring content that truly connects and converts at higher rates.",
    author: "Suminda Bandara",
    date: "July 25, 2025",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Strategy",
    readTime: "6 min read",
    views: "1.8K views",
    icon: <BookOpen className="w-5 h-5" />,
    gradient: "from-yellow-400 via-green-400 to-blue-400"
  },
];

export default function KnowledgePreview() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mock Link component since we don't have react-router-dom
  const Link = ({ to, children, className, ...props }) => (
    <a href={to} className={className} {...props}>
      {children}
    </a>
  );

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-32 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-yellow-300/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-yellow-400/3 to-transparent rounded-full"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header Section */}
        <div 
          className="mb-20 transform transition-all duration-1000"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium mb-6 animate-bounce">
            <Sparkles className="w-4 h-4 mr-2" />
            Free knowledge, premium results
          </div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              MindClick
            </span>
            <span className="block text-3xl md:text-4xl mt-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-light">
              Knowledge Hub Preview
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Get quick, actionable marketing tips to start growing your business today.  
            Dive deeper with our full library of expert articles and guides.
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center items-center space-x-8 text-gray-400 text-sm">
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2 text-yellow-400" />
              <span>50+ Articles</span>
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2 text-yellow-400" />
              <span>Expert Authors</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-2 text-yellow-400" />
              <span>Updated Weekly</span>
            </div>
          </div>
        </div>

        {/* Knowledge Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {knowledgeItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`
                relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden
                transform transition-all duration-500 hover:scale-105 hover:-translate-y-6
                ${hoveredCard === index ? 'shadow-2xl shadow-yellow-400/20' : 'shadow-lg shadow-black/20'}
              `}>
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover transform transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center bg-yellow-400/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-black text-sm font-semibold">
                      {item.icon}
                      <span className="ml-1.5">{item.category}</span>
                    </div>
                  </div>

                  {/* Floating Read Time */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-sm font-medium border border-white/20">
                      {item.readTime}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  
                  {/* Snippet */}
                  <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                    {item.snippet}
                  </p>

                  {/* Views */}
                  <div className="flex items-center text-gray-400 text-sm mb-6">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>{item.views}</span>
                  </div>

                  {/* Read More Button */}
                  <Link
                    to={"/education"}
                    className={`
                      group/btn w-full flex items-center justify-center px-6 py-3 
                      bg-gradient-to-r ${item.gradient} rounded-xl
                      text-white font-semibold transform transition-all duration-300
                      hover:shadow-lg hover:shadow-yellow-400/25
                      ${hoveredCard === index ? 'translate-y-0' : 'translate-y-2'}
                    `}
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>

                {/* Hover Glow Effect */}
                <div className={`
                  absolute inset-0 rounded-3xl border-2 border-yellow-400/50 opacity-0 
                  transform scale-95 transition-all duration-300 pointer-events-none
                  ${hoveredCard === index ? 'opacity-100 scale-100' : ''}
                `}></div>

                {/* Corner Accent */}
                <div className={`
                  absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full
                  transform transition-all duration-300 
                  ${hoveredCard === index ? 'scale-100 rotate-180' : 'scale-0'}
                `}></div>
              </div>

              {/* Article Number */}
              <div className={`
                absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r ${item.gradient} rounded-full 
                flex items-center justify-center text-white font-bold text-sm z-10
                transform transition-all duration-300
                ${hoveredCard === index ? 'scale-110 rotate-12' : 'scale-100'}
              `}>
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-yellow-500/10 rounded-3xl blur-xl"></div>
          
          <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl shadow-lg shadow-yellow-400/25">
                <BookOpen className="w-8 h-8 text-black" />
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for More Insights?
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore our complete library of marketing strategies, tips, and guides designed to accelerate your business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/education"
                className="group px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl text-black font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25 flex items-center"
              >
                Explore All Articles & Tips
                <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
              </Link>
              
              <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-semibold text-lg transform transition-all duration-300 hover:bg-white/20 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Weekly Newsletter
              </button>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">100%</div>
                <div className="text-gray-400 text-sm">Free Content</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">5 min</div>
                <div className="text-gray-400 text-sm">Quick Reads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">Weekly</div>
                <div className="text-gray-400 text-sm">New Articles</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for line clamping */}
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}