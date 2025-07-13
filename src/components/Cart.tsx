import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem, CheckoutInfo } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem
}) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutInfo, setCheckoutInfo] = useState<CheckoutInfo>({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'vodafone'
  });

  const total = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    setShowCheckout(true);
  };

  const handleSubmitOrder = () => {
    alert(`تم إرسال طلبك بنجاح! 
    الاسم: ${checkoutInfo.name}
    الهاتف: ${checkoutInfo.phone}
    العنوان: ${checkoutInfo.address}
    طريقة الدفع: ${checkoutInfo.paymentMethod === 'vodafone' ? 'فودافون كاش: 01023099469' : 'حساب بنكي'}
    المجموع: ${total} جنيه`);
    
    // Reset cart and close
    cartItems.forEach(item => onRemoveItem(item.product.id));
    setShowCheckout(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800" dir="rtl">سلة التسوق</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        {!showCheckout ? (
          <>
            {/* Cart Items */}
            <div className="flex-1 p-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500" dir="rtl">سلة التسوق فارغة</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="flex items-center gap-4 p-4 border rounded-lg" dir="rtl">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-800">{item.product.name}</h3>
                        <p className="text-teal-600 font-bold">{item.product.price} ج</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-medium">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t p-4">
                <div className="flex justify-between items-center mb-4" dir="rtl">
                  <span className="text-lg font-bold">المجموع:</span>
                  <span className="text-xl font-bold text-teal-600">{total} ج</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                >
                  إتمام الطلب
                </button>
              </div>
            )}
          </>
        ) : (
          /* Checkout Form */
          <div className="p-4">
            <h3 className="text-xl font-bold mb-6 text-center" dir="rtl">إتمام الطلب</h3>
            
            <div className="space-y-4" dir="rtl">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">الاسم</label>
                <input
                  type="text"
                  value={checkoutInfo.name}
                  onChange={(e) => setCheckoutInfo({...checkoutInfo, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  value={checkoutInfo.phone}
                  onChange={(e) => setCheckoutInfo({...checkoutInfo, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">العنوان</label>
                <textarea
                  value={checkoutInfo.address}
                  onChange={(e) => setCheckoutInfo({...checkoutInfo, address: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">طريقة الدفع</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="vodafone"
                      checked={checkoutInfo.paymentMethod === 'vodafone'}
                      onChange={(e) => setCheckoutInfo({...checkoutInfo, paymentMethod: e.target.value as 'vodafone' | 'bank'})}
                      className="mr-2"
                    />
                    <span>فودافون كاش: 01023099469</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={checkoutInfo.paymentMethod === 'bank'}
                      onChange={(e) => setCheckoutInfo({...checkoutInfo, paymentMethod: e.target.value as 'vodafone' | 'bank'})}
                      className="mr-2"
                    />
                    <span>حساب بنكي</span>
                  </label>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold">المجموع:</span>
                  <span className="text-xl font-bold text-teal-600">{total} ج</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowCheckout(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-400 transition-colors"
                >
                  رجوع
                </button>
                <button
                  onClick={handleSubmitOrder}
                  className="flex-1 bg-teal-600 text-white py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
                  disabled={!checkoutInfo.name || !checkoutInfo.phone || !checkoutInfo.address}
                >
                  تأكيد الطلب
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;