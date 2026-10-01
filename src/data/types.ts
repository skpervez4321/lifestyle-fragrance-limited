export interface ProductSize {
  ml: number;
  price: number;
  stock: number;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  images: string[];
  description: string;
  sizes: ProductSize[];
  reviews: Review[];
}