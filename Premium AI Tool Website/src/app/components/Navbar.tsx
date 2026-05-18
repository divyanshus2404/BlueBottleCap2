import { Droplet, Crown } from 'lucide-react';
import { Link } from 'react-router';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              <Droplet className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Bluebottlecap
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Home
            </Link>
            <Link to="/tools" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Tools
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Pricing
            </Link>
            <Link
              to="/pricing"
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-sm"
            >
              <Crown className="w-4 h-4" />
              Upgrade
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
