import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Star, 
  Building2, 
  User,
  ArrowRight,
  Globe,
  Target,
  Award
} from 'lucide-react';

const HomePage: React.FC = () => {
  const commitments = [
    {
      icon: <Target size={48} className="text-[#26C165] mb-4" />,
      title: "Tailored Solutions",
      description: "Customized loan products designed to meet your unique financial needs and circumstances."
    },
    {
      icon: <Shield size={48} className="text-[#26C165] mb-4" />,
      title: "Transparent Processes",
      description: "Clear, honest communication with no hidden fees or unexpected surprises throughout your journey."
    },
    {
      icon: <TrendingUp size={48} className="text-[#26C165] mb-4" />,
      title: "Competitive Rates",
      description: "Fair and competitive interest rates that make financial growth accessible to everyone."
    },
    {
      icon: <Heart size={48} className="text-[#26C165] mb-4" />,
      title: "Customer-Centric Approach",
      description: "Your success is our priority. We're here to support you every step of the way."
    }
  ];

  const services = [
    {
      icon: <User size={32} className="text-[#26C165] mb-3" />,
      title: "Individual Loans",
      description: "Personal loans for education, home improvements, emergencies, and life's important moments.",
      features: ["Flexible repayment terms", "Quick approval process", "Competitive rates"]
    },
    {
      icon: <Building2 size={32} className="text-[#26C165] mb-3" />,
      title: "Business Loans",
      description: "Capital solutions for startups, business expansion, and operational needs.",
      features: ["Tailored business solutions", "Growth-focused lending", "Expert support"]
    }
  ];

  const whyChoose = [
    {
      icon: <Users size={24} className="text-[#26C165] mr-3" />,
      title: "Understanding Your Needs",
      description: "We understand the unique financial challenges faced by African immigrants in the UK."
    },
    {
      icon: <Globe size={24} className="text-[#26C165] mr-3" />,
      title: "Future-Focused",
      description: "Supporting your long-term financial goals with innovative lending solutions."
    },
    {
      icon: <Award size={24} className="text-[#26C165] mr-3" />,
      title: "UK Registered",
      description: "Fully registered UK company with FCA authorisation under review for your peace of mind."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#073042] via-[#073042] to-[#0a4458] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Empowering Your Journey: 
                <span className="text-[#26C165]"> Fair and Accessible Loans</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
                Committed to supporting African immigrants in the UK with tailored financial solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-[#26C165] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#26C165]/90 transition-all duration-200 flex items-center justify-center group"
                >
                  Get Started
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#073042] transition-all duration-200 flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="grid grid-cols-2 gap-6 max-w-md">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Shield size={48} className="text-[#26C165] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Secure & Trusted</h3>
                  <p className="text-sm text-gray-300">FCA regulated processes</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <TrendingUp size={48} className="text-[#26C165] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Growth Focused</h3>
                  <p className="text-sm text-gray-300">Supporting your success</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Users size={48} className="text-[#26C165] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Community First</h3>
                  <p className="text-sm text-gray-300">Understanding your needs</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <Heart size={48} className="text-[#26C165] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Fair & Accessible</h3>
                  <p className="text-sm text-gray-300">Inclusive lending solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#073042] mb-6">
              About Sycamore Finance
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Sycamore Finance is a UK-registered financial services company dedicated to providing 
                fair and accessible lending solutions. We specialize in supporting African immigrants 
                in the UK with tailored financial products designed to meet their unique needs.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#26C165] p-6 rounded-r-lg">
                <p className="text-[#073042] font-medium">
                  <strong>Important Notice:</strong> Our FCA authorisation is currently under review. 
                  We are committed to maintaining the highest standards of regulatory compliance and 
                  customer protection throughout this process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#073042] mb-6">
              Our Commitments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're dedicated to providing exceptional financial services built on trust, 
              transparency, and genuine care for our customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((commitment, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center">
                  {commitment.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#073042] mb-3">
                  {commitment.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#073042] mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive loan solutions designed to support your personal and business goals.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  {service.icon}
                  <h3 className="text-2xl font-semibold text-[#073042] ml-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle size={16} className="text-[#26C165] mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="text-[#26C165] font-semibold hover:text-[#26C165]/80 transition-colors duration-200 flex items-center"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Sycamore */}
      <section className="py-20 bg-[#073042] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Sycamore Finance?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We're more than just a lender – we're your partner in achieving financial success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="flex items-start p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#073042] mb-6">
            Ready to Start Your Financial Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Get in touch with our team today to discuss your loan requirements and 
            discover how we can help you achieve your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#26C165] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#26C165]/90 transition-all duration-200 flex items-center justify-center group"
            >
              Contact Us Today
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-[#073042] text-[#073042] px-8 py-4 rounded-lg font-semibold hover:bg-[#073042] hover:text-white transition-all duration-200 flex items-center justify-center"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;