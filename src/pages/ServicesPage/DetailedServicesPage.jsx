import React, { useState } from 'react';
import { 
  TrendingUp, 
  Globe,
  Package,
  CheckCircle,
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  MessageCircle,
  BarChart,
  Smartphone,
  ShoppingCart,
  Rocket,
  Star,
  Calendar,
  Target,
  Code,
  Layout,
  Link
} from 'lucide-react';

const UpdatedServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
  icon: <TrendingUp className="w-6 h-6" />,
  title: "Marketing Packages",
  shortDesc: "Monthly retainer for full social media growth",
  overview: "From research & setup to content, ads, and consulting — everything your business needs to grow online with trust and consistency.",
  packages: [
    {
      name: "Starter Plan",
      price: "Rs.12,500/month",
      emoji: "🌱",
      target: "For small businesses starting online",
      features: [
        "Business & Audience Research (niche + competitors)",
        "Business Page Setup & Branding (logo, colors, about, highlights)",
        "2 Social Media Platforms (FB + Instagram)",
        "Up to 8 Posts per month (flexible to your goals, no extra fee)",
        "Monthly Consultation Call (strategy & future goal planning)",
        "1 Ad Campaign Setup (budget separate)",
        "Monthly Performance Report"
      ]
    },
    {
      name: "Growth Plan",
      price: "Rs.25,000/month",
      emoji: "🚀",
      target: "For growing businesses that want leads & strong presence",
      features: [
        "Complete Business & Competitor Research",
        "Page Optimization + Business Theme Setup",
        "3 Platforms (FB, IG + TikTok or LinkedIn)",
        "Around 12 Posts per month (flexible to campaign needs)",
        "2 Ad Campaigns per month (with optimization)",
        "Engagement Boost (reply to comments/messages)",
        "Bi-weekly Reports with insights",
        "Strategy Consultation Call (every 2 weeks)"
      ],
      popular: true
    },
    {
      name: "Premium Plan",
      price: "Rs.40,000/month",
      emoji: "🏆",
      target: "For businesses wanting full brand growth & authority",
      features: [
        "Full Business Research + Market Positioning",
        "Business Page Optimization + Brand Guidelines",
        "4 Platforms (FB, IG, TikTok, LinkedIn/YouTube Shorts)",
        "16–20+ Posts per month (we focus on results, not limits)",
        "3–4 Ad Campaigns + Retargeting",
        "Custom Content Calendar + Marketing Strategy",
        "Advanced Reports (ROI, leads, conversions)",
        "Monthly Business Consultation & Future Goal Planning"
      ]
    }
  ],
  technologies: ["Facebook Ads", "Instagram", "TikTok", "LinkedIn", "Analytics"],
  timeframe: "Ongoing monthly service"
}
,
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website Packages",
      shortDesc: "MERN Stack web development solutions",
      overview: "Professional websites built with modern MERN stack technology to establish your digital presence",
      packages: [
        {
          name: "Basic Web Presence",
          price: "Rs.20,000",
          emoji: "🖥️",
          target: "For small businesses that just want an online face",
          features: [
            "1–3 Pages (Home, About, Contact)",
            "Responsive design with React",
            "Contact Form with Node.js backend",
            "Basic SEO (meta tags, sitemap)",
            "Delivery in 1 Week"
          ]
        },
        {
          name: "Business Website",
          price: "Rs.40,000",
          emoji: "🌐",
          target: "For service businesses that want credibility + features",
          features: [
            "4–6 Pages (Home, About, Services, Gallery, Blog, Contact)",
            "Admin Dashboard (basic CRUD operations)",
            "WhatsApp/FB Messenger integration",
            "Analytics Integration (Google Analytics)",
            "Delivery in 2–3 Weeks"
          ],
          popular: true
        },
        {
          name: "E-Commerce Website",
          price: "Rs.75,000+",
          emoji: "🛒",
          target: "For businesses ready to sell online",
          features: [
            "MERN-based eCommerce platform",
            "Product Management (CRUD for products, categories)",
            "Cart + Checkout Flow",
            "Payment Gateway Integration (PayHere/Stripe/PayPal)",
            "Order Management Dashboard",
            "SEO + Analytics + Customer Login",
            "Delivery in 3–5 Weeks"
          ]
        }
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Payment Gateways"],
      timeframe: "1-5 weeks delivery"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Full Stack Launch Pack",
      shortDesc: "Complete digital transformation solution",
      overview: "All-in-one business launch solution from zero to complete digital presence",
      packages: [
        {
          name: "Business Launch Pack",
          price: "Customized Price",
          emoji: "🚀",
          target: "Complete online launch from 0 → Digital Presence",
          features: [
            "Business Research & Competitor Analysis",
            "Branding Kit (logo, fonts, social templates)",
            "Business Website (Customized)",
            "Social Media Setup (FB, IG, TikTok, LinkedIn)",
            "Branded Social Media Posts",
            "Ad Campaigns Setup",
            "Training: How to manage site & social media"
          ],
          isOneTime: true
        }
      ],
      technologies: ["Complete MERN Stack", "Social Media Tools", "Design Software", "Analytics"],
      timeframe: "4-6 weeks complete setup"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">Premium Digital Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Transform Your Business
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              From social media marketing to full-stack web development, we provide everything you need to dominate the digital space
            </p>
          </div>
        </div>
      </section>

      {/* Service Selection Cards */}
      <section className="py-16 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`group p-8 rounded-2xl text-left transition-all duration-300 hover:scale-105 ${
                  activeService === index 
                    ? 'bg-white shadow-2xl ring-2 ring-indigo-500 transform scale-105' 
                    : 'bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl'
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-xl transition-colors ${
                    activeService === index 
                      ? 'bg-indigo-500 text-white' 
                      : 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200'
                  }`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{service.shortDesc}</p>
                    <div className="flex items-center gap-2 mt-3 text-indigo-600">
                      <span className="text-sm font-medium">Explore details</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Service Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-4 bg-indigo-50 p-4 rounded-2xl mb-6">
                  <div className="bg-indigo-500 p-3 rounded-xl text-white">
                    {services[activeService].icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {services[activeService].title}
                  </h2>
                </div>
                
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {services[activeService].overview}
                </p>
              </div>

              {/* Packages Grid */}
              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                {services[activeService].packages.map((pkg, index) => (
                  <div key={index} className={`relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 transition-all hover:shadow-xl ${
                    pkg.popular ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200 hover:border-indigo-300'
                  }`}>
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-indigo-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <div className="text-4xl mb-3">{pkg.emoji}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                      <div className="text-3xl font-bold text-indigo-600 mb-3">
                        {pkg.price}
                        {pkg.isOneTime && <span className="text-sm text-gray-500 block">One-Time</span>}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{pkg.target}</p>
                    </div>

                    <div className="space-y-4">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    
                  </div>
                ))}
              </div>

              {/* Service Info Footer */}
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                      <Clock className="w-6 h-6 text-indigo-600" />
                      Timeline & Delivery
                    </h3>
                    <p className="text-gray-700 text-lg">{services[activeService].timeframe}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                      <Code className="w-6 h-6 text-indigo-600" />
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {services[activeService].technologies.map((tech, index) => (
                        <span key={index} className="px-4 py-2 bg-white text-indigo-600 rounded-full text-sm font-medium shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Let's discuss which package fits your needs and get you started on your digital journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to = {"/contact"}>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Book a Consultationfff
            </button>
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdatedServicesPage;