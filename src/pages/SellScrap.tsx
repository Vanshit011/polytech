import React from 'react';
import { ShoppingCart, Phone, MessageCircle, CheckCircle, Recycle, Award, TrendingUp } from 'lucide-react';

const SellScrap: React.FC = () => {
  const scrapTypes = [
    {
      category: 'HIPS Scrap',
      types: ['TV Body Scrap', 'Refrigerator Parts', 'Electronic Housings'],
      description: 'High Impact Polystyrene scrap from various electronic appliances'
    },
    {
      category: 'ABS Scrap',
      types: ['Paint ABS', 'Honda ABS', 'Colour ABS', 'Black ABS', 'Automotive Parts'],
      description: 'Acrylonitrile Butadiene Styrene scrap from automotive and industrial sources'
    },
    {
      category: 'PC/ABS Scrap',
      types: ['PC/ABS Blend', 'Electronic Components', 'Industrial Parts'],
      description: 'Polycarbonate/ABS blend scrap from high-performance applications'
    },
    {
      category: 'PC Scrap',
      types: ['PC/PBT Scrap', 'PC Farra', 'Clear PC', 'Colored PC'],
      description: 'Polycarbonate scrap from various industrial and consumer applications'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Competitive Rates',
      description: 'We offer the best market rates for quality plastic scrap materials'
    },
    {
      icon: Award,
      title: 'Quality Assessment',
      description: 'Professional evaluation and grading of your scrap materials'
    },
    {
      icon: Recycle,
      title: 'Environmental Impact',
      description: 'Contribute to sustainable recycling and environmental conservation'
    },
    {
      icon: CheckCircle,
      title: 'Reliable Partnership',
      description: '25+ years of trusted relationships with scrap suppliers'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-primary-900 opacity-90"></div>
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg"
            alt="Plastic Scrap Collection"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-primary-500 bg-opacity-20 p-6 rounded-2xl backdrop-blur-sm">
                <ShoppingCart size={64} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sell Your Scrap to Us!</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed mb-8">
              We buy various types of high-quality plastic scrap materials at competitive market rates
            </p>
            <div className="bg-primary-500 text-white px-8 py-4 rounded-full text-xl font-bold mb-8 inline-block">
              Call Now: +91 98251 53084
            </div>
          </div>
        </div>
      </section>

      {/* Scrap Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Plastic Scrap <span className="primary-text">We Purchase</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We accept various types of engineering plastic scrap materials for reprocessing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scrapTypes.map((scrap, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Recycle size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{scrap.category}</h3>
                </div>
                <p className="text-gray-600 mb-4">{scrap.description}</p>
                <div className="space-y-2">
                  {scrap.types.map((type, typeIndex) => (
                    <div key={typeIndex} className="flex items-center">
                      <CheckCircle size={16} className="text-primary-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Sell <span className="primary-text">to Us</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us for reliable, professional, and environmentally responsible scrap disposal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="bg-primary-500 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="primary-text">Purchase Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple and transparent process for selling your plastic scrap
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Contact Us', desc: 'Call or WhatsApp with scrap details' },
              { step: '2', title: 'Assessment', desc: 'Professional evaluation of material quality' },
              { step: '3', title: 'Quote', desc: 'Competitive pricing based on market rates' },
              { step: '4', title: 'Collection', desc: 'Convenient pickup and payment' }
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

      {/* Contact Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Ready to Sell Your Scrap?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Contact our purchase manager for immediate assistance and competitive quotes
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-center">Purchase Manager Contact</h3>
              <div className="text-center space-y-6">
                <div className="bg-white bg-opacity-20 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-2">Scrap Purchase Department</h4>
                  <p className="text-primary-100 mb-4">For all scrap inquiries and quotes</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:+919825153084"
                      className="bg-white text-primary-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                    >
                      <Phone size={20} className="mr-2" />
                      +91 98251 53084
                    </a>
                    <a
                      href="https://wa.me/919825153084?text=Hello! I have plastic scrap to sell. Please provide details about your purchase rates and process."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg font-bold hover:bg-opacity-30 transition-colors inline-flex items-center justify-center"
                    >
                      <MessageCircle size={20} className="mr-2" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">What We Need to Know</h3>
              <div className="space-y-4">
                {[
                  'Type of plastic scrap (ABS, PC, HIPS, etc.)',
                  'Approximate quantity available',
                  'Current condition and quality',
                  'Location for pickup',
                  'Any contamination or mixed materials'
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur-sm">
                    <CheckCircle size={20} className="text-white mr-3 flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellScrap;