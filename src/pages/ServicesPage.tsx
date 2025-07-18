import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Building2, 
  TrendingUp, 
  Clock, 
  Shield, 
  CheckCircle,
  GraduationCap,
  Home,
  AlertCircle,
  Briefcase,
  BarChart,
  DollarSign,
  ArrowRight
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const individualLoans = [
    {
      icon: <GraduationCap size={32} className="text-[#26C165] mb-3" />,
      title: "Education Loans",
      description: "Fund your educational journey with flexible repayment options tailored to your career goals.",
      features: ["University tuition fees", "Professional courses", "Skill development programs"]
    },
    {
      icon: <Home size={32} className="text-[#26C165] mb-3" />,
      title: "Home Improvement Loans",
      description: "Transform your living space with our competitive home improvement financing solutions.",
      features: ["Kitchen & bathroom renovations", "Home extensions", "Energy efficiency upgrades"]
    },
    {
      icon: <AlertCircle size={32} className="text-[#26C165] mb-3" />,
      title: "Emergency Loans",
      description: "Quick access to funds when life presents unexpected challenges or opportunities.",
      features: ["Medical emergencies", "Urgent repairs", "Unexpected expenses"]
    }
  ];

  const businessLoans = [
    {
      icon: <Briefcase size={32} className="text-[#26C165] mb-3" />,
      title: "Startup Capital",
      description: "Launch your business with the funding you need to turn your entrepreneurial vision into reality.",
      features: ["Initial working capital", "Equipment and inventory", "Market entry funding"]
    },
    {
      icon: <BarChart size={32} className="text-[#26C165] mb-3" />,
      title: "Business Expansion",
      description: "Scale your operations and reach new markets with our growth-focused lending solutions.",
      features: ["New location funding", "Staff expansion", "Market expansion capital"]
    },
    {
      icon: <DollarSign size={32} className="text-[#26C165] mb-3" />,
      title: "Working Capital",
      description: "Maintain smooth operations and manage cash flow with flexible working capital solutions.",
      features: ["Seasonal fluctuations", "Inventory financing", "Operational expenses"]
    }
  ];

  const loanFeatures = [
    {
      icon: <TrendingUp size={24} className="text-[#26C165] mr-3" />,
      title: "Competitive Rates",
      description: "Fair and transparent pricing with no hidden fees or charges."
    },
    {
      icon: <Clock size={24} className="text-[#26C165] mr-3" />,
      title: "Flexible Terms",
      description: "Repayment schedules designed to fit your financial situation."
    },
    {
      icon: <Shield size={24} className="text-[#26C165] mr-3" />,
      title: "Transparent Process",
      description: "Clear communication throughout the entire loan process."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#073042] to-[#0a4458] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fair & Flexible Loan Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive financial products designed to support your personal and business aspirations 
              with transparent terms and competitive rates.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Loans Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <User size={48} className="text-[#26C165] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#073042] mb-6">
              Individual Loans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Personal financing solutions to help you achieve your life goals and overcome financial challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {individualLoans.map((loan, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center">
                  {loan.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#073042] mb-4 text-center">
                  {loan.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {loan.description}
                </p>
                <ul className="space-y-2">
                  {loan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle size={16} className="text-[#26C165] mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Loans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Building2 size={48} className="text-[#26C165] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#073042] mb-6">
              Business Loans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Capital solutions to fuel your business growth and operational needs with flexible terms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessLoans.map((loan, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex justify-center">
                  {loan.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#073042] mb-4 text-center">
                  {loan.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {loan.description}
                </p>
                <ul className="space-y-2">
                  {loan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle size={16} className="text-[#26C165] mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#073042] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Features of Sycamore Loans
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Every loan comes with our commitment to transparency, fairness, and exceptional customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanFeatures.map((feature, index) => (
              <div key={index} className="flex items-start p-6 rounded-lg bg-white/5 backdrop-blur-sm">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#073042] mb-6 text-center">
              Important Information
            </h3>
            <div className="space-y-4 text-gray-600">
              <div className="border-l-4 border-[#26C165] pl-4">
                <p className="font-semibold text-[#073042] mb-2">FCA Authorisation Status</p>
                <p>
                  Sycamore Finance is currently undergoing the FCA authorisation process. We are committed 
                  to maintaining the highest standards of regulatory compliance and customer protection.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-semibold text-[#073042] mb-2">Data Protection</p>
                <p>
                  Your personal and financial information is protected in accordance with UK GDPR and 
                  Data Protection Act 2018. We are registered with the Information Commissioner's Office (ICO).
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="font-semibold text-[#073042] mb-2">Lending Criteria</p>
                <p>
                  All loans are subject to affordability assessments and credit checks. Terms and conditions apply. 
                  We lend responsibly and encourage borrowers to only borrow what they can afford to repay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#073042] mb-6">
            Ready to Apply for a Loan?
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Contact our team today to discuss your loan requirements and start your application process.
          </p>
          <Link
            to="/contact"
            className="bg-[#26C165] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#26C165]/90 transition-all duration-200 inline-flex items-center group"
          >
            Get Started Now
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;