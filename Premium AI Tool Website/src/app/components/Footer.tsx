import { Droplet } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Droplet className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Bluebottlecap
              </span>
            </Link>
            <p className="text-gray-600 max-w-sm">
              The AI-powered writing assistant that helps students write better, faster, and more confidently.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-gray-900">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/tools" className="text-gray-600 hover:text-blue-600 transition-colors">
                  All Tools
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/tool/ai-rewriter" className="text-gray-600 hover:text-blue-600 transition-colors">
                  AI Rewriter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-gray-900">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © 2026 Bluebottlecap. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
