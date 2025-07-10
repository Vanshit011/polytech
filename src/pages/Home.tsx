// src/pages/Home.tsx (or .jsx)
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Atom, Recycle, Award, Phone, ArrowRight, CheckCircle, Star, ShoppingCart, MessageCircle, Target, Eye } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

import home_background from '../assets/20250710_1351_Colorful Granules Display_simple_compose_01jzspprb6ex0vyk2kwdgpmsg6.png';


const Home: React.FC = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  // States for scroll-triggered animations
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: expertiseRef, inView: expertiseInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: productsRef, inView: productsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: recyclingRef, inView: recyclingInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.2 });


  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Superior grade reprocessed materials with consistent specifications and reliable performance'
    },
    {
      icon: Recycle,
      title: 'Advanced Processing',
      description: 'State-of-the-art reprocessing technology ensuring optimal material properties and purity'
    },
    {
      icon: Atom,
      title: 'Engineering Grade',
      description: 'Specialized in all types of engineering plastic grades for demanding industrial applications'
    }
  ];

  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '3000+', label: 'Tons Annual Capacity' },
    { number: '100%', label: 'Quality Assured' },
    { number: '500+', label: 'Satisfied Clients' }
  ];

  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  const products = [
  {
    name: 'ABS Black',
    description: 'Premium black ABS granules with enhanced UV resistance',
    minOrder: '500 KG',
    features: ['UV Stable', 'High Impact', 'Superior Finish'],
    image: require('../assets/20250707_1907_ABS Black Granules_simple_compose_01jzjhjhceeq3v53bkzccneyvz.png')
  },
  {
    name: 'PC Black',
    description: 'High-performance polycarbonate with exceptional strength',
    minOrder: '500 KG',
    features: ['Temperature Resistant', 'Impact Resistant', 'Dimensional Stability'],
    image: require('../assets/20250707_1907_ABS Black Granules_simple_compose_01jzjhjhcfe9ct9k3qt8vxfd1a.png')
  },
  {
    name: 'HIPS Black',
    description: 'High-quality HIPS for automotive and electronics',
    minOrder: '1000 KG',
    features: ['Easy Processing', 'Good Impact', 'Heat Resistant'],
    image: require('../assets/20250707_1911_Black Granules Display_simple_compose_01jzjhsz2kedt91zss1q3de3mr.png')
  },
  {
    name: 'PC/ABS Black',
    description: 'Premium blend combining PC and ABS properties',
    minOrder: '500 KG',
    features: ['Best of Both', 'Excellent Processing', 'Superior Performance'],
    image: require('../assets/20250707_1918_Granules Manufacturing Backdrop_simple_compose_01jzjj52kdfjx9120xy3jgc0gt.png')
  }
];


  // Auto-scroll every 3 seconds for products
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Increased to 4 seconds for better readability
    return () => clearInterval(interval);
  }, [products.length]);


  // Animated number counting for stats
  useEffect(() => {
    if (statsInView) { // Only animate when the stats section is in view
      const intervals = stats.map((stat, index) => {
        const numericValue = parseFloat(stat.number);
        const step = Math.ceil(numericValue / 80);

        return setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < numericValue) {
              newCounts[index] += step;
              if (newCounts[index] > numericValue) {
                newCounts[index] = numericValue;
              }
            } else {
              clearInterval(intervals[index]);
            }
            return newCounts;
          });
        }, 20);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [stats, statsInView]);


  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-black text-white overflow-hidden">
        {/* Overlay & Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-primary-900 opacity-90"></div>
        <div className="absolute inset-0">
          <img
            src={home_background}
            alt="Plastic Granules Factory"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
          <div className="text-center">
            {/* Title - split for left/right animation */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span
                className={`block transition-all duration-1000 ${heroInView ? 'opacity-100 animate-fade-in-left' : 'opacity-0'}`}
                style={{ animationDelay: '0.2s' }}
              >
                POLYTECH
              </span>
              <span
                className={`block text-3xl md:text-4xl text-primary-200 transition-all duration-1000 ${heroInView ? 'opacity-100 animate-fade-in-right' : 'opacity-0'}`}
                style={{ animationDelay: '0.4s' }}
              >
                POLYMERS
              </span>
            </h1>

            <div
              className={`bg-primary-500 text-white px-6 py-2 rounded-full text-lg font-bold mb-8 inline-block shadow-md transition-all duration-1000 ${heroInView ? 'opacity-100 animate-fade-in-down' : 'opacity-0'}`}
              style={{ animationDelay: '0.6s' }}
            >
              Since 2000
            </div>

            <p
              className={`text-xl md:text-2xl mb-6 text-primary-100 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${heroInView ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.8s' }}
            >
              Reprocessed Plastic Granules Manufacturer
            </p>

            <p
              className={`text-lg mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${heroInView ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '1s' }}
            >
              Established in 2000, Polytech Polymers stands as a premier manufacturer specializing in all types of
              engineering plastic grade materials. With over two decades of expertise in polymer reprocessing, we have
              built a reputation for delivering superior quality reprocessed plastic granules that meet the demanding
              requirements of modern industrial applications. Our advanced manufacturing facility in Gundasara combines
              cutting-edge technology with skilled craftsmanship to produce consistent, reliable polymer solutions.
            </p>

            {/* Buttons - left and right entry */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/products"
                className={`bg-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center
                  ${heroInView ? 'opacity-100 animate-fade-in-left' : 'opacity-0'}`}
                style={{ animationDelay: '1.2s' }}
              >
                View Products
                <ArrowRight size={20} className="ml-2" />
              </Link>

              <a
                href="tel:+919023954546"
                className={`bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center
                  ${heroInView ? 'opacity-100 animate-fade-in-right' : 'opacity-0'}`}
                style={{ animationDelay: '1.4s' }}
              >
                <Phone size={20} className="mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const suffix = stat.number.replace(/[0-9+.]/g, '').trim();
              const hasPlus = stat.number.includes('+');

              // Alternate left/right entry for stats
              const animationClass = index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right';

              return (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 ${statsInView ? `opacity-100 ${animationClass}` : 'opacity-0'}`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                    {counts[index]}
                    {hasPlus && '+'} {suffix}
                  </div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 ${featuresInView ? 'opacity-100 animate-fade-in-down' : 'opacity-0'}`}
            >
              Why Choose <span className="text-primary-500">Polytech Polymers</span>?
            </h2>
            <p
              className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 ${featuresInView ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            >
              Leading manufacturer of engineering plastic grades with unmatched expertise,
              advanced technology, and commitment to excellence in polymer reprocessing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${featuresInView ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.3 + 0.1 * index}s` }}
              >
                <div className="bg-primary-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Why Choose Us Content - Expertise */}
          <div ref={expertiseRef} className={`mt-16 bg-white rounded-2xl shadow-lg p-8 transition-all duration-700 ${expertiseInView ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.6s' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Our <span className="text-primary-500">Expertise</span>
                </h3>
                <div className="space-y-4">
                  {[
                    'Specialized in all engineering plastic grades',
                    'Advanced quality control and testing facilities',
                    'Consistent material properties and specifications',
                    'Custom color matching and formulation',
                    'Technical support and application guidance',
                    'Reliable supply chain and delivery schedules'
                  ].map((item, index) => (
                    <div key={index}
                      className={`flex items-center transition-all duration-700 ${expertiseInView ? 'opacity-100 animate-fade-in-left' : 'opacity-0'}`}
                      style={{ animationDelay: `${0.7 + 0.1 * index}s` }}
                    >
                      <CheckCircle size={20} className="text-primary-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vision & Mission */}
              <div className="space-y-8">
                <div
                  className={`bg-primary-50 rounded-xl p-6 border border-primary-200 transition-all duration-700 ${expertiseInView ? 'opacity-100 animate-fade-in-right' : 'opacity-0'}`}
                  style={{ animationDelay: '0.8s' }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <Eye size={24} className="text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">Our Vision</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To be the leading manufacturer of sustainable, high-quality reprocessed plastic granules,
                    setting industry standards for excellence while contributing to environmental conservation
                    through innovative recycling solutions.
                  </p>
                </div>

                <div
                  className={`bg-gray-50 rounded-xl p-6 border border-gray-200 transition-all duration-700 ${expertiseInView ? 'opacity-100 animate-fade-in-right' : 'opacity-0'}`}
                  style={{ animationDelay: '0.9s' }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-700 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <Target size={24} className="text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">Our Mission</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To deliver superior engineering plastic grades through advanced reprocessing technology,
                    exceptional customer service, and continuous innovation, while maintaining our commitment
                    to quality, sustainability, and long-term partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-Scrolling Products Preview */}
    {/*Product Showcase Section (with background images per product) */}
<section ref={productsRef} className="py-20 bg-black text-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${productsInView ? 'opacity-100 animate-fade-in-down' : 'opacity-0'}`}>
        Our <span className="text-primary-500">Product Range</span>
      </h2>
      <p className={`text-xl text-gray-300 max-w-3xl mx-auto mb-8 transition-all duration-700 ${productsInView ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
        Specialized in black granules for industrial applications
      </p>
      <p className={`text-lg text-primary-200 transition-all duration-700 ${productsInView ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
        We can supply other colors on request
      </p>
    </div>

    <div className={`relative mb-12 transition-all duration-700 ${productsInView ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
      <div className="relative rounded-2xl overflow-hidden border border-primary-500 backdrop-blur-sm shadow-xl">
        <img
          src={products[currentProductIndex].image}
          alt={products[currentProductIndex].name}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative bg-primary-500 bg-opacity-20 p-8 text-center">
          <div className="bg-primary-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto animate-pulse-light">
            <Atom size={32} className="text-white" />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            {products[currentProductIndex].name}
          </h3>
          <p className="text-xl text-primary-100 mb-6">
            {products[currentProductIndex].description}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {products[currentProductIndex].features.map((feature, index) => (
              <span
                key={index}
                className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-semibold"
              >
                {feature}
              </span>
            ))}
          </div>
          <p className="text-primary-200 font-semibold">
            Minimum Order: {products[currentProductIndex].minOrder}
          </p>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProductIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentProductIndex
                ? 'bg-primary-500 scale-125'
                : 'bg-white bg-opacity-30 hover:bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  </div>
</section>



      {/* Recycling Process Section */}
      <section ref={recyclingRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 ${recyclingInView ? 'opacity-100 animate-fade-in-down' : 'opacity-0'}`}>
              Our <span className="text-primary-500">Recycling Process</span>
            </h2>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 ${recyclingInView ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              Advanced recycling technology for superior quality reprocessed granules
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Collection', desc: 'Sourcing quality plastic scrap' },
              { step: '2', title: 'Sorting', desc: 'Material segregation and cleaning' },
              { step: '3', title: 'Processing', desc: 'Advanced reprocessing technology' },
              { step: '4', title: 'Quality Check', desc: 'Rigorous testing and packaging' }
            ].map((process, index) => {
              const animationClass = index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'; // Alternate
              return (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 ${recyclingInView ? `opacity-100 ${animationClass}` : 'opacity-0'}`}
                  style={{ animationDelay: `${0.3 + 0.1 * index}s` }}
                >
                  <div className="bg-primary-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto text-white font-bold text-xl">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-primary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${ctaInView ? 'opacity-100 animate-fade-in-down' : 'opacity-0'}`}>
            Ready for <span className="text-black">Quality Granules</span>?
          </h2>
          <p className={`text-xl text-primary-100 mb-12 max-w-3xl mx-auto transition-all duration-700 ${ctaInView ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Contact us today for premium quality reprocessed plastic granules and expert consultation
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+919825153084"
              className={`bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center
                ${ctaInView ? 'opacity-100 animate-fade-in-left' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}
            >
              <Phone size={20} className="mr-2" />
              +91 98251 53084
            </a>
            <a
              href="https://wa.me/919825153084?text=Hello! I'm interested in your plastic granules. Please provide more information."
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center
                ${ctaInView ? 'opacity-100 animate-fade-in-right' : 'opacity-0'}`}
              style={{ animationDelay: '0.5s' }}
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