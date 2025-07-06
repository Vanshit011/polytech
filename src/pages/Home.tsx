import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Recycle, Award, Phone, ArrowRight, CheckCircle, Star, ShoppingCart, MessageCircle } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Recycle,
      title: 'ECO-FRIENDLY',
      description: 'Sustainable reprocessed plastic granules contributing to environmental conservation'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Premium quality products with consistent specifications and reliable performance'
    },
    {
      icon: Atom,
      title: 'Advanced Processing',
      description: 'State-of-the-art technology for superior quality reprocessed polymer granules'
    }
  ];

  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '250', label: 'Ton/Month Capacity' },
    { number: '3000+', label: 'Tons Annual Capacity' },
    { number: '24/7', label: 'Support Available' }
  ];

  const scrapTypes = [
    'HIPS Scrap (TV Body Scrap)',
    'ABS Scrap (Paint ABS, Honda ABS)',
    'Colour ABS, Black ABS',
    'PC/ABS Scrap, PC/PBT Scrap',
    'PC Scrap, PC Farra'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-primary-900 opacity-90"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg"
            alt="Plastic Granules Factory"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 animate-float">
            <Atom size={60} className="text-primary-300 opacity-30" />
          </div>
          <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
            <Recycle size={80} className="text-white opacity-30" />
          </div>
          <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '2s' }}>
            <Award size={50} className="text-primary-300 opacity-30" />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-primary-500 bg-opacity-20 p-6 rounded-2xl backdrop-blur-sm animate-pulse-slow">
                <Atom size={64} className="text-white animate-float" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block">POLYTECH</span>
              <span className="block text-3xl md:text-4xl text-primary-200">POLYMERS</span>
            </h1>
            
            <div className="bg-primary-500 text-white px-6 py-2 rounded-full text-lg font-bold mb-6 inline-block">
              Since 2000
            </div>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Reprocess Plastic Granules Manufacturer
            </p>
            
            <p className="text-lg mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              With over 25 years of experience in the polymer industry, we are a leading manufacturer of high-quality 
              reprocessed plastic granules. Our state-of-the-art facility in Gundasara processes 250 tons per month, 
              delivering consistent quality black granules including ABS, PC, HIPS, and PC/ABS blends for various 
              industrial applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                View Products
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <a
                href="tel:+919825153084"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone size={20} className="mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrap Purchase Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-xl backdrop-blur-sm">
                <ShoppingCart size={48} className="text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Sell Your Scrap to Us!</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              We buy various types of plastic scrap. If you want to sell, please call: 
              <a href="tel:+919825153084" className="font-bold text-white hover:text-primary-200 transition-colors ml-2">
                +91 98251 53084
              </a>
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">We Purchase:</h3>
              <div className="space-y-4">
                {scrapTypes.map((scrap, index) => (
                  <div key={index} className="flex items-center bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <CheckCircle size={20} className="text-white mr-3 flex-shrink-0" />
                    <span className="text-white font-medium">{scrap}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-center">Purchase Manager Contact</h3>
              <div className="text-center space-y-4">
                <div className="bg-white bg-opacity-20 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-2">Purchase Manager</h4>
                  <p className="text-primary-100 mb-4">For all scrap inquiries</p>
                  <a
                    href="tel:+919825153084"
                    className="bg-white text-primary-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
                  >
                    <Phone size={20} className="mr-2" />
                    +91 98251 53084
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="primary-text">Polytech Polymers</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing the highest quality reprocessed plastic granules 
              with sustainable solutions and reliable performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-primary-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="primary-text">Product Range</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Specialized in black granules for industrial applications
            </p>
            <p className="text-lg text-primary-200">
              We can supply other colors on request
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              'ABS Black',
              'PC Black',
              'HIPS Black',
              'PC/ABS Black'
            ].map((product, index) => (
              <div key={index} className="bg-primary-500 bg-opacity-20 border border-primary-500 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm">
                <div className="bg-primary-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Atom size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-white text-lg">{product}</h3>
                <p className="text-primary-200 text-sm mt-2">Minimum Order: 500 KG</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/products"
              className="bg-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
            >
              View All Products
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recycling Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="primary-text">Recycling Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced recycling technology for superior quality reprocessed granules
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Collection', desc: 'Sourcing quality plastic scrap' },
              { step: '2', title: 'Sorting', desc: 'Material segregation and cleaning' },
              { step: '3', title: 'Processing', desc: 'Advanced reprocessing technology' },
              { step: '4', title: 'Quality Check', desc: 'Rigorous testing and packaging' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for <span className="text-black">Quality Granules</span>?
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto">
            Contact us today for premium quality reprocessed plastic granules and expert consultation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+919825153084"
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <Phone size={20} className="mr-2" />
              +91 98251 53084
            </a>
            <a
              href="https://wa.me/919825153084?text=Hello! I'm interested in your plastic granules. Please provide more information."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <MessageCircle size={20} className="mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;