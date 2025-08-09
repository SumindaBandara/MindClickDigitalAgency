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
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-orange-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse animation-delay-2s"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-pulse animation-delay-4s"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animation: `float ${8 + Math.random() * 8}s infinite linear`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Ready to transform your digital presence? Let's start the conversation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto mt-4"></div>
        </div>

        {/* Form Container */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl max-w-2xl w-full p-10 border border-yellow-200/50 relative overflow-hidden">
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-orange-400 to-yellow-500 rounded-full opacity-15"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h2>

            <div className="space-y-6">
              
              {/* Name Field */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="relative flex items-center bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-4 border-2 border-yellow-200 focus-within:border-yellow-400 transition-all duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-transparent text-gray-800 text-lg placeholder-gray-600 focus:outline-none font-medium"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="relative flex items-center bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-4 border-2 border-yellow-200 focus-within:border-yellow-400 transition-all duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full bg-transparent text-gray-800 text-lg placeholder-gray-600 focus:outline-none font-medium"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="relative flex items-start bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-4 border-2 border-yellow-200 focus-within:border-yellow-400 transition-all duration-300 group-hover:shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-xl flex items-center justify-center mr-4 mt-2 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="5"
                    required
                    className="w-full bg-transparent text-gray-800 text-lg placeholder-gray-600 focus:outline-none resize-none font-medium"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-white font-bold text-lg hover:from-yellow-500 hover:via-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>

            {result && (
              <div className={`mt-6 p-4 rounded-2xl text-center font-semibold text-lg ${
                result.includes('✅') 
                  ? 'bg-green-100 text-green-800 border-2 border-green-200' 
                  : 'bg-red-100 text-red-800 border-2 border-red-200'
              }`}>
                {result}
              </div>
            )}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 text-center max-w-2xl w-full">
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-yellow-200/50 shadow-xl">
            <h3 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Connect with us
              </span>
            </h3>
            
            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://www.facebook.com/YourPage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 hover:shadow-lg group"
              >
                <Facebook className="w-7 h-7 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/YourProfile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-14 h-14 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 hover:shadow-lg group"
              >
                <Instagram className="w-7 h-7 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/company/YourCompany"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 hover:shadow-lg group"
              >
                <Linkedin className="w-7 h-7 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3 text-gray-700">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a 
                  href="mailto:contact@themindclick.com" 
                  className="text-lg font-medium hover:text-yellow-600 transition-colors underline decoration-yellow-400 decoration-2 underline-offset-4"
                >
                  contact@themindclick.com
                </a>
              </div>
              
              <div className="flex items-center justify-center space-x-3 text-gray-700">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a 
                  href="+94707780749" 
                  className="text-lg font-medium hover:text-yellow-600 transition-colors underline decoration-yellow-400 decoration-2 underline-offset-4"
                >
                  +94 70 77 80749
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.6;
          }
          25% { 
            transform: translateY(-20px) rotate(90deg); 
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-10px) rotate(180deg); 
            opacity: 1;
          }
          75% { 
            transform: translateY(-30px) rotate(270deg); 
            opacity: 0.7;
          }
        }
        
        .animation-delay-2s {
          animation-delay: 2s;
        }
        
        .animation-delay-4s {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}