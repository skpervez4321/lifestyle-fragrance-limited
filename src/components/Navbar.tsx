import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800 sticky top-0 bg-black z-50">
      <Link to="/" className="text-xl font-bold">
        <span className="text-blue-300">Lifestyle</span>
        <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"> Fragrance</span>
        <span className="text-blue-400"> Limited</span>
      </Link>
    </nav>
  );
}

export default Navbar;