import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-700">AI-Powered Writing Assistant</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl lg:text-7xl font-semibold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
          >
            Fix your text in seconds
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Rewrite, improve, and generate better content instantly with the power of AI
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/app"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 text-lg"
            >
              Try it now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 border border-gray-100"
          >
            <div className="flex flex-col gap-4">
              <div className="relative">
                <div className="absolute -top-3 left-4 px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                  Input
                </div>
                <textarea
                  readOnly
                  value="hey can u help me with this assignment its due tomorrow and i need to make it sound better thx"
                  className="w-full p-6 bg-gray-50 rounded-2xl border border-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-700"
                  rows={3}
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-3 left-4 px-3 py-1 bg-blue-100 rounded-full text-xs text-blue-700">
                  Output
                </div>
                <div className="w-full p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-200">
                  <p className="text-gray-700">
                    Hello, I would appreciate your assistance with this assignment. It's due tomorrow, and I'd like to improve the quality of my writing. Thank you for your help.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
