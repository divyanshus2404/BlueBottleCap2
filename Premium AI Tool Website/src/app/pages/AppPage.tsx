import { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Button } from '../components/Button';
import { Sparkles, Copy, Check, RefreshCw, FileText, Minimize2, Maximize2 } from 'lucide-react';

type Mode = 'rewrite' | 'formal' | 'expand' | 'simplify';

export function AppPage() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedMode, setSelectedMode] = useState<Mode>('rewrite');

  const handleGenerate = async (mode: Mode) => {
    if (!inputText.trim()) return;

    setSelectedMode(mode);
    setIsGenerating(true);
    setOutputText('');

    // Simulate AI processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Mock outputs based on mode
    const mockOutputs: Record<Mode, string> = {
      rewrite: `Here's an improved version of your text:\n\n${inputText.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}. This revision enhances clarity and flow while maintaining your original message.`,
      formal: `Dear Reader,\n\nI am writing to present the following information in a professional manner: ${inputText}. I trust this formal approach meets your requirements.\n\nBest regards`,
      expand: `${inputText}\n\nTo elaborate further on this topic, it's important to consider the broader context and implications. This perspective allows for a more comprehensive understanding of the subject matter. Additionally, exploring related aspects can provide valuable insights that enhance the overall discussion and contribute to a more thorough analysis of the key points presented.`,
      simplify: inputText.length > 50
        ? `In short: ${inputText.split(' ').slice(0, 10).join(' ')}... (simplified)`
        : `Simply put: ${inputText}`,
    };

    setOutputText(mockOutputs[mode]);
    setIsGenerating(false);
  };

  const handleCopy = async () => {
    if (!outputText) return;
    await navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const modes = [
    { id: 'rewrite' as Mode, label: 'Rewrite', icon: RefreshCw },
    { id: 'formal' as Mode, label: 'Formal', icon: FileText },
    { id: 'expand' as Mode, label: 'Expand', icon: Maximize2 },
    { id: 'simplify' as Mode, label: 'Simplify', icon: Minimize2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20">
      <Navbar />

      <div className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Transform your writing
            </h1>
            <p className="text-xl text-gray-600">
              Choose a mode and watch your text improve instantly
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl text-gray-900">Input</h2>
                <span className="text-sm text-gray-500">{inputText.length} characters</span>
              </div>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type or paste your text here..."
                className="w-full h-64 p-6 bg-gray-50 rounded-2xl border border-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 transition-all text-gray-700 placeholder:text-gray-400"
              />

              <div className="mt-6 flex flex-wrap gap-3">
                {modes.map((mode) => (
                  <Button
                    key={mode.id}
                    onClick={() => handleGenerate(mode.id)}
                    variant={selectedMode === mode.id ? 'primary' : 'outline'}
                    icon={mode.icon}
                    disabled={!inputText.trim() || isGenerating}
                    loading={isGenerating && selectedMode === mode.id}
                  >
                    {mode.label}
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Output Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-xl shadow-blue-200/30 border border-blue-100"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl text-gray-900">Output</h2>
                {outputText && (
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all text-sm text-gray-700"
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

              <div className="w-full h-64 p-6 bg-white/50 rounded-2xl border border-blue-200 overflow-y-auto">
                {isGenerating ? (
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 animate-pulse">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-600">Generating...</p>
                  </div>
                ) : outputText ? (
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{outputText}</p>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-400">Your improved text will appear here</p>
                  </div>
                )}
              </div>

              {outputText && !isGenerating && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <Button
                    onClick={() => handleGenerate(selectedMode)}
                    variant="secondary"
                    icon={RefreshCw}
                    fullWidth
                  >
                    Regenerate
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Quick Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100"
          >
            <h3 className="text-xl mb-4 text-gray-900">Quick Tips</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-blue-50 rounded-2xl">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3">
                  <RefreshCw className="w-5 h-5 text-white" />
                </div>
                <h4 className="mb-2 text-gray-900">Rewrite</h4>
                <p className="text-sm text-gray-600">Improve clarity and flow</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-2xl">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-3">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h4 className="mb-2 text-gray-900">Formal</h4>
                <p className="text-sm text-gray-600">Professional tone for essays</p>
              </div>
              <div className="p-4 bg-green-50 rounded-2xl">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-3">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
                <h4 className="mb-2 text-gray-900">Expand</h4>
                <p className="text-sm text-gray-600">Add depth and detail</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-2xl">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-3">
                  <Minimize2 className="w-5 h-5 text-white" />
                </div>
                <h4 className="mb-2 text-gray-900">Simplify</h4>
                <p className="text-sm text-gray-600">Make it concise and clear</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
