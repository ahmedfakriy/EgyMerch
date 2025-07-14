import React from 'react';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" dir="rtl">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-teal-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                EgyMerch 🅂
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              متجرك الأول للملابس الرياضية والتيشيرتات المميزة. نقدم لك أفضل التصميمات بأعلى جودة وأفضل الأسعار.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/ahmedfikryfauz?locale=ar_AR"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-blue-500 hover:text-blue-400 cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/ahmed_fekry_fauz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-400 cursor-pointer" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">الرئيسية</button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors">المنتجات</button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">من نحن</button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">اتصل بنا</button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">معلومات التواصل</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>01023099469</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>EgyMerchinfo@egymerch.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2">طرق الدفع:</h4>
              <div className="text-sm text-gray-300">
                <p>📱 فودافون كاش: 01023099469</p>
                <p>🏦 حساب بنكي</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 EgyMerch. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
