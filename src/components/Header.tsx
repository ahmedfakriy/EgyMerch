import React from 'react';
import { Search, ShoppingCart, Heart } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
  onNavigation: (page: string, filter?: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount, onCartClick, onNavigation, currentPage }) => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-teal-100 py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4 text-teal-700">
            <span>ENG:Ahmed fikry 🅂</span>
            <span>📱 بيع التيشيرت بتاعك مجاناً 🅂</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://flagcdn.com/w20/us.png" alt="US" className="w-5 h-3" />
            <span>دخول 🗲</span>
            <span>التسجيل 🅂</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Cart and Wishlist */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Heart className="w-6 h-6 text-gray-600 hover:text-teal-600 cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </div>
              <div className="relative cursor-pointer" onClick={onCartClick}>
                <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-teal-600" />
                <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث في المنتجات..."
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  dir="rtl"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-black text-white px-3 py-2 rounded-lg font-bold text-xl mr-3">
                EgyMerch 🅂
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="border-t py-3">
            <ul className="flex items-center justify-center gap-4 md:gap-8 text-gray-700 text-sm md:text-base" dir="rtl">
              <li
                className={`hover:text-teal-600 cursor-pointer font-medium ${currentPage === 'home' ? 'text-teal-600' : ''}`}
                onClick={() => onNavigation('home')}
              >
                الرئيسية
              </li>

              <li className="relative group hover:text-teal-600 cursor-pointer font-medium">
                الأقسام
                <div className="absolute top-full right-0 mt-2 bg-white border shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-screen max-w-md md:max-w-4xl overflow-x-auto">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6" dir="rtl">
                    <div>
                      <h3 className="font-bold text-teal-600 mb-3">ملابس</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="hover:text-teal-600 cursor-pointer" onClick={() => onNavigation('products', 'تيشيرت')}>تيشيرت</li>
                        <li className="hover:text-teal-600 cursor-pointer" onClick={() => onNavigation('products', 'أوفر سايز')}>أوفر سايز</li>
                        <li className="hover:text-teal-600 cursor-pointer" onClick={() => onNavigation('products', 'تيشيرت بكم')}>تيشيرت بكم</li>
                        <li className="hover:text-teal-600 cursor-pointer" onClick={() => onNavigation('products', 'هودي')}>هودي</li>
                        <li className="hover:text-teal-600 cursor-pointer" onClick={() => onNavigation('products', 'سويتشيرت')}>سويتشيرت</li>
                        <li className="hover:text-teal-600 cursor-pointer" onClick={() => onNavigation('products', 'هودي أوفر سايز')}>هودي أوفر سايز</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-teal-600 mb-3">ملابس أطفال</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="hover:text-teal-600 cursor-pointer" onClick={() => onNavigation('products', 'تيشيرت أطفال')}>تيشيرت أطفال</li>
                        <li className="hover:text-teal-600 cursor-pointer" onClick={() => onNavigation('products', 'هودي أطفال')}>هودي أطفال</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-teal-600 mb-3">المنزل</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="hover:text-teal-600 cursor-pointer" onClick={() => onNavigation('products', 'أواني جاينا')}>أواني جاينا</li>
                        <li className="hover:text-teal-600 cursor-pointer" onClick={() => onNavigation('products', 'تابلوهات')}>تابلوهات</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-teal-600 mb-3">شنط</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="hover:text-teal-600 cursor-pointer" onClick={() => onNavigation('products', 'شنط توتي باج')}>شنط توتي باج</li>
                        <li className="hover:text-teal-600 cursor-pointer" onClick={() => onNavigation('products', 'شنط ظهر')}>شنط ظهر</li>
                        <li className="hover:text-teal-600 cursor-pointer" onClick={() => onNavigation('products', 'شنطة يد')}>شنطة يد</li>
                        <li className="hover:text-teal-600 cursor-pointer" onClick={() => onNavigation('products', 'محفظة')}>محفظة</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="text-orange-500 hover:text-orange-600 cursor-pointer font-medium" onClick={() => onNavigation('products', 'new')}>
                الأحدث وجولة
              </li>

              <li className="text-red-500 hover:text-red-600 cursor-pointer font-medium" onClick={() => onNavigation('products', 'bestseller')}>
                الأكثر مبيعاً
              </li>

              <li className="hover:text-teal-600 cursor-pointer font-medium" onClick={() => onNavigation('products', 'all')}>
                تصفح الكل
              </li>

              <li className="hover:text-teal-600 cursor-pointer font-medium" onClick={() => onNavigation('shipping')}>
                عاوز شحن مجاني؟
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
