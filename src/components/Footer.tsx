import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="border-t border-gray-800 px-10 py-10 mt-10 text-sm bg-black">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="text-blue-300">© 2026 Lifestyle Fragrance Limited. All rights reserved.</div>
        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=61568881706953"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-300 hover:text-blue-100 transition"
          >
            <FaFacebook className="text-blue-600" size={18} />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/lifestylefragrancelimited/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-300 hover:text-blue-100 transition"
          >
            <FaInstagram className="text-pink-500" size={18} />
            Instagram
          </a>
          <a
            href="https://wa.me/8801819395135"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-300 hover:text-blue-100 transition"
          >
            <FaWhatsapp className="text-green-500" size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;