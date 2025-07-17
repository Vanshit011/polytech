import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Atom, CheckCircle, MessageCircle } from 'lucide-react';
import ContactUs from '../assets/20250717_1144_Friendly Customer Support_simple_compose_01k0bg6pz3fwzteba7cy56d6jx.png'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `Hello! New inquiry from website:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/919023954546?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // ✅ Reset form data
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });

    // Show submitted alert
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-16 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-primary-900 opacity-90"></div>
          <img
            src={ContactUs}
            alt="Contact Us"
            className="w-full h-full object-cover object-middle opacity-30"
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              {/* <div className="bg-primary-500 bg-opacity-20 p-4 rounded-xl backdrop-blur-sm shadow-xl">
                <Phone size={48} className="text-white" />
              </div> */}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Get in touch with our polymer experts for consultation and product information
            </p>
          </div>
        </div>
      </section>


      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a <span className="primary-text">Message</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible via WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={10}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Tell us about your polymer requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center disabled:opacity-50"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} className="mr-2" />
                      Sent to WhatsApp!
                    </>
                  ) : (
                    <>
                      <MessageCircle size={20} className="mr-2" />
                      Send via WhatsApp
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in <span className="primary-text">Touch</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Reach out to us through any of the following channels. We're here to help with all your polymer needs.
              </p>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-primary-500 p-3 rounded-xl mr-4 flex-shrink-0">
                    {/* <div className="bg-primary-500 p-3 rounded-xl mr-4 flex-shrink-0"> */}
                    <MapPin size={24} className="text-white" />
                    {/* </div> */}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                    <span>
                      Atlas Park-2, Plot No. 6, 7, 8 & 9<br />
                      Gudasara Road, Ribda<br />
                      Taluka: Gondal, District: Rajkot<br />
                      Gujarat, India – 360311
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-primary-500 p-3 rounded-xl mr-4 flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Number</h3>
                    <div className="space-y-2">
                      <a href="tel:+919825153084" className="block text-primary-600 hover:text-primary-700 font-semibold">
                        +91 90239 54546
                      </a>
                    </div>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-primary-500 p-3 rounded-xl mr-4 flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Address</h3>
                    <a href="mailto:polytechpolymers1981@gmail.com" className="text-primary-600 hover:text-primary-700 font-semibold">
                      polytechpolymers1981@gmail.com
                    </a>
                  </div>
                </div>
                {/* Business Hours */}
                <div className="flex items-start">
                  <div className="bg-primary-500 p-3 rounded-xl mr-4 flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                    <div className="text-gray-600">
                      <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Wednesday: CLOSED</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-5 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Contact</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+919023954546"
                    className="flex-1 bg-primary-500 text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-primary-600 transition-all duration-300"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919023954546?text=Hello! I'm interested in your plastic granules. Please provide more information."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-transparent border-2 border-primary-500 text-primary-600 px-6 py-3 rounded-xl font-semibold text-center hover:bg-primary-500 hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    <MessageCircle size={16} className="mr-2" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Us on <span className="primary-text">Map</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Gundasara Industrial Area for easy accessibility
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ribda Industrial Area</h3>
                <p className="text-gray-600 mb-4">Ribda, Gujarat, India</p>
                <a
                  href="https://maps.app.goo.gl/Rs19Pih8B86bTzGQ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="primary-text">Polytech Polymers</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to providing the best polymer solutions with unmatched quality and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Atom,
                title: 'Expert Consultation',
                description: 'Professional guidance for all your polymer needs'
              },
              {
                icon: CheckCircle,
                title: 'Quality Guarantee',
                description: 'Consistent quality and reliable performance'
              },
              {
                icon: Phone,
                title: 'Quick Response',
                description: 'Fast response to all inquiries and service requests'
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp Support',
                description: 'Instant communication via WhatsApp for quick assistance'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-primary-500 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;