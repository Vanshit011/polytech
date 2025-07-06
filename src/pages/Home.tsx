import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Recycle, Award, Phone, ArrowRight, CheckCircle, Star } from 'lucide-react';

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
    { number: '1000+', label: 'Tons Processed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
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
              <div className="bg-white bg-opacity-20 p-6 rounded-2xl backdrop-blur-sm animate-pulse-slow">
                <Atom size={64} className="text-white animate-float" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block">POLYTECH</span>
              <span className="block text-3xl md:text-4xl text-primary-200">POLYMERS</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Reprocess Plastic Granules Manufacturer
            </p>
            
            <p className="text-lg mb-12 text-primary-200 max-w-2xl mx-auto">
              Leading manufacturer of high-quality reprocessed plastic granules including HIPS, ABS, and PC 
              for sustainable industrial applications
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                View Products
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <a
                href="tel:+919023954546"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="primary-text">Product Range</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of reprocessed plastic granules for various industrial applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              'HIPS Natural Grade',
              'HIPS Black Grade',
              'ABS Natural Grade',
              'ABS Black Grade',
              'ABS Colored Grades',
              'PC Clear Grade',
              'PC Tinted Grades',
              'Custom Compounds'
            ].map((product, index) => (
              <div key={index} className="bg-primary-50 border border-primary-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="bg-primary-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Atom size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900">{product}</h3>
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

      {/* Quality Assurance */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Quality Assurance</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Every product undergoes rigorous testing and quality checks to ensure consistent performance and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Quality Tested Products',
              'Consistent Specifications',
              'Environmental Compliance',
              'Performance Verified'
            ].map((quality, index) => (
              <div key={index} className="bg-white bg-opacity-20 rounded-xl p-6 text-center backdrop-blur-sm">
                <CheckCircle size={48} className="text-white mx-auto mb-4" />
                <h3 className="font-bold text-lg">{quality}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for <span className="primary-text">Sustainable Solutions</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Contact us today for premium quality reprocessed plastic granules and expert consultation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+919023954546"
              className="bg-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <Phone size={20} className="mr-2" />
              +91 90239 54546
            </a>
            <a
              href="mailto:info@polytechpolymers.com"
              className="bg-transparent border-2 border-primary-500 text-primary-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;