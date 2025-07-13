import React, { useState } from 'react';
import { X, Plus, Edit, Trash2, Save, Upload } from 'lucide-react';
import { Product } from '../types';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onProductsUpdate: (products: Product[]) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  products,
  onProductsUpdate
}) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    originalPrice: '',
    image: '',
    category: 'تيشيرت',
    description: '',
    isNew: false,
    isBestSeller: false
  });

  const categories = [
    'تيشيرت', 'هودي', 'أوفر سايز', 'تيشيرت بكم', 'سويتشيرت', 
    'هودي أوفر سايز', 'تيشيرت أطفال', 'هودي أطفال', 'أواني جاينا', 
    'تابلوهات', 'شنط توتي باج', 'شنط ظهر', 'شنطة يد', 'محفظة'
  ];

  const resetForm = () => {
    setFormData({
      name: '',
      price: '',
      originalPrice: '',
      image: '',
      category: 'تيشيرت',
      description: '',
      isNew: false,
      isBestSeller: false
    });
    setEditingProduct(null);
    setShowAddForm(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price || !formData.image || !formData.description) {
      alert('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    const newProduct: Product = {
      id: editingProduct ? editingProduct.id : Date.now(),
      name: formData.name,
      price: parseInt(formData.price),
      originalPrice: formData.originalPrice ? parseInt(formData.originalPrice) : undefined,
      image: formData.image,
      category: formData.category,
      description: formData.description,
      isNew: formData.isNew,
      isBestSeller: formData.isBestSeller
    };

    let updatedProducts;
    if (editingProduct) {
      updatedProducts = products.map(p => p.id === editingProduct.id ? newProduct : p);
    } else {
      updatedProducts = [...products, newProduct];
    }

    // حفظ في localStorage
    localStorage.setItem('egymerch_products', JSON.stringify(updatedProducts));
    onProductsUpdate(updatedProducts);
    
    alert(editingProduct ? 'تم تحديث المنتج بنجاح!' : 'تم إضافة المنتج بنجاح!');
    resetForm();
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price.toString(),
      originalPrice: product.originalPrice?.toString() || '',
      image: product.image,
      category: product.category,
      description: product.description,
      isNew: product.isNew || false,
      isBestSeller: product.isBestSeller || false
    });
    setShowAddForm(true);
  };

  const handleDelete = (productId: number) => {
    if (confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
      const updatedProducts = products.filter(p => p.id !== productId);
      localStorage.setItem('egymerch_products', JSON.stringify(updatedProducts));
      onProductsUpdate(updatedProducts);
      alert('تم حذف المنتج بنجاح!');
    }
  };

  const exportProducts = () => {
    const dataStr = JSON.stringify(products, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'egymerch_products.json';
    link.click();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-8">
      <div className="bg-white w-full max-w-6xl h-[90vh] overflow-y-auto rounded-lg shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b bg-teal-600 text-white">
          <h2 className="text-2xl font-bold" dir="rtl">لوحة تحكم المنتجات</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Action Buttons */}
          <div className="flex gap-4 mb-6" dir="rtl">
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              إضافة منتج جديد
            </button>
            <button
              onClick={exportProducts}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <Upload className="w-5 h-5" />
              تصدير المنتجات
            </button>
            <div className="text-gray-600">
              إجمالي المنتجات: <span className="font-bold">{products.length}</span>
            </div>
          </div>

          {/* Add/Edit Form */}
          {showAddForm && (
            <div className="bg-gray-50 p-6 rounded-lg mb-6" dir="rtl">
              <h3 className="text-xl font-bold mb-4">
                {editingProduct ? 'تعديل المنتج' : 'إضافة منتج جديد'}
              </h3>
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">اسم المنتج *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">الفئة *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">السعر الحالي (ج) *</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">السعر الأصلي (ج)</label>
                  <input
                    type="number"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData({...formData, originalPrice: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">رابط الصورة *</label>
                  <input
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    placeholder="https://images.pexels.com/..."
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">وصف المنتج *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    rows={3}
                    required
                  />
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.isNew}
                      onChange={(e) => setFormData({...formData, isNew: e.target.checked})}
                      className="mr-2"
                    />
                    <span>منتج جديد</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.isBestSeller}
                      onChange={(e) => setFormData({...formData, isBestSeller: e.target.checked})}
                      className="mr-2"
                    />
                    <span>الأكثر مبيعاً</span>
                  </label>
                </div>

                <div className="md:col-span-2 flex gap-3">
                  <button
                    type="submit"
                    className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 flex items-center gap-2"
                  >
                    <Save className="w-5 h-5" />
                    {editingProduct ? 'تحديث المنتج' : 'إضافة المنتج'}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
                  >
                    إلغاء
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Products List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white border rounded-lg p-4 shadow-sm">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-32 object-cover rounded mb-3"
                />
                <div dir="rtl">
                  <h3 className="font-bold text-sm mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{product.category}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-teal-600 font-bold">{product.price} ج</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">{product.originalPrice} ج</span>
                    )}
                  </div>
                  <div className="flex gap-1 mb-3">
                    {product.isNew && (
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">جديد</span>
                    )}
                    {product.isBestSeller && (
                      <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded">مبيعاً</span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="flex-1 bg-blue-500 text-white py-1 px-2 rounded text-xs hover:bg-blue-600 flex items-center justify-center gap-1"
                    >
                      <Edit className="w-3 h-3" />
                      تعديل
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="flex-1 bg-red-500 text-white py-1 px-2 rounded text-xs hover:bg-red-600 flex items-center justify-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      حذف
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;