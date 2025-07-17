import React from 'react';
import { Atom, Recycle, Award, Users, Target, CheckCircle, MapPin } from 'lucide-react';
import company_picture from '../assets/20250716_1730_Enhanced Industrial Building Scene_remix_01k09hgw6ef7gvv9gdn7edf1e5.png'
import AboutUsImage from '../assets/20250717_1214_Eco-Focused Factory Discussion_simple_compose_01k0bhwwcqect9s1d0qq187qk7.png'
const About: React.FC = () => {
  const values = [
    {
      icon: Recycle,
      title: 'Sustainability',
      description: 'We prioritize environmental responsibility through efficient reprocessing of plastic materials.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Our commitment to quality ensures consistent specifications and reliable performance.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'We work closely with our clients to understand their needs and provide tailored solutions.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuously improving our processes to deliver superior quality reprocessed materials.'
    }
  ];

  const achievements = [
    '25+ Years of Industry Experience',
    'Advanced Quality Control Systems',
    'Eco-Friendly Production Processes',
    '250 Tons Monthly Processing Capacity',
    '3000+ Tons Annual Capacity',
    'Trusted by Leading Industries',
    'Expert Technical Support Team'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-primary-900 opacity-90"></div>
        <div className="absolute inset-0">
          <img
            src={AboutUsImage}
            alt="Factory Exterior View"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">

            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Polytech Polymers</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Leading manufacturer of reprocess plastic granules with a commitment to sustainability, quality, and innovation since 2000
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="primary-text">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since 2000, Polytech Polymers has been at the forefront of plastic recycling and reprocessing, 
                providing high-quality polymer solutions for various industrial applications. 
                Located in Ribda, Gujarat, we have established ourselves as a trusted name in the polymer industry.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our state-of-the-art manufacturing facility is equipped with modern machinery and quality control systems 
                to ensure every product meets the highest standards of quality and consistency. We specialize in 
                reprocessing various types of plastic materials into premium black granules with a monthly capacity of 250 tons.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We manufacture a comprehensive range of reprocessed plastic granules including ABS Black, PC Black, 
                HIPS Black,PC/PBT and PC/ABS Black granules to meet diverse industrial requirements. Our commitment to quality 
                and customer satisfaction has made us a preferred supplier for numerous industries.
              </p>
            </div>
            <div className="relative">
              <img
                src={company_picture}
                alt="Polytech Polymers Factory Exterior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="primary-text">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape our commitment to excellence in polymer manufacturing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-primary-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="primary-text">Achievements</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We take pride in our accomplishments and the trust our clients place in us. 
                Our commitment to quality and sustainability has earned us recognition in the industry.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle size={24} className="text-primary-500 mr-4 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Production Capacity</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-center mb-4">
                    <Award size={48} className="text-primary-500" />
                  </div>
                  <h4 className="text-lg font-bold text-center text-gray-900 mb-2">Monthly Capacity</h4>
                  <p className="text-gray-600 text-center">250 Tons per month processing capacity</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center justify-center mb-4">
                    <Recycle size={48} className="text-primary-500" />
                  </div>
                  <h4 className="text-lg font-bold text-center text-gray-900 mb-2">Annual Output</h4>
                  <p className="text-gray-600 text-center">3000+ Tons annual production capacity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="primary-text">Location</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategically located in the industrial area of Ribda, Gujarat
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Manufacturing Facility</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-lg mr-4 mt-1">
                      <MapPin size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">
                        Ribda Industrial Area,<br />
                        Ribda, Gujarat, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-lg mr-4 mt-1">
                      <Recycle size={20} className="text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Facility Features</h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Advanced reprocessing equipment</li>
                        <li>• Quality control laboratory</li>
                        <li>• Skilled technical workforce</li>
                        <li>• Large production capacity</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Advantages</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-primary-500 mr-3" />
                    Industrial hub of Gujarat
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-primary-500 mr-3" />
                    Excellent connectivity
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-primary-500 mr-3" />
                    Skilled workforce availability
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-primary-500 mr-3" />
                    Raw material accessibility
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-primary-500 mr-3" />
                    Government support for industries
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;