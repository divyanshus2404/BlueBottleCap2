import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Upload, Download, Check } from 'lucide-react';
import { Navbar } from '../../components/Navbar';

export function PDFCompressorTool() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile && uploadedFile.type === 'application/pdf') {
      setFile(uploadedFile);
      setOriginalSize(uploadedFile.size);
      setIsComplete(false);
    }
  };

  const handleCompress = async () => {
    if (!file) return;

    setIsProcessing(true);

    // Simulate compression
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock compression (60% of original size)
    setCompressedSize(Math.floor(originalSize * 0.6));
    setIsProcessing(false);
    setIsComplete(true);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  const compressionPercent = originalSize > 0 ? Math.round(((originalSize - compressedSize) / originalSize) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50/30 via-white to-orange-50/20">
      <Navbar />

      <div className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-4">
              <FileText className="w-4 h-4 text-red-600" />
              <span className="text-sm text-red-700">PDF Tool - Free</span>
            </div>

            <h1 className="text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              PDF Compressor
            </h1>
            <p className="text-xl text-gray-600">
              Reduce your PDF file size without losing quality
            </p>
          </motion.div>

          {/* Upload Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 mb-8"
          >
            {!file ? (
              <label className="cursor-pointer block">
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-blue-400 hover:bg-blue-50/50 transition-all">
                  <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl mb-2 text-gray-900">Upload PDF file</h3>
                  <p className="text-gray-600">Click to browse or drag and drop</p>
                </div>
              </label>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-gray-900">{file.name}</h4>
                      <p className="text-sm text-gray-500">{formatFileSize(originalSize)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setFile(null);
                      setIsComplete(false);
                    }}
                    className="text-gray-500 hover:text-red-600 transition-colors"
                  >
                    Remove
                  </button>
                </div>

                {isComplete && (
                  <div className="p-6 bg-green-50 rounded-2xl border border-green-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-green-900">Compression complete!</h4>
                        <p className="text-sm text-green-700">
                          Reduced by {compressionPercent}% • New size: {formatFileSize(compressedSize)}
                        </p>
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition-all">
                      <Download className="w-5 h-5" />
                      Download Compressed PDF
                    </button>
                  </div>
                )}

                {!isComplete && (
                  <button
                    onClick={handleCompress}
                    disabled={isProcessing}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl hover:shadow-lg hover:shadow-red-500/30 transition-all disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Compressing...
                      </>
                    ) : (
                      <>
                        <FileText className="w-5 h-5" />
                        Compress PDF
                      </>
                    )}
                  </button>
                )}
              </div>
            )}
          </motion.div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-gray-100">
              <h4 className="mb-2 text-gray-900">High Quality</h4>
              <p className="text-sm text-gray-600">Maintain PDF quality while reducing size</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-gray-100">
              <h4 className="mb-2 text-gray-900">Fast Processing</h4>
              <p className="text-sm text-gray-600">Compress PDFs in seconds</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-gray-100">
              <h4 className="mb-2 text-gray-900">Secure</h4>
              <p className="text-sm text-gray-600">Files are deleted after processing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
