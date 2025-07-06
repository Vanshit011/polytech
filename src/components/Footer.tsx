import React from 'react';
import { Atom, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary-500 p-3 rounded-xl shadow-lg">
                <Atom size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold primary-text">POLYTECH</h3>
                <p className="text-gray-300 font-semibold">POLYMERS</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading manufacturer of high-quality reprocess plastic granules including HIPS, ABS, and PC. 
              We provide sustainable polymer solutions for various industrial applications with a commitment 
              to quality and environmental responsibility.
            </p>
            <div className="flex items-center text-gray-300 mb-4">
              <MapPin size={18} className="mr-3 text-primary-400 flex-shrink-0" />
              <span>
                Gundasara Industrial Area,<br />
                Gundasara, Gujarat, India
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary-400">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Phone size={18} className="mr-3 text-primary-400" />
                <div>
                  <p>+91 90239 54546</p>
                </div>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={18} className="mr-3 text-primary-400" />
                <span>info@polytechpolymers.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock size={18} className="mr-3 text-primary-400" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary-400">Our Products</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-primary-400 transition-colors cursor-pointer">HIPS Natural Grade</li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">HIPS Black Grade</li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">ABS Natural Grade</li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">ABS Black Grade</li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">ABS Colored Grades</li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">PC Clear Grade</li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">PC Tinted Grades</li>
              <li className="hover:text-primary-400 transition-colors cursor-pointer">Custom Compounds</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Polytech Polymers. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Quality Reprocess Plastic Granules</span>
              <span className="text-gray-400 text-sm">•</span>
              <span className="text-gray-400 text-sm">Sustainable Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;