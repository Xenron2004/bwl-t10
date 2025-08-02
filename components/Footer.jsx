import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold text-yellow-400">RSPL</span>
            </div>
            <p className="text-gray-400 text-sm">
              Rajasthan State Premier League - Where cricket dreams come true.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/#teams" className="text-gray-400 hover:text-yellow-400 transition-colors">Teams</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link href="/guidelines" className="text-gray-400 hover:text-yellow-400 transition-colors">Guidelines</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-yellow-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/refund" className="text-gray-400 hover:text-yellow-400 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <FiMail size={16} />
                <span>info@rspl.cricket</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FiPhone size={16} />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <FiMapPin size={16} />
                <span>Jaipur, Rajasthan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Rajasthan State Premier League. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}