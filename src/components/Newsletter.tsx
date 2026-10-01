import { useState } from 'react';
import { toast } from 'react-toastify';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.warning('Please enter your email.');
      return;
    }
    // TODO: পরে চাইলে এটাও Google Sheet এ জমা করা যাবে, আপাতত শুধু UI
    toast.success('Thanks for subscribing!');
    setEmail('');
  };

  return (
    <section className="px-10 py-10 border-t border-gray-800">
      <h2 className="text-xl font-bold text-blue-300 mb-3">Stay Updated</h2>
      <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-black border border-gray-700 text-blue-200 rounded-full px-4 py-2 placeholder:text-gray-600"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-5 py-2 rounded-full font-medium"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default Newsletter;