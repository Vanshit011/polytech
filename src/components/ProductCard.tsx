import React from 'react';
import { Atom, Award, Wrench, Package } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group overflow-hidden border border-gray-100"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4">
          <div className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {product.category}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {product.grade && (
            <div className="flex items-center text-sm text-gray-500">
              <Package size={14} className="mr-2 text-primary-500" />
              <span>{product.grade}</span>
            </div>
          )}
          {product.color && (
            <div className="flex items-center text-sm text-gray-500">
              <Wrench size={14} className="mr-2 text-primary-500" />
              <span>{product.color}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-primary-600 font-semibold">
            <Atom size={14} className="mr-2" />
            <span>ECO-FRIENDLY</span>
          </div>
          <button className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-all duration-300 font-semibold text-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;