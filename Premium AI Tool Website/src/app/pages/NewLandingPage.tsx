import { motion } from 'motion/react';
import { ArrowRight, Sparkles, FileText, Image, Zap, GraduationCap, Briefcase, Crown } from 'lucide-react';
import { Link } from 'react-router';
import { Navbar } from '../components/Navbar';
import { ToolCategoryCard } from '../components/ToolCategoryCard';
import { Footer } from '../components/Footer';

export function NewLandingPage() {
  const categories = [
    {
      icon: FileText,
      title: 'PDF Tools',
      description: 'Compress, merge, split, rotate, and convert PDFs with ease',
      toolCount: 8,
      isPremium: false,
      link: '/tools/pdf',
      color: 'bg-gradient-to-br from-red-500 to-red-600',
    },
    {
      icon: Image,
      title: 'Image Tools',
      description: 'Compress, resize, crop, and convert images instantly',
      toolCount: 6,
      isPremium: false,
      link: '/tools/image',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    },
    {
      icon: Sparkles,
      title: 'AI Tools',
      description: 'Rewrite, paraphrase, and generate content with AI',
      toolCount: 10,
      isPremium: true,
      link: '/tools/ai',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    {
      icon: GraduationCap,
      title: 'Student Tools',
      description: 'Assignment formatter, flashcards, study planner, and more',
      toolCount: 7,
      isPremium: true,
      link: '/tools/student',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
    },
    {
      icon: Zap,
      title: 'Quick Tools',
      description: 'Word counter, case converter, and text utilities',
      toolCount: 5,
      isPremium: false,
      link: '/tools/quick',
      color: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
    },
    {
      icon: Briefcase,
      title: 'Career Tools',
      description: 'Resume builder, ATS checker, cover letter generator',
      toolCount: 4,
      isPremium: true,
      link: '/tools/career',
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent font-medium">
                40+ Tools in One Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl lg:text-7xl font-semibold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight"
            >
              All the tools you need,
              <br />
              in one place
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              From PDF editing to AI-powered writing, image processing to career tools—everything students need to succeed
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/tools"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 text-lg"
              >
                Browse all tools
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-2xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 text-lg"
              >
                <Crown className="w-5 h-5" />
                View pricing
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div>
                <div className="text-4xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  40+
                </div>
                <div className="text-gray-600 mt-2">Tools</div>
              </div>
              <div>
                <div className="text-4xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  100K+
                </div>
                <div className="text-gray-600 mt-2">Users</div>
              </div>
              <div>
                <div className="text-4xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Free
                </div>
                <div className="text-gray-600 mt-2">to start</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Explore by category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything from basic utilities to advanced AI-powered tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <ToolCategoryCard
                key={category.title}
                {...category}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Premium */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Start free, upgrade when ready
            </h2>
            <p className="text-xl text-gray-600">
              Get access to essential tools for free, unlock premium features anytime
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-200"
            >
              <div className="text-3xl mb-4">🆓</div>
              <h3 className="text-2xl mb-4 text-gray-900">Free Tools</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>All PDF tools (compress, merge, split)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Image tools (resize, crop, convert)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Quick text utilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Limited AI usage (5 uses/day)</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 rounded-3xl border-2 border-blue-300 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm rounded-full flex items-center gap-1.5 shadow-lg">
                <Crown className="w-4 h-4" />
                Premium
              </div>
              <div className="text-3xl mb-4">💎</div>
              <h3 className="text-2xl mb-4 text-gray-900">Pro Tools</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Unlimited AI tools (rewrite, paraphrase)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Student Pro (assignment formatter, flashcards)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Career tools (resume builder, ATS checker)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Advanced features (OCR, background remover)</span>
                </li>
              </ul>
              <Link
                to="/pricing"
                className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 w-full"
              >
                View pricing
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
