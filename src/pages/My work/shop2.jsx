import React, { useState } from 'react';
import { ChevronDown, TrendingUp, Users, Target, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const shop2 = () => {
  const [activeSection, setActiveSection] = useState(0);

  const config = {
    // BRANDING
    businessName: "ShoeLand",
    businessIcon: "👟",
    tagline: "Step Into Tomorrow",
    description: "Where innovation meets style. Experience the future of footwear with our cutting-edge collection.",
    
    // COLORS - Modern Brown/Amber theme
    primaryGradient: "from-amber-600 via-orange-600 to-amber-700",
    secondaryGradient: "from-amber-950 via-orange-950 to-stone-950",
    lightGradient: "from-amber-50 via-orange-50 to-yellow-50",
    accentColor: "amber-500",
    
    // HERO IMAGE (replace with your image URL)
    heroImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&h=800&fit=crop",
    
    // PRODUCT IMAGE (replace with your image URL)
    productImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop",
    
    // CTA BUTTONS
    primaryCTA: "Explore Collection",
    primaryCTALink: "#shop",
    secondaryCTA: "Learn More",
    
    // SERVICES/FEATURES
    services: [
      {
        icon: "⚡",
        title: "Innovation First",
        description: "Cutting-edge designs that push the boundaries of footwear technology"
      },
      {
        icon: "🎨",
        title: "Artistic Vision",
        description: "Each piece is a masterwork of form, function, and creative expression"
      },
      {
        icon: "🌍",
        title: "Sustainable",
        description: "Eco-conscious materials and ethical production processes"
      },
      {
        icon: "🚀",
        title: "Next-Gen Comfort",
        description: "Advanced ergonomics engineered for all-day performance"
      }
    ],
    
    // STATS/ACHIEVEMENTS
    stats: [
      { value: "50K+", label: "Global Community" },
      { value: "500+", label: "Unique Designs" },
      { value: "98%", label: "Satisfaction" },
      { value: "15Y", label: "Innovation" }
    ],
    
    // WHY CHOOSE US
    whyChooseUs: [
      {
        icon: "💎",
        title: "Premium Craftsmanship",
        description: "Meticulously crafted using the finest materials and techniques"
      },
      {
        icon: "🔬",
        title: "Tech-Infused",
        description: "Smart features and advanced materials for peak performance"
      },
      {
        icon: "🎯",
        title: "Perfect Fit Promise",
        description: "Advanced sizing technology ensures your ideal fit every time"
      },
      {
        icon: "✨",
        title: "Exclusive Drops",
        description: "Early access to limited editions and collaborative releases"
      }
    ],
    
    // CONTACT & SOCIAL
    phone: "+1 (555) 123-4567",
    email: "hello@shoeland.com",
    address: "123 Innovation Drive, Design District",
    website: "shoeland.com",
    
    socialLinks: [
      { platform: "Instagram", url: "#", icon: "IG" },
      { platform: "Twitter", url: "#", icon: "X" },
      { platform: "TikTok", url: "#", icon: "TT" }
    ]
  };

  // Portfolio links - REPLACE URLs with your actual portfolio page URLs
 const portfolioLinks = [
    {
      name: "Cafe",
      url: "/shop1", // REPLACE WITH YOUR URL
      icon: "🍽️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Shoe shop ",
      url: "/shop2", // REPLACE WITH YOUR URL
      icon: "👟",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Dental",
      url: "/shop3", // REPLACE WITH YOUR URL
      icon: "🦷",
      color: "from-orange-500 to-amber-500"
    }
  ];

  // Scroll to section
  const scrollToSection = (index) => {
    setActiveSection(index);
    const element = document.getElementById(`section-${index}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-white">
      {/* Portfolio Navigation Tabs - Now as first section, not fixed */}
      <div className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div className="max-w-4xl mx-auto px-6 text-center">

      {/* Button Group */}
      <div className="flex flex-wrap justify-center gap-5">
    {portfolioLinks.map((portfolio, index) => (
      <Link
        key={index}
        to={portfolio.url}  
        target="_blank"
        rel="noopener noreferrer"
        className={`px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r ${portfolio.color} text-white hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2`}
      >
        <span className="text-lg">{portfolio.icon}</span>
        {portfolio.name}
      </Link>
    ))}
  </div>

    </div>
  </div>

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === index 
                ? 'bg-purple-500 scale-150' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Section 1: Social Media Posts */}
      <section 
        id="section-0" 
        className="min-h-screen flex items-center justify-center p-8 snap-start"
        onMouseEnter={() => setActiveSection(0)}
      >
        <div className="max-w-7xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Social Media Excellence</h1>
            <p className="text-xl text-purple-200">Crafted designs that drive engagement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Social Post 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="h-95 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <img src="assets/4.png" alt="Post 1" className="w-full h-full object-cover" />
            </div>
            </div>

            {/* Social Post 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="h-95 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <img src="assets/5.png" alt="Post 1" className="w-full h-full object-cover" />
            </div>
            </div>

            {/* Social Post 3 */}
           <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="h-95 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <img src="assets/6.png" alt="Post 1" className="w-full h-full object-cover" />
            </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection(1)}
              className="animate-bounce text-white/70 hover:text-white transition-colors"
            >
              <ChevronDown size={40} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: Live Website Preview */}
      <section 
        id="section-1" 
        className="min-h-screen flex items-center justify-center p-8 snap-start"
        onMouseEnter={() => setActiveSection(1)}
      >
        <div className="max-w-7xl w-full">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">Website Design</h2>
            <p className="text-xl text-purple-200">Interactive homepage experience</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Browser Chrome */}
            <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 bg-gray-700 rounded px-4 py-1 text-gray-400 text-sm ml-4">
                https://clientwebsite.com
              </div>
            </div>

            {/* Scrollable Website Content */}
            <div className="overflow-y-auto" style={{ height: '600px' }}>
              {/* REPLACE THIS ENTIRE SECTION WITH YOUR CUSTOM COMPONENT */}
              {/* Example: <YourCustomHomePage /> */}
              
              {/* Demo Homepage - Replace this with your actual component */}
              <div className="h-[600px] overflow-y-auto bg-white">
          
          {/* Modern Glass Navbar */}
         <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
  {/* CHANGE 1: Responsive Padding (px-4 py-3 on mobile, larger on desktop) */}
  <div className="max-w-7xl mx-auto px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
    
    {/* CHANGE 2: Responsive Logo & Gap */}
    <div className="flex items-center gap-2 md:gap-3 group cursor-pointer">
      {/* Icon: smaller on mobile */}
      <div className="text-2xl md:text-3xl transform group-hover:scale-110 transition-transform">
        {config.businessIcon}
      </div>
      {/* Text: smaller on mobile */}
      <span className={`text-lg md:text-2xl font-black bg-gradient-to-r ${config.primaryGradient} bg-clip-text text-transparent`}>
        {config.businessName}
      </span>
    </div>
    
    {/* Desktop Links (Hidden on Mobile) */}
    <div className="hidden md:flex items-center gap-8">
      <a href="#home" className="text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors relative group">
        Home
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 group-hover:w-full transition-all"></span>
      </a>
      <a href="#about" className="text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors relative group">
        About
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 group-hover:w-full transition-all"></span>
      </a>
      <a href="#collection" className="text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors relative group">
        Collection
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 group-hover:w-full transition-all"></span>
      </a>
      <a href="#contact" className="text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors relative group">
        Contact
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-orange-600 group-hover:w-full transition-all"></span>
      </a>
    </div>
    
    {/* Right Side Actions */}
    <div className="flex items-center gap-3">
      {/* CTA Button: Smaller padding/text on mobile */}
      <a 
        href={config.primaryCTALink}
        className={`bg-gradient-to-r ${config.primaryGradient} text-white px-4 py-2 md:px-6 md:py-2.5 rounded-xl font-bold text-xs md:text-sm hover:shadow-xl hover:shadow-amber-500/50 transform hover:scale-105 transition-all`}
      >
        {config.primaryCTA}
      </a>

      {/* CHANGE 3: Hamburger Menu Icon (Visible ONLY on Mobile) */}
      <button className="md:hidden text-gray-700 hover:text-amber-600 transition-colors p-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>

  </div>
</nav>

          {/* Modern Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
              {/* Left Content */}
              <div className="text-white space-y-6 z-10">
                <div className="inline-block">
                  <span className="text-sm font-bold text-amber-400 uppercase tracking-wider px-4 py-2 bg-amber-500/20 rounded-full border border-amber-500/30">
                    New Collection 2024
                  </span>
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                  {config.tagline}
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  {config.description}
                </p>
                
                <div className="flex gap-4 pt-4">
                  <a 
                    href={config.primaryCTALink}
                    className={`bg-gradient-to-r ${config.primaryGradient} text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 transition-all`}
                  >
                    {config.primaryCTA}
                  </a>
                  <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all border border-white/20">
                    {config.secondaryCTA}
                  </button>
                </div>
              </div>
              
              {/* Right Product Showcase */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <img 
                    src={config.productImage}
                    alt="Featured Product"
                    className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Floating Stats Bar */}
         <section className="relative -mt-12 z-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className={`bg-gradient-to-r ${config.primaryGradient} rounded-2xl shadow-2xl p-6 md:p-8`}>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                  {config.stats.map((stat, idx) => (
                    <div key={idx} className="text-center text-white">
                      <div className="text-4xl font-black mb-1">{stat.value}</div>
                      <div className="text-sm font-medium opacity-90">{stat.label}</div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </section>

          {/* Services Section with Cards */}
          <section id="collection" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className={`text-sm font-bold text-amber-600 uppercase tracking-wider px-4 py-2 bg-gradient-to-r ${config.lightGradient} rounded-full`}>
                  What We Offer
                </span>
                <h2 className="text-5xl font-black text-gray-900 mt-6 mb-4">
                  Experience Excellence
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Discover what makes us the premier destination for modern footwear
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {config.services.map((service, idx) => (
                  <div 
                    key={idx}
                    className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-amber-300 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Hover Background Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${config.primaryGradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                    
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${config.primaryGradient} rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Feature Showcase */}
          <section className={`py-24 bg-gradient-to-br ${config.lightGradient}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <span className={`text-sm font-bold text-amber-600 uppercase tracking-wider px-4 py-2 bg-white rounded-full`}>
                    Innovation Meets Design
                  </span>
                  <h2 className="text-5xl font-black text-gray-900 mt-6 mb-6">
                    Crafted for<br/>Performance
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Every detail is engineered to perfection. From sustainable materials to cutting-edge comfort technology, we're redefining what footwear can be.
                  </p>
                  
                  <div className="space-y-4">
                    {config.whyChooseUs.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className={`w-12 h-12 bg-gradient-to-br ${config.primaryGradient} rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur-3xl opacity-20"></div>
                  <div className="relative">
                    <img 
                      src={config.heroImage}
                      alt="Showcase"
                      className="w-full h-auto rounded-3xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial with Modern Card */}
          <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-6">
              <div className={`bg-gradient-to-br ${config.secondaryGradient} text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-3xl opacity-20"></div>
                <div className="relative">
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-2xl font-medium mb-6 text-center leading-relaxed">
                    "Absolutely game-changing. The comfort, style, and quality are unmatched. These aren't just shoes—they're an experience."
                  </p>
                  <div className="text-center">
                    <p className="font-bold text-lg">Alex Rivera</p>
                    <p className="text-amber-300 text-sm">Professional Athlete</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Modern CTA Section */}
          <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-950 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative max-w-4xl mx-auto px-6">
              <h2 className="text-5xl font-black mb-6">Ready to Elevate Your Style?</h2>
              <p className="text-xl text-gray-300 mb-10">
                Join thousands who've already made the switch to premium footwear
              </p>
              <a 
                href={config.primaryCTALink}
                className={`inline-block bg-gradient-to-r ${config.primaryGradient} text-white px-12 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/50 transform hover:scale-105 transition-all`}
              >
                {config.primaryCTA}
              </a>
            </div>
          </section>

          {/* Modern Footer */}
          <footer id="contact" className="bg-gray-950 text-white py-16 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                {/* Brand */}
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{config.businessIcon}</span>
                    <span className={`text-2xl font-black bg-gradient-to-r ${config.primaryGradient} bg-clip-text text-transparent`}>
                      {config.businessName}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-6 max-w-sm">{config.description}</p>
                  <div className="flex gap-3">
                    {config.socialLinks.map((social, idx) => (
                      <a 
                        key={idx}
                        href={social.url}
                        className={`w-10 h-10 bg-gradient-to-br ${config.primaryGradient} rounded-xl flex items-center justify-center hover:scale-110 transition-transform text-xs font-bold`}
                        title={social.platform}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Contact */}
                <div>
                  <h4 className="text-lg font-bold mb-4">Contact</h4>
                  <div className="space-y-3 text-sm text-gray-400">
                    <p>{config.phone}</p>
                    <p>{config.email}</p>
                    <p>{config.address}</p>
                  </div>
                </div>
                
                {/* Links */}
                <div>
                  <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                  <div className="space-y-3 text-sm">
                    <a href="#home" className="block text-gray-400 hover:text-amber-500 transition-colors">Home</a>
                    <a href="#about" className="block text-gray-400 hover:text-amber-500 transition-colors">About</a>
                    <a href="#collection" className="block text-gray-400 hover:text-amber-500 transition-colors">Collection</a>
                    <a href="#contact" className="block text-gray-400 hover:text-amber-500 transition-colors">Contact</a>
                  </div>
                </div>
              </div>
              
              {/* Copyright */}
              <div className="border-t border-gray-900 pt-8 flex items-center justify-between text-sm text-gray-500">
                <p>&copy; 2024 {config.businessName}. All rights reserved.</p>
                <p>Designed with passion</p>
              </div>
            </div>
          </footer>
        </div>
      
              {/* End of demo homepage */}
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection(2)}
              className="animate-bounce text-white/70 hover:text-white transition-colors"
            >
              <ChevronDown size={40} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Marketing Strategy */}
      <section 
        id="section-2" 
        className="min-h-screen flex items-center justify-center p-8 snap-start"
        onMouseEnter={() => setActiveSection(2)}
      >
        <div className="max-w-7xl w-full">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">Marketing Strategy</h2>
            <p className="text-xl text-purple-200">Data-driven approach to success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Strategy Card 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white">Audience Targeting</h3>
              </div>
              <p className="text-purple-100 mb-4">
                We analyzed customer demographics and behavior patterns to identify high-value segments, resulting in 3x better conversion rates.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-purple-200">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Demographic analysis
                </li>
                <li className="flex items-center gap-2 text-purple-200">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Behavioral tracking
                </li>
                <li className="flex items-center gap-2 text-purple-200">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  Persona development
                </li>
              </ul>
            </div>

            {/* Strategy Card 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white">Growth Tactics</h3>
              </div>
              <p className="text-purple-100 mb-4">
                Implemented multi-channel campaigns with A/B testing to optimize performance and scale winning strategies.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-purple-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  A/B testing framework
                </li>
                <li className="flex items-center gap-2 text-purple-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Multi-channel strategy
                </li>
                <li className="flex items-center gap-2 text-purple-200">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Conversion optimization
                </li>
              </ul>
            </div>

            {/* Strategy Card 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white">Community Building</h3>
              </div>
              <p className="text-purple-100 mb-4">
                Fostered authentic engagement through consistent brand voice and value-driven content across all platforms.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-purple-200">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  Content calendar
                </li>
                <li className="flex items-center gap-2 text-purple-200">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  Engagement campaigns
                </li>
                <li className="flex items-center gap-2 text-purple-200">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  Brand consistency
                </li>
              </ul>
            </div>

            {/* Strategy Card 4 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white">Analytics & Insights</h3>
              </div>
              <p className="text-purple-100 mb-4">
                Continuous monitoring and data analysis enabled rapid iteration and informed decision-making for maximum ROI.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-purple-200">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Real-time tracking
                </li>
                <li className="flex items-center gap-2 text-purple-200">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Performance reports
                </li>
                <li className="flex items-center gap-2 text-purple-200">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  ROI optimization
                </li>
              </ul>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 md:p-12 text-center">
  
  {/* Heading: Smaller text on mobile (2xl), larger on desktop (3xl) */}
  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">
    Campaign Results
  </h3>
  
  {/* Grid: 1 column on mobile (stacked), 3 columns on desktop */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    <div>
      {/* Number: Smaller text on mobile (4xl), larger on desktop (5xl) */}
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">+350%</div>
      <div className="text-purple-100">Engagement Rate</div>
    </div>
    
    <div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">+220%</div>
      <div className="text-purple-100">Lead Generation</div>
    </div>
    
    <div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">+180%</div>
      <div className="text-purple-100">Conversion Rate</div>
    </div>
    
  </div>
</div>
        </div>
      </section>
    </div>
  );
};

export default shop2;