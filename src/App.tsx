import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Cart from './components/Cart';
import AdminPanel from './components/AdminPanel';
import { Product, CartItem } from './types';
import { products } from './data/products';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [localProducts, setLocalProducts] = useLocalStorage('egymerch_products', products);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<string>('home');

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

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

  // ✅ تحقق من /admin واطلب كلمة السر
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
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      طلبات بقيمة 500 جنيه أو أكثر
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      داخل القاهرة والجيزة
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      التوصيل خلال 2-3 أيام عمل
                    </li>
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
      
      <Footer />
      
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
    </div>
  );
}

export default App;
