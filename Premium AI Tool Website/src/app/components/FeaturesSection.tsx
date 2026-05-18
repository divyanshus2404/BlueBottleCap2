import { Zap, RefreshCw, Sparkles, MessageSquare, FileText, Lightbulb } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get instant results in seconds. No waiting, no hassle. Just type and transform.',
    },
    {
      icon: RefreshCw,
      title: 'Smart Rewriting',
      description: 'AI-powered rewriting that maintains your message while improving clarity and tone.',
    },
    {
      icon: Sparkles,
      title: 'Multiple Modes',
      description: 'Choose from Formal, Casual, Expand, Simplify, and more to fit any situation.',
    },
    {
      icon: MessageSquare,
      title: 'Perfect for Messages',
      description: 'Write better emails, texts, and messages that sound professional and polished.',
    },
    {
      icon: FileText,
      title: 'Assignment Helper',
      description: 'Transform your rough drafts into well-written assignments with proper structure.',
    },
    {
      icon: Lightbulb,
      title: 'Smart Suggestions',
      description: 'Get intelligent suggestions that improve grammar, style, and overall readability.',
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Everything you need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features to help you write better, faster, and more confidently
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
