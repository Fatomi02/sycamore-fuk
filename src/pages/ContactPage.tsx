import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, AlertCircle, CheckCircle, User, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitStatus('idle');
    }, 3000);
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#073042] to-[#0a4458] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch with Sycamore Finance
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're here to help you achieve your financial goals. Contact us today to discuss 
              your loan requirements and discover how we can support your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#073042] mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#26C165]/10 rounded-lg flex items-center justify-center">
                      <Mail size={24} className="text-[#26C165]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-[#073042] mb-1">Email</h3>
                      <p className="text-gray-600">hello@sycamorefinance.co.uk</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#26C165]/10 rounded-lg flex items-center justify-center">
                      <Phone size={24} className="text-[#26C165]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-[#073042] mb-1">Phone</h3>
                      <p className="text-gray-600">[Phone number coming soon]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#26C165]/10 rounded-lg flex items-center justify-center">
                      <MapPin size={24} className="text-[#26C165]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-[#073042] mb-1">Registered Office</h3>
                      <p className="text-gray-600">
                        2 NEW BAILEY, 6 STANLEY STREET<br />
                        SALFORD, GREATER MANCHESTER<br />
                        M3 5GS
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#26C165]/10 rounded-lg flex items-center justify-center">
                      <Clock size={24} className="text-[#26C165]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-[#073042] mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Company Information */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-[#073042] mb-4">Company Information</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Company No:</strong> 16181852</p>
                  <p><strong>Registered in:</strong> England & Wales</p>
                </div>
              </div>
              
              {/* FCA Notice */}
              <div className="bg-blue-50 border-l-4 border-[#26C165] p-6 rounded-r-lg">
                <div className="flex items-start">
                  <AlertCircle size={24} className="text-[#26C165] mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-[#073042] mb-2">
                      FCA Authorisation Notice
                    </h3>
                    <p className="text-gray-700">
                      Our FCA authorisation is currently under review. We are committed to maintaining 
                      the highest standards of regulatory compliance and customer protection throughout this process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#073042] mb-6">
                Send us a Message
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle size={20} className="text-green-600 mr-3" />
                  <p className="text-green-800">Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User size={20} className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26C165] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail size={20} className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26C165] focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <div className="relative">
                    <Phone size={20} className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26C165] focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageCircle size={20} className="absolute left-3 top-3 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26C165] focus:border-transparent resize-none"
                      placeholder="Tell us about your loan requirements or any questions you have..."
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#26C165] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#26C165]/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              
              <div className="mt-6 text-sm text-gray-500">
                <p>
                  * Required fields. By submitting this form, you agree to our privacy policy 
                  and consent to us contacting you regarding your inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;