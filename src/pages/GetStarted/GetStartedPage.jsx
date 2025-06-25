import React, { useState } from 'react';

const GetStartedPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    projectType: 'website',
    message: ''
  });

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
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 via-purple-800 to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Create Something Amazing
          </h1>
          <p className="text-gray-200 text-lg">
            Tell us about your project and we'll get back to you within 24 hours
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Your company name"
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
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Your phone number"
              />
            </div>

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
                <option value="digital-marketing">Digital Marketing</option>
                <option value="branding">Branding & Identity</option>
                <option value="social-media">Social Media Management</option>
                <option value="seo">SEO Optimization</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Tell us about your project and goals..."
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 disabled:opacity-75"
              >
                {isSubmitting ? 'Sending...' : 'Get Started Now'}
              </button>
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center text-white">
          <div>
            <div className="text-2xl font-bold">250+</div>
            <div className="text-gray-200">Projects Completed</div>
          </div>
          <div>
            <div className="text-2xl font-bold">95%</div>
            <div className="text-gray-200">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl font-bold">10+</div>
            <div className="text-gray-200">Years Experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;