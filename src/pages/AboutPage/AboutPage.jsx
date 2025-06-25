import React from 'react';
import { Award, Globe2, CheckCircle2, Briefcase, GraduationCap } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 via-purple-800 to-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white text-sm mb-6">
            <Award className="w-4 h-4 mr-2" />
            Meta Certified Professional
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h1>
        </div>

        {/* Profile Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-400 to-blue-400">
                {/* Replace the div below with your actual image */}
                <div className="w-full h-full flex items-center justify-center text-white text-lg">
                  Add Your Photo Here
                </div>
              </div>
              {/* Certification Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <img
                  src="/api/placeholder/120/120"
                  alt="Meta Certification Badge"
                  className="w-16 h-16"
                />
              </div>
            </div>

            {/* Info Section */}
            <div className="text-white">
              <h2 className="text-3xl font-bold mb-4">Digital Marketing Specialist</h2>
              <p className="text-gray-200 mb-6">
                A Meta-certified digital marketing professional with expertise in social media marketing,
                paid advertising, and content strategy. Passionate about helping businesses grow their
                online presence and achieve measurable results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400" />
                  <span>Meta Certified Digital Marketing Associate</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400" />
                  <span>Meta Certified Marketing Science Professional</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400" />
                  <span>Meta Certified Creative Strategy Professional</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white">
            <Globe2 className="w-8 h-8 mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2">Digital Strategy</h3>
            <p className="text-gray-200">
              Developing comprehensive digital marketing strategies tailored to business goals
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white">
            <Briefcase className="w-8 h-8 mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2">Campaign Management</h3>
            <p className="text-gray-200">
              Creating and managing successful social media and PPC campaigns
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white">
            <GraduationCap className="w-8 h-8 mb-4 text-purple-400" />
            <h3 className="text-xl font-semibold mb-2">Certified Expert</h3>
            <p className="text-gray-200">
              Meta certified with proven expertise in digital marketing and advertising
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center text-white">
            <div className="text-3xl font-bold mb-2">5+</div>
            <div className="text-gray-200">Years Experience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center text-white">
            <div className="text-3xl font-bold mb-2">100+</div>
            <div className="text-gray-200">Projects Completed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center text-white">
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="text-gray-200">Meta Certifications</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center text-white">
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-gray-200">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;