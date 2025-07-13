import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'مانشستر سيتي - Manchester city تيشيرت',
    price: 340,
    originalPrice: 525,
    image: 'https://images.pexels.com/photos/9558808/pexels-photo-9558808.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'تيشيرت',
    description: 'تيشيرت مانشستر سيتي الرسمي بجودة عالية'
  },
  {
    id: 2,
    name: 'جيكة - هودي قطن',
    price: 570,
    originalPrice: 745,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'هودي',
    description: 'هودي قطن مريح ودافئ'
  },
  {
    id: 3,
    name: 'الأهلي - هجوم الحاجلة - تيشيرت بكم',
    price: 390,
    originalPrice: 575,
    image: 'https://images.pexels.com/photos/8832883/pexels-photo-8832883.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'تيشيرت',
    description: 'تيشيرت الأهلي بكم طويل'
  },
  {
    id: 4,
    name: 'هجوم العمالقة - تيشيرت بكم',
    price: 420,
    originalPrice: 610,
    image: 'https://images.pexels.com/photos/9775476/pexels-photo-9775476.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'تيشيرت',
    description: 'تيشيرت أنيمي هجوم العمالقة',
    isBestSeller: true
  },
  {
    id: 5,
    name: 'ليفربول - تيشيرت رياضي',
    price: 345,
    originalPrice: 500,
    image: 'https://images.pexels.com/photos/9558804/pexels-photo-9558804.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'تيشيرت',
    description: 'تيشيرت ليفربول الأحمر الكلاسيكي'
  },
  {
    id: 6,
    name: 'الأهلي - تيشيرت أحمر',
    price: 385,
    originalPrice: 550,
    image: 'https://images.pexels.com/photos/8832895/pexels-photo-8832895.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'تيشيرت',
    description: 'تيشيرت النادي الأهلي الأحمر الرسمي'
  },
  {
    id: 7,
    name: 'هودي أسود كلاسيكي',
    price: 480,
    originalPrice: 650,
    image: 'https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'هودي',
    description: 'هودي أسود كلاسيكي مريح'
  },
  {
    id: 8,
    name: 'تيشيرت أبيض كاجوال',
    price: 320,
    originalPrice: 450,
    image: 'https://images.pexels.com/photos/8500607/pexels-photo-8500607.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'تيشيرت',
    description: 'تيشيرت أبيض بسيط وأنيق',
    isNew: true
  },
  {
    id: 9,
    name: 'ريال مدريد - تيشيرت أبيض',
    price: 380,
    originalPrice: 520,
    image: 'https://images.pexels.com/photos/8832876/pexels-photo-8832876.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'تيشيرت',
    description: 'تيشيرت ريال مدريد الأبيض الرسمي'
  },
  {
    id: 10,
    name: 'برشلونة - تيشيرت أزرق',
    price: 375,
    originalPrice: 510,
    image: 'https://images.pexels.com/photos/9558802/pexels-photo-9558802.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'تيشيرت',
    description: 'تيشيرت برشلونة الأزرق الكلاسيكي',
    isBestSeller: true
  },
  {
    id: 11,
    name: 'هودي رمادي عادي',
    price: 450,
    originalPrice: 600,
    image: 'https://images.pexels.com/photos/7319338/pexels-photo-7319338.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'هودي',
    description: 'هودي رمادي كاجوال مريح'
  },
  {
    id: 12,
    name: 'تيشيرت أنيمي - ناروتو',
    price: 410,
    originalPrice: 580,
    image: 'https://images.pexels.com/photos/9775477/pexels-photo-9775477.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'تيشيرت',
    description: 'تيشيرت أنيمي ناروتو بتصميم مميز',
    isNew: true
  },
  {
    id: 13,
    name: 'الزمالك - تيشيرت أبيض',
    price: 365,
    originalPrice: 495,
    image: 'https://images.pexels.com/photos/8500608/pexels-photo-8500608.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'تيشيرت',
    description: 'تيشيرت الزمالك الأبيض الرسمي'
  },
  {
    id: 14,
    name: 'هودي أسود مع جيب',
    price: 520,
    originalPrice: 720,
    image: 'https://images.pexels.com/photos/7319339/pexels-photo-7319339.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'هودي',
    description: 'هودي أسود بجيب أمامي كبير'
  },
  // تيشيرت أوفر سايز
  {
    id: 15,
    name: 'تيشيرت أوفر سايز - أسود',
    price: 420,
    originalPrice: 580,
    image: 'https://images.pexels.com/photos/9775476/pexels-photo-9775476.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'أوفر سايز',
    description: 'تيشيرت أوفر سايز مريح وعصري',
    isNew: true
  },
  {
    id: 16,
    name: 'تيشيرت أوفر سايز - رمادي',
    price: 450,
    originalPrice: 620,
    image: 'https://images.pexels.com/photos/8500607/pexels-photo-8500607.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'أوفر سايز',
    description: 'تيشيرت أوفر سايز رمادي كاجوال'
  },
  // تيشيرت بكم
  {
    id: 17,
    name: 'تيشيرت بكم طويل - أبيض',
    price: 380,
    originalPrice: 520,
    image: 'https://images.pexels.com/photos/8832883/pexels-photo-8832883.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'تيشيرت بكم',
    description: 'تيشيرت بكم طويل أبيض كلاسيكي'
  },
  {
    id: 18,
    name: 'تيشيرت بكم طويل - أسود',
    price: 390,
    originalPrice: 540,
    image: 'https://images.pexels.com/photos/9775477/pexels-photo-9775477.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'تيشيرت بكم',
    description: 'تيشيرت بكم طويل أسود أنيق'
  },
  // سويتشيرت
  {
    id: 19,
    name: 'سويتشيرت قطني - بيج',
    price: 480,
    originalPrice: 650,
    image: 'https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'سويتشيرت',
    description: 'سويتشيرت قطني مريح بلون بيج'
  },
  {
    id: 20,
    name: 'سويتشيرت رياضي - أزرق',
    price: 520,
    originalPrice: 700,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'سويتشيرت',
    description: 'سويتشيرت رياضي أزرق عالي الجودة',
    isBestSeller: true
  },
  // هودي أوفر سايز
  {
    id: 21,
    name: 'هودي أوفر سايز - رمادي',
    price: 580,
    originalPrice: 780,
    image: 'https://images.pexels.com/photos/7319338/pexels-photo-7319338.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'هودي أوفر سايز',
    description: 'هودي أوفر سايز رمادي فاخر'
  },
  {
    id: 22,
    name: 'هودي أوفر سايز - أسود',
    price: 620,
    originalPrice: 850,
    image: 'https://images.pexels.com/photos/7319339/pexels-photo-7319339.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'هودي أوفر سايز',
    description: 'هودي أوفر سايز أسود مميز',
    isNew: true
  },
  // ملابس أطفال - تيشيرت أطفال
  {
    id: 23,
    name: 'تيشيرت أطفال - أزرق',
    price: 180,
    originalPrice: 250,
    image: 'https://images.pexels.com/photos/9558808/pexels-photo-9558808.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'تيشيرت أطفال',
    description: 'تيشيرت أطفال أزرق مريح'
  },
  {
    id: 24,
    name: 'تيشيرت أطفال - أحمر',
    price: 190,
    originalPrice: 260,
    image: 'https://images.pexels.com/photos/8832895/pexels-photo-8832895.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'تيشيرت أطفال',
    description: 'تيشيرت أطفال أحمر جميل'
  },
  // هودي أطفال
  {
    id: 25,
    name: 'هودي أطفال - رمادي',
    price: 280,
    originalPrice: 380,
    image: 'https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'هودي أطفال',
    description: 'هودي أطفال رمادي دافئ'
  },
  {
    id: 26,
    name: 'هودي أطفال - أسود',
    price: 300,
    originalPrice: 420,
    image: 'https://images.pexels.com/photos/7319339/pexels-photo-7319339.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'هودي أطفال',
    description: 'هودي أطفال أسود أنيق'
  },
  // أواني جاينا
  {
    id: 27,
    name: 'كوب جاينا - أبيض',
    price: 120,
    originalPrice: 180,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'أواني جاينا',
    description: 'كوب جاينا أبيض عالي الجودة'
  },
  {
    id: 28,
    name: 'طقم أواني جاينا',
    price: 350,
    originalPrice: 500,
    image: 'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'أواني جاينا',
    description: 'طقم أواني جاينا كامل'
  },
  // تابلوهات
  {
    id: 29,
    name: 'تابلوه عصري - أسود وأبيض',
    price: 250,
    originalPrice: 350,
    image: 'https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'تابلوهات',
    description: 'تابلوه عصري بتصميم أسود وأبيض'
  },
  {
    id: 30,
    name: 'تابلوه ملون - طبيعة',
    price: 280,
    originalPrice: 400,
    image: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'تابلوهات',
    description: 'تابلوه ملون بمناظر طبيعية'
  },
  // شنط توتي باج
  {
    id: 31,
    name: 'شنطة توتي باج - بيج',
    price: 220,
    originalPrice: 320,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'شنط توتي باج',
    description: 'شنطة توتي باج بيج عملية'
  },
  {
    id: 32,
    name: 'شنطة توتي باج - أسود',
    price: 240,
    originalPrice: 340,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'شنط توتي باج',
    description: 'شنطة توتي باج أسود أنيق'
  },
  // شنط ظهر
  {
    id: 33,
    name: 'شنطة ظهر رياضية - أسود',
    price: 380,
    originalPrice: 520,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'شنط ظهر',
    description: 'شنطة ظهر رياضية أسود متينة'
  },
  {
    id: 34,
    name: 'شنطة ظهر كاجوال - رمادي',
    price: 420,
    originalPrice: 580,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'شنط ظهر',
    description: 'شنطة ظهر كاجوال رمادي عملية'
  },
  // شنطة يد
  {
    id: 35,
    name: 'شنطة يد جلد - بني',
    price: 450,
    originalPrice: 650,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'شنطة يد',
    description: 'شنطة يد جلد بني فاخرة'
  },
  {
    id: 36,
    name: 'شنطة يد عصرية - أسود',
    price: 380,
    originalPrice: 520,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'شنطة يد',
    description: 'شنطة يد عصرية أسود أنيقة'
  },
  // محفظة
  {
    id: 37,
    name: 'محفظة جلد - أسود',
    price: 180,
    originalPrice: 250,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'محفظة',
    description: 'محفظة جلد أسود كلاسيكية'
  },
  {
    id: 38,
    name: 'محفظة صغيرة - بني',
    price: 150,
    originalPrice: 220,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'محفظة',
    description: 'محفظة صغيرة بني عملية'
  }
];