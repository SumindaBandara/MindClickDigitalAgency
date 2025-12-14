import React, { useState } from 'react';
import { ChevronDown, TrendingUp, Users, Target, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const shop3 = () => {
  const [activeSection, setActiveSection] = useState(0);

  const config = {
    // BRANDING
    businessName: "Smile Care Clinic",
    businessIcon: "🦷",
    tagline: "Brighten Your Smile Today",
    description: "Expert dental care because your teeth deserve the best! Experience world-class dentistry with a personal touch.",
    
    // COLORS - Purple/Violet theme
    primaryGradient: "from-purple-600 via-violet-600 to-purple-700",
    secondaryGradient: "from-purple-950 via-violet-950 to-purple-900",
    lightGradient: "from-purple-50 via-violet-50 to-purple-100",
    accentColor: "purple-500",
    
    // HERO IMAGE (replace with your image URL)
    heroImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=800&fit=crop",
    
    // FEATURE IMAGE
    featureImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=800&fit=crop",
    
    // CTA BUTTONS
    primaryCTA: "Book Appointment",
    primaryCTALink: "#book",
    secondaryCTA: "Our Services",
    
    // SERVICES/FEATURES
    services: [
      {
        icon: "✨",
        title: "Teeth Whitening",
        description: "Professional whitening treatments for a brighter, more confident smile"
      },
      {
        icon: "🦷",
        title: "General Dentistry",
        description: "Comprehensive oral health care including checkups and cleanings"
      },
      {
        icon: "💎",
        title: "Cosmetic Dentistry",
        description: "Transform your smile with veneers, bonding, and aesthetic treatments"
      },
      {
        icon: "🔧",
        title: "Restorative Care",
        description: "Crowns, bridges, and implants to restore function and beauty"
      }
    ],
    
    // STATS/ACHIEVEMENTS
    stats: [
      { value: "15K+", label: "Happy Patients" },
      { value: "25Y", label: "Experience" },
      { value: "99%", label: "Satisfaction" },
      { value: "24/7", label: "Emergency Care" }
    ],
    
    // WHY CHOOSE US
    whyChooseUs: [
      {
        icon: "👨‍⚕️",
        title: "Expert Team",
        description: "Board-certified dentists with decades of combined experience"
      },
      {
        icon: "🏥",
        title: "Modern Technology",
        description: "State-of-the-art equipment and latest dental innovations"
      },
      {
        icon: "😊",
        title: "Gentle Care",
        description: "Pain-free procedures with sedation options available"
      },
      {
        icon: "💳",
        title: "Flexible Payment",
        description: "Insurance accepted and affordable payment plans"
      }
    ],
    
    // CONTACT & SOCIAL
    phone: "+23-456-7890",
    email: "hello@smilecareclinic.com",
    address: "123 Dental Avenue, Healthcare District",
    website: "smilecareclinic.com",
    
    socialLinks: [
      { platform: "Instagram", url: "#", icon: "IG" },
      { platform: "Facebook", url: "#", icon: "FB" },
      { platform: "Twitter", url: "#", icon: "TW" }
    ]
  };

  // Portfolio links - REPLACE URLs with your actual portfolio page URLs
  const portfolioLinks = [
    {
      name: "Tech Startup",
      url: "/shop1", // REPLACE WITH YOUR URL
      icon: "💻",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Fashion Brand",
      url: "/shop2", // REPLACE WITH YOUR URL
      icon: "👗",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Food & Beverage",
      url: "/shop3", // REPLACE WITH YOUR URL
      icon: "🍽️",
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
                <img src="assets/1.png" alt="Post 1" className="w-full h-full object-cover" />
            </div>
            </div>

            {/* Social Post 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="h-95 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <img src="assets/2.png" alt="Post 1" className="w-full h-full object-cover" />
            </div>
            </div>

            {/* Social Post 3 */}
           <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="h-95 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <img src="assets/3.png" alt="Post 1" className="w-full h-full object-cover" />
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
          <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-purple-200/50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="text-3xl transform group-hover:scale-110 transition-transform">{config.businessIcon}</div>
                <span className={`text-2xl font-black bg-gradient-to-r ${config.primaryGradient} bg-clip-text text-transparent`}>
                  {config.businessName}
                </span>
              </div>
              
              <div className="hidden md:flex items-center gap-8">
                <a href="#home" className="text-sm font-semibold text-gray-700 hover:text-purple-600 transition-colors relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 group-hover:w-full transition-all"></span>
                </a>
                <a href="#services" className="text-sm font-semibold text-gray-700 hover:text-purple-600 transition-colors relative group">
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 group-hover:w-full transition-all"></span>
                </a>
                <a href="#about" className="text-sm font-semibold text-gray-700 hover:text-purple-600 transition-colors relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 group-hover:w-full transition-all"></span>
                </a>
                <a href="#contact" className="text-sm font-semibold text-gray-700 hover:text-purple-600 transition-colors relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 group-hover:w-full transition-all"></span>
                </a>
              </div>
              
              <a 
                href={config.primaryCTALink}
                className={`bg-gradient-to-r ${config.primaryGradient} text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:shadow-xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all`}
              >
                {config.primaryCTA}
              </a>
            </div>
          </nav>

          {/* Hero Section with 3D Illustration Style */}
          <section className={`relative overflow-hidden bg-gradient-to-br ${config.primaryGradient}`}>
            {/* Decorative Circles */}
            <div className="absolute top-10 left-10 w-64 h-64 bg-purple-400/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"></div>
            
            {/* Decorative Dots Pattern */}
            <div className="absolute top-8 right-8 grid grid-cols-4 gap-2 opacity-30">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
              ))}
            </div>
            
            <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white space-y-6 z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30`}>
                    <p className="text-xs font-bold uppercase tracking-wider">Premium Dental Care</p>
                  </div>
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                  Smile<br/>Care<br/>Clinic
                </h1>
                
                <p className="text-xl text-purple-100 leading-relaxed max-w-lg italic">
                  "{config.description}"
                </p>
                
                <a 
                  href={config.primaryCTALink}
                  className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all border border-white/30 hover:shadow-2xl transform hover:scale-105"
                >
                  {config.primaryCTA}
                </a>

                {/* Contact Info on Hero */}
                <div className="flex items-center gap-4 pt-6">
                  <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20">
                    <p className="text-sm text-purple-200">Contact Us:</p>
                    <p className="text-xl font-bold">{config.phone}</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                    <span className="text-2xl">👤</span>
                  </div>
                </div>
              </div>
              
              {/* Right 3D Tooth Illustration */}
              <div className="relative flex items-center justify-center z-10">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-white/30 rounded-full blur-3xl scale-110"></div>
                  
                  {/* Tooth Container */}
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
                    <div className="relative">
                      {/* 3D Tooth Illustration - Using emoji as placeholder */}
                      <div className="text-[200px] filter drop-shadow-2xl transform hover:scale-105 transition-transform">
                        🦷
                      </div>
                      
                      {/* Toothbrush Overlay */}
                      <div className="absolute top-1/4 right-1/4 text-7xl transform rotate-45 animate-pulse">
                        🪥
                      </div>
                    </div>
                  </div>

                  {/* Small Logo Badge */}
                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl">
                    <p className="text-xs font-bold text-purple-600 uppercase">Smile</p>
                    <p className="text-xs text-purple-400 uppercase">Care</p>
                    <div className="text-2xl mt-1">{config.businessIcon}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Floating Stats Bar */}
          <section className="relative -mt-12 z-20">
            <div className="max-w-6xl mx-auto px-6">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-purple-100">
                <div className="grid grid-cols-4 gap-8">
                  {config.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`text-4xl font-black bg-gradient-to-r ${config.primaryGradient} bg-clip-text text-transparent mb-1`}>{stat.value}</div>
                      <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className={`text-sm font-bold text-purple-600 uppercase tracking-wider px-4 py-2 bg-gradient-to-r ${config.lightGradient} rounded-full`}>
                  Our Services
                </span>
                <h2 className="text-5xl font-black text-gray-900 mt-6 mb-4">
                  Complete Dental Solutions
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  From routine checkups to advanced cosmetic procedures
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {config.services.map((service, idx) => (
                  <div 
                    key={idx}
                    className="group relative bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl border border-purple-200 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-300 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${config.primaryGradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                    
                    <div className="relative">
                      <div className={`w-16 h-16 bg-gradient-to-br ${config.primaryGradient} rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
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

          {/* Why Choose Us Section */}
          <section id="about" className={`py-24 bg-gradient-to-br ${config.lightGradient}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className={`text-sm font-bold text-purple-600 uppercase tracking-wider px-4 py-2 bg-white rounded-full`}>
                  Why Choose Us
                </span>
                <h2 className="text-5xl font-black text-gray-900 mt-6 mb-4">
                  Your Smile Deserves The Best
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {config.whyChooseUs.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${config.primaryGradient} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-lg`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Image Showcase */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${config.primaryGradient} rounded-3xl blur-3xl opacity-20`}></div>
                  <img 
                    src={config.heroImage}
                    alt="Dental Care"
                    className="relative w-full h-auto rounded-3xl shadow-2xl"
                  />
                </div>
                
                <div>
                  <span className={`text-sm font-bold text-purple-600 uppercase tracking-wider px-4 py-2 bg-gradient-to-r ${config.lightGradient} rounded-full`}>
                    Professional Care
                  </span>
                  <h2 className="text-5xl font-black text-gray-900 mt-6 mb-6">
                    Advanced Technology,<br/>Personalized Care
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    We combine cutting-edge dental technology with a warm, caring approach to ensure every patient receives the highest quality treatment in a comfortable environment.
                  </p>
                  <a 
                    href={config.primaryCTALink}
                    className={`inline-block bg-gradient-to-r ${config.primaryGradient} text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all`}
                  >
                    Schedule Consultation
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section className="py-24 bg-gradient-to-br from-purple-50 to-white">
            <div className="max-w-4xl mx-auto px-6">
              <div className={`bg-gradient-to-br ${config.primaryGradient} text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative">
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-300 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-2xl font-medium mb-6 text-center leading-relaxed">
                    "The best dental experience I've ever had! The staff is incredibly professional and gentle. My smile has never looked better!"
                  </p>
                  <div className="text-center">
                    <p className="font-bold text-lg">Sarah Johnson</p>
                    <p className="text-purple-200 text-sm">Happy Patient Since 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={`py-24 bg-gradient-to-br ${config.secondaryGradient} text-white text-center relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-400 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative max-w-4xl mx-auto px-6">
              <div className="text-6xl mb-6">{config.businessIcon}</div>
              <h2 className="text-5xl font-black mb-6">Ready for Your Best Smile?</h2>
              <p className="text-xl text-purple-200 mb-10">
                Book your appointment today and experience the difference
              </p>
              <a 
                href={config.primaryCTALink}
                className="inline-block bg-white text-purple-600 px-12 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                {config.primaryCTA}
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer id="contact" className="bg-gray-950 text-white py-16 border-t border-purple-900/30">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{config.businessIcon}</span>
                    <span className={`text-2xl font-black bg-gradient-to-r ${config.primaryGradient} bg-clip-text text-transparent`}>
                      {config.businessName}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-6 max-w-sm">{config.tagline}</p>
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
                
                <div>
                  <h4 className="text-lg font-bold mb-4">Contact</h4>
                  <div className="space-y-3 text-sm text-gray-400">
                    <p>📞 {config.phone}</p>
                    <p>✉️ {config.email}</p>
                    <p>📍 {config.address}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                  <div className="space-y-3 text-sm">
                    <a href="#home" className="block text-gray-400 hover:text-purple-400 transition-colors">Home</a>
                    <a href="#services" className="block text-gray-400 hover:text-purple-400 transition-colors">Services</a>
                    <a href="#about" className="block text-gray-400 hover:text-purple-400 transition-colors">About</a>
                    <a href="#contact" className="block text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-900 pt-8 flex items-center justify-between text-sm text-gray-500">
                <p>&copy; 2024 {config.businessName}. All rights reserved.</p>
                <p>Caring for smiles since 1999</p>
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
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-8">Campaign Results</h3>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold text-white mb-2">+350%</div>
                <div className="text-purple-100">Engagement Rate</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-white mb-2">+220%</div>
                <div className="text-purple-100">Lead Generation</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-white mb-2">+180%</div>
                <div className="text-purple-100">Conversion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default shop3;