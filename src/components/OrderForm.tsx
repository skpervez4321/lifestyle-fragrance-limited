import { useState } from 'react';
import { toast } from 'react-toastify';
import type { Product, ProductSize } from '../data/types';

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyIxt2VP5LeAi964j1cekIsBfARFgdcGnGX2J7TBlEsIDUJmYV7bS6Z3DCmp6rv8ubY/exec';

interface Props {
  product: Product;
  selectedSize: ProductSize;
  onClose: () => void;
}

function OrderForm({ product, selectedSize, onClose }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      toast.warning('Please fill in name, phone, and address.');
      return;
    }
    setSubmitting(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          product: product.name,
          size: selectedSize.ml,
          price: selectedSize.price,
          name,
          phone,
          address,
          note,
        }),
      });

      toast.success('Order submitted! We will contact you soon.');
      onClose();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-1 text-blue-300">{product.name} — {selectedSize.ml}ml</h2>
        <p className="text-blue-400 mb-4">৳{selectedSize.price}</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-black border border-gray-700 text-blue-200 rounded-lg px-3 py-2 placeholder:text-gray-600"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-black border border-gray-700 text-blue-200 rounded-lg px-3 py-2 placeholder:text-gray-600"
          />
          <textarea
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="bg-black border border-gray-700 text-blue-200 rounded-lg px-3 py-2 placeholder:text-gray-600"
            rows={3}
          />
          <textarea
            placeholder="Note (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="bg-black border border-gray-700 text-blue-200 rounded-lg px-3 py-2 placeholder:text-gray-600"
            rows={2}
          />

          <div className="flex gap-2 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-gray-700 text-blue-300 py-2 rounded-full font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 bg-gradient-to-r from-pink-500 to-violet-500 text-white py-2 rounded-full font-medium disabled:opacity-50"
            >
              {submitting ? 'Submitting...' : 'Confirm Order'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;