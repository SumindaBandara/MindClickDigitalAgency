import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/DetailedServicesPage' },
    // { title: 'Projects', path: '/projects' },
    { title: 'About', path: '/AboutPage' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to={"/"}>
            <span className="text-white text-xl font-bold">MindClick</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="text-gray-100 hover:text-white hover:bg-[#ffd600] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                >
                  {item.title}
                </Link>
              ))}
              {/* <Link
                to="/GetStarted"
                className="bg-white text-[#ffd600] hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
              >
                Get Started
              </Link> */}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#ffd600]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="text-gray-100 hover:text-white hover:bg-[#ffd600] block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.title}
              </Link>
            ))}
            {/* <Link
              to="/GetStarted"
              className="w-full text-center bg-white text-[#ffd600] hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium mt-4"
            >
              Get Started
            </Link> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
