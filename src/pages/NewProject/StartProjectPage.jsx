import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const StartProjectPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: 'website',
    timeline: 'flexible',
    budget: '5k-10k',
    projectDetails: '',
    goals: '',
    references: ''
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // Here you would typically send the data to your backend
    console.log('Project form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 via-purple-800 to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white text-sm mb-6">
            <span className="mr-2">•</span>
            Let's Build Something Amazing
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Your Project
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Fill out the form below to tell us about your project. 
            We'll review your requirements and get back to you within 24 hours.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6 pt-6 border-t border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800">Project Details</h2>
              
              <div>
                <label htmlFor="projectType" className="block text-gray-700 font-medium mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="website">Website Development</option>
                  <option value="ecommerce">E-Commerce Development</option>
                  <option value="digital-marketing">Digital Marketing Campaign</option>
                  <option value="branding">Brand Identity Design</option>
                  <option value="social-media">Social Media Management</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="timeline" className="block text-gray-700 font-medium mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="urgent">Urgent (ASAP)</option>
                    <option value="1month">Within 1 Month</option>
                    <option value="3months">1-3 Months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-gray-700 font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="projectDetails" className="block text-gray-700 font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Please describe your project in detail..."
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="goals" className="block text-gray-700 font-medium mb-2">
                  Project Goals
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="What are your main goals and objectives?"
                ></textarea>
              </div>

              <div>
                <label htmlFor="references" className="block text-gray-700 font-medium mb-2">
                  Reference Websites
                </label>
                <textarea
                  id="references"
                  name="references"
                  value={formData.references}
                  onChange={handleChange}
                  rows="2"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Any websites you like or want to reference?"
                ></textarea>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center disabled:opacity-75"
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Submit Project Request
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 rounded-xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-200">Work with our experienced professionals</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Custom Solutions</h3>
            <p className="text-gray-200">Tailored to your specific needs</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
            <p className="text-gray-200">Track record of successful projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartProjectPage;