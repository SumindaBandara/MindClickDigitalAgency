import React from 'react';
import { ChevronRight, Sparkles, Globe, Users } from 'lucide-react';

import { Link } from "react-router-dom";

const Hero2 = () => {
  const stats = [
    { value: '250+', label: 'Happy Clients' },
    { value: '95%', label: 'Success Rate' },
    { value: '10+', label: 'Years Experience' },
  ];

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-pink-600/20 to-blue-600/20 animate-pulse" />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(101,39,190,0.4),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.4),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center py-20">
          {/* Left Column */}
          <div className="flex-1 space-y-8">
            {/* Pill badge */}
            <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm">Award Winning Agency</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold">
              We Create
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Digital Magic
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-xl">
              Transform your brand with cutting-edge digital solutions that capture attention and drive results.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="group bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full font-semibold transition-all duration-200 flex items-center gap-2">
               <Link to='/NewProject'>Start Your Project</Link> 
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 rounded-full font-semibold border border-white/30 hover:bg-white/10 transition-colors duration-200 flex items-center gap-2">
                Watch Showreel
              </button>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex-1 w-full">
            <div className="relative">
              {/* Stats cards */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-200"
                  >
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Feature cards */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-2xl backdrop-blur-lg">
                  <Globe className="w-8 h-8 mb-4 text-blue-400" />
                  <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
                  <p className="text-gray-300 text-sm">Connect with audiences worldwide</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-2xl backdrop-blur-lg">
                  <Users className="w-8 h-8 mb-4 text-purple-400" />
                  <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-300 text-sm">Industry leading professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;