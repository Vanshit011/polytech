import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { BsWhatsapp } from "react-icons/bs";
import logo from "../assets/logo-crop.png";
import fontimage from '../assets/logo-font-removebg-preview.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src={logo}
                  alt="Polytech Logo"
                  className="w-15 h-14 object-contain"
                />
                <img
                  src={fontimage}
                  alt="Polytech Polymers"
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
              Since 2000
            </div>
            <p className="mb-6 leading-relaxed">
              Leading manufacturer of high-quality reprocessed plastic granules including ABS Black, PC Black,
              HIPS Black, and PC/ABS Black. We provide sustainable polymer solutions for various industries with over 25 years of experience.
            </p>
            <div className="flex items-start mb-4">
              <MapPin size={18} className="mr-3 text-primary-500 flex-shrink-0" />
              <span>
                Atlas Park-2, Plot No. 6, 7, 8 & 9<br />
                Gudasara Road, Ribda<br />
                Taluka: Gondal, District: Rajkot<br />
                Gujarat, India – 360311
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary-500">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-primary-500" />
                <a href="tel:+919825153084" className="hover:text-primary-500 transition-colors">
                  +91 98251 53084 <br />
                  +91 90239 54546
                </a>
              </div>
              <div className="flex items-center">
                <BsWhatsapp size={18} className="mr-3 text-primary-500" />
                <a
                  href="https://wa.me/919825153084"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 transition-colors"
                >
                  +91 90239 54546
                </a>
              </div>
              {/* <div className="flex items-center">
                <Clock size={18} className="mr-3 text-primary-500" />
                <div>
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-red-500">Wednesday: CLOSED</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary-500">Our Products</h4>
            <ul className="space-y-3">
              <li className="hover:text-primary-500 transition-colors cursor-pointer">ABS Black</li>
              <li className="hover:text-primary-500 transition-colors cursor-pointer">PC Black</li>
              <li className="hover:text-primary-500 transition-colors cursor-pointer">HIPS Black</li>
              <li className="hover:text-primary-500 transition-colors cursor-pointer">PC/ABS Black</li>
              <li className="text-primary-500 text-sm">Other colors on request</li>
              <li className="text-primary-500 text-sm">Minimum Order: 500 KG</li>
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-300">
              <h5 className="text-lg font-bold mb-3 text-primary-500">Scrap Purchase</h5>
              <p className="text-sm mb-2">We buy plastic scrap:</p>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• HIPS Scrap (TV Body)</li>
                <li>• ABS Scrap (All types)</li>
                <li>• PC/ABS, PC/PBT, PC Scrap</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2025 Polytech Polymers. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <a
                href="https://wa.me/919499558009"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 text-sm hover:text-primary-500 transition"
              >
                <BsWhatsapp size={16} className="mr-1" />

                Developed by Vanshit Patel
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
