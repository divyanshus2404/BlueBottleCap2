import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Image, Sparkles, GraduationCap, Zap, Briefcase, Lock, Search } from 'lucide-react';
import { Link } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface Tool {
  name: string;
  description: string;
  link: string;
  isPremium: boolean;
  category: string;
}

export function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Tools', icon: Zap, color: 'from-gray-500 to-gray-600' },
    { id: 'pdf', name: 'PDF Tools', icon: FileText, color: 'from-red-500 to-red-600' },
    { id: 'image', name: 'Image Tools', icon: Image, color: 'from-purple-500 to-purple-600' },
    { id: 'ai', name: 'AI Tools', icon: Sparkles, color: 'from-blue-500 to-blue-600' },
    { id: 'student', name: 'Student Tools', icon: GraduationCap, color: 'from-green-500 to-green-600' },
    { id: 'quick', name: 'Quick Tools', icon: Zap, color: 'from-yellow-500 to-yellow-600' },
    { id: 'career', name: 'Career Tools', icon: Briefcase, color: 'from-indigo-500 to-indigo-600' },
  ];

  const tools: Tool[] = [
    // PDF Tools
    { name: 'PDF Compressor', description: 'Reduce PDF file size', link: '/tool/pdf-compressor', isPremium: false, category: 'pdf' },
    { name: 'Merge PDF', description: 'Combine multiple PDFs', link: '/tool/merge-pdf', isPremium: false, category: 'pdf' },
    { name: 'Split PDF', description: 'Split PDF into pages', link: '/tool/split-pdf', isPremium: false, category: 'pdf' },
    { name: 'Rotate PDF', description: 'Rotate PDF pages', link: '/tool/rotate-pdf', isPremium: false, category: 'pdf' },
    { name: 'PDF to Word', description: 'Convert PDF to editable Word', link: '/tool/pdf-to-word', isPremium: true, category: 'pdf' },
    { name: 'Word to PDF', description: 'Convert Word to PDF', link: '/tool/word-to-pdf', isPremium: true, category: 'pdf' },
    { name: 'Image to PDF', description: 'Convert images to PDF', link: '/tool/image-to-pdf', isPremium: false, category: 'pdf' },
    { name: 'PDF to JPG', description: 'Convert PDF to images', link: '/tool/pdf-to-jpg', isPremium: false, category: 'pdf' },

    // Image Tools
    { name: 'Image Compressor', description: 'Reduce image file size', link: '/tool/image-compressor', isPremium: false, category: 'image' },
    { name: 'Image Resizer', description: 'Resize images easily', link: '/tool/image-resizer', isPremium: false, category: 'image' },
    { name: 'Crop Image', description: 'Crop images to size', link: '/tool/crop-image', isPremium: false, category: 'image' },
    { name: 'JPG to PNG', description: 'Convert JPG to PNG', link: '/tool/jpg-to-png', isPremium: false, category: 'image' },
    { name: 'Background Remover', description: 'Remove image background', link: '/tool/background-remover', isPremium: true, category: 'image' },
    { name: 'OCR Image to Text', description: 'Extract text from images', link: '/tool/ocr', isPremium: true, category: 'image' },

    // AI Tools
    { name: 'AI Rewriter', description: 'Rewrite text with AI', link: '/tool/ai-rewriter', isPremium: false, category: 'ai' },
    { name: 'Paraphrasing Tool', description: 'Advanced paraphrasing', link: '/tool/paraphrase', isPremium: true, category: 'ai' },
    { name: 'Grammar Checker', description: 'Fix grammar errors', link: '/tool/grammar-checker', isPremium: false, category: 'ai' },
    { name: 'Question Generator', description: 'Generate questions from text', link: '/tool/question-generator', isPremium: true, category: 'ai' },
    { name: 'Answer Generator', description: 'Get answers to questions', link: '/tool/answer-generator', isPremium: true, category: 'ai' },
    { name: 'Summary Generator', description: 'Summarize long text', link: '/tool/summarizer', isPremium: true, category: 'ai' },
    { name: 'Email Generator', description: 'Write professional emails', link: '/tool/email-generator', isPremium: true, category: 'ai' },
    { name: 'Caption Generator', description: 'Create social captions', link: '/tool/caption-generator', isPremium: true, category: 'ai' },

    // Student Tools
    { name: 'Assignment Formatter', description: 'Format assignments properly', link: '/tool/assignment-formatter', isPremium: true, category: 'student' },
    { name: 'Flashcard Generator', description: 'Create study flashcards', link: '/tool/flashcard-generator', isPremium: true, category: 'student' },
    { name: 'Study Planner', description: 'Plan your study schedule', link: '/tool/study-planner', isPremium: true, category: 'student' },
    { name: 'Notes to Questions', description: 'Generate questions from notes', link: '/tool/notes-to-questions', isPremium: true, category: 'student' },
    { name: 'Topic Explainer', description: 'Explain topics simply', link: '/tool/topic-explainer', isPremium: true, category: 'student' },

    // Quick Tools
    { name: 'Word Counter', description: 'Count words and characters', link: '/tool/word-counter', isPremium: false, category: 'quick' },
    { name: 'Case Converter', description: 'Change text case', link: '/tool/case-converter', isPremium: false, category: 'quick' },
    { name: 'Remove Extra Spaces', description: 'Clean up text spacing', link: '/tool/remove-spaces', isPremium: false, category: 'quick' },
    { name: 'Remove Line Breaks', description: 'Remove line breaks', link: '/tool/remove-breaks', isPremium: false, category: 'quick' },

    // Career Tools
    { name: 'Resume Builder', description: 'Build professional resume', link: '/tool/resume-builder', isPremium: true, category: 'career' },
    { name: 'ATS Checker', description: 'Check resume ATS score', link: '/tool/ats-checker', isPremium: true, category: 'career' },
    { name: 'Cover Letter Generator', description: 'Generate cover letters', link: '/tool/cover-letter', isPremium: true, category: 'career' },
    { name: 'LinkedIn Bio Generator', description: 'Create LinkedIn bio', link: '/tool/linkedin-bio', isPremium: true, category: 'career' },
  ];

  const filteredTools = tools.filter((tool) => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      <div className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              All Tools
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              40+ tools to boost your productivity
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 transition-all text-gray-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <Link
                  to={tool.link}
                  className="group block p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 relative"
                >
                  {tool.isPremium && (
                    <div className="absolute top-3 right-3 p-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg shadow-lg">
                      <Lock className="w-3 h-3 text-white" />
                    </div>
                  )}

                  <h3 className="text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-gray-600">{tool.description}</p>

                  <div className="mt-4 text-blue-600 group-hover:translate-x-1 transition-transform inline-block">
                    →
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No tools found matching your search</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
