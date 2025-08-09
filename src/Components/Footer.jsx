import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    "About Us",
    "Our Services",
    "Portfolio",
    "Case Studies",
    "Contact"
  ];

  const services = [
    "Digital Marketing",
    "Web Development",
    "Brand Strategy",
    "Content Creation",
    "SEO Optimization"
  ];

  const contact = {
    email: "hello@themindclick.com",
    phone: "+1 (555) 123-4567",
    address: "123 Digital Avenue, Tech City, 12345"
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#fed600" }}>
            MindClick
          </h2>
          <p className="text-gray-400">
            We help businesses grow online with smart marketing, creative content, and impactful web solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="#social" className="hover:text-yellow-400">Social Media Marketing</a></li>
            <li><a href="#ads" className="hover:text-yellow-400">Meta Ad Campaigns</a></li>
            <li><a href="#web" className="hover:text-yellow-400">Web Development</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
          <p>Email: <a href="mailto:hello@mindclick.com" className="hover:text-yellow-400">hello@themindclick.com</a></p>
          <p>Phone: <a href="tel:+94701234567" className="hover:text-yellow-400">+94 70 77 80749</a></p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400">🌐</a>
            <a href="#" className="hover:text-yellow-400">📘</a>
            <a href="#" className="hover:text-yellow-400">📷</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MindClick. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
