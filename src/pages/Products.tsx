import React, { useState } from 'react';
import { Search, Filter, Atom, MessageCircle } from 'lucide-react';
import { productCategories } from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { Product } from '../types';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const allProducts = productCategories.flatMap(category => category.products);

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ['all', ...new Set(allProducts.map(product => product.category))];

  const getWhatsAppMessage = (productName: string) => {
    return `Hello! I'm interested in getting a quote for ${productName}. Please provide pricing and availability details. Minimum order: 500 KG.`;
  };

  const getWhatsAppUrl = (productName: string) => {
    const message = encodeURIComponent(getWhatsAppMessage(productName));
    return `https://wa.me/919825153084?text=${message}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-16 overflow-hidden">
        {/* Background gradient + image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-primary-900 opacity-90"></div>
          <img
            src="https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg"
            alt="Plastic Granules"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary-500 bg-opacity-20 p-4 rounded-xl backdrop-blur-sm shadow-xl">
                <Atom size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-4">
              Comprehensive range of reprocessed black plastic granules with consistent quality and performance
            </p>
            <p className="text-lg text-primary-200">
              We can supply other colors on request • Minimum Order: 500 KG
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center">

            {/* Search */}
            <div className="relative flex-1 max-w-xl w-full">
              <Search size={24} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter size={24} className="text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-base"
              >
                <option value="all">All Categories</option>
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-6">
                <Search size={48} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === 'all' ? 'All Products' : selectedCategory}
                  <span className="text-primary-600 ml-2">({filteredProducts.length})</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {product.category}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {product.name}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="mb-4">
                        <div className="text-sm text-gray-500 mb-2">
                          <span className="font-semibold">Minimum Order:</span> 500 KG
                        </div>
                        <div className="text-sm text-primary-600 font-semibold">
                          Other colors available on request
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300 font-semibold text-sm"
                        >
                          View Details
                        </button>
                        <a
                          href={getWhatsAppUrl(product.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-all duration-300 font-semibold text-sm flex items-center justify-center"
                        >
                          <MessageCircle size={16} className="mr-2" />
                          Get Quote
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Product <span className="primary-text">Categories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of reprocessed black plastic granule categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map(category => (
              <div key={category.id} className="bg-primary-50 border border-primary-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="bg-primary-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Atom size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="text-sm text-primary-600 font-semibold">
                  {category.products.length} Product{category.products.length > 1 ? 's' : ''} Available
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Products;