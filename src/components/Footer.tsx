import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#073042] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="https://sycamore.ng/images/logo.png" 
                alt="Sycamore Finance" 
                className="h-8 w-auto brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden ml-2 text-xl font-bold">
                Sycamore Finance
              </span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Empowering your journey with fair and accessible loans for individuals and businesses, 
              with a special focus on supporting African immigrants in the UK.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-[#26C165]" />
                <span className="text-sm text-gray-300">
                  2 NEW BAILEY, 6 STANLEY STREET, SALFORD, GREATER MANCHESTER, M3 5GS
                </span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-[#26C165]" />
                <span className="text-sm text-gray-300">hello@sycamorefinance.co.uk</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-[#26C165] transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#26C165] transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#26C165] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#26C165] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#26C165] transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#26C165] transition-colors">Terms of Use</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#26C165] transition-colors">Complaints Procedure</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#26C165] transition-colors">AML & KYC Statement</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300 mb-4 md:mb-0">
              <p>© 2024 Sycamore Finance. All rights reserved.</p>
              <p className="mt-1">Company No: 16181852 | FCA Authorisation in Review</p>
            </div>
            <div className="text-sm text-gray-300 text-center md:text-right">
              <p>Registered Office: 2 NEW BAILEY, 6 STANLEY STREET,</p>
              <p>SALFORD, GREATER MANCHESTER, M3 5GS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;