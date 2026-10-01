import type { Product } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: "Vampire Blood",
    image: "/images/vampire-blood-poster.png",
    images: [
      "/images/vampire-blood-poster.png",
      "/images/vampire-4corner.png",
      "/images/vampire-rounded.png",
      "/images/vampire-sample.png",
    ],
    description: "Bold, long-lasting oriental fragrance.",
    sizes: [
      { ml: 3, price: 150, stock: 10 },
      { ml: 6, price: 280, stock: 8 },
      { ml: 10, price: 450, stock: 5 },
      { ml: 15, price: 650, stock: 4 },
      { ml: 30, price: 1200, stock: 2 },
      { ml: 50, price: 1900, stock: 1 },
      { ml: 100, price: 3500, stock: 1 },
    ],
    reviews: [
      { name: "Rafi", rating: 5, comment: "Amazing scent, lasts all day!" },
      { name: "Nadia", rating: 4, comment: "Bold and unique, love it." },
    ],
  },
  {
    id: 2,
    name: "Cool Water",
    image: "/images/cool-water-poster.png",
    images: [
      "/images/cool-water-poster.png",
      "/images/bleu-de-channel-4corner.jpg",
      "/images/bleu-de-channel-rounded.jpg",
    ],
    description: "Fresh, aquatic scent for everyday wear.",
    sizes: [
      { ml: 3, price: 140, stock: 10 },
      { ml: 6, price: 260, stock: 8 },
      { ml: 10, price: 420, stock: 5 },
      { ml: 15, price: 600, stock: 4 },
      { ml: 30, price: 1100, stock: 2 },
      { ml: 50, price: 1750, stock: 1 },
      { ml: 100, price: 3200, stock: 1 },
    ],
    reviews: [
      { name: "Tanvir", rating: 5, comment: "Very fresh, perfect for summer." },
    ],
  },
  {
    id: 3,
    name: "Swiss Ferdous",
    image: "/images/swiss-ferdous-poster.png",
    images: [
      "/images/swiss-ferdous-poster.png",
      "/images/safe-for-skin.jpg",
      "/images/hero-image.jpg",
    ],
    description: "Elegant, premium fragrance for special occasions.",
    sizes: [
      { ml: 3, price: 160, stock: 10 },
      { ml: 6, price: 300, stock: 8 },
      { ml: 10, price: 480, stock: 5 },
      { ml: 15, price: 700, stock: 4 },
      { ml: 30, price: 1300, stock: 2 },
      { ml: 50, price: 2000, stock: 1 },
      { ml: 100, price: 3700, stock: 1 },
    ],
    reviews: [
      { name: "Sadia", rating: 5, comment: "Elegant and long-lasting, worth it." },
    ],
  },
];