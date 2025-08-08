import React, { useState, useEffect } from 'react';
import { BookOpen, TrendingUp, Eye, ArrowRight, X, Clock, Zap, Target, Lightbulb, Users, Heart } from 'lucide-react';

export default function EducationPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const articles = [
    {
      title: "5 Social Media Hacks to Skyrocket Engagement",
      description: "Discover proven strategies to grab attention and keep your audience hooked with cutting-edge techniques.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      category: "Social Media",
      readTime: "5 min read",
      engagement: "2.4K views",
      difficulty: "Beginner",
      icon: <TrendingUp className="w-5 h-5" />,
      fullContent: `
        <h2>5 Social Media Hacks to Skyrocket Engagement</h2>
        
        <p>Social media success isn't about luck—it's about strategy. Here are five proven hacks that will transform your engagement rates:</p>
        
        <h3>1. The 3-Second Hook Rule</h3>
        <p>You have exactly 3 seconds to grab someone's attention as they scroll. Start with:</p>
        <ul>
          <li>A bold statement or question</li>
          <li>Surprising statistics</li>
          <li>Visual patterns that break the scroll</li>
        </ul>
        
        <h3>2. The Story Loop Technique</h3>
        <p>Create curiosity gaps in your content. Start a story but don't finish it immediately—make people want to keep reading or watching.</p>
        
        <h3>3. Engagement Bait (The Right Way)</h3>
        <p>Ask specific questions that require thoughtful answers, not just yes/no responses. Examples:</p>
        <ul>
          <li>"What's the biggest marketing mistake you made last year?"</li>
          <li>"Share your best productivity hack in one sentence"</li>
        </ul>
        
        <h3>4. The 80/20 Content Rule</h3>
        <p>80% of your content should provide value, entertain, or educate. Only 20% should directly promote your business.</p>
        
        <h3>5. Timing is Everything</h3>
        <p>Post when your audience is most active. Use your analytics to find your golden hours, but generally:</p>
        <ul>
          <li>LinkedIn: Tuesday-Thursday, 8-10 AM</li>
          <li>Instagram: Monday-Friday, 11 AM-2 PM</li>
          <li>Twitter: Tuesday-Thursday, 9 AM-3 PM</li>
        </ul>
        
        <p><strong>Pro Tip:</strong> Consistency beats perfection. It's better to post regularly with good content than sporadically with perfect content.</p>
      `
    },
    {
      title: "Understanding the Psychology of Ads",
      description: "Learn how colors, words, and timing can make your ads more persuasive and drive conversions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      category: "Psychology",
      readTime: "8 min read",
      engagement: "3.7K views",
      difficulty: "Intermediate",
      icon: <Eye className="w-5 h-5" />,
      fullContent: `
        <h2>Understanding the Psychology of Ads</h2>
        
        <p>The most successful ads don't just inform—they influence. Here's how psychology can make your ads irresistible:</p>
        
        <h3>Color Psychology in Advertising</h3>
        <p>Colors trigger emotions before words are even read:</p>
        <ul>
          <li><strong>Red:</strong> Urgency, excitement (use for sales, CTAs)</li>
          <li><strong>Blue:</strong> Trust, security (perfect for financial services)</li>
          <li><strong>Yellow:</strong> Optimism, clarity (great for attention)</li>
          <li><strong>Green:</strong> Growth, money (ideal for eco-friendly or financial products)</li>
        </ul>
        
        <h3>The Power Words That Convert</h3>
        <p>Certain words have been proven to trigger action:</p>
        <ul>
          <li><strong>Scarcity:</strong> "Limited," "Exclusive," "Only 24 hours left"</li>
          <li><strong>Urgency:</strong> "Now," "Today," "Instant"</li>
          <li><strong>Value:</strong> "Free," "Save," "Bonus"</li>
          <li><strong>Curiosity:</strong> "Secret," "Hidden," "Behind-the-scenes"</li>
        </ul>
        
        <h3>The FOMO Effect</h3>
        <p>Fear of Missing Out is one of the strongest psychological drivers. Show what people miss by NOT taking action.</p>
        
        <h3>Social Proof Triggers</h3>
        <p>People follow what others do. Include:</p>
        <ul>
          <li>Customer testimonials</li>
          <li>Number of satisfied customers</li>
          <li>Reviews and ratings</li>
          <li>"Join 10,000+ happy customers"</li>
        </ul>
        
        <h3>The Reciprocity Principle</h3>
        <p>Give before you ask. Provide free value (tips, tools, samples) and people will feel obligated to return the favor.</p>
        
        <p><strong>Remember:</strong> Use psychology ethically. Your goal should be to help people make decisions that genuinely benefit them.</p>
      `
    },
    {
      title: "Beginner's Guide to SEO in 2025",
      description: "Simple steps to rank higher and get organic traffic without big budgets using modern techniques.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
      category: "SEO",
      readTime: "12 min read",
      engagement: "5.1K views",
      difficulty: "Beginner",
      icon: <Zap className="w-5 h-5" />,
      fullContent: `
        <h2>Beginner's Guide to SEO in 2025</h2>
        
        <p>SEO might seem complex, but the basics are simple. Focus on these fundamental strategies to start ranking higher:</p>
        
        <h3>1. Keyword Research Made Simple</h3>
        <p>Don't overcomplicate this. Start with:</p>
        <ul>
          <li>What questions do your customers ask?</li>
          <li>What problems are they trying to solve?</li>
          <li>Use Google's "People also ask" section for ideas</li>
          <li>Check what your competitors are ranking for</li>
        </ul>
        
        <h3>2. Content That Google Loves</h3>
        <p>Create content that answers questions completely:</p>
        <ul>
          <li>Write for humans, not search engines</li>
          <li>Use headings (H1, H2, H3) to structure content</li>
          <li>Include your main keyword in the title and first paragraph</li>
          <li>Aim for 1,500+ words for competitive topics</li>
        </ul>
        
        <h3>3. Technical SEO Basics</h3>
        <p>These fundamentals can make or break your rankings:</p>
        <ul>
          <li><strong>Page Speed:</strong> Use tools like PageSpeed Insights</li>
          <li><strong>Mobile-Friendly:</strong> Most searches happen on mobile</li>
          <li><strong>SSL Certificate:</strong> That little lock icon matters</li>
          <li><strong>Clean URLs:</strong> yoursite.com/seo-guide (not yoursite.com/p=123)</li>
        </ul>
        
        <h3>4. Local SEO (If You Have a Local Business)</h3>
        <ul>
          <li>Set up Google My Business</li>
          <li>Get reviews from customers</li>
          <li>Include your city/region in content</li>
          <li>List your business in local directories</li>
        </ul>
        
        <h3>5. Link Building for Beginners</h3>
        <p>Quality over quantity always:</p>
        <ul>
          <li>Create shareable content (infographics, guides)</li>
          <li>Guest post on relevant blogs</li>
          <li>Reach out to local businesses for partnerships</li>
          <li>Internal linking—link to your own related content</li>
        </ul>
        
        <h3>Free Tools to Get Started</h3>
        <ul>
          <li>Google Analytics (track your traffic)</li>
          <li>Google Search Console (see what you rank for)</li>
          <li>Ubersuggest (keyword research)</li>
          <li>Google PageSpeed Insights (check site speed)</li>
        </ul>
        
        <p><strong>Most Important Tip:</strong> SEO is a marathon, not a sprint. Focus on creating valuable content consistently, and results will follow in 3-6 months.</p>
      `
    },
  ];

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Beginner-Friendly",
      description: "Step-by-step guides designed for those just starting their marketing journey",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Practical Tips",
      description: "Real strategies you can implement today, not just theory",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Driven",
      description: "Learn from fellow marketers and share your experiences",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Made with Care",
      description: "Every article is crafted to solve real marketing challenges",
      color: "from-pink-400 to-pink-600"
    }
  ];

  const openArticle = (article) => {
    setSelectedArticle(article);
    document.body.style.overflow = 'hidden';
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-yellow-300/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-yellow-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 pt-20 pb-32">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-20">
          <div 
            className="transform transition-all duration-1000"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-6 animate-bounce">
              <Zap className="w-4 h-4 mr-2" />
              Perfect for beginners
            </div>
            
            <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent leading-tight">
              MindClick
              <span className="block text-4xl md:text-5xl mt-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Knowledge Hub
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your marketing journey starts here. Simple, actionable strategies 
              that actually work—no confusing jargon, just results.
            </p>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className={`text-white mb-3 flex justify-center bg-gradient-to-r ${feature.color} rounded-xl p-3 w-fit mx-auto group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <div className="text-lg font-bold text-white mb-2">{feature.title}</div>
                  <div className="text-gray-400 text-sm leading-relaxed">{feature.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Start Learning Today</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`
                  relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden
                  transform transition-all duration-500 hover:scale-105 hover:-translate-y-4
                  ${hoveredCard === index ? 'shadow-2xl shadow-yellow-400/20' : 'shadow-lg shadow-black/20'}
                `}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-48 object-cover transform transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center bg-yellow-400/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-black text-sm font-semibold">
                        {article.icon}
                        <span className="ml-1.5">{article.category}</span>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4">
                      <div className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-sm font-medium border border-white/20">
                        {article.difficulty}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-gray-400 text-sm mb-3 space-x-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {article.engagement}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 line-clamp-2 leading-relaxed">
                      {article.description}
                    </p>

                    <button 
                      onClick={() => openArticle(article)}
                      className={`
                        group/btn w-full flex items-center justify-center px-6 py-3 
                        bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl
                        text-black font-semibold transform transition-all duration-300
                        hover:from-yellow-300 hover:to-yellow-400 hover:shadow-lg hover:shadow-yellow-400/25
                        ${hoveredCard === index ? 'translate-y-0' : 'translate-y-2'}
                      `}
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>

                  <div className={`
                    absolute inset-0 rounded-3xl border-2 border-yellow-400/50 opacity-0 
                    transform scale-95 transition-all duration-300 pointer-events-none
                    ${hoveredCard === index ? 'opacity-100 scale-100' : ''}
                  `}></div>
                </div>

                <div className={`
                  absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full
                  transform transition-all duration-300 
                  ${hoveredCard === index ? 'scale-100 rotate-180' : 'scale-0'}
                `}></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Grow Your Business?</h3>
              <p className="text-gray-300 mb-6">Join other beginners who are already seeing results with our simple strategies.</p>
              <button className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl text-black font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25">
                Get More Free Tips
                <ArrowRight className="w-5 h-5 ml-2 inline transform transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10">
            {/* Modal Header */}
            <div className="sticky top-0 bg-slate-900/95 backdrop-blur-sm border-b border-white/10 p-6 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="flex items-center bg-yellow-400/90 px-3 py-1.5 rounded-full text-black text-sm font-semibold">
                  {selectedArticle.icon}
                  <span className="ml-1.5">{selectedArticle.category}</span>
                </div>
                <span className="text-gray-400 text-sm">{selectedArticle.readTime}</span>
              </div>
              <button 
                onClick={closeArticle}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title} 
                className="w-full h-64 object-cover rounded-2xl mb-6"
              />
              <div 
                className="prose prose-invert prose-yellow max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedArticle.fullContent }}
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .prose h2 { color: #fbbf24; font-size: 1.875rem; font-weight: bold; margin: 2rem 0 1rem 0; }
        .prose h3 { color: #ffffff; font-size: 1.5rem; font-weight: 600; margin: 1.5rem 0 0.5rem 0; }
        .prose p { color: #d1d5db; line-height: 1.7; margin: 1rem 0; }
        .prose ul { color: #d1d5db; margin: 1rem 0; padding-left: 1.5rem; }
        .prose li { margin: 0.5rem 0; }
        .prose strong { color: #fbbf24; }
      `}</style>
    </div>
  );
}