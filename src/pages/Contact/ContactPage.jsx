import { useState } from "react";
import { User, Mail, MessageCircle, Facebook, Instagram, Linkedin, Send, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setResult("❌ Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setResult("Sending...");
    
    const submitData = new FormData();
    submitData.append("name", formData.name);
    submitData.append("email", formData.email);
    submitData.append("message", formData.message);
    submitData.append("access_key", "084024ca-3131-47ba-bb06-99d940d71645");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.log("Error", data);
        setResult("❌ " + data.message);
      }
    } catch (error) {
      setResult("❌ Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      
      {/* Modern geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-yellow-400 rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-yellow-400 opacity-10 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/2 w-32 h-32 border-2 border-yellow-400 rotate-45"></div>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(#ffd600 1px, transparent 1px),
              linear-gradient(90deg, #ffd600 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 border border-yellow-400/30 rounded-full">
            <span className="text-yellow-400 text-sm font-medium tracking-wider uppercase">Contact</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Let's Work
            <span className="block text-yellow-400">Together</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl leading-relaxed">
            Ready to bring your vision to life? Drop us a message and let's create something extraordinary.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:border-yellow-400/30 transition-all duration-500">
            <h2 className="text-3xl font-bold text-white mb-8">Send Message</h2>
            
            <div className="space-y-6">
              
              {/* Name Field */}
              <div className="group">
                <label className="block text-slate-300 text-sm font-medium mb-3 uppercase tracking-wider">Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-2xl px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/20 transition-all duration-300"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <User className="w-5 h-5 text-slate-500 group-focus-within:text-yellow-400 transition-colors" />
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div className="group">
                <label className="block text-slate-300 text-sm font-medium mb-3 uppercase tracking-wider">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-2xl px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/20 transition-all duration-300"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <Mail className="w-5 h-5 text-slate-500 group-focus-within:text-yellow-400 transition-colors" />
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="group">
                <label className="block text-slate-300 text-sm font-medium mb-3 uppercase tracking-wider">Message</label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    rows="5"
                    required
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-2xl px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
                  ></textarea>
                  <div className="absolute right-4 top-4">
                    <MessageCircle className="w-5 h-5 text-slate-500 group-focus-within:text-yellow-400 transition-colors" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3 group"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

            {/* Result Message */}
            {result && (
              <div className={`mt-6 p-4 rounded-2xl text-center font-medium ${
                result.includes('✅') 
                  ? 'bg-green-400/10 text-green-400 border border-green-400/20' 
                  : 'bg-red-400/10 text-red-400 border border-red-400/20'
              }`}>
                {result}
              </div>
            )}
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            
            {/* Contact Information */}
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm uppercase tracking-wider font-medium">Email</p>
                    <a 
                      href="mailto:contact@themindclick.com" 
                      className="text-white text-lg font-medium hover:text-yellow-400 transition-colors"
                    >
                      contact@themindclick.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm uppercase tracking-wider font-medium">Phone</p>
                    <a 
                      href="tel:+94707780749" 
                      className="text-white text-lg font-medium hover:text-yellow-400 transition-colors"
                    >
                      +94 70 77 80749
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/1DDoTxshhE/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-14 h-14 bg-slate-700/50 hover:bg-blue-600 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 group border border-slate-600/50 hover:border-blue-500"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/themindclick.com_?igsh=dGJpcXptbW9mdWFl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-14 h-14 bg-slate-700/50 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 group border border-slate-600/50 hover:border-purple-400"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/themindclick/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-14 h-14 bg-slate-700/50 hover:bg-blue-700 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 group border border-slate-600/50 hover:border-blue-500"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-8 text-slate-900">
              <h3 className="text-2xl font-bold mb-3">Ready to Start?</h3>
              <p className="mb-4 opacity-90">
                Let's discuss your project and bring your ideas to life.
              </p>
              <div className="flex items-center space-x-2 text-sm font-medium">
                <span>Response within 24 hours</span>
                <div className="w-2 h-2 bg-slate-900 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}