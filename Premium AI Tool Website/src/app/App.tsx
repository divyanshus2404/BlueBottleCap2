import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { NewLandingPage } from './pages/NewLandingPage';
import { ToolsPage } from './pages/ToolsPage';
import { PricingPage } from './pages/PricingPage';
import { AIRewriterTool } from './pages/tools/AIRewriterTool';
import { PDFCompressorTool } from './pages/tools/PDFCompressorTool';
import { ResumeBuilderTool } from './pages/tools/ResumeBuilderTool';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewLandingPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/pricing" element={<PricingPage />} />

        {/* Tool Pages */}
        <Route path="/tool/ai-rewriter" element={<AIRewriterTool />} />
        <Route path="/tool/pdf-compressor" element={<PDFCompressorTool />} />
        <Route path="/tool/resume-builder" element={<ResumeBuilderTool />} />

        {/* Redirect all other tool routes to tools page */}
        <Route path="/tool/*" element={<Navigate to="/tools" replace />} />
        <Route path="/tools/*" element={<Navigate to="/tools" replace />} />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}