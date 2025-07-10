import React from 'react';
import { X, Atom, Award, Wrench, Package, CheckCircle, MessageCircle } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const getWhatsAppMessage = (productName: string) => {
    const minOrder = productName.includes('HIPS') ? '1000 KG' : '500 KG';
    return `Hello! I'm interested in getting a quote for ${productName}. Please provide pricing and availability details. Minimum order: ${minOrder}.`;
  };

  const getWhatsAppUrl = (productName: string) => {
    const message = encodeURIComponent(getWhatsAppMessage(productName));
    return `https://wa.me/919825153084?text=${message}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
              <p className="text-primary-600 font-semibold mt-1">{product.category}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image */}
              <div className="space-y-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                <div className="bg-primary-50 border border-primary-200 rounded-xl p-4">
                  <div className="flex items-center text-primary-700 font-semibold">
                    <Atom size={20} className="mr-2" />
                    <span>ECO-FRIENDLY REPROCESSED MATERIAL</span>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <div className="text-yellow-800 font-semibold text-center">
                    Minimum Order: {product.name.includes('HIPS') ? '1000 KG' : '500 KG'}
                  </div>
                  <div className="text-yellow-700 text-sm text-center mt-1">
                    Other colors available on request
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.grade && (
                    <div className="bg-primary-50 border border-primary-200 rounded-lg p-3">
                      <div className="flex items-center text-primary-700">
                        <Package size={16} className="mr-2" />
                        <span className="font-semibold">Grade: {product.grade}</span>
                      </div>
                    </div>
                  )}
                  {product.color && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center text-gray-700">
                        <Wrench size={16} className="mr-2" />
                        <span className="font-semibold">Color: {product.color}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Features */}
                {product.features.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Key Features</h3>
                    <div className="space-y-2">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-gray-700">
                          <CheckCircle size={16} className="mr-3 text-primary-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Specifications */}
            {product.specifications.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Applications</h3>
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.applications.map((application, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-blue-800 font-medium">{application}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Properties */}
            {product.properties && product.properties.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Material Properties</h3>
                <div className="bg-primary-50 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.properties.map((property, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-primary-800 font-medium">{property}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Contact CTA */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="bg-primary-500 rounded-xl p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-2">Interested in this product?</h3>
                <p className="mb-4 opacity-90">Contact us for pricing and availability</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:+919825153084"
                    className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Call: +91 98251 53084
                  </a>
                  <a
                    href={getWhatsAppUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-colors flex items-center justify-center"
                  >
                    <MessageCircle size={16} className="mr-2" />
                    Get Quote on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;