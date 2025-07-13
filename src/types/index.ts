export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutInfo {
  name: string;
  phone: string;
  address: string;
  paymentMethod: 'vodafone' | 'bank';
}