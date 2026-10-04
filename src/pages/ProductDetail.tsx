import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';
import OrderForm from '../components/OrderForm';
import StarRating from '../components/StarRating';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [mainImage, setMainImage] = useState(product?.image);
  const [showFullImage, setShowFullImage] = useState(false);
  const [showOrderForm, setShowOrderForm] = useState(false);

  if (!product) return <div className="p-10 bg-black min-h-screen text-blue-300">Product not found.</div>;

  const whatsappMessage = selectedSize
    ? `Hi, I want to order ${product.name} (${selectedSize.ml}ml) - ৳${selectedSize.price}`
    : `Hi, I want to order ${product.name}`;
  const whatsappLink = `https://wa.me/8801819395135?text=${encodeURIComponent(whatsappMessage)}`;

  const notifyMessage = `Hi, please notify me when ${product.name} (${selectedSize?.ml}ml) is back in stock.`;
  const notifyLink = `https://wa.me/8801819395135?text=${encodeURIComponent(notifyMessage)}`;

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="px-10 py-10 max-w-3xl mx-auto bg-black min-h-screen">
      <Link to="/" className="text-sm text-blue-400 hover:text-blue-200 transition">
        ← Back to all products
      </Link>

      <img
        src={mainImage}
        alt={product.name}
        onClick={() => setShowFullImage(true)}
        className="w-full max-h-96 object-cover rounded-xl cursor-pointer mt-4"
      />

      <div className="flex gap-2 mt-3">
        {product.images.map((img) => (
          <img
            key={img}
            src={img}
            onClick={() => setMainImage(img)}
            className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
              mainImage === img ? 'border-blue-400' : 'border-transparent'
            }`}
          />
        ))}
      </div>

      <h1 className="text-3xl font-bold mt-6 text-blue-300">{product.name}</h1>
      <p className="text-blue-400 mt-2">{product.description}</p>

      <div className="flex flex-wrap gap-3 mt-4 text-xs">
        <span className="bg-gray-900 text-blue-300 px-3 py-1 rounded-full">✓ 100% Authentic</span>
        <span className="bg-gray-900 text-blue-300 px-3 py-1 rounded-full">✓ Cash on Delivery</span>
        <span className="bg-gray-900 text-blue-300 px-3 py-1 rounded-full">✓ Safe Packaging</span>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2 text-blue-300">Select Size</h3>
        <div className="flex flex-wrap gap-3">
          {product.sizes.map((s) => (
            <button
              key={s.ml}
              onClick={() => setSelectedSize(s)}
              disabled={s.stock === 0}
              className={`px-4 py-2 rounded-full border transition text-blue-300
                ${selectedSize?.ml === s.ml ? 'bg-blue-950 border-blue-400' : 'border-gray-700'}
                hover:bg-blue-950 hover:border-blue-500
                ${s.stock === 0 ? 'opacity-40 cursor-not-allowed' : ''}`}
            >
              {s.ml}ml
            </button>
          ))}
        </div>
      </div>

      {selectedSize && (
        <div className="mt-6">
          <p className="text-2xl font-bold text-blue-200">৳{selectedSize.price}</p>
          <p className="text-sm text-blue-400">
            {selectedSize.stock > 0 ? `${selectedSize.stock} in stock` : 'Out of stock'}
          </p>
        </div>
      )}

      <div className="flex gap-3 mt-6 flex-wrap">
        {selectedSize && selectedSize.stock > 0 ? (
          <>
            <button
              onClick={() => setShowOrderForm(true)}
              className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-3 rounded-full font-medium transition-shadow duration-300 hover:shadow-[0_0_16px_2px_rgba(139,92,246,0.6)]"
            >
              Order Now
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-600 text-green-500 hover:bg-green-950 transition px-6 py-3 rounded-full font-medium"
            >
              Order via WhatsApp
            </a>
          </>
        ) : (
          <a
            href={notifyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-yellow-600 text-yellow-400 hover:bg-yellow-950 transition px-6 py-3 rounded-full font-medium"
          >
            Notify Me When Available
          </a>
        )}
      </div>

      <div className="mt-10">
        <h3 className="font-semibold mb-3 text-blue-300">Customer Reviews</h3>
        <div className="flex flex-col gap-3">
          {product.reviews.map((r, i) => (
            <div key={i} className="border border-gray-800 rounded-lg p-3">
              <div className="flex justify-between">
                <span className="text-blue-300 font-medium">{r.name}</span>
                <StarRating rating={r.rating} />
              </div>
              <p className="text-blue-400 text-sm mt-1">{r.comment}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-semibold mb-3 text-blue-300">You Might Also Like</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {related.map((p) => (
            <Link
              key={p.id}
              to={`/product/${p.id}`}
              className="border border-gray-800 rounded-lg p-3 hover:border-blue-500 transition"
            >
              <img src={p.image} className="w-full h-24 object-cover rounded mb-2" />
              <p className="text-blue-300 text-sm font-medium">{p.name}</p>
            </Link>
          ))}
        </div>
      </div>

      {showFullImage && (
        <div
          onClick={() => setShowFullImage(false)}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-pointer"
        >
          <img src={mainImage} className="max-w-[90%] max-h-[90%] rounded-lg" />
        </div>
      )}

      {showOrderForm && selectedSize && (
        <OrderForm
          product={product}
          selectedSize={selectedSize}
          onClose={() => setShowOrderForm(false)}
        />
      )}
    </div>
  );
}

export default ProductDetail;