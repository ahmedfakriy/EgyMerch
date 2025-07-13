import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  currentFilter?: string;
  onFilterChange?: (filter: string) => void;
  showFilters?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  onAddToCart, 
  currentFilter = 'all',
  onFilterChange,
  showFilters = false 
}) => {
  const categories = [
    'الكل',
    'تيشيرت',
    'هودي', 
    'أوفر سايز',
    'تيشيرت بكم',
    'سويتشيرت',
    'هودي أوفر سايز',
    'تيشيرت أطفال',
    'هودي أطفال',
    'أواني جاينا',
    'تابلوهات',
    'شنط توتي باج',
    'شنط ظهر',
    'شنطة يد',
    'محفظة'
  ];

  const getFilterTitle = () => {
    switch (currentFilter) {
      case 'new':
        return 'الأحدث وجولة 🆕';
      case 'bestseller':
        return 'الأكثر مبيعاً ⭐';
      case 'all':
        return 'جميع المنتجات';
      default:
        return `منتجات ${currentFilter}`;
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {!showFilters && (
          /* Featured Banner */
          <div className="mb-8" dir="rtl">
            <div className="bg-gradient-to-r from-teal-100 to-green-100 rounded-lg p-8 mb-6">
              <div className="flex items-center justify-between max-w-6xl mx-auto">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    إيجي ميرش
                  </h2>
                  <p className="text-3xl font-bold text-teal-600 mb-2">
                    تصميمات كل يوم
                  </p>
                  <p className="text-lg text-gray-600">
                    أفضل التصميمات العصرية للملابس الرياضية والكاجوال
                  </p>
                </div>
                <div className="flex-1 flex justify-center">
                  <img 
                    src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="إيجي ميرش" 
                    className="w-80 h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {showFilters && (
          <div className="mb-8" dir="rtl">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
              {getFilterTitle()}
            </h1>
            
            {/* Category Filter */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">تصفية حسب الفئة:</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => onFilterChange && onFilterChange(category === 'الكل' ? 'all' : category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      (category === 'الكل' && currentFilter === 'all') || 
                      (category !== 'الكل' && currentFilter === category)
                        ? 'bg-teal-600 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Offer Banner */}
        <div className="bg-orange-100 rounded-lg p-4 mb-8 text-center" dir="rtl">
          <p className="text-orange-800 font-medium">
            🎉 عرض المريد - شنط توتي باج + تيشيرت أطفال 🎉
          </p>
        </div>

        {/* Product Grid */}
        <div className="mb-6" dir="rtl">
          <p className="text-gray-600">
            عرض {products.length} منتج
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;