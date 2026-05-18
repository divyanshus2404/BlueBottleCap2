import { motion } from 'motion/react';
import { Check, Crown, Zap, Star, Rocket } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function PricingPage() {
  const plans = [
    {
      name: 'Free',
      icon: Zap,
      price: '₹0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        'All basic PDF tools',
        'All image tools',
        'Quick text utilities',
        'Limited AI usage (5/day)',
        'Basic file size limits',
        'Watermark on some exports',
      ],
      cta: 'Start Free',
      ctaLink: '/tools',
      popular: false,
      gradient: 'from-gray-500 to-gray-600',
    },
    {
      name: 'Basic',
      icon: Star,
      price: '₹99',
      period: 'month',
      description: 'For regular users',
      features: [
        'Everything in Free',
        'Increased AI usage (20/day)',
        'Faster processing',
        'No watermark on exports',
        'Larger file size limits',
        'Priority support',
      ],
      cta: 'Get Basic',
      ctaLink: '#',
      popular: false,
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Pro',
      icon: Crown,
      price: '₹199',
      period: 'month',
      description: 'Most popular for students',
      features: [
        'Everything in Basic',
        'Unlimited AI tools',
        'Assignment formatter',
        'Flashcard generator',
        'Study planner',
        'Resume builder',
        'ATS checker',
        'Cover letter generator',
        'Advanced PDF features',
        'Background remover',
        'OCR (Image to text)',
      ],
      cta: 'Get Pro',
      ctaLink: '#',
      popular: true,
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Elite',
      icon: Rocket,
      price: '₹349',
      period: 'month',
      description: 'For power users',
      features: [
        'Everything in Pro',
        'Highest quality AI outputs',
        'Bulk file processing',
        'Unlimited file conversions',
        'Advanced image tools',
        'API access (coming soon)',
        'White-label exports',
        'Dedicated support',
        'Early access to new features',
      ],
      cta: 'Get Elite',
      ctaLink: '#',
      popular: false,
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      <div className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Simple, transparent pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the plan that's right for you
            </p>

            {/* Save with Annual */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 border border-green-200 rounded-2xl">
              <span className="text-green-700">💰</span>
              <span className="text-green-800">
                Save 20% with annual billing
              </span>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative p-8 bg-white rounded-3xl border-2 transition-all duration-300 ${
                    plan.popular
                      ? 'border-purple-300 shadow-2xl shadow-purple-500/20 scale-105'
                      : 'border-gray-200 hover:border-blue-200 hover:shadow-xl'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm rounded-full shadow-lg">
                      Most Popular
                    </div>
                  )}

                  <div className={`w-14 h-14 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl mb-2 text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-semibold text-gray-900">{plan.price}</span>
                      {plan.price !== '₹0' && (
                        <span className="text-gray-500">/{plan.period}</span>
                      )}
                    </div>
                  </div>

                  <a
                    href={plan.ctaLink}
                    className={`block w-full py-3 rounded-2xl text-center transition-all duration-300 mb-8 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/30'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </a>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl mb-8 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Frequently asked questions
            </h2>

            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl border border-gray-200">
                <h3 className="text-lg mb-2 text-gray-900">Can I switch plans anytime?</h3>
                <p className="text-gray-600">
                  Yes! You can upgrade, downgrade, or cancel your subscription at any time.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-200">
                <h3 className="text-lg mb-2 text-gray-900">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards, debit cards, UPI, and net banking.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-200">
                <h3 className="text-lg mb-2 text-gray-900">Is there a student discount?</h3>
                <p className="text-gray-600">
                  Yes! Students get 30% off on all paid plans with a valid student ID.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-200">
                <h3 className="text-lg mb-2 text-gray-900">What happens if I cancel?</h3>
                <p className="text-gray-600">
                  You'll keep access to premium features until the end of your billing period, then automatically switch to the free plan.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
