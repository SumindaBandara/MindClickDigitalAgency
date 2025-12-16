import React, { useState } from 'react';
import { ChevronDown, TrendingUp, Users, Target, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const shop1 = () => {
  const [activeSection, setActiveSection] = useState(0);

    const config = {
    // BRANDING
    businessName: "Bean Town Cafe",
    tagline: "Crafting Moments, One Cup at a Time",
    description: "Experience the perfect blend of artisanal coffee, cozy ambiance, and exceptional service in the heart of the city.",
    
    // COLORS - Tailwind classes for easy customization
    primaryGradient: "from-amber-600 via-orange-500 to-red-600",
    accentColor: "amber-500",
    secondaryGradient: "from-amber-50 to-orange-50",
    
    // HERO IMAGE (replace with your image URL)
    heroImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop",
    
    // CTA BUTTONS
    primaryCTA: "Order Now",
    primaryCTALink: "#order",
    secondaryCTA: "View Menu",
    
    // SERVICES/FEATURES
    services: [
      {
        icon: "☕",
        title: "Premium Coffee",
        description: "Ethically sourced beans roasted to perfection, delivering rich flavors in every cup.",
        gradient: "from-amber-500 to-orange-600"
      },
      {
        icon: "🥐",
        title: "Fresh Pastries",
        description: "Handcrafted daily with the finest ingredients for an authentic artisanal experience.",
        gradient: "from-orange-500 to-red-500"
      },
      {
        icon: "🍵",
        title: "Specialty Drinks",
        description: "Innovative milk shakes, bubble tea, and signature beverages crafted by expert baristas.",
        gradient: "from-red-500 to-pink-600"
      },
      {
        icon: "🏠",
        title: "Cozy Atmosphere",
        description: "A warm, inviting space perfect for work, relaxation, or catching up with friends.",
        gradient: "from-pink-600 to-purple-600"
      }
    ],
    
    // STATS/ACHIEVEMENTS
    stats: [
      { value: "10K+", label: "Happy Customers" },
      { value: "50+", label: "Menu Items" },
      { value: "5★", label: "Average Rating" },
      { value: "7", label: "Years Serving" }
    ],
    
    // WHY CHOOSE US
    whyChooseUs: [
      {
        icon: "✨",
        title: "Quality First",
        description: "Premium ingredients and expert craftsmanship in every product"
      },
      {
        icon: "⚡",
        title: "Fast Service",
        description: "Quick preparation without compromising on quality"
      },
      {
        icon: "💚",
        title: "Sustainable",
        description: "Eco-friendly practices and locally sourced ingredients"
      },
      {
        icon: "🎯",
        title: "Customer Focus",
        description: "Personalized service and attention to every detail"
      }
    ],
    
    // CONTACT & SOCIAL
    phone: "123-456-7890",
    email: "hello@beantowncafe.com",
    address: "123 Main Street, Downtown",
    website: "www.beantowncafe.com",
    
    socialLinks: [
      { platform: "Facebook", url: "#", icon: "f" },
      { platform: "Instagram", url: "#", icon: "📷" },
      { platform: "Twitter", url: "#", icon: "𝕏" }
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
                <img src="assets/9.png" alt="Post 1" className="w-full h-full object-cover" />
            </div>
            </div>

            {/* Social Post 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="h-95 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <img src="assets/7.png" alt="Post 1" className="w-full h-full object-cover" />
            </div>
            </div>

            {/* Social Post 3 */}
           <div className="group relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="h-95 bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <img src="assets/8.png" alt="Post 1" className="w-full h-full object-cover" />
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
              <div className="h-[600px] overflow-y-auto">
          {/* Sticky Navbar */}
         <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
  {/* CHANGE 1: Responsive Padding (px-4 py-3 on mobile, px-6 py-4 on desktop) */}
  <div className="max-w-7xl mx-auto px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
    
    {/* CHANGE 2: Responsive Logo Text Size (text-xl on mobile, text-2xl on desktop) */}
    <div className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${config.primaryGradient} bg-clip-text text-transparent`}>
      {config.businessName}
    </div>

    {/* Desktop Links (Hidden on Mobile) */}
    <div className="hidden md:flex items-center gap-8">
      <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Home</a>
      <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">About</a>
      <a href="#services" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Services</a>
      <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Contact</a>
    </div>

    {/* Right Side Actions */}
    <div className="flex items-center gap-3">
      {/* CHANGE 3: Responsive Button (smaller text/padding on mobile) */}
      <a 
        href={config.primaryCTALink}
        className={`bg-gradient-to-r ${config.primaryGradient} text-white px-4 py-2 md:px-6 md:py-2 rounded-full font-semibold text-xs md:text-base hover:shadow-lg transform hover:scale-105 transition-all`}
      >
        {config.primaryCTA}
      </a>

      {/* CHANGE 4: Hamburger Menu (Visible ONLY on Mobile 'md:hidden') */}
      <button className="md:hidden text-gray-700 hover:text-orange-600 p-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    
  </div>
</nav>

          {/* Hero Section */}
          <section 
            className="relative bg-cover bg-center text-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${config.heroImage})`,
              minHeight: '500px'
            }}
          >
            <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center justify-center text-center min-h-[500px]">
              <div className="animate-fade-in">
                <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">
                  {config.businessName}
                </h1>
                <p className="text-3xl mb-4 text-orange-200 font-semibold">
                  {config.tagline}
                </p>
                <p className="text-xl mb-10 text-gray-200 max-w-2xl">
                  {config.description}
                </p>
                <div className="flex gap-4 justify-center">
                  <a 
                    href={config.primaryCTALink}
                    className={`bg-gradient-to-r ${config.primaryGradient} text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all`}
                  >
                    {config.primaryCTA}
                  </a>
                  <button className="bg-white/20 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all border-2 border-white">
                    {config.secondaryCTA}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className={`bg-gradient-to-r ${config.secondaryGradient} py-12`}>
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {config.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className={`text-5xl font-bold bg-gradient-to-r ${config.primaryGradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

          {/* Services Section */}
          <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-800 mb-4">What We Offer</h2>
                <p className="text-xl text-gray-600">Discover our exceptional range of products and services</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {config.services.map((service, idx) => (
                  <div 
                    key={idx}
                    className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section id="about" className={`py-20 bg-gradient-to-br ${config.secondaryGradient}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
                <p className="text-xl text-gray-600">We're committed to delivering excellence in every aspect</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {config.whyChooseUs.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${config.primaryGradient} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={`py-20 bg-gradient-to-r ${config.primaryGradient} text-white`}>
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-2xl mb-10 text-white/90">Join thousands of satisfied customers today</p>
              <a 
                href={config.primaryCTALink}
                className="inline-block bg-white text-orange-600 px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                {config.primaryCTA}
              </a>
            </div>
          </section>

          {/* Footer */}
          <footer id="contact" className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                {/* Brand */}
                <div>
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${config.primaryGradient} bg-clip-text text-transparent mb-4`}>
                    {config.businessName}
                  </h3>
                  <p className="text-gray-400 mb-6">{config.tagline}</p>
                  <div className="flex gap-4">
                    {config.socialLinks.map((social, idx) => (
                      <a 
                        key={idx}
                        href={social.url}
                        className={`w-12 h-12 bg-gradient-to-br ${config.primaryGradient} rounded-full flex items-center justify-center hover:scale-110 transition-transform`}
                        title={social.platform}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Contact Info */}
                <div>
                  <h4 className="text-xl font-bold mb-6">Contact Us</h4>
                  <div className="space-y-4 text-gray-400">
                    <p>📞 {config.phone}</p>
                    <p>✉️ {config.email}</p>
                    <p>📍 {config.address}</p>
                    <p>🌐 {config.website}</p>
                  </div>
                </div>
                
                {/* Quick Links */}
                <div>
                  <h4 className="text-xl font-bold mb-6">Quick Links</h4>
                  <div className="space-y-3">
                    <a href="#home" className="block text-gray-400 hover:text-orange-500 transition-colors">Home</a>
                    <a href="#about" className="block text-gray-400 hover:text-orange-500 transition-colors">About Us</a>
                    <a href="#services" className="block text-gray-400 hover:text-orange-500 transition-colors">Services</a>
                    <a href="#contact" className="block text-gray-400 hover:text-orange-500 transition-colors">Contact</a>
                  </div>
                </div>
              </div>
              
              {/* Copyright */}
              <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                <p>&copy; 2024 {config.businessName}. All rights reserved.</p>
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

export default shop1;