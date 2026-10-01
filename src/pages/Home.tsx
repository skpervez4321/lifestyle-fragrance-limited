import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import OfferBanner from '../components/OfferBanner';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';

function Home() {
  const [search, setSearch] = useState('');

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen">
      <OfferBanner />

      <section className="px-10 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-300">
          Lifestyle Fragrance <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Limited</span>
        </h1>
        <p className="text-blue-400 mt-3 max-w-xl mx-auto">
          Premium fragrances crafted for every moment.
        </p>
      </section>

      <section className="px-10 py-10">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <h2 className="text-2xl font-bold text-blue-300">Our Products</h2>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-950 border border-gray-700 text-blue-200 rounded-full px-4 py-2 placeholder:text-gray-600"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-blue-400 mt-6">No products found.</p>
        )}
      </section>

      <FAQ />
      <Newsletter />
    </div>
  );
}

export default Home;