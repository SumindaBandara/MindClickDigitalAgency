import React from 'react';
import { ChevronRight, Sparkles, Globe, Users } from 'lucide-react';
import { Link } from "react-router-dom";
import logo from "/public/assets/logo.png"; // Replace with your logo path

const Hero2 = () => {
  return (
    <div className="relative bg-black text-black overflow-hidden">
      {/* Yellow gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ffd600]/20 via-black to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center py-20">
          
          {/* Left Column */}
          <div className="flex-1 space-y-8">
            {/* Pill badge */}
            <div className="inline-flex items-center bg-[#ffd600]/20 rounded-full px-4 py-1.5">
              <Sparkles className="w-4 h-4 text-[#ffd600] mr-2" />
              <span className="text-sm text-zinc-50">Creative Digital Marketing</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bol text-zinc-50">
              We Create
              <br />
              <span className="text-[#ffd600]">
                Digital Magic
              </span>
            </h1>
            
            <p className="text-xl text-white max-w-xl">
              Transform your brand with cutting-edge digital solutions that capture attention and drive results.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="group bg-[#ffd600] hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition-all duration-200 flex items-center gap-2">
                <Link to='/NewProject'>Start Your Project</Link> 
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 rounded-full font-semibold border border-[#ffd600] hover:bg-[#ffd600]/10 text-[#ffd600] transition-colors duration-200 flex items-center gap-2">
                Watch Showreel
              </button>
            </div>
          </div>
          
          {/* Right Column - Logo */}
          <div className="flex-1 flex justify-center">
            <img src={logo} alt="Logo" className="w-80 h-auto drop-shadow-lg" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero2;