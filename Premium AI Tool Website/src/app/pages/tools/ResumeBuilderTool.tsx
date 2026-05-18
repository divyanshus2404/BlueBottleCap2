import { motion } from 'motion/react';
import { Briefcase, Crown, Lock } from 'lucide-react';
import { Link } from 'react-router';
import { Navbar } from '../../components/Navbar';

export function ResumeBuilderTool() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50/30 via-white to-purple-50/20">
      <Navbar />

      <div className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full mb-4">
              <Lock className="w-4 h-4" />
              <span className="text-sm">Premium Tool</span>
            </div>

            <h1 className="text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Resume Builder
            </h1>
            <p className="text-xl text-gray-600">
              Create professional, ATS-friendly resumes in minutes
            </p>
          </motion.div>

          {/* Premium Lock Screen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-12 text-center text-white shadow-2xl mb-8"
          >
            <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Crown className="w-10 h-10" />
            </div>

            <h2 className="text-3xl mb-4">Unlock Premium Features</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get access to Resume Builder, ATS Checker, Cover Letter Generator, and all premium tools with Pro or Elite plan
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="px-8 py-4 bg-white text-purple-600 rounded-2xl hover:shadow-2xl transition-all text-lg"
              >
                View Pricing Plans
              </Link>
              <Link
                to="/tools"
                className="px-8 py-4 bg-white/20 backdrop-blur-xl text-white rounded-2xl hover:bg-white/30 transition-all text-lg border border-white/30"
              >
                Browse Free Tools
              </Link>
            </div>
          </motion.div>

          {/* Preview Section */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl mb-6 text-gray-900">What you'll get with Pro:</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-lg text-gray-900">Professional Templates</h4>
                </div>
                <p className="text-gray-600">Choose from 20+ ATS-friendly resume templates</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                    <span className="text-white">✓</span>
                  </div>
                  <h4 className="text-lg text-gray-900">ATS Optimization</h4>
                </div>
                <p className="text-gray-600">Ensure your resume passes ATS screening</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                    <span className="text-white">AI</span>
                  </div>
                  <h4 className="text-lg text-gray-900">AI Content Suggestions</h4>
                </div>
                <p className="text-gray-600">Get AI-powered bullet point suggestions</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <span className="text-white">PDF</span>
                  </div>
                  <h4 className="text-lg text-gray-900">Export Options</h4>
                </div>
                <p className="text-gray-600">Download as PDF, Word, or print directly</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200">
              <h4 className="mb-4 text-gray-900">Also included in Pro:</h4>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  Cover Letter Generator
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  LinkedIn Bio Generator
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  Unlimited AI Tools
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500">✓</span>
                  Priority Support
                </li>
              </ul>
            </div>
          </div>

          {/* Pricing CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 mb-4">
              Join thousands of students getting hired with professional resumes
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all text-lg"
            >
              <Crown className="w-5 h-5" />
              Unlock Pro - Starting at ₹199/month
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
