import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Cart from './components/Cart';
import AdminPanel from './components/AdminPanel';
import { Product, CartItem } from './types';
import { products } from './data/products';
import { useLocalStorage } from './hooks/useLocalStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [localProducts, setLocalProducts] = useLocalStorage('egymerch_products', products);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [lastAdded, setLastAdded] = useState<{ product: Product; isExisting: boolean } | null>(null);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        setLastAdded({ product, isExisting: true });
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        setLastAdded({ product, isExisting: false });
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  useEffect(() => {
    if (lastAdded) {
      if (lastAdded.isExisting) {
        toast.success("✅ زودنا الكمية في السلة!");
      } else {
        toast.success("✅ تم إضافة المنتج إلى السلة!");
      }
    }
  }, [lastAdded]);

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeItem = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const getFilteredProducts = () => {
    switch (currentFilter) {
      case 'new':
        return localProducts.filter(product => product.isNew);
      case 'bestseller':
        return localProducts.filter(product => product.isBestSeller);
      case 'all':
        return localProducts;
      default:
        return localProducts.filter(product => product.category === currentFilter);
    }
  };

  const handleNavigation = (page: string, filter?: string) => {
    setCurrentPage(page);
    if (filter) {
      setCurrentFilter(filter);
    }

    if (page === 'admin') {
      setIsAdminOpen(true);
      setCurrentPage('home');
    }
  };

  useEffect(() => {
    if (window.location.pathname === '/admin') {
      const password = prompt('أدخل كلمة المرور للدخول كأدمن:');
      if (password === '123456') {
        setIsAdminOpen(true);
        window.history.pushState({}, '', '/');
      } else {
        alert('كلمة المرور غير صحيحة');
        window.history.pushState({}, '', '/');
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
        onNavigation={handleNavigation}
        currentPage={currentPage}
      />

      {currentPage === 'home' && (
        <ProductGrid
          products={getFilteredProducts()}
          onAddToCart={addToCart}
          currentFilter={currentFilter}
          onFilterChange={setCurrentFilter}
        />
      )}

      {currentPage === 'products' && (
        <ProductGrid
          products={getFilteredProducts()}
          onAddToCart={addToCart}
          currentFilter={currentFilter}
          onFilterChange={setCurrentFilter}
          showFilters={true}
        />
      )}

      {currentPage === 'shipping' && (
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4" dir="rtl">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-bold text-center mb-8 text-teal-600">🚚 الشحن المجاني</h1>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-4 text-teal-700">شروط الشحن المجاني</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li>طلبات بقيمة 500 جنيه أو أكثر</li>
                    <li>داخل القاهرة والجيزة</li>
                    <li>التوصيل خلال 2-3 أيام عمل</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-4 text-orange-700">أسعار الشحن العادي</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex justify-between">
                      <span>داخل القاهرة والجيزة</span>
                      <span className="font-bold">30 ج</span>
                    </li>
                    <li className="flex justify-between">
                      <span>باقي المحافظات</span>
                      <span className="font-bold">50 ج</span>
                    </li>
                    <li className="flex justify-between">
                      <span>الوجه القبلي</span>
                      <span className="font-bold">60 ج</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <button
                  onClick={() => handleNavigation('home')}
                  className="bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                >
                  تسوق الآن واحصل على شحن مجاني
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'about' && (
        <div className="py-16 bg-white text-center text-gray-700" dir="rtl">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-teal-600">من نحن</h1>
            <p className="leading-relaxed">
              نحن EgyMerch، متجر متخصص في الملابس الرياضية والتيشيرتات العصرية. هدفنا هو تقديم أفضل تجربة تسوق إلكتروني للعملاء في مصر، مع التركيز على الجودة، والسرعة، وخدمة ما بعد البيع.
            </p>
          </div>
        </div>
      )}

      {currentPage === 'contact' && (
        <div className="py-16 bg-gray-50 text-center text-gray-700" dir="rtl">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-teal-600">📞 اتصل بنا</h1>
            <p className="mb-4">📱 01023099469</p>
            <p className="mb-4">✉️ EgyMerchinfo@egymerch.com</p>
            <p>🕐 من 10 صباحًا حتى 8 مساءً - طوال أيام الأسبوع</p>
          </div>
        </div>
      )}

      <Footer onNavigate={handleNavigation} />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />

      <AdminPanel
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        products={localProducts}
        onProductsUpdate={setLocalProducts}
      />

      <ToastContainer />
    </div>
  );
}

export default App;
