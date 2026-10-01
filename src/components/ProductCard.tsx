import { Link } from 'react-router-dom';
import type { Product } from '../data/types';

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  return (
    <div className="border border-gray-800 bg-gray-950 rounded-xl p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />
      <h3 className="font-bold text-lg text-blue-300">{product.name}</h3>
      <p className="text-sm text-blue-400 flex-grow">{product.description}</p>
      <div className="flex gap-2 mt-4">
        <Link
          to={`/product/${product.id}`}
          className="flex-1 text-center border border-blue-800 text-blue-300 hover:bg-blue-950 transition py-2 rounded-full font-medium"
        >
          View More
        </Link>
        <Link
          to={`/product/${product.id}`}
          className="flex-1 text-center bg-gradient-to-r from-pink-500 to-violet-500 text-white py-2 rounded-full font-medium"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;