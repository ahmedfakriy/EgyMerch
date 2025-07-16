import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.isBestSeller && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-md">
            ⭐ أفضل مبيعاً
          </div>
        )}
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md">
            جديد
          </div>
        )}
      </div>

      <div className="p-4" dir="rtl">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-teal-600">
              {product.price} ج
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice} ج
              </span>
            )}
          </div>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors duration-300 font-medium"
        >
          إضافة للسلة
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
