import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import logo from "../assets/Polytech Polymares New acrelic Logo-1.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-500 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              {/* Phone Link */}
              <a href="tel:+919825153084" className="flex items-center hover:underline">
                <Phone size={14} className="mr-2" />
                <span>+91 98251 53084</span>
              </a>

              {/* WhatsApp Link */}
              <a
                href="https://wa.me/919825153084"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center hover:underline"
              >
                <MessageCircle size={14} className="mr-2" />
                <span>WhatsApp Support Available</span>
              </a>
            </div>

            <div className="hidden md:block">
              <span className="font-semibold">
                Reprocess Plastic Granules Manufacturer • Since 2000
              </span>
            </div>
          </div>
        </div>
      </div>


      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            {/* <div className="bg-gradient-to-r from-polymer-500 to-plastic-500 p-3 rounded-xl shadow-lg animate-pulse-slow"> */}
            <img
              src={logo}
              alt="Polytech Logo"
              className="w-14 h-14 object-contain "
            />
            {/* </div> */}
            <div>
              <h1 className="text-2xl font-bold polymer-text">POLYTECH</h1>
              <p className="text-sm text-gray-600 font-semibold">POLYMERS</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${isActive(item.href)
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-3 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${isActive(item.href)
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;