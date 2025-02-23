export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  nutrition?: {
    calories?: string;
    protein?: string;
    fat?: string;
    calcium?: string;
    sugar?: string;
    sodium?: string;
    antioxidants?: string;
    caffeine?: string;
    fiber?: string;
    iron?: string;
    vitamins?: string;
    carbs?: string;
  };
  features?: {
    type?: string;
    skin_type?: string;
    benefits?: string;
    hair_type?: string;
    usage?: string;
    clothes_type?: string;
    duration?: string;
    ingredients?: string;
    durability?: string;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
}