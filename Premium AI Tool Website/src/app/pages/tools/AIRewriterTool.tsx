import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Copy, Check, RefreshCw, Crown } from 'lucide-react';
import { Link } from 'react-router';
import { Navbar } from '../../components/Navbar';

export function AIRewriterTool() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [usageCount, setUsageCount] = useState(0);
  const maxFreeUsage = 5;

  const handleRewrite = async () => {
    if (!inputText.trim() || usageCount >= maxFreeUsage) return;

    setIsGenerating(true);
    setOutputText('');

    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    const mockOutput = `${inputText.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}. This version has been rewritten with improved clarity and flow while maintaining your original message.`;

    setOutputText(mockOutput);
    setUsageCount(prev => prev + 1);
    setIsGenerating(false);
  };

  const handleCopy = async () => {
    if (!outputText) return;
    await navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isLimitReached = usageCount >= maxFreeUsage;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20">
      <Navbar />

      <div className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-700">AI Tool</span>
            </div>

            <h1 className="text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              AI Rewriter
            </h1>
            <p className="text-xl text-gray-600">
              Rewrite your text with improved clarity and flow
            </p>

            {/* Usage Counter */}
            <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl border border-gray-200">
              <span className="text-gray-700">
                Daily usage: {usageCount}/{maxFreeUsage}
              </span>
              {isLimitReached && (
                <Link
                  to="/pricing"
                  className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg text-sm hover:shadow-lg transition-all"
                >
                  <Crown className="w-3 h-3" />
                  Upgrade
                </Link>
              )}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            >
              <h2 className="text-xl mb-4 text-gray-900">Input Text</h2>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste your text here..."
                className="w-full h-64 p-4 bg-gray-50 rounded-2xl border border-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 transition-all text-gray-700"
                disabled={isLimitReached}
              />
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">{inputText.length} characters</span>
                <button
                  onClick={handleRewrite}
                  disabled={!inputText.trim() || isGenerating || isLimitReached}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl hover:shadow-lg hover:shadow-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Rewriting...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="w-4 h-4" />
                      Rewrite
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Output */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-xl border border-blue-100"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl text-gray-900">Rewritten Text</h2>
                {outputText && (
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all text-sm"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-600" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                )}
              </div>

              <div className="w-full h-64 p-4 bg-white/50 rounded-2xl border border-blue-200 overflow-y-auto">
                {outputText ? (
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{outputText}</p>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-400">Your rewritten text will appear here</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Upgrade Banner */}
          {isLimitReached && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 bg-gradient-to-r from-purple-600 to-purple-500 rounded-3xl text-white text-center"
            >
              <Crown className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl mb-2">Daily limit reached</h3>
              <p className="mb-6 text-purple-100">
                Upgrade to Pro for unlimited AI rewrites and access to all premium tools
              </p>
              <Link
                to="/pricing"
                className="inline-block px-8 py-3 bg-white text-purple-600 rounded-2xl hover:shadow-2xl transition-all"
              >
                View Pricing
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
